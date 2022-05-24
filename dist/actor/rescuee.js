"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rescuee = void 0;
var movable_1 = require("./base/movable");
var Rescuee = /** @class */ (function (_super) {
    __extends(Rescuee, _super);
    function Rescuee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 1;
        _this.hasBeenRescued = false;
        return _this;
    }
    Rescuee.prototype.getSpeed = function () {
        return this.speed;
    };
    Rescuee.prototype.setSpeed = function (speedValue) {
        this.speed = speedValue;
    };
    Rescuee.prototype.doUpdate = function (manager, ctx) {
        if (!manager)
            return false;
        var player = manager.getPlayer();
        if (player.isLanded()) {
            if (player.getAttachedObject().x !== this.getAttachedObject().x) {
                if (player.getAttachedObject().x < this.getAttachedObject().x) {
                    this.moveLeft(this.speed);
                }
                else {
                    this.moveRight(this.speed);
                }
            }
            else {
                this.hasBeenRescued = true;
            }
        }
        return true;
    };
    Rescuee.prototype.isRescued = function () {
        return this.hasBeenRescued;
    };
    return Rescuee;
}(movable_1.Movable));
exports.Rescuee = Rescuee;
//# sourceMappingURL=rescuee.js.map