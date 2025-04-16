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

test('coords adjacent flagged NOT allowed for vertical', () => {
    testBoard.newShip([7,4],[8,4],[9,4]);
    const shipToTest = testBoard.getShipFromCoords([7,4]);
    testBoard.createAllowedPositionMap(shipToTest, "false",0);
    expect(testBoard.isThisAllowedPlacement([2,2])).toBe(false);
})

test('coords adjacent flagged NOT allowed for horizontal', () => {
    testBoard.newShip([0,1],[0,2],[0,3],[0,4],[0,5]);
    const shipToTest = testBoard.getShipFromCoords([0,1]);
    testBoard.createAllowedPositionMap(shipToTest, "true",0);
    expect(testBoard.isThisAllowedPlacement([8,5])).toBe(false);
})

test('entire ship is considered in adjacency check', () => {
    expect(testBoard.isThisAllowedPlacement([7,0])).toBe(false);
})

test('out of bounds flagged NOT allowed', () => {
    expect(testBoard.isThisAllowedPlacement([9,9])).toBe(false);
})

test('does not flag adjacency to self', () => {
    expect(testBoard.isThisAllowedPlacement([0,0])).toBe(true);
})

test('does not flag non adjacencies', () => {
    const shipToTest = testBoard.getShipFromCoords([0,1]);
    testBoard.createAllowedPositionMap(shipToTest, "true",0);
    expect(testBoard.isThisAllowedPlacement([4,2])).toBe(true);
})

test('non-zero grab positions properly flags bounds', () => {
    const shipToTest = testBoard.getShipFromCoords([0,1]);
    testBoard.createAllowedPositionMap(shipToTest, "true",1);
    expect(testBoard.isThisAllowedPlacement([0,0])).toBe(false);
    expect(testBoard.isThisAllowedPlacement([0,6])).toBe(true);
})

test('non-zero grab positions properly flags adjacencies', () => {
    const shipToTest = testBoard.getShipFromCoords([2,3]);
    testBoard.createAllowedPositionMap(shipToTest, "true",2);
    expect(testBoard.isThisAllowedPlacement([0,7])).toBe(false);
})