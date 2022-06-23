import { Movable } from "./base/movable";

export class Player extends Movable {
  private rescueeCapacity:number = 0;
  setRescueeCapacity(capacity:number) {
    this.rescueeCapacity = capacity;
  }
  getRescueeCapacity() {
    return this.rescueeCapacity;
  }
}
