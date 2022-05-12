"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldManager = exports.WorldObjectType = void 0;
var WorldObjectType;
(function (WorldObjectType) {
    WorldObjectType[WorldObjectType["PLAYER"] = 0] = "PLAYER";
    WorldObjectType[WorldObjectType["RESCUEE"] = 1] = "RESCUEE";
    WorldObjectType[WorldObjectType["HELIPAD"] = 2] = "HELIPAD";
})(WorldObjectType = exports.WorldObjectType || (exports.WorldObjectType = {}));
var WorldManager = /** @class */ (function () {
    function WorldManager(player) {
        this.player = player;
        this.world = [];
    }
    WorldManager.prototype.addObject = function (object) {
        this.world.push(object);
    };
    return WorldManager;
}());
exports.WorldManager = WorldManager;
//# sourceMappingURL=world.js.map