import { Injectable } from '@angular/core';
import { Event } from './event';
import { LogService } from '../log.service';
import { ApiHttpCallerService } from '../api-http-caller.service';
import {isUndefined} from "util";

@Injectable()
export class EventService {
  // private eventsUrl = 'api/event';
  private eventsUrl = 'event';

  constructor(private logService: LogService,
              private apiHttpCallerService: ApiHttpCallerService) { }

  getEvents(): Promise<Event[]> {
    /*return this.http.get(this.eventsUrl)
      .toPromise()
      .then(this.getEventsImpl.bind(this))
      .catch(this.handleError);*/
    let p = this.apiHttpCallerService.HttpGet(this.eventsUrl);
    let pEvents = null;
    if (!isUndefined(p)) {
      pEvents = p.then(this.getEventsImpl.bind(this));
    }

    return pEvents;
  }

  private getEventsImpl(response): Event[] {
    this.logService.Log(response.json(), 'Event Service', 'getEventsImpl');
    let apiEvents = response.json() as Event[];
    // Stupid Json parser won't parse dates (they will be left as strings)
    // map all items to parse one by one the Dates
    apiEvents = apiEvents.map(function (event: Event) {
      event.startTime = new Date(event.startTime);
      event.endTime = new Date(event.endTime);
      return event;
    });
    return apiEvents;
  }

}
