import { WorldObject, WorldObjectType } from "./world";

let world: WorldObject[];

beforeEach(() => {
  world = [];
});

test("create empty world", () => {
  expect(world).toStrictEqual([]);
});

test("populate empty world with player", () => {
  const playerObject: WorldObject = { objectType: WorldObjectType.PLAYER };
  world.push(playerObject);
  expect(world).toContain(playerObject);
});

test("populate empty world with rescuee", () => {
  const rescueeObject: WorldObject = { objectType: WorldObjectType.RESCUEE };
  world.push(rescueeObject);
  expect(world).toContain(rescueeObject);
});
