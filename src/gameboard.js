import {Ship} from "./ship.js";
import {LinkedList} from "../node_modules/linked-lists/linkedlist.js"

const Gameboard = function () {
  let boardMap;
  let attackMap;
  // make each map an array of 10 with each array being an object (similar to hash map)
  const initBoard = function () {
    boardMap = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    attackMap = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  }();

  const getBoardMap = function(){
    return boardMap;
  }

  const getAttackMap = function(){
    return attackMap;
  }

  let shipList = new LinkedList();
  // use rest parameter (...) to accept variable amount of coords
  const newShip = function (...coords) {
      const newShip = new Ship(coords.length);
      if (isShipAtCoords(...coords)){
        throw new Error(`Don't overlap ships`);
      }
      for (let [x,y] of coords){
        if (y < 10 && y >=0){
          boardMap[x][y] = newShip;
        } else{
          throw new Error("Bad y input for newShip()");
        }
      }
      // adding new ship to ship linked list
      shipList.append(newShip);
  };

  const isShipAtCoords = function(...coords){
    for (let [x,y] of coords){
      if (boardMap[x][y] !== undefined){
        return true;
      }
    }
    return false;
  }

  const getShipFromCoords = function([x,y]){
    return boardMap[x][y];
  }

  const receiveAttack = function([x,y]){
    if (wasAttacked([x,y])){
      throw new Error(`Cannot attack previous attacked (${x},${y})`);
    }
    const ship = boardMap[x][y];
    if (typeof(ship) == "object"){
      ship.hit();
      attackMap[x][y]="hit";
      return "hit";
    } else{
      attackMap[x][y] = "miss";
      return "miss";
    }
  }

  const wasAttacked = function([x,y]){
    return attackMap[x][y] || false;
  }

  const isAllSunk = function(){
    return (shipList.findCallback(false, "isSunk") == null);
  }

  const resetBoard = function(){
    boardMap = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    attackMap = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  }

  const isThisAdjacent = function([x,y], length, isHorizontal, shipObject){
    if (isHorizontal == "true"){
      // if horizontal, check around [x,y], [x+1,y], ... [x+length-1,y]
      for (let i=0; i<length; i++){
        return (adjacencyMap[x+i,y] !== undefined && adjacencyMap[x+i,y] !== shipObject)
      }
    } else{
      // if vertical, check around [x,y], [x,y-1], ... [x,y-length+1]
      for (let i=0; i<length; i++){
        return (adjacencyMap[x,y-i] !== undefined && adjacencyMap[x,y-i] !== shipObject)
      }
    }
    return false;
  }

  let adjacencyMap;
  const createAdjacencyMap = function(){
    adjacencyMap = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    for (let i=0; i<10; i++){
      for (let j=0; j<10; j++){
        if (boardMap[i][j] !== undefined){
          adjacencyMap[i][j] = boardMap[i][j];
          if (j>0){
            adjacencyMap[i][j-1]=boardMap[i][j];
            if (i>0){
              adjacencyMap[i-1][j-1]=boardMap[i][j];
            } else if (i<9){
              adjacencyMap[i+1][j-1] = boardMap[i][j];
            }
          }
          if (j<9){
            adjacencyMap[i][j+1] = boardMap[i][j];
            if (i>0){
              adjacencyMap[i-1][j+1]=boardMap[i][j];
            } else if (i<9){
              adjacencyMap[i+1][j+1] = boardMap[i][j];
            }
          }
          if (i>0){
            adjacencyMap[i-1][j] = boardMap[i][j];
          } else if (i<9){
            adjacencyMap[i+1][j]=boardMap[i][j];
          }
        }
      }
    }
  }

  const moveShip = function(ship,[startX,startY],length, isHorizontal){
    for (let row of attackMap){
      for (let col of Object.values(row)){
        if (col == ship){
          col = null;
        }
      }
    }
    const coords = [];
    if (isHorizontal == "true"){
      for (let i=0; i<length; i++){
        coords.push([startX+i,startY])
      }
    } else {
      for (let i=0; i<length; i++){
        coords.push([startX,startY-i])
      }
    }
    newShip(coords);
  }

  return {
    newShip,
    getShipFromCoords,
    receiveAttack,
    wasAttacked,
    isAllSunk,
    getBoardMap,
    resetBoard,
    getAttackMap,
    isThisAdjacent,
    moveShip,
    createAdjacencyMap,
  };
};

export { Gameboard };
