import { Injectable } from '@angular/core';
import { Event } from './event';
import { Http } from '@angular/http';

@Injectable()
export class EventService {
  private eventsUrl = 'api/event';

  constructor(private http: Http) { }

  getEvents(): Promise<Event[]> {
    return this.http.get(this.eventsUrl)
      .toPromise()
      .then(this.getEventsImpl.bind(this))
      .catch(this.handleError);
  }

  private getEventsImpl(response): Event[] {
    console.log(response);
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
    if (error.status === 401) {
      // Unauthorized, call the login method with hardcoded user and pass
      // TODO: this should be changed later for a complete login feature
      // this.loginService.replaceMeLogin();
      console.error('Authorization Error, check Token');
    }
    return Promise.reject(error.message || error);
  }

}
