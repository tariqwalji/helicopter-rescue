import {WorldManager} from "../world";
import { Movable } from "./base/movable";
import {Basic} from "./base/basic";

export class Rescuee extends Movable {
  private speed: number = 1;
  private hasBeenRescued: boolean = false;

  getSpeed() {
    return this.speed;
  }
  setSpeed(speedValue: number) {
    this.speed = speedValue;
  }
  doUpdate(manager?:WorldManager, ctx?: Basic): boolean {
    if(!manager) return false;

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
    return true;
  }
  isRescued(): boolean {
    return this.hasBeenRescued;
  }
}
