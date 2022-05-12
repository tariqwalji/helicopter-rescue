import { WorldObject, WorldObjectType } from "./world";

let world: WorldObject[];

beforeEach(() => {
  world = [];
});

test("create empty world", () => {
  expect(world).toStrictEqual([]);
});

test("populate empty world with player", () => {
  const playerObject: WorldObject = {
    objectType: WorldObjectType.PLAYER,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  };
  world.push(playerObject);
  expect(world).toContain(playerObject);
});

test("populate empty world with rescuee", () => {
  const rescueeObject: WorldObject = {
    objectType: WorldObjectType.RESCUEE,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  };
  world.push(rescueeObject);
  expect(world).toContain(rescueeObject);
});

test("world object has coordinates and dimensions", () => {
  const playerObject: WorldObject = {
    objectType: WorldObjectType.PLAYER,
    x: 100,
    y: 100,
    width: 10,
    height: 10,
  };
  expect(playerObject.x).toBe(100);
  expect(playerObject.y).toBe(100);
  expect(playerObject.width).toBe(10);
  expect(playerObject.height).toBe(10);
});

test("add helipad to world", () => {
  const heliPad: WorldObject = {
    objectType: WorldObjectType.HELIPAD,
    x: 100,
    y: 100,
    width: 10,
    height: 10,
  };
  world.push(heliPad);
  expect(world).toContain(heliPad);
});

test("can get all helipads", () => {
  for(let i=0; i<10; i++) {
    world.push({
      objectType: WorldObjectType.HELIPAD,
      x: 100,
      y: 100,
      width: 10,
      height: 10,
    });
  }

});
