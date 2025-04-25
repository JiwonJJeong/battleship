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
___CSS_LOADER_EXPORT___.push([module.id, `.game.container{
    display:grid;
    grid-template-rows: 100px 1fr 10px;
    grid-template-columns: 1fr 1fr;

    /* grid area is r / c / r / c */
    .ui.container{
        grid-area: 1 / 1 / 2 / 3;
    }

    .board.container.player-1{
        grid-area: 2 / 1 / 3 / 2;
    }

    .board.container.player-2{
        grid-area: 2 / 2 / 3 / 3;
    }

    .hidden.samples{
        grid-area: 3 / 1 / 4 / 3;
    }
}

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
.hidden.samples{
    > div{
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

    .vertical > div{
        flex-direction: column;
    }
}

/* style dialog */
::backdrop{
    background-color: purple;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,kCAAkC;IAClC,8BAA8B;;IAE9B,+BAA+B;IAC/B;QACI,wBAAwB;IAC5B;;IAEA;QACI,wBAAwB;IAC5B;;IAEA;QACI,wBAAwB;IAC5B;;IAEA;QACI,wBAAwB;IAC5B;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,kBAAkB;IAClB,uBAAuB;;IAEvB;QACI,aAAa;QACb,mBAAmB;QACnB,QAAQ;;QAER;YACI,iBAAiB;YACjB,YAAY;YACZ,qBAAqB;QACzB;;QAEA;YACI,wBAAwB;QAC5B;;QAEA;YACI,qBAAqB;QACzB;IACJ;AACJ;;AAEA;IACI;QACI,sBAAsB;IAC1B;AACJ;;AAEA,yCAAyC;AACzC;IACI;QACI,aAAa;QACb,QAAQ;QACR,sBAAsB;;QAEtB;YACI,uBAAuB;YACvB,kBAAkB;YAClB,aAAa;YACb,mBAAmB;YACnB,QAAQ;;YAER;gBACI,iBAAiB;gBACjB,YAAY;gBACZ,qBAAqB;YACzB;QACJ;IACJ;;IAEA;QACI,sBAAsB;IAC1B;AACJ;;AAEA,iBAAiB;AACjB;IACI,wBAAwB;AAC5B","sourcesContent":[".game.container{\n    display:grid;\n    grid-template-rows: 100px 1fr 10px;\n    grid-template-columns: 1fr 1fr;\n\n    /* grid area is r / c / r / c */\n    .ui.container{\n        grid-area: 1 / 1 / 2 / 3;\n    }\n\n    .board.container.player-1{\n        grid-area: 2 / 1 / 3 / 2;\n    }\n\n    .board.container.player-2{\n        grid-area: 2 / 2 / 3 / 3;\n    }\n\n    .hidden.samples{\n        grid-area: 3 / 1 / 4 / 3;\n    }\n}\n\n.board.container{\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    width: min-content;\n    background-color: black;\n\n    > div{\n        display: flex;\n        flex-direction: row;\n        gap: 1px;\n\n        div{\n            aspect-ratio: 1/1;\n            height: 20px;\n            background-color:gray;\n        }\n\n        .ship.attacked{\n            background-color: purple;\n        }\n\n        .attacked{\n            background-color: red;\n        }\n    }\n}\n\n.board.container.visible{\n    .ship{\n        background-color: aqua;\n    }\n}\n\n/* style ships off board during staging */\n.hidden.samples{\n    > div{\n        display: flex;\n        gap: 3px;\n        flex-direction: column;\n\n        > div{\n            background-color: black;\n            width: min-content;\n            display: flex;\n            flex-direction: row;\n            gap: 1px;\n        \n            div{\n                aspect-ratio: 1/1;\n                height: 20px;\n                background-color:aqua;\n            }\n        }\n    }\n\n    .vertical > div{\n        flex-direction: column;\n    }\n}\n\n/* style dialog */\n::backdrop{\n    background-color: purple;\n}"],"sourceRoot":""}]);
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
          console.log(coords);
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
    attackCount = 0;
  }

  // USES allowed position map created with specific info about ship orientation and length
  const isThisAllowedPlacement = function([r,c]){
    return allowedPositionMap[r][c];
  }

  let allowedPositionMap;
  // uses adjacency map and ship length to show all posible topleft positions for the ship
  // recall that grabLocation starts at 0
  // returns number of trues (allowed spots)
  const createAllowedPositionMap = function(shipObject, isHorizontal, grabLocation){
    const adjacencyMap = createAdjacencyMap();
    allowedPositionMap = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    const length = shipObject.length;
    let trueCount =0;
    if (isHorizontal == "true"){
      for (let r = 0; r<10; r++){
        for (let c=0; c<10; c++){
          if (c> (10-length+grabLocation) || c<grabLocation){
            allowedPositionMap[r][c] = false;
          } else {
            allowedPositionMap[r][c] = isShipFitAdjacency([r,c-grabLocation], shipObject, isHorizontal, adjacencyMap);
            if (allowedPositionMap[r][c] == true){
              trueCount++;
            }
          } 
        }
      }
     } else{
      for (let r = 0; r<10; r++){
        for (let c=0; c<10; c++){
          if (r > (10-length+grabLocation) || r<grabLocation){
              allowedPositionMap[r][c] = false;
          } else {
            allowedPositionMap[r][c] = isShipFitAdjacency([r-grabLocation,c],shipObject, isHorizontal, adjacencyMap);
            if (allowedPositionMap[r][c] == true){
              trueCount++;
            }
          }
        }
      }
    }
    console.log("allowed position map created")
    console.log(allowedPositionMap);
    return trueCount;
  };

  // [r,c] is topleft square of ship
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

  // remember that map is sorted by r, then c.
  const moveShip = function(ship,[startR,startC],length, isHorizontal){
    for (let row=0; row<10; row++){
      const mapRow = boardMap[row];
      for (let col of Object.keys(mapRow)){
        if (mapRow[col] == ship){
          delete boardMap[row][col];
        }
      }
    }
    console.log(boardMap);
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

  // need to randomize 5 ships of length 2,3,3,4,5
  const randomizeBoard = function(){
    try{
      resetBoard();
      const coords1 = getRandomCoords(2);
      newShip(...coords1);
      const coords2 = getRandomCoords(3);
      newShip(...coords2);
      const coords3 = getRandomCoords(3);
      newShip(...coords3);
      const coords4 = getRandomCoords(4);
      newShip(...coords4);
      const coords5 = getRandomCoords(5);
      newShip(...coords5);
      //console.log(boardMap);
      return {coords1,coords2,coords3,coords4,coords5};
    } catch{
      return randomizeBoard();
    }
  }

  const getRandomCoords = function(length){
    const isHorizontal = randomizeIsHorizontal();
    const ship = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(length);
    let trueCount = createAllowedPositionMap(ship, isHorizontal, 0);
    // catch when there is no allowed positions
    if (trueCount == 0){
      return new Error("Must rerandomize due to unlucky setup");
    }
    // rngCount ranges from 0 to trueCount-1;
    let rngCount = Math.floor(Math.random()*trueCount);
    //console.log(rngCount, trueCount);
    let r=-1;
    let c=9;
    while (rngCount>=0){
      if (c==9){
        r++;
        c=0;
      } else{
        c++;
      }
      if (isThisAllowedPlacement([r,c]) == true){
        rngCount--;
      }
      //console.log(r, c, rngCount);
    }
    let coords = [];
    if (isHorizontal == "true"){
      for (;length>0; length--){
        coords.push([r,c]);
        c++;
      }
    } else{
      for (;length>0; length--){
        coords.push([r,c]);
        r++;
      }
    }
    console.log(`Generated allowed random coords ${coords}`);
    return (coords);
  }

  const randomizeIsHorizontal = function(){
    const rng = Math.random()*2;
    if (rng < 1){
      return "true";
    } else {
      return "false";
    }
  }

  // start of code for guessing educated attack for computer player //
  let previousAttack = {};
  const makeRandomAttack = function(otherPlayer){
    const randomIndex = Math.floor(Math.random()* (99-attackCount));
    previousAttack.coords = getNthOpenAttackMap(otherPlayer, randomIndex);
    //console.log(previousAttack.coords);
    previousAttack.hit = otherPlayer.gameboard.receiveAttack(previousAttack.coords);
  }

  let attackCount = 0;
  const makeEducatedAttack = function(otherPlayer){
    if (typeof previousAttack.prevSuccessCoords !== "undefined"){
      const [r,c]= previousAttack.prevSuccessCoords;
      console.log(r,c);
      const otherAttackMap = otherPlayer.gameboard.getAttackMap();
      if (isOnBoardAndNotAttacked([r-1,c],otherAttackMap)){
        previousAttack.coords = [r-1,c];
        previousAttack.hit = otherPlayer.gameboard.receiveAttack([r-1,c]);
      } else if (isOnBoardAndNotAttacked([r+1,c],otherAttackMap)){
        previousAttack.coords = [r+1,c];
        previousAttack.hit = otherPlayer.gameboard.receiveAttack([r+1,c]);
      } else if (isOnBoardAndNotAttacked([r,c-1],otherAttackMap)){
        previousAttack.coords = [r,c-1];
        previousAttack.hit = otherPlayer.gameboard.receiveAttack([r,c-1]);
      } else if (isOnBoardAndNotAttacked([r,c+1],otherAttackMap)){
        previousAttack.coords = [r,c+1];
        previousAttack.hit = otherPlayer.gameboard.receiveAttack([r,c+1]);
      } else {
        makeRandomAttack(otherPlayer);
      }
    } else{
      makeRandomAttack(otherPlayer);
    }
    if (previousAttack.hit == "hit"){
      previousAttack.prevSuccessCoords = previousAttack.coords;
    }
    console.log(`Received attack at ${previousAttack.coords} for player 1 by computer`)
    attackCount++;
    return previousAttack.coords;
  }

  const getNthOpenAttackMap = function(otherPlayer, index){
    const otherAttackMap = otherPlayer.gameboard.getAttackMap();
    let count = index;
    for (let row of otherAttackMap){
      for (let c=0; c<10; c++){
        const colValue = row[c];
        //console.log(colValue);
        if (typeof colValue == "undefined"){
          count--;
          if (count <0){
            const r = otherAttackMap.indexOf(row);
            return [r,c];
          }
        }
      }
    }
    //console.log(count)
    throw new Error("get Nth open attack map failed");
  }

  const isOnBoardAndNotAttacked = function([r,c], attackMap){
    return (r<9 && r>0 && c<9 && c>0 && typeof attackMap[r][c] == "undefined");
  }
  // end of code related to making computer educated attack

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
    randomizeBoard,
    makeEducatedAttack,
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
        const gameContainer = createElement("div", "game container");
        body.append(gameContainer);
        const header = buildHeader();
        board1 = buildBoardAndHeader(player1Object.number, player1Object.name);
        board2 = buildBoardAndHeader(player2Object.number, player2Object.name);
        gameContainer.append(header, board1, board2);
        dialog = buildDialog();
        gameContainer.append(dialog);
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

    const revealDialogWithText = function(string = ""){
        const dialogHeader = dialog.firstChild;
        if (string != ""){
            dialogHeader.textContent = string;
        } else {
            dialogHeader.textContent = "Switch Players!"
        }
        // add screen swapping overlay
        dialog.showModal();
    }

    const renderTurnSwitchTo = function(playerNumber, playerName){
        revealDialogWithText(`${playerName}'s Turn`);
        // playerNumber is number of player whose turn it should switch TO
        // change header to "It is players{playerNumber}.name's turn"
        const header = document.querySelector(".ui.container .turn.text");
        header.textContent = `${playerName}'s Turn`;
        // change board header from "Your Board" to "Enemy Board" and vis versa
        const board1Header = board1.querySelector(".header");
        const board2Header = board2.querySelector(".header");
        // hide ships from enemy board and reveal ships on your board
        const boardDOM1 = board1.querySelector(".board.container");
        const boardDOM2 = board2.querySelector(".board.container");
        if (playerNumber == 1){
            board2Header.textContent = "Enemy Board";
            board1Header.textContent = "Your Board";
            boardDOM1.classList.add("visible");
            boardDOM2.classList.remove("visible");
        } else {
            board1Header.textContent = "Enemy Board";
            board2Header.textContent = "Your Board";
            boardDOM1.classList.remove("visible");
            boardDOM2.classList.add("visible");
        }
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
        const header = document.querySelector(".ui.container .turn.text");
        header.textContent = "Setup Time";
        renderBoardReset(attackMap1, shipMap1, board1.querySelector(".board.container"));
        renderBoardReset(attackMap2, shipMap2, board2.querySelector(".board.container"));
        renderShipSamples();
    }

    const toggleBoardVisibility = function(boardDOM){
        boardDOM.classList.toggle("visible");
    }

    const renderBoardReset = function(attackMap, shipMap, boardDOM){
        for (let i=0; i<10; i++){
            const row = i;
            const attackedInRow = Object.keys(attackMap[i]);
            const shipInRow = Object.keys(shipMap[i]);
            for (let attacked of attackedInRow){
                const col = Number(attacked)+1;
                const divToUnattack = boardDOM.querySelector(`div.row-${row} div:nth-child(${col})`);
                divToUnattack.classList.remove("attacked")
            }
            for (let ship of shipInRow){
                const col = Number(ship)+1;
                const divToUnship = boardDOM.querySelector(`div.row-${row} div:nth-child(${col})`);
                divToUnship.classList.remove("ship");
                divToUnship.removeAttribute("draggable");
                divToUnship.removeAttribute("grablocation");
                divToUnship.removeAttribute("length");
                divToUnship.removeAttribute("horizontal");
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

    const renderStagingButtons = function(boardDOM){
        const buttonArea = createElement("div","button container");
        const button = createElement("button","submit staging");
        button.textContent = "Lock in positions!";
        const rngButton = createElement("button", "randomize button");
        rngButton.textContent = "Randomize"
        buttonArea.append(button, rngButton);
        boardDOM.parentNode.append(buttonArea);
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
                const squareToRemove = boardDOMNode.querySelector(`.row-${oldXStart+i} div:nth-child(${oldYStart+1})`);
                const grablocation = squareToRemove.getAttribute("grablocation");
                squareToRemove.removeAttribute("draggable");
                squareToRemove.removeAttribute("length");
                squareToRemove.removeAttribute("grablocation");
                squareToRemove.removeAttribute("horizontal");
                squareToRemove.classList.remove("ship")
                const squareToAdd = boardDOMNode.querySelector(`.row-${newXStart+i} div:nth-child(${newYStart+1})`);
                squareToAdd.setAttribute("draggable", true);
                squareToAdd.setAttribute("length", shipLength);
                squareToAdd.setAttribute("grablocation", grablocation);
                squareToAdd.setAttribute("horizontal", isHorizontal);
                squareToAdd.classList.add("ship");
            }
        }
    }

    // rendering pregame
    const renderPregame = function(){
        const body = document.querySelector("body");
        const pregameContainer = createElement("div","pregame container");
        body.append(pregameContainer);
        const title = buildPregameTitle();
        const gameSelectionButtons = buildSelectButtons();
        pregameContainer.append(title, gameSelectionButtons);
    }

    const buildPregameTitle = function(){
        const title = createElement("h1", "title");
        title.textContent = "Battleship";
        return title;
    }

    const buildSelectButtons = function(){
        const buttonContainer = createElement("div","button container");
        const singlePlayerButton = createElement("button","single button");
        singlePlayerButton.textContent = "Single Player"
        const doublePlayerButton = createElement("button", "double button");
        doublePlayerButton.textContent = "Hotseat Two Player"
        buttonContainer.append(singlePlayerButton, doublePlayerButton);
        return buttonContainer;
    }

    // this should render after game selection button
    const renderPlayerNameForm = function(isSinglePlayer){
        const formContainer = createElement("form","form container");
        if (formContainer.querySelector(".input.container")){
            formContainer.removeChild(formContainer.querySelector(".input.container"));
        }
        const inputContainer = createElement("form","input container");
        if (isSinglePlayer){
            inputContainer.append(buildNameInput("What is your name?"));
        } else{
            inputContainer.append(buildNameInput("Enter player 1 name..."));
            inputContainer.append(buildNameInput("Enter player 2 name..."));
        }
        formContainer.append(inputContainer);
        const pregameContainer = document.querySelector(".pregame.container");
        pregameContainer.append(formContainer);

    }

    const renderFormButton = function(){
        const formContainer = document.querySelector(".form.container");
        const button = createElement("button", "form submit");
        button.textContent = "Let's Play!";
        formContainer.append(button);
    }

    const buildNameInput = function(placeholderString){
        const nameInput = createElement("input", "name input");
        nameInput.setAttribute("type", "text");
        nameInput.setAttribute("placeholder",placeholderString);
        return nameInput;
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
        renderStagingButtons,
        toggleBoardVisibility,
        renderBoardReset,
        revealDialogWithText,
        renderPregame,
        renderPlayerNameForm,
        renderFormButton,
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
        if (isSinglePlayer){
            await emulateComputerTurn();
        } else if (playerObject.gameboard.isAllSunk()){
            endGame(playerNumber);
        } else{
            passTurnTo(playerNumber); // We pass turn to player's board we just clicked
        }
    }

    const emulateComputerTurn = async function(){
        console.log("Emulating computer's turn")
        const [r,c] = players.player2.gameboard.makeEducatedAttack(players.player1);
        const hitTarget = players.player1.boardDOM.querySelector(`.row-${r} div:nth-child(${c+1})`)
        _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.renderAttacked(hitTarget);
        if (players.player1.gameboard.isAllSunk()){
            await shortSleep();
            endGame(1);
        } else{
            activateEventListener(players.player2.boardDOM);
        }
    }

    const initPlay = function(){
        // assign event listener for attacks
        // later make first turn random or chosen
        players.player2.boardDOM.classList.add("visible");
        passTurnTo(1);
        const dialog = document.querySelector("dialog");
        dialog.close();
        return;
    };

    let players;
    let isSinglePlayer;
    const initGame = function(player1Name = "Player 1", player2Name = "Player 2"){
        const player1 = new _player_js__WEBPACK_IMPORTED_MODULE_0__.humanPlayer(player1Name, 1);
        let player2;
        if (player2Name == false){
            player2 = new _player_js__WEBPACK_IMPORTED_MODULE_0__.computerPlayer(2);
            isSinglePlayer = true;
        } else{
            player2 = new _player_js__WEBPACK_IMPORTED_MODULE_0__.humanPlayer(player2Name, 2);
            isSinglePlayer = false;
        }
        _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.initGameRender(player1, player2);
        const board1 = document.querySelector(".board-and-header.player-1 .board.container");
        const board2 = document.querySelector(".board-and-header.player-2 .board.container");
        player1.boardDOM = board1;
        player2.boardDOM = board2;
        // each player has 5 ships of size 2, 3, 3, 4, 5
        players = {player1, player2};
        enterGameStaging();
        //just for testing!
        const header = document.querySelector(".ui.container");
        header.addEventListener("click", () => endGame(1))
    };

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

    // START OF CODE RELATED TO GAME STAGING
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
        activateStaging(players.player1)
    }

    const activateStaging = function(player){
        const board1 = player.boardDOM;
        _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.toggleBoardVisibility(board1);
        renderDraggableShipsToStage(player);
        activateDropAndDragStartHandler(board1);
        _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.renderStagingButtons(board1);
        activateStagingButtons(player);
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

    const activateStagingButtons = function(player){
        const boardDOM = player.boardDOM;
        const button = boardDOM.nextElementSibling.firstChild;
        button.addEventListener("click", () => completeStaging(boardDOM))
        const rngButton = button.nextElementSibling;
        rngButton.addEventListener("click", () => randomizeBoard(player));
    }

    const randomizeBoard = function(player){
        _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.renderBoardReset(player.gameboard.getAttackMap(),
        player.gameboard.getBoardMap(), player.boardDOM);
        const randomCoords = player.gameboard.randomizeBoard();
        // randomCoords is {coords1, coords2, ... coords5} where each coords is an array of [x,y]s
        for (let coordsArray of Object.values(randomCoords)){
            _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.renderNewShip(player.number, ...coordsArray);
            setSpecificDraggable(player.boardDOM, ...coordsArray);
        }
    }

    const completeStaging = async function(boardDOM){
        deactivateStaging(boardDOM);
        if (boardDOM.getAttribute("playernum") == "1" && !isSinglePlayer){
            _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.revealDialogWithText(`Now let ${players.player2.name} set up.`);
            activateStaging(players.player2);
        } else if (!isSinglePlayer){
            initPlay();
            _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.revealDialogWithText(`Let's play! ${players.player1.name} first.`);
        } else{
            // this case is when it is a single player game
            randomizeBoard(players.player2);
            initPlay();
            _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.revealDialogWithText(`Let's play! Your turn first.`);
        }
    }

    const deactivateStaging = function(boardDOM){
        _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.toggleBoardVisibility(boardDOM);
        const buttonArea = boardDOM.nextElementSibling;
        buttonArea.parentNode.removeChild(buttonArea);
        const rows = boardDOM.children;
        for (let i=0; i<10; i++){
            const row = rows[i];
            const squares = row.children;
            for (let j=0; j<10; j++){
                const square = squares[j];
                square.removeEventListener("dragover", ondragoverHandler);
                square.removeEventListener("drop", dropHandler);
                square.removeEventListener("dragstart", dragstartHandler);
                square.removeAttribute("draggable");
            }
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
        let addOffsetX = 0;
        let addOffsetY = 0;
        let dragImageNode;
        if (isHorizontal == "true"){
            dragImageNode = document.querySelector(`.hidden.samples .ships.horizontal #length-${shipLength}`);
            addOffsetX = (grabLocation * (widthOfDiv+widthOfGap));
        } else{
            dragImageNode = document.querySelector(`.hidden.samples .ships.vertical #length-${shipLength}`);
            addOffsetY = (grabLocation * (widthOfDiv+widthOfGap))
        }
        event.dataTransfer.setDragImage(dragImageNode,event.offsetX + addOffsetX,event.offsetY+addOffsetY);
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
        playerVar.gameboard.createAllowedPositionMap(shipObject, isHorizontal, grabLocation);
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
    // END OF CODE RELATED TO STAGING

    const shortSleep = function(){
        return new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Pregame code (like where you put player names and choose game type)
    const initPregame = function(){
        // renders title, game mode selection, form for names, button to start
        _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.renderPregame();
        activatePregameButtons();
    }

    const activatePregameButtons = function(){
        const buttonsArr = document.querySelectorAll(".pregame.container .button.container .button");
        buttonsArr[0].addEventListener("click", () => handlePregameButtonClick(true));
        buttonsArr[1].addEventListener("click", () => handlePregameButtonClick(false));
    }

    const handlePregameButtonClick = function(isSinglePlayer){
        _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.renderPlayerNameForm(isSinglePlayer);
        // formSubmitButton is null if there is no buttons
        const formSubmitButton = document.querySelector(".pregame.container .form.submit")
        if (!formSubmitButton){
            _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.renderFormButton();
            activateFormButtons(isSinglePlayer);
        }
    }

    const activateFormButtons = function(isSinglePlayer){
        const formSubmitButton = document.querySelector(".pregame.container .form.submit");
        formSubmitButton.addEventListener("click", (event) => handleFormSubmit(event,isSinglePlayer));
    }

    const handleFormSubmit = function(event,isSinglePlayer){
        event.preventDefault();
        console.log(event);
        let form1Value = event.target.parentNode.querySelector(".name.input").value;
        if (form1Value ==""){
            form1Value = "Player 1";
        }
        if (isSinglePlayer){
            initGame(form1Value, false);
        } else {
            let form2Value = event.target.parentNode.querySelector(".name.input:nth-child(2)").value;
            if (form2Value ==""){
                form2Value = "Player 2";
            }
            initGame(form1Value,form2Value);
        }
    }


    // DRIVER CODE
    initPregame();

    return{
        players,
    }
}();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBYTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQWE7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxxREFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFEQUFhO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi4vbGlua2VkLWxpc3RzL2xpbmtlZGxpc3QuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIExpbmtlZExpc3QgcmVwcmVzZW50cyBmdWxsIGxpc3RcbmNvbnN0IExpbmtlZExpc3QgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBoZWFkTm9kZSA9IG51bGw7XG4gIGNvbnN0IGhlYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGhlYWROb2RlO1xuICB9O1xuXG4gIGNvbnN0IHRhaWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG5vZGUgPSBoZWFkTm9kZTtcbiAgICB3aGlsZSAobm9kZS5uZXh0Tm9kZSAhPSBudWxsKSB7XG4gICAgICBub2RlID0gbm9kZS5uZXh0Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgY29uc3QgYXBwZW5kID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKGhlYWROb2RlID09IG51bGwpIHtcbiAgICAgIGhlYWROb2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YWlsKCkubmV4dE5vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHByZXBlbmQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoaGVhZE5vZGUgPT0gbnVsbCkge1xuICAgICAgaGVhZE5vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWROb2RlID0gbmV3IE5vZGUodmFsdWUsIGhlYWROb2RlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGlmIChoZWFkTm9kZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gY291bnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgd2hpbGUgKG5vZGUubmV4dE5vZGUgIT0gbnVsbCkge1xuICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgICByZXR1cm4gY291bnQ7XG4gIH07XG5cbiAgLy8gY291bnQgaW5kZXggZnJvbSAxXG4gIGNvbnN0IGF0ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgaWYgKGluZGV4IDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgbm9kZSA9IGhlYWROb2RlO1xuICAgIHdoaWxlIChpbmRleCA+IDEpIHtcbiAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgICAgaW5kZXgtLTtcbiAgICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIGNvbnN0IHBvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgc2Vjb25kVG9MYXN0SW5kZXggPSBzaXplKCkgLSAxO1xuICAgIGxldCBzZWNvbmRUb0xhc3ROb2RlID0gYXQoc2Vjb25kVG9MYXN0SW5kZXgpO1xuICAgIHNlY29uZFRvTGFzdE5vZGUubmV4dE5vZGUgPSBudWxsO1xuICB9O1xuXG4gIC8vIHJldHVybnMgdHJ1ZSBpZiB2YWx1ZSBwYXNzZWQgaXMgaW4gbGlzdCwgZWxzZSByZXR1cm5zIGZhbHNlXG4gIGNvbnN0IGNvbnRhaW5zID0gZnVuY3Rpb24gKHZhbHVlLCBjb21wYXJlS2V5ID0gXCJ2YWx1ZVwiKSB7XG4gICAgbGV0IG5vZGUgPSBoZWFkTm9kZTtcbiAgICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XG4gICAgICBpZiAobm9kZS52YWx1ZSA9PSB2YWx1ZSB8fCBub2RlLnZhbHVlW2NvbXBhcmVLZXldID09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvLyByZXR1cm5zIGluZGV4IG9mIG5vZGUgY29udGFpbmluZyB2YWx1ZSwgb3IgbnVsbCBpZiBub3QgZm91bmRcbiAgY29uc3QgZmluZCA9IGZ1bmN0aW9uICh2YWx1ZSwgY29tcGFyZUtleSA9IFwidmFsdWVcIikge1xuICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgbGV0IGluZGV4ID0gMTtcbiAgICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XG4gICAgICBpZiAobm9kZS52YWx1ZSA9PSB2YWx1ZSB8fCBub2RlLnZhbHVlW2NvbXBhcmVLZXldID09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgICAgICBpbmRleCsrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICAvLyByZXR1cm5zIG5vZGUgY29udGFpbmluZyB2YWx1ZSwgb3IgbnVsbCBpZiBub3QgZm91bmRcbiAgLy8gYnV0IGNoZWNrcyBmb3Igbm9kZS5jYWxsYmFja2Z1bmN0aW9uKCkgYmVpbmcgZXF1YWwgdG8gdmFsdWVcbiAgY29uc3QgZmluZENhbGxiYWNrID0gZnVuY3Rpb24gKHZhbHVlLCBjYWxsYmFja0Z1bmN0aW9uKSB7XG4gICAgbGV0IG5vZGUgPSBoZWFkTm9kZTtcbiAgICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XG4gICAgICBpZiAobm9kZS52YWx1ZVtjYWxsYmFja0Z1bmN0aW9uXSgpID09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9OyAgXG5cbiAgLy8gc2FtZSBhcyBmaW5kLCBidXQgcmV0dXJucyB0aGUgbm9kZSwgbm90IGluZGV4XG4gIGNvbnN0IGZpbmROb2RlID0gZnVuY3Rpb24gKHZhbHVlLCBjb21wYXJlS2V5ID0gXCJ2YWx1ZVwiKSB7XG4gICAgbGV0IG5vZGUgPSBoZWFkTm9kZTtcbiAgICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XG4gICAgICBpZiAobm9kZS52YWx1ZSA9PSB2YWx1ZSB8fCBub2RlLnZhbHVlW2NvbXBhcmVLZXldID09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIC8vIHJldHVybnMgc3RyaW5nIG9mIG5vZGUgdmFsdWVzIGluIGZvcm1hdCBcIih2YWx1ZSkgLT4gKHZhbHVlKSAtPiBudWxsXCJcbiAgY29uc3QgdG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGhlYWROb2RlID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgc3RyaW5nID0gYCggJHtoZWFkTm9kZS52YWx1ZX0gKWA7XG4gICAgbGV0IG5vZGUgPSBoZWFkTm9kZS5uZXh0Tm9kZTtcbiAgICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XG4gICAgICBzdHJpbmcgKz0gYCAtPiAoICR7bm9kZS52YWx1ZX0gKWA7XG4gICAgICBub2RlID0gbm9kZS5uZXh0Tm9kZTtcbiAgICB9XG4gICAgc3RyaW5nICs9IFwiIC0+IG51bGxcIjtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xuXG4gIC8vIGluc2VydHMgbmV3IE5vZGUgd2l0aCB2YWx1ZSBhdCBpbmRleCAoY291bnRpbmcgZnJvbSAxKVxuICBjb25zdCBpbnNlcnRBdCA9IGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICBjb25zdCBwcmlvckluZGV4ID0gaW5kZXggLSAxO1xuICAgIGlmIChwcmlvckluZGV4ID09IDApIHtcbiAgICAgIHByZXBlbmQodmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcHJpb3JOb2RlID0gYXQocHJpb3JJbmRleCk7XG4gICAgaWYgKHByaW9yTm9kZSA9PSBudWxsKSB7XG4gICAgICBlcnJvci5sb2coYCR7aW5kZXh9IGlzIG5vdCB2YWxpZCBpbmRleC5gKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmV4dE5vZGUgPSBwcmlvck5vZGUubmV4dE5vZGU7XG4gICAgICBwcmlvck5vZGUubmV4dE5vZGUgPSBuZXcgTm9kZSh2YWx1ZSwgbmV4dE5vZGUpO1xuICAgIH1cbiAgfTtcblxuICAvLyByZW1vdmVzIG5vZGUgYXQgaW5kZXggKGNvdW50aW5nIGZyb20gMSlcbiAgY29uc3QgcmVtb3ZlQXQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICBjb25zdCBwcmlvckluZGV4ID0gaW5kZXggLSAxO1xuICAgIGlmIChwcmlvckluZGV4ID09IDApIHtcbiAgICAgIGxldCBub2RlVG9SZW1vdmUgPSBoZWFkTm9kZTtcbiAgICAgIGhlYWROb2RlID0gaGVhZE5vZGUubmV4dE5vZGU7XG4gICAgICBub2RlVG9SZW1vdmUgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcHJpb3JOb2RlID0gYXQocHJpb3JJbmRleCk7XG4gICAgbGV0IG5vZGVUb1JlbW92ZSA9IHByaW9yTm9kZS5uZXh0Tm9kZTtcbiAgICBjb25zdCBuZXh0Tm9kZSA9IHByaW9yTm9kZS5uZXh0Tm9kZS5uZXh0Tm9kZTtcbiAgICBwcmlvck5vZGUubmV4dE5vZGUgPSBuZXh0Tm9kZTtcbiAgICBub2RlVG9SZW1vdmUgPSBudWxsO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaGVhZCxcbiAgICB0YWlsLFxuICAgIGFwcGVuZCxcbiAgICBwcmVwZW5kLFxuICAgIHNpemUsXG4gICAgYXQsXG4gICAgcG9wLFxuICAgIGNvbnRhaW5zLFxuICAgIGZpbmQsXG4gICAgdG9TdHJpbmcsXG4gICAgaW5zZXJ0QXQsXG4gICAgcmVtb3ZlQXQsXG4gICAgZmluZE5vZGUsXG4gICAgZmluZENhbGxiYWNrLFxuICB9O1xufTtcblxuLy8gTm9kZSBjb250YWlucyB2YWx1ZSBwcm9wZXJ0eSwgbmV4dE5vZGVcblxuY29uc3QgTm9kZSA9IGZ1bmN0aW9uICh2YWx1ZSA9IG51bGwsIG5leHROb2RlID0gbnVsbCkge1xuICByZXR1cm4ge1xuICAgIHZhbHVlLFxuICAgIG5leHROb2RlLFxuICB9O1xufTtcblxuZXhwb3J0IHsgTGlua2VkTGlzdCwgTm9kZSB9O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5nYW1lLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnIgMTBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG5cbiAgICAvKiBncmlkIGFyZWEgaXMgciAvIGMgLyByIC8gYyAqL1xuICAgIC51aS5jb250YWluZXJ7XG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcbiAgICB9XG5cbiAgICAuYm9hcmQuY29udGFpbmVyLnBsYXllci0xe1xuICAgICAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XG4gICAgfVxuXG4gICAgLmJvYXJkLmNvbnRhaW5lci5wbGF5ZXItMntcbiAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xuICAgIH1cblxuICAgIC5oaWRkZW4uc2FtcGxlc3tcbiAgICAgICAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAzO1xuICAgIH1cbn1cblxuLmJvYXJkLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcHg7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuXG4gICAgPiBkaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGdhcDogMXB4O1xuXG4gICAgICAgIGRpdntcbiAgICAgICAgICAgIGFzcGVjdC1yYXRpbzogMS8xO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpncmF5O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNoaXAuYXR0YWNrZWR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG4gICAgICAgIH1cblxuICAgICAgICAuYXR0YWNrZWR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ib2FyZC5jb250YWluZXIudmlzaWJsZXtcbiAgICAuc2hpcHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICB9XG59XG5cbi8qIHN0eWxlIHNoaXBzIG9mZiBib2FyZCBkdXJpbmcgc3RhZ2luZyAqL1xuLmhpZGRlbi5zYW1wbGVze1xuICAgID4gZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDNweDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICA+IGRpdntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBnYXA6IDFweDtcbiAgICAgICAgXG4gICAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICAgICAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6YXF1YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC52ZXJ0aWNhbCA+IGRpdntcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG59XG5cbi8qIHN0eWxlIGRpYWxvZyAqL1xuOjpiYWNrZHJvcHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsOEJBQThCOztJQUU5QiwrQkFBK0I7SUFDL0I7UUFDSSx3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSx3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSx3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSx3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQix1QkFBdUI7O0lBRXZCO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixRQUFROztRQUVSO1lBQ0ksaUJBQWlCO1lBQ2pCLFlBQVk7WUFDWixxQkFBcUI7UUFDekI7O1FBRUE7WUFDSSx3QkFBd0I7UUFDNUI7O1FBRUE7WUFDSSxxQkFBcUI7UUFDekI7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7QUFDSjs7QUFFQSx5Q0FBeUM7QUFDekM7SUFDSTtRQUNJLGFBQWE7UUFDYixRQUFRO1FBQ1Isc0JBQXNCOztRQUV0QjtZQUNJLHVCQUF1QjtZQUN2QixrQkFBa0I7WUFDbEIsYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixRQUFROztZQUVSO2dCQUNJLGlCQUFpQjtnQkFDakIsWUFBWTtnQkFDWixxQkFBcUI7WUFDekI7UUFDSjtJQUNKOztJQUVBO1FBQ0ksc0JBQXNCO0lBQzFCO0FBQ0o7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksd0JBQXdCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5nYW1lLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciAxMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuXFxuICAgIC8qIGdyaWQgYXJlYSBpcyByIC8gYyAvIHIgLyBjICovXFxuICAgIC51aS5jb250YWluZXJ7XFxuICAgICAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICAgIH1cXG5cXG4gICAgLmJvYXJkLmNvbnRhaW5lci5wbGF5ZXItMXtcXG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG4gICAgfVxcblxcbiAgICAuYm9hcmQuY29udGFpbmVyLnBsYXllci0ye1xcbiAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcbiAgICB9XFxuXFxuICAgIC5oaWRkZW4uc2FtcGxlc3tcXG4gICAgICAgIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMztcXG4gICAgfVxcbn1cXG5cXG4uYm9hcmQuY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFweDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXG4gICAgPiBkaXZ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGdhcDogMXB4O1xcblxcbiAgICAgICAgZGl2e1xcbiAgICAgICAgICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyYXk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2hpcC5hdHRhY2tlZHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuYXR0YWNrZWR7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5ib2FyZC5jb250YWluZXIudmlzaWJsZXtcXG4gICAgLnNoaXB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgICB9XFxufVxcblxcbi8qIHN0eWxlIHNoaXBzIG9mZiBib2FyZCBkdXJpbmcgc3RhZ2luZyAqL1xcbi5oaWRkZW4uc2FtcGxlc3tcXG4gICAgPiBkaXZ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiAzcHg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICAgICAgPiBkaXZ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgICAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgICBnYXA6IDFweDtcXG4gICAgICAgIFxcbiAgICAgICAgICAgIGRpdntcXG4gICAgICAgICAgICAgICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjphcXVhO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAudmVydGljYWwgPiBkaXZ7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxufVxcblxcbi8qIHN0eWxlIGRpYWxvZyAqL1xcbjo6YmFja2Ryb3B7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7U2hpcH0gZnJvbSBcIi4vc2hpcC5qc1wiO1xuaW1wb3J0IHtMaW5rZWRMaXN0fSBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2xpbmtlZC1saXN0cy9saW5rZWRsaXN0LmpzXCJcblxuY29uc3QgR2FtZWJvYXJkID0gZnVuY3Rpb24gKCkge1xuICBsZXQgYm9hcmRNYXA7XG4gIGxldCBhdHRhY2tNYXA7XG4gIC8vIG1ha2UgZWFjaCBtYXAgYW4gYXJyYXkgb2YgMTAgd2l0aCBlYWNoIGFycmF5IGJlaW5nIGFuIG9iamVjdCAoc2ltaWxhciB0byBoYXNoIG1hcClcbiAgY29uc3QgaW5pdEJvYXJkID0gZnVuY3Rpb24gKCkge1xuICAgIGJvYXJkTWFwID0gW3t9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9XTtcbiAgICBhdHRhY2tNYXAgPSBbe30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge31dO1xuICB9KCk7XG5cbiAgY29uc3QgZ2V0Qm9hcmRNYXAgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBib2FyZE1hcDtcbiAgfVxuXG4gIGNvbnN0IGdldEF0dGFja01hcCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGF0dGFja01hcDtcbiAgfVxuXG4gIC8vIGJhc2VkIG9uIHRoZSB3YXkgd2UgaW1wbGVtZW50ZWQsXG4gIC8vIHRoZSBmaXJzdCBpbmRleCBmb3IgYXJyYXkgaXMgdGhlIHItdmFsdWUgb3IgdGhlIGNvbHVtbiBpbiBhIG1hdHJpeC9ncmlkXG4gIC8vIHRoZSBzZWNvbmQgaW5kZXggZm9yIG9iamVjdCBrZXkgaXMgdGhlIGMtdmFsdWUgb3IgdGhlIHJvdyBpbiBhIG1hdHJpeC9ncmlkIChpbmNyZWFzZXMgZ29pbmcgZG93bilcbiAgbGV0IHNoaXBMaXN0ID0gbmV3IExpbmtlZExpc3QoKTtcbiAgLy8gdXNlIHJlc3QgcGFyYW1ldGVyICguLi4pIHRvIGFjY2VwdCB2YXJpYWJsZSBhbW91bnQgb2YgY29vcmRzXG4gIGNvbnN0IG5ld1NoaXAgPSBmdW5jdGlvbiAoLi4uY29vcmRzKSB7XG4gICAgICBjb25zdCBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmRzLmxlbmd0aCk7XG4gICAgICBpZiAoaXNTaGlwQXRDb29yZHMoLi4uY29vcmRzKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGJvYXJkTWFwKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEb24ndCBvdmVybGFwIHNoaXBzIGF0OiAke2Nvb3Jkc31gKTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IFtyLGNdIG9mIGNvb3Jkcyl7XG4gICAgICAgIGlmIChjIDwgMTAgJiYgYyA+PTApe1xuICAgICAgICAgIGJvYXJkTWFwW3JdW2NdID0gbmV3U2hpcDtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgIGNvbnNvbGUubG9nKGNvb3Jkcyk7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCYWQgY29sIGlucHV0IGZvciBuZXdTaGlwKCk6ICR7Y29vcmRzfWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBhZGRpbmcgbmV3IHNoaXAgdG8gc2hpcCBsaW5rZWQgbGlzdFxuICAgICAgc2hpcExpc3QuYXBwZW5kKG5ld1NoaXApO1xuICB9O1xuXG4gIGNvbnN0IGlzU2hpcEF0Q29vcmRzID0gZnVuY3Rpb24oLi4uY29vcmRzKXtcbiAgICBmb3IgKGxldCBbcixjXSBvZiBjb29yZHMpe1xuICAgICAgaWYgKGJvYXJkTWFwW3JdICE9PSB1bmRlZmluZWQgJiYgYm9hcmRNYXBbcl1bY10gIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBnZXRTaGlwRnJvbUNvb3JkcyA9IGZ1bmN0aW9uKFtyLGNdKXtcbiAgICByZXR1cm4gYm9hcmRNYXBbcl1bY107XG4gIH1cblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gZnVuY3Rpb24oW3IsY10pe1xuICAgIGlmICh3YXNBdHRhY2tlZChbcixjXSkpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgYXR0YWNrIHByZXZpb3VzIGF0dGFja2VkICgke3J9LCR7Y30pYCk7XG4gICAgfVxuICAgIGNvbnN0IHNoaXAgPSBib2FyZE1hcFtyXVtjXTtcbiAgICBpZiAodHlwZW9mKHNoaXApID09IFwib2JqZWN0XCIpe1xuICAgICAgc2hpcC5oaXQoKTtcbiAgICAgIGF0dGFja01hcFtyXVtjXT1cImhpdFwiO1xuICAgICAgcmV0dXJuIFwiaGl0XCI7XG4gICAgfSBlbHNle1xuICAgICAgYXR0YWNrTWFwW3JdW2NdID0gXCJtaXNzXCI7XG4gICAgICByZXR1cm4gXCJtaXNzXCI7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgd2FzQXR0YWNrZWQgPSBmdW5jdGlvbihbcixjXSl7XG4gICAgcmV0dXJuIGF0dGFja01hcFtyXVtjXSB8fCBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGlzQWxsU3VuayA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIChzaGlwTGlzdC5maW5kQ2FsbGJhY2soZmFsc2UsIFwiaXNTdW5rXCIpID09IG51bGwpO1xuICB9XG5cbiAgY29uc3QgcmVzZXRCb2FyZCA9IGZ1bmN0aW9uKCl7XG4gICAgYm9hcmRNYXAgPSBbe30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge31dO1xuICAgIGF0dGFja01hcCA9IFt7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fV07XG4gICAgYXR0YWNrQ291bnQgPSAwO1xuICB9XG5cbiAgLy8gVVNFUyBhbGxvd2VkIHBvc2l0aW9uIG1hcCBjcmVhdGVkIHdpdGggc3BlY2lmaWMgaW5mbyBhYm91dCBzaGlwIG9yaWVudGF0aW9uIGFuZCBsZW5ndGhcbiAgY29uc3QgaXNUaGlzQWxsb3dlZFBsYWNlbWVudCA9IGZ1bmN0aW9uKFtyLGNdKXtcbiAgICByZXR1cm4gYWxsb3dlZFBvc2l0aW9uTWFwW3JdW2NdO1xuICB9XG5cbiAgbGV0IGFsbG93ZWRQb3NpdGlvbk1hcDtcbiAgLy8gdXNlcyBhZGphY2VuY3kgbWFwIGFuZCBzaGlwIGxlbmd0aCB0byBzaG93IGFsbCBwb3NpYmxlIHRvcGxlZnQgcG9zaXRpb25zIGZvciB0aGUgc2hpcFxuICAvLyByZWNhbGwgdGhhdCBncmFiTG9jYXRpb24gc3RhcnRzIGF0IDBcbiAgLy8gcmV0dXJucyBudW1iZXIgb2YgdHJ1ZXMgKGFsbG93ZWQgc3BvdHMpXG4gIGNvbnN0IGNyZWF0ZUFsbG93ZWRQb3NpdGlvbk1hcCA9IGZ1bmN0aW9uKHNoaXBPYmplY3QsIGlzSG9yaXpvbnRhbCwgZ3JhYkxvY2F0aW9uKXtcbiAgICBjb25zdCBhZGphY2VuY3lNYXAgPSBjcmVhdGVBZGphY2VuY3lNYXAoKTtcbiAgICBhbGxvd2VkUG9zaXRpb25NYXAgPSBbe30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge31dO1xuICAgIGNvbnN0IGxlbmd0aCA9IHNoaXBPYmplY3QubGVuZ3RoO1xuICAgIGxldCB0cnVlQ291bnQgPTA7XG4gICAgaWYgKGlzSG9yaXpvbnRhbCA9PSBcInRydWVcIil7XG4gICAgICBmb3IgKGxldCByID0gMDsgcjwxMDsgcisrKXtcbiAgICAgICAgZm9yIChsZXQgYz0wOyBjPDEwOyBjKyspe1xuICAgICAgICAgIGlmIChjPiAoMTAtbGVuZ3RoK2dyYWJMb2NhdGlvbikgfHwgYzxncmFiTG9jYXRpb24pe1xuICAgICAgICAgICAgYWxsb3dlZFBvc2l0aW9uTWFwW3JdW2NdID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsbG93ZWRQb3NpdGlvbk1hcFtyXVtjXSA9IGlzU2hpcEZpdEFkamFjZW5jeShbcixjLWdyYWJMb2NhdGlvbl0sIHNoaXBPYmplY3QsIGlzSG9yaXpvbnRhbCwgYWRqYWNlbmN5TWFwKTtcbiAgICAgICAgICAgIGlmIChhbGxvd2VkUG9zaXRpb25NYXBbcl1bY10gPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgIHRydWVDb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgfSBlbHNle1xuICAgICAgZm9yIChsZXQgciA9IDA7IHI8MTA7IHIrKyl7XG4gICAgICAgIGZvciAobGV0IGM9MDsgYzwxMDsgYysrKXtcbiAgICAgICAgICBpZiAociA+ICgxMC1sZW5ndGgrZ3JhYkxvY2F0aW9uKSB8fCByPGdyYWJMb2NhdGlvbil7XG4gICAgICAgICAgICAgIGFsbG93ZWRQb3NpdGlvbk1hcFtyXVtjXSA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGxvd2VkUG9zaXRpb25NYXBbcl1bY10gPSBpc1NoaXBGaXRBZGphY2VuY3koW3ItZ3JhYkxvY2F0aW9uLGNdLHNoaXBPYmplY3QsIGlzSG9yaXpvbnRhbCwgYWRqYWNlbmN5TWFwKTtcbiAgICAgICAgICAgIGlmIChhbGxvd2VkUG9zaXRpb25NYXBbcl1bY10gPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgIHRydWVDb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcImFsbG93ZWQgcG9zaXRpb24gbWFwIGNyZWF0ZWRcIilcbiAgICBjb25zb2xlLmxvZyhhbGxvd2VkUG9zaXRpb25NYXApO1xuICAgIHJldHVybiB0cnVlQ291bnQ7XG4gIH07XG5cbiAgLy8gW3IsY10gaXMgdG9wbGVmdCBzcXVhcmUgb2Ygc2hpcFxuICBjb25zdCBpc1NoaXBGaXRBZGphY2VuY3kgPSBmdW5jdGlvbihbcixjXSxzaGlwT2JqZWN0LCBpc0hvcml6b250YWwsIG1hcCl7XG4gICAgY29uc3QgbGVuZ3RoID0gc2hpcE9iamVjdC5sZW5ndGg7XG4gICAgaWYgKGlzSG9yaXpvbnRhbCAhPT0gXCJ0cnVlXCIpe1xuICAgICAgZm9yIChsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXBbcitpXSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgbWFwW3IraV1bY10gIT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICAgIGZvciAobGV0IHNoaXAgb2YgbWFwW3IraV1bY10pe1xuICAgICAgICAgICAgaWYgKHNoaXAgIT0gc2hpcE9iamVjdCl7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXBbcl0gIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIG1hcFtyXVtjK2ldICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgICAgICBmb3IgKGxldCBzaGlwIG9mIG1hcFtyXVtjK2ldKXtcbiAgICAgICAgICAgIGlmIChzaGlwICE9IHNoaXBPYmplY3Qpe1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cblxuICBjb25zdCBjcmVhdGVBZGphY2VuY3lNYXAgPSBmdW5jdGlvbigpe1xuICAgIGxldCBhZGphY2VuY3lNYXAgPSBbe30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge31dO1xuICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKXtcbiAgICAgIGZvciAobGV0IGo9MDsgajwxMDsgaisrKXtcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZE1hcFtpXVtqXSAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICAgICAgY29uc3Qgc2hpcCA9IGJvYXJkTWFwW2ldW2pdO1xuICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaSxqKTtcbiAgICAgICAgICBpZiAoaj4wKXtcbiAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaSxqLTEpO1xuICAgICAgICAgICAgaWYgKGk+MCl7XG4gICAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaS0xLGotMSk7XG4gICAgICAgICAgICB9IGlmIChpPDkpe1xuICAgICAgICAgICAgICBhZGRUb0FkamFjZW5jeU1hcChhZGphY2VuY3lNYXAsIHNoaXAsIGkrMSxqLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoajw5KXtcbiAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaSxqKzEpO1xuICAgICAgICAgICAgaWYgKGk+MCl7XG4gICAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaS0xLGorMSk7XG4gICAgICAgICAgICB9IGlmIChpPDkpe1xuICAgICAgICAgICAgICBhZGRUb0FkamFjZW5jeU1hcChhZGphY2VuY3lNYXAsIHNoaXAsIGkrMSxqKzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaT4wKXtcbiAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaS0xLGopO1xuICAgICAgICAgIH0gaWYgKGk8OSl7XG4gICAgICAgICAgICBhZGRUb0FkamFjZW5jeU1hcChhZGphY2VuY3lNYXAsIHNoaXAsIGkrMSxqKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coYWRqYWNlbmN5TWFwKTtcbiAgICByZXR1cm4gYWRqYWNlbmN5TWFwO1xuICB9XG5cbiAgY29uc3QgYWRkVG9BZGphY2VuY3lNYXAgPSBmdW5jdGlvbihtYXAsIHNoaXAsIGksIGope1xuICAgIGNvbnN0IGxvY2F0aW9uID0gbWFwW2ldW2pdO1xuICAgIGlmICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYXRpb25bMF0gIT0gc2hpcCl7XG4gICAgICBtYXBbaV1bal0ucHVzaChzaGlwKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIG1hcFtpXVtqXSA9IFtzaGlwXTtcbiAgICB9XG4gIH1cblxuICAvLyByZW1lbWJlciB0aGF0IG1hcCBpcyBzb3J0ZWQgYnkgciwgdGhlbiBjLlxuICBjb25zdCBtb3ZlU2hpcCA9IGZ1bmN0aW9uKHNoaXAsW3N0YXJ0UixzdGFydENdLGxlbmd0aCwgaXNIb3Jpem9udGFsKXtcbiAgICBmb3IgKGxldCByb3c9MDsgcm93PDEwOyByb3crKyl7XG4gICAgICBjb25zdCBtYXBSb3cgPSBib2FyZE1hcFtyb3ddO1xuICAgICAgZm9yIChsZXQgY29sIG9mIE9iamVjdC5rZXlzKG1hcFJvdykpe1xuICAgICAgICBpZiAobWFwUm93W2NvbF0gPT0gc2hpcCl7XG4gICAgICAgICAgZGVsZXRlIGJvYXJkTWFwW3Jvd11bY29sXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhib2FyZE1hcCk7XG4gICAgY29uc3QgY29vcmRzID0gW107XG4gICAgaWYgKGlzSG9yaXpvbnRhbCA9PSBcInRydWVcIil7XG4gICAgICBmb3IgKGxldCBpPTA7IGk8bGVuZ3RoOyBpKyspe1xuICAgICAgICBjb29yZHMucHVzaChbc3RhcnRSLHN0YXJ0QytpXSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29vcmRzLnB1c2goW3N0YXJ0UitpLHN0YXJ0Q10pXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKC4uLmNvb3JkcywgbGVuZ3RoKTtcbiAgICBuZXdTaGlwKC4uLmNvb3Jkcyk7XG4gIH1cblxuICAvLyBuZWVkIHRvIHJhbmRvbWl6ZSA1IHNoaXBzIG9mIGxlbmd0aCAyLDMsMyw0LDVcbiAgY29uc3QgcmFuZG9taXplQm9hcmQgPSBmdW5jdGlvbigpe1xuICAgIHRyeXtcbiAgICAgIHJlc2V0Qm9hcmQoKTtcbiAgICAgIGNvbnN0IGNvb3JkczEgPSBnZXRSYW5kb21Db29yZHMoMik7XG4gICAgICBuZXdTaGlwKC4uLmNvb3JkczEpO1xuICAgICAgY29uc3QgY29vcmRzMiA9IGdldFJhbmRvbUNvb3JkcygzKTtcbiAgICAgIG5ld1NoaXAoLi4uY29vcmRzMik7XG4gICAgICBjb25zdCBjb29yZHMzID0gZ2V0UmFuZG9tQ29vcmRzKDMpO1xuICAgICAgbmV3U2hpcCguLi5jb29yZHMzKTtcbiAgICAgIGNvbnN0IGNvb3JkczQgPSBnZXRSYW5kb21Db29yZHMoNCk7XG4gICAgICBuZXdTaGlwKC4uLmNvb3JkczQpO1xuICAgICAgY29uc3QgY29vcmRzNSA9IGdldFJhbmRvbUNvb3Jkcyg1KTtcbiAgICAgIG5ld1NoaXAoLi4uY29vcmRzNSk7XG4gICAgICAvL2NvbnNvbGUubG9nKGJvYXJkTWFwKTtcbiAgICAgIHJldHVybiB7Y29vcmRzMSxjb29yZHMyLGNvb3JkczMsY29vcmRzNCxjb29yZHM1fTtcbiAgICB9IGNhdGNoe1xuICAgICAgcmV0dXJuIHJhbmRvbWl6ZUJvYXJkKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2V0UmFuZG9tQ29vcmRzID0gZnVuY3Rpb24obGVuZ3RoKXtcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSByYW5kb21pemVJc0hvcml6b250YWwoKTtcbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcbiAgICBsZXQgdHJ1ZUNvdW50ID0gY3JlYXRlQWxsb3dlZFBvc2l0aW9uTWFwKHNoaXAsIGlzSG9yaXpvbnRhbCwgMCk7XG4gICAgLy8gY2F0Y2ggd2hlbiB0aGVyZSBpcyBubyBhbGxvd2VkIHBvc2l0aW9uc1xuICAgIGlmICh0cnVlQ291bnQgPT0gMCl7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFwiTXVzdCByZXJhbmRvbWl6ZSBkdWUgdG8gdW5sdWNreSBzZXR1cFwiKTtcbiAgICB9XG4gICAgLy8gcm5nQ291bnQgcmFuZ2VzIGZyb20gMCB0byB0cnVlQ291bnQtMTtcbiAgICBsZXQgcm5nQ291bnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqdHJ1ZUNvdW50KTtcbiAgICAvL2NvbnNvbGUubG9nKHJuZ0NvdW50LCB0cnVlQ291bnQpO1xuICAgIGxldCByPS0xO1xuICAgIGxldCBjPTk7XG4gICAgd2hpbGUgKHJuZ0NvdW50Pj0wKXtcbiAgICAgIGlmIChjPT05KXtcbiAgICAgICAgcisrO1xuICAgICAgICBjPTA7XG4gICAgICB9IGVsc2V7XG4gICAgICAgIGMrKztcbiAgICAgIH1cbiAgICAgIGlmIChpc1RoaXNBbGxvd2VkUGxhY2VtZW50KFtyLGNdKSA9PSB0cnVlKXtcbiAgICAgICAgcm5nQ291bnQtLTtcbiAgICAgIH1cbiAgICAgIC8vY29uc29sZS5sb2cociwgYywgcm5nQ291bnQpO1xuICAgIH1cbiAgICBsZXQgY29vcmRzID0gW107XG4gICAgaWYgKGlzSG9yaXpvbnRhbCA9PSBcInRydWVcIil7XG4gICAgICBmb3IgKDtsZW5ndGg+MDsgbGVuZ3RoLS0pe1xuICAgICAgICBjb29yZHMucHVzaChbcixjXSk7XG4gICAgICAgIGMrKztcbiAgICAgIH1cbiAgICB9IGVsc2V7XG4gICAgICBmb3IgKDtsZW5ndGg+MDsgbGVuZ3RoLS0pe1xuICAgICAgICBjb29yZHMucHVzaChbcixjXSk7XG4gICAgICAgIHIrKztcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coYEdlbmVyYXRlZCBhbGxvd2VkIHJhbmRvbSBjb29yZHMgJHtjb29yZHN9YCk7XG4gICAgcmV0dXJuIChjb29yZHMpO1xuICB9XG5cbiAgY29uc3QgcmFuZG9taXplSXNIb3Jpem9udGFsID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBybmcgPSBNYXRoLnJhbmRvbSgpKjI7XG4gICAgaWYgKHJuZyA8IDEpe1xuICAgICAgcmV0dXJuIFwidHJ1ZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJmYWxzZVwiO1xuICAgIH1cbiAgfVxuXG4gIC8vIHN0YXJ0IG9mIGNvZGUgZm9yIGd1ZXNzaW5nIGVkdWNhdGVkIGF0dGFjayBmb3IgY29tcHV0ZXIgcGxheWVyIC8vXG4gIGxldCBwcmV2aW91c0F0dGFjayA9IHt9O1xuICBjb25zdCBtYWtlUmFuZG9tQXR0YWNrID0gZnVuY3Rpb24ob3RoZXJQbGF5ZXIpe1xuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKiAoOTktYXR0YWNrQ291bnQpKTtcbiAgICBwcmV2aW91c0F0dGFjay5jb29yZHMgPSBnZXROdGhPcGVuQXR0YWNrTWFwKG90aGVyUGxheWVyLCByYW5kb21JbmRleCk7XG4gICAgLy9jb25zb2xlLmxvZyhwcmV2aW91c0F0dGFjay5jb29yZHMpO1xuICAgIHByZXZpb3VzQXR0YWNrLmhpdCA9IG90aGVyUGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHByZXZpb3VzQXR0YWNrLmNvb3Jkcyk7XG4gIH1cblxuICBsZXQgYXR0YWNrQ291bnQgPSAwO1xuICBjb25zdCBtYWtlRWR1Y2F0ZWRBdHRhY2sgPSBmdW5jdGlvbihvdGhlclBsYXllcil7XG4gICAgaWYgKHR5cGVvZiBwcmV2aW91c0F0dGFjay5wcmV2U3VjY2Vzc0Nvb3JkcyAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICBjb25zdCBbcixjXT0gcHJldmlvdXNBdHRhY2sucHJldlN1Y2Nlc3NDb29yZHM7XG4gICAgICBjb25zb2xlLmxvZyhyLGMpO1xuICAgICAgY29uc3Qgb3RoZXJBdHRhY2tNYXAgPSBvdGhlclBsYXllci5nYW1lYm9hcmQuZ2V0QXR0YWNrTWFwKCk7XG4gICAgICBpZiAoaXNPbkJvYXJkQW5kTm90QXR0YWNrZWQoW3ItMSxjXSxvdGhlckF0dGFja01hcCkpe1xuICAgICAgICBwcmV2aW91c0F0dGFjay5jb29yZHMgPSBbci0xLGNdO1xuICAgICAgICBwcmV2aW91c0F0dGFjay5oaXQgPSBvdGhlclBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbci0xLGNdKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNPbkJvYXJkQW5kTm90QXR0YWNrZWQoW3IrMSxjXSxvdGhlckF0dGFja01hcCkpe1xuICAgICAgICBwcmV2aW91c0F0dGFjay5jb29yZHMgPSBbcisxLGNdO1xuICAgICAgICBwcmV2aW91c0F0dGFjay5oaXQgPSBvdGhlclBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbcisxLGNdKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNPbkJvYXJkQW5kTm90QXR0YWNrZWQoW3IsYy0xXSxvdGhlckF0dGFja01hcCkpe1xuICAgICAgICBwcmV2aW91c0F0dGFjay5jb29yZHMgPSBbcixjLTFdO1xuICAgICAgICBwcmV2aW91c0F0dGFjay5oaXQgPSBvdGhlclBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbcixjLTFdKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNPbkJvYXJkQW5kTm90QXR0YWNrZWQoW3IsYysxXSxvdGhlckF0dGFja01hcCkpe1xuICAgICAgICBwcmV2aW91c0F0dGFjay5jb29yZHMgPSBbcixjKzFdO1xuICAgICAgICBwcmV2aW91c0F0dGFjay5oaXQgPSBvdGhlclBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbcixjKzFdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1ha2VSYW5kb21BdHRhY2sob3RoZXJQbGF5ZXIpO1xuICAgICAgfVxuICAgIH0gZWxzZXtcbiAgICAgIG1ha2VSYW5kb21BdHRhY2sob3RoZXJQbGF5ZXIpO1xuICAgIH1cbiAgICBpZiAocHJldmlvdXNBdHRhY2suaGl0ID09IFwiaGl0XCIpe1xuICAgICAgcHJldmlvdXNBdHRhY2sucHJldlN1Y2Nlc3NDb29yZHMgPSBwcmV2aW91c0F0dGFjay5jb29yZHM7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBSZWNlaXZlZCBhdHRhY2sgYXQgJHtwcmV2aW91c0F0dGFjay5jb29yZHN9IGZvciBwbGF5ZXIgMSBieSBjb21wdXRlcmApXG4gICAgYXR0YWNrQ291bnQrKztcbiAgICByZXR1cm4gcHJldmlvdXNBdHRhY2suY29vcmRzO1xuICB9XG5cbiAgY29uc3QgZ2V0TnRoT3BlbkF0dGFja01hcCA9IGZ1bmN0aW9uKG90aGVyUGxheWVyLCBpbmRleCl7XG4gICAgY29uc3Qgb3RoZXJBdHRhY2tNYXAgPSBvdGhlclBsYXllci5nYW1lYm9hcmQuZ2V0QXR0YWNrTWFwKCk7XG4gICAgbGV0IGNvdW50ID0gaW5kZXg7XG4gICAgZm9yIChsZXQgcm93IG9mIG90aGVyQXR0YWNrTWFwKXtcbiAgICAgIGZvciAobGV0IGM9MDsgYzwxMDsgYysrKXtcbiAgICAgICAgY29uc3QgY29sVmFsdWUgPSByb3dbY107XG4gICAgICAgIC8vY29uc29sZS5sb2coY29sVmFsdWUpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbFZhbHVlID09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgaWYgKGNvdW50IDwwKXtcbiAgICAgICAgICAgIGNvbnN0IHIgPSBvdGhlckF0dGFja01hcC5pbmRleE9mKHJvdyk7XG4gICAgICAgICAgICByZXR1cm4gW3IsY107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coY291bnQpXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZ2V0IE50aCBvcGVuIGF0dGFjayBtYXAgZmFpbGVkXCIpO1xuICB9XG5cbiAgY29uc3QgaXNPbkJvYXJkQW5kTm90QXR0YWNrZWQgPSBmdW5jdGlvbihbcixjXSwgYXR0YWNrTWFwKXtcbiAgICByZXR1cm4gKHI8OSAmJiByPjAgJiYgYzw5ICYmIGM+MCAmJiB0eXBlb2YgYXR0YWNrTWFwW3JdW2NdID09IFwidW5kZWZpbmVkXCIpO1xuICB9XG4gIC8vIGVuZCBvZiBjb2RlIHJlbGF0ZWQgdG8gbWFraW5nIGNvbXB1dGVyIGVkdWNhdGVkIGF0dGFja1xuXG4gIHJldHVybiB7XG4gICAgbmV3U2hpcCxcbiAgICBnZXRTaGlwRnJvbUNvb3JkcyxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHdhc0F0dGFja2VkLFxuICAgIGlzQWxsU3VuayxcbiAgICBnZXRCb2FyZE1hcCxcbiAgICByZXNldEJvYXJkLFxuICAgIGdldEF0dGFja01hcCxcbiAgICBpc1RoaXNBbGxvd2VkUGxhY2VtZW50LFxuICAgIG1vdmVTaGlwLFxuICAgIGNyZWF0ZUFsbG93ZWRQb3NpdGlvbk1hcCxcbiAgICByYW5kb21pemVCb2FyZCxcbiAgICBtYWtlRWR1Y2F0ZWRBdHRhY2ssXG4gIH07XG59O1xuXG5leHBvcnQgeyBHYW1lYm9hcmQgfTtcbiIsImltcG9ydCB7R2FtZWJvYXJkfSBmcm9tIFwiLi9nYW1lYm9hcmQuanNcIlxuXG5jb25zdCBQbGF5ZXIgPSBmdW5jdGlvbihuYW1lLCBudW1iZXIpe1xuXG4gICAgbGV0IGdhbWVib2FyZDtcbiAgICBjb25zdCBpbml0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIH0oKTtcblxuICAgIHJldHVybntcbiAgICAgICAgbmFtZSxcbiAgICAgICAgbnVtYmVyLFxuICAgICAgICBnYW1lYm9hcmQsXG4gICAgfVxufVxuXG5jb25zdCBjb21wdXRlclBsYXllciA9IGZ1bmN0aW9uKG51bWJlcil7XG5cbiAgICByZXR1cm57XG4gICAgICAgIC8vIGluaGVyaXQgcHJvcGVydGllcyBieSBjb21wb3NpdGlvblxuICAgICAgICAuLi4obmV3IFBsYXllcihcIkNvbXB1dGVyIEJvYlwiLCBudW1iZXIpKSxcbiAgICB9XG59XG5cbmNvbnN0IGh1bWFuUGxheWVyID0gZnVuY3Rpb24obmFtZSwgbnVtYmVyKXtcblxuICAgIHJldHVybntcbiAgICAgICAgLi4uKG5ldyBQbGF5ZXIobmFtZSwgbnVtYmVyKSksXG4gICAgfVxufVxuXG5leHBvcnQge1BsYXllciwgY29tcHV0ZXJQbGF5ZXIsIGh1bWFuUGxheWVyfTsiLCIvLyBjb250YWlucyBtZXRob2RzIHRvIHBvcHVsYXRlIERPTVxuLy8gcmVuZGVyIGZ1bmN0aW9ucyB3aWxsIGRpc3BsYXkgRE9NIGVsZW1lbnRzXG4vLyBidWlsZCBmdW5jdGlvbnMgd2lsbCBidWlsZCBlbGVtZW50cyBhbmQgcmV0dXJuIHRoZW0gd2l0aG91dCBkaXNwbGF5XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuY29uc3QgUmVuZGVyTWFuYWdlciA9IGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgbGV0IGJvYXJkMTtcbiAgICBsZXQgYm9hcmQyO1xuICAgIGxldCBkaWFsb2c7XG4gICAgY29uc3QgaW5pdEdhbWVSZW5kZXIgPSBmdW5jdGlvbihwbGF5ZXIxT2JqZWN0LCBwbGF5ZXIyT2JqZWN0KXtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImdhbWUgY29udGFpbmVyXCIpO1xuICAgICAgICBib2R5LmFwcGVuZChnYW1lQ29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gYnVpbGRIZWFkZXIoKTtcbiAgICAgICAgYm9hcmQxID0gYnVpbGRCb2FyZEFuZEhlYWRlcihwbGF5ZXIxT2JqZWN0Lm51bWJlciwgcGxheWVyMU9iamVjdC5uYW1lKTtcbiAgICAgICAgYm9hcmQyID0gYnVpbGRCb2FyZEFuZEhlYWRlcihwbGF5ZXIyT2JqZWN0Lm51bWJlciwgcGxheWVyMk9iamVjdC5uYW1lKTtcbiAgICAgICAgZ2FtZUNvbnRhaW5lci5hcHBlbmQoaGVhZGVyLCBib2FyZDEsIGJvYXJkMik7XG4gICAgICAgIGRpYWxvZyA9IGJ1aWxkRGlhbG9nKCk7XG4gICAgICAgIGdhbWVDb250YWluZXIuYXBwZW5kKGRpYWxvZyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGJ1aWxkSGVhZGVyID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLFwidWkgY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCB0dXJuVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBcInR1cm4gdGV4dFwiKTtcbiAgICAgICAgdHVyblRleHQudGV4dENvbnRlbnQgPSBcIidzIFR1cm5cIjtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZCh0dXJuVGV4dCk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgY29uc3QgYnVpbGRCb2FyZEFuZEhlYWRlciA9IGZ1bmN0aW9uKHBsYXllck51bWJlciwgcGxheWVyTmFtZSl7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gY3JlYXRlRWxlbWVudChcImRpdlwiLGBib2FyZCBjb250YWluZXJgKTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDEwOyBpKyspe1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLGByb3ctJHtpfWApO1xuICAgICAgICAgICAgcm93LnNldEF0dHJpYnV0ZShcInJvd1wiLCBpKTtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajwxMDsgaisrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJjb2xcIiwgaik7XG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZChzcXVhcmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9hcmQuYXBwZW5kKHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgYm9hcmQuc2V0QXR0cmlidXRlKFwicGxheWVybnVtXCIsIHBsYXllck51bWJlcik7XG4gICAgICAgIGNvbnN0IGJvYXJkQW5kSGVhZGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLGBib2FyZC1hbmQtaGVhZGVyIGNvbnRhaW5lciBwbGF5ZXItJHtwbGF5ZXJOdW1iZXJ9YCk7XG4gICAgICAgIGNvbnN0IGJvYXJkSGVhZGVyVGV4dD0gY3JlYXRlRWxlbWVudChcImgyXCIsIFwiYm9hcmQgaGVhZGVyXCIpO1xuICAgICAgICBib2FyZEhlYWRlclRleHQudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lfSdzIEJvYXJkYDtcbiAgICAgICAgYm9hcmRBbmRIZWFkZXIuYXBwZW5kKGJvYXJkSGVhZGVyVGV4dCwgYm9hcmQpO1xuICAgICAgICByZXR1cm4gYm9hcmRBbmRIZWFkZXI7XG4gICAgfVxuXG4gICAgY29uc3QgYnVpbGREaWFsb2cgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICAgICAgICBjb25zdCBkaWFsb2dIZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiaDFcIiwgXCJkaWFsb2cgaGVhZGVyXCIpO1xuICAgICAgICBkaWFsb2dIZWFkZXIudGV4dENvbnRlbnQgPSBcIlN3aXRjaCBQbGF5ZXJzIVwiXG4gICAgICAgIGNvbnN0IGRpYWxvZ1N1YnRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImRpYWxvZyBzdWJ0ZXh0XCIpO1xuICAgICAgICBkaWFsb2dTdWJ0ZXh0LnRleHRDb250ZW50ID0gXCIoY2xpY2sgd2hlbiByZWFkeSlcIjtcbiAgICAgICAgZGlhbG9nLmFwcGVuZChkaWFsb2dIZWFkZXIsIGRpYWxvZ1N1YnRleHQpO1xuICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgZGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtkaWFsb2cuY2xvc2UoKX0pO1xuICAgICAgICByZXR1cm4gZGlhbG9nO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlck5ld1NoaXAgPSBmdW5jdGlvbihwbGF5ZXJOdW1iZXIsLi4uY29vcmRzKXtcbiAgICAgICAgbGV0IGJvYXJkO1xuICAgICAgICBpZiAocGxheWVyTnVtYmVyID09MSl7XG4gICAgICAgICAgICBib2FyZCA9IGJvYXJkMTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgYm9hcmQgPSBib2FyZDI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGk9MDtcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICAgICAgICBsZXQgaXNIb3Jpem9udGFsID0gZmFsc2U7XG4gICAgICAgIGlmIChjb29yZHNbMV1bMF0gPT0gY29vcmRzWzBdWzBdKXtcbiAgICAgICAgICAgIGlzSG9yaXpvbnRhbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgW3gseV0gb2YgY29vcmRzKXtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZVRvQ2hhbmdlID0gYm9hcmQucXVlcnlTZWxlY3RvcihgZGl2LnJvdy0ke3h9ID4gZGl2Om50aC1jaGlsZCgke3krMX0pYCk7XG4gICAgICAgICAgICBzcXVhcmVUb0NoYW5nZS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICAgIHNxdWFyZVRvQ2hhbmdlLnNldEF0dHJpYnV0ZShcImxlbmd0aFwiLCBzaGlwTGVuZ3RoKTtcbiAgICAgICAgICAgIHNxdWFyZVRvQ2hhbmdlLnNldEF0dHJpYnV0ZShcImdyYWJMb2NhdGlvblwiLCBpKTtcbiAgICAgICAgICAgIHNxdWFyZVRvQ2hhbmdlLnNldEF0dHJpYnV0ZShcImhvcml6b250YWxcIiwgaXNIb3Jpem9udGFsKVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyQXR0YWNrZWQgPSBmdW5jdGlvbihzcXVhcmVET01Ob2RlKXtcbiAgICAgICAgc3F1YXJlRE9NTm9kZS5jbGFzc0xpc3QuYWRkKFwiYXR0YWNrZWRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgcmV2ZWFsRGlhbG9nV2l0aFRleHQgPSBmdW5jdGlvbihzdHJpbmcgPSBcIlwiKXtcbiAgICAgICAgY29uc3QgZGlhbG9nSGVhZGVyID0gZGlhbG9nLmZpcnN0Q2hpbGQ7XG4gICAgICAgIGlmIChzdHJpbmcgIT0gXCJcIil7XG4gICAgICAgICAgICBkaWFsb2dIZWFkZXIudGV4dENvbnRlbnQgPSBzdHJpbmc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaWFsb2dIZWFkZXIudGV4dENvbnRlbnQgPSBcIlN3aXRjaCBQbGF5ZXJzIVwiXG4gICAgICAgIH1cbiAgICAgICAgLy8gYWRkIHNjcmVlbiBzd2FwcGluZyBvdmVybGF5XG4gICAgICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJUdXJuU3dpdGNoVG8gPSBmdW5jdGlvbihwbGF5ZXJOdW1iZXIsIHBsYXllck5hbWUpe1xuICAgICAgICByZXZlYWxEaWFsb2dXaXRoVGV4dChgJHtwbGF5ZXJOYW1lfSdzIFR1cm5gKTtcbiAgICAgICAgLy8gcGxheWVyTnVtYmVyIGlzIG51bWJlciBvZiBwbGF5ZXIgd2hvc2UgdHVybiBpdCBzaG91bGQgc3dpdGNoIFRPXG4gICAgICAgIC8vIGNoYW5nZSBoZWFkZXIgdG8gXCJJdCBpcyBwbGF5ZXJze3BsYXllck51bWJlcn0ubmFtZSdzIHR1cm5cIlxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVpLmNvbnRhaW5lciAudHVybi50ZXh0XCIpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lfSdzIFR1cm5gO1xuICAgICAgICAvLyBjaGFuZ2UgYm9hcmQgaGVhZGVyIGZyb20gXCJZb3VyIEJvYXJkXCIgdG8gXCJFbmVteSBCb2FyZFwiIGFuZCB2aXMgdmVyc2FcbiAgICAgICAgY29uc3QgYm9hcmQxSGVhZGVyID0gYm9hcmQxLnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xuICAgICAgICBjb25zdCBib2FyZDJIZWFkZXIgPSBib2FyZDIucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XG4gICAgICAgIC8vIGhpZGUgc2hpcHMgZnJvbSBlbmVteSBib2FyZCBhbmQgcmV2ZWFsIHNoaXBzIG9uIHlvdXIgYm9hcmRcbiAgICAgICAgY29uc3QgYm9hcmRET00xID0gYm9hcmQxLnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQuY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBib2FyZERPTTIgPSBib2FyZDIucXVlcnlTZWxlY3RvcihcIi5ib2FyZC5jb250YWluZXJcIik7XG4gICAgICAgIGlmIChwbGF5ZXJOdW1iZXIgPT0gMSl7XG4gICAgICAgICAgICBib2FyZDJIZWFkZXIudGV4dENvbnRlbnQgPSBcIkVuZW15IEJvYXJkXCI7XG4gICAgICAgICAgICBib2FyZDFIZWFkZXIudGV4dENvbnRlbnQgPSBcIllvdXIgQm9hcmRcIjtcbiAgICAgICAgICAgIGJvYXJkRE9NMS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgICAgICAgICAgIGJvYXJkRE9NMi5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvYXJkMUhlYWRlci50ZXh0Q29udGVudCA9IFwiRW5lbXkgQm9hcmRcIjtcbiAgICAgICAgICAgIGJvYXJkMkhlYWRlci50ZXh0Q29udGVudCA9IFwiWW91ciBCb2FyZFwiO1xuICAgICAgICAgICAgYm9hcmRET00xLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgICAgICAgICAgYm9hcmRET00yLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVuZGVyIGVuZGluZyBnYW1lIChwbGF5ZXJOYW1lIGhhcyB3b24pXG4gICAgY29uc3QgcmVuZGVyRW5kR2FtZSA9IGZ1bmN0aW9uKHdpbm5lck5hbWUpe1xuICAgICAgICBjb25zdCB3aW5uZXJUZXh0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImVuZCBjb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHdpbm5lclRleHQgPSBjcmVhdGVFbGVtZW50KFwiaDFcIiwgXCJ3aW5uZXIgdGV4dFwiKTtcbiAgICAgICAgd2lubmVyVGV4dC50ZXh0Q29udGVudCA9IGBDb25ncmF0cyEgJHt3aW5uZXJOYW1lfSB3b24uYDs7XG4gICAgICAgIGNvbnN0IHBsYXlBZ2FpbkJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJyZXNldCBidXR0b25cIik7XG4gICAgICAgIHBsYXlBZ2FpbkJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUGxheSBBZ2Fpbj9cIjtcbiAgICAgICAgd2lubmVyVGV4dENvbnRhaW5lci5hcHBlbmQod2lubmVyVGV4dCwgcGxheUFnYWluQnV0dG9uKTtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgICBib2R5LmFwcGVuZCh3aW5uZXJUZXh0Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJTdGFnaW5nID0gZnVuY3Rpb24oYXR0YWNrTWFwMSwgc2hpcE1hcDEsIGF0dGFja01hcDIsIHNoaXBNYXAyKXtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51aS5jb250YWluZXIgLnR1cm4udGV4dFwiKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJTZXR1cCBUaW1lXCI7XG4gICAgICAgIHJlbmRlckJvYXJkUmVzZXQoYXR0YWNrTWFwMSwgc2hpcE1hcDEsIGJvYXJkMS5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLmNvbnRhaW5lclwiKSk7XG4gICAgICAgIHJlbmRlckJvYXJkUmVzZXQoYXR0YWNrTWFwMiwgc2hpcE1hcDIsIGJvYXJkMi5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLmNvbnRhaW5lclwiKSk7XG4gICAgICAgIHJlbmRlclNoaXBTYW1wbGVzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlQm9hcmRWaXNpYmlsaXR5ID0gZnVuY3Rpb24oYm9hcmRET00pe1xuICAgICAgICBib2FyZERPTS5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJCb2FyZFJlc2V0ID0gZnVuY3Rpb24oYXR0YWNrTWFwLCBzaGlwTWFwLCBib2FyZERPTSl7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGk7XG4gICAgICAgICAgICBjb25zdCBhdHRhY2tlZEluUm93ID0gT2JqZWN0LmtleXMoYXR0YWNrTWFwW2ldKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBJblJvdyA9IE9iamVjdC5rZXlzKHNoaXBNYXBbaV0pO1xuICAgICAgICAgICAgZm9yIChsZXQgYXR0YWNrZWQgb2YgYXR0YWNrZWRJblJvdyl7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sID0gTnVtYmVyKGF0dGFja2VkKSsxO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdlRvVW5hdHRhY2sgPSBib2FyZERPTS5xdWVyeVNlbGVjdG9yKGBkaXYucm93LSR7cm93fSBkaXY6bnRoLWNoaWxkKCR7Y29sfSlgKTtcbiAgICAgICAgICAgICAgICBkaXZUb1VuYXR0YWNrLmNsYXNzTGlzdC5yZW1vdmUoXCJhdHRhY2tlZFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgc2hpcCBvZiBzaGlwSW5Sb3cpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IE51bWJlcihzaGlwKSsxO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdlRvVW5zaGlwID0gYm9hcmRET00ucXVlcnlTZWxlY3RvcihgZGl2LnJvdy0ke3Jvd30gZGl2Om50aC1jaGlsZCgke2NvbH0pYCk7XG4gICAgICAgICAgICAgICAgZGl2VG9VbnNoaXAuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIik7XG4gICAgICAgICAgICAgICAgZGl2VG9VbnNoaXAucmVtb3ZlQXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIpO1xuICAgICAgICAgICAgICAgIGRpdlRvVW5zaGlwLnJlbW92ZUF0dHJpYnV0ZShcImdyYWJsb2NhdGlvblwiKTtcbiAgICAgICAgICAgICAgICBkaXZUb1Vuc2hpcC5yZW1vdmVBdHRyaWJ1dGUoXCJsZW5ndGhcIik7XG4gICAgICAgICAgICAgICAgZGl2VG9VbnNoaXAucmVtb3ZlQXR0cmlidXRlKFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclNoaXBTYW1wbGVzID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgaGlkZGVuQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImhpZGRlbiBzYW1wbGVzXCIpO1xuICAgICAgICBjb25zdCBob3Jpem9udGFsU2hpcHMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2hpcHMgaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgY29uc3QgdmVydGljYWxTaGlwcyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzaGlwcyB2ZXJ0aWNhbFwiKTtcbiAgICAgICAgaG9yaXpvbnRhbFNoaXBzLmFwcGVuZChidWlsZFNoaXBPZkxlbmd0aCgyKSwgYnVpbGRTaGlwT2ZMZW5ndGgoMyksXG4gICAgICAgIGJ1aWxkU2hpcE9mTGVuZ3RoKDQpLCBidWlsZFNoaXBPZkxlbmd0aCg1KSk7XG4gICAgICAgIHZlcnRpY2FsU2hpcHMuYXBwZW5kKGJ1aWxkU2hpcE9mTGVuZ3RoKDIpLCBidWlsZFNoaXBPZkxlbmd0aCgzKSxcbiAgICAgICAgYnVpbGRTaGlwT2ZMZW5ndGgoNCksIGJ1aWxkU2hpcE9mTGVuZ3RoKDUpKTtcbiAgICAgICAgaGlkZGVuQ29udGFpbmVyLmFwcGVuZChob3Jpem9udGFsU2hpcHMsdmVydGljYWxTaGlwcyk7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxuICAgICAgICBib2R5LmFwcGVuZChoaWRkZW5Db250YWluZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkU2hpcE9mTGVuZ3RoID0gZnVuY3Rpb24obGVuZ3RoKXtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLFwic2hpcCBjb250YWluZXJcIik7XG4gICAgICAgIGNvbnRhaW5lci5pZCA9IGBsZW5ndGgtJHtsZW5ndGh9YDtcbiAgICAgICAgZm9yIChsZXQgaSA9MDsgaTxsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBwYXJ0ID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQocGFydCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJTdGFnaW5nQnV0dG9ucyA9IGZ1bmN0aW9uKGJvYXJkRE9NKXtcbiAgICAgICAgY29uc3QgYnV0dG9uQXJlYSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcImJ1dHRvbiBjb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIixcInN1Ym1pdCBzdGFnaW5nXCIpO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIkxvY2sgaW4gcG9zaXRpb25zIVwiO1xuICAgICAgICBjb25zdCBybmdCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwicmFuZG9taXplIGJ1dHRvblwiKTtcbiAgICAgICAgcm5nQnV0dG9uLnRleHRDb250ZW50ID0gXCJSYW5kb21pemVcIlxuICAgICAgICBidXR0b25BcmVhLmFwcGVuZChidXR0b24sIHJuZ0J1dHRvbik7XG4gICAgICAgIGJvYXJkRE9NLnBhcmVudE5vZGUuYXBwZW5kKGJ1dHRvbkFyZWEpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlck1vdmVTaGlwID0gZnVuY3Rpb24oW29sZFhTdGFydCwgb2xkWVN0YXJ0XSwgW25ld1hTdGFydCwgbmV3WVN0YXJ0XSwgc2hpcExlbmd0aCwgaXNIb3Jpem9udGFsLCBib2FyZERPTU5vZGUpe1xuICAgICAgICBpZiAob2xkWFN0YXJ0ID09IG5ld1hTdGFydCAmJiBvbGRZU3RhcnQgPT0gbmV3WVN0YXJ0KXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNIb3Jpem9udGFsID09IFwidHJ1ZVwiKXtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxzaGlwTGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZVRvUmVtb3ZlID0gYm9hcmRET01Ob2RlLnF1ZXJ5U2VsZWN0b3IoYC5yb3ctJHtvbGRYU3RhcnR9IGRpdjpudGgtY2hpbGQoJHtvbGRZU3RhcnQraSsxfSlgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBncmFibG9jYXRpb24gPSBzcXVhcmVUb1JlbW92ZS5nZXRBdHRyaWJ1dGUoXCJncmFibG9jYXRpb25cIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUucmVtb3ZlQXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLnJlbW92ZUF0dHJpYnV0ZShcImxlbmd0aFwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5yZW1vdmVBdHRyaWJ1dGUoXCJncmFibG9jYXRpb25cIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUucmVtb3ZlQXR0cmlidXRlKFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKVxuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZVRvQWRkID0gYm9hcmRET01Ob2RlLnF1ZXJ5U2VsZWN0b3IoYC5yb3ctJHtuZXdYU3RhcnR9IGRpdjpudGgtY2hpbGQoJHtuZXdZU3RhcnQraSsxfSlgKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuc2V0QXR0cmlidXRlKFwibGVuZ3RoXCIsIHNoaXBMZW5ndGgpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLnNldEF0dHJpYnV0ZShcImdyYWJsb2NhdGlvblwiLCBncmFibG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLnNldEF0dHJpYnV0ZShcImhvcml6b250YWxcIiwgaXNIb3Jpem9udGFsKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHNoaXBMZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlVG9SZW1vdmUgPSBib2FyZERPTU5vZGUucXVlcnlTZWxlY3RvcihgLnJvdy0ke29sZFhTdGFydCtpfSBkaXY6bnRoLWNoaWxkKCR7b2xkWVN0YXJ0KzF9KWApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyYWJsb2NhdGlvbiA9IHNxdWFyZVRvUmVtb3ZlLmdldEF0dHJpYnV0ZShcImdyYWJsb2NhdGlvblwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5yZW1vdmVBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUucmVtb3ZlQXR0cmlidXRlKFwibGVuZ3RoXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLnJlbW92ZUF0dHJpYnV0ZShcImdyYWJsb2NhdGlvblwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5yZW1vdmVBdHRyaWJ1dGUoXCJob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpXG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlVG9BZGQgPSBib2FyZERPTU5vZGUucXVlcnlTZWxlY3RvcihgLnJvdy0ke25ld1hTdGFydCtpfSBkaXY6bnRoLWNoaWxkKCR7bmV3WVN0YXJ0KzF9KWApO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5zZXRBdHRyaWJ1dGUoXCJsZW5ndGhcIiwgc2hpcExlbmd0aCk7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuc2V0QXR0cmlidXRlKFwiZ3JhYmxvY2F0aW9uXCIsIGdyYWJsb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuc2V0QXR0cmlidXRlKFwiaG9yaXpvbnRhbFwiLCBpc0hvcml6b250YWwpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVuZGVyaW5nIHByZWdhbWVcbiAgICBjb25zdCByZW5kZXJQcmVnYW1lID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgICBjb25zdCBwcmVnYW1lQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLFwicHJlZ2FtZSBjb250YWluZXJcIik7XG4gICAgICAgIGJvZHkuYXBwZW5kKHByZWdhbWVDb250YWluZXIpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGJ1aWxkUHJlZ2FtZVRpdGxlKCk7XG4gICAgICAgIGNvbnN0IGdhbWVTZWxlY3Rpb25CdXR0b25zID0gYnVpbGRTZWxlY3RCdXR0b25zKCk7XG4gICAgICAgIHByZWdhbWVDb250YWluZXIuYXBwZW5kKHRpdGxlLCBnYW1lU2VsZWN0aW9uQnV0dG9ucyk7XG4gICAgfVxuXG4gICAgY29uc3QgYnVpbGRQcmVnYW1lVGl0bGUgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBcInRpdGxlXCIpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQmF0dGxlc2hpcFwiO1xuICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgfVxuXG4gICAgY29uc3QgYnVpbGRTZWxlY3RCdXR0b25zID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLFwiYnV0dG9uIGNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3Qgc2luZ2xlUGxheWVyQnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLFwic2luZ2xlIGJ1dHRvblwiKTtcbiAgICAgICAgc2luZ2xlUGxheWVyQnV0dG9uLnRleHRDb250ZW50ID0gXCJTaW5nbGUgUGxheWVyXCJcbiAgICAgICAgY29uc3QgZG91YmxlUGxheWVyQnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcImRvdWJsZSBidXR0b25cIik7XG4gICAgICAgIGRvdWJsZVBsYXllckJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSG90c2VhdCBUd28gUGxheWVyXCJcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChzaW5nbGVQbGF5ZXJCdXR0b24sIGRvdWJsZVBsYXllckJ1dHRvbik7XG4gICAgICAgIHJldHVybiBidXR0b25Db250YWluZXI7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBzaG91bGQgcmVuZGVyIGFmdGVyIGdhbWUgc2VsZWN0aW9uIGJ1dHRvblxuICAgIGNvbnN0IHJlbmRlclBsYXllck5hbWVGb3JtID0gZnVuY3Rpb24oaXNTaW5nbGVQbGF5ZXIpe1xuICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImZvcm1cIixcImZvcm0gY29udGFpbmVyXCIpO1xuICAgICAgICBpZiAoZm9ybUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LmNvbnRhaW5lclwiKSl7XG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIucXVlcnlTZWxlY3RvcihcIi5pbnB1dC5jb250YWluZXJcIikpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImZvcm1cIixcImlucHV0IGNvbnRhaW5lclwiKTtcbiAgICAgICAgaWYgKGlzU2luZ2xlUGxheWVyKXtcbiAgICAgICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZChidWlsZE5hbWVJbnB1dChcIldoYXQgaXMgeW91ciBuYW1lP1wiKSk7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZChidWlsZE5hbWVJbnB1dChcIkVudGVyIHBsYXllciAxIG5hbWUuLi5cIikpO1xuICAgICAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kKGJ1aWxkTmFtZUlucHV0KFwiRW50ZXIgcGxheWVyIDIgbmFtZS4uLlwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmQoaW5wdXRDb250YWluZXIpO1xuICAgICAgICBjb25zdCBwcmVnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVnYW1lLmNvbnRhaW5lclwiKTtcbiAgICAgICAgcHJlZ2FtZUNvbnRhaW5lci5hcHBlbmQoZm9ybUNvbnRhaW5lcik7XG5cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJGb3JtQnV0dG9uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS5jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJmb3JtIHN1Ym1pdFwiKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJMZXQncyBQbGF5IVwiO1xuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZChidXR0b24pO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkTmFtZUlucHV0ID0gZnVuY3Rpb24ocGxhY2Vob2xkZXJTdHJpbmcpe1xuICAgICAgICBjb25zdCBuYW1lSW5wdXQgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJuYW1lIGlucHV0XCIpO1xuICAgICAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLHBsYWNlaG9sZGVyU3RyaW5nKTtcbiAgICAgICAgcmV0dXJuIG5hbWVJbnB1dDtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24oZWxlbWVudFR5cGUsIGNsYXNzU3RyaW5nID0gdW5kZWZpbmVkKXtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcbiAgICAgICAgaWYgKGNsYXNzU3RyaW5nICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NTdHJpbmcuc3BsaXQoXCIgXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm57XG4gICAgICAgIGluaXRHYW1lUmVuZGVyLFxuICAgICAgICByZW5kZXJOZXdTaGlwLFxuICAgICAgICByZW5kZXJBdHRhY2tlZCxcbiAgICAgICAgcmVuZGVyVHVyblN3aXRjaFRvLFxuICAgICAgICByZW5kZXJFbmRHYW1lLFxuICAgICAgICByZW5kZXJTdGFnaW5nLFxuICAgICAgICByZW5kZXJTaGlwU2FtcGxlcyxcbiAgICAgICAgcmVuZGVyTW92ZVNoaXAsXG4gICAgICAgIHJlbmRlclN0YWdpbmdCdXR0b25zLFxuICAgICAgICB0b2dnbGVCb2FyZFZpc2liaWxpdHksXG4gICAgICAgIHJlbmRlckJvYXJkUmVzZXQsXG4gICAgICAgIHJldmVhbERpYWxvZ1dpdGhUZXh0LFxuICAgICAgICByZW5kZXJQcmVnYW1lLFxuICAgICAgICByZW5kZXJQbGF5ZXJOYW1lRm9ybSxcbiAgICAgICAgcmVuZGVyRm9ybUJ1dHRvbixcbiAgICB9XG5cbn0oKTtcblxuZXhwb3J0IHtSZW5kZXJNYW5hZ2VyfTsiLCJjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgpe1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICB9XG5cbiAgICBoaXQoKXtcbiAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgfVxuXG4gICAgaXNTdW5rKCl7XG4gICAgICAgIHJldHVybiAodGhpcy5oaXRzID49IHRoaXMubGVuZ3RoKVxuICAgIH1cbn1cblxuZXhwb3J0IHtTaGlwfTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBtb2R1bGUgdG8gbWFuYWdlIGdhbWUgdXNpbmcgZXZlbnQgbGlzdGVuZXJzIHRvIGludGVyYWN0IHdpdGggb2JqZWN0c1xuLy8gY2FsbHMgbWV0aG9kcyBpbiByZW5kZXIuanMgdG8gY2hhbmdlIERPTVxuLy8gcmVhbGlzdGljYWxseSBkb2VzIG5vdCBleHBvcnQgYW55dGhpbmcgc2luY2UgaXQgaXMgYSBkcml2ZXJcblxuaW1wb3J0IHtodW1hblBsYXllciwgY29tcHV0ZXJQbGF5ZXJ9IGZyb20gXCIuL3BsYXllci5qc1wiXG5pbXBvcnQge1JlbmRlck1hbmFnZXJ9IGZyb20gXCIuL3JlbmRlci5qc1wiXG5cbmNvbnN0IEdhbWVNYW5hZ2VyID0gZnVuY3Rpb24oKXtcblxuICAgIGNvbnN0IGFkZE5ld1NoaXAgPSBmdW5jdGlvbihwbGF5ZXIsIC4uLmNvb3Jkcyl7XG4gICAgICAgIHBsYXllci5nYW1lYm9hcmQubmV3U2hpcCguLi5jb29yZHMpO1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlck5ld1NoaXAocGxheWVyLm51bWJlciwuLi5jb29yZHMpO1xuICAgIH1cblxuICAgIC8vIHBhc3NlcyB0dXJuIHRvIHBsYXllciAxIGlmIG51bWJlciA9IDFcbiAgICAvLyBpZiBpdCBpcyBwbGF5ZXIgMSdzIHR1cm4sIHRoZW4gYm9hcmQgMiBzaG91bGQgYmUgQUNUSVZFXG4gICAgY29uc3QgcGFzc1R1cm5UbyA9IGZ1bmN0aW9uKHBsYXllck51bWJlcil7XG4gICAgICAgIGlmIChwbGF5ZXJOdW1iZXIgPT0gMSl7XG4gICAgICAgICAgICBhY3RpdmF0ZUV2ZW50TGlzdGVuZXIocGxheWVycy5wbGF5ZXIyLmJvYXJkRE9NKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgYWN0aXZhdGVFdmVudExpc3RlbmVyKHBsYXllcnMucGxheWVyMS5ib2FyZERPTSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGxheWVyTmFtZSA9IE9iamVjdC52YWx1ZXMocGxheWVycylbcGxheWVyTnVtYmVyLTFdLm5hbWU7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3BsYXllck5hbWV9J3MgVHVybmApO1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlclR1cm5Td2l0Y2hUbyhwbGF5ZXJOdW1iZXIsIHBsYXllck5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGJvYXJkRE9NTm9kZSl7XG4gICAgICAgIGJvYXJkRE9NTm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQm9hcmRDbGljayk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQm9hcmRDbGljayA9IGFzeW5jIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgbGV0IHBsYXllck51bWJlciA9IHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwicGxheWVybnVtXCIpO1xuICAgICAgICBsZXQgeSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjb2xcIik7XG4gICAgICAgIGxldCB4ID0gdGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwicm93XCIpO1xuICAgICAgICBsZXQgcGxheWVyT2JqZWN0ID0gcGxheWVyTnVtYmVyID09IDEgPyBwbGF5ZXJzLnBsYXllcjEgOiBwbGF5ZXJzLnBsYXllcjI7XG4gICAgICAgIHBsYXllck9iamVjdC5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbeCx5XSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBSZWNlaXZlZCBhdHRhY2sgYXQgKCR7eH0sJHt5fSkgZm9yIHBsYXllciAke3BsYXllck51bWJlcn1gKTtcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJBdHRhY2tlZCh0YXJnZXQpO1xuICAgICAgICBwbGF5ZXJPYmplY3QuYm9hcmRET00ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUJvYXJkQ2xpY2spO1xuICAgICAgICBhd2FpdCBzaG9ydFNsZWVwKCk7XG4gICAgICAgIGlmIChpc1NpbmdsZVBsYXllcil7XG4gICAgICAgICAgICBhd2FpdCBlbXVsYXRlQ29tcHV0ZXJUdXJuKCk7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyT2JqZWN0LmdhbWVib2FyZC5pc0FsbFN1bmsoKSl7XG4gICAgICAgICAgICBlbmRHYW1lKHBsYXllck51bWJlcik7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHBhc3NUdXJuVG8ocGxheWVyTnVtYmVyKTsgLy8gV2UgcGFzcyB0dXJuIHRvIHBsYXllcidzIGJvYXJkIHdlIGp1c3QgY2xpY2tlZFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZW11bGF0ZUNvbXB1dGVyVHVybiA9IGFzeW5jIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRW11bGF0aW5nIGNvbXB1dGVyJ3MgdHVyblwiKVxuICAgICAgICBjb25zdCBbcixjXSA9IHBsYXllcnMucGxheWVyMi5nYW1lYm9hcmQubWFrZUVkdWNhdGVkQXR0YWNrKHBsYXllcnMucGxheWVyMSk7XG4gICAgICAgIGNvbnN0IGhpdFRhcmdldCA9IHBsYXllcnMucGxheWVyMS5ib2FyZERPTS5xdWVyeVNlbGVjdG9yKGAucm93LSR7cn0gZGl2Om50aC1jaGlsZCgke2MrMX0pYClcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJBdHRhY2tlZChoaXRUYXJnZXQpO1xuICAgICAgICBpZiAocGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5pc0FsbFN1bmsoKSl7XG4gICAgICAgICAgICBhd2FpdCBzaG9ydFNsZWVwKCk7XG4gICAgICAgICAgICBlbmRHYW1lKDEpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBhY3RpdmF0ZUV2ZW50TGlzdGVuZXIocGxheWVycy5wbGF5ZXIyLmJvYXJkRE9NKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGluaXRQbGF5ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gYXNzaWduIGV2ZW50IGxpc3RlbmVyIGZvciBhdHRhY2tzXG4gICAgICAgIC8vIGxhdGVyIG1ha2UgZmlyc3QgdHVybiByYW5kb20gb3IgY2hvc2VuXG4gICAgICAgIHBsYXllcnMucGxheWVyMi5ib2FyZERPTS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgICAgICAgcGFzc1R1cm5UbygxKTtcbiAgICAgICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcbiAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuXG4gICAgbGV0IHBsYXllcnM7XG4gICAgbGV0IGlzU2luZ2xlUGxheWVyO1xuICAgIGNvbnN0IGluaXRHYW1lID0gZnVuY3Rpb24ocGxheWVyMU5hbWUgPSBcIlBsYXllciAxXCIsIHBsYXllcjJOYW1lID0gXCJQbGF5ZXIgMlwiKXtcbiAgICAgICAgY29uc3QgcGxheWVyMSA9IG5ldyBodW1hblBsYXllcihwbGF5ZXIxTmFtZSwgMSk7XG4gICAgICAgIGxldCBwbGF5ZXIyO1xuICAgICAgICBpZiAocGxheWVyMk5hbWUgPT0gZmFsc2Upe1xuICAgICAgICAgICAgcGxheWVyMiA9IG5ldyBjb21wdXRlclBsYXllcigyKTtcbiAgICAgICAgICAgIGlzU2luZ2xlUGxheWVyID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgcGxheWVyMiA9IG5ldyBodW1hblBsYXllcihwbGF5ZXIyTmFtZSwgMik7XG4gICAgICAgICAgICBpc1NpbmdsZVBsYXllciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFJlbmRlck1hbmFnZXIuaW5pdEdhbWVSZW5kZXIocGxheWVyMSwgcGxheWVyMik7XG4gICAgICAgIGNvbnN0IGJvYXJkMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtYW5kLWhlYWRlci5wbGF5ZXItMSAuYm9hcmQuY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBib2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLWFuZC1oZWFkZXIucGxheWVyLTIgLmJvYXJkLmNvbnRhaW5lclwiKTtcbiAgICAgICAgcGxheWVyMS5ib2FyZERPTSA9IGJvYXJkMTtcbiAgICAgICAgcGxheWVyMi5ib2FyZERPTSA9IGJvYXJkMjtcbiAgICAgICAgLy8gZWFjaCBwbGF5ZXIgaGFzIDUgc2hpcHMgb2Ygc2l6ZSAyLCAzLCAzLCA0LCA1XG4gICAgICAgIHBsYXllcnMgPSB7cGxheWVyMSwgcGxheWVyMn07XG4gICAgICAgIGVudGVyR2FtZVN0YWdpbmcoKTtcbiAgICAgICAgLy9qdXN0IGZvciB0ZXN0aW5nIVxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVpLmNvbnRhaW5lclwiKTtcbiAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBlbmRHYW1lKDEpKVxuICAgIH07XG5cbiAgICAvLyBwbGF5ZXIgd2l0aCBwbGF5ZXJOdW1iZXIgbG9zdFxuICAgIGNvbnN0IGVuZEdhbWUgPSBmdW5jdGlvbihwbGF5ZXJOdW1iZXIpe1xuICAgICAgICBsZXQgd2lubmVyTmFtZTtcbiAgICAgICAgaWYgKHBsYXllck51bWJlciA9PTEpe1xuICAgICAgICAgICAgd2lubmVyTmFtZSA9IHBsYXllcnMucGxheWVyMi5uYW1lO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICB3aW5uZXJOYW1lID0gcGxheWVycy5wbGF5ZXIxLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJFbmRHYW1lKHdpbm5lck5hbWUpO1xuICAgICAgICBhY3RpdmF0ZVJlcGxheUJ1dHRvbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlUmVwbGF5QnV0dG9uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgcmVwbGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5lbmQuY29udGFpbmVyIGJ1dHRvblwiKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVwbGF5QnV0dG9uKTtcbiAgICAgICAgcmVwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlbnRlckdhbWVTdGFnaW5nKTtcbiAgICB9XG5cbiAgICAvLyBTVEFSVCBPRiBDT0RFIFJFTEFURUQgVE8gR0FNRSBTVEFHSU5HXG4gICAgY29uc3QgZW50ZXJHYW1lU3RhZ2luZyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIGFjdGl2YXRlIGRyYWcgYW5kIGRyb3Agb2Ygc2hpcHMgdG8gY2hvb3NlIHNoaXAgbG9jYXRpb24gdXNpbmcgSFRNTCBkcmFnIGFuZCBkcm9wIEFQSSFcbiAgICAgICAgY29uc29sZS5sb2coXCJFbnRlcmluZyBuZXcgZ2FtZSBzdGFnaW5nIVwiKVxuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlclN0YWdpbmcoXG4gICAgICAgICAgICBwbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLmdldEF0dGFja01hcCgpLFxuICAgICAgICAgICAgcGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5nZXRCb2FyZE1hcCgpLFxuICAgICAgICAgICAgcGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5nZXRBdHRhY2tNYXAoKSxcbiAgICAgICAgICAgIHBsYXllcnMucGxheWVyMi5nYW1lYm9hcmQuZ2V0Qm9hcmRNYXAoKVxuICAgICAgICApO1xuICAgICAgICBwbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgICAgICAgcGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5yZXNldEJvYXJkKCk7XG4gICAgICAgIGFjdGl2YXRlU3RhZ2luZyhwbGF5ZXJzLnBsYXllcjEpXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVTdGFnaW5nID0gZnVuY3Rpb24ocGxheWVyKXtcbiAgICAgICAgY29uc3QgYm9hcmQxID0gcGxheWVyLmJvYXJkRE9NO1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnRvZ2dsZUJvYXJkVmlzaWJpbGl0eShib2FyZDEpO1xuICAgICAgICByZW5kZXJEcmFnZ2FibGVTaGlwc1RvU3RhZ2UocGxheWVyKTtcbiAgICAgICAgYWN0aXZhdGVEcm9wQW5kRHJhZ1N0YXJ0SGFuZGxlcihib2FyZDEpO1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlclN0YWdpbmdCdXR0b25zKGJvYXJkMSk7XG4gICAgICAgIGFjdGl2YXRlU3RhZ2luZ0J1dHRvbnMocGxheWVyKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJEcmFnZ2FibGVTaGlwc1RvU3RhZ2UgPSBmdW5jdGlvbihwbGF5ZXIpe1xuICAgICAgICBhZGROZXdTaGlwV2l0aERyYWdnaW5nKHBsYXllcixbMCwwXSxbMCwxXSlcbiAgICAgICAgYWRkTmV3U2hpcFdpdGhEcmFnZ2luZyhwbGF5ZXIsWzMsM10sWzQsM10sWzUsM10pO1xuICAgICAgICBhZGROZXdTaGlwV2l0aERyYWdnaW5nKHBsYXllcixbNyw3XSxbOCw3XSxbOSw3XSk7XG4gICAgICAgIGFkZE5ld1NoaXBXaXRoRHJhZ2dpbmcocGxheWVyLFswLDNdLCBbMCw0XSxbMCw1XSxbMCw2XSk7XG4gICAgICAgIGFkZE5ld1NoaXBXaXRoRHJhZ2dpbmcocGxheWVyLFs1LDVdLCBbNiw1XSxbNyw1XSxbOCw1XSxbOSw1XSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkTmV3U2hpcFdpdGhEcmFnZ2luZyA9IGZ1bmN0aW9uKHBsYXllciwgLi4uY29vcmRzKXtcbiAgICAgICAgYWRkTmV3U2hpcChwbGF5ZXIsIC4uLmNvb3Jkcyk7XG4gICAgICAgIHNldFNwZWNpZmljRHJhZ2dhYmxlKHBsYXllci5ib2FyZERPTSwgLi4uY29vcmRzKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRTcGVjaWZpY0RyYWdnYWJsZSA9IGZ1bmN0aW9uKGJvYXJkRE9NLCAuLi5jb29yZHMpe1xuICAgICAgICBmb3IgKGxldCBbeCx5XSBvZiBjb29yZHMpe1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gYm9hcmRET00ucXVlcnlTZWxlY3RvcihgLnJvdy0ke3h9IGRpdjpudGgtY2hpbGQoJHt5KzF9KWApO1xuICAgICAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlU3RhZ2luZ0J1dHRvbnMgPSBmdW5jdGlvbihwbGF5ZXIpe1xuICAgICAgICBjb25zdCBib2FyZERPTSA9IHBsYXllci5ib2FyZERPTTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gYm9hcmRET00ubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0Q2hpbGQ7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY29tcGxldGVTdGFnaW5nKGJvYXJkRE9NKSlcbiAgICAgICAgY29uc3Qgcm5nQnV0dG9uID0gYnV0dG9uLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgcm5nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiByYW5kb21pemVCb2FyZChwbGF5ZXIpKTtcbiAgICB9XG5cbiAgICBjb25zdCByYW5kb21pemVCb2FyZCA9IGZ1bmN0aW9uKHBsYXllcil7XG4gICAgICAgIFJlbmRlck1hbmFnZXIucmVuZGVyQm9hcmRSZXNldChwbGF5ZXIuZ2FtZWJvYXJkLmdldEF0dGFja01hcCgpLFxuICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLmdldEJvYXJkTWFwKCksIHBsYXllci5ib2FyZERPTSk7XG4gICAgICAgIGNvbnN0IHJhbmRvbUNvb3JkcyA9IHBsYXllci5nYW1lYm9hcmQucmFuZG9taXplQm9hcmQoKTtcbiAgICAgICAgLy8gcmFuZG9tQ29vcmRzIGlzIHtjb29yZHMxLCBjb29yZHMyLCAuLi4gY29vcmRzNX0gd2hlcmUgZWFjaCBjb29yZHMgaXMgYW4gYXJyYXkgb2YgW3gseV1zXG4gICAgICAgIGZvciAobGV0IGNvb3Jkc0FycmF5IG9mIE9iamVjdC52YWx1ZXMocmFuZG9tQ29vcmRzKSl7XG4gICAgICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlck5ld1NoaXAocGxheWVyLm51bWJlciwgLi4uY29vcmRzQXJyYXkpO1xuICAgICAgICAgICAgc2V0U3BlY2lmaWNEcmFnZ2FibGUocGxheWVyLmJvYXJkRE9NLCAuLi5jb29yZHNBcnJheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZVN0YWdpbmcgPSBhc3luYyBmdW5jdGlvbihib2FyZERPTSl7XG4gICAgICAgIGRlYWN0aXZhdGVTdGFnaW5nKGJvYXJkRE9NKTtcbiAgICAgICAgaWYgKGJvYXJkRE9NLmdldEF0dHJpYnV0ZShcInBsYXllcm51bVwiKSA9PSBcIjFcIiAmJiAhaXNTaW5nbGVQbGF5ZXIpe1xuICAgICAgICAgICAgUmVuZGVyTWFuYWdlci5yZXZlYWxEaWFsb2dXaXRoVGV4dChgTm93IGxldCAke3BsYXllcnMucGxheWVyMi5uYW1lfSBzZXQgdXAuYCk7XG4gICAgICAgICAgICBhY3RpdmF0ZVN0YWdpbmcocGxheWVycy5wbGF5ZXIyKTtcbiAgICAgICAgfSBlbHNlIGlmICghaXNTaW5nbGVQbGF5ZXIpe1xuICAgICAgICAgICAgaW5pdFBsYXkoKTtcbiAgICAgICAgICAgIFJlbmRlck1hbmFnZXIucmV2ZWFsRGlhbG9nV2l0aFRleHQoYExldCdzIHBsYXkhICR7cGxheWVycy5wbGF5ZXIxLm5hbWV9IGZpcnN0LmApO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAvLyB0aGlzIGNhc2UgaXMgd2hlbiBpdCBpcyBhIHNpbmdsZSBwbGF5ZXIgZ2FtZVxuICAgICAgICAgICAgcmFuZG9taXplQm9hcmQocGxheWVycy5wbGF5ZXIyKTtcbiAgICAgICAgICAgIGluaXRQbGF5KCk7XG4gICAgICAgICAgICBSZW5kZXJNYW5hZ2VyLnJldmVhbERpYWxvZ1dpdGhUZXh0KGBMZXQncyBwbGF5ISBZb3VyIHR1cm4gZmlyc3QuYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkZWFjdGl2YXRlU3RhZ2luZyA9IGZ1bmN0aW9uKGJvYXJkRE9NKXtcbiAgICAgICAgUmVuZGVyTWFuYWdlci50b2dnbGVCb2FyZFZpc2liaWxpdHkoYm9hcmRET00pO1xuICAgICAgICBjb25zdCBidXR0b25BcmVhID0gYm9hcmRET00ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBidXR0b25BcmVhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYnV0dG9uQXJlYSk7XG4gICAgICAgIGNvbnN0IHJvd3MgPSBib2FyZERPTS5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDEwOyBpKyspe1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gcm93c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZXMgPSByb3cuY2hpbGRyZW47XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8MTA7IGorKyl7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gc3F1YXJlc1tqXTtcbiAgICAgICAgICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIG9uZHJhZ292ZXJIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZHJvcEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGRyYWdzdGFydEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5yZW1vdmVBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0YXJnZXQgaXMgPGRpdiBjb2w9XCJcIj4gKGVnOiBzcXVhcmUpXG4gICAgY29uc3QgZHJhZ3N0YXJ0SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgY29uc29sZS5sb2coXCJkcmFnIGV2ZW50IHRyaWdnZXJlZFwiKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBsZXQgc2hpcExlbmd0aCA9IE51bWJlcih0YXJnZXQuZ2V0QXR0cmlidXRlKFwibGVuZ3RoXCIpKTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJzaGlwTGVuZ3RoXCIsIHNoaXBMZW5ndGgpO1xuICAgICAgICBsZXQgZ3JhYkxvY2F0aW9uID0gTnVtYmVyKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJncmFibG9jYXRpb25cIikpO1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImdyYWJMb2NhdGlvblwiLCBncmFiTG9jYXRpb24pO1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImhvcml6b250YWxcIiwgdGFyZ2V0LmdldEF0dHJpYnV0ZShcImhvcml6b250YWxcIikpO1xuICAgICAgICBsZXQgc3RhcnRSb3cgPSBOdW1iZXIodGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwicm93XCIpKTtcbiAgICAgICAgbGV0IHN0YXJ0Q29sID0gTnVtYmVyKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjb2xcIikpO1xuICAgICAgICBsZXQgaXNIb3Jpem9udGFsID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImhvcml6b250YWxcIik7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwic3RhcnRSb3dcIiwgc3RhcnRSb3cpO1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInN0YXJ0Q29sXCIsIHN0YXJ0Q29sKTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJpc0hvcml6b250YWxcIiwgaXNIb3Jpem9udGFsKVxuICAgICAgICBjb25zdCB3aWR0aE9mRGl2ID0gMjA7XG4gICAgICAgIGNvbnN0IHdpZHRoT2ZHYXAgPSAxO1xuICAgICAgICAvLyBpZiBncmFibG9jYXRpb24gPSAwLCBkb24ndCBhZGQgYW55dGhpbmdcbiAgICAgICAgLy8gaWYgZ3JhYmxvY2F0aW9uID0gMSwgYWRkIDEgZ2FwIGFuZCAxIGRpdlxuICAgICAgICAvLyBpZiBncmFibG9jYXRpb24gPSAyLCBhZGQgMiBnYXBzIGFuZCAyIGRpdnNcbiAgICAgICAgbGV0IGFkZE9mZnNldFggPSAwO1xuICAgICAgICBsZXQgYWRkT2Zmc2V0WSA9IDA7XG4gICAgICAgIGxldCBkcmFnSW1hZ2VOb2RlO1xuICAgICAgICBpZiAoaXNIb3Jpem9udGFsID09IFwidHJ1ZVwiKXtcbiAgICAgICAgICAgIGRyYWdJbWFnZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaGlkZGVuLnNhbXBsZXMgLnNoaXBzLmhvcml6b250YWwgI2xlbmd0aC0ke3NoaXBMZW5ndGh9YCk7XG4gICAgICAgICAgICBhZGRPZmZzZXRYID0gKGdyYWJMb2NhdGlvbiAqICh3aWR0aE9mRGl2K3dpZHRoT2ZHYXApKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgZHJhZ0ltYWdlTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5oaWRkZW4uc2FtcGxlcyAuc2hpcHMudmVydGljYWwgI2xlbmd0aC0ke3NoaXBMZW5ndGh9YCk7XG4gICAgICAgICAgICBhZGRPZmZzZXRZID0gKGdyYWJMb2NhdGlvbiAqICh3aWR0aE9mRGl2K3dpZHRoT2ZHYXApKVxuICAgICAgICB9XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoZHJhZ0ltYWdlTm9kZSxldmVudC5vZmZzZXRYICsgYWRkT2Zmc2V0WCxldmVudC5vZmZzZXRZK2FkZE9mZnNldFkpO1xuICAgICAgICAvLyBkeW5hbWljYWxseSBhbGxvdyB3aGVyZSB3ZSBjYW4gZHJvcCB3aXRoIG9uZHJhZ292ZXIgYXR0cmlidXRlXG4gICAgICAgIGNvbnN0IHBsYXllck51bSA9IHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwicGxheWVybnVtXCIpO1xuICAgICAgICBsZXQgcGxheWVyVmFyO1xuICAgICAgICBpZiAocGxheWVyTnVtID09MSl7XG4gICAgICAgICAgICBwbGF5ZXJWYXIgPSBwbGF5ZXJzLnBsYXllcjE7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHBsYXllclZhciA9IHBsYXllcnMucGxheWVyMjtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInBsYXllcm51bVwiLCBwbGF5ZXJOdW0pO1xuICAgICAgICBjb25zdCBzaGlwT2JqZWN0ID0gcGxheWVyVmFyLmdhbWVib2FyZC5nZXRTaGlwRnJvbUNvb3Jkcyhbc3RhcnRSb3csIHN0YXJ0Q29sXSk7XG4gICAgICAgIHBsYXllclZhci5nYW1lYm9hcmQuY3JlYXRlQWxsb3dlZFBvc2l0aW9uTWFwKHNoaXBPYmplY3QsIGlzSG9yaXpvbnRhbCwgZ3JhYkxvY2F0aW9uKTtcbiAgICAgICAgYWN0aXZhdGVPbmRyYWdvdmVyKHBsYXllclZhcik7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVPbmRyYWdvdmVyID0gZnVuY3Rpb24ocGxheWVyKXtcbiAgICAgICAgY29uc3Qgcm93cyA9IHBsYXllci5ib2FyZERPTS5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDEwOyBpKyspe1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gcm93c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZXMgPSByb3cuY2hpbGRyZW47XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8MTA7IGorKyl7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gc3F1YXJlc1tqXTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGAke3BsYXllci5nYW1lYm9hcmQuaXNUaGlzQWxsb3dlZFBsYWNlbWVudChbaSxqXSl9YClcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5pc1RoaXNBbGxvd2VkUGxhY2VtZW50KFtpLGpdKSl7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgb25kcmFnb3ZlckhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBkcmFnb3ZlciBhbGxvd2VkIG9uIFske2l9LCAke2p9XWApXG4gICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIG9uZHJhZ292ZXJIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgZHJhZ292ZXIgbm90IGFsbG93ZWQgb24gWyR7aX0sICR7an1dYClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZURyb3BBbmREcmFnU3RhcnRIYW5kbGVyID0gZnVuY3Rpb24ocGxheWVyQm9hcmQpe1xuICAgICAgICBmb3IgKGxldCByb3cgb2YgcGxheWVyQm9hcmQuY2hpbGRyZW4pe1xuICAgICAgICAgICAgZm9yIChsZXQgY29sIG9mIHJvdy5jaGlsZHJlbil7XG4gICAgICAgICAgICAgICAgY29sLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGRyb3BIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBjb2wuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnc3RhcnRIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9uZHJhZ292ZXJIYW5kbGVyID0gZnVuY3Rpb24oZXYpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImRyYWdvdmVyIGRldGVjdGVkIVwiKVxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGRyb3BIYW5kbGVyID0gZnVuY3Rpb24oZXYpe1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCByb3cgPSBOdW1iZXIoZXYudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwicm93XCIpKTtcbiAgICAgICAgY29uc3QgY29sID0gTnVtYmVyKGV2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjb2xcIikpO1xuICAgICAgICBsZXQgbmV3U3RhcnRSb3cgPSByb3c7XG4gICAgICAgIGxldCBvbGRTdGFydFJvdyA9IE51bWJlcihldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInN0YXJ0Um93XCIpKTtcbiAgICAgICAgbGV0IG5ld1N0YXJ0Q29sID0gY29sO1xuICAgICAgICBsZXQgb2xkU3RhcnRDb2wgPSBOdW1iZXIoZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJzdGFydENvbFwiKSk7XG4gICAgICAgIGNvbnN0IGdyYWJMb2NhdGlvbiA9IE51bWJlcihldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImdyYWJMb2NhdGlvblwiKSk7XG4gICAgICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiaXNIb3Jpem9udGFsXCIpO1xuICAgICAgICBpZiAoaXNIb3Jpem9udGFsID09IFwidHJ1ZVwiKXtcbiAgICAgICAgICAgIG5ld1N0YXJ0Q29sIC09IGdyYWJMb2NhdGlvbjtcbiAgICAgICAgICAgIG9sZFN0YXJ0Q29sIC09IGdyYWJMb2NhdGlvbjtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgbmV3U3RhcnRSb3cgLT0gZ3JhYkxvY2F0aW9uO1xuICAgICAgICAgICAgb2xkU3RhcnRSb3cgLT0gZ3JhYkxvY2F0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBsYXllck51bSA9IGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwicGxheWVybnVtXCIpO1xuICAgICAgICBsZXQgcGxheWVyO1xuICAgICAgICBpZiAocGxheWVyTnVtID09MSl7XG4gICAgICAgICAgICBwbGF5ZXIgPSBwbGF5ZXJzLnBsYXllcjE7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHBsYXllciA9IHBsYXllcnMucGxheWVyMjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gTnVtYmVyKGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwic2hpcExlbmd0aFwiKSk7XG4gICAgICAgIC8vIGNoYW5nZSB0aGUgZ2FtZWJvYXJkIGRhdGFcbiAgICAgICAgcGxheWVyLmdhbWVib2FyZC5tb3ZlU2hpcChwbGF5ZXIuZ2FtZWJvYXJkLmdldFNoaXBGcm9tQ29vcmRzKFtvbGRTdGFydFJvdyxvbGRTdGFydENvbF0pLFxuICAgICAgICBbbmV3U3RhcnRSb3csbmV3U3RhcnRDb2xdLCBzaGlwTGVuZ3RoLCBpc0hvcml6b250YWwpO1xuICAgICAgICAvLyByZW5kZXIgY2hhbmdlcyBhbmQgYWxzbyBtYW5hZ2VzIGRyYWdnYWJsZVxuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlck1vdmVTaGlwKFtvbGRTdGFydFJvdyxvbGRTdGFydENvbF0sXG4gICAgICAgIFtuZXdTdGFydFJvdyxuZXdTdGFydENvbF0sIHNoaXBMZW5ndGgsIGlzSG9yaXpvbnRhbCwgcGxheWVyLmJvYXJkRE9NKTtcbiAgICB9XG4gICAgLy8gRU5EIE9GIENPREUgUkVMQVRFRCBUTyBTVEFHSU5HXG5cbiAgICBjb25zdCBzaG9ydFNsZWVwID0gZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSk7XG4gICAgfVxuXG4gICAgLy8gUHJlZ2FtZSBjb2RlIChsaWtlIHdoZXJlIHlvdSBwdXQgcGxheWVyIG5hbWVzIGFuZCBjaG9vc2UgZ2FtZSB0eXBlKVxuICAgIGNvbnN0IGluaXRQcmVnYW1lID0gZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gcmVuZGVycyB0aXRsZSwgZ2FtZSBtb2RlIHNlbGVjdGlvbiwgZm9ybSBmb3IgbmFtZXMsIGJ1dHRvbiB0byBzdGFydFxuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlclByZWdhbWUoKTtcbiAgICAgICAgYWN0aXZhdGVQcmVnYW1lQnV0dG9ucygpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlUHJlZ2FtZUJ1dHRvbnMgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBidXR0b25zQXJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmVnYW1lLmNvbnRhaW5lciAuYnV0dG9uLmNvbnRhaW5lciAuYnV0dG9uXCIpO1xuICAgICAgICBidXR0b25zQXJyWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBoYW5kbGVQcmVnYW1lQnV0dG9uQ2xpY2sodHJ1ZSkpO1xuICAgICAgICBidXR0b25zQXJyWzFdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBoYW5kbGVQcmVnYW1lQnV0dG9uQ2xpY2soZmFsc2UpKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQcmVnYW1lQnV0dG9uQ2xpY2sgPSBmdW5jdGlvbihpc1NpbmdsZVBsYXllcil7XG4gICAgICAgIFJlbmRlck1hbmFnZXIucmVuZGVyUGxheWVyTmFtZUZvcm0oaXNTaW5nbGVQbGF5ZXIpO1xuICAgICAgICAvLyBmb3JtU3VibWl0QnV0dG9uIGlzIG51bGwgaWYgdGhlcmUgaXMgbm8gYnV0dG9uc1xuICAgICAgICBjb25zdCBmb3JtU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVnYW1lLmNvbnRhaW5lciAuZm9ybS5zdWJtaXRcIilcbiAgICAgICAgaWYgKCFmb3JtU3VibWl0QnV0dG9uKXtcbiAgICAgICAgICAgIFJlbmRlck1hbmFnZXIucmVuZGVyRm9ybUJ1dHRvbigpO1xuICAgICAgICAgICAgYWN0aXZhdGVGb3JtQnV0dG9ucyhpc1NpbmdsZVBsYXllcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZUZvcm1CdXR0b25zID0gZnVuY3Rpb24oaXNTaW5nbGVQbGF5ZXIpe1xuICAgICAgICBjb25zdCBmb3JtU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVnYW1lLmNvbnRhaW5lciAuZm9ybS5zdWJtaXRcIik7XG4gICAgICAgIGZvcm1TdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4gaGFuZGxlRm9ybVN1Ym1pdChldmVudCxpc1NpbmdsZVBsYXllcikpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBmdW5jdGlvbihldmVudCxpc1NpbmdsZVBsYXllcil7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgbGV0IGZvcm0xVmFsdWUgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLm5hbWUuaW5wdXRcIikudmFsdWU7XG4gICAgICAgIGlmIChmb3JtMVZhbHVlID09XCJcIil7XG4gICAgICAgICAgICBmb3JtMVZhbHVlID0gXCJQbGF5ZXIgMVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1NpbmdsZVBsYXllcil7XG4gICAgICAgICAgICBpbml0R2FtZShmb3JtMVZhbHVlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZm9ybTJWYWx1ZSA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIubmFtZS5pbnB1dDpudGgtY2hpbGQoMilcIikudmFsdWU7XG4gICAgICAgICAgICBpZiAoZm9ybTJWYWx1ZSA9PVwiXCIpe1xuICAgICAgICAgICAgICAgIGZvcm0yVmFsdWUgPSBcIlBsYXllciAyXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbml0R2FtZShmb3JtMVZhbHVlLGZvcm0yVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyBEUklWRVIgQ09ERVxuICAgIGluaXRQcmVnYW1lKCk7XG5cbiAgICByZXR1cm57XG4gICAgICAgIHBsYXllcnMsXG4gICAgfVxufSgpO1xuXG5leHBvcnQge0dhbWVNYW5hZ2VyfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==