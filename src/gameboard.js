import {Ship} from "./ship.js";

const Gameboard = function () {
  let boardMap;
  let attackMap;
  // make each map an array of 10 with each array being an object (similar to hash map)
  const initBoard = function () {
    boardMap = new Array(10).fill({});
    attackMap = new Array(10).fill({});
  }();

  // use rest parameter (...) to accept variable amount of coords
  const newShip = function (...coords) {
    try {
      const newShip = new Ship(coords.length);
      for (let [x,y] of coords){
        if (y < 10 && y >=0){
          boardMap[x][y] = newShip;
        } else{
          throw Error("Bad y input for newShip()");
        }
      }
    } catch (error) {
        console.error("Bad inputs for newShip()");
        return error;
  }};

  const getShipFromCoords = function([x,y]){
    return boardMap[x][y];
  }

  const receiveAttack = function([x,y]){
    const ship = boardMap[x][y];
    if (typeof(ship) == "object"){
      ship.hit();
      attackMap[x][y]="hit";
    } else{
      attackMap[x][y] = "miss";
    }
    return;
  }

  const wasAttacked = function([x,y]){
    return attackMap[x][y] || false;
  }

  const isAllSunk = function(){

  }

  return {
    newShip,
    getShipFromCoords,
    receiveAttack,
    wasAttacked,
  };
};

export { Gameboard };
