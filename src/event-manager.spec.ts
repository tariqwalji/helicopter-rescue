import { EventManager, WorldEvent, WorldEventType } from "./event-manager";

let eventManager:EventManager;

beforeEach(() => {
  eventManager = new EventManager();
});

test("can fire an event", () => {
  let eventWasFired = false;
  eventManager.subscribe(WorldEventType.EVENT_PING, () => {
    eventWasFired = true;
  });

  expect(eventWasFired).toBeFalsy();
  eventManager.fireEvent(WorldEventType.EVENT_PING);
  expect(eventWasFired).toBeTruthy();
});