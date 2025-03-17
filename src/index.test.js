/**
 * @jest-environment jsdom
 */

import {GameManager} from "./index.js"

test('GameManager adds ships to initialized player boards', () => {
    console.log(GameManager.players.player1.gameboard.getBoardMap());
    console.log(GameManager.players.player2.gameboard.getBoardMap());
})