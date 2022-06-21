import { WorldManager } from "../world";
import { Movable } from "./base/movable";
import { Basic } from "./base/basic";
import { Helipad } from "./helipad";
import { Player } from "./player";

export enum MovementState {
  ROAMING,
  BOARDING,
}

export class Rescuee extends Movable {
  private speed: number = 1;
  private hasBeenRescued: boolean = false;
  private helipad?: Helipad;
  private movementState: MovementState = MovementState.ROAMING;

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
    return true;
  }
  isRescued(): boolean {
    return this.hasBeenRescued;
  }
  assignToHelipad(pad: Helipad) {
    this.helipad = pad;
  }
  getAssignedPad() {
    return this.helipad;
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
}
