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
    height: 10,
  };

  player = new Player(playerObj);
});

test("helipad can be created", () => {
  expect(player.getAttachedObject()).toBe(playerObj);
});
