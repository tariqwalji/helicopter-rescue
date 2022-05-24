"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
var Basic = /** @class */ (function () {
    function Basic(attachedObject) {
        this.attachedObject = attachedObject;
        this.collidedObjects = [];
    }
    Basic.prototype.getAttachedObject = function () {
        return this.attachedObject;
    };
    Basic.prototype.hasCollidedWith = function (target) {
        return (this.attachedObject.x < target.x + target.width) &&
            (this.attachedObject.x + this.attachedObject.width > target.x) &&
            (this.attachedObject.y < (target.y + target.height) &&
                (this.attachedObject.y + this.attachedObject.width > target.y));
    };
    Basic.prototype.addCollidedObject = function (obj) {
        if (!this.collidedObjects.includes(obj)) {
            this.collidedObjects.push(obj);
        }
    };
    Basic.prototype.removeCollidedObject = function (obj) {
        this.collidedObjects = this.collidedObjects.filter(function (collidedObj) { return collidedObj != obj; });
    };
    Basic.prototype.isCollidedWith = function (obj) {
        return this.collidedObjects.includes(obj);
    };
    Basic.prototype.doUpdate = function (obj, ctx) {
        return false;
    };
    return Basic;
}());
exports.Basic = Basic;
//# sourceMappingURL=basic.js.map