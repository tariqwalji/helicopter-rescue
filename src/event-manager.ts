export enum WorldEventType {
  EVENT_PING
}

export interface WorldEvent {
  eventType:WorldEventType,
  callback:CallableFunction
}

export class EventManager { 
  private subscribers:WorldEvent[];
  constructor() {
    this.subscribers = [];
  }
  subscribe(eventType:WorldEventType, fn:CallableFunction) {
    this.subscribers.push({
      eventType,
      callback: fn
    });
  }
  fireEvent(eventType:WorldEventType) {
    this.subscribers.filter((e) => e.eventType === eventType).forEach((e) => e.callback()); 
  }
}