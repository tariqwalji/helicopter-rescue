import { Movable } from "./base/movable";
import {WorldObject} from "../world";

export class Player extends Movable {
  private landed = false;

  hasLanded(landingStatus: boolean) {
    this.landed = landingStatus;
  }
  isLanded(): boolean {
    return this.landed;
  }
  handlePlayerOnHelipad(helipad: WorldObject) {
    this.hasLanded(true);
  }
  handlePlayerOffHelipad(helipad: WorldObject) {
    this.hasLanded(false);
  }
}
