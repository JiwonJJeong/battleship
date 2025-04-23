import {Gameboard} from "./gameboard.js"

const Player = function(name, number){

    let gameboard;
    const init = function(){
        gameboard = new Gameboard();
    }();

    return{
        name,
        number,
        gameboard,
    }
}

const computerPlayer = function(number){

    return{
        // inherit properties by composition
        ...(new Player("Computer Bob", number)),
    }
}

const humanPlayer = function(name, number){

    return{
        ...(new Player(name, number)),
    }
}

export {Player, computerPlayer, humanPlayer};