export enum WorldObjectType {
  PLAYER,
  RESCUEE,
}

export interface WorldObject {
  objectType: WorldObjectType;
  x: number;
  y: number;
}
