import { WorldManager, WorldObject, WorldObjectType } from "../world";
import { Helipad } from "./helipad";
import { Player } from "./player";
import { Rescuee, MovementState } from "./rescuee";

let rescuee: Rescuee;
let worldManager: WorldManager;

beforeEach(() => {
  worldManager = new WorldManager(
    new Player({
      objectType: WorldObjectType.PLAYER,
      x: 110,
      y: 100,
      width: 10,
      height: 10,
    })
  );

  rescuee = new Rescuee({
    objectType: WorldObjectType.RESCUEE,
    x: 100,
    y: 100,
    width: 10,
    height: 10,
  });
});

test("has speed", () => {
  expect(rescuee.getSpeed()).toBe(1);
  rescuee.setSpeed(10);
  expect(rescuee.getSpeed()).toBe(10);
});

test("can be assigned to a helipad", () => {
  const pad = new Helipad({
    objectType: WorldObjectType.HELIPAD,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  });
  expect(rescuee.getAssignedPad()).toBeFalsy();
  rescuee.assignToHelipad(pad);
  expect(rescuee.getAssignedPad()).toBe(pad);
});

test("stays still if player hasn't landed", () => {
  rescuee.doUpdate(worldManager);
  expect(rescuee.getAttachedObject().x).toBe(100);
});

test("moves right towards player if player has landed", () => {
  rescuee.handlePlayerLandedEvent(worldManager.getPlayer());
  rescuee.doUpdate(worldManager);
  expect(rescuee.isRescued()).toBeFalsy();
  expect(rescuee.getAttachedObject().x).toBe(101);
});

test("moves left towards player if player has landed", () => {
  rescuee.handlePlayerLandedEvent(worldManager.getPlayer());
  worldManager.getPlayer().getAttachedObject().x = 90;
  rescuee.doUpdate(worldManager);
  expect(rescuee.isRescued()).toBeFalsy();
  expect(rescuee.getAttachedObject().x).toBe(99);
});

test("moves right towards player at faster speed if player has landed", () => {
  rescuee.handlePlayerLandedEvent(worldManager.getPlayer());
  rescuee.setSpeed(3);
  rescuee.doUpdate(worldManager);
  expect(rescuee.isRescued()).toBeFalsy();
  expect(rescuee.getAttachedObject().x).toBe(103);
});

test("rescuee gets rescued if at helicopter coordinates", () => {
  rescuee.handlePlayerLandedEvent(worldManager.getPlayer());

  worldManager.getPlayer().getAttachedObject().x = 90;
  expect(rescuee.isRescued()).toBeFalsy();

  rescuee.getAttachedObject().x = 101;
  rescuee.doUpdate(worldManager);
  expect(rescuee.getAttachedObject().x).toBe(100);
  expect(rescuee.isRescued()).toBeFalsy();

  rescuee.doUpdate(worldManager);
  expect(rescuee.getAttachedObject().x).toBe(99);
  expect(rescuee.isRescued()).toBeFalsy();

  rescuee.doUpdate(worldManager);
  expect(rescuee.isRescued()).toBeTruthy();
});

test("doUpdate with no arguments returns false", () => {
  expect(rescuee.doUpdate()).toBeFalsy();
});

test("rescuee is ROAMING by default", () => {
  expect(rescuee.getMovementState()).toBe(MovementState.ROAMING);
});

test("handlePlayerLandedEvent: change movement state to BOARDING", () => {
  expect(rescuee.getMovementState()).toBe(MovementState.ROAMING);
  rescuee.handlePlayerLandedEvent(worldManager.getPlayer());
  expect(rescuee.getMovementState()).toBe(MovementState.BOARDING);
});

test("handlePlayerTakeoffEvent: change movement state to ROAMING", () => {
  expect(rescuee.getMovementState()).toBe(MovementState.ROAMING);
  rescuee.handlePlayerLandedEvent(worldManager.getPlayer());
  expect(rescuee.getMovementState()).toBe(MovementState.BOARDING);
  rescuee.handlePlayerTakeoffEvent(worldManager.getPlayer());
  expect(rescuee.getMovementState()).toBe(MovementState.ROAMING);
});

test("rescuee movement state is BOARDING if player is landed", () => {
  rescuee.handlePlayerLandedEvent(worldManager.getPlayer());
  expect(rescuee.getMovementState()).toBe(MovementState.BOARDING);
});

test("rescuee can be transferred to player", () => {
  const pad = new Helipad({
    objectType: WorldObjectType.HELIPAD,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  });
  pad.assignRescuee(rescuee);

  expect(pad.getRescuees().length).toBe(1);
  const player:Player = worldManager.getPlayer();
  player.setRescueeCapacity(2);
  expect(player.getCurrentRescueeCount()).toBe(0);
  rescuee.transferToPlayer(player);
  expect(player.getCurrentRescueeCount()).toBe(1);
  expect(rescuee.getAssignedPad()).toBeFalsy();
  expect(pad.getRescuees().length).toBe(0);
});

test("rescuee cannot be transferred to player twice", () => {
  const pad = new Helipad({
    objectType: WorldObjectType.HELIPAD,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  });
  pad.assignRescuee(rescuee);

  const player:Player = worldManager.getPlayer();
  player.setRescueeCapacity(2);
  expect(player.getCurrentRescueeCount()).toBe(0);
  rescuee.transferToPlayer(player);
  rescuee.transferToPlayer(player);
  expect(player.getCurrentRescueeCount()).toBe(1);
});