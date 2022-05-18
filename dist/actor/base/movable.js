"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movable = void 0;
var Movable = /** @class */ (function () {
    function Movable(attachedObject) {
        this.attachedObject = attachedObject;
        this.collidedObjects = [];
    }
    Movable.prototype.getAttachedObject = function () {
        return this.attachedObject;
    };
    Movable.prototype.moveLeft = function (displacement) {
        this.attachedObject.x -= displacement;
    };
    Movable.prototype.moveRight = function (displacement) {
        this.attachedObject.x += displacement;
    };
    Movable.prototype.moveUp = function (displacement) {
        this.attachedObject.y -= displacement;
    };
    Movable.prototype.moveDown = function (displacement) {
        this.attachedObject.y += displacement;
    };
    Movable.prototype.hasCollidedWith = function (target) {
        return (this.attachedObject.x < target.x + target.width) &&
            (this.attachedObject.x + this.attachedObject.width > target.x) &&
            (this.attachedObject.y < (target.y + target.height) &&
                (this.attachedObject.y + this.attachedObject.width > target.y));
    };
    Movable.prototype.addCollidedObject = function (obj) {
        if (!this.collidedObjects.includes(obj)) {
            this.collidedObjects.push(obj);
        }
    };
    Movable.prototype.removeCollidedObject = function (obj) {
        this.collidedObjects = this.collidedObjects.filter(function (collidedObj) { return collidedObj !== obj; });
    };
    Movable.prototype.isCollidedWith = function (obj) {
        return this.collidedObjects.includes(obj);
    };
    return Movable;
}());
exports.Movable = Movable;
//# sourceMappingURL=movable.js.map