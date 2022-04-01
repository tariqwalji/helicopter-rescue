import { WorldObject, WorldObjectType } from "../world";
import { Player } from "./player";

test("link player actor to world object", () => {
  const playerObj: WorldObject = {
    objectType: WorldObjectType.PLAYER,
    x: 100,
    y: 100,
  };
  const player = new Player(playerObj);
  expect(player.getAttachedObject()).toBe(playerObj);
});

test("move player to the left", () => {
  const playerObj: WorldObject = {
    objectType: WorldObjectType.PLAYER,
    x: 100,
    y: 100,
  };
  const player = new Player(playerObj);
  player.moveLeft(1);
  expect(player.getAttachedObject().x).toBe(99);
});

test("move player to the right", () => {
  const playerObj: WorldObject = {
    objectType: WorldObjectType.PLAYER,
    x: 100,
    y: 100,
  };
  const player = new Player(playerObj);
  player.moveRight(1);
  expect(player.getAttachedObject().x).toBe(101);
});

test("move player up", () => {
  const playerObj: WorldObject = {
    objectType: WorldObjectType.PLAYER,
    x: 100,
    y: 100,
  };
  const player = new Player(playerObj);
  player.moveUp(1);
  expect(player.getAttachedObject().y).toBe(99);
});

test("move player up", () => {
  const playerObj: WorldObject = {
    objectType: WorldObjectType.PLAYER,
    x: 100,
    y: 100,
  };
  const player = new Player(playerObj);
  player.moveDown(1);
  expect(player.getAttachedObject().y).toBe(101);
});
