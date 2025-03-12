import {humanPlayer, computerPlayer} from "./player.js"

const GameManager = function(){

    let players;
    const initGame = function(){
        const player1 = new humanPlayer("Amy");
        const player2 = new humanPlayer("Bart");
        players = {player1, player2}
    }();

    return{
        players
    }
}();

export {GameManager}