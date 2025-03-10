// reminder to...
// ASSERT value of incoming query
// ASSERT direct public side effect of incoming commands
// Test EXPECTATION of sending with mocks of outgoing commands
// test nothing else

import {Ship} from "./ship.js"

const testShip = new Ship(3);

test('ship has length of constructor input', () => {
    expect(testShip.length).toBe(3);
});