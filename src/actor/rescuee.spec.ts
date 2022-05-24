import {WorldManager, WorldObject, WorldObjectType} from "../world";
import { Player } from "./player";
import { Rescuee } from "./rescuee";

let rescueeObj: WorldObject;
let rescuee: Rescuee;

let playerObj: WorldObject;
let player: Player;

let worldManager: WorldManager;

beforeEach(() => {
  rescueeObj = {
    objectType: WorldObjectType.RESCUEE,
    x: 100,
    y: 100,
    width: 10,
    height: 10,
  };

  playerObj = {
    objectType: WorldObjectType.PLAYER,
    x: 110,
    y: 100,
    width: 10,
    height: 10,
  };

  player = new Player(playerObj);
  worldManager = new WorldManager(player);
  rescuee = new Rescuee(rescueeObj);

});

test("has speed", () => {
  expect(rescuee.getSpeed()).toBe(1);
  rescuee.setSpeed(10);
  expect(rescuee.getSpeed()).toBe(10);
});

test("stays still if player hasn't landed", () => {
  rescuee.doUpdate(worldManager);
  expect(rescuee.getAttachedObject().x).toBe(100);
});

test("moves right towards player if player has landed", () => {
  worldManager.getPlayer().hasLanded(true);
  rescuee.doUpdate(worldManager);
  expect(rescuee.getAttachedObject().x).toBe(101);
});

test("moves left towards player if player has landed", () => {
  worldManager.getPlayer().getAttachedObject().x = 90;
  worldManager.getPlayer().hasLanded(true);
  rescuee.doUpdate(worldManager);
  expect(rescuee.getAttachedObject().x).toBe(99);
});

test("moves right towards player at faster speed if player has landed", () => {
  worldManager.getPlayer().hasLanded(true);
  rescuee.setSpeed(3);
  rescuee.doUpdate(worldManager);
  expect(rescuee.getAttachedObject().x).toBe(103);
});

test("rescuee gets rescued if at helicopter coordinates", () => {
  worldManager.getPlayer().getAttachedObject().x = 90;
  worldManager.getPlayer().hasLanded(true);
  expect(rescuee.isRescued()).toBeFalsy();

  rescuee.getAttachedObject().x = 92;
  rescuee.doUpdate(worldManager);
  expect(rescuee.getAttachedObject().x).toBe(91);

  expect(rescuee.isRescued()).toBeFalsy();

  rescuee.doUpdate(worldManager);
  expect(rescuee.getAttachedObject().x).toBe(90);
  expect(rescuee.isRescued()).toBeFalsy();

  rescuee.doUpdate(worldManager);
  expect(rescuee.isRescued()).toBeTruthy();  
});

test("doUpdate with no arguments returns false", () => {
  expect(rescuee.doUpdate()).toBeFalsy();
});



