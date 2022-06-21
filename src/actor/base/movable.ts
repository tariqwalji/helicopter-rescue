import { WorldObject } from "../../world";
import { Basic } from "./basic";

export class Movable extends Basic {
  constructor(attachedObject: WorldObject) {
    super(attachedObject);
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
