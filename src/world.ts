import {Player} from "./actor/player";

export enum WorldObjectType {
  PLAYER,
  RESCUEE,
  HELIPAD
}

export interface WorldObject {
  objectType: WorldObjectType;
  x: number;
  y: number;
  width: number;
  height: number;
}

export class WorldManager {
  private world: WorldObject[]
  constructor(private player:Player) {
    this.world = [];
  }
  addObject(object:WorldObject) {
    this.world.push(object);
  }
  isEmpty() {
    return this.world.length == 0;
  }
  getPlayer() {
    return this.player;
  }
  getObjects() {
    return this.world;
  }
  getObjectsOfType(objectType: WorldObjectType) {
    return this.world.filter((obj) => obj.objectType == objectType);
  }
  fireHelipadCollisionEvent() {
    this.getObjectsOfType(WorldObjectType.HELIPAD).forEach((pad) => {
      if(this.player.isCollidedWith(pad)) {
        if (!this.player.hasCollidedWith(pad)) {
          this.player.handlePlayerOffHelipad(pad);
          this.player.removeCollidedObject(pad);
        }
      }
      else {
        if (this.player.hasCollidedWith(pad)) {
          this.player.handlePlayerOnHelipad(pad);
          this.player.addCollidedObject(pad);
        }
      }
    });
  }
}