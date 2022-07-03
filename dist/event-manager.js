"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventManager = exports.WorldEventType = void 0;
var WorldEventType;
(function (WorldEventType) {
    WorldEventType[WorldEventType["EVENT_PING"] = 0] = "EVENT_PING";
})(WorldEventType = exports.WorldEventType || (exports.WorldEventType = {}));
var EventManager = /** @class */ (function () {
    function EventManager() {
        this.subscribers = [];
    }
    EventManager.prototype.subscribe = function (eventType, fn) {
        this.subscribers.push({
            eventType: eventType,
            callback: fn
        });
    };
    EventManager.prototype.fireEvent = function (eventType, props) {
        if (props === void 0) { props = {}; }
        this.subscribers.filter(function (e) { return e.eventType === eventType; }).forEach(function (e) { return e.callback(props); });
    };
    return EventManager;
}());
exports.EventManager = EventManager;
//# sourceMappingURL=event-manager.js.map