import { WorldObject, WorldObjectType } from "../world";

export class Player {
  private landed = false;

  constructor(private attachedObject: WorldObject) {}
  getAttachedObject(): WorldObject {
    return this.attachedObject;
  }
  moveLeft(displacement: number) {
    this.attachedObject.x -= displacement;
  }
  moveRight(displacement: number) {
    this.attachedObject.x += displacement;
  }
  moveUp(displacement: number) {
    this.attachedObject.y -= displacement;
  }
  moveDown(displacement: number) {
    this.attachedObject.y += displacement;
  }
  hasLanded(landingStatus: boolean) {
    this.landed = landingStatus;
  }
  isLanded(): boolean {
    return this.landed;
  }
}
