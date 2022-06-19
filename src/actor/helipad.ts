import {WorldObject} from "../world";
import {Basic} from "./base/basic";
import { Rescuee } from "./rescuee";
import { Player } from "./player";

export class Helipad extends Basic {
    private rescuees:Rescuee[];
    private landedPlayer?:Player;
    constructor(worldObject:WorldObject) {
        super(worldObject);
        this.rescuees = [];
    }
    assignRescuee(rescuee:Rescuee) {
        this.rescuees.push(rescuee);
    }
    isPlayerLanded() {
        return typeof this.landedPlayer !== "undefined";
    }
    firePlayerLandedEvent(player:Player) {
        this.landedPlayer = player;
    }
    firePlayerUnlandedEvent(player:Player) {
        this.landedPlayer = undefined;
    }

}