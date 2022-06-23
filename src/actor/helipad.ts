import { WorldObject } from "../world";
import { Basic } from "./base/basic";
import { Rescuee } from "./rescuee";
import { Player } from "./player";

export enum LandingType {
  PICK_UP,
  DROP_OFF
};

export class Helipad extends Basic {
  private rescuees: Rescuee[];
  private landedPlayer?: Player;
  private landingType:LandingType = LandingType.PICK_UP;
  constructor(worldObject: WorldObject) {
    super(worldObject);
    this.rescuees = [];
  }
  getRescuees() {
    return this.rescuees;
  }
  getRescuee(rescuee:Rescuee) {
    return this.rescuees.find((r) => r === rescuee);
  }
  removeRescuee(rescuee:Rescuee) {
    this.rescuees = this.rescuees.filter((r) => r !== rescuee);
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
  isPickupPoint() {
    return this.landingType === LandingType.PICK_UP;
  }
  isDropOffPoint() {
    return this.landingType === LandingType.DROP_OFF;
  }
  switchToDropOffPoint() {
    this.landingType = LandingType.DROP_OFF;
  }
}
