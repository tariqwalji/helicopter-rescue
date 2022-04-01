import { WorldObject, WorldObjectType } from "../world";
import { Player } from "./player";

let playerObj: WorldObject;
let player: Player;

beforeEach(() => {
  playerObj = {
    objectType: WorldObjectType.PLAYER,
    x: 100,
    y: 100,
  };

  player = new Player(playerObj);
});

test("link player actor to world object", () => {
  expect(player.getAttachedObject()).toBe(playerObj);
});

test("move player to the left", () => {
  player.moveLeft(1);
  expect(player.getAttachedObject().x).toBe(99);
});

test("move player to the right", () => {
  player.moveRight(1);
  expect(player.getAttachedObject().x).toBe(101);
});

test("move player up", () => {
  player.moveUp(1);
  expect(player.getAttachedObject().y).toBe(99);
});

test("move player up", () => {
  player.moveDown(1);
  expect(player.getAttachedObject().y).toBe(101);
});

test("mark player as landed", () => {
  player.hasLanded(true);
  expect(player.isLanded()).toBeTruthy();
});

test("mark player as not landed", () => {
  player.hasLanded(false);
  expect(player.isLanded()).toBeFalsy();
});

