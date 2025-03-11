import {Gameboard} from "./gameboard.js"

const testBoard = new Gameboard();

test('gameboard can place new ship coords', () => {
    testBoard.newShip([2,3],[2,4],[2,5]);
    expect(testBoard.getShipFromCoords([2,4]).length).toBe(3);
})

test('receive attack hits ship on coord', () => {
    expect(testBoard.getShipFromCoords([2,5]).hits).toBe(0);
    testBoard.receiveAttack([2,5]);
    expect(testBoard.getShipFromCoords([2,5]).hits).toBe(1);
})

test('receive attack misses are logged', () => {
    testBoard.receiveAttack([5,8]);
    expect(testBoard.getShipFromCoords([2,5]).hits).toBe(1);
    expect(testBoard.wasAttacked([5,8])).toBe("miss");
})