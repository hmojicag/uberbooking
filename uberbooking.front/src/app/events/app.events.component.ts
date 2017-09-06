import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Event } from './event';
import { EventService } from './event.service';
import { colors } from '../../calendar-utils/colors';
import { CalendarEvent } from 'angular-calendar';
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
    //this.modalData = { event, action };
    //this.modal.open(this.modalContent, { size: 'lg' });
  }

  private onInitImpl(apiEvents: Event[]): Event[] {
    this.apiEvents = apiEvents;
    for (const apiEvent of this.apiEvents) {
      this.events.push({
        title: apiEvent.name,
        start: apiEvent.startTime,
        end: apiEvent.endTime,
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      });
    }
    this.refresh.next();
    return apiEvents;
  }

  refreshView(): void {
    this.refresh.next();
  }

}
