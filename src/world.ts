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
}