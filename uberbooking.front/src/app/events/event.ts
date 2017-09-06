import { EventType } from './EventType';
import { Place } from '../places/place';

export class Event {
  id: number;
  name: string;
  description: string;
  color: string;
  type: EventType;
  place: Place;
  startTime: Date;
  endTime: Date;
  isEditable: boolean;
  isDeletable: boolean;
}
