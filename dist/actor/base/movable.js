"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movable = void 0;
var Movable = /** @class */ (function () {
    function Movable(attachedObject) {
        this.attachedObject = attachedObject;
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
    return Movable;
}());
exports.Movable = Movable;
//# sourceMappingURL=movable.js.map