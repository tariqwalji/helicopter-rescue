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
exports.Helipad = exports.LandingType = void 0;
var basic_1 = require("./base/basic");
var event_manager_1 = require("../event-manager");
var LandingType;
(function (LandingType) {
    LandingType[LandingType["PICK_UP"] = 0] = "PICK_UP";
    LandingType[LandingType["DROP_OFF"] = 1] = "DROP_OFF";
})(LandingType = exports.LandingType || (exports.LandingType = {}));
var DEFAULT_BOUNDARY_WIDTH = 10;
var Helipad = /** @class */ (function (_super) {
    __extends(Helipad, _super);
    function Helipad(worldObject) {
        var _this = _super.call(this, worldObject) || this;
        _this.landingType = LandingType.PICK_UP;
        _this.rescuees = [];
        _this.boundaryEdge = {
            left: worldObject.x - DEFAULT_BOUNDARY_WIDTH / 2,
            right: worldObject.x + DEFAULT_BOUNDARY_WIDTH / 2,
        };
        return _this;
    }
    Helipad.prototype.getRescuees = function () {
        return this.rescuees;
    };
    Helipad.prototype.getRescuee = function (rescuee) {
        return this.rescuees.find(function (r) { return r === rescuee; });
    };
    Helipad.prototype.removeRescuee = function (rescuee) {
        this.rescuees = this.rescuees.filter(function (r) { return r !== rescuee; });
    };
    Helipad.prototype.assignRescuee = function (rescuee) {
        this.rescuees.push(rescuee);
        rescuee.assignToHelipad(this);
    };
    Helipad.prototype.isPlayerLanded = function () {
        return typeof this.landedPlayer !== "undefined";
    };
    Helipad.prototype.handlePlayerLandedEvent = function (player) {
        this.landedPlayer = player;
    };
    Helipad.prototype.handlePlayerTakeoffEvent = function (player) {
        this.landedPlayer = undefined;
    };
    Helipad.prototype.isPickupPoint = function () {
        return this.landingType === LandingType.PICK_UP;
    };
    Helipad.prototype.isDropOffPoint = function () {
        return this.landingType === LandingType.DROP_OFF;
    };
    Helipad.prototype.switchToDropOffPoint = function () {
        this.landingType = LandingType.DROP_OFF;
    };
    Helipad.prototype.getBoundaryEdge = function () {
        return this.boundaryEdge;
    };
    Helipad.prototype.setBoundaryEdge = function (boundaryEdge) {
        this.boundaryEdge = boundaryEdge;
    };
    Helipad.prototype.subscribeToEvents = function (eventManager) {
        var _this = this;
        eventManager.subscribe(event_manager_1.WorldEventType.EVENT_PLAYER_LANDED, function (props) { return _this.handlePlayerLandedEvent(props.player); });
        eventManager.subscribe(event_manager_1.WorldEventType.EVENT_PLAYER_TAKEOFF, function (props) { return _this.handlePlayerTakeoffEvent(props.player); });
    };
    return Helipad;
}(basic_1.Basic));
exports.Helipad = Helipad;
//# sourceMappingURL=helipad.js.map