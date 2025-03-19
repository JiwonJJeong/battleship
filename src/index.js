// module to manage game using event listeners to interact with objects
// calls methods in render.js to change DOM
// realistically does not export anything since it is a driver

import {humanPlayer, computerPlayer} from "./player.js"
import {RenderManager} from "./render.js"

const GameManager = function(){

    const addNewShip = function(player, ...coords){
        player.gameboard.newShip(...coords);
        RenderManager.renderNewShip(player.number,...coords);
    }

    const initPlay = function(){
        // assign event listener for attacks
        const board1 = document.querySelector(".board-1.container");
        const board2 = document.querySelector(".board-2.container");
        addEventListenerForBoard(board1);
        addEventListenerForBoard(board2);
            // use event delegation to find attacks

            // use attack on gameboard module and receive either "hit" "miss" or Error
            // check for ship sink
            // check for game loss
            // update render according to returned value, ship loss, and game loss
            // toggle off player 1 and toggle on player 2 event listeners
            // render change in turn
        return;
    };

    let players;
    const initGame = function(){
        const player1 = new humanPlayer("Amy", 1);
        const player2 = new humanPlayer("Bart", 2);
        RenderManager.initBoards(player1.number, player2.number);
        // each player has 5 ships of size 2, 3, 3, 4, 5
        addNewShip(player1,[0,0],[0,1])
        addNewShip(player1,[3,3],[4,3],[5,3]);
        addNewShip(player1,[7,6],[8,6],[9,6]);
        addNewShip(player1,[0,3], [0,4],[0,5],[0,6]);
        addNewShip(player1,[5,5], [6,5],[7,5],[8,5],[9,5]);
        addNewShip(player2,[7,7],[7,8]);
        addNewShip(player2,[3,3],[4,3],[5,3]);
        addNewShip(player2,[7,6],[8,6],[9,6]);
        addNewShip(player2,[0,3], [0,4],[0,5],[0,6]);
        addNewShip(player2,[5,5], [6,5],[7,5],[8,5],[9,5]);
        players = {player1, player2}
        initPlay();
    }();

    const addEventListenerForBoard = function(boardDOMNode){
        boardDOMNode.addEventListener("click", (event) =>{
            let target = event.target;
            let playerNumber = target.parentNode.parentNode.getAttribute("playernum");
            let x = target.getAttribute("col");
            let y = target.parentNode.getAttribute("row");
            players[playerNumber].gameboard.receiveAttack([x,y]);
            if (players[playerNumber].gameboard.isAllSunk()){
                endGame(playerNumber);
            } else{
                passTurn();
            }
        })
    }


    return{
        players
    }
}();

export {GameManager}