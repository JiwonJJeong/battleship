/**
 * @jest-environment jsdom
 */

import {GameManager} from "./index.js"

test('GameManager initializes with 2 players', () => {
    console.log(GameManager);
    expect(Object.values(GameManager.players)[0] instanceof Object).toBe(true);
    expect(Object.values(GameManager.players)[1]  instanceof Object).toBe(true);
})