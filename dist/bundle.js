/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../linked-lists/linkedlist.js":
/*!*************************************!*\
  !*** ../linked-lists/linkedlist.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkedList: () => (/* binding */ LinkedList),
/* harmony export */   Node: () => (/* binding */ Node)
/* harmony export */ });
// LinkedList represents full list
const LinkedList = function () {
  let headNode = null;
  const head = function () {
    return headNode;
  };

  const tail = function () {
    let node = headNode;
    while (node.nextNode != null) {
      node = node.nextNode;
    }
    return node;
  };

  const append = function (value) {
    if (headNode == null) {
      headNode = new Node(value);
    } else {
      tail().nextNode = new Node(value);
    }
  };

  const prepend = function (value) {
    if (headNode == null) {
      headNode = new Node(value);
    } else {
      headNode = new Node(value, headNode);
    }
  };

  const size = function () {
    let count = 0;
    if (headNode == null) {
      return count;
    } else {
      count++;
    }
    let node = headNode;
    while (node.nextNode != null) {
      node = node.nextNode;
      count++;
    }
    return count;
  };

  // count index from 1
  const at = function (index) {
    if (index <= 0) {
      return null;
    }
    let node = headNode;
    while (index > 1) {
      node = node.nextNode;
      index--;
      if (node == null) {
        return null;
      }
    }
    return node;
  };

  const pop = function () {
    let secondToLastIndex = size() - 1;
    let secondToLastNode = at(secondToLastIndex);
    secondToLastNode.nextNode = null;
  };

  // returns true if value passed is in list, else returns false
  const contains = function (value, compareKey = "value") {
    let node = headNode;
    while (node != null) {
      if (node.value == value || node.value[compareKey] == value) {
        return true;
      } else {
        node = node.nextNode;
      }
    }
    return false;
  };

  // returns index of node containing value, or null if not found
  const find = function (value, compareKey = "value") {
    let node = headNode;
    let index = 1;
    while (node != null) {
      if (node.value == value || node.value[compareKey] == value) {
        return index;
      } else {
        node = node.nextNode;
        index++;
      }
    }
    return null;
  };

  // returns node containing value, or null if not found
  // but checks for node.callbackfunction() being equal to value
  const findCallback = function (value, callbackFunction) {
    let node = headNode;
    while (node != null) {
      if (node.value[callbackFunction]() == value) {
        return node;
      } else {
        node = node.nextNode;
      }
    }
    return null;
  };  

  // same as find, but returns the node, not index
  const findNode = function (value, compareKey = "value") {
    let node = headNode;
    while (node != null) {
      if (node.value == value || node.value[compareKey] == value) {
        return node;
      } else {
        node = node.nextNode;
      }
    }
    return null;
  };

  // returns string of node values in format "(value) -> (value) -> null"
  const toString = function () {
    if (headNode == null) {
      return null;
    }
    let string = `( ${headNode.value} )`;
    let node = headNode.nextNode;
    while (node != null) {
      string += ` -> ( ${node.value} )`;
      node = node.nextNode;
    }
    string += " -> null";
    return string;
  };

  // inserts new Node with value at index (counting from 1)
  const insertAt = function (value, index) {
    const priorIndex = index - 1;
    if (priorIndex == 0) {
      prepend(value);
      return;
    }
    let priorNode = at(priorIndex);
    if (priorNode == null) {
      error.log(`${index} is not valid index.`);
      return;
    } else {
      const nextNode = priorNode.nextNode;
      priorNode.nextNode = new Node(value, nextNode);
    }
  };

  // removes node at index (counting from 1)
  const removeAt = function (index) {
    const priorIndex = index - 1;
    if (priorIndex == 0) {
      let nodeToRemove = headNode;
      headNode = headNode.nextNode;
      nodeToRemove = null;
      return;
    }
    let priorNode = at(priorIndex);
    let nodeToRemove = priorNode.nextNode;
    const nextNode = priorNode.nextNode.nextNode;
    priorNode.nextNode = nextNode;
    nodeToRemove = null;
  };

  return {
    head,
    tail,
    append,
    prepend,
    size,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
    findNode,
    findCallback,
  };
};

// Node contains value property, nextNode

const Node = function (value = null, nextNode = null) {
  return {
    value,
    nextNode,
  };
};




/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `

.board.container{
    display: flex;
    flex-direction: column;
    gap: 1px;
    width: min-content;
    background-color: black;

    > div{
        display: flex;
        flex-direction: row;
        gap: 1px;

        div{
            aspect-ratio: 1/1;
            height: 20px;
            background-color:gray;
        }

        .ship.attacked{
            background-color: purple;
        }

        .attacked{
            background-color: red;
        }
    }
}

.board.container.visible{
    .ship{
        background-color: aqua;
    }
}

/* style ships off board during staging */
.hidden.samples > div{
    display: flex;
    gap: 3px;
    flex-direction: column;

    > div{
        background-color: black;
        width: min-content;
        display: flex;
        flex-direction: row;
        gap: 1px;

        div{
            aspect-ratio: 1/1;
            height: 20px;
            background-color:aqua;
        }
    }
}

/* style dialog */
::backdrop{
    background-color: purple;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":";;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,kBAAkB;IAClB,uBAAuB;;IAEvB;QACI,aAAa;QACb,mBAAmB;QACnB,QAAQ;;QAER;YACI,iBAAiB;YACjB,YAAY;YACZ,qBAAqB;QACzB;;QAEA;YACI,wBAAwB;QAC5B;;QAEA;YACI,qBAAqB;QACzB;IACJ;AACJ;;AAEA;IACI;QACI,sBAAsB;IAC1B;AACJ;;AAEA,yCAAyC;AACzC;IACI,aAAa;IACb,QAAQ;IACR,sBAAsB;;IAEtB;QACI,uBAAuB;QACvB,kBAAkB;QAClB,aAAa;QACb,mBAAmB;QACnB,QAAQ;;QAER;YACI,iBAAiB;YACjB,YAAY;YACZ,qBAAqB;QACzB;IACJ;AACJ;;AAEA,iBAAiB;AACjB;IACI,wBAAwB;AAC5B","sourcesContent":["\n\n.board.container{\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    width: min-content;\n    background-color: black;\n\n    > div{\n        display: flex;\n        flex-direction: row;\n        gap: 1px;\n\n        div{\n            aspect-ratio: 1/1;\n            height: 20px;\n            background-color:gray;\n        }\n\n        .ship.attacked{\n            background-color: purple;\n        }\n\n        .attacked{\n            background-color: red;\n        }\n    }\n}\n\n.board.container.visible{\n    .ship{\n        background-color: aqua;\n    }\n}\n\n/* style ships off board during staging */\n.hidden.samples > div{\n    display: flex;\n    gap: 3px;\n    flex-direction: column;\n\n    > div{\n        background-color: black;\n        width: min-content;\n        display: flex;\n        flex-direction: row;\n        gap: 1px;\n\n        div{\n            aspect-ratio: 1/1;\n            height: 20px;\n            background-color:aqua;\n        }\n    }\n}\n\n/* style dialog */\n::backdrop{\n    background-color: purple;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
/* harmony import */ var _node_modules_linked_lists_linkedlist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/linked-lists/linkedlist.js */ "../linked-lists/linkedlist.js");



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
  // the first index for array is the r-value or the column in a matrix/grid
  // the second index for object key is the c-value or the row in a matrix/grid (increases going down)
  let shipList = new _node_modules_linked_lists_linkedlist_js__WEBPACK_IMPORTED_MODULE_1__.LinkedList();
  // use rest parameter (...) to accept variable amount of coords
  const newShip = function (...coords) {
      const newShip = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(coords.length);
      if (isShipAtCoords(...coords)){
        console.log(boardMap);
        throw new Error(`Don't overlap ships at: ${coords}`);
      }
      for (let [r,c] of coords){
        if (c < 10 && c >=0){
          boardMap[r][c] = newShip;
        } else{
          throw new Error(`Bad col input for newShip(): ${coords}`);
        }
      }
      // adding new ship to ship linked list
      shipList.append(newShip);
  };

  const isShipAtCoords = function(...coords){
    for (let [r,c] of coords){
      if (boardMap[r] !== undefined && boardMap[r][c] !== undefined){
        return true;
      }
    }
    return false;
  }

  const getShipFromCoords = function([r,c]){
    return boardMap[r][c];
  }

  const receiveAttack = function([r,c]){
    if (wasAttacked([r,c])){
      throw new Error(`Cannot attack previous attacked (${r},${c})`);
    }
    const ship = boardMap[r][c];
    if (typeof(ship) == "object"){
      ship.hit();
      attackMap[r][c]="hit";
      return "hit";
    } else{
      attackMap[r][c] = "miss";
      return "miss";
    }
  }

  const wasAttacked = function([r,c]){
    return attackMap[r][c] || false;
  }

  const isAllSunk = function(){
    return (shipList.findCallback(false, "isSunk") == null);
  }

  const resetBoard = function(){
    boardMap = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    attackMap = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  }

  // USES allowed position map created with specific info about ship orientation and length
  const isThisAllowedPlacement = function([r,c]){
    return allowedPositionMap[r][c];
  }

  let allowedPositionMap;
  // uses adjacency map and ship length to show all posible topleft positions for the ship
  const createAllowedPositionMap = function(shipObject, isHorizontal){
    const adjacencyMap = createAdjacencyMap();
    allowedPositionMap = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    const length = shipObject.length;
    if (isHorizontal == "true"){
      for (let r = 0; r<10; r++){
        for (let c=0; c<10; c++){
          if (c> (10-length)){
            allowedPositionMap[r][c] = false;
          } else{
            allowedPositionMap[r][c] = isShipFitAdjacency([r,c], shipObject, isHorizontal, adjacencyMap);
          } 
        }
      }
     } else{
      for (let r = 0; r<10; r++){
        for (let c=0; c<10; c++){
          if (c > (10-length)){
              allowedPositionMap[r][c] = false;
          } else {
            allowedPositionMap[r][c] = isShipFitAdjacency([r,c],shipObject, isHorizontal, adjacencyMap);
          }
        }
      }
    }
    console.log("allowed position map created")
    console.log(allowedPositionMap);
    return allowedPositionMap;
  };

  const isShipFitAdjacency = function([r,c],shipObject, isHorizontal, map){
    const length = shipObject.length;
    if (isHorizontal !== "true"){
      for (let i=0; i<length; i++){
        if (typeof map[r+i] !== "undefined" && typeof map[r+i][c] !== "undefined"){
          for (let ship of map[r+i][c]){
            if (ship != shipObject){
              return false;
            }
          }
        }
      }
    } else {
      for (let i=0; i<length; i++){
        if (typeof map[r] !== "undefined" && typeof map[r][c+i] !== "undefined"){
          for (let ship of map[r][c+i]){
            if (ship != shipObject){
              return false;
            }
          }
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
          addToAdjacencyMap(adjacencyMap, ship, i,j);
          if (j>0){
            addToAdjacencyMap(adjacencyMap, ship, i,j-1);
            if (i>0){
              addToAdjacencyMap(adjacencyMap, ship, i-1,j-1);
            } if (i<9){
              addToAdjacencyMap(adjacencyMap, ship, i+1,j-1);
            }
          }
          if (j<9){
            addToAdjacencyMap(adjacencyMap, ship, i,j+1);
            if (i>0){
              addToAdjacencyMap(adjacencyMap, ship, i-1,j+1);
            } if (i<9){
              addToAdjacencyMap(adjacencyMap, ship, i+1,j+1);
            }
          }
          if (i>0){
            addToAdjacencyMap(adjacencyMap, ship, i-1,j);
          } if (i<9){
            addToAdjacencyMap(adjacencyMap, ship, i+1,j);
          }
        }
      }
    }
    console.log(adjacencyMap);
    return adjacencyMap;
  }

  const addToAdjacencyMap = function(map, ship, i, j){
    const location = map[i][j];
    if (typeof location !== "undefined" && location[0] != ship){
      map[i][j].push(ship);
    }
    else{
      map[i][j] = [ship];
    }
  }

  // remember that map is sorted by r, then c. And "r-direction" is column!
  const moveShip = function(ship,[startR,startC],length, isHorizontal){
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
        coords.push([startR,startC+i])
      }
    } else {
      for (let i=0; i<length; i++){
        coords.push([startR+i,startC])
      }
    }
    console.log(...coords, length);
    newShip(...coords);
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




/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   computerPlayer: () => (/* binding */ computerPlayer),
/* harmony export */   humanPlayer: () => (/* binding */ humanPlayer)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");


const Player = function(name, number){

    let gameboard;
    const init = function(){
        gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
    }();

    return{
        name,
        number,
        gameboard,
    }
}

const computerPlayer = function(name, number){

    return{
        // inherit properties by composition
        ...(new Player(name, number)),
    }
}

const humanPlayer = function(name, number){

    return{
        ...(new Player(name, number)),
    }
}



/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RenderManager: () => (/* binding */ RenderManager)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
// contains methods to populate DOM
// render functions will display DOM elements
// build functions will build elements and return them without display


