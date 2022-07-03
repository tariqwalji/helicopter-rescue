import { EventManager, WorldEvent, WorldEventType } from "./event-manager";
import { Rescuee } from "./actor/rescuee";
import { WorldObjectType } from "./world";
import { Basic } from "./actor/base/basic";
import { Player } from "./actor/player";

let eventManager:EventManager;

beforeEach(() => {
  eventManager = new EventManager();
});

test("fired event has an source context", () => {
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
    source: rescuee,
    player: new Player({
      objectType: WorldObjectType.PLAYER,
      x: 0, y: 0, width: 10, height: 10
    })
  });
  expect(mainProps).toHaveProperty("source");
});