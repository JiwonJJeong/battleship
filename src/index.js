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
        RenderManager.renderShipSamples();
        const board1 = players.player1.boardDOM;
        renderDraggableShipsToStage(players.player1);
        activateAllOndragoverOnDrop(board1);
        // activateDropEvent(board1);
            // should allow dragover divs
            // on drop, first render overlaps as red!
            // and on drop should calculate which square it is dropped at and info passed to from drag handler to store coordinates in gameboard
        // break screen
            // only allow if positions are valid and all filled
        // repeat for board 2
    }

    const renderDraggableShipsToStage = function(player){
        addNewShipWithDragging(player,[0,0],[0,1])
        addNewShipWithDragging(player,[3,3],[4,3],[5,3]);
        addNewShipWithDragging(player,[7,6],[8,6],[9,6]);
        addNewShipWithDragging(player,[0,3], [0,4],[0,5],[0,6]);
        addNewShipWithDragging(player,[5,5], [6,5],[7,5],[8,5],[9,5]);
        player.gameboard.createAdjacencyMap();
    }

    const addNewShipWithDragging = function(player, ...coords){
        addNewShip(player, ...coords);
        activateDragHandlerAndEndHandler(player.boardDOM, ...coords);
    }

    const activateDragHandlerAndEndHandler = function(boardDOM, ...coords){
        for (let [x,y] of coords){
            const square = boardDOM.querySelector(`.row-${x} div:nth-child(${y+1})`);
            square.setAttribute("draggable", true);
        }
    }

    // target is col div (eg: square)
    let startRow;
    let startCol;
    let isHorizontal;
    let shipLength;
    let grabLocation;
    const dragstartHandler = function(event){
        console.log("drag event triggered");
        const target = event.target;
        shipLength = Number(target.getAttribute("length"));
        event.dataTransfer.setData("shipLength", length);
        grabLocation = Number(target.getAttribute("grablocation"));
        event.dataTransfer.setData("grabLocation", grabLocation);
        event.dataTransfer.setData("horizontal", target.getAttribute("horizontal"));
        startRow = Number(target.parentNode.getAttribute("row"));
        startCol = Number(target.getAttribute("col"));
        isHorizontal = target.getAttribute("horizontal");
        const widthOfDiv = 20;
        const widthOfGap = 1;
        // if grablocation = 0, don't add anything
        // if grablocation = 1, add 1 gap and 1 div
        // if grablocation = 2, add 2 gaps and 2 divs
        const addOffsetX = (grabLocation * (widthOfDiv+widthOfGap));
        const dragImageNode = document.querySelector(`.hidden.samples .ships.horizontal #length-${shipLength}`);
        event.dataTransfer.setDragImage(dragImageNode,event.offsetX + addOffsetX,event.offsetY);
        // dynamically allow where we can drop with ondragover attribute
    }

    const activateAllOndragoverOnDrop = function(boardDOM){
        for (let row of boardDOM.childNodes){
            for (let square of row.childNodes){
                square.addEventListener("dragover", ondragoverHandler);
                square.addEventListener("drop", dropHandler);
                square.addEventListener("dragstart", dragstartHandler);
            }
        }
    }

    const isShipDragOnBoard = function(isHorizontal, shipLength, grabLocation, row = undefined, col = undefined){
        if (isHorizontal == "true"){
            // if shipLength is 3, and grab location is 1 (the middle of ship)
            // then location of row MUST NOT be col 0 [so greater than 1] NOR col 9 [so less than 10-(3-1)]
            return (row > grabLocation) && (row < 10-shipLength+grabLocation+1);
        } else{
            // if ship is vertical, do same limiting logic on the rows, not columns
            return (col > grabLocation) && (col < 10-shipLength+grabLocation+1);
        }
    }

    const ondragoverHandler = function(ev){
        const row = Number(ev.target.parentNode.getAttribute("row"));
        const col = Number(ev.target.getAttribute("col"));
        let newStartRow = row;
        let newStartCol = col;
        if (isHorizontal == "true"){
            newStartCol = col - grabLocation;
        } else{
            newStartRow = row - grabLocation;
        }
        const playerNum = ev.target.parentNode.parentNode.getAttribute("playernum");
        let player;
        if (playerNum == 1){
            player = players.player1;
        } else{
            player = players.player2;
        }
        const oldStartRow = startRow;
        const oldStartCol = startCol;
        if (isShipDragOnBoard(isHorizontal, shipLength, grabLocation,row,col) 
            && !player.gameboard.isThisAdjacent([oldStartRow,oldStartCol],[newStartRow,newStartCol],shipLength,isHorizontal)){
                ev.preventDefault();
                RenderManager.renderMoveShip([oldStartRow,oldStartCol],
                    [newStartRow,newStartCol], shipLength, isHorizontal, player.boardDOM)
                console.log("dragover detected!")
        }
    }

    const dropHandler = function(ev){
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