import { WorldObject, WorldObjectType } from "../world";
import { Player } from "./player";
import { Rescuee } from "./rescuee";

let rescueeObj: WorldObject;
let rescuee: Rescuee;

let playerObj: WorldObject;
let player: Player;

beforeEach(() => {
  rescueeObj = {
    objectType: WorldObjectType.RESCUEE,
    x: 100,
    y: 100,
  };

  playerObj = {
    objectType: WorldObjectType.PLAYER,
    x: 110,
    y: 100,
  };

  player = new Player(playerObj);
  rescuee = new Rescuee(player, rescueeObj);

});

test("has speed", () => {
  expect(rescuee.getSpeed()).toBe(1);
  rescuee.setSpeed(10);
  expect(rescuee.getSpeed()).toBe(10);
});

test("stays still if player hasn't landed", () => {
  rescuee.moveTowardsPlayer();
  expect(rescuee.getAttachedObject().x).toBe(100);
});

test("moves right towards player if player has landed", () => {
  player.hasLanded(true);
  rescuee.moveTowardsPlayer();
  expect(rescuee.getAttachedObject().x).toBe(101);
});

test("moves left towards player if player has landed", () => {
  rescueeObj = {
    objectType: WorldObjectType.RESCUEE,
    x: 100,
    y: 100,
  };

  playerObj = {
    objectType: WorldObjectType.PLAYER,
    x: 90,
    y: 100,
  };

  player = new Player(playerObj);
  rescuee = new Rescuee(player, rescueeObj);

  player.hasLanded(true);
  rescuee.moveTowardsPlayer();
  expect(rescuee.getAttachedObject().x).toBe(99);
});

test("moves right towards player at faster speed if player has landed", () => {
  player.hasLanded(true);
  rescuee.setSpeed(3);
  rescuee.moveTowardsPlayer();
  expect(rescuee.getAttachedObject().x).toBe(103);
});

test("rescuee gets rescued if at helicopter coordinates", () => {
  rescueeObj = {
    objectType: WorldObjectType.RESCUEE,
    x: 92,
    y: 100,
  };

  playerObj = {
    objectType: WorldObjectType.PLAYER,
    x: 90,
    y: 100,
  };

  player = new Player(playerObj);
  rescuee = new Rescuee(player, rescueeObj);

  player.hasLanded(true);

  expect(rescuee.isRescued()).toBeFalsy();

  rescuee.moveTowardsPlayer();  
  expect(rescuee.getAttachedObject().x).toBe(91);

  expect(rescuee.isRescued()).toBeFalsy();

  rescuee.moveTowardsPlayer();  
  expect(rescuee.getAttachedObject().x).toBe(90);
  expect(rescuee.isRescued()).toBeFalsy();

  rescuee.moveTowardsPlayer();  
  expect(rescuee.isRescued()).toBeTruthy();  
});




