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
exports.Player = void 0;
var movable_1 = require("./base/movable");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rescueeCapacity = 0;
        _this.rescuees = [];
        return _this;
    }
    Player.prototype.setRescueeCapacity = function (capacity) {
        this.rescueeCapacity = capacity;
    };
    Player.prototype.getRescueeCapacity = function () {
        return this.rescueeCapacity;
    };
    Player.prototype.getCurrentRescueeCount = function () {
        return this.rescuees.length;
    };
    Player.prototype.pickUpRescuee = function (rescuee) {
        if (this.getCurrentRescueeCount() < this.getRescueeCapacity()) {
            this.rescuees.push(rescuee);
            return true;
        }
        return false;
    };
    Player.prototype.dropOffAllRescuees = function (pad) {
        this.rescuees.forEach(function (r) {
            r.transferToHelipad(pad);
        });
        this.rescuees = [];
    };
    return Player;
}(movable_1.Movable));
exports.Player = Player;
//# sourceMappingURL=player.js.map