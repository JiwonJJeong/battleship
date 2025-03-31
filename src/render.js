// contains methods to populate DOM
// render functions will display DOM elements
// build functions will build elements and return them without display
import "./styles.css";

const RenderManager = function(){
    
    let board1;
    let board2;
    let dialog;
    const initGameRender = function(player1Object, player2Object){
        const body = document.querySelector("body");
        const header = buildHeader();
        board1 = buildBoardAndHeader(player1Object.number, player1Object.name);
        board2 = buildBoardAndHeader(player2Object.number, player2Object.name);
        body.append(header, board1, board2);
        dialog = buildDialog();
        body.append(dialog);
    };

    const buildHeader = function(){
        const container = createElement("div","ui container");
        const turnText = createElement("h1", "turn text");
        turnText.textContent = "'s Turn";
        container.append(turnText);
        return container;
    }

    const buildBoardAndHeader = function(playerNumber, playerName){
        const board = createElement("div",`board container`);
        for (let i=0; i<10; i++){
            const row = createElement("div",`row-${i}`);
            row.setAttribute("row", i);
            for (let j=0; j<10; j++){
                const square = createElement("div");
                square.setAttribute("col", j);
                row.append(square);
            }
            board.append(row);
        }
        board.setAttribute("playernum", playerNumber);
        const boardAndHeader = createElement("div",`board-and-header container player-${playerNumber}`);
        const boardHeaderText= createElement("h2", "board header");
        boardHeaderText.textContent = `${playerName}'s Board`;
        boardAndHeader.append(boardHeaderText, board);
        return boardAndHeader;
    }

    const buildDialog = function(){
        const dialog = document.createElement("dialog");
        const dialogHeader = createElement("h1", "dialog header");
        dialogHeader.textContent = "Switch Players!"
        const dialogSubtext = createElement("p", "dialog subtext");
        dialogSubtext.textContent = "(click when ready)";
        dialog.append(dialogHeader, dialogSubtext);
        dialog.close();
        dialog.addEventListener("click", ()=> {dialog.close()});
        return dialog;
    }

    const renderNewShip = function(playerNumber,...coords){
        let board;
        if (playerNumber ==1){
            board = board1;
        } else{
            board = board2;
        }
        for (let [x,y] of coords){
            const squareToChange = board.querySelector(`div.row-${x} > div:nth-child(${y+1})`);
            squareToChange.classList.add("ship")
        }
    }

    const renderAttacked = function(squareDOMNode){
        squareDOMNode.classList.add("attacked");
    }

    const renderTurnSwitchTo = function(playerNumber, playerName){
        // add screen swapping overlay
        dialog.showModal();
        // playerNumber is number of player whose turn it should switch TO
        // change header to "It is players{playerNumber}.name's turn"
        const header = document.querySelector(".ui.container .turn.text");
        header.textContent = `${playerName}'s Turn`;
        // change board header from "Your Board" to "Enemy Board" and vis versa
        const board1Header = board1.querySelector(".header");
        const board2Header = board2.querySelector(".header");
        if (playerNumber == 1){
            board2Header.textContent = "Enemy Board";
            board1Header.textContent = "Your Board";
        } else {
            board1Header.textContent = "Enemy Board";
            board2Header.textContent = "Your Board";
        }
        // hide ships from enemy board and reveal ships on your board
        board1.lastChild.classList.toggle("visible");
        board2.lastChild.classList.toggle("visible");
    }

    // render ending game (playerName has won)
    const renderEndGame = function(winnerName){
        const winnerTextContainer = createElement("div", "end container");
        const winnerText = createElement("h1", "winner text");
        winnerText.textContent = `Congrats! ${winnerName} won.`;;
        const playAgainButton = createElement("button", "reset button");
        playAgainButton.textContent = "Play Again?";
        winnerTextContainer.append(winnerText, playAgainButton);
        const body = document.querySelector("body");
        body.append(winnerTextContainer);
    }

    const renderStaging = function(attackMap1, shipMap1, attackMap2, shipMap2){
        renderBoardReset(attackMap1, shipMap1, board1);
        renderBoardReset(attackMap2, shipMap2, board2);
    }

    const renderBoardReset = function(attackMap, shipMap, boardDOM){
        const board = boardDOM.querySelector(".board.container");
        for (let i=0; i<attackMap.length; i++){
            const row = i;
            const attackedInRow = Object.keys(attackMap[i]);
            const shipInRow = Object.keys(shipMap[i]);
            for (let attacked of attackedInRow){
                const col = Number(attacked)+1;
                const divToUnattack = board.querySelector(`div.row-${row} div:nth-child(${col})`);
                divToUnattack.classList.remove("attacked")
            }
            for (let ship of shipInRow){
                const col = Number(ship)+1;
                const divToUnship = board.querySelector(`div.row-${row} div:nth-child(${col})`);
                divToUnship.classList.remove("ship")
            }
        }
    }

    const renderShipsOffBoard = function(boardDOM){
        const shipHolder = createElement("div", "ship holder");
        const ship2 = buildShipOfLength(2,1);
        const ship3 = buildShipOfLength(3,2);
        const ship3_2 = buildShipOfLength(3,3);
        const ship4 = buildShipOfLength(4,4);
        const ship5 = buildShipOfLength(5,5);
        shipHolder.append(ship2,ship3, ship3_2, ship4, ship5);
        boardDOM.after(shipHolder);
    }

    const buildShipOfLength = function(length, id){
        const shipContainer = createElement("div", "ship container");
        shipContainer.setAttribute("horizontal", true);
        shipContainer.setAttribute("length", length);
        shipContainer.id = id;
        for (let i =0; i <length; i++){
            const div = document.createElement("div");
            div.classList.add("ship");
            div.setAttribute("part",i);
            shipContainer.append(div);
        }
        return shipContainer;
    }

    const createElement = function(elementType, classString = undefined){
        let element = document.createElement(elementType);
        if (classString != undefined){
            element.classList.add(...classString.split(" "));
        }
        return element;
    }

    return{
        initGameRender,
        renderNewShip,
        renderAttacked,
        renderTurnSwitchTo,
        renderEndGame,
        renderStaging,
        renderShipsOffBoard,
    }

}();

export {RenderManager};