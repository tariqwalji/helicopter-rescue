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
        this.selfMovingActors = [];
    }
    WorldManager.prototype.addObject = function (object) {
        this.world.push(object);
    };
    WorldManager.prototype.addSelfMovingActor = function (actor) {
        this.selfMovingActors.push(actor);
    };
    WorldManager.prototype.isEmpty = function () {
        return this.world.length == 0;
    };
    WorldManager.prototype.getPlayer = function () {
        return this.player;
    };
    WorldManager.prototype.getObjects = function () {
        return this.world;
    };
    WorldManager.prototype.getObjectsOfType = function (objectType) {
        return this.world.filter(function (obj) { return obj.objectType == objectType; });
    };
    WorldManager.prototype.getSelfMovingActors = function () {
        return this.selfMovingActors;
    };
    WorldManager.prototype.fireHelipadCollisionEvent = function () {
        var _this = this;
        this.getObjectsOfType(WorldObjectType.HELIPAD).forEach(function (pad) {
            if (_this.player.isCollidedWith(pad)) {
                if (!_this.player.hasCollidedWith(pad)) {
                    _this.player.handlePlayerOffHelipad(pad);
                    _this.player.removeCollidedObject(pad);
                }
            }
            else {
                if (_this.player.hasCollidedWith(pad)) {
                    _this.player.handlePlayerOnHelipad(pad);
                    _this.player.addCollidedObject(pad);
                }
            }
        });
    };
    return WorldManager;
}());
exports.WorldManager = WorldManager;
//# sourceMappingURL=world.js.map