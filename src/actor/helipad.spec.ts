import {Helipad} from "./helipad";
import {WorldObject, WorldObjectType} from "../world";
import { Rescuee } from "./rescuee";
import { Player } from "./player";

test("helipad can be created", () => {
    const padObject: WorldObject = {
        objectType: WorldObjectType.HELIPAD,
        x: 0, y: 0, width: 10, height: 10
    };
    const pad: Helipad = new Helipad(padObject);

    expect(pad.getAttachedObject()).toBe(padObject);
});

test("add rescuee to helipad", () => {
    let rescueeObj: WorldObject = {
        objectType: WorldObjectType.RESCUEE,
        x: 100,
        y: 100,
        width: 10,
        height: 10,
      };

    let rescuee: Rescuee = new Rescuee(rescueeObj);;
    

    const padObject: WorldObject = {
        objectType: WorldObjectType.HELIPAD,
        x: 0, y: 0, width: 10, height: 10
    };
    const pad: Helipad = new Helipad(padObject);
    pad.assignRescuee(rescuee);
});

test("inform rescuees helicopter player has landed", () => {
    let rescueeObj: WorldObject = {
        objectType: WorldObjectType.RESCUEE,
        x: 100,
        y: 100,
        width: 10,
        height: 10,
      };

    let rescuee: Rescuee = new Rescuee(rescueeObj);;
    

    const padObject: WorldObject = {
        objectType: WorldObjectType.HELIPAD,
        x: 0, y: 0, width: 10, height: 10
    };
    const pad: Helipad = new Helipad(padObject);
    pad.assignRescuee(rescuee);

    const player:Player = new Player({
        objectType: WorldObjectType.PLAYER,
        x: 0, y: 0, width: 10, height: 10
    });   
    
    expect(pad.isPlayerLanded()).toBeFalsy();
    pad.firePlayerLandedEvent(player);
    expect(pad.isPlayerLanded()).toBeTruthy();
});

test("inform rescuees helicopter has taken off", () => {
    let rescueeObj: WorldObject = {
        objectType: WorldObjectType.RESCUEE,
        x: 100,
        y: 100,
        width: 10,
        height: 10,
      };

    let rescuee: Rescuee = new Rescuee(rescueeObj);;
    

    const padObject: WorldObject = {
        objectType: WorldObjectType.HELIPAD,
        x: 0, y: 0, width: 10, height: 10
    };
    const pad: Helipad = new Helipad(padObject);
    pad.assignRescuee(rescuee);

    const player:Player = new Player({
        objectType: WorldObjectType.PLAYER,
        x: 0, y: 0, width: 10, height: 10
    });
    
    expect(pad.isPlayerLanded()).toBeFalsy();
    pad.firePlayerLandedEvent(player);
    expect(pad.isPlayerLanded()).toBeTruthy();

    pad.firePlayerUnlandedEvent(player);
    expect(pad.isPlayerLanded()).toBeFalsy();
});