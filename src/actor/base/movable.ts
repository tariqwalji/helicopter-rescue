import { WorldObject } from "../../world";

export class Movable {
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
}
