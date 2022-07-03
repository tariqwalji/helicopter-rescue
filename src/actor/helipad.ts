import { WorldObject } from "../world";
import { Basic } from "./base/basic";
import { Rescuee } from "./rescuee";
import { Player } from "./player";
import { EventManager, WorldEventProps, WorldEventType } from "../event-manager";

export enum LandingType {
  PICK_UP,
  DROP_OFF,
}

interface BoundaryEdge {
  left: number;
  right: number;
}

const DEFAULT_BOUNDARY_WIDTH = 10;

export class Helipad extends Basic {
  private rescuees: Rescuee[];
  private landedPlayer?: Player;
  private landingType: LandingType = LandingType.PICK_UP;
  private boundaryEdge: BoundaryEdge;
  constructor(worldObject: WorldObject) {
    super(worldObject);
    this.rescuees = [];
    this.boundaryEdge = {
      left: worldObject.x - DEFAULT_BOUNDARY_WIDTH / 2,
      right: worldObject.x + DEFAULT_BOUNDARY_WIDTH / 2,
    };
  }
  getRescuees() {
    return this.rescuees;
  }
  getRescuee(rescuee: Rescuee) {
    return this.rescuees.find((r) => r === rescuee);
  }
  removeRescuee(rescuee: Rescuee) {
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
  }
  handlePlayerTakeoffEvent(player: Player) {
    this.landedPlayer = undefined;
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
  getBoundaryEdge() {
    return this.boundaryEdge;
  }
  setBoundaryEdge(boundaryEdge:BoundaryEdge) {
    this.boundaryEdge = boundaryEdge;
  }
  subscribeToEvents(eventManager:EventManager) {
    eventManager.subscribe(WorldEventType.EVENT_PLAYER_LANDED, (props:WorldEventProps) => this.handlePlayerLandedEvent(props.player));
    eventManager.subscribe(WorldEventType.EVENT_PLAYER_TAKEOFF, (props:WorldEventProps) => this.handlePlayerTakeoffEvent(props.player));
  }
}
