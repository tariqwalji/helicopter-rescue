import {Helipad} from "./helipad";
import {WorldObject, WorldObjectType} from "../world";

test("helipad can be created", () => {
    const padObject: WorldObject = {
        objectType: WorldObjectType.HELIPAD,
        x: 0, y: 0, width: 10, height: 10
    };
    const pad: Helipad = new Helipad(padObject);

    expect(pad.getAttachedObject()).toBe(padObject);
});