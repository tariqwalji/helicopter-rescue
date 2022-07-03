import { WorldManager } from "../world";
import { Movable } from "./base/movable";
import { Basic } from "./base/basic";
import { Helipad } from "./helipad";
import { Player } from "./player";
import { EventManager, WorldEventProps, WorldEventType } from "../event-manager";

export enum MovementState {
  ROAMING,
  BOARDING,
}

export enum RoamingDirection {
  LEFT,
  RIGHT
}

export class Rescuee extends Movable {
  private speed: number = 1;
  private hasBeenRescued: boolean = false;
  private helipad?: Helipad;
  private movementState: MovementState = MovementState.ROAMING;
  private roamingDirection: RoamingDirection = RoamingDirection.LEFT;

  getSpeed() {
    return this.speed;
  }
  setSpeed(speedValue: number) {
    this.speed = speedValue;
  }
  doUpdate(manager?: WorldManager, ctx?: Basic): boolean {
    if (!manager) return false;
    if (this.hasBeenRescued) return false;

    const player = manager.getPlayer();
    if (this.movementState === MovementState.BOARDING) {
      if (!player.hasCollidedWith(this)) {
        if (player.getAttachedObject().x < this.getAttachedObject().x) {
          this.moveLeft(this.speed);
        } else {
          this.moveRight(this.speed);
        }
      } else {
        this.hasBeenRescued = true;
      }
    }
    else if(this.movementState === MovementState.ROAMING) {
      if(this.helipad) {
        const helipadBoundary = this.helipad.getBoundaryEdge();
        if (this.roamingDirection === RoamingDirection.LEFT && this.attachedObject.x <= helipadBoundary.left) {
          this.attachedObject.x = helipadBoundary.left;
          this.roamingDirection = RoamingDirection.RIGHT;
        }

        if (this.roamingDirection === RoamingDirection.RIGHT && this.attachedObject.x >= helipadBoundary.right) {
          this.attachedObject.x = helipadBoundary.right;
          this.roamingDirection = RoamingDirection.LEFT;
        }

        if (this.roamingDirection === RoamingDirection.LEFT) {
          this.moveLeft(this.speed);
        }
        else {
          this.moveRight(this.speed);
        }  
      }
    }
    return true;
  }
  isRescued(): boolean {
    return this.hasBeenRescued;
  }
  assignToHelipad(pad: Helipad) {
    this.helipad = pad;
  }
  getAssignedPad() {
    return (this.helipad)?this.helipad:false;
  }
  getMovementState() {
    return this.movementState;
  }
  handlePlayerLandedEvent(player: Player) {
    this.movementState = MovementState.BOARDING;
  }
  handlePlayerTakeoffEvent(player: Player) {
    this.movementState = MovementState.ROAMING;
  }
  transferToPlayer(player:Player) {
    if(this.getAssignedPad() && player.pickUpRescuee(this)) {
      this.helipad?.removeRescuee(this);
      this.helipad = undefined;
    }
  }
  transferToHelipad(pad:Helipad) {
    const originalPad = this.helipad;
    pad.assignRescuee(this);
    if (originalPad) {
      originalPad.removeRescuee(this);
    }
  }
  getRoamingDirection() {
    return this.roamingDirection;
  }
  setRoamingDirection(roamingDirection:RoamingDirection) {
    this.roamingDirection = roamingDirection;
  }
  subscribeToEvents(eventManager:EventManager) {
    eventManager.subscribe(WorldEventType.EVENT_PLAYER_LANDED, (props:WorldEventProps) => this.handlePlayerLandedEvent(props.player));
    eventManager.subscribe(WorldEventType.EVENT_PLAYER_TAKEOFF, (props:WorldEventProps) => this.handlePlayerTakeoffEvent(props.player));
  }
}
