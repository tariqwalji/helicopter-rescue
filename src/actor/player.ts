import { Movable } from "./base/movable";

export class Player extends Movable {
  private landed = false;

  hasLanded(landingStatus: boolean) {
    this.landed = landingStatus;
  }
  isLanded(): boolean {
    return this.landed;
  }
}
