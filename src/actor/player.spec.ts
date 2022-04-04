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

test("mark player as landed", () => {
  player.hasLanded(true);
  expect(player.isLanded()).toBeTruthy();
});

test("mark player as not landed", () => {
  player.hasLanded(false);
  expect(player.isLanded()).toBeFalsy();
});
