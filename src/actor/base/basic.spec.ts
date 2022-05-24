import {WorldObject, WorldObjectType} from "../../world";
import {Basic} from "./basic";

let normalObject: WorldObject;
let basicActor: Basic;

beforeEach(() => {
    normalObject = {
        objectType: WorldObjectType.PLAYER,
        x: 100,
        y: 100,
        width: 10,
        height: 10,
    };

    basicActor = new Basic(normalObject);
});

test("link basic actor to world object", () => {
    expect(basicActor.getAttachedObject()).toBe(normalObject);
});

test("basic has collided", () => {
    const target: WorldObject = {
        objectType: WorldObjectType.HELIPAD,
        x: 100,
        y: 100,
        width: 10,
        height: 10
    }
    expect(basicActor.hasCollidedWith(target)).toBeTruthy();
});

test("Basic actor not collided on positive x axis", () => {
    const target: WorldObject = {
        objectType: WorldObjectType.HELIPAD,
        x: 110,
        y: 100,
        width: 10,
        height: 10
    }
    expect(basicActor.hasCollidedWith(target)).toBeFalsy();
});

test("Basic actor not collided on negative x axis", () => {
    const target: WorldObject = {
        objectType: WorldObjectType.HELIPAD,
        x: 90,
        y: 100,
        width: 10,
        height: 10
    }
    expect(basicActor.hasCollidedWith(target)).toBeFalsy();
});

test("Basic actor not collided on positive y axis", () => {
    const target: WorldObject = {
        objectType: WorldObjectType.HELIPAD,
        x: 100,
        y: 110,
        width: 10,
        height: 10
    }
    expect(basicActor.hasCollidedWith(target)).toBeFalsy();
});

test("Basic actor not collided on negative y axis", () => {
    const target: WorldObject = {
        objectType: WorldObjectType.HELIPAD,
        x: 100,
        y: 90,
        width: 10,
        height: 10
    }
    expect(basicActor.hasCollidedWith(target)).toBeFalsy();
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

    expect(basicActor.isCollidedWith(target)).toBeFalsy();
    expect(basicActor.isCollidedWith(target2)).toBeFalsy();

    basicActor.addCollidedObject(target);
    basicActor.addCollidedObject(target2);

    expect(basicActor.isCollidedWith(target)).toBeTruthy();
    expect(basicActor.isCollidedWith(target2)).toBeTruthy();
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

    basicActor.addCollidedObject(target);
    basicActor.addCollidedObject(target2);

    expect(basicActor.isCollidedWith(target)).toBeTruthy();
    expect(basicActor.isCollidedWith(target2)).toBeTruthy();

    basicActor.removeCollidedObject(target2);

    expect(basicActor.isCollidedWith(target)).toBeTruthy();
    expect(basicActor.isCollidedWith(target2)).toBeFalsy();
});

test("has doUpdate method", () => {
    expect(basicActor.doUpdate()).toBeFalsy();
})