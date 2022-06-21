"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
var Basic = /** @class */ (function () {
    function Basic(attachedObject) {
        this.attachedObject = attachedObject;
        this.collidedActors = [];
    }
    Basic.prototype.getAttachedObject = function () {
        return this.attachedObject;
    };
    Basic.prototype.hasCollidedWith = function (target) {
        return (this.attachedObject.x <
            target.getAttachedObject().x + target.getAttachedObject().width &&
            this.attachedObject.x + this.attachedObject.width >
                target.getAttachedObject().x &&
            this.attachedObject.y <
                target.getAttachedObject().y + target.getAttachedObject().height &&
            this.attachedObject.y + this.attachedObject.width >
                target.getAttachedObject().y);
    };
    Basic.prototype.addCollidedObject = function (actor) {
        if (!this.collidedActors.includes(actor)) {
            this.collidedActors.push(actor);
        }
    };
    Basic.prototype.removeCollidedObject = function (actor) {
        this.collidedActors = this.collidedActors.filter(function (collidedActor) { return collidedActor != actor; });
    };
    Basic.prototype.isCollidedWith = function (actor) {
        return this.collidedActors.includes(actor);
    };
    Basic.prototype.doUpdate = function (obj, ctx) {
        return false;
    };
    return Basic;
}());
exports.Basic = Basic;
//# sourceMappingURL=basic.js.map