const RenderManager = function(){
    
    let board1;
    let board2;
    let dialog;
    const initGameRender = function(player1Object, player2Object){
        const body = document.querySelector("body");
        const header = buildHeader();
        board1 = buildBoardAndHeader(player1Object.number, player1Object.name);
        board2 = buildBoardAndHeader(player2Object.number, player2Object.name);
        body.append(header, board1, board2);
        dialog = buildDialog();
        body.append(dialog);
    };

    const buildHeader = function(){
        const container = createElement("div","ui container");
        const turnText = createElement("h1", "turn text");
        turnText.textContent = "'s Turn";
        container.append(turnText);
        return container;
    }

    const buildBoardAndHeader = function(playerNumber, playerName){
        const board = createElement("div",`board container`);
        for (let i=0; i<10; i++){
            const row = createElement("div",`row-${i}`);
            row.setAttribute("row", i);
            for (let j=0; j<10; j++){
                const square = createElement("div");
                square.setAttribute("col", j);
                row.append(square);
            }
            board.append(row);
        }
        board.setAttribute("playernum", playerNumber);
        const boardAndHeader = createElement("div",`board-and-header container player-${playerNumber}`);
        const boardHeaderText= createElement("h2", "board header");
        boardHeaderText.textContent = `${playerName}'s Board`;
        boardAndHeader.append(boardHeaderText, board);
        return boardAndHeader;
    }

    const buildDialog = function(){
        const dialog = document.createElement("dialog");
        const dialogHeader = createElement("h1", "dialog header");
        dialogHeader.textContent = "Switch Players!"
        const dialogSubtext = createElement("p", "dialog subtext");
        dialogSubtext.textContent = "(click when ready)";
        dialog.append(dialogHeader, dialogSubtext);
        dialog.close();
        dialog.addEventListener("click", ()=> {dialog.close()});
        return dialog;
    }

    const renderNewShip = function(playerNumber,...coords){
        let board;
        if (playerNumber ==1){
            board = board1;
        } else{
            board = board2;
        }
        let i=0;
        const shipLength = arguments.length - 1;
        let isHorizontal = false;
        if (coords[1][0] == coords[0][0]){
            isHorizontal = true;
        }
        for (let [x,y] of coords){
            const squareToChange = board.querySelector(`div.row-${x} > div:nth-child(${y+1})`);
            squareToChange.classList.add("ship");
            squareToChange.setAttribute("length", shipLength);
            squareToChange.setAttribute("grabLocation", i);
            squareToChange.setAttribute("horizontal", isHorizontal)
            i++;
        }
    }

    const renderAttacked = function(squareDOMNode){
        squareDOMNode.classList.add("attacked");
    }

    const renderTurnSwitchTo = function(playerNumber, playerName){
        // add screen swapping overlay
        dialog.showModal();
        // playerNumber is number of player whose turn it should switch TO
        // change header to "It is players{playerNumber}.name's turn"
        const header = document.querySelector(".ui.container .turn.text");
        header.textContent = `${playerName}'s Turn`;
        // change board header from "Your Board" to "Enemy Board" and vis versa
        const board1Header = board1.querySelector(".header");
        const board2Header = board2.querySelector(".header");
        if (playerNumber == 1){
            board2Header.textContent = "Enemy Board";
            board1Header.textContent = "Your Board";
        } else {
            board1Header.textContent = "Enemy Board";
            board2Header.textContent = "Your Board";
        }
        // hide ships from enemy board and reveal ships on your board
        board1.lastChild.classList.toggle("visible");
        board2.lastChild.classList.toggle("visible");
    }

    // render ending game (playerName has won)
    const renderEndGame = function(winnerName){
        const winnerTextContainer = createElement("div", "end container");
        const winnerText = createElement("h1", "winner text");
        winnerText.textContent = `Congrats! ${winnerName} won.`;;
        const playAgainButton = createElement("button", "reset button");
        playAgainButton.textContent = "Play Again?";
        winnerTextContainer.append(winnerText, playAgainButton);
        const body = document.querySelector("body");
        body.append(winnerTextContainer);
    }

    const renderStaging = function(attackMap1, shipMap1, attackMap2, shipMap2){
        renderBoardReset(attackMap1, shipMap1, board1);
        renderBoardReset(attackMap2, shipMap2, board2);
    }

    const renderBoardReset = function(attackMap, shipMap, boardDOM){
        const board = boardDOM.querySelector(".board.container");
        for (let i=0; i<attackMap.length; i++){
            const row = i;
            const attackedInRow = Object.keys(attackMap[i]);
            const shipInRow = Object.keys(shipMap[i]);
            for (let attacked of attackedInRow){
                const col = Number(attacked)+1;
                const divToUnattack = board.querySelector(`div.row-${row} div:nth-child(${col})`);
                divToUnattack.classList.remove("attacked")
            }
            for (let ship of shipInRow){
                const col = Number(ship)+1;
                const divToUnship = board.querySelector(`div.row-${row} div:nth-child(${col})`);
                divToUnship.classList.remove("ship")
            }
        }
    }

    const renderShipSamples = function(){
        const hiddenContainer = createElement("div", "hidden samples");
        const horizontalShips = createElement("div", "ships horizontal");
        const verticalShips = createElement("div", "ships vertical");
        horizontalShips.append(buildShipOfLength(2), buildShipOfLength(3),
        buildShipOfLength(4), buildShipOfLength(5));
        verticalShips.append(buildShipOfLength(2), buildShipOfLength(3),
        buildShipOfLength(4), buildShipOfLength(5));
        hiddenContainer.append(horizontalShips,verticalShips);
        const body = document.querySelector("body")
        body.append(hiddenContainer);
    }

    const buildShipOfLength = function(length){
        const container = createElement("div","ship container");
        container.id = `length-${length}`;
        for (let i =0; i<length; i++){
            const part = createElement("div");
            container.append(part);
        }
        return container;
    }

    const renderMoveShip = function([oldXStart, oldYStart], [newXStart, newYStart], shipLength, isHorizontal, boardDOMNode){
        if (oldXStart == newXStart && oldYStart == newYStart){
            return;
        }
        if (isHorizontal == "true"){
            for (let i=0; i<shipLength; i++){
                const squareToRemove = boardDOMNode.querySelector(`.row-${oldXStart} div:nth-child(${oldYStart+i+1})`);
                const grablocation = squareToRemove.getAttribute("grablocation");
                squareToRemove.removeAttribute("draggable");
                squareToRemove.removeAttribute("length");
                squareToRemove.removeAttribute("grablocation");
                squareToRemove.removeAttribute("horizontal");
                squareToRemove.classList.remove("ship")
                const squareToAdd = boardDOMNode.querySelector(`.row-${newXStart} div:nth-child(${newYStart+i+1})`);
                squareToAdd.setAttribute("draggable", true);
                squareToAdd.setAttribute("length", shipLength);
                squareToAdd.setAttribute("grablocation", grablocation);
                squareToAdd.setAttribute("horizontal", isHorizontal);
                squareToAdd.classList.add("ship");
            }
        } else{
            for (let i=0; i<shipLength; i++){
                const squareToRemove = boardDOMNode.querySelector(`.row-${oldXStart-i} .div:nth-child(${oldYStart+1})`);
                const grablocation = squareToRemove.getAttribute("grablocation");
                squareToRemove.removeAttribute("draggable");
                squareToRemove.removeAttribute("length");
                squareToRemove.removeAttribute("grablocation");
                squareToRemove.removeAttribute("horizontal");
                squareToRemove.classList.remove("ship")
                const squareToAdd = boardDOMNode.querySelector(`.row-${newXStart-i} .div:nth-child(${newYStart+1})`);
                squareToAdd.setAttribute("draggable", true);
                squareToAdd.setAttribute("length", shipLength);
                squareToAdd.setAttribute("grablocation", grablocation);
                squareToAdd.setAttribute("horizontal", isHorizontal);
                squareToAdd.classList.add("ship");
            }
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
        initGameRender,
        renderNewShip,
        renderAttacked,
        renderTurnSwitchTo,
        renderEndGame,
        renderStaging,
        renderShipSamples,
        renderMoveShip,
    }

}();



/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
    constructor(length){
        this.length = length;
        this.hits = 0;
    }

    hit(){
        this.hits++;
    }

    isSunk(){
        return (this.hits >= this.length)
    }
}



/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameManager: () => (/* binding */ GameManager)
/* harmony export */ });
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
// module to manage game using event listeners to interact with objects
// calls methods in render.js to change DOM
// realistically does not export anything since it is a driver




