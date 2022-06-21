import { WorldObject } from "../world";
import { Basic } from "./base/basic";
import { Rescuee } from "./rescuee";
import { Player } from "./player";

export class Helipad extends Basic {
  private rescuees: Rescuee[];
  private landedPlayer?: Player;
  constructor(worldObject: WorldObject) {
    super(worldObject);
    this.rescuees = [];
  }
  getRescuees() {
    return this.rescuees;
  }
  assignRescuee(rescuee: Rescuee) {
    this.rescuees.push(rescuee);
    rescuee.assignToHelipad(this);
  }
  isPlayerLanded() {
    return typeof this.landedPlayer !== "undefined";
  }
  handlePlayerLandedEvent(player: Player) {
    this.landedPlayer = player;
    this.rescuees.forEach((rescuee) => rescuee.handlePlayerLandedEvent(player));
  }
  handlePlayerTakeoffEvent(player: Player) {
    this.landedPlayer = undefined;
    this.rescuees.forEach((rescuee) =>
      rescuee.handlePlayerTakeoffEvent(player)
    );
  }
}
