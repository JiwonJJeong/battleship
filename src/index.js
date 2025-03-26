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

    // passes turn to player 1 if number = 1
    // if it is player 1's turn, then board 2 should be ACTIVE
    const passTurnTo = function(playerNumber){
        if (playerNumber == 1){
            activateEventListener(players.player2.boardDOM);
            deactivateEventListener(players.player1.boardDOM);
        } else{
            activateEventListener(players.player1.boardDOM);
            deactivateEventListener(players.player2.boardDOM);
        }
        const playerName = Object.values(players)[playerNumber-1].name;
        console.log(`${playerName}'s Turn`);
        RenderManager.renderTurnSwitchTo(playerNumber, playerName);
    }

    const deactivateEventListener = function(boardDOMNode){
        boardDOMNode.removeEventListener("click", handleBoardClick);
    }

    const activateEventListener = function(boardDOMNode){
        boardDOMNode.addEventListener("click", handleBoardClick);
    }

    const handleBoardClick = async function(event){
        let target = event.target;
        let playerNumber = target.parentNode.parentNode.getAttribute("playernum");
        let x = target.getAttribute("col");
        let y = target.parentNode.getAttribute("row");
        let gameboardObject = playerNumber == 1 ? players.player1.gameboard : players.player2.gameboard;
        gameboardObject.receiveAttack([x,y]);
        console.log(`Received attack at (${x},${y}) for player ${playerNumber}`);
        RenderManager.renderAttacked(target);
        await shortSleep();
        if (gameboardObject.isAllSunk()){
            endGame(playerNumber);
        } else{
            passTurnTo(playerNumber); // We pass turn to player's board we just clicked
        }
    }

    const initPlay = function(){
        // assign event listener for attacks
        const board1 = document.querySelector(".board-and-header.player-1 .board.container");
        const board2 = document.querySelector(".board-and-header.player-2 .board.container");
        players.player1.boardDOM = board1;
        players.player2.boardDOM = board2;
        // later make first turn random or chosen
        board2.classList.add("visible");
        passTurnTo(1);
        const dialog = document.querySelector("dialog");
        dialog.close();
        return;
    };

    let players;
    const initGame = function(){
        const player1 = new humanPlayer("Amy", 1);
        const player2 = new humanPlayer("Bart", 2);
        RenderManager.initGameRender(player1, player2);
        // each player has 5 ships of size 2, 3, 3, 4, 5
        // enterGameStaging();
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
        //just for testing!
        const header = document.querySelector(".ui.container");
        header.addEventListener("click", () => RenderManager.renderEndGame("Skip to End!"))
    }();

    // player with playerNumber lost
    const endGame = function(playerNumber){
        let winnerName;
        if (playerNumber ==1){
            winnerName = players.player2.name;
        } else{
            winnerName = players.player1.name;
        }
        RenderManager.renderEndGame(winnerName);
        enterGameStaging();
    }

    const enterGameStaging = function(){
        // activate drag and drop of ships to choose ship location using HTML drag and drop API!
        // renderShipsOffBoard(board1);
        // activateDragHandler(board1);
            // if it is already on the board, remove it from gameboard data 
            // should hold info about which square it is holding onto (and maybe rotation?)
        // activateDropEvent(board1);
            // should allow dragover divs
            // on drop, first render overlaps as red!
            // and on drop should calculate which square it is dropped at and info passed to from drag handler to store coordinates in gameboard
        // break screen
            // only allow if positions are valid and all filled
        // repeat for board 2
    }

    const shortSleep = function(){
        return new Promise(resolve => setTimeout(resolve, 1000));
    }

    return{
        players
    }
}();

export {GameManager}