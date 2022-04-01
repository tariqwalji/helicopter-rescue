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
  };
  world.push(playerObject);
  expect(world).toContain(playerObject);
});

test("populate empty world with rescuee", () => {
  const rescueeObject: WorldObject = {
    objectType: WorldObjectType.RESCUEE,
    x: 0,
    y: 0,
  };
  world.push(rescueeObject);
  expect(world).toContain(rescueeObject);
});

test("world object has coordinates", () => {
  const playerObject: WorldObject = {
    objectType: WorldObjectType.PLAYER,
    x: 100,
    y: 100,
  };
  expect(playerObject.x).toBe(100);
  expect(playerObject.y).toBe(100);
});
