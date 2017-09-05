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
    return response.json() as Event[];
  }

  private handleError(error: any): Promise<any> {
    console.error('Rompiste la internet!!!', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
