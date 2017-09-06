import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Event } from './event';
import { LogService } from '../log.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EventService {
  private eventsUrl = 'api/event';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private logService: LogService) { }

  getEvents(): Promise<Event[]> {
    return this.http.get(this.eventsUrl)
      .toPromise()
      .then(this.getEventsImpl.bind(this))
      .catch(this.handleError);
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

  private handleError(error: any): Promise<any> {
    console.error('Rompiste la internet!!!', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
