"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeightMap = void 0;
var HeightMap = /** @class */ (function () {
    function HeightMap(baseHeightMap) {
        this.baseHeightMap = baseHeightMap;
        this.displacementMap = [];
    }
    HeightMap.prototype.getBaseHeightMap = function () {
        return this.baseHeightMap;
    };
    HeightMap.prototype.setDisplacementPoint = function (x, y) {
        this.displacementMap[x] = y;
    };
    HeightMap.prototype.getDisplacementAtPoint = function (x) {
        var _a;
        return (_a = this.displacementMap[x]) !== null && _a !== void 0 ? _a : this.baseHeightMap;
    };
    return HeightMap;
}());
exports.HeightMap = HeightMap;
//# sourceMappingURL=heightmap.js.map