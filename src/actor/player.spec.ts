import { WorldObject, WorldObjectType } from "../world";
import { Player } from "./player";
import { Rescuee } from "./rescuee";

let playerObj: WorldObject;
let player: Player;

beforeEach(() => {
  playerObj = {
    objectType: WorldObjectType.PLAYER,
    x: 100,
    y: 100,
    width: 10,
    height: 10,
  };

  player = new Player(playerObj);
});

test("player can be created", () => {
  expect(player.getAttachedObject()).toBe(playerObj);
});

test("set player rescuee capacity", () => {
  player.setRescueeCapacity(4);
  expect(player.getRescueeCapacity()).toBe(4);
});

test("add rescuee to player",  () => {
  const rescuee:Rescuee = new Rescuee({
    objectType: WorldObjectType.RESCUEE,
    x: 100,
    y: 100,
    width: 10,
    height: 10,
  });

  player.setRescueeCapacity(1);
  expect(player.getCurrentRescueeCount()).toBe(0);
  expect(player.pickUpRescuee(rescuee)).toBeTruthy();
  expect(player.getCurrentRescueeCount()).toBe(1);
});

test("rescuee cannot be added if maximum capacity", () => {
  const rescueeTheFirst:Rescuee = new Rescuee({
    objectType: WorldObjectType.RESCUEE,
    x: 100,
    y: 100,
    width: 10,
    height: 10,
  });

  const rescueeTheSecond:Rescuee = new Rescuee({
    objectType: WorldObjectType.RESCUEE,
    x: 100,
    y: 100,
    width: 10,
    height: 10,
  });

  player.setRescueeCapacity(1);
  expect(player.getCurrentRescueeCount()).toBe(0);
  expect(player.pickUpRescuee(rescueeTheFirst)).toBeTruthy();
  expect(player.getCurrentRescueeCount()).toBe(1);
  expect(player.pickUpRescuee(rescueeTheSecond)).toBeFalsy();
  expect(player.getCurrentRescueeCount()).toBe(1);
});

test("player can drop off all rescuees to target helipad (instant)", () => {

});

test("player can drop off all rescuees at set intervals", () => {

});

test("cancel player drop off if player leaves landing area",  () => {

});