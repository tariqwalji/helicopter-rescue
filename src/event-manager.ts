import { Basic } from "./actor/base/basic";
import { Player } from "./actor/player";

export enum WorldEventType {
  EVENT_PING,
  EVENT_PLAYER_LANDED,
  EVENT_PLAYER_TAKEOFF,
}

export interface WorldEvent {
  eventType:WorldEventType,
  callback:CallableFunction
}

export interface WorldEventProps {
  source: Basic,
  player: Player
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
  fireEvent(eventType:WorldEventType, props:WorldEventProps) {
    this.subscribers.filter((e) => e.eventType === eventType).forEach((e) => e.callback(props)); 
  }
}