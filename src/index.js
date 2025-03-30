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
        } else{
            activateEventListener(players.player1.boardDOM);
        }
        const playerName = Object.values(players)[playerNumber-1].name;
        console.log(`${playerName}'s Turn`);
        RenderManager.renderTurnSwitchTo(playerNumber, playerName);
    }

    const activateEventListener = function(boardDOMNode){
        boardDOMNode.addEventListener("click", handleBoardClick);
    }

    const handleBoardClick = async function(event){
        let target = event.target;
        let playerNumber = target.parentNode.parentNode.getAttribute("playernum");
        let y = target.getAttribute("col");
        let x = target.parentNode.getAttribute("row");
        let playerObject = playerNumber == 1 ? players.player1 : players.player2;
        playerObject.gameboard.receiveAttack([x,y]);
        console.log(`Received attack at (${x},${y}) for player ${playerNumber}`);
        RenderManager.renderAttacked(target);
        playerObject.boardDOM.removeEventListener("click", handleBoardClick);
        await shortSleep();
        if (playerObject.gameboard.isAllSunk()){
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
        header.addEventListener("click", () => endGame(1))
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
        activateReplayButton();
    }

    const activateReplayButton = function(){
        const replayButton = document.querySelector("div.end.container button");
        console.log(replayButton);
        replayButton.addEventListener("click", enterGameStaging);
    }

    const enterGameStaging = function(){
        // activate drag and drop of ships to choose ship location using HTML drag and drop API!
        console.log("Entering new game staging!")
        RenderManager.renderStaging(
            players.player1.gameboard.getAttackMap(),
            players.player1.gameboard.getBoardMap(),
            players.player2.gameboard.getAttackMap(),
            players.player2.gameboard.getBoardMap()
        );
        players.player1.gameboard.resetBoard();
        players.player2.gameboard.resetBoard();
        const board1 = players.player1.boardDOM;
        RenderManager.renderShipsOffBoard(board1);
        activateDragHandler(board1);
            // should hold info about which square it is holding onto (and maybe rotation?)
        activateAllOndragover(board1);
        // activateDropEvent(board1);
            // should allow dragover divs
            // on drop, first render overlaps as red!
            // and on drop should calculate which square it is dropped at and info passed to from drag handler to store coordinates in gameboard
        // break screen
            // only allow if positions are valid and all filled
        // repeat for board 2
    }

    const activateDragHandler = function(boardDOM){
        const ships = boardDOM.parentNode.querySelectorAll(".ship.holder .container .ship");
        for (let shipPart of ships){
            shipPart.setAttribute("draggable", true);
            shipPart.addEventListener("dragstart", dragstartHandler);
        }
    }

    // target is div.ship.container > div
    const dragstartHandler = function(event){
        console.log("drag event triggered")
        console.log(event)
        const target = event.target;
        const container = event.target.parentNode;
        const dragData = {
            shipLength: container.getAttribute("length"),
            grabLocation: target.getAttribute("part"),
            horizontal: container.getAttribute("horizontal"),
        }
        const widthOfDiv = 20;
        const widthOfGap = 1;
        // if grablocation = 0, don't add anything
        // if grablocation = 1, add 1 gap and 1 div
        // if grablocation = 2, add 2 gaps and 2 divs
        const addOffsetX = (dragData.grabLocation * (widthOfDiv+widthOfGap));
        event.dataTransfer.setDragImage(container,event.offsetX + addOffsetX,event.offsetY);
        event.dataTransfer.setData("object", dragData);
        // dynamically allow where we can drop with ondragover attribute
        const playerNumber = container.previousElementSibling.getAttribute("playernum");
        let boardDOMNode;
        if (playerNumber == 1){
            boardDOMNode = players.player1.boardDOM;
        } else if (playerNumber == 2){
            boardDOMNode = players.player2.boardDOM;
        }
        activateOndragover(boardDOMNode, dragData);
    }

    const activateAllOndragover = function(boardDOM){
        for (let row of boardDOM.childNodes){
            for (let square of row.childNodes){
                square.addEventListener("ondragover", ondragoverHandler)
                square.setAttribute("dragListening", true);
            }
        }
    }

    const toggleOndragover = function(boardDOM, dragData){
        const rows = boardDOM.childNodes;
        if (dragData.isHorizontal){
            // if shipLength is 3, and grab location is 1 (the middle of ship)
            // prevent dropping on col 0 [less than 1] and col 9 [more than 10-(3-1)]
            for (let row of rows){
                const squares = row.childNodes;
                for (let i =dragData.grabLocation; i<10-(dragData.shipLength - dragData.grabLocation); i++){
                    const square = squares[i];
                    if (square.getAttribute("dragListening") == true){
                        square.removeEventListener("ondragover", ondragoverHandler);
                        square.setAttribute("dragListening", false);
                    } else{
                        square.addEventListener("ondragover", ondragoverHandler);
                        square.setAttribute("dragListening", true);
                    }
                }
            }
        } else{
            // if ship is vertical, do same limiting logic on the rows, not columns
            for (let i =dragData.grabLocation; i<10-(dragData.shipLength - dragData.grabLocation); i++){
                const row = rows[i];
                const squares = row.childNodes;
                for (let square of squares){
                    if (square.getAttribute("dragListening") == true){
                        square.removeEventListener("ondragover", ondragoverHandler);
                        square.setAttribute("dragListening", false);
                    } else{
                        square.addEventListener("ondragover", ondragoverHandler);
                        square.setAttribute("dragListening", true);
                    }
                }
            }
        }
    }

    const ondragoverHandler = function(ev){
        ev.preventDefault();
    }

    const shortSleep = function(){
        return new Promise(resolve => setTimeout(resolve, 1000));
    }

    return{
        players,
    }
}();

export {GameManager}