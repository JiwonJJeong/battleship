// reminder to...
// ASSERT value of incoming query
// ASSERT direct public side effect of incoming commands
// Test EXPECTATION of sending with mocks of outgoing commands
// test nothing else

// and only test public interfaces, not private (with self) ones

import {Ship} from "./ship.js"

const testShip = new Ship(3);

test('ship has length of constructor input', () => {
    expect(testShip.length).toBe(3);
});

test('ship hit property returns hits', () => {
    expect(testShip.hits).toBe(0);
})

test('hit function increments hits', () => {
    testShip.hit();
    testShip.hit();
    expect(testShip.hits).toBe(2);
});