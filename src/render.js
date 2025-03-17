// contains methods to populate DOM
// render functions will display DOM elements
// build functions will build elements and return them without display
import "./styles.css";

const RenderManager = function(){
    
    let board1;
    let board2;
    const initBoards = function(player1Number, player2Number){
        const body = document.querySelector("body");
        board1 = buildBoard(player1Number);
        board2 = buildBoard(player2Number);
        body.append(board1, board2);
    };

    const buildBoard = function(playerNumber){
        const board = createElement("div","board container");
        for (let i=0; i<10; i++){
            const row = createElement("div",`row-${i}`);
            for (let j=0; j<10; j++){
                const square = createElement("div");
                row.append(square);
            }
            board.append(row);
        }
        board.classList.add(playerNumber)
        return board;
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

    const createElement = function(elementType, classString = undefined){
        let element = document.createElement(elementType);
        if (classString != undefined){
            element.classList.add(...classString.split(" "));
        }
        return element;
    }

    return{
        initBoards,
        renderNewShip,
    }

}();

export {RenderManager};