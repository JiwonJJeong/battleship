import {Player, humanPlayer, computerPlayer} from "./player.js"

const testHuman = new humanPlayer("Bob");
const testComputer = new computerPlayer("Rosie");

test('human and computer player inherits player properties', () => {
    expect(testHuman.name).toBe("Bob");
    expect(testComputer.name).toBe("Rosie");
})