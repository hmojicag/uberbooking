import { EventType } from './EventType';
import { Place } from '../places/place';

export class Event {
  id: number;
  name: string;
  description: string;
  type: EventType;
  place: Place;
  startTime: Date;
  endTime: Date;
}
