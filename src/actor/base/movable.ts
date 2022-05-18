import { WorldObject } from "../../world";

export class Movable {
  private collidedObjects: WorldObject[] = [];
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
  hasCollidedWith(target: WorldObject) {
    return (this.attachedObject.x < target.x + target.width) &&
            (this.attachedObject.x + this.attachedObject.width > target.x) &&
            (this.attachedObject.y < (target.y + target.height) &&
            (this.attachedObject.y + this.attachedObject.width > target.y))
  }
  addCollidedObject(obj: WorldObject) {
    if(!this.collidedObjects.includes(obj)) {
      this.collidedObjects.push(obj);
    }
  }
  removeCollidedObject(obj: WorldObject) {
    this.collidedObjects = this.collidedObjects.filter(collidedObj => collidedObj != obj);
  }
  isCollidedWith(obj: WorldObject) {
    return this.collidedObjects.includes(obj);
  }
}
