import { Player } from "./actor/player";
import { Basic } from "./actor/base/basic";
import { Helipad } from "./actor/helipad";

export enum WorldObjectType {
  PLAYER,
  RESCUEE,
  HELIPAD,
}

export interface WorldObject {
  objectType: WorldObjectType;
  x: number;
  y: number;
  width: number;
  height: number;
}

export class WorldManager {
  private world: Basic[];
  constructor(private player: Player) {
    this.world = [];
  }
  addActor(actor: Basic) {
    this.world.push(actor);
  }
  isEmpty() {
    return this.world.length == 0;
  }
  getPlayer() {
    return this.player;
  }
  getAllActors() {
    return this.world;
  }
  getActorsOfType(objectType: WorldObjectType) {
    return this.world.filter(
      (obj) => obj.getAttachedObject().objectType == objectType
    );
  }
  fireHelipadCollisionEvent() {
    this.getActorsOfType(WorldObjectType.HELIPAD).forEach((obj) => {
      const pad = <Helipad>obj;
      if (this.player.isCollidedWith(pad)) {
        if (!this.player.hasCollidedWith(pad)) {
          pad.handlePlayerTakeoffEvent(this.player);
          this.player.removeCollidedObject(pad);
        }
      } else {
        if (this.player.hasCollidedWith(pad)) {
          pad.handlePlayerLandedEvent(this.player);
          this.player.addCollidedObject(pad);
        }
      }
    });
  }
}
