import {Gameboard} from "./gameboard.js"

const testBoard = new Gameboard();

test('gameboard can place new ship coords', () => {
    testBoard.newShip([2,3],[2,4],[2,5]);
    expect(testBoard.getShipFromCoords([2,4]).length).toBe(3);
})

