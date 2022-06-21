import { WorldManager, WorldObject } from "../../world";

export class Basic {
  private collidedActors: Basic[] = [];
  constructor(protected attachedObject: WorldObject) {}
  getAttachedObject(): WorldObject {
    return this.attachedObject;
  }
  hasCollidedWith(target: Basic) {
    return (
      this.attachedObject.x <
        target.getAttachedObject().x + target.getAttachedObject().width &&
      this.attachedObject.x + this.attachedObject.width >
        target.getAttachedObject().x &&
      this.attachedObject.y <
        target.getAttachedObject().y + target.getAttachedObject().height &&
      this.attachedObject.y + this.attachedObject.width >
        target.getAttachedObject().y
    );
  }
  addCollidedObject(actor: Basic) {
    if (!this.collidedActors.includes(actor)) {
      this.collidedActors.push(actor);
    }
  }
  removeCollidedObject(actor: Basic) {
    this.collidedActors = this.collidedActors.filter(
      (collidedActor) => collidedActor != actor
    );
  }
  isCollidedWith(actor: Basic) {
    return this.collidedActors.includes(actor);
  }
  doUpdate(obj?: WorldManager, ctx?: Basic): boolean {
    return false;
  }
}
