// contains methods to populate DOM
// render functions will display DOM elements
// build functions will build elements and return them without display

const RenderManager = function(){
    
    const initBoard = function(){
        const body = document.querySelector("body");
        body.append(buildBoard());
    };

    let board;
    const buildBoard = function(){
        board = createElement("div","board container");
        for (let i=0; i<10; i++){
            const row = createElement("div",`row-${i}`);
            for (let j=0; j<10; j++){
                const square = createElement("div");
                row.append(square);
            }
            board.append(row);
        }
        return board;
    }

    const renderNewShip = function(...coords){
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
        initBoard,
        renderNewShip,
    }

}();

export {RenderManager};