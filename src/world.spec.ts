import { WorldManager, WorldObject, WorldObjectType } from "./world";
import { Player } from "./actor/player";
import { Rescuee } from "./actor/rescuee";
import { Helipad } from "./actor/helipad";

let world: WorldManager;
let player: Player;

beforeEach(() => {
  let playerObject: WorldObject;
  playerObject = {
    objectType: WorldObjectType.PLAYER,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  };

  player = new Player(playerObject);
  world = new WorldManager(player);
});

test("create empty world (exception of player)", () => {
  expect(world.isEmpty()).toBeTruthy();
});

test("world has a player", () => {
  expect(world.getPlayer()).toBeDefined();
});

test("populate empty world with rescuee", () => {
  const rescueeObject: Rescuee = new Rescuee({
    objectType: WorldObjectType.RESCUEE,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  });
  world.addActor(rescueeObject);
  expect(world.getAllActors()).toContain(rescueeObject);
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
  const heliPad: Helipad = new Helipad({
    objectType: WorldObjectType.HELIPAD,
    x: 100,
    y: 100,
    width: 10,
    height: 10,
  });
  world.addActor(heliPad);
  expect(world.getAllActors()).toContain(heliPad);
});

test("can get all helipads", () => {
  for (let i = 0; i < 10; i++) {
    world.addActor(
      new Helipad({
        objectType: WorldObjectType.HELIPAD,
        x: 100 + 10 * i,
        y: 100,
        width: 10,
        height: 10,
      })
    );
  }

  let helipads = world.getActorsOfType(WorldObjectType.HELIPAD);

  expect(helipads).toHaveLength(10);
  helipads.forEach((pad, idx) => {
    expect(pad.getAttachedObject().x).toBe(100 + 10 * idx);
  });
});

test("fire helipad collision event - mark player landed", () => {
  const pad: Helipad = new Helipad({
    objectType: WorldObjectType.HELIPAD,
    x: 100,
    y: 0,
    width: 10,
    height: 10,
  });

  world.addActor(pad);

  world.fireHelipadCollisionEvent();
  expect(pad.isPlayerLanded()).toBeFalsy();

  player.getAttachedObject().x = 100;
  world.fireHelipadCollisionEvent();
  expect(pad.isPlayerLanded()).toBeTruthy();
});

test("fire helipad uncollided event - mark player unlanded", () => {
  const pad: Helipad = new Helipad({
    objectType: WorldObjectType.HELIPAD,
    x: 100,
    y: 0,
    width: 10,
    height: 10,
  });

  world.addActor(pad);

  world.fireHelipadCollisionEvent();
  expect(pad.isPlayerLanded()).toBeFalsy();

  player.getAttachedObject().x = 100;
  world.fireHelipadCollisionEvent();
  expect(pad.isPlayerLanded()).toBeTruthy();

  player.getAttachedObject().x = 0;
  world.fireHelipadCollisionEvent();
  expect(pad.isPlayerLanded()).toBeFalsy();
});
