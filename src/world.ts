import { Player } from "./actor/player";
import { Basic } from "./actor/base/basic";
import { Helipad } from "./actor/helipad";
import { EventManager, WorldEventType } from "./event-manager";

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
  constructor(private player: Player, private eventManager:EventManager) {
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
  getEventManager() {
    return this.eventManager;
  }
  fireHelipadCollisionEvent() {
    this.getActorsOfType(WorldObjectType.HELIPAD).forEach((obj) => {
      const pad = <Helipad>obj;
      if (this.player.isCollidedWith(pad)) {
        if (!this.player.hasCollidedWith(pad)) {
          this.eventManager.fireEvent(WorldEventType.EVENT_PLAYER_TAKEOFF, {
            source: pad,
            player: this.player
          });
          this.player.removeCollidedObject(pad);
        }
      } else {
        if (this.player.hasCollidedWith(pad)) {
          this.eventManager.fireEvent(WorldEventType.EVENT_PLAYER_LANDED, {
            source: pad,
            player: this.player
          });
          this.player.addCollidedObject(pad);
        }
      }
    });
  }
}
