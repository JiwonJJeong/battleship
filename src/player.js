const Player = function(name){

    return{
        name,
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