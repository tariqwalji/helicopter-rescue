import { WorldObject, WorldObjectType } from "../../world";
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
  const target: WorldObject = {
    objectType: WorldObjectType.HELIPAD,
    x: 100,
    y: 100,
    width: 10,
    height: 10
  }
  expect(movableActor.hasCollidedWith(target)).toBeTruthy();
})

test("movableActor not collided on positive x axis", () => {
  const target: WorldObject = {
    objectType: WorldObjectType.HELIPAD,
    x: 110,
    y: 100,
    width: 10,
    height: 10
  }
  expect(movableActor.hasCollidedWith(target)).toBeFalsy();
});

test("movableActor not collided on negative x axis", () => {
  const target: WorldObject = {
    objectType: WorldObjectType.HELIPAD,
    x: 90,
    y: 100,
    width: 10,
    height: 10
  }
  expect(movableActor.hasCollidedWith(target)).toBeFalsy();
});

test("movableActor not collided on positive y axis", () => {
  const target: WorldObject = {
    objectType: WorldObjectType.HELIPAD,
    x: 100,
    y: 110,
    width: 10,
    height: 10
  }
  expect(movableActor.hasCollidedWith(target)).toBeFalsy();
});

test("movableActor not collided on negative y axis", () => {
  const target: WorldObject = {
    objectType: WorldObjectType.HELIPAD,
    x: 100,
    y: 90,
    width: 10,
    height: 10
  }
  expect(movableActor.hasCollidedWith(target)).toBeFalsy();
});

test("is able to track collided objects", () => {
  const target: WorldObject = {
    objectType: WorldObjectType.HELIPAD,
    x: 100,
    y: 90,
    width: 10,
    height: 10
  }

  const target2: WorldObject = {
    objectType: WorldObjectType.HELIPAD,
    x: 100,
    y: 100,
    width: 10,
    height: 10
  }

  expect(movableActor.isCollidedWith(target)).toBeFalsy();
  expect(movableActor.isCollidedWith(target2)).toBeFalsy();

  movableActor.addCollidedObject(target);
  movableActor.addCollidedObject(target2);

  expect(movableActor.isCollidedWith(target)).toBeTruthy();
  expect(movableActor.isCollidedWith(target2)).toBeTruthy();
});

test("is able to untrack collided objects", () => {
  const target: WorldObject = {
    objectType: WorldObjectType.HELIPAD,
    x: 100,
    y: 90,
    width: 10,
    height: 10
  }

  const target2: WorldObject = {
    objectType: WorldObjectType.HELIPAD,
    x: 100,
    y: 100,
    width: 10,
    height: 10
  }

  movableActor.addCollidedObject(target);
  movableActor.addCollidedObject(target2);

  expect(movableActor.isCollidedWith(target)).toBeTruthy();
  expect(movableActor.isCollidedWith(target2)).toBeTruthy();

  movableActor.removeCollidedObject(target2);

  expect(movableActor.isCollidedWith(target)).toBeTruthy();
  expect(movableActor.isCollidedWith(target2)).toBeFalsy();
});
