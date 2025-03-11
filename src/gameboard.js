import {Ship} from "./ship.js";

const Gameboard = function () {
  let boardMatrix;
  const initBoard = function () {
    boardMatrix = new Array(10);
    for (let i =0; i<boardMatrix.length; i++) {
      boardMatrix[i] = new Array(10);
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

  return {
    newShip,
    getShipFromCoords,
  };
};

export { Gameboard };
