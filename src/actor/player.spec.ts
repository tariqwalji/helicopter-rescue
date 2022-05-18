import {WorldObject, WorldObjectType} from "../world";
import {Player} from "./player";

let playerObj: WorldObject;
let player: Player;

beforeEach(() => {
  playerObj = {
    objectType: WorldObjectType.PLAYER,
    x: 100,
    y: 100,
    width: 10,
    height: 10
  };

  player = new Player(playerObj);
});

test("mark player as landed", () => {
  player.hasLanded(true);
  expect(player.isLanded()).toBeTruthy();
});

test("mark player as not landed", () => {
  player.hasLanded(false);
  expect(player.isLanded()).toBeFalsy();
});

test("handle on helipad event - set player has landed", () => {
  let helipad: WorldObject = {
    objectType: WorldObjectType.HELIPAD,
    x: 10,
    y: 10,
    width: 10,
    height: 10
  }

  player.handlePlayerOnHelipad(helipad);
  expect(player.isLanded()).toBeTruthy();
});

test("handle off helipad event - set player as not landed", () => {
  let helipad: WorldObject = {
    objectType: WorldObjectType.HELIPAD,
    x: 10,
    y: 10,
    width: 10,
    height: 10
  }

  player.hasLanded(true);
  player.handlePlayerOffHelipad(helipad);
  expect(player.isLanded()).toBeFalsy();
});