import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Event } from './event';
import { EventService } from './event.service';
import { colors } from '../../calendar-utils/colors';
import { CalendarEvent, CalendarEventAction } from 'angular-calendar';
import { Subject } from 'rxjs/Subject';

import {
  startOfDay, endOfDay, subDays, addDays,
  endOfMonth, isSameDay, isSameMonth, addHours
} from 'date-fns';

@Component({
  selector: 'app-events',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.events.component.html',
  styleUrls: ['./app.events.component.css']
})
export class AppEventsComponent implements OnInit {
  subTitle = 'Eventos xxx';
  apiEvents: Event[] = [];
  view: any = 'month';
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  refresh: Subject<any> = new Subject();
  activeDayIsOpen: any = true;

  editAction: CalendarEventAction = {
    label: '<i class="fa fa-fw fa-pencil"></i>',
    onClick: ({ event }: { event: CalendarEvent }): void => {
    this.handleEvent('Edited', event);
    }
  };

  deleteAction: CalendarEventAction = {
    label: '<i class="fa fa-fw fa-times"></i>',
    onClick: ({ event }: { event: CalendarEvent }): void => {
      this.events = this.events.filter(iEvent => iEvent !== event);
      this.handleEvent('Deleted', event);
    }
  };

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents().then(this.onInitImpl.bind(this));
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  handleEvent(action: string, event: CalendarEvent): void {
    console.log('handleEvent');
  }

  private onInitImpl(apiEvents: Event[]): Event[] {
    this.apiEvents = apiEvents;
    for (const apiEvent of this.apiEvents) {
      this.events.push(this.parseApiEvent(apiEvent));
    }
    this.refresh.next();
    return apiEvents;
  }

  private parseApiEvent(apiEvent: Event): CalendarEvent {
    const calendarEvent: CalendarEvent = {
      title: apiEvent.name,
      start: apiEvent.startTime,
      end: apiEvent.endTime,
      color: colors[apiEvent.color],
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    };

    calendarEvent.actions = new Array(0);
    if (apiEvent.isEditable) {
      calendarEvent.actions.push(this.editAction);
    }

    if (apiEvent.isDeletable) {
      calendarEvent.actions.push(this.deleteAction);
    }

    return calendarEvent;
  }

  refreshView(): void {
    this.refresh.next();
  }

}
