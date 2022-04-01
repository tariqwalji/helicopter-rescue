"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(attachedObject) {
        this.attachedObject = attachedObject;
        this.landed = false;
    }
    Player.prototype.getAttachedObject = function () {
        return this.attachedObject;
    };
    Player.prototype.moveLeft = function (displacement) {
        this.attachedObject.x -= displacement;
    };
    Player.prototype.moveRight = function (displacement) {
        this.attachedObject.x += displacement;
    };
    Player.prototype.moveUp = function (displacement) {
        this.attachedObject.y -= displacement;
    };
    Player.prototype.moveDown = function (displacement) {
        this.attachedObject.y += displacement;
    };
    Player.prototype.hasLanded = function (landingStatus) {
        this.landed = landingStatus;
    };
    Player.prototype.isLanded = function () {
        return this.landed;
    };
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=player.js.map