import { Gameboard } from "./gameboard.js";
import {Player, humanPlayer, computerPlayer} from "./player.js"

const testHuman = new humanPlayer("Bob");
const testComputer = new computerPlayer("Rosie");
const testPlayer = new Player("Abby");

test('human and computer player inherits player properties', () => {
    expect(testHuman.name).toBe("Bob");
    expect(testComputer.name).toBe("Rosie");
})

test('each player has a gameboard', () => {
    expect(testPlayer.gameboard instanceof Object).toBe(true);
})