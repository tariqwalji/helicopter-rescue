import {WorldManager} from "../world";
import { Movable } from "./base/movable";

export class Rescuee extends Movable {
  private speed: number = 1;
  private hasBeenRescued: boolean = false;

  getSpeed() {
    return this.speed;
  }
  setSpeed(speedValue: number) {
    this.speed = speedValue;
  }
  updatePosition(manager:WorldManager) {
    const player = manager.getPlayer();
    if (player.isLanded()) {
      if (player.getAttachedObject().x !== this.getAttachedObject().x) {
        if (player.getAttachedObject().x < this.getAttachedObject().x) {
          this.moveLeft(this.speed);
        } else {
          this.moveRight(this.speed);
        }  
      }
      else {
        this.hasBeenRescued = true;
      }
    }
  }
  isRescued(): boolean {
    return this.hasBeenRescued;
  }
}
