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
exports.Helipad = void 0;
var basic_1 = require("./base/basic");
var Helipad = /** @class */ (function (_super) {
    __extends(Helipad, _super);
    function Helipad(worldObject) {
        var _this = _super.call(this, worldObject) || this;
        _this.rescuees = [];
        return _this;
    }
    Helipad.prototype.assignRescuee = function (rescuee) {
        this.rescuees.push(rescuee);
    };
    Helipad.prototype.isPlayerLanded = function () {
        return typeof this.landedPlayer !== "undefined";
    };
    Helipad.prototype.firePlayerLandedEvent = function (player) {
        this.landedPlayer = player;
    };
    Helipad.prototype.firePlayerUnlandedEvent = function (player) {
        this.landedPlayer = undefined;
    };
    return Helipad;
}(basic_1.Basic));
exports.Helipad = Helipad;
//# sourceMappingURL=helipad.js.map