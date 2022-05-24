import {WorldManager, WorldObject} from "../../world";

export class Basic {
    private collidedObjects: WorldObject[] = [];
    constructor(protected attachedObject: WorldObject) {}
    getAttachedObject(): WorldObject {
        return this.attachedObject;
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
    doUpdate(obj?: WorldManager, ctx?: Basic): boolean {
        return false;
    }
}