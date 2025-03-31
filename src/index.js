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
        activateDragHandlerAndEndHandler(board1);
            // should hold info about which square it is holding onto (and maybe rotation?)
        activateAllOndragoverOnDrop(board1);
        // activateDropEvent(board1);
            // should allow dragover divs
            // on drop, first render overlaps as red!
            // and on drop should calculate which square it is dropped at and info passed to from drag handler to store coordinates in gameboard
        // break screen
            // only allow if positions are valid and all filled
        // repeat for board 2
    }

    const activateDragHandlerAndEndHandler = function(boardDOM){
        const ships = boardDOM.parentNode.querySelectorAll(".ship.holder .container .ship");
        for (let shipPart of ships){
            shipPart.setAttribute("draggable", true);
            shipPart.addEventListener("dragstart", (event) => dragstartHandler(event));
            shipPart.addEventListener("dragend", (event) => toggleOndragoverBoard(boardDOM, event));
        }
    }

    // target is div.ship.container > div
    const dragstartHandler = function(event){
        console.log("drag event triggered")
        console.log(event)
        const target = event.target;
        const container = event.target.parentNode;
        event.dataTransfer.setData("shipLength", container.getAttribute("length"));
        const grabLocation = target.getAttribute("part")
        event.dataTransfer.setData("grabLocation", grabLocation);
        event.dataTransfer.setData("horizontal", container.getAttribute("horizontal"));
        event.dataTransfer.setData("shipId", container.id);
        const widthOfDiv = 20;
        const widthOfGap = 1;
        // if grablocation = 0, don't add anything
        // if grablocation = 1, add 1 gap and 1 div
        // if grablocation = 2, add 2 gaps and 2 divs
        const addOffsetX = (grabLocation * (widthOfDiv+widthOfGap));
        event.dataTransfer.setDragImage(container,event.offsetX + addOffsetX,event.offsetY);
        // dynamically allow where we can drop with ondragover attribute
        const playerNumber = container.parentNode.previousElementSibling.getAttribute("playernum");
        let boardDOMNode;
        if (playerNumber == 1){
            boardDOMNode = players.player1.boardDOM;
        } else if (playerNumber == 2){
            boardDOMNode = players.player2.boardDOM;
        }
        toggleOndragoverBoard(boardDOMNode, event, true);
    }

    const activateAllOndragoverOnDrop = function(boardDOM){
        for (let row of boardDOM.childNodes){
            for (let square of row.childNodes){
                square.addEventListener("dragover", ondragoverHandler)
                square.addEventListener("drop", dropHandler)
                square.setAttribute("dragListening", true);
            }
        }
    }

    const toggleOndragoverBoard = function(boardDOM, event, isDataTransfered = false){
        let isHorizontal;
        let grabLocation;
        let shipLength;
        if (isDataTransfered){
            isHorizontal = event.dataTransfer.getData("horizontal");
            grabLocation = Number(event.dataTransfer.getData("grabLocation"));
            shipLength = Number(event.dataTransfer.getData("shipLength"));
        } else{
            const target = event.target;
            const container = target.parentNode;
            isHorizontal = container.getAttribute("horizontal");
            grabLocation = target.getAttribute("part");
            shipLength = container.getAttribute("length");
        }
        console.log(`toggleOndragover called for length ${shipLength} and grab location ${grabLocation}`)
        const rows = boardDOM.childNodes;
        if (isHorizontal == "true"){
            // if shipLength is 3, and grab location is 1 (the middle of ship)
            // prevent dropping on col 0 [less than 1] and col 9 [more than 10-(3-1)]
            for (let row of rows){
                const squares = row.childNodes;
                for (let i =0; i<grabLocation; i++){
                    toggleOndragover(squares[i]);
                }
                for (let j =(10-shipLength+grabLocation+1); j<10; j++){
                    toggleOndragover(squares[j]);
                }
            }
        } else{
            // if ship is vertical, do same limiting logic on the rows, not columns
            for (let i =0; i<grabLocation; i++){
                const row = rows[i];
                const squares = row.childNodes;
                for (let square of squares){
                    toggleOndragover(square);
                }
            }
            for (let j =(10-shipLength+grabLocation); j<10; j++){
                const row = rows[j];
                const squares = row.childNodes;
                for (let square of squares){
                    toggleOndragover(square);
                }
            }
        }
    }

    const toggleOndragover = function(square){
        if (square.getAttribute("dragListening") == "true"){
            square.removeEventListener("dragover", ondragoverHandler);
            square.setAttribute("dragListening", false);
        } else{
            square.addEventListener("dragover", ondragoverHandler);
            square.setAttribute("dragListening", true);
        }
    }

    const ondragoverHandler = function(ev){
        ev.preventDefault();
        console.log("dragover detected!")
    }

    // dataObject holds... shipLength, grabLocation, horizontal, shipId: container.id,
    const dropHandler = function(ev){
        ev.preventDefault();
        console.log("drop detected!")
        const shipLength = ev.dataTransfer.getData("shipLength");
        const horizontal = ev.dataTransfer.getData("horizontal");
        const shipId = ev.dataTransfer.getData("shipId");
        const grabLocation = ev.dataTransfer.getData("grabLocation");
        const droppedSquare = ev.target;
        const droppedRow = droppedSquare.parentNode;
        const oldShip = document.querySelector(`.ship.holder .container .ship#${shipId}`);
        const oldShipParts = oldShip.childNodes;
        const droppedColIndex = droppedSquare.getAttribute("col");
        // grab location already accounts for shiplength on left side
        // if grabLocation goes up, start index should DECREASE and end index should INCREASE from droppedColIndex
        // if shipLength is 5, grab position is 3 (4th part), and dropColIndex is 7 then fill square indexes 4 (7-3),5,6,7,8 (7-3+4)
        if (horizontal == "true"){
            const squaresOfRow = droppedRow.childNodes;
            for (let i = 0; i < shipLength; i++){
                squaresOfRow[droppedColIndex+i-grabLocation].appendChild(oldShipParts[i]);
            }
        } else {
            // add squares vertically
        }
    }

    const shortSleep = function(){
        return new Promise(resolve => setTimeout(resolve, 1000));
    }

    return{
        players,
    }
}();

export {GameManager}