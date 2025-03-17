import {Gameboard} from "./gameboard.js"

const testBoard = new Gameboard();

test('gameboard can place new ship coords', () => {
    testBoard.newShip([2,3],[2,4],[2,5]);
    expect(testBoard.getShipFromCoords([2,4]).length).toBe(3);
})

test('gameboard prevents overlapping ships', () =>{
    expect(()=> {
        testBoard.newShip([2,3],[3,3],[4,3],[5,3]);
    }).toThrow("Don't overlap ships");
})

test('receive attack hits ship on coord', () => {
    expect(testBoard.getShipFromCoords([2,5]).hits).toBe(0);
    expect(testBoard.receiveAttack([2,5])).toBe("hit");
    expect(testBoard.getShipFromCoords([2,5]).hits).toBe(1);
})

test('receive attack misses are logged', () => {
    expect(testBoard.receiveAttack([5,8])).toBe("miss");
    expect(testBoard.getShipFromCoords([2,5]).hits).toBe(1);
    expect(testBoard.wasAttacked([5,8])).toBe("miss");
})

test("prevent repeat attacks", () => {
    expect(()=> (testBoard.receiveAttack([5,8]))).toThrow();
})

test('not attacked squares are identified', () => {
    expect(testBoard.wasAttacked([1,1])).toBe(false);
})

test('reports if all ships are not yet sunk', () => {
    expect(testBoard.isAllSunk()).toBe(false);
})

test('reports if all ships are sunk', () => {
    testBoard.receiveAttack([2,4]);
    testBoard.receiveAttack([2,3]);
    expect(testBoard.isAllSunk()).toBe(true);
})