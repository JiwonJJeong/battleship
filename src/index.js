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

    const addEventListenerForBoard = function(boardDOMNode){
        boardDOMNode.addEventListener("click", (event) =>{
            let target = event.target;
            let playerNumber = target.parentNode.parentNode.getAttribute("playernum");
            let x = target.getAttribute("col");
            let y = target.parentNode.getAttribute("row");
            let gameboardObject = players[`player${playerNumber}`].gameboard;
            gameboardObject.receiveAttack([x,y]);
            console.log(`Received attack at (${x},${y}) for player ${playerNumber}`);
            RenderManager.renderAttacked(target);
            if (gameboardObject.isAllSunk()){
                //endGame(playerNumber);
            } else{
                //passTurn(boardDOMNode);
            }
        })
    }

    const initPlay = function(){
        // assign event listener for attacks
        const board1 = document.querySelector(".board-and-header.player-1 .board.container");
        const board2 = document.querySelector(".board-and-header.player-2 .board.container");
        addEventListenerForBoard(board1);
        addEventListenerForBoard(board2);
        // later make first turn random or chosen
        //passTurn(board1);
        return;
    };

    let players;
    const initGame = function(){
        const player1 = new humanPlayer("Amy", 1);
        const player2 = new humanPlayer("Bart", 2);
        RenderManager.initGameRender(player1, player2);
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
        players = {player1, player2};
        initPlay();
    }();

    return{
        players
    }
}();

export {GameManager}