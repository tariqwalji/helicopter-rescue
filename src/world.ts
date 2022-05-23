import {Player} from "./actor/player";
import {Movable} from "./actor/base/movable";

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
  private world: WorldObject[];
  private selfMovingActors: Movable[];
  constructor(private player:Player) {
    this.world = [];
    this.selfMovingActors = [];
  }
  addObject(object:WorldObject) {
    this.world.push(object);
  }
  addSelfMovingActor(actor:Movable) {
    this.selfMovingActors.push(actor);
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
  getSelfMovingActors() {
    return this.selfMovingActors;
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