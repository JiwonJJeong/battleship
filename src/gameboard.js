import {Ship} from "./ship.js";

const Gameboard = function () {
  let boardMatrix;
  let attackMatrix;
  const initBoard = function () {
    boardMatrix = new Array(10);
    attackMatrix = new Array(10);
    for (let i =0; i<boardMatrix.length; i++) {
      boardMatrix[i] = new Array(10);
      attackMatrix[i] = new Array(10);
    }
  }();

  // use rest parameter (...) to accept variable amount of coords
  const newShip = function (...coords) {
    const newShip = new Ship(coords.length);
    for (let [x,y] of coords){
        boardMatrix[x][y] = newShip;
    }
  };

  const getShipFromCoords = function([x,y]){
    return boardMatrix[x][y];
  }

  const receiveAttack = function([x,y]){
    const ship = boardMatrix[x][y];
    if (typeof(ship) == "object"){
      ship.hit();
      attackMatrix[x][y]="hit";
    } else{
      attackMatrix[x][y] = "miss";
    }
    return;
  }

  const wasAttacked = function([x,y]){
    return attackMatrix[x][y] || false;
  }

  return {
    newShip,
    getShipFromCoords,
    receiveAttack,
    wasAttacked,
  };
};

export { Gameboard };
