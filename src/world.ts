export enum WorldObjectType {
  PLAYER,
  RESCUEE,
  HELIPAD
}

export interface WorldObject {
  objectType: WorldObjectType;
  x: number;
  y: number;
}