const GameManager = function(){

    const addNewShip = function(player, ...coords){
        player.gameboard.newShip(...coords);
        _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.renderNewShip(player.number,...coords);
    }

    // passes turn to player 1 if number = 1
    // if it is player 1's turn, then board 2 should be ACTIVE
    const passTurnTo = function(playerNumber){
        if (playerNumber == 1){
            activateEventListener(players.player2.boardDOM);
        } else{
            activateEventListener(players.player1.boardDOM);
        }
        const playerName = Object.values(players)[playerNumber-1].name;
        console.log(`${playerName}'s Turn`);
        _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.renderTurnSwitchTo(playerNumber, playerName);
    }

    const activateEventListener = function(boardDOMNode){
        boardDOMNode.addEventListener("click", handleBoardClick);
    }

    const handleBoardClick = async function(event){
        let target = event.target;
        let playerNumber = target.parentNode.parentNode.getAttribute("playernum");
        let y = target.getAttribute("col");
        let x = target.parentNode.getAttribute("row");
        let playerObject = playerNumber == 1 ? players.player1 : players.player2;
        playerObject.gameboard.receiveAttack([x,y]);
        console.log(`Received attack at (${x},${y}) for player ${playerNumber}`);
        _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.renderAttacked(target);
        playerObject.boardDOM.removeEventListener("click", handleBoardClick);
        await shortSleep();
        if (playerObject.gameboard.isAllSunk()){
            endGame(playerNumber);
        } else{
            passTurnTo(playerNumber); // We pass turn to player's board we just clicked
        }
    }

    const initPlay = function(){
        // assign event listener for attacks
        const board1 = document.querySelector(".board-and-header.player-1 .board.container");
        const board2 = document.querySelector(".board-and-header.player-2 .board.container");
        players.player1.boardDOM = board1;
        players.player2.boardDOM = board2;
        // later make first turn random or chosen
        board2.classList.add("visible");
        passTurnTo(1);
        const dialog = document.querySelector("dialog");
        dialog.close();
        return;
    };

    let players;
    const initGame = function(){
        const player1 = new _player_js__WEBPACK_IMPORTED_MODULE_0__.humanPlayer("Amy", 1);
        const player2 = new _player_js__WEBPACK_IMPORTED_MODULE_0__.humanPlayer("Bart", 2);
        _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.initGameRender(player1, player2);
        // each player has 5 ships of size 2, 3, 3, 4, 5
        // enterGameStaging();
        addNewShip(player1,[0,0],[0,1])
        addNewShip(player1,[3,3],[4,3],[5,3]);
        addNewShip(player1,[7,6],[8,6],[9,6]);
        addNewShip(player1,[0,3], [0,4],[0,5],[0,6]);
        addNewShip(player1,[5,5], [6,5],[7,5],[8,5],[9,5]);
        addNewShip(player2,[7,7],[7,8]);
        addNewShip(player2,[3,3],[4,3],[5,3]);
        addNewShip(player2,[7,6],[8,6],[9,6]);
        addNewShip(player2,[0,3], [0,4],[0,5],[0,6]);
        addNewShip(player2,[5,5], [6,5],[7,5],[8,5],[9,5]);
        players = {player1, player2};
        initPlay();
        //just for testing!
        const header = document.querySelector(".ui.container");
        header.addEventListener("click", () => endGame(1))
    }();

    // player with playerNumber lost
    const endGame = function(playerNumber){
        let winnerName;
        if (playerNumber ==1){
            winnerName = players.player2.name;
        } else{
            winnerName = players.player1.name;
        }
        _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.renderEndGame(winnerName);
        activateReplayButton();
    }

    const activateReplayButton = function(){
        const replayButton = document.querySelector("div.end.container button");
        console.log(replayButton);
        replayButton.addEventListener("click", enterGameStaging);
    }

    const enterGameStaging = function(){
        // activate drag and drop of ships to choose ship location using HTML drag and drop API!
        console.log("Entering new game staging!")
        _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.renderStaging(
            players.player1.gameboard.getAttackMap(),
            players.player1.gameboard.getBoardMap(),
            players.player2.gameboard.getAttackMap(),
            players.player2.gameboard.getBoardMap()
        );
        players.player1.gameboard.resetBoard();
        players.player2.gameboard.resetBoard();
        _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.renderShipSamples();
        const board1 = players.player1.boardDOM;
        renderDraggableShipsToStage(players.player1);
        activateDropAndDragStartHandler(players.player1.boardDOM);
        // activateDropEvent(board1);
            // should allow dragover divs
            // on drop, first render overlaps as red!
            // and on drop should calculate which square it is dropped at and info passed to from drag handler to store coordinates in gameboard
        // break screen
            // only allow if positions are valid and all filled
        // repeat for board 2
    }

    const renderDraggableShipsToStage = function(player){
        addNewShipWithDragging(player,[0,0],[0,1])
        addNewShipWithDragging(player,[3,3],[4,3],[5,3]);
        addNewShipWithDragging(player,[7,7],[8,7],[9,7]);
        addNewShipWithDragging(player,[0,3], [0,4],[0,5],[0,6]);
        addNewShipWithDragging(player,[5,5], [6,5],[7,5],[8,5],[9,5]);
    }

    const addNewShipWithDragging = function(player, ...coords){
        addNewShip(player, ...coords);
        setSpecificDraggable(player.boardDOM, ...coords);
    }

    const setSpecificDraggable = function(boardDOM, ...coords){
        for (let [x,y] of coords){
            const square = boardDOM.querySelector(`.row-${x} div:nth-child(${y+1})`);
            square.setAttribute("draggable", true);
        }
    }

    // target is <div col=""> (eg: square)
    const dragstartHandler = function(event){
        console.log("drag event triggered");
        const target = event.target;
        let shipLength = Number(target.getAttribute("length"));
        event.dataTransfer.setData("shipLength", shipLength);
        let grabLocation = Number(target.getAttribute("grablocation"));
        event.dataTransfer.setData("grabLocation", grabLocation);
        event.dataTransfer.setData("horizontal", target.getAttribute("horizontal"));
        let startRow = Number(target.parentNode.getAttribute("row"));
        let startCol = Number(target.getAttribute("col"));
        let isHorizontal = target.getAttribute("horizontal");
        event.dataTransfer.setData("startRow", startRow);
        event.dataTransfer.setData("startCol", startCol);
        event.dataTransfer.setData("isHorizontal", isHorizontal)
        const widthOfDiv = 20;
        const widthOfGap = 1;
        // if grablocation = 0, don't add anything
        // if grablocation = 1, add 1 gap and 1 div
        // if grablocation = 2, add 2 gaps and 2 divs
        const addOffsetX = (grabLocation * (widthOfDiv+widthOfGap));
        const dragImageNode = document.querySelector(`.hidden.samples .ships.horizontal #length-${shipLength}`);
        event.dataTransfer.setDragImage(dragImageNode,event.offsetX + addOffsetX,event.offsetY);
        // dynamically allow where we can drop with ondragover attribute
        const playerNum = target.parentNode.parentNode.getAttribute("playernum");
        let playerVar;
        if (playerNum ==1){
            playerVar = players.player1;
        } else{
            playerVar = players.player2;
        }
        event.dataTransfer.setData("playernum", playerNum);
        const shipObject = playerVar.gameboard.getShipFromCoords([startRow, startCol]);
        playerVar.gameboard.createAllowedPositionMap(shipObject, isHorizontal);
        activateOndragover(playerVar);
    }

    const activateOndragover = function(player){
        const rows = player.boardDOM.children;
        for (let i=0; i<10; i++){
            const row = rows[i];
            const squares = row.children;
            for (let j=0; j<10; j++){
                const square = squares[j];
                //console.log(`${player.gameboard.isThisAllowedPlacement([i,j])}`)
                if (player.gameboard.isThisAllowedPlacement([i,j])){
                    square.addEventListener("dragover", ondragoverHandler);
                    //console.log(`dragover allowed on [${i}, ${j}]`)
                } else{
                    square.removeEventListener("dragover", ondragoverHandler);
                    //console.log(`dragover not allowed on [${i}, ${j}]`)
                }
            }
        }
    }

    const activateDropAndDragStartHandler = function(playerBoard){
        for (let row of playerBoard.children){
            for (let col of row.children){
                col.addEventListener("drop", dropHandler);
                col.addEventListener("dragstart", dragstartHandler);
            }
        }
    }

    const ondragoverHandler = function(ev){
        console.log("dragover detected!")
        ev.preventDefault();
    }

    const dropHandler = function(ev){
        ev.preventDefault();
        const row = Number(ev.target.parentNode.getAttribute("row"));
        const col = Number(ev.target.getAttribute("col"));
        let newStartRow = row;
        let oldStartRow = Number(ev.dataTransfer.getData("startRow"));
        let newStartCol = col;
        let oldStartCol = Number(ev.dataTransfer.getData("startCol"));
        const grabLocation = Number(ev.dataTransfer.getData("grabLocation"));
        const isHorizontal = ev.dataTransfer.getData("isHorizontal");
        if (isHorizontal == "true"){
            newStartCol -= grabLocation;
            oldStartCol -= grabLocation;
        } else{
            newStartRow -= grabLocation;
            oldStartRow -= grabLocation;
        }
        const playerNum = ev.dataTransfer.getData("playernum");
        let player;
        if (playerNum ==1){
            player = players.player1;
        } else{
            player = players.player2;
        }
        const shipLength = Number(ev.dataTransfer.getData("shipLength"));
        // change the gameboard data
        player.gameboard.moveShip(player.gameboard.getShipFromCoords([oldStartRow,oldStartCol]),
        [newStartRow,newStartCol], shipLength, isHorizontal);
        // render changes and also manages draggable
        _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.renderMoveShip([oldStartRow,oldStartCol],
        [newStartRow,newStartCol], shipLength, isHorizontal, player.boardDOM);
    }

    const shortSleep = function(){
        return new Promise(resolve => setTimeout(resolve, 1000));
    }

    return{
        players,
    }
}();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLE1BQU07QUFDNUI7QUFDQTtBQUNBLDBCQUEwQixNQUFNO0FBQ2hDO0FBQ0EsaUNBQWlDLCtDQUErQztBQUNoRjtBQUNBO0FBQ0EsMERBQTBELEVBQUUsSUFBSSxFQUFFO0FBQ2xFLGtCQUFrQjtBQUNsQjtBQUNBLDhEQUE4RCxFQUFFLElBQUksRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBYTtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uLi9saW5rZWQtbGlzdHMvbGlua2VkbGlzdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTGlua2VkTGlzdCByZXByZXNlbnRzIGZ1bGwgbGlzdFxuY29uc3QgTGlua2VkTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGhlYWROb2RlID0gbnVsbDtcbiAgY29uc3QgaGVhZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gaGVhZE5vZGU7XG4gIH07XG5cbiAgY29uc3QgdGFpbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbm9kZSA9IGhlYWROb2RlO1xuICAgIHdoaWxlIChub2RlLm5leHROb2RlICE9IG51bGwpIHtcbiAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICBjb25zdCBhcHBlbmQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoaGVhZE5vZGUgPT0gbnVsbCkge1xuICAgICAgaGVhZE5vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhaWwoKS5uZXh0Tm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcHJlcGVuZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmIChoZWFkTm9kZSA9PSBudWxsKSB7XG4gICAgICBoZWFkTm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZE5vZGUgPSBuZXcgTm9kZSh2YWx1ZSwgaGVhZE5vZGUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzaXplID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgaWYgKGhlYWROb2RlID09IG51bGwpIHtcbiAgICAgIHJldHVybiBjb3VudDtcbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQrKztcbiAgICB9XG4gICAgbGV0IG5vZGUgPSBoZWFkTm9kZTtcbiAgICB3aGlsZSAobm9kZS5uZXh0Tm9kZSAhPSBudWxsKSB7XG4gICAgICBub2RlID0gbm9kZS5uZXh0Tm9kZTtcbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICAgIHJldHVybiBjb3VudDtcbiAgfTtcblxuICAvLyBjb3VudCBpbmRleCBmcm9tIDFcbiAgY29uc3QgYXQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPD0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgd2hpbGUgKGluZGV4ID4gMSkge1xuICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgICBpbmRleC0tO1xuICAgICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgY29uc3QgcG9wID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBzZWNvbmRUb0xhc3RJbmRleCA9IHNpemUoKSAtIDE7XG4gICAgbGV0IHNlY29uZFRvTGFzdE5vZGUgPSBhdChzZWNvbmRUb0xhc3RJbmRleCk7XG4gICAgc2Vjb25kVG9MYXN0Tm9kZS5uZXh0Tm9kZSA9IG51bGw7XG4gIH07XG5cbiAgLy8gcmV0dXJucyB0cnVlIGlmIHZhbHVlIHBhc3NlZCBpcyBpbiBsaXN0LCBlbHNlIHJldHVybnMgZmFsc2VcbiAgY29uc3QgY29udGFpbnMgPSBmdW5jdGlvbiAodmFsdWUsIGNvbXBhcmVLZXkgPSBcInZhbHVlXCIpIHtcbiAgICBsZXQgbm9kZSA9IGhlYWROb2RlO1xuICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgIGlmIChub2RlLnZhbHVlID09IHZhbHVlIHx8IG5vZGUudmFsdWVbY29tcGFyZUtleV0gPT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0Tm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8vIHJldHVybnMgaW5kZXggb2Ygbm9kZSBjb250YWluaW5nIHZhbHVlLCBvciBudWxsIGlmIG5vdCBmb3VuZFxuICBjb25zdCBmaW5kID0gZnVuY3Rpb24gKHZhbHVlLCBjb21wYXJlS2V5ID0gXCJ2YWx1ZVwiKSB7XG4gICAgbGV0IG5vZGUgPSBoZWFkTm9kZTtcbiAgICBsZXQgaW5kZXggPSAxO1xuICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgIGlmIChub2RlLnZhbHVlID09IHZhbHVlIHx8IG5vZGUudmFsdWVbY29tcGFyZUtleV0gPT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIC8vIHJldHVybnMgbm9kZSBjb250YWluaW5nIHZhbHVlLCBvciBudWxsIGlmIG5vdCBmb3VuZFxuICAvLyBidXQgY2hlY2tzIGZvciBub2RlLmNhbGxiYWNrZnVuY3Rpb24oKSBiZWluZyBlcXVhbCB0byB2YWx1ZVxuICBjb25zdCBmaW5kQ2FsbGJhY2sgPSBmdW5jdGlvbiAodmFsdWUsIGNhbGxiYWNrRnVuY3Rpb24pIHtcbiAgICBsZXQgbm9kZSA9IGhlYWROb2RlO1xuICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgIGlmIChub2RlLnZhbHVlW2NhbGxiYWNrRnVuY3Rpb25dKCkgPT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0Tm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07ICBcblxuICAvLyBzYW1lIGFzIGZpbmQsIGJ1dCByZXR1cm5zIHRoZSBub2RlLCBub3QgaW5kZXhcbiAgY29uc3QgZmluZE5vZGUgPSBmdW5jdGlvbiAodmFsdWUsIGNvbXBhcmVLZXkgPSBcInZhbHVlXCIpIHtcbiAgICBsZXQgbm9kZSA9IGhlYWROb2RlO1xuICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgIGlmIChub2RlLnZhbHVlID09IHZhbHVlIHx8IG5vZGUudmFsdWVbY29tcGFyZUtleV0gPT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0Tm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgLy8gcmV0dXJucyBzdHJpbmcgb2Ygbm9kZSB2YWx1ZXMgaW4gZm9ybWF0IFwiKHZhbHVlKSAtPiAodmFsdWUpIC0+IG51bGxcIlxuICBjb25zdCB0b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaGVhZE5vZGUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGxldCBzdHJpbmcgPSBgKCAke2hlYWROb2RlLnZhbHVlfSApYDtcbiAgICBsZXQgbm9kZSA9IGhlYWROb2RlLm5leHROb2RlO1xuICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgIHN0cmluZyArPSBgIC0+ICggJHtub2RlLnZhbHVlfSApYDtcbiAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgIH1cbiAgICBzdHJpbmcgKz0gXCIgLT4gbnVsbFwiO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG5cbiAgLy8gaW5zZXJ0cyBuZXcgTm9kZSB3aXRoIHZhbHVlIGF0IGluZGV4IChjb3VudGluZyBmcm9tIDEpXG4gIGNvbnN0IGluc2VydEF0ID0gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgIGNvbnN0IHByaW9ySW5kZXggPSBpbmRleCAtIDE7XG4gICAgaWYgKHByaW9ySW5kZXggPT0gMCkge1xuICAgICAgcHJlcGVuZCh2YWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBwcmlvck5vZGUgPSBhdChwcmlvckluZGV4KTtcbiAgICBpZiAocHJpb3JOb2RlID09IG51bGwpIHtcbiAgICAgIGVycm9yLmxvZyhgJHtpbmRleH0gaXMgbm90IHZhbGlkIGluZGV4LmApO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuZXh0Tm9kZSA9IHByaW9yTm9kZS5uZXh0Tm9kZTtcbiAgICAgIHByaW9yTm9kZS5uZXh0Tm9kZSA9IG5ldyBOb2RlKHZhbHVlLCBuZXh0Tm9kZSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIHJlbW92ZXMgbm9kZSBhdCBpbmRleCAoY291bnRpbmcgZnJvbSAxKVxuICBjb25zdCByZW1vdmVBdCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIGNvbnN0IHByaW9ySW5kZXggPSBpbmRleCAtIDE7XG4gICAgaWYgKHByaW9ySW5kZXggPT0gMCkge1xuICAgICAgbGV0IG5vZGVUb1JlbW92ZSA9IGhlYWROb2RlO1xuICAgICAgaGVhZE5vZGUgPSBoZWFkTm9kZS5uZXh0Tm9kZTtcbiAgICAgIG5vZGVUb1JlbW92ZSA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBwcmlvck5vZGUgPSBhdChwcmlvckluZGV4KTtcbiAgICBsZXQgbm9kZVRvUmVtb3ZlID0gcHJpb3JOb2RlLm5leHROb2RlO1xuICAgIGNvbnN0IG5leHROb2RlID0gcHJpb3JOb2RlLm5leHROb2RlLm5leHROb2RlO1xuICAgIHByaW9yTm9kZS5uZXh0Tm9kZSA9IG5leHROb2RlO1xuICAgIG5vZGVUb1JlbW92ZSA9IG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBoZWFkLFxuICAgIHRhaWwsXG4gICAgYXBwZW5kLFxuICAgIHByZXBlbmQsXG4gICAgc2l6ZSxcbiAgICBhdCxcbiAgICBwb3AsXG4gICAgY29udGFpbnMsXG4gICAgZmluZCxcbiAgICB0b1N0cmluZyxcbiAgICBpbnNlcnRBdCxcbiAgICByZW1vdmVBdCxcbiAgICBmaW5kTm9kZSxcbiAgICBmaW5kQ2FsbGJhY2ssXG4gIH07XG59O1xuXG4vLyBOb2RlIGNvbnRhaW5zIHZhbHVlIHByb3BlcnR5LCBuZXh0Tm9kZVxuXG5jb25zdCBOb2RlID0gZnVuY3Rpb24gKHZhbHVlID0gbnVsbCwgbmV4dE5vZGUgPSBudWxsKSB7XG4gIHJldHVybiB7XG4gICAgdmFsdWUsXG4gICAgbmV4dE5vZGUsXG4gIH07XG59O1xuXG5leHBvcnQgeyBMaW5rZWRMaXN0LCBOb2RlIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG5cbi5ib2FyZC5jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXB4O1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblxuICAgID4gZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBnYXA6IDFweDtcblxuICAgICAgICBkaXZ7XG4gICAgICAgICAgICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6Z3JheTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaGlwLmF0dGFja2Vke1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF0dGFja2Vke1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYm9hcmQuY29udGFpbmVyLnZpc2libGV7XG4gICAgLnNoaXB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgfVxufVxuXG4vKiBzdHlsZSBzaGlwcyBvZmYgYm9hcmQgZHVyaW5nIHN0YWdpbmcgKi9cbi5oaWRkZW4uc2FtcGxlcyA+IGRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogM3B4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICA+IGRpdntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZ2FwOiAxcHg7XG5cbiAgICAgICAgZGl2e1xuICAgICAgICAgICAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmFxdWE7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qIHN0eWxlIGRpYWxvZyAqL1xuOjpiYWNrZHJvcHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLHVCQUF1Qjs7SUFFdkI7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFFBQVE7O1FBRVI7WUFDSSxpQkFBaUI7WUFDakIsWUFBWTtZQUNaLHFCQUFxQjtRQUN6Qjs7UUFFQTtZQUNJLHdCQUF3QjtRQUM1Qjs7UUFFQTtZQUNJLHFCQUFxQjtRQUN6QjtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtBQUNKOztBQUVBLHlDQUF5QztBQUN6QztJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1Isc0JBQXNCOztJQUV0QjtRQUNJLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixRQUFROztRQUVSO1lBQ0ksaUJBQWlCO1lBQ2pCLFlBQVk7WUFDWixxQkFBcUI7UUFDekI7SUFDSjtBQUNKOztBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLHdCQUF3QjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG4uYm9hcmQuY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFweDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXG4gICAgPiBkaXZ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGdhcDogMXB4O1xcblxcbiAgICAgICAgZGl2e1xcbiAgICAgICAgICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyYXk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2hpcC5hdHRhY2tlZHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuYXR0YWNrZWR7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5ib2FyZC5jb250YWluZXIudmlzaWJsZXtcXG4gICAgLnNoaXB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgICB9XFxufVxcblxcbi8qIHN0eWxlIHNoaXBzIG9mZiBib2FyZCBkdXJpbmcgc3RhZ2luZyAqL1xcbi5oaWRkZW4uc2FtcGxlcyA+IGRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgID4gZGl2e1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGdhcDogMXB4O1xcblxcbiAgICAgICAgZGl2e1xcbiAgICAgICAgICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmFxdWE7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLyogc3R5bGUgZGlhbG9nICovXFxuOjpiYWNrZHJvcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtTaGlwfSBmcm9tIFwiLi9zaGlwLmpzXCI7XG5pbXBvcnQge0xpbmtlZExpc3R9IGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbGlua2VkLWxpc3RzL2xpbmtlZGxpc3QuanNcIlxuXG5jb25zdCBHYW1lYm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBib2FyZE1hcDtcbiAgbGV0IGF0dGFja01hcDtcbiAgLy8gbWFrZSBlYWNoIG1hcCBhbiBhcnJheSBvZiAxMCB3aXRoIGVhY2ggYXJyYXkgYmVpbmcgYW4gb2JqZWN0IChzaW1pbGFyIHRvIGhhc2ggbWFwKVxuICBjb25zdCBpbml0Qm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgYm9hcmRNYXAgPSBbe30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge31dO1xuICAgIGF0dGFja01hcCA9IFt7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fV07XG4gIH0oKTtcblxuICBjb25zdCBnZXRCb2FyZE1hcCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGJvYXJkTWFwO1xuICB9XG5cbiAgY29uc3QgZ2V0QXR0YWNrTWFwID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gYXR0YWNrTWFwO1xuICB9XG5cbiAgLy8gYmFzZWQgb24gdGhlIHdheSB3ZSBpbXBsZW1lbnRlZCxcbiAgLy8gdGhlIGZpcnN0IGluZGV4IGZvciBhcnJheSBpcyB0aGUgci12YWx1ZSBvciB0aGUgY29sdW1uIGluIGEgbWF0cml4L2dyaWRcbiAgLy8gdGhlIHNlY29uZCBpbmRleCBmb3Igb2JqZWN0IGtleSBpcyB0aGUgYy12YWx1ZSBvciB0aGUgcm93IGluIGEgbWF0cml4L2dyaWQgKGluY3JlYXNlcyBnb2luZyBkb3duKVxuICBsZXQgc2hpcExpc3QgPSBuZXcgTGlua2VkTGlzdCgpO1xuICAvLyB1c2UgcmVzdCBwYXJhbWV0ZXIgKC4uLikgdG8gYWNjZXB0IHZhcmlhYmxlIGFtb3VudCBvZiBjb29yZHNcbiAgY29uc3QgbmV3U2hpcCA9IGZ1bmN0aW9uICguLi5jb29yZHMpIHtcbiAgICAgIGNvbnN0IG5ld1NoaXAgPSBuZXcgU2hpcChjb29yZHMubGVuZ3RoKTtcbiAgICAgIGlmIChpc1NoaXBBdENvb3JkcyguLi5jb29yZHMpKXtcbiAgICAgICAgY29uc29sZS5sb2coYm9hcmRNYXApO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERvbid0IG92ZXJsYXAgc2hpcHMgYXQ6ICR7Y29vcmRzfWApO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgW3IsY10gb2YgY29vcmRzKXtcbiAgICAgICAgaWYgKGMgPCAxMCAmJiBjID49MCl7XG4gICAgICAgICAgYm9hcmRNYXBbcl1bY10gPSBuZXdTaGlwO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCYWQgY29sIGlucHV0IGZvciBuZXdTaGlwKCk6ICR7Y29vcmRzfWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBhZGRpbmcgbmV3IHNoaXAgdG8gc2hpcCBsaW5rZWQgbGlzdFxuICAgICAgc2hpcExpc3QuYXBwZW5kKG5ld1NoaXApO1xuICB9O1xuXG4gIGNvbnN0IGlzU2hpcEF0Q29vcmRzID0gZnVuY3Rpb24oLi4uY29vcmRzKXtcbiAgICBmb3IgKGxldCBbcixjXSBvZiBjb29yZHMpe1xuICAgICAgaWYgKGJvYXJkTWFwW3JdICE9PSB1bmRlZmluZWQgJiYgYm9hcmRNYXBbcl1bY10gIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBnZXRTaGlwRnJvbUNvb3JkcyA9IGZ1bmN0aW9uKFtyLGNdKXtcbiAgICByZXR1cm4gYm9hcmRNYXBbcl1bY107XG4gIH1cblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gZnVuY3Rpb24oW3IsY10pe1xuICAgIGlmICh3YXNBdHRhY2tlZChbcixjXSkpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgYXR0YWNrIHByZXZpb3VzIGF0dGFja2VkICgke3J9LCR7Y30pYCk7XG4gICAgfVxuICAgIGNvbnN0IHNoaXAgPSBib2FyZE1hcFtyXVtjXTtcbiAgICBpZiAodHlwZW9mKHNoaXApID09IFwib2JqZWN0XCIpe1xuICAgICAgc2hpcC5oaXQoKTtcbiAgICAgIGF0dGFja01hcFtyXVtjXT1cImhpdFwiO1xuICAgICAgcmV0dXJuIFwiaGl0XCI7XG4gICAgfSBlbHNle1xuICAgICAgYXR0YWNrTWFwW3JdW2NdID0gXCJtaXNzXCI7XG4gICAgICByZXR1cm4gXCJtaXNzXCI7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgd2FzQXR0YWNrZWQgPSBmdW5jdGlvbihbcixjXSl7XG4gICAgcmV0dXJuIGF0dGFja01hcFtyXVtjXSB8fCBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGlzQWxsU3VuayA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIChzaGlwTGlzdC5maW5kQ2FsbGJhY2soZmFsc2UsIFwiaXNTdW5rXCIpID09IG51bGwpO1xuICB9XG5cbiAgY29uc3QgcmVzZXRCb2FyZCA9IGZ1bmN0aW9uKCl7XG4gICAgYm9hcmRNYXAgPSBbe30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge31dO1xuICAgIGF0dGFja01hcCA9IFt7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fV07XG4gIH1cblxuICAvLyBVU0VTIGFsbG93ZWQgcG9zaXRpb24gbWFwIGNyZWF0ZWQgd2l0aCBzcGVjaWZpYyBpbmZvIGFib3V0IHNoaXAgb3JpZW50YXRpb24gYW5kIGxlbmd0aFxuICBjb25zdCBpc1RoaXNBbGxvd2VkUGxhY2VtZW50ID0gZnVuY3Rpb24oW3IsY10pe1xuICAgIHJldHVybiBhbGxvd2VkUG9zaXRpb25NYXBbcl1bY107XG4gIH1cblxuICBsZXQgYWxsb3dlZFBvc2l0aW9uTWFwO1xuICAvLyB1c2VzIGFkamFjZW5jeSBtYXAgYW5kIHNoaXAgbGVuZ3RoIHRvIHNob3cgYWxsIHBvc2libGUgdG9wbGVmdCBwb3NpdGlvbnMgZm9yIHRoZSBzaGlwXG4gIGNvbnN0IGNyZWF0ZUFsbG93ZWRQb3NpdGlvbk1hcCA9IGZ1bmN0aW9uKHNoaXBPYmplY3QsIGlzSG9yaXpvbnRhbCl7XG4gICAgY29uc3QgYWRqYWNlbmN5TWFwID0gY3JlYXRlQWRqYWNlbmN5TWFwKCk7XG4gICAgYWxsb3dlZFBvc2l0aW9uTWFwID0gW3t9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9XTtcbiAgICBjb25zdCBsZW5ndGggPSBzaGlwT2JqZWN0Lmxlbmd0aDtcbiAgICBpZiAoaXNIb3Jpem9udGFsID09IFwidHJ1ZVwiKXtcbiAgICAgIGZvciAobGV0IHIgPSAwOyByPDEwOyByKyspe1xuICAgICAgICBmb3IgKGxldCBjPTA7IGM8MTA7IGMrKyl7XG4gICAgICAgICAgaWYgKGM+ICgxMC1sZW5ndGgpKXtcbiAgICAgICAgICAgIGFsbG93ZWRQb3NpdGlvbk1hcFtyXVtjXSA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGFsbG93ZWRQb3NpdGlvbk1hcFtyXVtjXSA9IGlzU2hpcEZpdEFkamFjZW5jeShbcixjXSwgc2hpcE9iamVjdCwgaXNIb3Jpem9udGFsLCBhZGphY2VuY3lNYXApO1xuICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgfSBlbHNle1xuICAgICAgZm9yIChsZXQgciA9IDA7IHI8MTA7IHIrKyl7XG4gICAgICAgIGZvciAobGV0IGM9MDsgYzwxMDsgYysrKXtcbiAgICAgICAgICBpZiAoYyA+ICgxMC1sZW5ndGgpKXtcbiAgICAgICAgICAgICAgYWxsb3dlZFBvc2l0aW9uTWFwW3JdW2NdID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsbG93ZWRQb3NpdGlvbk1hcFtyXVtjXSA9IGlzU2hpcEZpdEFkamFjZW5jeShbcixjXSxzaGlwT2JqZWN0LCBpc0hvcml6b250YWwsIGFkamFjZW5jeU1hcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiYWxsb3dlZCBwb3NpdGlvbiBtYXAgY3JlYXRlZFwiKVxuICAgIGNvbnNvbGUubG9nKGFsbG93ZWRQb3NpdGlvbk1hcCk7XG4gICAgcmV0dXJuIGFsbG93ZWRQb3NpdGlvbk1hcDtcbiAgfTtcblxuICBjb25zdCBpc1NoaXBGaXRBZGphY2VuY3kgPSBmdW5jdGlvbihbcixjXSxzaGlwT2JqZWN0LCBpc0hvcml6b250YWwsIG1hcCl7XG4gICAgY29uc3QgbGVuZ3RoID0gc2hpcE9iamVjdC5sZW5ndGg7XG4gICAgaWYgKGlzSG9yaXpvbnRhbCAhPT0gXCJ0cnVlXCIpe1xuICAgICAgZm9yIChsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXBbcitpXSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgbWFwW3IraV1bY10gIT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICAgIGZvciAobGV0IHNoaXAgb2YgbWFwW3IraV1bY10pe1xuICAgICAgICAgICAgaWYgKHNoaXAgIT0gc2hpcE9iamVjdCl7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXBbcl0gIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIG1hcFtyXVtjK2ldICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgICAgICBmb3IgKGxldCBzaGlwIG9mIG1hcFtyXVtjK2ldKXtcbiAgICAgICAgICAgIGlmIChzaGlwICE9IHNoaXBPYmplY3Qpe1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cblxuICBjb25zdCBjcmVhdGVBZGphY2VuY3lNYXAgPSBmdW5jdGlvbigpe1xuICAgIGxldCBhZGphY2VuY3lNYXAgPSBbe30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge31dO1xuICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKXtcbiAgICAgIGZvciAobGV0IGo9MDsgajwxMDsgaisrKXtcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZE1hcFtpXVtqXSAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICAgICAgY29uc3Qgc2hpcCA9IGJvYXJkTWFwW2ldW2pdO1xuICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaSxqKTtcbiAgICAgICAgICBpZiAoaj4wKXtcbiAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaSxqLTEpO1xuICAgICAgICAgICAgaWYgKGk+MCl7XG4gICAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaS0xLGotMSk7XG4gICAgICAgICAgICB9IGlmIChpPDkpe1xuICAgICAgICAgICAgICBhZGRUb0FkamFjZW5jeU1hcChhZGphY2VuY3lNYXAsIHNoaXAsIGkrMSxqLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoajw5KXtcbiAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaSxqKzEpO1xuICAgICAgICAgICAgaWYgKGk+MCl7XG4gICAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaS0xLGorMSk7XG4gICAgICAgICAgICB9IGlmIChpPDkpe1xuICAgICAgICAgICAgICBhZGRUb0FkamFjZW5jeU1hcChhZGphY2VuY3lNYXAsIHNoaXAsIGkrMSxqKzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaT4wKXtcbiAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaS0xLGopO1xuICAgICAgICAgIH0gaWYgKGk8OSl7XG4gICAgICAgICAgICBhZGRUb0FkamFjZW5jeU1hcChhZGphY2VuY3lNYXAsIHNoaXAsIGkrMSxqKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coYWRqYWNlbmN5TWFwKTtcbiAgICByZXR1cm4gYWRqYWNlbmN5TWFwO1xuICB9XG5cbiAgY29uc3QgYWRkVG9BZGphY2VuY3lNYXAgPSBmdW5jdGlvbihtYXAsIHNoaXAsIGksIGope1xuICAgIGNvbnN0IGxvY2F0aW9uID0gbWFwW2ldW2pdO1xuICAgIGlmICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYXRpb25bMF0gIT0gc2hpcCl7XG4gICAgICBtYXBbaV1bal0ucHVzaChzaGlwKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIG1hcFtpXVtqXSA9IFtzaGlwXTtcbiAgICB9XG4gIH1cblxuICAvLyByZW1lbWJlciB0aGF0IG1hcCBpcyBzb3J0ZWQgYnkgciwgdGhlbiBjLiBBbmQgXCJyLWRpcmVjdGlvblwiIGlzIGNvbHVtbiFcbiAgY29uc3QgbW92ZVNoaXAgPSBmdW5jdGlvbihzaGlwLFtzdGFydFIsc3RhcnRDXSxsZW5ndGgsIGlzSG9yaXpvbnRhbCl7XG4gICAgZm9yIChsZXQgcm93IG9mIGF0dGFja01hcCl7XG4gICAgICBmb3IgKGxldCBjb2wgb2YgT2JqZWN0LnZhbHVlcyhyb3cpKXtcbiAgICAgICAgaWYgKGNvbCA9PSBzaGlwKXtcbiAgICAgICAgICBjb2wgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGNvb3JkcyA9IFtdO1xuICAgIGlmIChpc0hvcml6b250YWwgPT0gXCJ0cnVlXCIpe1xuICAgICAgZm9yIChsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29vcmRzLnB1c2goW3N0YXJ0UixzdGFydEMraV0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGk9MDsgaTxsZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvb3Jkcy5wdXNoKFtzdGFydFIraSxzdGFydENdKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyguLi5jb29yZHMsIGxlbmd0aCk7XG4gICAgbmV3U2hpcCguLi5jb29yZHMpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdTaGlwLFxuICAgIGdldFNoaXBGcm9tQ29vcmRzLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgd2FzQXR0YWNrZWQsXG4gICAgaXNBbGxTdW5rLFxuICAgIGdldEJvYXJkTWFwLFxuICAgIHJlc2V0Qm9hcmQsXG4gICAgZ2V0QXR0YWNrTWFwLFxuICAgIGlzVGhpc0FsbG93ZWRQbGFjZW1lbnQsXG4gICAgbW92ZVNoaXAsXG4gICAgY3JlYXRlQWxsb3dlZFBvc2l0aW9uTWFwLFxuICB9O1xufTtcblxuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG4iLCJpbXBvcnQge0dhbWVib2FyZH0gZnJvbSBcIi4vZ2FtZWJvYXJkLmpzXCJcblxuY29uc3QgUGxheWVyID0gZnVuY3Rpb24obmFtZSwgbnVtYmVyKXtcblxuICAgIGxldCBnYW1lYm9hcmQ7XG4gICAgY29uc3QgaW5pdCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB9KCk7XG5cbiAgICByZXR1cm57XG4gICAgICAgIG5hbWUsXG4gICAgICAgIG51bWJlcixcbiAgICAgICAgZ2FtZWJvYXJkLFxuICAgIH1cbn1cblxuY29uc3QgY29tcHV0ZXJQbGF5ZXIgPSBmdW5jdGlvbihuYW1lLCBudW1iZXIpe1xuXG4gICAgcmV0dXJue1xuICAgICAgICAvLyBpbmhlcml0IHByb3BlcnRpZXMgYnkgY29tcG9zaXRpb25cbiAgICAgICAgLi4uKG5ldyBQbGF5ZXIobmFtZSwgbnVtYmVyKSksXG4gICAgfVxufVxuXG5jb25zdCBodW1hblBsYXllciA9IGZ1bmN0aW9uKG5hbWUsIG51bWJlcil7XG5cbiAgICByZXR1cm57XG4gICAgICAgIC4uLihuZXcgUGxheWVyKG5hbWUsIG51bWJlcikpLFxuICAgIH1cbn1cblxuZXhwb3J0IHtQbGF5ZXIsIGNvbXB1dGVyUGxheWVyLCBodW1hblBsYXllcn07IiwiLy8gY29udGFpbnMgbWV0aG9kcyB0byBwb3B1bGF0ZSBET01cbi8vIHJlbmRlciBmdW5jdGlvbnMgd2lsbCBkaXNwbGF5IERPTSBlbGVtZW50c1xuLy8gYnVpbGQgZnVuY3Rpb25zIHdpbGwgYnVpbGQgZWxlbWVudHMgYW5kIHJldHVybiB0aGVtIHdpdGhvdXQgZGlzcGxheVxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbmNvbnN0IFJlbmRlck1hbmFnZXIgPSBmdW5jdGlvbigpe1xuICAgIFxuICAgIGxldCBib2FyZDE7XG4gICAgbGV0IGJvYXJkMjtcbiAgICBsZXQgZGlhbG9nO1xuICAgIGNvbnN0IGluaXRHYW1lUmVuZGVyID0gZnVuY3Rpb24ocGxheWVyMU9iamVjdCwgcGxheWVyMk9iamVjdCl7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gYnVpbGRIZWFkZXIoKTtcbiAgICAgICAgYm9hcmQxID0gYnVpbGRCb2FyZEFuZEhlYWRlcihwbGF5ZXIxT2JqZWN0Lm51bWJlciwgcGxheWVyMU9iamVjdC5uYW1lKTtcbiAgICAgICAgYm9hcmQyID0gYnVpbGRCb2FyZEFuZEhlYWRlcihwbGF5ZXIyT2JqZWN0Lm51bWJlciwgcGxheWVyMk9iamVjdC5uYW1lKTtcbiAgICAgICAgYm9keS5hcHBlbmQoaGVhZGVyLCBib2FyZDEsIGJvYXJkMik7XG4gICAgICAgIGRpYWxvZyA9IGJ1aWxkRGlhbG9nKCk7XG4gICAgICAgIGJvZHkuYXBwZW5kKGRpYWxvZyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGJ1aWxkSGVhZGVyID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLFwidWkgY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCB0dXJuVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBcInR1cm4gdGV4dFwiKTtcbiAgICAgICAgdHVyblRleHQudGV4dENvbnRlbnQgPSBcIidzIFR1cm5cIjtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZCh0dXJuVGV4dCk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgY29uc3QgYnVpbGRCb2FyZEFuZEhlYWRlciA9IGZ1bmN0aW9uKHBsYXllck51bWJlciwgcGxheWVyTmFtZSl7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gY3JlYXRlRWxlbWVudChcImRpdlwiLGBib2FyZCBjb250YWluZXJgKTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDEwOyBpKyspe1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLGByb3ctJHtpfWApO1xuICAgICAgICAgICAgcm93LnNldEF0dHJpYnV0ZShcInJvd1wiLCBpKTtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajwxMDsgaisrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJjb2xcIiwgaik7XG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZChzcXVhcmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9hcmQuYXBwZW5kKHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgYm9hcmQuc2V0QXR0cmlidXRlKFwicGxheWVybnVtXCIsIHBsYXllck51bWJlcik7XG4gICAgICAgIGNvbnN0IGJvYXJkQW5kSGVhZGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLGBib2FyZC1hbmQtaGVhZGVyIGNvbnRhaW5lciBwbGF5ZXItJHtwbGF5ZXJOdW1iZXJ9YCk7XG4gICAgICAgIGNvbnN0IGJvYXJkSGVhZGVyVGV4dD0gY3JlYXRlRWxlbWVudChcImgyXCIsIFwiYm9hcmQgaGVhZGVyXCIpO1xuICAgICAgICBib2FyZEhlYWRlclRleHQudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lfSdzIEJvYXJkYDtcbiAgICAgICAgYm9hcmRBbmRIZWFkZXIuYXBwZW5kKGJvYXJkSGVhZGVyVGV4dCwgYm9hcmQpO1xuICAgICAgICByZXR1cm4gYm9hcmRBbmRIZWFkZXI7XG4gICAgfVxuXG4gICAgY29uc3QgYnVpbGREaWFsb2cgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICAgICAgICBjb25zdCBkaWFsb2dIZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiaDFcIiwgXCJkaWFsb2cgaGVhZGVyXCIpO1xuICAgICAgICBkaWFsb2dIZWFkZXIudGV4dENvbnRlbnQgPSBcIlN3aXRjaCBQbGF5ZXJzIVwiXG4gICAgICAgIGNvbnN0IGRpYWxvZ1N1YnRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImRpYWxvZyBzdWJ0ZXh0XCIpO1xuICAgICAgICBkaWFsb2dTdWJ0ZXh0LnRleHRDb250ZW50ID0gXCIoY2xpY2sgd2hlbiByZWFkeSlcIjtcbiAgICAgICAgZGlhbG9nLmFwcGVuZChkaWFsb2dIZWFkZXIsIGRpYWxvZ1N1YnRleHQpO1xuICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgZGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtkaWFsb2cuY2xvc2UoKX0pO1xuICAgICAgICByZXR1cm4gZGlhbG9nO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlck5ld1NoaXAgPSBmdW5jdGlvbihwbGF5ZXJOdW1iZXIsLi4uY29vcmRzKXtcbiAgICAgICAgbGV0IGJvYXJkO1xuICAgICAgICBpZiAocGxheWVyTnVtYmVyID09MSl7XG4gICAgICAgICAgICBib2FyZCA9IGJvYXJkMTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgYm9hcmQgPSBib2FyZDI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGk9MDtcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICAgICAgICBsZXQgaXNIb3Jpem9udGFsID0gZmFsc2U7XG4gICAgICAgIGlmIChjb29yZHNbMV1bMF0gPT0gY29vcmRzWzBdWzBdKXtcbiAgICAgICAgICAgIGlzSG9yaXpvbnRhbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgW3gseV0gb2YgY29vcmRzKXtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZVRvQ2hhbmdlID0gYm9hcmQucXVlcnlTZWxlY3RvcihgZGl2LnJvdy0ke3h9ID4gZGl2Om50aC1jaGlsZCgke3krMX0pYCk7XG4gICAgICAgICAgICBzcXVhcmVUb0NoYW5nZS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICAgIHNxdWFyZVRvQ2hhbmdlLnNldEF0dHJpYnV0ZShcImxlbmd0aFwiLCBzaGlwTGVuZ3RoKTtcbiAgICAgICAgICAgIHNxdWFyZVRvQ2hhbmdlLnNldEF0dHJpYnV0ZShcImdyYWJMb2NhdGlvblwiLCBpKTtcbiAgICAgICAgICAgIHNxdWFyZVRvQ2hhbmdlLnNldEF0dHJpYnV0ZShcImhvcml6b250YWxcIiwgaXNIb3Jpem9udGFsKVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyQXR0YWNrZWQgPSBmdW5jdGlvbihzcXVhcmVET01Ob2RlKXtcbiAgICAgICAgc3F1YXJlRE9NTm9kZS5jbGFzc0xpc3QuYWRkKFwiYXR0YWNrZWRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyVHVyblN3aXRjaFRvID0gZnVuY3Rpb24ocGxheWVyTnVtYmVyLCBwbGF5ZXJOYW1lKXtcbiAgICAgICAgLy8gYWRkIHNjcmVlbiBzd2FwcGluZyBvdmVybGF5XG4gICAgICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcbiAgICAgICAgLy8gcGxheWVyTnVtYmVyIGlzIG51bWJlciBvZiBwbGF5ZXIgd2hvc2UgdHVybiBpdCBzaG91bGQgc3dpdGNoIFRPXG4gICAgICAgIC8vIGNoYW5nZSBoZWFkZXIgdG8gXCJJdCBpcyBwbGF5ZXJze3BsYXllck51bWJlcn0ubmFtZSdzIHR1cm5cIlxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVpLmNvbnRhaW5lciAudHVybi50ZXh0XCIpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lfSdzIFR1cm5gO1xuICAgICAgICAvLyBjaGFuZ2UgYm9hcmQgaGVhZGVyIGZyb20gXCJZb3VyIEJvYXJkXCIgdG8gXCJFbmVteSBCb2FyZFwiIGFuZCB2aXMgdmVyc2FcbiAgICAgICAgY29uc3QgYm9hcmQxSGVhZGVyID0gYm9hcmQxLnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xuICAgICAgICBjb25zdCBib2FyZDJIZWFkZXIgPSBib2FyZDIucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XG4gICAgICAgIGlmIChwbGF5ZXJOdW1iZXIgPT0gMSl7XG4gICAgICAgICAgICBib2FyZDJIZWFkZXIudGV4dENvbnRlbnQgPSBcIkVuZW15IEJvYXJkXCI7XG4gICAgICAgICAgICBib2FyZDFIZWFkZXIudGV4dENvbnRlbnQgPSBcIllvdXIgQm9hcmRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvYXJkMUhlYWRlci50ZXh0Q29udGVudCA9IFwiRW5lbXkgQm9hcmRcIjtcbiAgICAgICAgICAgIGJvYXJkMkhlYWRlci50ZXh0Q29udGVudCA9IFwiWW91ciBCb2FyZFwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIGhpZGUgc2hpcHMgZnJvbSBlbmVteSBib2FyZCBhbmQgcmV2ZWFsIHNoaXBzIG9uIHlvdXIgYm9hcmRcbiAgICAgICAgYm9hcmQxLmxhc3RDaGlsZC5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbiAgICAgICAgYm9hcmQyLmxhc3RDaGlsZC5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbiAgICB9XG5cbiAgICAvLyByZW5kZXIgZW5kaW5nIGdhbWUgKHBsYXllck5hbWUgaGFzIHdvbilcbiAgICBjb25zdCByZW5kZXJFbmRHYW1lID0gZnVuY3Rpb24od2lubmVyTmFtZSl7XG4gICAgICAgIGNvbnN0IHdpbm5lclRleHRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZW5kIGNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3Qgd2lubmVyVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBcIndpbm5lciB0ZXh0XCIpO1xuICAgICAgICB3aW5uZXJUZXh0LnRleHRDb250ZW50ID0gYENvbmdyYXRzISAke3dpbm5lck5hbWV9IHdvbi5gOztcbiAgICAgICAgY29uc3QgcGxheUFnYWluQnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcInJlc2V0IGJ1dHRvblwiKTtcbiAgICAgICAgcGxheUFnYWluQnV0dG9uLnRleHRDb250ZW50ID0gXCJQbGF5IEFnYWluP1wiO1xuICAgICAgICB3aW5uZXJUZXh0Q29udGFpbmVyLmFwcGVuZCh3aW5uZXJUZXh0LCBwbGF5QWdhaW5CdXR0b24pO1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICAgIGJvZHkuYXBwZW5kKHdpbm5lclRleHRDb250YWluZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclN0YWdpbmcgPSBmdW5jdGlvbihhdHRhY2tNYXAxLCBzaGlwTWFwMSwgYXR0YWNrTWFwMiwgc2hpcE1hcDIpe1xuICAgICAgICByZW5kZXJCb2FyZFJlc2V0KGF0dGFja01hcDEsIHNoaXBNYXAxLCBib2FyZDEpO1xuICAgICAgICByZW5kZXJCb2FyZFJlc2V0KGF0dGFja01hcDIsIHNoaXBNYXAyLCBib2FyZDIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckJvYXJkUmVzZXQgPSBmdW5jdGlvbihhdHRhY2tNYXAsIHNoaXBNYXAsIGJvYXJkRE9NKXtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBib2FyZERPTS5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLmNvbnRhaW5lclwiKTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPGF0dGFja01hcC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBpO1xuICAgICAgICAgICAgY29uc3QgYXR0YWNrZWRJblJvdyA9IE9iamVjdC5rZXlzKGF0dGFja01hcFtpXSk7XG4gICAgICAgICAgICBjb25zdCBzaGlwSW5Sb3cgPSBPYmplY3Qua2V5cyhzaGlwTWFwW2ldKTtcbiAgICAgICAgICAgIGZvciAobGV0IGF0dGFja2VkIG9mIGF0dGFja2VkSW5Sb3cpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IE51bWJlcihhdHRhY2tlZCkrMTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXZUb1VuYXR0YWNrID0gYm9hcmQucXVlcnlTZWxlY3RvcihgZGl2LnJvdy0ke3Jvd30gZGl2Om50aC1jaGlsZCgke2NvbH0pYCk7XG4gICAgICAgICAgICAgICAgZGl2VG9VbmF0dGFjay5jbGFzc0xpc3QucmVtb3ZlKFwiYXR0YWNrZWRcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHNoaXAgb2Ygc2hpcEluUm93KXtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2wgPSBOdW1iZXIoc2hpcCkrMTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXZUb1Vuc2hpcCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYGRpdi5yb3ctJHtyb3d9IGRpdjpudGgtY2hpbGQoJHtjb2x9KWApO1xuICAgICAgICAgICAgICAgIGRpdlRvVW5zaGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJTaGlwU2FtcGxlcyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGhpZGRlbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJoaWRkZW4gc2FtcGxlc1wiKTtcbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbFNoaXBzID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInNoaXBzIGhvcml6b250YWxcIik7XG4gICAgICAgIGNvbnN0IHZlcnRpY2FsU2hpcHMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2hpcHMgdmVydGljYWxcIik7XG4gICAgICAgIGhvcml6b250YWxTaGlwcy5hcHBlbmQoYnVpbGRTaGlwT2ZMZW5ndGgoMiksIGJ1aWxkU2hpcE9mTGVuZ3RoKDMpLFxuICAgICAgICBidWlsZFNoaXBPZkxlbmd0aCg0KSwgYnVpbGRTaGlwT2ZMZW5ndGgoNSkpO1xuICAgICAgICB2ZXJ0aWNhbFNoaXBzLmFwcGVuZChidWlsZFNoaXBPZkxlbmd0aCgyKSwgYnVpbGRTaGlwT2ZMZW5ndGgoMyksXG4gICAgICAgIGJ1aWxkU2hpcE9mTGVuZ3RoKDQpLCBidWlsZFNoaXBPZkxlbmd0aCg1KSk7XG4gICAgICAgIGhpZGRlbkNvbnRhaW5lci5hcHBlbmQoaG9yaXpvbnRhbFNoaXBzLHZlcnRpY2FsU2hpcHMpO1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIilcbiAgICAgICAgYm9keS5hcHBlbmQoaGlkZGVuQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBidWlsZFNoaXBPZkxlbmd0aCA9IGZ1bmN0aW9uKGxlbmd0aCl7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcInNoaXAgY29udGFpbmVyXCIpO1xuICAgICAgICBjb250YWluZXIuaWQgPSBgbGVuZ3RoLSR7bGVuZ3RofWA7XG4gICAgICAgIGZvciAobGV0IGkgPTA7IGk8bGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKHBhcnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyTW92ZVNoaXAgPSBmdW5jdGlvbihbb2xkWFN0YXJ0LCBvbGRZU3RhcnRdLCBbbmV3WFN0YXJ0LCBuZXdZU3RhcnRdLCBzaGlwTGVuZ3RoLCBpc0hvcml6b250YWwsIGJvYXJkRE9NTm9kZSl7XG4gICAgICAgIGlmIChvbGRYU3RhcnQgPT0gbmV3WFN0YXJ0ICYmIG9sZFlTdGFydCA9PSBuZXdZU3RhcnQpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0hvcml6b250YWwgPT0gXCJ0cnVlXCIpe1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHNoaXBMZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlVG9SZW1vdmUgPSBib2FyZERPTU5vZGUucXVlcnlTZWxlY3RvcihgLnJvdy0ke29sZFhTdGFydH0gZGl2Om50aC1jaGlsZCgke29sZFlTdGFydCtpKzF9KWApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyYWJsb2NhdGlvbiA9IHNxdWFyZVRvUmVtb3ZlLmdldEF0dHJpYnV0ZShcImdyYWJsb2NhdGlvblwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5yZW1vdmVBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUucmVtb3ZlQXR0cmlidXRlKFwibGVuZ3RoXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLnJlbW92ZUF0dHJpYnV0ZShcImdyYWJsb2NhdGlvblwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5yZW1vdmVBdHRyaWJ1dGUoXCJob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpXG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlVG9BZGQgPSBib2FyZERPTU5vZGUucXVlcnlTZWxlY3RvcihgLnJvdy0ke25ld1hTdGFydH0gZGl2Om50aC1jaGlsZCgke25ld1lTdGFydCtpKzF9KWApO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5zZXRBdHRyaWJ1dGUoXCJsZW5ndGhcIiwgc2hpcExlbmd0aCk7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuc2V0QXR0cmlidXRlKFwiZ3JhYmxvY2F0aW9uXCIsIGdyYWJsb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuc2V0QXR0cmlidXRlKFwiaG9yaXpvbnRhbFwiLCBpc0hvcml6b250YWwpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8c2hpcExlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmVUb1JlbW92ZSA9IGJvYXJkRE9NTm9kZS5xdWVyeVNlbGVjdG9yKGAucm93LSR7b2xkWFN0YXJ0LWl9IC5kaXY6bnRoLWNoaWxkKCR7b2xkWVN0YXJ0KzF9KWApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyYWJsb2NhdGlvbiA9IHNxdWFyZVRvUmVtb3ZlLmdldEF0dHJpYnV0ZShcImdyYWJsb2NhdGlvblwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5yZW1vdmVBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUucmVtb3ZlQXR0cmlidXRlKFwibGVuZ3RoXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLnJlbW92ZUF0dHJpYnV0ZShcImdyYWJsb2NhdGlvblwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5yZW1vdmVBdHRyaWJ1dGUoXCJob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpXG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlVG9BZGQgPSBib2FyZERPTU5vZGUucXVlcnlTZWxlY3RvcihgLnJvdy0ke25ld1hTdGFydC1pfSAuZGl2Om50aC1jaGlsZCgke25ld1lTdGFydCsxfSlgKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuc2V0QXR0cmlidXRlKFwibGVuZ3RoXCIsIHNoaXBMZW5ndGgpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLnNldEF0dHJpYnV0ZShcImdyYWJsb2NhdGlvblwiLCBncmFibG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLnNldEF0dHJpYnV0ZShcImhvcml6b250YWxcIiwgaXNIb3Jpem9udGFsKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50VHlwZSwgY2xhc3NTdHJpbmcgPSB1bmRlZmluZWQpe1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICAgICAgICBpZiAoY2xhc3NTdHJpbmcgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc1N0cmluZy5zcGxpdChcIiBcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybntcbiAgICAgICAgaW5pdEdhbWVSZW5kZXIsXG4gICAgICAgIHJlbmRlck5ld1NoaXAsXG4gICAgICAgIHJlbmRlckF0dGFja2VkLFxuICAgICAgICByZW5kZXJUdXJuU3dpdGNoVG8sXG4gICAgICAgIHJlbmRlckVuZEdhbWUsXG4gICAgICAgIHJlbmRlclN0YWdpbmcsXG4gICAgICAgIHJlbmRlclNoaXBTYW1wbGVzLFxuICAgICAgICByZW5kZXJNb3ZlU2hpcCxcbiAgICB9XG5cbn0oKTtcblxuZXhwb3J0IHtSZW5kZXJNYW5hZ2VyfTsiLCJjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgpe1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICB9XG5cbiAgICBoaXQoKXtcbiAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgfVxuXG4gICAgaXNTdW5rKCl7XG4gICAgICAgIHJldHVybiAodGhpcy5oaXRzID49IHRoaXMubGVuZ3RoKVxuICAgIH1cbn1cblxuZXhwb3J0IHtTaGlwfTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBtb2R1bGUgdG8gbWFuYWdlIGdhbWUgdXNpbmcgZXZlbnQgbGlzdGVuZXJzIHRvIGludGVyYWN0IHdpdGggb2JqZWN0c1xuLy8gY2FsbHMgbWV0aG9kcyBpbiByZW5kZXIuanMgdG8gY2hhbmdlIERPTVxuLy8gcmVhbGlzdGljYWxseSBkb2VzIG5vdCBleHBvcnQgYW55dGhpbmcgc2luY2UgaXQgaXMgYSBkcml2ZXJcblxuaW1wb3J0IHtodW1hblBsYXllciwgY29tcHV0ZXJQbGF5ZXJ9IGZyb20gXCIuL3BsYXllci5qc1wiXG5pbXBvcnQge1JlbmRlck1hbmFnZXJ9IGZyb20gXCIuL3JlbmRlci5qc1wiXG5cbmNvbnN0IEdhbWVNYW5hZ2VyID0gZnVuY3Rpb24oKXtcblxuICAgIGNvbnN0IGFkZE5ld1NoaXAgPSBmdW5jdGlvbihwbGF5ZXIsIC4uLmNvb3Jkcyl7XG4gICAgICAgIHBsYXllci5nYW1lYm9hcmQubmV3U2hpcCguLi5jb29yZHMpO1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlck5ld1NoaXAocGxheWVyLm51bWJlciwuLi5jb29yZHMpO1xuICAgIH1cblxuICAgIC8vIHBhc3NlcyB0dXJuIHRvIHBsYXllciAxIGlmIG51bWJlciA9IDFcbiAgICAvLyBpZiBpdCBpcyBwbGF5ZXIgMSdzIHR1cm4sIHRoZW4gYm9hcmQgMiBzaG91bGQgYmUgQUNUSVZFXG4gICAgY29uc3QgcGFzc1R1cm5UbyA9IGZ1bmN0aW9uKHBsYXllck51bWJlcil7XG4gICAgICAgIGlmIChwbGF5ZXJOdW1iZXIgPT0gMSl7XG4gICAgICAgICAgICBhY3RpdmF0ZUV2ZW50TGlzdGVuZXIocGxheWVycy5wbGF5ZXIyLmJvYXJkRE9NKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgYWN0aXZhdGVFdmVudExpc3RlbmVyKHBsYXllcnMucGxheWVyMS5ib2FyZERPTSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGxheWVyTmFtZSA9IE9iamVjdC52YWx1ZXMocGxheWVycylbcGxheWVyTnVtYmVyLTFdLm5hbWU7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3BsYXllck5hbWV9J3MgVHVybmApO1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlclR1cm5Td2l0Y2hUbyhwbGF5ZXJOdW1iZXIsIHBsYXllck5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGJvYXJkRE9NTm9kZSl7XG4gICAgICAgIGJvYXJkRE9NTm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQm9hcmRDbGljayk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQm9hcmRDbGljayA9IGFzeW5jIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgbGV0IHBsYXllck51bWJlciA9IHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwicGxheWVybnVtXCIpO1xuICAgICAgICBsZXQgeSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjb2xcIik7XG4gICAgICAgIGxldCB4ID0gdGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwicm93XCIpO1xuICAgICAgICBsZXQgcGxheWVyT2JqZWN0ID0gcGxheWVyTnVtYmVyID09IDEgPyBwbGF5ZXJzLnBsYXllcjEgOiBwbGF5ZXJzLnBsYXllcjI7XG4gICAgICAgIHBsYXllck9iamVjdC5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbeCx5XSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBSZWNlaXZlZCBhdHRhY2sgYXQgKCR7eH0sJHt5fSkgZm9yIHBsYXllciAke3BsYXllck51bWJlcn1gKTtcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJBdHRhY2tlZCh0YXJnZXQpO1xuICAgICAgICBwbGF5ZXJPYmplY3QuYm9hcmRET00ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUJvYXJkQ2xpY2spO1xuICAgICAgICBhd2FpdCBzaG9ydFNsZWVwKCk7XG4gICAgICAgIGlmIChwbGF5ZXJPYmplY3QuZ2FtZWJvYXJkLmlzQWxsU3VuaygpKXtcbiAgICAgICAgICAgIGVuZEdhbWUocGxheWVyTnVtYmVyKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgcGFzc1R1cm5UbyhwbGF5ZXJOdW1iZXIpOyAvLyBXZSBwYXNzIHR1cm4gdG8gcGxheWVyJ3MgYm9hcmQgd2UganVzdCBjbGlja2VkXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbml0UGxheSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIGFzc2lnbiBldmVudCBsaXN0ZW5lciBmb3IgYXR0YWNrc1xuICAgICAgICBjb25zdCBib2FyZDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLWFuZC1oZWFkZXIucGxheWVyLTEgLmJvYXJkLmNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgYm9hcmQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC1hbmQtaGVhZGVyLnBsYXllci0yIC5ib2FyZC5jb250YWluZXJcIik7XG4gICAgICAgIHBsYXllcnMucGxheWVyMS5ib2FyZERPTSA9IGJvYXJkMTtcbiAgICAgICAgcGxheWVycy5wbGF5ZXIyLmJvYXJkRE9NID0gYm9hcmQyO1xuICAgICAgICAvLyBsYXRlciBtYWtlIGZpcnN0IHR1cm4gcmFuZG9tIG9yIGNob3NlblxuICAgICAgICBib2FyZDIuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gICAgICAgIHBhc3NUdXJuVG8oMSk7XG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2dcIik7XG4gICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfTtcblxuICAgIGxldCBwbGF5ZXJzO1xuICAgIGNvbnN0IGluaXRHYW1lID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgcGxheWVyMSA9IG5ldyBodW1hblBsYXllcihcIkFteVwiLCAxKTtcbiAgICAgICAgY29uc3QgcGxheWVyMiA9IG5ldyBodW1hblBsYXllcihcIkJhcnRcIiwgMik7XG4gICAgICAgIFJlbmRlck1hbmFnZXIuaW5pdEdhbWVSZW5kZXIocGxheWVyMSwgcGxheWVyMik7XG4gICAgICAgIC8vIGVhY2ggcGxheWVyIGhhcyA1IHNoaXBzIG9mIHNpemUgMiwgMywgMywgNCwgNVxuICAgICAgICAvLyBlbnRlckdhbWVTdGFnaW5nKCk7XG4gICAgICAgIGFkZE5ld1NoaXAocGxheWVyMSxbMCwwXSxbMCwxXSlcbiAgICAgICAgYWRkTmV3U2hpcChwbGF5ZXIxLFszLDNdLFs0LDNdLFs1LDNdKTtcbiAgICAgICAgYWRkTmV3U2hpcChwbGF5ZXIxLFs3LDZdLFs4LDZdLFs5LDZdKTtcbiAgICAgICAgYWRkTmV3U2hpcChwbGF5ZXIxLFswLDNdLCBbMCw0XSxbMCw1XSxbMCw2XSk7XG4gICAgICAgIGFkZE5ld1NoaXAocGxheWVyMSxbNSw1XSwgWzYsNV0sWzcsNV0sWzgsNV0sWzksNV0pO1xuICAgICAgICBhZGROZXdTaGlwKHBsYXllcjIsWzcsN10sWzcsOF0pO1xuICAgICAgICBhZGROZXdTaGlwKHBsYXllcjIsWzMsM10sWzQsM10sWzUsM10pO1xuICAgICAgICBhZGROZXdTaGlwKHBsYXllcjIsWzcsNl0sWzgsNl0sWzksNl0pO1xuICAgICAgICBhZGROZXdTaGlwKHBsYXllcjIsWzAsM10sIFswLDRdLFswLDVdLFswLDZdKTtcbiAgICAgICAgYWRkTmV3U2hpcChwbGF5ZXIyLFs1LDVdLCBbNiw1XSxbNyw1XSxbOCw1XSxbOSw1XSk7XG4gICAgICAgIHBsYXllcnMgPSB7cGxheWVyMSwgcGxheWVyMn07XG4gICAgICAgIGluaXRQbGF5KCk7XG4gICAgICAgIC8vanVzdCBmb3IgdGVzdGluZyFcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51aS5jb250YWluZXJcIik7XG4gICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZW5kR2FtZSgxKSlcbiAgICB9KCk7XG5cbiAgICAvLyBwbGF5ZXIgd2l0aCBwbGF5ZXJOdW1iZXIgbG9zdFxuICAgIGNvbnN0IGVuZEdhbWUgPSBmdW5jdGlvbihwbGF5ZXJOdW1iZXIpe1xuICAgICAgICBsZXQgd2lubmVyTmFtZTtcbiAgICAgICAgaWYgKHBsYXllck51bWJlciA9PTEpe1xuICAgICAgICAgICAgd2lubmVyTmFtZSA9IHBsYXllcnMucGxheWVyMi5uYW1lO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICB3aW5uZXJOYW1lID0gcGxheWVycy5wbGF5ZXIxLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJFbmRHYW1lKHdpbm5lck5hbWUpO1xuICAgICAgICBhY3RpdmF0ZVJlcGxheUJ1dHRvbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlUmVwbGF5QnV0dG9uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgcmVwbGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5lbmQuY29udGFpbmVyIGJ1dHRvblwiKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVwbGF5QnV0dG9uKTtcbiAgICAgICAgcmVwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlbnRlckdhbWVTdGFnaW5nKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbnRlckdhbWVTdGFnaW5nID0gZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gYWN0aXZhdGUgZHJhZyBhbmQgZHJvcCBvZiBzaGlwcyB0byBjaG9vc2Ugc2hpcCBsb2NhdGlvbiB1c2luZyBIVE1MIGRyYWcgYW5kIGRyb3AgQVBJIVxuICAgICAgICBjb25zb2xlLmxvZyhcIkVudGVyaW5nIG5ldyBnYW1lIHN0YWdpbmchXCIpXG4gICAgICAgIFJlbmRlck1hbmFnZXIucmVuZGVyU3RhZ2luZyhcbiAgICAgICAgICAgIHBsYXllcnMucGxheWVyMS5nYW1lYm9hcmQuZ2V0QXR0YWNrTWFwKCksXG4gICAgICAgICAgICBwbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLmdldEJvYXJkTWFwKCksXG4gICAgICAgICAgICBwbGF5ZXJzLnBsYXllcjIuZ2FtZWJvYXJkLmdldEF0dGFja01hcCgpLFxuICAgICAgICAgICAgcGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5nZXRCb2FyZE1hcCgpXG4gICAgICAgICk7XG4gICAgICAgIHBsYXllcnMucGxheWVyMS5nYW1lYm9hcmQucmVzZXRCb2FyZCgpO1xuICAgICAgICBwbGF5ZXJzLnBsYXllcjIuZ2FtZWJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJTaGlwU2FtcGxlcygpO1xuICAgICAgICBjb25zdCBib2FyZDEgPSBwbGF5ZXJzLnBsYXllcjEuYm9hcmRET007XG4gICAgICAgIHJlbmRlckRyYWdnYWJsZVNoaXBzVG9TdGFnZShwbGF5ZXJzLnBsYXllcjEpO1xuICAgICAgICBhY3RpdmF0ZURyb3BBbmREcmFnU3RhcnRIYW5kbGVyKHBsYXllcnMucGxheWVyMS5ib2FyZERPTSk7XG4gICAgICAgIC8vIGFjdGl2YXRlRHJvcEV2ZW50KGJvYXJkMSk7XG4gICAgICAgICAgICAvLyBzaG91bGQgYWxsb3cgZHJhZ292ZXIgZGl2c1xuICAgICAgICAgICAgLy8gb24gZHJvcCwgZmlyc3QgcmVuZGVyIG92ZXJsYXBzIGFzIHJlZCFcbiAgICAgICAgICAgIC8vIGFuZCBvbiBkcm9wIHNob3VsZCBjYWxjdWxhdGUgd2hpY2ggc3F1YXJlIGl0IGlzIGRyb3BwZWQgYXQgYW5kIGluZm8gcGFzc2VkIHRvIGZyb20gZHJhZyBoYW5kbGVyIHRvIHN0b3JlIGNvb3JkaW5hdGVzIGluIGdhbWVib2FyZFxuICAgICAgICAvLyBicmVhayBzY3JlZW5cbiAgICAgICAgICAgIC8vIG9ubHkgYWxsb3cgaWYgcG9zaXRpb25zIGFyZSB2YWxpZCBhbmQgYWxsIGZpbGxlZFxuICAgICAgICAvLyByZXBlYXQgZm9yIGJvYXJkIDJcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJEcmFnZ2FibGVTaGlwc1RvU3RhZ2UgPSBmdW5jdGlvbihwbGF5ZXIpe1xuICAgICAgICBhZGROZXdTaGlwV2l0aERyYWdnaW5nKHBsYXllcixbMCwwXSxbMCwxXSlcbiAgICAgICAgYWRkTmV3U2hpcFdpdGhEcmFnZ2luZyhwbGF5ZXIsWzMsM10sWzQsM10sWzUsM10pO1xuICAgICAgICBhZGROZXdTaGlwV2l0aERyYWdnaW5nKHBsYXllcixbNyw3XSxbOCw3XSxbOSw3XSk7XG4gICAgICAgIGFkZE5ld1NoaXBXaXRoRHJhZ2dpbmcocGxheWVyLFswLDNdLCBbMCw0XSxbMCw1XSxbMCw2XSk7XG4gICAgICAgIGFkZE5ld1NoaXBXaXRoRHJhZ2dpbmcocGxheWVyLFs1LDVdLCBbNiw1XSxbNyw1XSxbOCw1XSxbOSw1XSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkTmV3U2hpcFdpdGhEcmFnZ2luZyA9IGZ1bmN0aW9uKHBsYXllciwgLi4uY29vcmRzKXtcbiAgICAgICAgYWRkTmV3U2hpcChwbGF5ZXIsIC4uLmNvb3Jkcyk7XG4gICAgICAgIHNldFNwZWNpZmljRHJhZ2dhYmxlKHBsYXllci5ib2FyZERPTSwgLi4uY29vcmRzKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRTcGVjaWZpY0RyYWdnYWJsZSA9IGZ1bmN0aW9uKGJvYXJkRE9NLCAuLi5jb29yZHMpe1xuICAgICAgICBmb3IgKGxldCBbeCx5XSBvZiBjb29yZHMpe1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gYm9hcmRET00ucXVlcnlTZWxlY3RvcihgLnJvdy0ke3h9IGRpdjpudGgtY2hpbGQoJHt5KzF9KWApO1xuICAgICAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRhcmdldCBpcyA8ZGl2IGNvbD1cIlwiPiAoZWc6IHNxdWFyZSlcbiAgICBjb25zdCBkcmFnc3RhcnRIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImRyYWcgZXZlbnQgdHJpZ2dlcmVkXCIpO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGxldCBzaGlwTGVuZ3RoID0gTnVtYmVyKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJsZW5ndGhcIikpO1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInNoaXBMZW5ndGhcIiwgc2hpcExlbmd0aCk7XG4gICAgICAgIGxldCBncmFiTG9jYXRpb24gPSBOdW1iZXIodGFyZ2V0LmdldEF0dHJpYnV0ZShcImdyYWJsb2NhdGlvblwiKSk7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiZ3JhYkxvY2F0aW9uXCIsIGdyYWJMb2NhdGlvbik7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiaG9yaXpvbnRhbFwiLCB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiaG9yaXpvbnRhbFwiKSk7XG4gICAgICAgIGxldCBzdGFydFJvdyA9IE51bWJlcih0YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJyb3dcIikpO1xuICAgICAgICBsZXQgc3RhcnRDb2wgPSBOdW1iZXIodGFyZ2V0LmdldEF0dHJpYnV0ZShcImNvbFwiKSk7XG4gICAgICAgIGxldCBpc0hvcml6b250YWwgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJzdGFydFJvd1wiLCBzdGFydFJvdyk7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwic3RhcnRDb2xcIiwgc3RhcnRDb2wpO1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImlzSG9yaXpvbnRhbFwiLCBpc0hvcml6b250YWwpXG4gICAgICAgIGNvbnN0IHdpZHRoT2ZEaXYgPSAyMDtcbiAgICAgICAgY29uc3Qgd2lkdGhPZkdhcCA9IDE7XG4gICAgICAgIC8vIGlmIGdyYWJsb2NhdGlvbiA9IDAsIGRvbid0IGFkZCBhbnl0aGluZ1xuICAgICAgICAvLyBpZiBncmFibG9jYXRpb24gPSAxLCBhZGQgMSBnYXAgYW5kIDEgZGl2XG4gICAgICAgIC8vIGlmIGdyYWJsb2NhdGlvbiA9IDIsIGFkZCAyIGdhcHMgYW5kIDIgZGl2c1xuICAgICAgICBjb25zdCBhZGRPZmZzZXRYID0gKGdyYWJMb2NhdGlvbiAqICh3aWR0aE9mRGl2K3dpZHRoT2ZHYXApKTtcbiAgICAgICAgY29uc3QgZHJhZ0ltYWdlTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5oaWRkZW4uc2FtcGxlcyAuc2hpcHMuaG9yaXpvbnRhbCAjbGVuZ3RoLSR7c2hpcExlbmd0aH1gKTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZShkcmFnSW1hZ2VOb2RlLGV2ZW50Lm9mZnNldFggKyBhZGRPZmZzZXRYLGV2ZW50Lm9mZnNldFkpO1xuICAgICAgICAvLyBkeW5hbWljYWxseSBhbGxvdyB3aGVyZSB3ZSBjYW4gZHJvcCB3aXRoIG9uZHJhZ292ZXIgYXR0cmlidXRlXG4gICAgICAgIGNvbnN0IHBsYXllck51bSA9IHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwicGxheWVybnVtXCIpO1xuICAgICAgICBsZXQgcGxheWVyVmFyO1xuICAgICAgICBpZiAocGxheWVyTnVtID09MSl7XG4gICAgICAgICAgICBwbGF5ZXJWYXIgPSBwbGF5ZXJzLnBsYXllcjE7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHBsYXllclZhciA9IHBsYXllcnMucGxheWVyMjtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInBsYXllcm51bVwiLCBwbGF5ZXJOdW0pO1xuICAgICAgICBjb25zdCBzaGlwT2JqZWN0ID0gcGxheWVyVmFyLmdhbWVib2FyZC5nZXRTaGlwRnJvbUNvb3Jkcyhbc3RhcnRSb3csIHN0YXJ0Q29sXSk7XG4gICAgICAgIHBsYXllclZhci5nYW1lYm9hcmQuY3JlYXRlQWxsb3dlZFBvc2l0aW9uTWFwKHNoaXBPYmplY3QsIGlzSG9yaXpvbnRhbCk7XG4gICAgICAgIGFjdGl2YXRlT25kcmFnb3ZlcihwbGF5ZXJWYXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlT25kcmFnb3ZlciA9IGZ1bmN0aW9uKHBsYXllcil7XG4gICAgICAgIGNvbnN0IHJvd3MgPSBwbGF5ZXIuYm9hcmRET00uY2hpbGRyZW47XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHJvd3NbaV07XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVzID0gcm93LmNoaWxkcmVuO1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPDEwOyBqKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IHNxdWFyZXNbal07XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgJHtwbGF5ZXIuZ2FtZWJvYXJkLmlzVGhpc0FsbG93ZWRQbGFjZW1lbnQoW2ksal0pfWApXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQuaXNUaGlzQWxsb3dlZFBsYWNlbWVudChbaSxqXSkpe1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIG9uZHJhZ292ZXJIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgZHJhZ292ZXIgYWxsb3dlZCBvbiBbJHtpfSwgJHtqfV1gKVxuICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBvbmRyYWdvdmVySGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYGRyYWdvdmVyIG5vdCBhbGxvd2VkIG9uIFske2l9LCAke2p9XWApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVEcm9wQW5kRHJhZ1N0YXJ0SGFuZGxlciA9IGZ1bmN0aW9uKHBsYXllckJvYXJkKXtcbiAgICAgICAgZm9yIChsZXQgcm93IG9mIHBsYXllckJvYXJkLmNoaWxkcmVuKXtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCBvZiByb3cuY2hpbGRyZW4pe1xuICAgICAgICAgICAgICAgIGNvbC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBkcm9wSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgY29sLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZ3N0YXJ0SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvbmRyYWdvdmVySGFuZGxlciA9IGZ1bmN0aW9uKGV2KXtcbiAgICAgICAgY29uc29sZS5sb2coXCJkcmFnb3ZlciBkZXRlY3RlZCFcIilcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBkcm9wSGFuZGxlciA9IGZ1bmN0aW9uKGV2KXtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgcm93ID0gTnVtYmVyKGV2LnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcInJvd1wiKSk7XG4gICAgICAgIGNvbnN0IGNvbCA9IE51bWJlcihldi50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY29sXCIpKTtcbiAgICAgICAgbGV0IG5ld1N0YXJ0Um93ID0gcm93O1xuICAgICAgICBsZXQgb2xkU3RhcnRSb3cgPSBOdW1iZXIoZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJzdGFydFJvd1wiKSk7XG4gICAgICAgIGxldCBuZXdTdGFydENvbCA9IGNvbDtcbiAgICAgICAgbGV0IG9sZFN0YXJ0Q29sID0gTnVtYmVyKGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwic3RhcnRDb2xcIikpO1xuICAgICAgICBjb25zdCBncmFiTG9jYXRpb24gPSBOdW1iZXIoZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJncmFiTG9jYXRpb25cIikpO1xuICAgICAgICBjb25zdCBpc0hvcml6b250YWwgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImlzSG9yaXpvbnRhbFwiKTtcbiAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCA9PSBcInRydWVcIil7XG4gICAgICAgICAgICBuZXdTdGFydENvbCAtPSBncmFiTG9jYXRpb247XG4gICAgICAgICAgICBvbGRTdGFydENvbCAtPSBncmFiTG9jYXRpb247XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIG5ld1N0YXJ0Um93IC09IGdyYWJMb2NhdGlvbjtcbiAgICAgICAgICAgIG9sZFN0YXJ0Um93IC09IGdyYWJMb2NhdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwbGF5ZXJOdW0gPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInBsYXllcm51bVwiKTtcbiAgICAgICAgbGV0IHBsYXllcjtcbiAgICAgICAgaWYgKHBsYXllck51bSA9PTEpe1xuICAgICAgICAgICAgcGxheWVyID0gcGxheWVycy5wbGF5ZXIxO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBwbGF5ZXIgPSBwbGF5ZXJzLnBsYXllcjI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IE51bWJlcihldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInNoaXBMZW5ndGhcIikpO1xuICAgICAgICAvLyBjaGFuZ2UgdGhlIGdhbWVib2FyZCBkYXRhXG4gICAgICAgIHBsYXllci5nYW1lYm9hcmQubW92ZVNoaXAocGxheWVyLmdhbWVib2FyZC5nZXRTaGlwRnJvbUNvb3Jkcyhbb2xkU3RhcnRSb3csb2xkU3RhcnRDb2xdKSxcbiAgICAgICAgW25ld1N0YXJ0Um93LG5ld1N0YXJ0Q29sXSwgc2hpcExlbmd0aCwgaXNIb3Jpem9udGFsKTtcbiAgICAgICAgLy8gcmVuZGVyIGNoYW5nZXMgYW5kIGFsc28gbWFuYWdlcyBkcmFnZ2FibGVcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJNb3ZlU2hpcChbb2xkU3RhcnRSb3csb2xkU3RhcnRDb2xdLFxuICAgICAgICBbbmV3U3RhcnRSb3csbmV3U3RhcnRDb2xdLCBzaGlwTGVuZ3RoLCBpc0hvcml6b250YWwsIHBsYXllci5ib2FyZERPTSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvcnRTbGVlcCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpO1xuICAgIH1cblxuICAgIHJldHVybntcbiAgICAgICAgcGxheWVycyxcbiAgICB9XG59KCk7XG5cbmV4cG9ydCB7R2FtZU1hbmFnZXJ9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9