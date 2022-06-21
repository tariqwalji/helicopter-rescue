import { Helipad } from "./helipad";
import { WorldObject, WorldObjectType } from "../world";
import { MovementState, Rescuee } from "./rescuee";
import { Player } from "./player";

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
  let rescueeObj: WorldObject = {
    objectType: WorldObjectType.RESCUEE,
    x: 100,
    y: 100,
    width: 10,
    height: 10,
  };

  let rescuee: Rescuee = new Rescuee(rescueeObj);

  const padObject: WorldObject = {
    objectType: WorldObjectType.HELIPAD,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  };
  const pad: Helipad = new Helipad(padObject);
  pad.assignRescuee(rescuee);

  expect(pad.getRescuees()).toContain(rescuee);
  expect(rescuee.getAssignedPad()).toBe(pad);
});

test("update pad that helicopter has landed", () => {
  let rescueeObj: WorldObject = {
    objectType: WorldObjectType.RESCUEE,
    x: 100,
    y: 100,
    width: 10,
    height: 10,
  };

  let rescuee: Rescuee = new Rescuee(rescueeObj);

  const padObject: WorldObject = {
    objectType: WorldObjectType.HELIPAD,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  };
  const pad: Helipad = new Helipad(padObject);
  pad.assignRescuee(rescuee);

  const player: Player = new Player({
    objectType: WorldObjectType.PLAYER,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  });

  expect(pad.isPlayerLanded()).toBeFalsy();
  pad.handlePlayerLandedEvent(player);
  expect(pad.isPlayerLanded()).toBeTruthy();
});

test("update pad that helicopter has taken off", () => {
  let rescueeObj: WorldObject = {
    objectType: WorldObjectType.RESCUEE,
    x: 100,
    y: 100,
    width: 10,
    height: 10,
  };

  let rescuee: Rescuee = new Rescuee(rescueeObj);

  const padObject: WorldObject = {
    objectType: WorldObjectType.HELIPAD,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  };
  const pad: Helipad = new Helipad(padObject);
  pad.assignRescuee(rescuee);

  const player: Player = new Player({
    objectType: WorldObjectType.PLAYER,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  });

  expect(pad.isPlayerLanded()).toBeFalsy();
  pad.handlePlayerLandedEvent(player);
  expect(pad.isPlayerLanded()).toBeTruthy();

  pad.handlePlayerTakeoffEvent(player);
  expect(pad.isPlayerLanded()).toBeFalsy();
});

test("inform rescuees helicopter player has landed", () => {
  let rescueeObj: WorldObject = {
    objectType: WorldObjectType.RESCUEE,
    x: 100,
    y: 100,
    width: 10,
    height: 10,
  };

  let rescuee: Rescuee = new Rescuee(rescueeObj);

  const padObject: WorldObject = {
    objectType: WorldObjectType.HELIPAD,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  };
  const pad: Helipad = new Helipad(padObject);
  pad.assignRescuee(rescuee);

  const player: Player = new Player({
    objectType: WorldObjectType.PLAYER,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  });

  expect(rescuee.getMovementState()).toBe(MovementState.ROAMING);
  pad.handlePlayerLandedEvent(player);
  expect(rescuee.getMovementState()).toBe(MovementState.BOARDING);
});

test("inform rescuees helicopter has taken off", () => {
  let rescueeObj: WorldObject = {
    objectType: WorldObjectType.RESCUEE,
    x: 100,
    y: 100,
    width: 10,
    height: 10,
  };

  let rescuee: Rescuee = new Rescuee(rescueeObj);

  const padObject: WorldObject = {
    objectType: WorldObjectType.HELIPAD,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  };
  const pad: Helipad = new Helipad(padObject);
  pad.assignRescuee(rescuee);

  const player: Player = new Player({
    objectType: WorldObjectType.PLAYER,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  });

  expect(rescuee.getMovementState()).toBe(MovementState.ROAMING);

  pad.handlePlayerLandedEvent(player);
  expect(rescuee.getMovementState()).toBe(MovementState.BOARDING);

  pad.handlePlayerTakeoffEvent(player);
  expect(rescuee.getMovementState()).toBe(MovementState.ROAMING);
});
