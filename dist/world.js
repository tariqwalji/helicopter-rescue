"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldManager = exports.WorldObjectType = void 0;
var event_manager_1 = require("./event-manager");
var WorldObjectType;
(function (WorldObjectType) {
    WorldObjectType[WorldObjectType["PLAYER"] = 0] = "PLAYER";
    WorldObjectType[WorldObjectType["RESCUEE"] = 1] = "RESCUEE";
    WorldObjectType[WorldObjectType["HELIPAD"] = 2] = "HELIPAD";
})(WorldObjectType = exports.WorldObjectType || (exports.WorldObjectType = {}));
var WorldManager = /** @class */ (function () {
    function WorldManager(player, eventManager) {
        this.player = player;
        this.eventManager = eventManager;
        this.world = [];
    }
    WorldManager.prototype.addActor = function (actor) {
        this.world.push(actor);
    };
    WorldManager.prototype.isEmpty = function () {
        return this.world.length == 0;
    };
    WorldManager.prototype.getPlayer = function () {
        return this.player;
    };
    WorldManager.prototype.getAllActors = function () {
        return this.world;
    };
    WorldManager.prototype.getActorsOfType = function (objectType) {
        return this.world.filter(function (obj) { return obj.getAttachedObject().objectType == objectType; });
    };
    WorldManager.prototype.getEventManager = function () {
        return this.eventManager;
    };
    WorldManager.prototype.fireHelipadCollisionEvent = function () {
        var _this = this;
        this.getActorsOfType(WorldObjectType.HELIPAD).forEach(function (obj) {
            var pad = obj;
            if (_this.player.isCollidedWith(pad)) {
                if (!_this.player.hasCollidedWith(pad)) {
                    _this.eventManager.fireEvent(event_manager_1.WorldEventType.EVENT_PLAYER_TAKEOFF, {
                        source: pad,
                        player: _this.player
                    });
                    _this.player.removeCollidedObject(pad);
                }
            }
            else {
                if (_this.player.hasCollidedWith(pad)) {
                    _this.eventManager.fireEvent(event_manager_1.WorldEventType.EVENT_PLAYER_LANDED, {
                        source: pad,
                        player: _this.player
                    });
                    _this.player.addCollidedObject(pad);
                }
            }
        });
    };
    return WorldManager;
}());
exports.WorldManager = WorldManager;
//# sourceMappingURL=world.js.map