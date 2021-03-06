import { Movable } from "./base/movable";
import { Helipad } from "./helipad";
import { Rescuee } from "./rescuee";

export class Player extends Movable {
  private rescueeCapacity:number = 0;
  private rescuees:Rescuee[] = [];
  setRescueeCapacity(capacity:number) {
    this.rescueeCapacity = capacity;
  }
  getRescueeCapacity() {
    return this.rescueeCapacity;
  }
  getCurrentRescueeCount() {
    return this.rescuees.length;
  }
  pickUpRescuee(rescuee:Rescuee) {
    if(this.getCurrentRescueeCount() < this.getRescueeCapacity()) {
      this.rescuees.push(rescuee);
      return true;
    }
    return false;
  }
  dropOffAllRescuees(pad:Helipad) {
    this.rescuees.forEach((r) => {
      r.transferToHelipad(pad);
    });
    this.rescuees = [];
  }
}
