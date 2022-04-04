import { WorldObject } from "../world";
import { Movable } from "./base/movable";
import { Player } from "./player";

export class Rescuee extends Movable {
  private speed: number = 1;
  private hasBeenRescued: boolean = false;

  constructor(private player: Player, entityWorldObject: WorldObject) {
    super(entityWorldObject);
  }
  getSpeed() {
    return this.speed;
  }
  setSpeed(speedValue: number) {
    this.speed = speedValue;
  }
  moveTowardsPlayer() {
    if (this.player.isLanded()) {
      if (this.player.getAttachedObject().x !== this.getAttachedObject().x) {
        if (this.player.getAttachedObject().x < this.getAttachedObject().x) {
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
