import { WorldObject, WorldObjectType } from "../world";
import { Player } from "./player";

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

/*test("when player collides with helipad, mark as landed", () => {
  let world: WorldObject[] = [];

  const heliPad: WorldObject = {
    objectType: WorldObjectType.HELIPAD,
    x: 100,
    y: 100,
    width: 10,
    height: 10,
  };
  world.push(heliPad);

  expect(player)
});*/