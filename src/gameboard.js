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

  // based on the way we implemented,
  // the first index for array is the x-value or the column in a matrix/grid
  // the second index for object key is the y-value or the row in a matrix/grid (increases going down)
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

  // USES allowed position map created with specific info about ship orientation and length
  const isThisAllowedPlacement = function([x,y]){
    return allowedPositionMap[x][y];
  }

  let allowedPositionMap;
  // uses adjacency map and ship length to show all posible topleft positions for the ship
  const createAllowedPositionMap = function(shipObject, isHorizontal){
    const adjacencyMap = createAdjacencyMap();
    allowedPositionMap = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    const length = shipObject.length;
    if (isHorizontal == "true"){
      for (let x = 0; x<10; x++){
        for (let y=0; y<10; y++){
          if (y> (10-length)){
            allowedPositionMap[x][y] = false;
          } else{
            allowedPositionMap[x][y] = isShipFitAdjacency([x,y], shipObject, isHorizontal, adjacencyMap);
          } 
        }
      }
     } else{
      for (let x = 0; x<10; x++){
        for (let y=0; y<10; y++){
          if (y > (10-length)){
              allowedPositionMap[x][y] = false;
          } else {
            allowedPositionMap[x][y] = isShipFitAdjacency([x,y],shipObject, isHorizontal, adjacencyMap);
          }
        }
      }
    }
    console.log("allowed position map created")
    return allowedPositionMap;
  };

  const isShipFitAdjacency = function([x,y],shipObject, isHorizontal, map){
    const length = shipObject.length;
    if (isHorizontal == "true"){
      for (let i=0; i<length; i++){
        if (typeof map[x+i] !== "undefined" && typeof map[x+i][y] !== "undefined" && map[x+i][y] != shipObject){
          return false;
        }
      }
    } else {
      for (let i=0; i<length; i++){
        if (typeof map[x] !== "undefined" && typeof map[x][y+i] !== "undefined" && map[x][y+i] != shipObject){
          return false;
        }
      }
    }
    return true;
  }


  const createAdjacencyMap = function(){
    let adjacencyMap = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    for (let i=0; i<10; i++){
      for (let j=0; j<10; j++){
        if (typeof boardMap[i][j] !== "undefined"){
          const ship = boardMap[i][j];
          adjacencyMap[i][j] = ship;
          if (j>0){
            adjacencyMap[i][j-1]=ship;
            if (i>0){
              adjacencyMap[i-1][j-1]=ship;
            } if (i<9){
              adjacencyMap[i+1][j-1] = ship;
            }
          }
          if (j<9){
            adjacencyMap[i][j+1] = ship;
            if (i>0){
              adjacencyMap[i-1][j+1]=ship;
            } if (i<9){
              adjacencyMap[i+1][j+1] = ship;
            }
          }
          if (i>0){
            adjacencyMap[i-1][j] = ship;
          } if (i<9){
            adjacencyMap[i+1][j]=ship;
          }
        }
      }
    }
    return adjacencyMap;
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
    isThisAllowedPlacement,
    moveShip,
    createAllowedPositionMap,
  };
};

export { Gameboard };
