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
.ship.holder{
    display: flex;
    gap: 3px;
    flex-direction: column;

    .ship.container{
        background-color: black;
        width: min-content;
        display: flex;
        flex-direction: row;
        gap: 1px;

        div{
            aspect-ratio: 1/1;
            height: 20px;
            background-color:gray;
        }
    }
}

/* style dialog */
::backdrop{
    background-color: purple;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":";;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,kBAAkB;IAClB,uBAAuB;;IAEvB;QACI,aAAa;QACb,mBAAmB;QACnB,QAAQ;;QAER;YACI,iBAAiB;YACjB,YAAY;YACZ,qBAAqB;QACzB;;QAEA;YACI,wBAAwB;QAC5B;;QAEA;YACI,qBAAqB;QACzB;IACJ;AACJ;;AAEA;IACI;QACI,sBAAsB;IAC1B;AACJ;;AAEA,yCAAyC;AACzC;IACI,aAAa;IACb,QAAQ;IACR,sBAAsB;;IAEtB;QACI,uBAAuB;QACvB,kBAAkB;QAClB,aAAa;QACb,mBAAmB;QACnB,QAAQ;;QAER;YACI,iBAAiB;YACjB,YAAY;YACZ,qBAAqB;QACzB;IACJ;AACJ;;AAEA,iBAAiB;AACjB;IACI,wBAAwB;AAC5B","sourcesContent":["\n\n.board.container{\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    width: min-content;\n    background-color: black;\n\n    > div{\n        display: flex;\n        flex-direction: row;\n        gap: 1px;\n\n        div{\n            aspect-ratio: 1/1;\n            height: 20px;\n            background-color:gray;\n        }\n\n        .ship.attacked{\n            background-color: purple;\n        }\n\n        .attacked{\n            background-color: red;\n        }\n    }\n}\n\n.board.container.visible{\n    .ship{\n        background-color: aqua;\n    }\n}\n\n/* style ships off board during staging */\n.ship.holder{\n    display: flex;\n    gap: 3px;\n    flex-direction: column;\n\n    .ship.container{\n        background-color: black;\n        width: min-content;\n        display: flex;\n        flex-direction: row;\n        gap: 1px;\n\n        div{\n            aspect-ratio: 1/1;\n            height: 20px;\n            background-color:gray;\n        }\n    }\n}\n\n/* style dialog */\n::backdrop{\n    background-color: purple;\n}"],"sourceRoot":""}]);
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

  let shipList = new _node_modules_linked_lists_linkedlist_js__WEBPACK_IMPORTED_MODULE_1__.LinkedList();
  // use rest parameter (...) to accept variable amount of coords
  const newShip = function (...coords) {
      const newShip = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(coords.length);
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

  return {
    newShip,
    getShipFromCoords,
    receiveAttack,
    wasAttacked,
    isAllSunk,
    getBoardMap,
    resetBoard,
    getAttackMap,
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
        for (let [x,y] of coords){
            const squareToChange = board.querySelector(`div.row-${x} > div:nth-child(${y+1})`);
            squareToChange.classList.add("ship")
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

    const renderShipsOffBoard = function(boardDOM){
        const shipHolder = createElement("div", "ship holder");
        const ship2 = buildShipOfLength(2,1);
        const ship3 = buildShipOfLength(3,2);
        const ship3_2 = buildShipOfLength(3,3);
        const ship4 = buildShipOfLength(4,4);
        const ship5 = buildShipOfLength(5,5);
        shipHolder.append(ship2,ship3, ship3_2, ship4, ship5);
        boardDOM.after(shipHolder);
    }

    const buildShipOfLength = function(length, id){
        const shipContainer = createElement("div", "ship container");
        shipContainer.setAttribute("horizontal", true);
        shipContainer.setAttribute("length", length);
        shipContainer.id = id;
        for (let i =0; i <length; i++){
            const div = document.createElement("div");
            div.classList.add("ship");
            div.setAttribute("part",i);
            shipContainer.append(div);
        }
        return shipContainer;
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
        renderShipsOffBoard,
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
        const board1 = players.player1.boardDOM;
        _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.renderShipsOffBoard(board1);
        activateDragHandlerAndEndHandler(board1);
            // should hold info about which square it is holding onto (and maybe rotation?)
        activateAllOndragoverOnDrop(board1);
        // activateDropEvent(board1);
            // should allow dragover divs
            // on drop, first render overlaps as red!
            // and on drop should calculate which square it is dropped at and info passed to from drag handler to store coordinates in gameboard
        // break screen
            // only allow if positions are valid and all filled
        // repeat for board 2
    }

    const activateDragHandlerAndEndHandler = function(boardDOM){
        const ships = boardDOM.parentNode.querySelectorAll(".ship.holder .container .ship");
        for (let shipPart of ships){
            shipPart.setAttribute("draggable", true);
            shipPart.addEventListener("dragstart", (event) => dragstartHandler(event));
            shipPart.addEventListener("dragend", (event) => toggleOndragoverBoard(boardDOM, event));
        }
    }

    // target is div.ship.container > div
    const dragstartHandler = function(event){
        console.log("drag event triggered")
        console.log(event)
        const target = event.target;
        const container = event.target.parentNode;
        event.dataTransfer.setData("shipLength", container.getAttribute("length"));
        const grabLocation = target.getAttribute("part")
        event.dataTransfer.setData("grabLocation", grabLocation);
        event.dataTransfer.setData("horizontal", container.getAttribute("horizontal"));
        event.dataTransfer.setData("shipId", container.id);
        const widthOfDiv = 20;
        const widthOfGap = 1;
        // if grablocation = 0, don't add anything
        // if grablocation = 1, add 1 gap and 1 div
        // if grablocation = 2, add 2 gaps and 2 divs
        const addOffsetX = (grabLocation * (widthOfDiv+widthOfGap));
        event.dataTransfer.setDragImage(container,event.offsetX + addOffsetX,event.offsetY);
        // dynamically allow where we can drop with ondragover attribute
        const playerNumber = container.parentNode.previousElementSibling.getAttribute("playernum");
        let boardDOMNode;
        if (playerNumber == 1){
            boardDOMNode = players.player1.boardDOM;
        } else if (playerNumber == 2){
            boardDOMNode = players.player2.boardDOM;
        }
        toggleOndragoverBoard(boardDOMNode, event, true);
    }

    const activateAllOndragoverOnDrop = function(boardDOM){
        for (let row of boardDOM.childNodes){
            for (let square of row.childNodes){
                square.addEventListener("dragover", ondragoverHandler)
                square.addEventListener("drop", dropHandler)
                square.setAttribute("dragListening", true);
            }
        }
    }

    const toggleOndragoverBoard = function(boardDOM, event, isDataTransfered = false){
        let isHorizontal;
        let grabLocation;
        let shipLength;
        if (isDataTransfered){
            isHorizontal = event.dataTransfer.getData("horizontal");
            grabLocation = Number(event.dataTransfer.getData("grabLocation"));
            shipLength = Number(event.dataTransfer.getData("shipLength"));
        } else{
            const target = event.target;
            const container = target.parentNode;
            isHorizontal = container.getAttribute("horizontal");
            grabLocation = target.getAttribute("part");
            shipLength = container.getAttribute("length");
        }
        console.log(`toggleOndragover called for length ${shipLength} and grab location ${grabLocation}`)
        const rows = boardDOM.childNodes;
        if (isHorizontal == "true"){
            // if shipLength is 3, and grab location is 1 (the middle of ship)
            // prevent dropping on col 0 [less than 1] and col 9 [more than 10-(3-1)]
            for (let row of rows){
                const squares = row.childNodes;
                for (let i =0; i<grabLocation; i++){
                    toggleOndragover(squares[i]);
                }
                for (let j =(10-shipLength+grabLocation+1); j<10; j++){
                    toggleOndragover(squares[j]);
                }
            }
        } else{
            // if ship is vertical, do same limiting logic on the rows, not columns
            for (let i =0; i<grabLocation; i++){
                const row = rows[i];
                const squares = row.childNodes;
                for (let square of squares){
                    toggleOndragover(square);
                }
            }
            for (let j =(10-shipLength+grabLocation); j<10; j++){
                const row = rows[j];
                const squares = row.childNodes;
                for (let square of squares){
                    toggleOndragover(square);
                }
            }
        }
    }

    const toggleOndragover = function(square){
        if (square.getAttribute("dragListening") == "true"){
            square.removeEventListener("dragover", ondragoverHandler);
            square.setAttribute("dragListening", false);
        } else{
            square.addEventListener("dragover", ondragoverHandler);
            square.setAttribute("dragListening", true);
        }
    }

    const ondragoverHandler = function(ev){
        ev.preventDefault();
        console.log("dragover detected!")
    }

    // dataObject holds... shipLength, grabLocation, horizontal, shipId: container.id,
    const dropHandler = function(ev){
        ev.preventDefault();
        console.log("drop detected!")
        const shipLength = ev.dataTransfer.getData("shipLength");
        const horizontal = ev.dataTransfer.getData("horizontal");
        const shipId = ev.dataTransfer.getData("shipId");
        const grabLocation = ev.dataTransfer.getData("grabLocation");
        const droppedSquare = ev.target;
        const droppedRow = droppedSquare.parentNode;
        const oldShip = document.querySelector(`.ship.holder .container .ship#${shipId}`);
        const oldShipParts = oldShip.childNodes;
        const droppedColIndex = droppedSquare.getAttribute("col");
        // grab location already accounts for shiplength on left side
        // if grabLocation goes up, start index should DECREASE and end index should INCREASE from droppedColIndex
        // if shipLength is 5, grab position is 3 (4th part), and dropColIndex is 7 then fill square indexes 4 (7-3),5,6,7,8 (7-3+4)
        if (horizontal == "true"){
            const squaresOfRow = droppedRow.childNodes;
            for (let i = 0; i < shipLength; i++){
                squaresOfRow[droppedColIndex+i-grabLocation].appendChild(oldShipParts[i]);
            }
        } else {
            // add squares vertically
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUSxxREFBYTtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsWUFBWSxvQkFBb0IsYUFBYTtBQUN2RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZ0JBQWdCO0FBQy9DO0FBQ0E7QUFDQSw0REFBNEQsTUFBTTtBQUNsRTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSwyQkFBMkIsZ0JBQWdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxNQUFNO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0YsT0FBTztBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4uL2xpbmtlZC1saXN0cy9saW5rZWRsaXN0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMaW5rZWRMaXN0IHJlcHJlc2VudHMgZnVsbCBsaXN0XG5jb25zdCBMaW5rZWRMaXN0ID0gZnVuY3Rpb24gKCkge1xuICBsZXQgaGVhZE5vZGUgPSBudWxsO1xuICBjb25zdCBoZWFkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBoZWFkTm9kZTtcbiAgfTtcblxuICBjb25zdCB0YWlsID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgd2hpbGUgKG5vZGUubmV4dE5vZGUgIT0gbnVsbCkge1xuICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIGNvbnN0IGFwcGVuZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmIChoZWFkTm9kZSA9PSBudWxsKSB7XG4gICAgICBoZWFkTm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFpbCgpLm5leHROb2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwcmVwZW5kID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKGhlYWROb2RlID09IG51bGwpIHtcbiAgICAgIGhlYWROb2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkTm9kZSA9IG5ldyBOb2RlKHZhbHVlLCBoZWFkTm9kZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBpZiAoaGVhZE5vZGUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgICBsZXQgbm9kZSA9IGhlYWROb2RlO1xuICAgIHdoaWxlIChub2RlLm5leHROb2RlICE9IG51bGwpIHtcbiAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgICAgY291bnQrKztcbiAgICB9XG4gICAgcmV0dXJuIGNvdW50O1xuICB9O1xuXG4gIC8vIGNvdW50IGluZGV4IGZyb20gMVxuICBjb25zdCBhdCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIGlmIChpbmRleCA8PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IG5vZGUgPSBoZWFkTm9kZTtcbiAgICB3aGlsZSAoaW5kZXggPiAxKSB7XG4gICAgICBub2RlID0gbm9kZS5uZXh0Tm9kZTtcbiAgICAgIGluZGV4LS07XG4gICAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICBjb25zdCBwb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHNlY29uZFRvTGFzdEluZGV4ID0gc2l6ZSgpIC0gMTtcbiAgICBsZXQgc2Vjb25kVG9MYXN0Tm9kZSA9IGF0KHNlY29uZFRvTGFzdEluZGV4KTtcbiAgICBzZWNvbmRUb0xhc3ROb2RlLm5leHROb2RlID0gbnVsbDtcbiAgfTtcblxuICAvLyByZXR1cm5zIHRydWUgaWYgdmFsdWUgcGFzc2VkIGlzIGluIGxpc3QsIGVsc2UgcmV0dXJucyBmYWxzZVxuICBjb25zdCBjb250YWlucyA9IGZ1bmN0aW9uICh2YWx1ZSwgY29tcGFyZUtleSA9IFwidmFsdWVcIikge1xuICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUudmFsdWUgPT0gdmFsdWUgfHwgbm9kZS52YWx1ZVtjb21wYXJlS2V5XSA9PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLy8gcmV0dXJucyBpbmRleCBvZiBub2RlIGNvbnRhaW5pbmcgdmFsdWUsIG9yIG51bGwgaWYgbm90IGZvdW5kXG4gIGNvbnN0IGZpbmQgPSBmdW5jdGlvbiAodmFsdWUsIGNvbXBhcmVLZXkgPSBcInZhbHVlXCIpIHtcbiAgICBsZXQgbm9kZSA9IGhlYWROb2RlO1xuICAgIGxldCBpbmRleCA9IDE7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUudmFsdWUgPT0gdmFsdWUgfHwgbm9kZS52YWx1ZVtjb21wYXJlS2V5XSA9PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0Tm9kZTtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgLy8gcmV0dXJucyBub2RlIGNvbnRhaW5pbmcgdmFsdWUsIG9yIG51bGwgaWYgbm90IGZvdW5kXG4gIC8vIGJ1dCBjaGVja3MgZm9yIG5vZGUuY2FsbGJhY2tmdW5jdGlvbigpIGJlaW5nIGVxdWFsIHRvIHZhbHVlXG4gIGNvbnN0IGZpbmRDYWxsYmFjayA9IGZ1bmN0aW9uICh2YWx1ZSwgY2FsbGJhY2tGdW5jdGlvbikge1xuICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUudmFsdWVbY2FsbGJhY2tGdW5jdGlvbl0oKSA9PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTsgIFxuXG4gIC8vIHNhbWUgYXMgZmluZCwgYnV0IHJldHVybnMgdGhlIG5vZGUsIG5vdCBpbmRleFxuICBjb25zdCBmaW5kTm9kZSA9IGZ1bmN0aW9uICh2YWx1ZSwgY29tcGFyZUtleSA9IFwidmFsdWVcIikge1xuICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUudmFsdWUgPT0gdmFsdWUgfHwgbm9kZS52YWx1ZVtjb21wYXJlS2V5XSA9PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICAvLyByZXR1cm5zIHN0cmluZyBvZiBub2RlIHZhbHVlcyBpbiBmb3JtYXQgXCIodmFsdWUpIC0+ICh2YWx1ZSkgLT4gbnVsbFwiXG4gIGNvbnN0IHRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChoZWFkTm9kZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IHN0cmluZyA9IGAoICR7aGVhZE5vZGUudmFsdWV9IClgO1xuICAgIGxldCBub2RlID0gaGVhZE5vZGUubmV4dE5vZGU7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgc3RyaW5nICs9IGAgLT4gKCAke25vZGUudmFsdWV9IClgO1xuICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgfVxuICAgIHN0cmluZyArPSBcIiAtPiBudWxsXCI7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcblxuICAvLyBpbnNlcnRzIG5ldyBOb2RlIHdpdGggdmFsdWUgYXQgaW5kZXggKGNvdW50aW5nIGZyb20gMSlcbiAgY29uc3QgaW5zZXJ0QXQgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgY29uc3QgcHJpb3JJbmRleCA9IGluZGV4IC0gMTtcbiAgICBpZiAocHJpb3JJbmRleCA9PSAwKSB7XG4gICAgICBwcmVwZW5kKHZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHByaW9yTm9kZSA9IGF0KHByaW9ySW5kZXgpO1xuICAgIGlmIChwcmlvck5vZGUgPT0gbnVsbCkge1xuICAgICAgZXJyb3IubG9nKGAke2luZGV4fSBpcyBub3QgdmFsaWQgaW5kZXguYCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5leHROb2RlID0gcHJpb3JOb2RlLm5leHROb2RlO1xuICAgICAgcHJpb3JOb2RlLm5leHROb2RlID0gbmV3IE5vZGUodmFsdWUsIG5leHROb2RlKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gcmVtb3ZlcyBub2RlIGF0IGluZGV4IChjb3VudGluZyBmcm9tIDEpXG4gIGNvbnN0IHJlbW92ZUF0ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgY29uc3QgcHJpb3JJbmRleCA9IGluZGV4IC0gMTtcbiAgICBpZiAocHJpb3JJbmRleCA9PSAwKSB7XG4gICAgICBsZXQgbm9kZVRvUmVtb3ZlID0gaGVhZE5vZGU7XG4gICAgICBoZWFkTm9kZSA9IGhlYWROb2RlLm5leHROb2RlO1xuICAgICAgbm9kZVRvUmVtb3ZlID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHByaW9yTm9kZSA9IGF0KHByaW9ySW5kZXgpO1xuICAgIGxldCBub2RlVG9SZW1vdmUgPSBwcmlvck5vZGUubmV4dE5vZGU7XG4gICAgY29uc3QgbmV4dE5vZGUgPSBwcmlvck5vZGUubmV4dE5vZGUubmV4dE5vZGU7XG4gICAgcHJpb3JOb2RlLm5leHROb2RlID0gbmV4dE5vZGU7XG4gICAgbm9kZVRvUmVtb3ZlID0gbnVsbDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGhlYWQsXG4gICAgdGFpbCxcbiAgICBhcHBlbmQsXG4gICAgcHJlcGVuZCxcbiAgICBzaXplLFxuICAgIGF0LFxuICAgIHBvcCxcbiAgICBjb250YWlucyxcbiAgICBmaW5kLFxuICAgIHRvU3RyaW5nLFxuICAgIGluc2VydEF0LFxuICAgIHJlbW92ZUF0LFxuICAgIGZpbmROb2RlLFxuICAgIGZpbmRDYWxsYmFjayxcbiAgfTtcbn07XG5cbi8vIE5vZGUgY29udGFpbnMgdmFsdWUgcHJvcGVydHksIG5leHROb2RlXG5cbmNvbnN0IE5vZGUgPSBmdW5jdGlvbiAodmFsdWUgPSBudWxsLCBuZXh0Tm9kZSA9IG51bGwpIHtcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZSxcbiAgICBuZXh0Tm9kZSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IExpbmtlZExpc3QsIE5vZGUgfTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcblxuLmJvYXJkLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcHg7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuXG4gICAgPiBkaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGdhcDogMXB4O1xuXG4gICAgICAgIGRpdntcbiAgICAgICAgICAgIGFzcGVjdC1yYXRpbzogMS8xO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpncmF5O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNoaXAuYXR0YWNrZWR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG4gICAgICAgIH1cblxuICAgICAgICAuYXR0YWNrZWR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ib2FyZC5jb250YWluZXIudmlzaWJsZXtcbiAgICAuc2hpcHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICB9XG59XG5cbi8qIHN0eWxlIHNoaXBzIG9mZiBib2FyZCBkdXJpbmcgc3RhZ2luZyAqL1xuLnNoaXAuaG9sZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAzcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC5zaGlwLmNvbnRhaW5lcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZ2FwOiAxcHg7XG5cbiAgICAgICAgZGl2e1xuICAgICAgICAgICAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyYXk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qIHN0eWxlIGRpYWxvZyAqL1xuOjpiYWNrZHJvcHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLHVCQUF1Qjs7SUFFdkI7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFFBQVE7O1FBRVI7WUFDSSxpQkFBaUI7WUFDakIsWUFBWTtZQUNaLHFCQUFxQjtRQUN6Qjs7UUFFQTtZQUNJLHdCQUF3QjtRQUM1Qjs7UUFFQTtZQUNJLHFCQUFxQjtRQUN6QjtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtBQUNKOztBQUVBLHlDQUF5QztBQUN6QztJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1Isc0JBQXNCOztJQUV0QjtRQUNJLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixRQUFROztRQUVSO1lBQ0ksaUJBQWlCO1lBQ2pCLFlBQVk7WUFDWixxQkFBcUI7UUFDekI7SUFDSjtBQUNKOztBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLHdCQUF3QjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG4uYm9hcmQuY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFweDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXG4gICAgPiBkaXZ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGdhcDogMXB4O1xcblxcbiAgICAgICAgZGl2e1xcbiAgICAgICAgICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyYXk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2hpcC5hdHRhY2tlZHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuYXR0YWNrZWR7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5ib2FyZC5jb250YWluZXIudmlzaWJsZXtcXG4gICAgLnNoaXB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgICB9XFxufVxcblxcbi8qIHN0eWxlIHNoaXBzIG9mZiBib2FyZCBkdXJpbmcgc3RhZ2luZyAqL1xcbi5zaGlwLmhvbGRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIC5zaGlwLmNvbnRhaW5lcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBnYXA6IDFweDtcXG5cXG4gICAgICAgIGRpdntcXG4gICAgICAgICAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpncmF5O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi8qIHN0eWxlIGRpYWxvZyAqL1xcbjo6YmFja2Ryb3B7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7U2hpcH0gZnJvbSBcIi4vc2hpcC5qc1wiO1xuaW1wb3J0IHtMaW5rZWRMaXN0fSBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2xpbmtlZC1saXN0cy9saW5rZWRsaXN0LmpzXCJcblxuY29uc3QgR2FtZWJvYXJkID0gZnVuY3Rpb24gKCkge1xuICBsZXQgYm9hcmRNYXA7XG4gIGxldCBhdHRhY2tNYXA7XG4gIC8vIG1ha2UgZWFjaCBtYXAgYW4gYXJyYXkgb2YgMTAgd2l0aCBlYWNoIGFycmF5IGJlaW5nIGFuIG9iamVjdCAoc2ltaWxhciB0byBoYXNoIG1hcClcbiAgY29uc3QgaW5pdEJvYXJkID0gZnVuY3Rpb24gKCkge1xuICAgIGJvYXJkTWFwID0gW3t9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9XTtcbiAgICBhdHRhY2tNYXAgPSBbe30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge31dO1xuICB9KCk7XG5cbiAgY29uc3QgZ2V0Qm9hcmRNYXAgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBib2FyZE1hcDtcbiAgfVxuXG4gIGNvbnN0IGdldEF0dGFja01hcCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGF0dGFja01hcDtcbiAgfVxuXG4gIGxldCBzaGlwTGlzdCA9IG5ldyBMaW5rZWRMaXN0KCk7XG4gIC8vIHVzZSByZXN0IHBhcmFtZXRlciAoLi4uKSB0byBhY2NlcHQgdmFyaWFibGUgYW1vdW50IG9mIGNvb3Jkc1xuICBjb25zdCBuZXdTaGlwID0gZnVuY3Rpb24gKC4uLmNvb3Jkcykge1xuICAgICAgY29uc3QgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3Jkcy5sZW5ndGgpO1xuICAgICAgaWYgKGlzU2hpcEF0Q29vcmRzKC4uLmNvb3Jkcykpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERvbid0IG92ZXJsYXAgc2hpcHNgKTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IFt4LHldIG9mIGNvb3Jkcyl7XG4gICAgICAgIGlmICh5IDwgMTAgJiYgeSA+PTApe1xuICAgICAgICAgIGJvYXJkTWFwW3hdW3ldID0gbmV3U2hpcDtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkJhZCB5IGlucHV0IGZvciBuZXdTaGlwKClcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGFkZGluZyBuZXcgc2hpcCB0byBzaGlwIGxpbmtlZCBsaXN0XG4gICAgICBzaGlwTGlzdC5hcHBlbmQobmV3U2hpcCk7XG4gIH07XG5cbiAgY29uc3QgaXNTaGlwQXRDb29yZHMgPSBmdW5jdGlvbiguLi5jb29yZHMpe1xuICAgIGZvciAobGV0IFt4LHldIG9mIGNvb3Jkcyl7XG4gICAgICBpZiAoYm9hcmRNYXBbeF1beV0gIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBnZXRTaGlwRnJvbUNvb3JkcyA9IGZ1bmN0aW9uKFt4LHldKXtcbiAgICByZXR1cm4gYm9hcmRNYXBbeF1beV07XG4gIH1cblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gZnVuY3Rpb24oW3gseV0pe1xuICAgIGlmICh3YXNBdHRhY2tlZChbeCx5XSkpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgYXR0YWNrIHByZXZpb3VzIGF0dGFja2VkICgke3h9LCR7eX0pYCk7XG4gICAgfVxuICAgIGNvbnN0IHNoaXAgPSBib2FyZE1hcFt4XVt5XTtcbiAgICBpZiAodHlwZW9mKHNoaXApID09IFwib2JqZWN0XCIpe1xuICAgICAgc2hpcC5oaXQoKTtcbiAgICAgIGF0dGFja01hcFt4XVt5XT1cImhpdFwiO1xuICAgICAgcmV0dXJuIFwiaGl0XCI7XG4gICAgfSBlbHNle1xuICAgICAgYXR0YWNrTWFwW3hdW3ldID0gXCJtaXNzXCI7XG4gICAgICByZXR1cm4gXCJtaXNzXCI7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgd2FzQXR0YWNrZWQgPSBmdW5jdGlvbihbeCx5XSl7XG4gICAgcmV0dXJuIGF0dGFja01hcFt4XVt5XSB8fCBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGlzQWxsU3VuayA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIChzaGlwTGlzdC5maW5kQ2FsbGJhY2soZmFsc2UsIFwiaXNTdW5rXCIpID09IG51bGwpO1xuICB9XG5cbiAgY29uc3QgcmVzZXRCb2FyZCA9IGZ1bmN0aW9uKCl7XG4gICAgYm9hcmRNYXAgPSBbe30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge31dO1xuICAgIGF0dGFja01hcCA9IFt7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fV07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1NoaXAsXG4gICAgZ2V0U2hpcEZyb21Db29yZHMsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICB3YXNBdHRhY2tlZCxcbiAgICBpc0FsbFN1bmssXG4gICAgZ2V0Qm9hcmRNYXAsXG4gICAgcmVzZXRCb2FyZCxcbiAgICBnZXRBdHRhY2tNYXAsXG4gIH07XG59O1xuXG5leHBvcnQgeyBHYW1lYm9hcmQgfTtcbiIsImltcG9ydCB7R2FtZWJvYXJkfSBmcm9tIFwiLi9nYW1lYm9hcmQuanNcIlxuXG5jb25zdCBQbGF5ZXIgPSBmdW5jdGlvbihuYW1lLCBudW1iZXIpe1xuXG4gICAgbGV0IGdhbWVib2FyZDtcbiAgICBjb25zdCBpbml0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIH0oKTtcblxuICAgIHJldHVybntcbiAgICAgICAgbmFtZSxcbiAgICAgICAgbnVtYmVyLFxuICAgICAgICBnYW1lYm9hcmQsXG4gICAgfVxufVxuXG5jb25zdCBjb21wdXRlclBsYXllciA9IGZ1bmN0aW9uKG5hbWUsIG51bWJlcil7XG5cbiAgICByZXR1cm57XG4gICAgICAgIC8vIGluaGVyaXQgcHJvcGVydGllcyBieSBjb21wb3NpdGlvblxuICAgICAgICAuLi4obmV3IFBsYXllcihuYW1lLCBudW1iZXIpKSxcbiAgICB9XG59XG5cbmNvbnN0IGh1bWFuUGxheWVyID0gZnVuY3Rpb24obmFtZSwgbnVtYmVyKXtcblxuICAgIHJldHVybntcbiAgICAgICAgLi4uKG5ldyBQbGF5ZXIobmFtZSwgbnVtYmVyKSksXG4gICAgfVxufVxuXG5leHBvcnQge1BsYXllciwgY29tcHV0ZXJQbGF5ZXIsIGh1bWFuUGxheWVyfTsiLCIvLyBjb250YWlucyBtZXRob2RzIHRvIHBvcHVsYXRlIERPTVxuLy8gcmVuZGVyIGZ1bmN0aW9ucyB3aWxsIGRpc3BsYXkgRE9NIGVsZW1lbnRzXG4vLyBidWlsZCBmdW5jdGlvbnMgd2lsbCBidWlsZCBlbGVtZW50cyBhbmQgcmV0dXJuIHRoZW0gd2l0aG91dCBkaXNwbGF5XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuY29uc3QgUmVuZGVyTWFuYWdlciA9IGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgbGV0IGJvYXJkMTtcbiAgICBsZXQgYm9hcmQyO1xuICAgIGxldCBkaWFsb2c7XG4gICAgY29uc3QgaW5pdEdhbWVSZW5kZXIgPSBmdW5jdGlvbihwbGF5ZXIxT2JqZWN0LCBwbGF5ZXIyT2JqZWN0KXtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBidWlsZEhlYWRlcigpO1xuICAgICAgICBib2FyZDEgPSBidWlsZEJvYXJkQW5kSGVhZGVyKHBsYXllcjFPYmplY3QubnVtYmVyLCBwbGF5ZXIxT2JqZWN0Lm5hbWUpO1xuICAgICAgICBib2FyZDIgPSBidWlsZEJvYXJkQW5kSGVhZGVyKHBsYXllcjJPYmplY3QubnVtYmVyLCBwbGF5ZXIyT2JqZWN0Lm5hbWUpO1xuICAgICAgICBib2R5LmFwcGVuZChoZWFkZXIsIGJvYXJkMSwgYm9hcmQyKTtcbiAgICAgICAgZGlhbG9nID0gYnVpbGREaWFsb2coKTtcbiAgICAgICAgYm9keS5hcHBlbmQoZGlhbG9nKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYnVpbGRIZWFkZXIgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJ1aSBjb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHR1cm5UZXh0ID0gY3JlYXRlRWxlbWVudChcImgxXCIsIFwidHVybiB0ZXh0XCIpO1xuICAgICAgICB0dXJuVGV4dC50ZXh0Q29udGVudCA9IFwiJ3MgVHVyblwiO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHR1cm5UZXh0KTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBidWlsZEJvYXJkQW5kSGVhZGVyID0gZnVuY3Rpb24ocGxheWVyTnVtYmVyLCBwbGF5ZXJOYW1lKXtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsYGJvYXJkIGNvbnRhaW5lcmApO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8MTA7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsYHJvdy0ke2l9YCk7XG4gICAgICAgICAgICByb3cuc2V0QXR0cmlidXRlKFwicm93XCIsIGkpO1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPDEwOyBqKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImNvbFwiLCBqKTtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kKHNxdWFyZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2FyZC5hcHBlbmQocm93KTtcbiAgICAgICAgfVxuICAgICAgICBib2FyZC5zZXRBdHRyaWJ1dGUoXCJwbGF5ZXJudW1cIiwgcGxheWVyTnVtYmVyKTtcbiAgICAgICAgY29uc3QgYm9hcmRBbmRIZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsYGJvYXJkLWFuZC1oZWFkZXIgY29udGFpbmVyIHBsYXllci0ke3BsYXllck51bWJlcn1gKTtcbiAgICAgICAgY29uc3QgYm9hcmRIZWFkZXJUZXh0PSBjcmVhdGVFbGVtZW50KFwiaDJcIiwgXCJib2FyZCBoZWFkZXJcIik7XG4gICAgICAgIGJvYXJkSGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWV9J3MgQm9hcmRgO1xuICAgICAgICBib2FyZEFuZEhlYWRlci5hcHBlbmQoYm9hcmRIZWFkZXJUZXh0LCBib2FyZCk7XG4gICAgICAgIHJldHVybiBib2FyZEFuZEhlYWRlcjtcbiAgICB9XG5cbiAgICBjb25zdCBidWlsZERpYWxvZyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gICAgICAgIGNvbnN0IGRpYWxvZ0hlYWRlciA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBcImRpYWxvZyBoZWFkZXJcIik7XG4gICAgICAgIGRpYWxvZ0hlYWRlci50ZXh0Q29udGVudCA9IFwiU3dpdGNoIFBsYXllcnMhXCJcbiAgICAgICAgY29uc3QgZGlhbG9nU3VidGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiZGlhbG9nIHN1YnRleHRcIik7XG4gICAgICAgIGRpYWxvZ1N1YnRleHQudGV4dENvbnRlbnQgPSBcIihjbGljayB3aGVuIHJlYWR5KVwiO1xuICAgICAgICBkaWFsb2cuYXBwZW5kKGRpYWxvZ0hlYWRlciwgZGlhbG9nU3VidGV4dCk7XG4gICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICBkaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge2RpYWxvZy5jbG9zZSgpfSk7XG4gICAgICAgIHJldHVybiBkaWFsb2c7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyTmV3U2hpcCA9IGZ1bmN0aW9uKHBsYXllck51bWJlciwuLi5jb29yZHMpe1xuICAgICAgICBsZXQgYm9hcmQ7XG4gICAgICAgIGlmIChwbGF5ZXJOdW1iZXIgPT0xKXtcbiAgICAgICAgICAgIGJvYXJkID0gYm9hcmQxO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBib2FyZCA9IGJvYXJkMjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBbeCx5XSBvZiBjb29yZHMpe1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlVG9DaGFuZ2UgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGBkaXYucm93LSR7eH0gPiBkaXY6bnRoLWNoaWxkKCR7eSsxfSlgKTtcbiAgICAgICAgICAgIHNxdWFyZVRvQ2hhbmdlLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJBdHRhY2tlZCA9IGZ1bmN0aW9uKHNxdWFyZURPTU5vZGUpe1xuICAgICAgICBzcXVhcmVET01Ob2RlLmNsYXNzTGlzdC5hZGQoXCJhdHRhY2tlZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJUdXJuU3dpdGNoVG8gPSBmdW5jdGlvbihwbGF5ZXJOdW1iZXIsIHBsYXllck5hbWUpe1xuICAgICAgICAvLyBhZGQgc2NyZWVuIHN3YXBwaW5nIG92ZXJsYXlcbiAgICAgICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuICAgICAgICAvLyBwbGF5ZXJOdW1iZXIgaXMgbnVtYmVyIG9mIHBsYXllciB3aG9zZSB0dXJuIGl0IHNob3VsZCBzd2l0Y2ggVE9cbiAgICAgICAgLy8gY2hhbmdlIGhlYWRlciB0byBcIkl0IGlzIHBsYXllcnN7cGxheWVyTnVtYmVyfS5uYW1lJ3MgdHVyblwiXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudWkuY29udGFpbmVyIC50dXJuLnRleHRcIik7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWV9J3MgVHVybmA7XG4gICAgICAgIC8vIGNoYW5nZSBib2FyZCBoZWFkZXIgZnJvbSBcIllvdXIgQm9hcmRcIiB0byBcIkVuZW15IEJvYXJkXCIgYW5kIHZpcyB2ZXJzYVxuICAgICAgICBjb25zdCBib2FyZDFIZWFkZXIgPSBib2FyZDEucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XG4gICAgICAgIGNvbnN0IGJvYXJkMkhlYWRlciA9IGJvYXJkMi5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcbiAgICAgICAgaWYgKHBsYXllck51bWJlciA9PSAxKXtcbiAgICAgICAgICAgIGJvYXJkMkhlYWRlci50ZXh0Q29udGVudCA9IFwiRW5lbXkgQm9hcmRcIjtcbiAgICAgICAgICAgIGJvYXJkMUhlYWRlci50ZXh0Q29udGVudCA9IFwiWW91ciBCb2FyZFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9hcmQxSGVhZGVyLnRleHRDb250ZW50ID0gXCJFbmVteSBCb2FyZFwiO1xuICAgICAgICAgICAgYm9hcmQySGVhZGVyLnRleHRDb250ZW50ID0gXCJZb3VyIEJvYXJkXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaGlkZSBzaGlwcyBmcm9tIGVuZW15IGJvYXJkIGFuZCByZXZlYWwgc2hpcHMgb24geW91ciBib2FyZFxuICAgICAgICBib2FyZDEubGFzdENoaWxkLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xuICAgICAgICBib2FyZDIubGFzdENoaWxkLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xuICAgIH1cblxuICAgIC8vIHJlbmRlciBlbmRpbmcgZ2FtZSAocGxheWVyTmFtZSBoYXMgd29uKVxuICAgIGNvbnN0IHJlbmRlckVuZEdhbWUgPSBmdW5jdGlvbih3aW5uZXJOYW1lKXtcbiAgICAgICAgY29uc3Qgd2lubmVyVGV4dENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJlbmQgY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCB3aW5uZXJUZXh0ID0gY3JlYXRlRWxlbWVudChcImgxXCIsIFwid2lubmVyIHRleHRcIik7XG4gICAgICAgIHdpbm5lclRleHQudGV4dENvbnRlbnQgPSBgQ29uZ3JhdHMhICR7d2lubmVyTmFtZX0gd29uLmA7O1xuICAgICAgICBjb25zdCBwbGF5QWdhaW5CdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwicmVzZXQgYnV0dG9uXCIpO1xuICAgICAgICBwbGF5QWdhaW5CdXR0b24udGV4dENvbnRlbnQgPSBcIlBsYXkgQWdhaW4/XCI7XG4gICAgICAgIHdpbm5lclRleHRDb250YWluZXIuYXBwZW5kKHdpbm5lclRleHQsIHBsYXlBZ2FpbkJ1dHRvbik7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgYm9keS5hcHBlbmQod2lubmVyVGV4dENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyU3RhZ2luZyA9IGZ1bmN0aW9uKGF0dGFja01hcDEsIHNoaXBNYXAxLCBhdHRhY2tNYXAyLCBzaGlwTWFwMil7XG4gICAgICAgIHJlbmRlckJvYXJkUmVzZXQoYXR0YWNrTWFwMSwgc2hpcE1hcDEsIGJvYXJkMSk7XG4gICAgICAgIHJlbmRlckJvYXJkUmVzZXQoYXR0YWNrTWFwMiwgc2hpcE1hcDIsIGJvYXJkMik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyQm9hcmRSZXNldCA9IGZ1bmN0aW9uKGF0dGFja01hcCwgc2hpcE1hcCwgYm9hcmRET00pe1xuICAgICAgICBjb25zdCBib2FyZCA9IGJvYXJkRE9NLnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQuY29udGFpbmVyXCIpO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8YXR0YWNrTWFwLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGk7XG4gICAgICAgICAgICBjb25zdCBhdHRhY2tlZEluUm93ID0gT2JqZWN0LmtleXMoYXR0YWNrTWFwW2ldKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBJblJvdyA9IE9iamVjdC5rZXlzKHNoaXBNYXBbaV0pO1xuICAgICAgICAgICAgZm9yIChsZXQgYXR0YWNrZWQgb2YgYXR0YWNrZWRJblJvdyl7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sID0gTnVtYmVyKGF0dGFja2VkKSsxO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdlRvVW5hdHRhY2sgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGBkaXYucm93LSR7cm93fSBkaXY6bnRoLWNoaWxkKCR7Y29sfSlgKTtcbiAgICAgICAgICAgICAgICBkaXZUb1VuYXR0YWNrLmNsYXNzTGlzdC5yZW1vdmUoXCJhdHRhY2tlZFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgc2hpcCBvZiBzaGlwSW5Sb3cpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IE51bWJlcihzaGlwKSsxO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdlRvVW5zaGlwID0gYm9hcmQucXVlcnlTZWxlY3RvcihgZGl2LnJvdy0ke3Jvd30gZGl2Om50aC1jaGlsZCgke2NvbH0pYCk7XG4gICAgICAgICAgICAgICAgZGl2VG9VbnNoaXAuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclNoaXBzT2ZmQm9hcmQgPSBmdW5jdGlvbihib2FyZERPTSl7XG4gICAgICAgIGNvbnN0IHNoaXBIb2xkZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2hpcCBob2xkZXJcIik7XG4gICAgICAgIGNvbnN0IHNoaXAyID0gYnVpbGRTaGlwT2ZMZW5ndGgoMiwxKTtcbiAgICAgICAgY29uc3Qgc2hpcDMgPSBidWlsZFNoaXBPZkxlbmd0aCgzLDIpO1xuICAgICAgICBjb25zdCBzaGlwM18yID0gYnVpbGRTaGlwT2ZMZW5ndGgoMywzKTtcbiAgICAgICAgY29uc3Qgc2hpcDQgPSBidWlsZFNoaXBPZkxlbmd0aCg0LDQpO1xuICAgICAgICBjb25zdCBzaGlwNSA9IGJ1aWxkU2hpcE9mTGVuZ3RoKDUsNSk7XG4gICAgICAgIHNoaXBIb2xkZXIuYXBwZW5kKHNoaXAyLHNoaXAzLCBzaGlwM18yLCBzaGlwNCwgc2hpcDUpO1xuICAgICAgICBib2FyZERPTS5hZnRlcihzaGlwSG9sZGVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBidWlsZFNoaXBPZkxlbmd0aCA9IGZ1bmN0aW9uKGxlbmd0aCwgaWQpe1xuICAgICAgICBjb25zdCBzaGlwQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInNoaXAgY29udGFpbmVyXCIpO1xuICAgICAgICBzaGlwQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImhvcml6b250YWxcIiwgdHJ1ZSk7XG4gICAgICAgIHNoaXBDb250YWluZXIuc2V0QXR0cmlidXRlKFwibGVuZ3RoXCIsIGxlbmd0aCk7XG4gICAgICAgIHNoaXBDb250YWluZXIuaWQgPSBpZDtcbiAgICAgICAgZm9yIChsZXQgaSA9MDsgaSA8bGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJwYXJ0XCIsaSk7XG4gICAgICAgICAgICBzaGlwQ29udGFpbmVyLmFwcGVuZChkaXYpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaGlwQ29udGFpbmVyO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50VHlwZSwgY2xhc3NTdHJpbmcgPSB1bmRlZmluZWQpe1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICAgICAgICBpZiAoY2xhc3NTdHJpbmcgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc1N0cmluZy5zcGxpdChcIiBcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybntcbiAgICAgICAgaW5pdEdhbWVSZW5kZXIsXG4gICAgICAgIHJlbmRlck5ld1NoaXAsXG4gICAgICAgIHJlbmRlckF0dGFja2VkLFxuICAgICAgICByZW5kZXJUdXJuU3dpdGNoVG8sXG4gICAgICAgIHJlbmRlckVuZEdhbWUsXG4gICAgICAgIHJlbmRlclN0YWdpbmcsXG4gICAgICAgIHJlbmRlclNoaXBzT2ZmQm9hcmQsXG4gICAgfVxuXG59KCk7XG5cbmV4cG9ydCB7UmVuZGVyTWFuYWdlcn07IiwiY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoKXtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgfVxuXG4gICAgaGl0KCl7XG4gICAgICAgIHRoaXMuaGl0cysrO1xuICAgIH1cblxuICAgIGlzU3Vuaygpe1xuICAgICAgICByZXR1cm4gKHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aClcbiAgICB9XG59XG5cbmV4cG9ydCB7U2hpcH07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gbW9kdWxlIHRvIG1hbmFnZSBnYW1lIHVzaW5nIGV2ZW50IGxpc3RlbmVycyB0byBpbnRlcmFjdCB3aXRoIG9iamVjdHNcbi8vIGNhbGxzIG1ldGhvZHMgaW4gcmVuZGVyLmpzIHRvIGNoYW5nZSBET01cbi8vIHJlYWxpc3RpY2FsbHkgZG9lcyBub3QgZXhwb3J0IGFueXRoaW5nIHNpbmNlIGl0IGlzIGEgZHJpdmVyXG5cbmltcG9ydCB7aHVtYW5QbGF5ZXIsIGNvbXB1dGVyUGxheWVyfSBmcm9tIFwiLi9wbGF5ZXIuanNcIlxuaW1wb3J0IHtSZW5kZXJNYW5hZ2VyfSBmcm9tIFwiLi9yZW5kZXIuanNcIlxuXG5jb25zdCBHYW1lTWFuYWdlciA9IGZ1bmN0aW9uKCl7XG5cbiAgICBjb25zdCBhZGROZXdTaGlwID0gZnVuY3Rpb24ocGxheWVyLCAuLi5jb29yZHMpe1xuICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLm5ld1NoaXAoLi4uY29vcmRzKTtcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJOZXdTaGlwKHBsYXllci5udW1iZXIsLi4uY29vcmRzKTtcbiAgICB9XG5cbiAgICAvLyBwYXNzZXMgdHVybiB0byBwbGF5ZXIgMSBpZiBudW1iZXIgPSAxXG4gICAgLy8gaWYgaXQgaXMgcGxheWVyIDEncyB0dXJuLCB0aGVuIGJvYXJkIDIgc2hvdWxkIGJlIEFDVElWRVxuICAgIGNvbnN0IHBhc3NUdXJuVG8gPSBmdW5jdGlvbihwbGF5ZXJOdW1iZXIpe1xuICAgICAgICBpZiAocGxheWVyTnVtYmVyID09IDEpe1xuICAgICAgICAgICAgYWN0aXZhdGVFdmVudExpc3RlbmVyKHBsYXllcnMucGxheWVyMi5ib2FyZERPTSk7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGFjdGl2YXRlRXZlbnRMaXN0ZW5lcihwbGF5ZXJzLnBsYXllcjEuYm9hcmRET00pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBsYXllck5hbWUgPSBPYmplY3QudmFsdWVzKHBsYXllcnMpW3BsYXllck51bWJlci0xXS5uYW1lO1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtwbGF5ZXJOYW1lfSdzIFR1cm5gKTtcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJUdXJuU3dpdGNoVG8ocGxheWVyTnVtYmVyLCBwbGF5ZXJOYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihib2FyZERPTU5vZGUpe1xuICAgICAgICBib2FyZERPTU5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUJvYXJkQ2xpY2spO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUJvYXJkQ2xpY2sgPSBhc3luYyBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGxldCBwbGF5ZXJOdW1iZXIgPSB0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcInBsYXllcm51bVwiKTtcbiAgICAgICAgbGV0IHkgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiY29sXCIpO1xuICAgICAgICBsZXQgeCA9IHRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcInJvd1wiKTtcbiAgICAgICAgbGV0IHBsYXllck9iamVjdCA9IHBsYXllck51bWJlciA9PSAxID8gcGxheWVycy5wbGF5ZXIxIDogcGxheWVycy5wbGF5ZXIyO1xuICAgICAgICBwbGF5ZXJPYmplY3QuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW3gseV0pO1xuICAgICAgICBjb25zb2xlLmxvZyhgUmVjZWl2ZWQgYXR0YWNrIGF0ICgke3h9LCR7eX0pIGZvciBwbGF5ZXIgJHtwbGF5ZXJOdW1iZXJ9YCk7XG4gICAgICAgIFJlbmRlck1hbmFnZXIucmVuZGVyQXR0YWNrZWQodGFyZ2V0KTtcbiAgICAgICAgcGxheWVyT2JqZWN0LmJvYXJkRE9NLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVCb2FyZENsaWNrKTtcbiAgICAgICAgYXdhaXQgc2hvcnRTbGVlcCgpO1xuICAgICAgICBpZiAocGxheWVyT2JqZWN0LmdhbWVib2FyZC5pc0FsbFN1bmsoKSl7XG4gICAgICAgICAgICBlbmRHYW1lKHBsYXllck51bWJlcik7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHBhc3NUdXJuVG8ocGxheWVyTnVtYmVyKTsgLy8gV2UgcGFzcyB0dXJuIHRvIHBsYXllcidzIGJvYXJkIHdlIGp1c3QgY2xpY2tlZFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdFBsYXkgPSBmdW5jdGlvbigpe1xuICAgICAgICAvLyBhc3NpZ24gZXZlbnQgbGlzdGVuZXIgZm9yIGF0dGFja3NcbiAgICAgICAgY29uc3QgYm9hcmQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC1hbmQtaGVhZGVyLnBsYXllci0xIC5ib2FyZC5jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGJvYXJkMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtYW5kLWhlYWRlci5wbGF5ZXItMiAuYm9hcmQuY29udGFpbmVyXCIpO1xuICAgICAgICBwbGF5ZXJzLnBsYXllcjEuYm9hcmRET00gPSBib2FyZDE7XG4gICAgICAgIHBsYXllcnMucGxheWVyMi5ib2FyZERPTSA9IGJvYXJkMjtcbiAgICAgICAgLy8gbGF0ZXIgbWFrZSBmaXJzdCB0dXJuIHJhbmRvbSBvciBjaG9zZW5cbiAgICAgICAgYm9hcmQyLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgICAgICBwYXNzVHVyblRvKDEpO1xuICAgICAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGlhbG9nXCIpO1xuICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG5cbiAgICBsZXQgcGxheWVycztcbiAgICBjb25zdCBpbml0R2FtZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IHBsYXllcjEgPSBuZXcgaHVtYW5QbGF5ZXIoXCJBbXlcIiwgMSk7XG4gICAgICAgIGNvbnN0IHBsYXllcjIgPSBuZXcgaHVtYW5QbGF5ZXIoXCJCYXJ0XCIsIDIpO1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLmluaXRHYW1lUmVuZGVyKHBsYXllcjEsIHBsYXllcjIpO1xuICAgICAgICAvLyBlYWNoIHBsYXllciBoYXMgNSBzaGlwcyBvZiBzaXplIDIsIDMsIDMsIDQsIDVcbiAgICAgICAgLy8gZW50ZXJHYW1lU3RhZ2luZygpO1xuICAgICAgICBhZGROZXdTaGlwKHBsYXllcjEsWzAsMF0sWzAsMV0pXG4gICAgICAgIGFkZE5ld1NoaXAocGxheWVyMSxbMywzXSxbNCwzXSxbNSwzXSk7XG4gICAgICAgIGFkZE5ld1NoaXAocGxheWVyMSxbNyw2XSxbOCw2XSxbOSw2XSk7XG4gICAgICAgIGFkZE5ld1NoaXAocGxheWVyMSxbMCwzXSwgWzAsNF0sWzAsNV0sWzAsNl0pO1xuICAgICAgICBhZGROZXdTaGlwKHBsYXllcjEsWzUsNV0sIFs2LDVdLFs3LDVdLFs4LDVdLFs5LDVdKTtcbiAgICAgICAgYWRkTmV3U2hpcChwbGF5ZXIyLFs3LDddLFs3LDhdKTtcbiAgICAgICAgYWRkTmV3U2hpcChwbGF5ZXIyLFszLDNdLFs0LDNdLFs1LDNdKTtcbiAgICAgICAgYWRkTmV3U2hpcChwbGF5ZXIyLFs3LDZdLFs4LDZdLFs5LDZdKTtcbiAgICAgICAgYWRkTmV3U2hpcChwbGF5ZXIyLFswLDNdLCBbMCw0XSxbMCw1XSxbMCw2XSk7XG4gICAgICAgIGFkZE5ld1NoaXAocGxheWVyMixbNSw1XSwgWzYsNV0sWzcsNV0sWzgsNV0sWzksNV0pO1xuICAgICAgICBwbGF5ZXJzID0ge3BsYXllcjEsIHBsYXllcjJ9O1xuICAgICAgICBpbml0UGxheSgpO1xuICAgICAgICAvL2p1c3QgZm9yIHRlc3RpbmchXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudWkuY29udGFpbmVyXCIpO1xuICAgICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGVuZEdhbWUoMSkpXG4gICAgfSgpO1xuXG4gICAgLy8gcGxheWVyIHdpdGggcGxheWVyTnVtYmVyIGxvc3RcbiAgICBjb25zdCBlbmRHYW1lID0gZnVuY3Rpb24ocGxheWVyTnVtYmVyKXtcbiAgICAgICAgbGV0IHdpbm5lck5hbWU7XG4gICAgICAgIGlmIChwbGF5ZXJOdW1iZXIgPT0xKXtcbiAgICAgICAgICAgIHdpbm5lck5hbWUgPSBwbGF5ZXJzLnBsYXllcjIubmFtZTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgd2lubmVyTmFtZSA9IHBsYXllcnMucGxheWVyMS5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIFJlbmRlck1hbmFnZXIucmVuZGVyRW5kR2FtZSh3aW5uZXJOYW1lKTtcbiAgICAgICAgYWN0aXZhdGVSZXBsYXlCdXR0b24oKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZVJlcGxheUJ1dHRvbiA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IHJlcGxheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuZW5kLmNvbnRhaW5lciBidXR0b25cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcGxheUJ1dHRvbik7XG4gICAgICAgIHJlcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZW50ZXJHYW1lU3RhZ2luZyk7XG4gICAgfVxuXG4gICAgY29uc3QgZW50ZXJHYW1lU3RhZ2luZyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIGFjdGl2YXRlIGRyYWcgYW5kIGRyb3Agb2Ygc2hpcHMgdG8gY2hvb3NlIHNoaXAgbG9jYXRpb24gdXNpbmcgSFRNTCBkcmFnIGFuZCBkcm9wIEFQSSFcbiAgICAgICAgY29uc29sZS5sb2coXCJFbnRlcmluZyBuZXcgZ2FtZSBzdGFnaW5nIVwiKVxuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlclN0YWdpbmcoXG4gICAgICAgICAgICBwbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLmdldEF0dGFja01hcCgpLFxuICAgICAgICAgICAgcGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5nZXRCb2FyZE1hcCgpLFxuICAgICAgICAgICAgcGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5nZXRBdHRhY2tNYXAoKSxcbiAgICAgICAgICAgIHBsYXllcnMucGxheWVyMi5nYW1lYm9hcmQuZ2V0Qm9hcmRNYXAoKVxuICAgICAgICApO1xuICAgICAgICBwbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgICAgICAgcGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5yZXNldEJvYXJkKCk7XG4gICAgICAgIGNvbnN0IGJvYXJkMSA9IHBsYXllcnMucGxheWVyMS5ib2FyZERPTTtcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJTaGlwc09mZkJvYXJkKGJvYXJkMSk7XG4gICAgICAgIGFjdGl2YXRlRHJhZ0hhbmRsZXJBbmRFbmRIYW5kbGVyKGJvYXJkMSk7XG4gICAgICAgICAgICAvLyBzaG91bGQgaG9sZCBpbmZvIGFib3V0IHdoaWNoIHNxdWFyZSBpdCBpcyBob2xkaW5nIG9udG8gKGFuZCBtYXliZSByb3RhdGlvbj8pXG4gICAgICAgIGFjdGl2YXRlQWxsT25kcmFnb3Zlck9uRHJvcChib2FyZDEpO1xuICAgICAgICAvLyBhY3RpdmF0ZURyb3BFdmVudChib2FyZDEpO1xuICAgICAgICAgICAgLy8gc2hvdWxkIGFsbG93IGRyYWdvdmVyIGRpdnNcbiAgICAgICAgICAgIC8vIG9uIGRyb3AsIGZpcnN0IHJlbmRlciBvdmVybGFwcyBhcyByZWQhXG4gICAgICAgICAgICAvLyBhbmQgb24gZHJvcCBzaG91bGQgY2FsY3VsYXRlIHdoaWNoIHNxdWFyZSBpdCBpcyBkcm9wcGVkIGF0IGFuZCBpbmZvIHBhc3NlZCB0byBmcm9tIGRyYWcgaGFuZGxlciB0byBzdG9yZSBjb29yZGluYXRlcyBpbiBnYW1lYm9hcmRcbiAgICAgICAgLy8gYnJlYWsgc2NyZWVuXG4gICAgICAgICAgICAvLyBvbmx5IGFsbG93IGlmIHBvc2l0aW9ucyBhcmUgdmFsaWQgYW5kIGFsbCBmaWxsZWRcbiAgICAgICAgLy8gcmVwZWF0IGZvciBib2FyZCAyXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVEcmFnSGFuZGxlckFuZEVuZEhhbmRsZXIgPSBmdW5jdGlvbihib2FyZERPTSl7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gYm9hcmRET00ucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXAuaG9sZGVyIC5jb250YWluZXIgLnNoaXBcIik7XG4gICAgICAgIGZvciAobGV0IHNoaXBQYXJ0IG9mIHNoaXBzKXtcbiAgICAgICAgICAgIHNoaXBQYXJ0LnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgIHNoaXBQYXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKGV2ZW50KSA9PiBkcmFnc3RhcnRIYW5kbGVyKGV2ZW50KSk7XG4gICAgICAgICAgICBzaGlwUGFydC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCAoZXZlbnQpID0+IHRvZ2dsZU9uZHJhZ292ZXJCb2FyZChib2FyZERPTSwgZXZlbnQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRhcmdldCBpcyBkaXYuc2hpcC5jb250YWluZXIgPiBkaXZcbiAgICBjb25zdCBkcmFnc3RhcnRIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImRyYWcgZXZlbnQgdHJpZ2dlcmVkXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInNoaXBMZW5ndGhcIiwgY29udGFpbmVyLmdldEF0dHJpYnV0ZShcImxlbmd0aFwiKSk7XG4gICAgICAgIGNvbnN0IGdyYWJMb2NhdGlvbiA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJwYXJ0XCIpXG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiZ3JhYkxvY2F0aW9uXCIsIGdyYWJMb2NhdGlvbik7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiaG9yaXpvbnRhbFwiLCBjb250YWluZXIuZ2V0QXR0cmlidXRlKFwiaG9yaXpvbnRhbFwiKSk7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwic2hpcElkXCIsIGNvbnRhaW5lci5pZCk7XG4gICAgICAgIGNvbnN0IHdpZHRoT2ZEaXYgPSAyMDtcbiAgICAgICAgY29uc3Qgd2lkdGhPZkdhcCA9IDE7XG4gICAgICAgIC8vIGlmIGdyYWJsb2NhdGlvbiA9IDAsIGRvbid0IGFkZCBhbnl0aGluZ1xuICAgICAgICAvLyBpZiBncmFibG9jYXRpb24gPSAxLCBhZGQgMSBnYXAgYW5kIDEgZGl2XG4gICAgICAgIC8vIGlmIGdyYWJsb2NhdGlvbiA9IDIsIGFkZCAyIGdhcHMgYW5kIDIgZGl2c1xuICAgICAgICBjb25zdCBhZGRPZmZzZXRYID0gKGdyYWJMb2NhdGlvbiAqICh3aWR0aE9mRGl2K3dpZHRoT2ZHYXApKTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZShjb250YWluZXIsZXZlbnQub2Zmc2V0WCArIGFkZE9mZnNldFgsZXZlbnQub2Zmc2V0WSk7XG4gICAgICAgIC8vIGR5bmFtaWNhbGx5IGFsbG93IHdoZXJlIHdlIGNhbiBkcm9wIHdpdGggb25kcmFnb3ZlciBhdHRyaWJ1dGVcbiAgICAgICAgY29uc3QgcGxheWVyTnVtYmVyID0gY29udGFpbmVyLnBhcmVudE5vZGUucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoXCJwbGF5ZXJudW1cIik7XG4gICAgICAgIGxldCBib2FyZERPTU5vZGU7XG4gICAgICAgIGlmIChwbGF5ZXJOdW1iZXIgPT0gMSl7XG4gICAgICAgICAgICBib2FyZERPTU5vZGUgPSBwbGF5ZXJzLnBsYXllcjEuYm9hcmRET007XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyTnVtYmVyID09IDIpe1xuICAgICAgICAgICAgYm9hcmRET01Ob2RlID0gcGxheWVycy5wbGF5ZXIyLmJvYXJkRE9NO1xuICAgICAgICB9XG4gICAgICAgIHRvZ2dsZU9uZHJhZ292ZXJCb2FyZChib2FyZERPTU5vZGUsIGV2ZW50LCB0cnVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZUFsbE9uZHJhZ292ZXJPbkRyb3AgPSBmdW5jdGlvbihib2FyZERPTSl7XG4gICAgICAgIGZvciAobGV0IHJvdyBvZiBib2FyZERPTS5jaGlsZE5vZGVzKXtcbiAgICAgICAgICAgIGZvciAobGV0IHNxdWFyZSBvZiByb3cuY2hpbGROb2Rlcyl7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBvbmRyYWdvdmVySGFuZGxlcilcbiAgICAgICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZHJvcEhhbmRsZXIpXG4gICAgICAgICAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRyYWdMaXN0ZW5pbmdcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVPbmRyYWdvdmVyQm9hcmQgPSBmdW5jdGlvbihib2FyZERPTSwgZXZlbnQsIGlzRGF0YVRyYW5zZmVyZWQgPSBmYWxzZSl7XG4gICAgICAgIGxldCBpc0hvcml6b250YWw7XG4gICAgICAgIGxldCBncmFiTG9jYXRpb247XG4gICAgICAgIGxldCBzaGlwTGVuZ3RoO1xuICAgICAgICBpZiAoaXNEYXRhVHJhbnNmZXJlZCl7XG4gICAgICAgICAgICBpc0hvcml6b250YWwgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImhvcml6b250YWxcIik7XG4gICAgICAgICAgICBncmFiTG9jYXRpb24gPSBOdW1iZXIoZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJncmFiTG9jYXRpb25cIikpO1xuICAgICAgICAgICAgc2hpcExlbmd0aCA9IE51bWJlcihldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInNoaXBMZW5ndGhcIikpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGlzSG9yaXpvbnRhbCA9IGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoXCJob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgZ3JhYkxvY2F0aW9uID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcInBhcnRcIik7XG4gICAgICAgICAgICBzaGlwTGVuZ3RoID0gY29udGFpbmVyLmdldEF0dHJpYnV0ZShcImxlbmd0aFwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgdG9nZ2xlT25kcmFnb3ZlciBjYWxsZWQgZm9yIGxlbmd0aCAke3NoaXBMZW5ndGh9IGFuZCBncmFiIGxvY2F0aW9uICR7Z3JhYkxvY2F0aW9ufWApXG4gICAgICAgIGNvbnN0IHJvd3MgPSBib2FyZERPTS5jaGlsZE5vZGVzO1xuICAgICAgICBpZiAoaXNIb3Jpem9udGFsID09IFwidHJ1ZVwiKXtcbiAgICAgICAgICAgIC8vIGlmIHNoaXBMZW5ndGggaXMgMywgYW5kIGdyYWIgbG9jYXRpb24gaXMgMSAodGhlIG1pZGRsZSBvZiBzaGlwKVxuICAgICAgICAgICAgLy8gcHJldmVudCBkcm9wcGluZyBvbiBjb2wgMCBbbGVzcyB0aGFuIDFdIGFuZCBjb2wgOSBbbW9yZSB0aGFuIDEwLSgzLTEpXVxuICAgICAgICAgICAgZm9yIChsZXQgcm93IG9mIHJvd3Mpe1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZXMgPSByb3cuY2hpbGROb2RlcztcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0wOyBpPGdyYWJMb2NhdGlvbjsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlT25kcmFnb3ZlcihzcXVhcmVzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9KDEwLXNoaXBMZW5ndGgrZ3JhYkxvY2F0aW9uKzEpOyBqPDEwOyBqKyspe1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVPbmRyYWdvdmVyKHNxdWFyZXNbal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgLy8gaWYgc2hpcCBpcyB2ZXJ0aWNhbCwgZG8gc2FtZSBsaW1pdGluZyBsb2dpYyBvbiB0aGUgcm93cywgbm90IGNvbHVtbnNcbiAgICAgICAgICAgIGZvciAobGV0IGkgPTA7IGk8Z3JhYkxvY2F0aW9uOyBpKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IHJvd3NbaV07XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlcyA9IHJvdy5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHNxdWFyZSBvZiBzcXVhcmVzKXtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlT25kcmFnb3ZlcihzcXVhcmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGogPSgxMC1zaGlwTGVuZ3RoK2dyYWJMb2NhdGlvbik7IGo8MTA7IGorKyl7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gcm93c1tqXTtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmVzID0gcm93LmNoaWxkTm9kZXM7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc3F1YXJlIG9mIHNxdWFyZXMpe1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVPbmRyYWdvdmVyKHNxdWFyZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlT25kcmFnb3ZlciA9IGZ1bmN0aW9uKHNxdWFyZSl7XG4gICAgICAgIGlmIChzcXVhcmUuZ2V0QXR0cmlidXRlKFwiZHJhZ0xpc3RlbmluZ1wiKSA9PSBcInRydWVcIil7XG4gICAgICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIG9uZHJhZ292ZXJIYW5kbGVyKTtcbiAgICAgICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkcmFnTGlzdGVuaW5nXCIsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBvbmRyYWdvdmVySGFuZGxlcik7XG4gICAgICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiZHJhZ0xpc3RlbmluZ1wiLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9uZHJhZ292ZXJIYW5kbGVyID0gZnVuY3Rpb24oZXYpe1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImRyYWdvdmVyIGRldGVjdGVkIVwiKVxuICAgIH1cblxuICAgIC8vIGRhdGFPYmplY3QgaG9sZHMuLi4gc2hpcExlbmd0aCwgZ3JhYkxvY2F0aW9uLCBob3Jpem9udGFsLCBzaGlwSWQ6IGNvbnRhaW5lci5pZCxcbiAgICBjb25zdCBkcm9wSGFuZGxlciA9IGZ1bmN0aW9uKGV2KXtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJkcm9wIGRldGVjdGVkIVwiKVxuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJzaGlwTGVuZ3RoXCIpO1xuICAgICAgICBjb25zdCBob3Jpem9udGFsID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJob3Jpem9udGFsXCIpO1xuICAgICAgICBjb25zdCBzaGlwSWQgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInNoaXBJZFwiKTtcbiAgICAgICAgY29uc3QgZ3JhYkxvY2F0aW9uID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJncmFiTG9jYXRpb25cIik7XG4gICAgICAgIGNvbnN0IGRyb3BwZWRTcXVhcmUgPSBldi50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGRyb3BwZWRSb3cgPSBkcm9wcGVkU3F1YXJlLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IG9sZFNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2hpcC5ob2xkZXIgLmNvbnRhaW5lciAuc2hpcCMke3NoaXBJZH1gKTtcbiAgICAgICAgY29uc3Qgb2xkU2hpcFBhcnRzID0gb2xkU2hpcC5jaGlsZE5vZGVzO1xuICAgICAgICBjb25zdCBkcm9wcGVkQ29sSW5kZXggPSBkcm9wcGVkU3F1YXJlLmdldEF0dHJpYnV0ZShcImNvbFwiKTtcbiAgICAgICAgLy8gZ3JhYiBsb2NhdGlvbiBhbHJlYWR5IGFjY291bnRzIGZvciBzaGlwbGVuZ3RoIG9uIGxlZnQgc2lkZVxuICAgICAgICAvLyBpZiBncmFiTG9jYXRpb24gZ29lcyB1cCwgc3RhcnQgaW5kZXggc2hvdWxkIERFQ1JFQVNFIGFuZCBlbmQgaW5kZXggc2hvdWxkIElOQ1JFQVNFIGZyb20gZHJvcHBlZENvbEluZGV4XG4gICAgICAgIC8vIGlmIHNoaXBMZW5ndGggaXMgNSwgZ3JhYiBwb3NpdGlvbiBpcyAzICg0dGggcGFydCksIGFuZCBkcm9wQ29sSW5kZXggaXMgNyB0aGVuIGZpbGwgc3F1YXJlIGluZGV4ZXMgNCAoNy0zKSw1LDYsNyw4ICg3LTMrNClcbiAgICAgICAgaWYgKGhvcml6b250YWwgPT0gXCJ0cnVlXCIpe1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlc09mUm93ID0gZHJvcHBlZFJvdy5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIHNxdWFyZXNPZlJvd1tkcm9wcGVkQ29sSW5kZXgraS1ncmFiTG9jYXRpb25dLmFwcGVuZENoaWxkKG9sZFNoaXBQYXJ0c1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBhZGQgc3F1YXJlcyB2ZXJ0aWNhbGx5XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzaG9ydFNsZWVwID0gZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSk7XG4gICAgfVxuXG4gICAgcmV0dXJue1xuICAgICAgICBwbGF5ZXJzLFxuICAgIH1cbn0oKTtcblxuZXhwb3J0IHtHYW1lTWFuYWdlcn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=