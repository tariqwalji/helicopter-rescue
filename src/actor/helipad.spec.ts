import { Helipad } from "./helipad";
import { WorldObject, WorldObjectType } from "../world";
import { MovementState, Rescuee } from "./rescuee";
import { Player } from "./player";
import { EventManager, WorldEventType } from "../event-manager";

test("helipad can be created", () => {
  const padObject: WorldObject = {
    objectType: WorldObjectType.HELIPAD,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  };
  const pad: Helipad = new Helipad(padObject);

  expect(pad.getAttachedObject()).toBe(padObject);
});

test("add rescuee to helipad", () => {
  let rescuee: Rescuee = new Rescuee({
    objectType: WorldObjectType.RESCUEE,
    x: 100,
    y: 100,
    width: 10,
    height: 10,
  });

  const pad: Helipad = new Helipad({
    objectType: WorldObjectType.HELIPAD,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  });
  pad.assignRescuee(rescuee);

  expect(pad.getRescuees()).toContain(rescuee);
  expect(rescuee.getAssignedPad()).toBe(pad);
});

test("get rescuee from helipad", () => {
  let rescuee: Rescuee = new Rescuee({
    objectType: WorldObjectType.RESCUEE,
    x: 100,
    y: 100,
    width: 10,
    height: 10,
  });

  const pad: Helipad = new Helipad({
    objectType: WorldObjectType.HELIPAD,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  });
  pad.assignRescuee(rescuee);

  expect(pad.getRescuees()).toContain(rescuee);
  expect(rescuee.getAssignedPad()).toBe(pad);

  expect(pad.getRescuee(rescuee)).toBe(rescuee);
});

test("remove rescuee from helipad", () => {
  let rescuee: Rescuee = new Rescuee({
    objectType: WorldObjectType.RESCUEE,
    x: 100,
    y: 100,
    width: 10,
    height: 10,
  });

  const pad: Helipad = new Helipad({
    objectType: WorldObjectType.HELIPAD,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  });
  pad.assignRescuee(rescuee);

  expect(pad.getRescuees()).toContain(rescuee);
  expect(rescuee.getAssignedPad()).toBe(pad);

  expect(pad.getRescuee(rescuee)).toBe(rescuee);
  pad.removeRescuee(rescuee);
  expect(pad.getRescuee(rescuee)).toBeFalsy();
});

test("update pad that helicopter has landed", () => {
  let rescuee: Rescuee = new Rescuee({
    objectType: WorldObjectType.RESCUEE,
    x: 100,
    y: 100,
    width: 10,
    height: 10,
  });

  const eventManager:EventManager = new EventManager();
  const pad: Helipad = new Helipad({
    objectType: WorldObjectType.HELIPAD,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  });
  pad.subscribeToEvents(eventManager);
  pad.assignRescuee(rescuee);

  const player: Player = new Player({
    objectType: WorldObjectType.PLAYER,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  });

  expect(pad.isPlayerLanded()).toBeFalsy();
  eventManager.fireEvent(WorldEventType.EVENT_PLAYER_LANDED, {
    source: pad,
    player: player
  });
  expect(pad.isPlayerLanded()).toBeTruthy();
});

test("update pad that helicopter has taken off", () => {
  let rescuee: Rescuee = new Rescuee({
    objectType: WorldObjectType.RESCUEE,
    x: 100,
    y: 100,
    width: 10,
    height: 10,
  });

  const eventManager:EventManager = new EventManager();
  const pad: Helipad = new Helipad({
    objectType: WorldObjectType.HELIPAD,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  });
  pad.subscribeToEvents(eventManager);
  pad.assignRescuee(rescuee);

  const player: Player = new Player({
    objectType: WorldObjectType.PLAYER,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  });

  expect(pad.isPlayerLanded()).toBeFalsy();
  eventManager.fireEvent(WorldEventType.EVENT_PLAYER_LANDED, {
    source: pad,
    player: player
  });
  expect(pad.isPlayerLanded()).toBeTruthy();

  eventManager.fireEvent(WorldEventType.EVENT_PLAYER_TAKEOFF, {
    source: pad,
    player: player
  });
  expect(pad.isPlayerLanded()).toBeFalsy();
});

test("helipad defaults to being pick-up point", () => {
  const pad: Helipad = new Helipad({
    objectType: WorldObjectType.HELIPAD,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  });

  expect(pad.isPickupPoint()).toBeTruthy();
});

test("set helipad status to drop-off point", () => {
  const pad: Helipad = new Helipad({
    objectType: WorldObjectType.HELIPAD,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  });

  expect(pad.isPickupPoint()).toBeTruthy();
  pad.switchToDropOffPoint();
  expect(pad.isDropOffPoint()).toBeTruthy();
});

test("helipad has default boundary edge of +/- 5 from x", () => {
  const pad: Helipad = new Helipad({
    objectType: WorldObjectType.HELIPAD,
    x: 50,
    y: 50,
    width: 10,
    height: 10,
  });

  expect(pad.getBoundaryEdge()).toMatchObject({ left: 45, right: 55 });
});

test("helipad can set left/right boundary edge", () => {
  const pad: Helipad = new Helipad({
    objectType: WorldObjectType.HELIPAD,
    x: 50,
    y: 50,
    width: 10,
    height: 10,
  });

  pad.setBoundaryEdge({ left: 25, right: 75 });
  expect(pad.getBoundaryEdge()).toMatchObject({ left: 25, right: 75 });
});
