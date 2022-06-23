import { WorldObject, WorldObjectType } from "../world";
import { Player } from "./player";

let playerObj: WorldObject;
let player: Player;

beforeEach(() => {
  player = new Player({
    objectType: WorldObjectType.PLAYER,
    x: 100,
    y: 100,
    width: 10,
    height: 10,
  });
});

test("player can be created", () => {
  expect(player.getAttachedObject()).toBe(playerObj);
});

test("set player rescuee capacity", () => {
  player.setRescueeCapacity(4);
  expect(player.getRescueeCapacity()).toBe(4);
});
