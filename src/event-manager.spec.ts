import { EventManager, WorldEvent, WorldEventType } from "./event-manager";
import { Rescuee } from "./actor/rescuee";
import { WorldObjectType } from "./world";
import { Basic } from "./actor/base/basic";

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

test("fired event has an optional source context", () => {
  let mainProps = {};
  eventManager.subscribe(WorldEventType.EVENT_PING, (props:object) => {
    mainProps = props;
  });

  const rescuee = new Rescuee({
    objectType: WorldObjectType.RESCUEE,
    x: 0,
    y: 0,
    width: 10,
    height: 10
  });

  eventManager.fireEvent(WorldEventType.EVENT_PING, {
    source: rescuee
  });
  expect(mainProps).toHaveProperty("source");
});