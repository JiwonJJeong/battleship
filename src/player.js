import {Gameboard} from "./gameboard.js"

const Player = function(name){

    let gameboard;
    const init = function(){
        gameboard = new Gameboard();
    }();

    return{
        name,
        gameboard,
    }
}

const computerPlayer = function(name){

    return{
        // inherit properties by composition
        ...(new Player(name)),
    }
}

const humanPlayer = function(name){

    return{
        ...(new Player(name)),
    }
}

export {Player, computerPlayer, humanPlayer};