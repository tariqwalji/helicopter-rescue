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
exports.Movable = void 0;
var basic_1 = require("./basic");
var Movable = /** @class */ (function (_super) {
    __extends(Movable, _super);
    function Movable(attachedObject) {
        return _super.call(this, attachedObject) || this;
    }
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
    return Movable;
}(basic_1.Basic));
exports.Movable = Movable;
//# sourceMappingURL=movable.js.map