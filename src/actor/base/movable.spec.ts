import { WorldObject, WorldObjectType } from "../../world";
import { Helipad } from "../helipad";
import { Movable } from "./movable";

let movableObject: WorldObject;
let movableActor: Movable;

beforeEach(() => {
  movableObject = {
    objectType: WorldObjectType.PLAYER,
    x: 100,
    y: 100,
    width: 10,
    height: 10,
  };

  movableActor = new Movable(movableObject);
});

test("link movableActor actor to world object", () => {
  expect(movableActor.getAttachedObject()).toBe(movableObject);
});

test("move movableActor to the left", () => {
  movableActor.moveLeft(1);
  expect(movableActor.getAttachedObject().x).toBe(99);
});

test("move movableActor to the right", () => {
  movableActor.moveRight(1);
  expect(movableActor.getAttachedObject().x).toBe(101);
});

test("move movableActor up", () => {
  movableActor.moveUp(1);
  expect(movableActor.getAttachedObject().y).toBe(99);
});

test("move movableActor up", () => {
  movableActor.moveDown(1);
  expect(movableActor.getAttachedObject().y).toBe(101);
});

test("movableActor has collided", () => {
  const target: Helipad = new Helipad({
    objectType: WorldObjectType.HELIPAD,
    x: 100,
    y: 100,
    width: 10,
    height: 10,
  });

  expect(movableActor.hasCollidedWith(target)).toBeTruthy();
});
