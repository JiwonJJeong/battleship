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
___CSS_LOADER_EXPORT___.push([module.id, `body{
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,kCAAkC;IAClC,8BAA8B;;IAE9B,+BAA+B;IAC/B;QACI,wBAAwB;IAC5B;;IAEA;QACI,wBAAwB;IAC5B;;IAEA;QACI,wBAAwB;IAC5B;;IAEA;QACI,wBAAwB;IAC5B;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,kBAAkB;IAClB,uBAAuB;;IAEvB;QACI,aAAa;QACb,mBAAmB;QACnB,QAAQ;;QAER;YACI,iBAAiB;YACjB,YAAY;YACZ,qBAAqB;QACzB;;QAEA;YACI,wBAAwB;QAC5B;;QAEA;YACI,qBAAqB;QACzB;IACJ;AACJ;;AAEA;IACI;QACI,sBAAsB;IAC1B;AACJ;;AAEA,yCAAyC;AACzC;IACI;QACI,aAAa;QACb,QAAQ;QACR,sBAAsB;;QAEtB;YACI,uBAAuB;YACvB,kBAAkB;YAClB,aAAa;YACb,mBAAmB;YACnB,QAAQ;;YAER;gBACI,iBAAiB;gBACjB,YAAY;gBACZ,qBAAqB;YACzB;QACJ;IACJ;;IAEA;QACI,sBAAsB;IAC1B;AACJ;;AAEA,iBAAiB;AACjB;IACI,wBAAwB;AAC5B","sourcesContent":["body{\n    display:grid;\n    grid-template-rows: 100px 1fr 10px;\n    grid-template-columns: 1fr 1fr;\n\n    /* grid area is r / c / r / c */\n    .ui.container{\n        grid-area: 1 / 1 / 2 / 3;\n    }\n\n    .board.container.player-1{\n        grid-area: 2 / 1 / 3 / 2;\n    }\n\n    .board.container.player-2{\n        grid-area: 2 / 2 / 3 / 3;\n    }\n\n    .hidden.samples{\n        grid-area: 3 / 1 / 4 / 3;\n    }\n}\n\n.board.container{\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    width: min-content;\n    background-color: black;\n\n    > div{\n        display: flex;\n        flex-direction: row;\n        gap: 1px;\n\n        div{\n            aspect-ratio: 1/1;\n            height: 20px;\n            background-color:gray;\n        }\n\n        .ship.attacked{\n            background-color: purple;\n        }\n\n        .attacked{\n            background-color: red;\n        }\n    }\n}\n\n.board.container.visible{\n    .ship{\n        background-color: aqua;\n    }\n}\n\n/* style ships off board during staging */\n.hidden.samples{\n    > div{\n        display: flex;\n        gap: 3px;\n        flex-direction: column;\n\n        > div{\n            background-color: black;\n            width: min-content;\n            display: flex;\n            flex-direction: row;\n            gap: 1px;\n        \n            div{\n                aspect-ratio: 1/1;\n                height: 20px;\n                background-color:aqua;\n            }\n        }\n    }\n\n    .vertical > div{\n        flex-direction: column;\n    }\n}\n\n/* style dialog */\n::backdrop{\n    background-color: purple;\n}"],"sourceRoot":""}]);
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
    resetBoard();
    newShip(...getRandomCoords(2));
    newShip(...getRandomCoords(3));
    newShip(...getRandomCoords(3));
    newShip(...getRandomCoords(4));
    newShip(...getRandomCoords(5));
    console.log(boardMap);
  }

  const getRandomCoords = function(length){
    const isHorizontal = randomizeIsHorizontal();
    const ship = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(length);
    const trueCount = createAllowedPositionMap(ship, isHorizontal, 0);
    let rngCount = Math.floor(Math.random()*trueCount);
    let r=0;
    let c=0;
    while (rngCount>=0){
      if (isThisAllowedPlacement([r,c]) == true){
        rngCount--;
      };
      if (c==9){
        r++;
        c=0;
      } else{
        c++;
      }
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
        renderShipSamples();
    }

    const toggleBoardVisibility = function(boardDOM){
        boardDOM.classList.toggle("visible");
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

    const renderStagingButtons = function(boardDOM){
        const button = createElement("button","submit staging");
        button.textContent = "Lock in positions!";
        const rngButton = createElement("button", "randomize button");
        rngButton.textContent = "Randomize"
        boardDOM.parentNode.append(button, rngButton);
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
        // later make first turn random or chosen
        players.player2.boardDOM.classList.add("visible");
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
        // repeat for board 2
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
        const button = boardDOM.nextElementSibling;
        button.addEventListener("click", () => completeStaging(boardDOM))
        const rngButton = button.nextElementSibling;
        rngButton.addEventListener("click", () => randomizeBoard(player));
    }

    const randomizeBoard = function(player){
        player.gameboard.randomizeBoard();
    }

    const completeStaging = function(boardDOM){
        deactivateStaging(boardDOM);
        //breakScreen
        if (boardDOM.getAttribute("playernum") == "1"){
            activateStaging(players.player2);
        } else{
            initPlay();
        }
    }

    const deactivateStaging = function(boardDOM){
        _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.toggleBoardVisibility(boardDOM);
        const button = boardDOM.nextElementSibling;
        button.parentNode.removeChild(button);
        const rows = boardDOM.children;
        for (let i=0; i<10; i++){
            const row = rows[i];
            const squares = row.children;
            for (let j=0; j<10; j++){
                const square = squares[j];
                square.removeEventListener("dragover", ondragoverHandler);
                square.removeEventListener("drop", dropHandler);
                square.removeEventListener("dragstart", dragstartHandler);
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


    // DRIVER CODE
    initGame();

    return{
        players,
    }
}();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnR0FBZ0csV0FBVztBQUMzRztBQUNBLFVBQVU7QUFDViw4RkFBOEYsV0FBVztBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTTtBQUM1QjtBQUNBO0FBQ0EsMEJBQTBCLE1BQU07QUFDaEM7QUFDQSxpQ0FBaUMsK0NBQStDO0FBQ2hGO0FBQ0E7QUFDQSwwREFBMEQsRUFBRSxJQUFJLEVBQUU7QUFDbEUsa0JBQWtCO0FBQ2xCO0FBQ0EsOERBQThELEVBQUUsSUFBSSxFQUFFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFhO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi4vbGlua2VkLWxpc3RzL2xpbmtlZGxpc3QuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIExpbmtlZExpc3QgcmVwcmVzZW50cyBmdWxsIGxpc3RcbmNvbnN0IExpbmtlZExpc3QgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBoZWFkTm9kZSA9IG51bGw7XG4gIGNvbnN0IGhlYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGhlYWROb2RlO1xuICB9O1xuXG4gIGNvbnN0IHRhaWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG5vZGUgPSBoZWFkTm9kZTtcbiAgICB3aGlsZSAobm9kZS5uZXh0Tm9kZSAhPSBudWxsKSB7XG4gICAgICBub2RlID0gbm9kZS5uZXh0Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgY29uc3QgYXBwZW5kID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKGhlYWROb2RlID09IG51bGwpIHtcbiAgICAgIGhlYWROb2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YWlsKCkubmV4dE5vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHByZXBlbmQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoaGVhZE5vZGUgPT0gbnVsbCkge1xuICAgICAgaGVhZE5vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWROb2RlID0gbmV3IE5vZGUodmFsdWUsIGhlYWROb2RlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGlmIChoZWFkTm9kZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gY291bnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgd2hpbGUgKG5vZGUubmV4dE5vZGUgIT0gbnVsbCkge1xuICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgICByZXR1cm4gY291bnQ7XG4gIH07XG5cbiAgLy8gY291bnQgaW5kZXggZnJvbSAxXG4gIGNvbnN0IGF0ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgaWYgKGluZGV4IDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgbm9kZSA9IGhlYWROb2RlO1xuICAgIHdoaWxlIChpbmRleCA+IDEpIHtcbiAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgICAgaW5kZXgtLTtcbiAgICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIGNvbnN0IHBvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgc2Vjb25kVG9MYXN0SW5kZXggPSBzaXplKCkgLSAxO1xuICAgIGxldCBzZWNvbmRUb0xhc3ROb2RlID0gYXQoc2Vjb25kVG9MYXN0SW5kZXgpO1xuICAgIHNlY29uZFRvTGFzdE5vZGUubmV4dE5vZGUgPSBudWxsO1xuICB9O1xuXG4gIC8vIHJldHVybnMgdHJ1ZSBpZiB2YWx1ZSBwYXNzZWQgaXMgaW4gbGlzdCwgZWxzZSByZXR1cm5zIGZhbHNlXG4gIGNvbnN0IGNvbnRhaW5zID0gZnVuY3Rpb24gKHZhbHVlLCBjb21wYXJlS2V5ID0gXCJ2YWx1ZVwiKSB7XG4gICAgbGV0IG5vZGUgPSBoZWFkTm9kZTtcbiAgICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XG4gICAgICBpZiAobm9kZS52YWx1ZSA9PSB2YWx1ZSB8fCBub2RlLnZhbHVlW2NvbXBhcmVLZXldID09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvLyByZXR1cm5zIGluZGV4IG9mIG5vZGUgY29udGFpbmluZyB2YWx1ZSwgb3IgbnVsbCBpZiBub3QgZm91bmRcbiAgY29uc3QgZmluZCA9IGZ1bmN0aW9uICh2YWx1ZSwgY29tcGFyZUtleSA9IFwidmFsdWVcIikge1xuICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgbGV0IGluZGV4ID0gMTtcbiAgICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XG4gICAgICBpZiAobm9kZS52YWx1ZSA9PSB2YWx1ZSB8fCBub2RlLnZhbHVlW2NvbXBhcmVLZXldID09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgICAgICBpbmRleCsrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICAvLyByZXR1cm5zIG5vZGUgY29udGFpbmluZyB2YWx1ZSwgb3IgbnVsbCBpZiBub3QgZm91bmRcbiAgLy8gYnV0IGNoZWNrcyBmb3Igbm9kZS5jYWxsYmFja2Z1bmN0aW9uKCkgYmVpbmcgZXF1YWwgdG8gdmFsdWVcbiAgY29uc3QgZmluZENhbGxiYWNrID0gZnVuY3Rpb24gKHZhbHVlLCBjYWxsYmFja0Z1bmN0aW9uKSB7XG4gICAgbGV0IG5vZGUgPSBoZWFkTm9kZTtcbiAgICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XG4gICAgICBpZiAobm9kZS52YWx1ZVtjYWxsYmFja0Z1bmN0aW9uXSgpID09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9OyAgXG5cbiAgLy8gc2FtZSBhcyBmaW5kLCBidXQgcmV0dXJucyB0aGUgbm9kZSwgbm90IGluZGV4XG4gIGNvbnN0IGZpbmROb2RlID0gZnVuY3Rpb24gKHZhbHVlLCBjb21wYXJlS2V5ID0gXCJ2YWx1ZVwiKSB7XG4gICAgbGV0IG5vZGUgPSBoZWFkTm9kZTtcbiAgICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XG4gICAgICBpZiAobm9kZS52YWx1ZSA9PSB2YWx1ZSB8fCBub2RlLnZhbHVlW2NvbXBhcmVLZXldID09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIC8vIHJldHVybnMgc3RyaW5nIG9mIG5vZGUgdmFsdWVzIGluIGZvcm1hdCBcIih2YWx1ZSkgLT4gKHZhbHVlKSAtPiBudWxsXCJcbiAgY29uc3QgdG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGhlYWROb2RlID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgc3RyaW5nID0gYCggJHtoZWFkTm9kZS52YWx1ZX0gKWA7XG4gICAgbGV0IG5vZGUgPSBoZWFkTm9kZS5uZXh0Tm9kZTtcbiAgICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XG4gICAgICBzdHJpbmcgKz0gYCAtPiAoICR7bm9kZS52YWx1ZX0gKWA7XG4gICAgICBub2RlID0gbm9kZS5uZXh0Tm9kZTtcbiAgICB9XG4gICAgc3RyaW5nICs9IFwiIC0+IG51bGxcIjtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xuXG4gIC8vIGluc2VydHMgbmV3IE5vZGUgd2l0aCB2YWx1ZSBhdCBpbmRleCAoY291bnRpbmcgZnJvbSAxKVxuICBjb25zdCBpbnNlcnRBdCA9IGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICBjb25zdCBwcmlvckluZGV4ID0gaW5kZXggLSAxO1xuICAgIGlmIChwcmlvckluZGV4ID09IDApIHtcbiAgICAgIHByZXBlbmQodmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcHJpb3JOb2RlID0gYXQocHJpb3JJbmRleCk7XG4gICAgaWYgKHByaW9yTm9kZSA9PSBudWxsKSB7XG4gICAgICBlcnJvci5sb2coYCR7aW5kZXh9IGlzIG5vdCB2YWxpZCBpbmRleC5gKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmV4dE5vZGUgPSBwcmlvck5vZGUubmV4dE5vZGU7XG4gICAgICBwcmlvck5vZGUubmV4dE5vZGUgPSBuZXcgTm9kZSh2YWx1ZSwgbmV4dE5vZGUpO1xuICAgIH1cbiAgfTtcblxuICAvLyByZW1vdmVzIG5vZGUgYXQgaW5kZXggKGNvdW50aW5nIGZyb20gMSlcbiAgY29uc3QgcmVtb3ZlQXQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICBjb25zdCBwcmlvckluZGV4ID0gaW5kZXggLSAxO1xuICAgIGlmIChwcmlvckluZGV4ID09IDApIHtcbiAgICAgIGxldCBub2RlVG9SZW1vdmUgPSBoZWFkTm9kZTtcbiAgICAgIGhlYWROb2RlID0gaGVhZE5vZGUubmV4dE5vZGU7XG4gICAgICBub2RlVG9SZW1vdmUgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcHJpb3JOb2RlID0gYXQocHJpb3JJbmRleCk7XG4gICAgbGV0IG5vZGVUb1JlbW92ZSA9IHByaW9yTm9kZS5uZXh0Tm9kZTtcbiAgICBjb25zdCBuZXh0Tm9kZSA9IHByaW9yTm9kZS5uZXh0Tm9kZS5uZXh0Tm9kZTtcbiAgICBwcmlvck5vZGUubmV4dE5vZGUgPSBuZXh0Tm9kZTtcbiAgICBub2RlVG9SZW1vdmUgPSBudWxsO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaGVhZCxcbiAgICB0YWlsLFxuICAgIGFwcGVuZCxcbiAgICBwcmVwZW5kLFxuICAgIHNpemUsXG4gICAgYXQsXG4gICAgcG9wLFxuICAgIGNvbnRhaW5zLFxuICAgIGZpbmQsXG4gICAgdG9TdHJpbmcsXG4gICAgaW5zZXJ0QXQsXG4gICAgcmVtb3ZlQXQsXG4gICAgZmluZE5vZGUsXG4gICAgZmluZENhbGxiYWNrLFxuICB9O1xufTtcblxuLy8gTm9kZSBjb250YWlucyB2YWx1ZSBwcm9wZXJ0eSwgbmV4dE5vZGVcblxuY29uc3QgTm9kZSA9IGZ1bmN0aW9uICh2YWx1ZSA9IG51bGwsIG5leHROb2RlID0gbnVsbCkge1xuICByZXR1cm4ge1xuICAgIHZhbHVlLFxuICAgIG5leHROb2RlLFxuICB9O1xufTtcblxuZXhwb3J0IHsgTGlua2VkTGlzdCwgTm9kZSB9O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHl7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyIDEwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuXG4gICAgLyogZ3JpZCBhcmVhIGlzIHIgLyBjIC8gciAvIGMgKi9cbiAgICAudWkuY29udGFpbmVye1xuICAgICAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XG4gICAgfVxuXG4gICAgLmJvYXJkLmNvbnRhaW5lci5wbGF5ZXItMXtcbiAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xuICAgIH1cblxuICAgIC5ib2FyZC5jb250YWluZXIucGxheWVyLTJ7XG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcbiAgICB9XG5cbiAgICAuaGlkZGVuLnNhbXBsZXN7XG4gICAgICAgIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMztcbiAgICB9XG59XG5cbi5ib2FyZC5jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXB4O1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblxuICAgID4gZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBnYXA6IDFweDtcblxuICAgICAgICBkaXZ7XG4gICAgICAgICAgICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6Z3JheTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaGlwLmF0dGFja2Vke1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF0dGFja2Vke1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYm9hcmQuY29udGFpbmVyLnZpc2libGV7XG4gICAgLnNoaXB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgfVxufVxuXG4vKiBzdHlsZSBzaGlwcyBvZmYgYm9hcmQgZHVyaW5nIHN0YWdpbmcgKi9cbi5oaWRkZW4uc2FtcGxlc3tcbiAgICA+IGRpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiAzcHg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgPiBkaXZ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgZ2FwOiAxcHg7XG4gICAgICAgIFxuICAgICAgICAgICAgZGl2e1xuICAgICAgICAgICAgICAgIGFzcGVjdC1yYXRpbzogMS8xO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmFxdWE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudmVydGljYWwgPiBkaXZ7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxufVxuXG4vKiBzdHlsZSBkaWFsb2cgKi9cbjo6YmFja2Ryb3B7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLDhCQUE4Qjs7SUFFOUIsK0JBQStCO0lBQy9CO1FBQ0ksd0JBQXdCO0lBQzVCOztJQUVBO1FBQ0ksd0JBQXdCO0lBQzVCOztJQUVBO1FBQ0ksd0JBQXdCO0lBQzVCOztJQUVBO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsdUJBQXVCOztJQUV2QjtRQUNJLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsUUFBUTs7UUFFUjtZQUNJLGlCQUFpQjtZQUNqQixZQUFZO1lBQ1oscUJBQXFCO1FBQ3pCOztRQUVBO1lBQ0ksd0JBQXdCO1FBQzVCOztRQUVBO1lBQ0kscUJBQXFCO1FBQ3pCO0lBQ0o7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCO0FBQ0o7O0FBRUEseUNBQXlDO0FBQ3pDO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsUUFBUTtRQUNSLHNCQUFzQjs7UUFFdEI7WUFDSSx1QkFBdUI7WUFDdkIsa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsUUFBUTs7WUFFUjtnQkFDSSxpQkFBaUI7Z0JBQ2pCLFlBQVk7Z0JBQ1oscUJBQXFCO1lBQ3pCO1FBQ0o7SUFDSjs7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQjtBQUNKOztBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLHdCQUF3QjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyIDEwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG5cXG4gICAgLyogZ3JpZCBhcmVhIGlzIHIgLyBjIC8gciAvIGMgKi9cXG4gICAgLnVpLmNvbnRhaW5lcntcXG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgfVxcblxcbiAgICAuYm9hcmQuY29udGFpbmVyLnBsYXllci0xe1xcbiAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbiAgICB9XFxuXFxuICAgIC5ib2FyZC5jb250YWluZXIucGxheWVyLTJ7XFxuICAgICAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxuICAgIH1cXG5cXG4gICAgLmhpZGRlbi5zYW1wbGVze1xcbiAgICAgICAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAzO1xcbiAgICB9XFxufVxcblxcbi5ib2FyZC5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXB4O1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcbiAgICA+IGRpdntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgZ2FwOiAxcHg7XFxuXFxuICAgICAgICBkaXZ7XFxuICAgICAgICAgICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6Z3JheTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5zaGlwLmF0dGFja2Vke1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5hdHRhY2tlZHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLmJvYXJkLmNvbnRhaW5lci52aXNpYmxle1xcbiAgICAuc2hpcHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICAgIH1cXG59XFxuXFxuLyogc3R5bGUgc2hpcHMgb2ZmIGJvYXJkIGR1cmluZyBzdGFnaW5nICovXFxuLmhpZGRlbi5zYW1wbGVze1xcbiAgICA+IGRpdntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDNweDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgICAgICA+IGRpdntcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgICAgIGdhcDogMXB4O1xcbiAgICAgICAgXFxuICAgICAgICAgICAgZGl2e1xcbiAgICAgICAgICAgICAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmFxdWE7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC52ZXJ0aWNhbCA+IGRpdntcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG59XFxuXFxuLyogc3R5bGUgZGlhbG9nICovXFxuOjpiYWNrZHJvcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtTaGlwfSBmcm9tIFwiLi9zaGlwLmpzXCI7XG5pbXBvcnQge0xpbmtlZExpc3R9IGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbGlua2VkLWxpc3RzL2xpbmtlZGxpc3QuanNcIlxuXG5jb25zdCBHYW1lYm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBib2FyZE1hcDtcbiAgbGV0IGF0dGFja01hcDtcbiAgLy8gbWFrZSBlYWNoIG1hcCBhbiBhcnJheSBvZiAxMCB3aXRoIGVhY2ggYXJyYXkgYmVpbmcgYW4gb2JqZWN0IChzaW1pbGFyIHRvIGhhc2ggbWFwKVxuICBjb25zdCBpbml0Qm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgYm9hcmRNYXAgPSBbe30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge31dO1xuICAgIGF0dGFja01hcCA9IFt7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fV07XG4gIH0oKTtcblxuICBjb25zdCBnZXRCb2FyZE1hcCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGJvYXJkTWFwO1xuICB9XG5cbiAgY29uc3QgZ2V0QXR0YWNrTWFwID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gYXR0YWNrTWFwO1xuICB9XG5cbiAgLy8gYmFzZWQgb24gdGhlIHdheSB3ZSBpbXBsZW1lbnRlZCxcbiAgLy8gdGhlIGZpcnN0IGluZGV4IGZvciBhcnJheSBpcyB0aGUgci12YWx1ZSBvciB0aGUgY29sdW1uIGluIGEgbWF0cml4L2dyaWRcbiAgLy8gdGhlIHNlY29uZCBpbmRleCBmb3Igb2JqZWN0IGtleSBpcyB0aGUgYy12YWx1ZSBvciB0aGUgcm93IGluIGEgbWF0cml4L2dyaWQgKGluY3JlYXNlcyBnb2luZyBkb3duKVxuICBsZXQgc2hpcExpc3QgPSBuZXcgTGlua2VkTGlzdCgpO1xuICAvLyB1c2UgcmVzdCBwYXJhbWV0ZXIgKC4uLikgdG8gYWNjZXB0IHZhcmlhYmxlIGFtb3VudCBvZiBjb29yZHNcbiAgY29uc3QgbmV3U2hpcCA9IGZ1bmN0aW9uICguLi5jb29yZHMpIHtcbiAgICAgIGNvbnN0IG5ld1NoaXAgPSBuZXcgU2hpcChjb29yZHMubGVuZ3RoKTtcbiAgICAgIGlmIChpc1NoaXBBdENvb3JkcyguLi5jb29yZHMpKXtcbiAgICAgICAgY29uc29sZS5sb2coYm9hcmRNYXApO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERvbid0IG92ZXJsYXAgc2hpcHMgYXQ6ICR7Y29vcmRzfWApO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgW3IsY10gb2YgY29vcmRzKXtcbiAgICAgICAgaWYgKGMgPCAxMCAmJiBjID49MCl7XG4gICAgICAgICAgYm9hcmRNYXBbcl1bY10gPSBuZXdTaGlwO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgY29uc29sZS5sb2coY29vcmRzKTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJhZCBjb2wgaW5wdXQgZm9yIG5ld1NoaXAoKTogJHtjb29yZHN9YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGFkZGluZyBuZXcgc2hpcCB0byBzaGlwIGxpbmtlZCBsaXN0XG4gICAgICBzaGlwTGlzdC5hcHBlbmQobmV3U2hpcCk7XG4gIH07XG5cbiAgY29uc3QgaXNTaGlwQXRDb29yZHMgPSBmdW5jdGlvbiguLi5jb29yZHMpe1xuICAgIGZvciAobGV0IFtyLGNdIG9mIGNvb3Jkcyl7XG4gICAgICBpZiAoYm9hcmRNYXBbcl0gIT09IHVuZGVmaW5lZCAmJiBib2FyZE1hcFtyXVtjXSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGdldFNoaXBGcm9tQ29vcmRzID0gZnVuY3Rpb24oW3IsY10pe1xuICAgIHJldHVybiBib2FyZE1hcFtyXVtjXTtcbiAgfVxuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSBmdW5jdGlvbihbcixjXSl7XG4gICAgaWYgKHdhc0F0dGFja2VkKFtyLGNdKSl7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBhdHRhY2sgcHJldmlvdXMgYXR0YWNrZWQgKCR7cn0sJHtjfSlgKTtcbiAgICB9XG4gICAgY29uc3Qgc2hpcCA9IGJvYXJkTWFwW3JdW2NdO1xuICAgIGlmICh0eXBlb2Yoc2hpcCkgPT0gXCJvYmplY3RcIil7XG4gICAgICBzaGlwLmhpdCgpO1xuICAgICAgYXR0YWNrTWFwW3JdW2NdPVwiaGl0XCI7XG4gICAgICByZXR1cm4gXCJoaXRcIjtcbiAgICB9IGVsc2V7XG4gICAgICBhdHRhY2tNYXBbcl1bY10gPSBcIm1pc3NcIjtcbiAgICAgIHJldHVybiBcIm1pc3NcIjtcbiAgICB9XG4gIH1cblxuICBjb25zdCB3YXNBdHRhY2tlZCA9IGZ1bmN0aW9uKFtyLGNdKXtcbiAgICByZXR1cm4gYXR0YWNrTWFwW3JdW2NdIHx8IGZhbHNlO1xuICB9XG5cbiAgY29uc3QgaXNBbGxTdW5rID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gKHNoaXBMaXN0LmZpbmRDYWxsYmFjayhmYWxzZSwgXCJpc1N1bmtcIikgPT0gbnVsbCk7XG4gIH1cblxuICBjb25zdCByZXNldEJvYXJkID0gZnVuY3Rpb24oKXtcbiAgICBib2FyZE1hcCA9IFt7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fV07XG4gICAgYXR0YWNrTWFwID0gW3t9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9XTtcbiAgfVxuXG4gIC8vIFVTRVMgYWxsb3dlZCBwb3NpdGlvbiBtYXAgY3JlYXRlZCB3aXRoIHNwZWNpZmljIGluZm8gYWJvdXQgc2hpcCBvcmllbnRhdGlvbiBhbmQgbGVuZ3RoXG4gIGNvbnN0IGlzVGhpc0FsbG93ZWRQbGFjZW1lbnQgPSBmdW5jdGlvbihbcixjXSl7XG4gICAgcmV0dXJuIGFsbG93ZWRQb3NpdGlvbk1hcFtyXVtjXTtcbiAgfVxuXG4gIGxldCBhbGxvd2VkUG9zaXRpb25NYXA7XG4gIC8vIHVzZXMgYWRqYWNlbmN5IG1hcCBhbmQgc2hpcCBsZW5ndGggdG8gc2hvdyBhbGwgcG9zaWJsZSB0b3BsZWZ0IHBvc2l0aW9ucyBmb3IgdGhlIHNoaXBcbiAgLy8gcmVjYWxsIHRoYXQgZ3JhYkxvY2F0aW9uIHN0YXJ0cyBhdCAwXG4gIC8vIHJldHVybnMgbnVtYmVyIG9mIHRydWVzIChhbGxvd2VkIHNwb3RzKVxuICBjb25zdCBjcmVhdGVBbGxvd2VkUG9zaXRpb25NYXAgPSBmdW5jdGlvbihzaGlwT2JqZWN0LCBpc0hvcml6b250YWwsIGdyYWJMb2NhdGlvbil7XG4gICAgY29uc3QgYWRqYWNlbmN5TWFwID0gY3JlYXRlQWRqYWNlbmN5TWFwKCk7XG4gICAgYWxsb3dlZFBvc2l0aW9uTWFwID0gW3t9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9XTtcbiAgICBjb25zdCBsZW5ndGggPSBzaGlwT2JqZWN0Lmxlbmd0aDtcbiAgICBsZXQgdHJ1ZUNvdW50ID0wO1xuICAgIGlmIChpc0hvcml6b250YWwgPT0gXCJ0cnVlXCIpe1xuICAgICAgZm9yIChsZXQgciA9IDA7IHI8MTA7IHIrKyl7XG4gICAgICAgIGZvciAobGV0IGM9MDsgYzwxMDsgYysrKXtcbiAgICAgICAgICBpZiAoYz4gKDEwLWxlbmd0aCtncmFiTG9jYXRpb24pIHx8IGM8Z3JhYkxvY2F0aW9uKXtcbiAgICAgICAgICAgIGFsbG93ZWRQb3NpdGlvbk1hcFtyXVtjXSA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGxvd2VkUG9zaXRpb25NYXBbcl1bY10gPSBpc1NoaXBGaXRBZGphY2VuY3koW3IsYy1ncmFiTG9jYXRpb25dLCBzaGlwT2JqZWN0LCBpc0hvcml6b250YWwsIGFkamFjZW5jeU1hcCk7XG4gICAgICAgICAgICBpZiAoYWxsb3dlZFBvc2l0aW9uTWFwW3JdW2NdID09IHRydWUpe1xuICAgICAgICAgICAgICB0cnVlQ291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgICB9XG4gICAgIH0gZWxzZXtcbiAgICAgIGZvciAobGV0IHIgPSAwOyByPDEwOyByKyspe1xuICAgICAgICBmb3IgKGxldCBjPTA7IGM8MTA7IGMrKyl7XG4gICAgICAgICAgaWYgKHIgPiAoMTAtbGVuZ3RoK2dyYWJMb2NhdGlvbikgfHwgcjxncmFiTG9jYXRpb24pe1xuICAgICAgICAgICAgICBhbGxvd2VkUG9zaXRpb25NYXBbcl1bY10gPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxsb3dlZFBvc2l0aW9uTWFwW3JdW2NdID0gaXNTaGlwRml0QWRqYWNlbmN5KFtyLWdyYWJMb2NhdGlvbixjXSxzaGlwT2JqZWN0LCBpc0hvcml6b250YWwsIGFkamFjZW5jeU1hcCk7XG4gICAgICAgICAgICBpZiAoYWxsb3dlZFBvc2l0aW9uTWFwW3JdW2NdID09IHRydWUpe1xuICAgICAgICAgICAgICB0cnVlQ291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJhbGxvd2VkIHBvc2l0aW9uIG1hcCBjcmVhdGVkXCIpXG4gICAgY29uc29sZS5sb2coYWxsb3dlZFBvc2l0aW9uTWFwKTtcbiAgICByZXR1cm4gdHJ1ZUNvdW50O1xuICB9O1xuXG4gIC8vIFtyLGNdIGlzIHRvcGxlZnQgc3F1YXJlIG9mIHNoaXBcbiAgY29uc3QgaXNTaGlwRml0QWRqYWNlbmN5ID0gZnVuY3Rpb24oW3IsY10sc2hpcE9iamVjdCwgaXNIb3Jpem9udGFsLCBtYXApe1xuICAgIGNvbnN0IGxlbmd0aCA9IHNoaXBPYmplY3QubGVuZ3RoO1xuICAgIGlmIChpc0hvcml6b250YWwgIT09IFwidHJ1ZVwiKXtcbiAgICAgIGZvciAobGV0IGk9MDsgaTxsZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmICh0eXBlb2YgbWFwW3IraV0gIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIG1hcFtyK2ldW2NdICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgICAgICBmb3IgKGxldCBzaGlwIG9mIG1hcFtyK2ldW2NdKXtcbiAgICAgICAgICAgIGlmIChzaGlwICE9IHNoaXBPYmplY3Qpe1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGk9MDsgaTxsZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmICh0eXBlb2YgbWFwW3JdICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBtYXBbcl1bYytpXSAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICAgICAgZm9yIChsZXQgc2hpcCBvZiBtYXBbcl1bYytpXSl7XG4gICAgICAgICAgICBpZiAoc2hpcCAhPSBzaGlwT2JqZWN0KXtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG5cbiAgY29uc3QgY3JlYXRlQWRqYWNlbmN5TWFwID0gZnVuY3Rpb24oKXtcbiAgICBsZXQgYWRqYWNlbmN5TWFwID0gW3t9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9XTtcbiAgICBmb3IgKGxldCBpPTA7IGk8MTA7IGkrKyl7XG4gICAgICBmb3IgKGxldCBqPTA7IGo8MTA7IGorKyl7XG4gICAgICAgIGlmICh0eXBlb2YgYm9hcmRNYXBbaV1bal0gIT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICAgIGNvbnN0IHNoaXAgPSBib2FyZE1hcFtpXVtqXTtcbiAgICAgICAgICBhZGRUb0FkamFjZW5jeU1hcChhZGphY2VuY3lNYXAsIHNoaXAsIGksaik7XG4gICAgICAgICAgaWYgKGo+MCl7XG4gICAgICAgICAgICBhZGRUb0FkamFjZW5jeU1hcChhZGphY2VuY3lNYXAsIHNoaXAsIGksai0xKTtcbiAgICAgICAgICAgIGlmIChpPjApe1xuICAgICAgICAgICAgICBhZGRUb0FkamFjZW5jeU1hcChhZGphY2VuY3lNYXAsIHNoaXAsIGktMSxqLTEpO1xuICAgICAgICAgICAgfSBpZiAoaTw5KXtcbiAgICAgICAgICAgICAgYWRkVG9BZGphY2VuY3lNYXAoYWRqYWNlbmN5TWFwLCBzaGlwLCBpKzEsai0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGo8OSl7XG4gICAgICAgICAgICBhZGRUb0FkamFjZW5jeU1hcChhZGphY2VuY3lNYXAsIHNoaXAsIGksaisxKTtcbiAgICAgICAgICAgIGlmIChpPjApe1xuICAgICAgICAgICAgICBhZGRUb0FkamFjZW5jeU1hcChhZGphY2VuY3lNYXAsIHNoaXAsIGktMSxqKzEpO1xuICAgICAgICAgICAgfSBpZiAoaTw5KXtcbiAgICAgICAgICAgICAgYWRkVG9BZGphY2VuY3lNYXAoYWRqYWNlbmN5TWFwLCBzaGlwLCBpKzEsaisxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGk+MCl7XG4gICAgICAgICAgICBhZGRUb0FkamFjZW5jeU1hcChhZGphY2VuY3lNYXAsIHNoaXAsIGktMSxqKTtcbiAgICAgICAgICB9IGlmIChpPDkpe1xuICAgICAgICAgICAgYWRkVG9BZGphY2VuY3lNYXAoYWRqYWNlbmN5TWFwLCBzaGlwLCBpKzEsaik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGFkamFjZW5jeU1hcCk7XG4gICAgcmV0dXJuIGFkamFjZW5jeU1hcDtcbiAgfVxuXG4gIGNvbnN0IGFkZFRvQWRqYWNlbmN5TWFwID0gZnVuY3Rpb24obWFwLCBzaGlwLCBpLCBqKXtcbiAgICBjb25zdCBsb2NhdGlvbiA9IG1hcFtpXVtqXTtcbiAgICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiICYmIGxvY2F0aW9uWzBdICE9IHNoaXApe1xuICAgICAgbWFwW2ldW2pdLnB1c2goc2hpcCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBtYXBbaV1bal0gPSBbc2hpcF07XG4gICAgfVxuICB9XG5cbiAgLy8gcmVtZW1iZXIgdGhhdCBtYXAgaXMgc29ydGVkIGJ5IHIsIHRoZW4gYy5cbiAgY29uc3QgbW92ZVNoaXAgPSBmdW5jdGlvbihzaGlwLFtzdGFydFIsc3RhcnRDXSxsZW5ndGgsIGlzSG9yaXpvbnRhbCl7XG4gICAgZm9yIChsZXQgcm93PTA7IHJvdzwxMDsgcm93Kyspe1xuICAgICAgY29uc3QgbWFwUm93ID0gYm9hcmRNYXBbcm93XTtcbiAgICAgIGZvciAobGV0IGNvbCBvZiBPYmplY3Qua2V5cyhtYXBSb3cpKXtcbiAgICAgICAgaWYgKG1hcFJvd1tjb2xdID09IHNoaXApe1xuICAgICAgICAgIGRlbGV0ZSBib2FyZE1hcFtyb3ddW2NvbF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coYm9hcmRNYXApO1xuICAgIGNvbnN0IGNvb3JkcyA9IFtdO1xuICAgIGlmIChpc0hvcml6b250YWwgPT0gXCJ0cnVlXCIpe1xuICAgICAgZm9yIChsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29vcmRzLnB1c2goW3N0YXJ0UixzdGFydEMraV0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGk9MDsgaTxsZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvb3Jkcy5wdXNoKFtzdGFydFIraSxzdGFydENdKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyguLi5jb29yZHMsIGxlbmd0aCk7XG4gICAgbmV3U2hpcCguLi5jb29yZHMpO1xuICB9XG5cbiAgLy8gbmVlZCB0byByYW5kb21pemUgNSBzaGlwcyBvZiBsZW5ndGggMiwzLDMsNCw1XG4gIGNvbnN0IHJhbmRvbWl6ZUJvYXJkID0gZnVuY3Rpb24oKXtcbiAgICByZXNldEJvYXJkKCk7XG4gICAgbmV3U2hpcCguLi5nZXRSYW5kb21Db29yZHMoMikpO1xuICAgIG5ld1NoaXAoLi4uZ2V0UmFuZG9tQ29vcmRzKDMpKTtcbiAgICBuZXdTaGlwKC4uLmdldFJhbmRvbUNvb3JkcygzKSk7XG4gICAgbmV3U2hpcCguLi5nZXRSYW5kb21Db29yZHMoNCkpO1xuICAgIG5ld1NoaXAoLi4uZ2V0UmFuZG9tQ29vcmRzKDUpKTtcbiAgICBjb25zb2xlLmxvZyhib2FyZE1hcCk7XG4gIH1cblxuICBjb25zdCBnZXRSYW5kb21Db29yZHMgPSBmdW5jdGlvbihsZW5ndGgpe1xuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHJhbmRvbWl6ZUlzSG9yaXpvbnRhbCgpO1xuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgpO1xuICAgIGNvbnN0IHRydWVDb3VudCA9IGNyZWF0ZUFsbG93ZWRQb3NpdGlvbk1hcChzaGlwLCBpc0hvcml6b250YWwsIDApO1xuICAgIGxldCBybmdDb3VudCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp0cnVlQ291bnQpO1xuICAgIGxldCByPTA7XG4gICAgbGV0IGM9MDtcbiAgICB3aGlsZSAocm5nQ291bnQ+PTApe1xuICAgICAgaWYgKGlzVGhpc0FsbG93ZWRQbGFjZW1lbnQoW3IsY10pID09IHRydWUpe1xuICAgICAgICBybmdDb3VudC0tO1xuICAgICAgfTtcbiAgICAgIGlmIChjPT05KXtcbiAgICAgICAgcisrO1xuICAgICAgICBjPTA7XG4gICAgICB9IGVsc2V7XG4gICAgICAgIGMrKztcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGNvb3JkcyA9IFtdO1xuICAgIGlmIChpc0hvcml6b250YWwgPT0gXCJ0cnVlXCIpe1xuICAgICAgZm9yICg7bGVuZ3RoPjA7IGxlbmd0aC0tKXtcbiAgICAgICAgY29vcmRzLnB1c2goW3IsY10pO1xuICAgICAgICBjKys7XG4gICAgICB9XG4gICAgfSBlbHNle1xuICAgICAgZm9yICg7bGVuZ3RoPjA7IGxlbmd0aC0tKXtcbiAgICAgICAgY29vcmRzLnB1c2goW3IsY10pO1xuICAgICAgICByKys7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBHZW5lcmF0ZWQgYWxsb3dlZCByYW5kb20gY29vcmRzICR7Y29vcmRzfWApO1xuICAgIHJldHVybiAoY29vcmRzKTtcbiAgfVxuXG4gIGNvbnN0IHJhbmRvbWl6ZUlzSG9yaXpvbnRhbCA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3Qgcm5nID0gTWF0aC5yYW5kb20oKSoyO1xuICAgIGlmIChybmcgPCAxKXtcbiAgICAgIHJldHVybiBcInRydWVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiZmFsc2VcIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1NoaXAsXG4gICAgZ2V0U2hpcEZyb21Db29yZHMsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICB3YXNBdHRhY2tlZCxcbiAgICBpc0FsbFN1bmssXG4gICAgZ2V0Qm9hcmRNYXAsXG4gICAgcmVzZXRCb2FyZCxcbiAgICBnZXRBdHRhY2tNYXAsXG4gICAgaXNUaGlzQWxsb3dlZFBsYWNlbWVudCxcbiAgICBtb3ZlU2hpcCxcbiAgICBjcmVhdGVBbGxvd2VkUG9zaXRpb25NYXAsXG4gICAgcmFuZG9taXplQm9hcmQsXG4gIH07XG59O1xuXG5leHBvcnQgeyBHYW1lYm9hcmQgfTtcbiIsImltcG9ydCB7R2FtZWJvYXJkfSBmcm9tIFwiLi9nYW1lYm9hcmQuanNcIlxuXG5jb25zdCBQbGF5ZXIgPSBmdW5jdGlvbihuYW1lLCBudW1iZXIpe1xuXG4gICAgbGV0IGdhbWVib2FyZDtcbiAgICBjb25zdCBpbml0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIH0oKTtcblxuICAgIHJldHVybntcbiAgICAgICAgbmFtZSxcbiAgICAgICAgbnVtYmVyLFxuICAgICAgICBnYW1lYm9hcmQsXG4gICAgfVxufVxuXG5jb25zdCBjb21wdXRlclBsYXllciA9IGZ1bmN0aW9uKG5hbWUsIG51bWJlcil7XG5cbiAgICByZXR1cm57XG4gICAgICAgIC8vIGluaGVyaXQgcHJvcGVydGllcyBieSBjb21wb3NpdGlvblxuICAgICAgICAuLi4obmV3IFBsYXllcihuYW1lLCBudW1iZXIpKSxcbiAgICB9XG59XG5cbmNvbnN0IGh1bWFuUGxheWVyID0gZnVuY3Rpb24obmFtZSwgbnVtYmVyKXtcblxuICAgIHJldHVybntcbiAgICAgICAgLi4uKG5ldyBQbGF5ZXIobmFtZSwgbnVtYmVyKSksXG4gICAgfVxufVxuXG5leHBvcnQge1BsYXllciwgY29tcHV0ZXJQbGF5ZXIsIGh1bWFuUGxheWVyfTsiLCIvLyBjb250YWlucyBtZXRob2RzIHRvIHBvcHVsYXRlIERPTVxuLy8gcmVuZGVyIGZ1bmN0aW9ucyB3aWxsIGRpc3BsYXkgRE9NIGVsZW1lbnRzXG4vLyBidWlsZCBmdW5jdGlvbnMgd2lsbCBidWlsZCBlbGVtZW50cyBhbmQgcmV0dXJuIHRoZW0gd2l0aG91dCBkaXNwbGF5XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuY29uc3QgUmVuZGVyTWFuYWdlciA9IGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgbGV0IGJvYXJkMTtcbiAgICBsZXQgYm9hcmQyO1xuICAgIGxldCBkaWFsb2c7XG4gICAgY29uc3QgaW5pdEdhbWVSZW5kZXIgPSBmdW5jdGlvbihwbGF5ZXIxT2JqZWN0LCBwbGF5ZXIyT2JqZWN0KXtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBidWlsZEhlYWRlcigpO1xuICAgICAgICBib2FyZDEgPSBidWlsZEJvYXJkQW5kSGVhZGVyKHBsYXllcjFPYmplY3QubnVtYmVyLCBwbGF5ZXIxT2JqZWN0Lm5hbWUpO1xuICAgICAgICBib2FyZDIgPSBidWlsZEJvYXJkQW5kSGVhZGVyKHBsYXllcjJPYmplY3QubnVtYmVyLCBwbGF5ZXIyT2JqZWN0Lm5hbWUpO1xuICAgICAgICBib2R5LmFwcGVuZChoZWFkZXIsIGJvYXJkMSwgYm9hcmQyKTtcbiAgICAgICAgZGlhbG9nID0gYnVpbGREaWFsb2coKTtcbiAgICAgICAgYm9keS5hcHBlbmQoZGlhbG9nKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYnVpbGRIZWFkZXIgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJ1aSBjb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHR1cm5UZXh0ID0gY3JlYXRlRWxlbWVudChcImgxXCIsIFwidHVybiB0ZXh0XCIpO1xuICAgICAgICB0dXJuVGV4dC50ZXh0Q29udGVudCA9IFwiJ3MgVHVyblwiO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHR1cm5UZXh0KTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBidWlsZEJvYXJkQW5kSGVhZGVyID0gZnVuY3Rpb24ocGxheWVyTnVtYmVyLCBwbGF5ZXJOYW1lKXtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsYGJvYXJkIGNvbnRhaW5lcmApO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8MTA7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsYHJvdy0ke2l9YCk7XG4gICAgICAgICAgICByb3cuc2V0QXR0cmlidXRlKFwicm93XCIsIGkpO1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPDEwOyBqKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImNvbFwiLCBqKTtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kKHNxdWFyZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2FyZC5hcHBlbmQocm93KTtcbiAgICAgICAgfVxuICAgICAgICBib2FyZC5zZXRBdHRyaWJ1dGUoXCJwbGF5ZXJudW1cIiwgcGxheWVyTnVtYmVyKTtcbiAgICAgICAgY29uc3QgYm9hcmRBbmRIZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsYGJvYXJkLWFuZC1oZWFkZXIgY29udGFpbmVyIHBsYXllci0ke3BsYXllck51bWJlcn1gKTtcbiAgICAgICAgY29uc3QgYm9hcmRIZWFkZXJUZXh0PSBjcmVhdGVFbGVtZW50KFwiaDJcIiwgXCJib2FyZCBoZWFkZXJcIik7XG4gICAgICAgIGJvYXJkSGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWV9J3MgQm9hcmRgO1xuICAgICAgICBib2FyZEFuZEhlYWRlci5hcHBlbmQoYm9hcmRIZWFkZXJUZXh0LCBib2FyZCk7XG4gICAgICAgIHJldHVybiBib2FyZEFuZEhlYWRlcjtcbiAgICB9XG5cbiAgICBjb25zdCBidWlsZERpYWxvZyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gICAgICAgIGNvbnN0IGRpYWxvZ0hlYWRlciA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBcImRpYWxvZyBoZWFkZXJcIik7XG4gICAgICAgIGRpYWxvZ0hlYWRlci50ZXh0Q29udGVudCA9IFwiU3dpdGNoIFBsYXllcnMhXCJcbiAgICAgICAgY29uc3QgZGlhbG9nU3VidGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiZGlhbG9nIHN1YnRleHRcIik7XG4gICAgICAgIGRpYWxvZ1N1YnRleHQudGV4dENvbnRlbnQgPSBcIihjbGljayB3aGVuIHJlYWR5KVwiO1xuICAgICAgICBkaWFsb2cuYXBwZW5kKGRpYWxvZ0hlYWRlciwgZGlhbG9nU3VidGV4dCk7XG4gICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICBkaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge2RpYWxvZy5jbG9zZSgpfSk7XG4gICAgICAgIHJldHVybiBkaWFsb2c7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyTmV3U2hpcCA9IGZ1bmN0aW9uKHBsYXllck51bWJlciwuLi5jb29yZHMpe1xuICAgICAgICBsZXQgYm9hcmQ7XG4gICAgICAgIGlmIChwbGF5ZXJOdW1iZXIgPT0xKXtcbiAgICAgICAgICAgIGJvYXJkID0gYm9hcmQxO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBib2FyZCA9IGJvYXJkMjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaT0wO1xuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCBpc0hvcml6b250YWwgPSBmYWxzZTtcbiAgICAgICAgaWYgKGNvb3Jkc1sxXVswXSA9PSBjb29yZHNbMF1bMF0pe1xuICAgICAgICAgICAgaXNIb3Jpem9udGFsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBbeCx5XSBvZiBjb29yZHMpe1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlVG9DaGFuZ2UgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGBkaXYucm93LSR7eH0gPiBkaXY6bnRoLWNoaWxkKCR7eSsxfSlgKTtcbiAgICAgICAgICAgIHNxdWFyZVRvQ2hhbmdlLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgICAgc3F1YXJlVG9DaGFuZ2Uuc2V0QXR0cmlidXRlKFwibGVuZ3RoXCIsIHNoaXBMZW5ndGgpO1xuICAgICAgICAgICAgc3F1YXJlVG9DaGFuZ2Uuc2V0QXR0cmlidXRlKFwiZ3JhYkxvY2F0aW9uXCIsIGkpO1xuICAgICAgICAgICAgc3F1YXJlVG9DaGFuZ2Uuc2V0QXR0cmlidXRlKFwiaG9yaXpvbnRhbFwiLCBpc0hvcml6b250YWwpXG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJBdHRhY2tlZCA9IGZ1bmN0aW9uKHNxdWFyZURPTU5vZGUpe1xuICAgICAgICBzcXVhcmVET01Ob2RlLmNsYXNzTGlzdC5hZGQoXCJhdHRhY2tlZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJUdXJuU3dpdGNoVG8gPSBmdW5jdGlvbihwbGF5ZXJOdW1iZXIsIHBsYXllck5hbWUpe1xuICAgICAgICAvLyBhZGQgc2NyZWVuIHN3YXBwaW5nIG92ZXJsYXlcbiAgICAgICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuICAgICAgICAvLyBwbGF5ZXJOdW1iZXIgaXMgbnVtYmVyIG9mIHBsYXllciB3aG9zZSB0dXJuIGl0IHNob3VsZCBzd2l0Y2ggVE9cbiAgICAgICAgLy8gY2hhbmdlIGhlYWRlciB0byBcIkl0IGlzIHBsYXllcnN7cGxheWVyTnVtYmVyfS5uYW1lJ3MgdHVyblwiXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudWkuY29udGFpbmVyIC50dXJuLnRleHRcIik7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWV9J3MgVHVybmA7XG4gICAgICAgIC8vIGNoYW5nZSBib2FyZCBoZWFkZXIgZnJvbSBcIllvdXIgQm9hcmRcIiB0byBcIkVuZW15IEJvYXJkXCIgYW5kIHZpcyB2ZXJzYVxuICAgICAgICBjb25zdCBib2FyZDFIZWFkZXIgPSBib2FyZDEucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XG4gICAgICAgIGNvbnN0IGJvYXJkMkhlYWRlciA9IGJvYXJkMi5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcbiAgICAgICAgaWYgKHBsYXllck51bWJlciA9PSAxKXtcbiAgICAgICAgICAgIGJvYXJkMkhlYWRlci50ZXh0Q29udGVudCA9IFwiRW5lbXkgQm9hcmRcIjtcbiAgICAgICAgICAgIGJvYXJkMUhlYWRlci50ZXh0Q29udGVudCA9IFwiWW91ciBCb2FyZFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9hcmQxSGVhZGVyLnRleHRDb250ZW50ID0gXCJFbmVteSBCb2FyZFwiO1xuICAgICAgICAgICAgYm9hcmQySGVhZGVyLnRleHRDb250ZW50ID0gXCJZb3VyIEJvYXJkXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaGlkZSBzaGlwcyBmcm9tIGVuZW15IGJvYXJkIGFuZCByZXZlYWwgc2hpcHMgb24geW91ciBib2FyZFxuICAgICAgICBib2FyZDEubGFzdENoaWxkLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xuICAgICAgICBib2FyZDIubGFzdENoaWxkLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xuICAgIH1cblxuICAgIC8vIHJlbmRlciBlbmRpbmcgZ2FtZSAocGxheWVyTmFtZSBoYXMgd29uKVxuICAgIGNvbnN0IHJlbmRlckVuZEdhbWUgPSBmdW5jdGlvbih3aW5uZXJOYW1lKXtcbiAgICAgICAgY29uc3Qgd2lubmVyVGV4dENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJlbmQgY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCB3aW5uZXJUZXh0ID0gY3JlYXRlRWxlbWVudChcImgxXCIsIFwid2lubmVyIHRleHRcIik7XG4gICAgICAgIHdpbm5lclRleHQudGV4dENvbnRlbnQgPSBgQ29uZ3JhdHMhICR7d2lubmVyTmFtZX0gd29uLmA7O1xuICAgICAgICBjb25zdCBwbGF5QWdhaW5CdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwicmVzZXQgYnV0dG9uXCIpO1xuICAgICAgICBwbGF5QWdhaW5CdXR0b24udGV4dENvbnRlbnQgPSBcIlBsYXkgQWdhaW4/XCI7XG4gICAgICAgIHdpbm5lclRleHRDb250YWluZXIuYXBwZW5kKHdpbm5lclRleHQsIHBsYXlBZ2FpbkJ1dHRvbik7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgYm9keS5hcHBlbmQod2lubmVyVGV4dENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyU3RhZ2luZyA9IGZ1bmN0aW9uKGF0dGFja01hcDEsIHNoaXBNYXAxLCBhdHRhY2tNYXAyLCBzaGlwTWFwMil7XG4gICAgICAgIHJlbmRlckJvYXJkUmVzZXQoYXR0YWNrTWFwMSwgc2hpcE1hcDEsIGJvYXJkMSk7XG4gICAgICAgIHJlbmRlckJvYXJkUmVzZXQoYXR0YWNrTWFwMiwgc2hpcE1hcDIsIGJvYXJkMik7XG4gICAgICAgIHJlbmRlclNoaXBTYW1wbGVzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlQm9hcmRWaXNpYmlsaXR5ID0gZnVuY3Rpb24oYm9hcmRET00pe1xuICAgICAgICBib2FyZERPTS5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJCb2FyZFJlc2V0ID0gZnVuY3Rpb24oYXR0YWNrTWFwLCBzaGlwTWFwLCBib2FyZERPTSl7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gYm9hcmRET00ucXVlcnlTZWxlY3RvcihcIi5ib2FyZC5jb250YWluZXJcIik7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxhdHRhY2tNYXAubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gaTtcbiAgICAgICAgICAgIGNvbnN0IGF0dGFja2VkSW5Sb3cgPSBPYmplY3Qua2V5cyhhdHRhY2tNYXBbaV0pO1xuICAgICAgICAgICAgY29uc3Qgc2hpcEluUm93ID0gT2JqZWN0LmtleXMoc2hpcE1hcFtpXSk7XG4gICAgICAgICAgICBmb3IgKGxldCBhdHRhY2tlZCBvZiBhdHRhY2tlZEluUm93KXtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2wgPSBOdW1iZXIoYXR0YWNrZWQpKzE7XG4gICAgICAgICAgICAgICAgY29uc3QgZGl2VG9VbmF0dGFjayA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYGRpdi5yb3ctJHtyb3d9IGRpdjpudGgtY2hpbGQoJHtjb2x9KWApO1xuICAgICAgICAgICAgICAgIGRpdlRvVW5hdHRhY2suY2xhc3NMaXN0LnJlbW92ZShcImF0dGFja2VkXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBzaGlwIG9mIHNoaXBJblJvdyl7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sID0gTnVtYmVyKHNoaXApKzE7XG4gICAgICAgICAgICAgICAgY29uc3QgZGl2VG9VbnNoaXAgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGBkaXYucm93LSR7cm93fSBkaXY6bnRoLWNoaWxkKCR7Y29sfSlgKTtcbiAgICAgICAgICAgICAgICBkaXZUb1Vuc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyU2hpcFNhbXBsZXMgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBoaWRkZW5Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiaGlkZGVuIHNhbXBsZXNcIik7XG4gICAgICAgIGNvbnN0IGhvcml6b250YWxTaGlwcyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzaGlwcyBob3Jpem9udGFsXCIpO1xuICAgICAgICBjb25zdCB2ZXJ0aWNhbFNoaXBzID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInNoaXBzIHZlcnRpY2FsXCIpO1xuICAgICAgICBob3Jpem9udGFsU2hpcHMuYXBwZW5kKGJ1aWxkU2hpcE9mTGVuZ3RoKDIpLCBidWlsZFNoaXBPZkxlbmd0aCgzKSxcbiAgICAgICAgYnVpbGRTaGlwT2ZMZW5ndGgoNCksIGJ1aWxkU2hpcE9mTGVuZ3RoKDUpKTtcbiAgICAgICAgdmVydGljYWxTaGlwcy5hcHBlbmQoYnVpbGRTaGlwT2ZMZW5ndGgoMiksIGJ1aWxkU2hpcE9mTGVuZ3RoKDMpLFxuICAgICAgICBidWlsZFNoaXBPZkxlbmd0aCg0KSwgYnVpbGRTaGlwT2ZMZW5ndGgoNSkpO1xuICAgICAgICBoaWRkZW5Db250YWluZXIuYXBwZW5kKGhvcml6b250YWxTaGlwcyx2ZXJ0aWNhbFNoaXBzKTtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG4gICAgICAgIGJvZHkuYXBwZW5kKGhpZGRlbkNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgY29uc3QgYnVpbGRTaGlwT2ZMZW5ndGggPSBmdW5jdGlvbihsZW5ndGgpe1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJzaGlwIGNvbnRhaW5lclwiKTtcbiAgICAgICAgY29udGFpbmVyLmlkID0gYGxlbmd0aC0ke2xlbmd0aH1gO1xuICAgICAgICBmb3IgKGxldCBpID0wOyBpPGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZChwYXJ0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclN0YWdpbmdCdXR0b25zID0gZnVuY3Rpb24oYm9hcmRET00pe1xuICAgICAgICBjb25zdCBidXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsXCJzdWJtaXQgc3RhZ2luZ1wiKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJMb2NrIGluIHBvc2l0aW9ucyFcIjtcbiAgICAgICAgY29uc3Qgcm5nQnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcInJhbmRvbWl6ZSBidXR0b25cIik7XG4gICAgICAgIHJuZ0J1dHRvbi50ZXh0Q29udGVudCA9IFwiUmFuZG9taXplXCJcbiAgICAgICAgYm9hcmRET00ucGFyZW50Tm9kZS5hcHBlbmQoYnV0dG9uLCBybmdCdXR0b24pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlck1vdmVTaGlwID0gZnVuY3Rpb24oW29sZFhTdGFydCwgb2xkWVN0YXJ0XSwgW25ld1hTdGFydCwgbmV3WVN0YXJ0XSwgc2hpcExlbmd0aCwgaXNIb3Jpem9udGFsLCBib2FyZERPTU5vZGUpe1xuICAgICAgICBpZiAob2xkWFN0YXJ0ID09IG5ld1hTdGFydCAmJiBvbGRZU3RhcnQgPT0gbmV3WVN0YXJ0KXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNIb3Jpem9udGFsID09IFwidHJ1ZVwiKXtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxzaGlwTGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZVRvUmVtb3ZlID0gYm9hcmRET01Ob2RlLnF1ZXJ5U2VsZWN0b3IoYC5yb3ctJHtvbGRYU3RhcnR9IGRpdjpudGgtY2hpbGQoJHtvbGRZU3RhcnQraSsxfSlgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBncmFibG9jYXRpb24gPSBzcXVhcmVUb1JlbW92ZS5nZXRBdHRyaWJ1dGUoXCJncmFibG9jYXRpb25cIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUucmVtb3ZlQXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLnJlbW92ZUF0dHJpYnV0ZShcImxlbmd0aFwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5yZW1vdmVBdHRyaWJ1dGUoXCJncmFibG9jYXRpb25cIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUucmVtb3ZlQXR0cmlidXRlKFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKVxuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZVRvQWRkID0gYm9hcmRET01Ob2RlLnF1ZXJ5U2VsZWN0b3IoYC5yb3ctJHtuZXdYU3RhcnR9IGRpdjpudGgtY2hpbGQoJHtuZXdZU3RhcnQraSsxfSlgKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuc2V0QXR0cmlidXRlKFwibGVuZ3RoXCIsIHNoaXBMZW5ndGgpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLnNldEF0dHJpYnV0ZShcImdyYWJsb2NhdGlvblwiLCBncmFibG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLnNldEF0dHJpYnV0ZShcImhvcml6b250YWxcIiwgaXNIb3Jpem9udGFsKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHNoaXBMZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlVG9SZW1vdmUgPSBib2FyZERPTU5vZGUucXVlcnlTZWxlY3RvcihgLnJvdy0ke29sZFhTdGFydCtpfSBkaXY6bnRoLWNoaWxkKCR7b2xkWVN0YXJ0KzF9KWApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyYWJsb2NhdGlvbiA9IHNxdWFyZVRvUmVtb3ZlLmdldEF0dHJpYnV0ZShcImdyYWJsb2NhdGlvblwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5yZW1vdmVBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUucmVtb3ZlQXR0cmlidXRlKFwibGVuZ3RoXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLnJlbW92ZUF0dHJpYnV0ZShcImdyYWJsb2NhdGlvblwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5yZW1vdmVBdHRyaWJ1dGUoXCJob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpXG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlVG9BZGQgPSBib2FyZERPTU5vZGUucXVlcnlTZWxlY3RvcihgLnJvdy0ke25ld1hTdGFydCtpfSBkaXY6bnRoLWNoaWxkKCR7bmV3WVN0YXJ0KzF9KWApO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5zZXRBdHRyaWJ1dGUoXCJsZW5ndGhcIiwgc2hpcExlbmd0aCk7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuc2V0QXR0cmlidXRlKFwiZ3JhYmxvY2F0aW9uXCIsIGdyYWJsb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuc2V0QXR0cmlidXRlKFwiaG9yaXpvbnRhbFwiLCBpc0hvcml6b250YWwpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnRUeXBlLCBjbGFzc1N0cmluZyA9IHVuZGVmaW5lZCl7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XG4gICAgICAgIGlmIChjbGFzc1N0cmluZyAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzU3RyaW5nLnNwbGl0KFwiIFwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJue1xuICAgICAgICBpbml0R2FtZVJlbmRlcixcbiAgICAgICAgcmVuZGVyTmV3U2hpcCxcbiAgICAgICAgcmVuZGVyQXR0YWNrZWQsXG4gICAgICAgIHJlbmRlclR1cm5Td2l0Y2hUbyxcbiAgICAgICAgcmVuZGVyRW5kR2FtZSxcbiAgICAgICAgcmVuZGVyU3RhZ2luZyxcbiAgICAgICAgcmVuZGVyU2hpcFNhbXBsZXMsXG4gICAgICAgIHJlbmRlck1vdmVTaGlwLFxuICAgICAgICByZW5kZXJTdGFnaW5nQnV0dG9ucyxcbiAgICAgICAgdG9nZ2xlQm9hcmRWaXNpYmlsaXR5LFxuICAgIH1cblxufSgpO1xuXG5leHBvcnQge1JlbmRlck1hbmFnZXJ9OyIsImNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCl7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmhpdHMgPSAwO1xuICAgIH1cblxuICAgIGhpdCgpe1xuICAgICAgICB0aGlzLmhpdHMrKztcbiAgICB9XG5cbiAgICBpc1N1bmsoKXtcbiAgICAgICAgcmV0dXJuICh0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGgpXG4gICAgfVxufVxuXG5leHBvcnQge1NoaXB9OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIG1vZHVsZSB0byBtYW5hZ2UgZ2FtZSB1c2luZyBldmVudCBsaXN0ZW5lcnMgdG8gaW50ZXJhY3Qgd2l0aCBvYmplY3RzXG4vLyBjYWxscyBtZXRob2RzIGluIHJlbmRlci5qcyB0byBjaGFuZ2UgRE9NXG4vLyByZWFsaXN0aWNhbGx5IGRvZXMgbm90IGV4cG9ydCBhbnl0aGluZyBzaW5jZSBpdCBpcyBhIGRyaXZlclxuXG5pbXBvcnQge2h1bWFuUGxheWVyLCBjb21wdXRlclBsYXllcn0gZnJvbSBcIi4vcGxheWVyLmpzXCJcbmltcG9ydCB7UmVuZGVyTWFuYWdlcn0gZnJvbSBcIi4vcmVuZGVyLmpzXCJcblxuY29uc3QgR2FtZU1hbmFnZXIgPSBmdW5jdGlvbigpe1xuXG4gICAgY29uc3QgYWRkTmV3U2hpcCA9IGZ1bmN0aW9uKHBsYXllciwgLi4uY29vcmRzKXtcbiAgICAgICAgcGxheWVyLmdhbWVib2FyZC5uZXdTaGlwKC4uLmNvb3Jkcyk7XG4gICAgICAgIFJlbmRlck1hbmFnZXIucmVuZGVyTmV3U2hpcChwbGF5ZXIubnVtYmVyLC4uLmNvb3Jkcyk7XG4gICAgfVxuXG4gICAgLy8gcGFzc2VzIHR1cm4gdG8gcGxheWVyIDEgaWYgbnVtYmVyID0gMVxuICAgIC8vIGlmIGl0IGlzIHBsYXllciAxJ3MgdHVybiwgdGhlbiBib2FyZCAyIHNob3VsZCBiZSBBQ1RJVkVcbiAgICBjb25zdCBwYXNzVHVyblRvID0gZnVuY3Rpb24ocGxheWVyTnVtYmVyKXtcbiAgICAgICAgaWYgKHBsYXllck51bWJlciA9PSAxKXtcbiAgICAgICAgICAgIGFjdGl2YXRlRXZlbnRMaXN0ZW5lcihwbGF5ZXJzLnBsYXllcjIuYm9hcmRET00pO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBhY3RpdmF0ZUV2ZW50TGlzdGVuZXIocGxheWVycy5wbGF5ZXIxLmJvYXJkRE9NKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwbGF5ZXJOYW1lID0gT2JqZWN0LnZhbHVlcyhwbGF5ZXJzKVtwbGF5ZXJOdW1iZXItMV0ubmFtZTtcbiAgICAgICAgY29uc29sZS5sb2coYCR7cGxheWVyTmFtZX0ncyBUdXJuYCk7XG4gICAgICAgIFJlbmRlck1hbmFnZXIucmVuZGVyVHVyblN3aXRjaFRvKHBsYXllck51bWJlciwgcGxheWVyTmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oYm9hcmRET01Ob2RlKXtcbiAgICAgICAgYm9hcmRET01Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVCb2FyZENsaWNrKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVCb2FyZENsaWNrID0gYXN5bmMgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBsZXQgcGxheWVyTnVtYmVyID0gdGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJwbGF5ZXJudW1cIik7XG4gICAgICAgIGxldCB5ID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImNvbFwiKTtcbiAgICAgICAgbGV0IHggPSB0YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJyb3dcIik7XG4gICAgICAgIGxldCBwbGF5ZXJPYmplY3QgPSBwbGF5ZXJOdW1iZXIgPT0gMSA/IHBsYXllcnMucGxheWVyMSA6IHBsYXllcnMucGxheWVyMjtcbiAgICAgICAgcGxheWVyT2JqZWN0LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFt4LHldKTtcbiAgICAgICAgY29uc29sZS5sb2coYFJlY2VpdmVkIGF0dGFjayBhdCAoJHt4fSwke3l9KSBmb3IgcGxheWVyICR7cGxheWVyTnVtYmVyfWApO1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlckF0dGFja2VkKHRhcmdldCk7XG4gICAgICAgIHBsYXllck9iamVjdC5ib2FyZERPTS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQm9hcmRDbGljayk7XG4gICAgICAgIGF3YWl0IHNob3J0U2xlZXAoKTtcbiAgICAgICAgaWYgKHBsYXllck9iamVjdC5nYW1lYm9hcmQuaXNBbGxTdW5rKCkpe1xuICAgICAgICAgICAgZW5kR2FtZShwbGF5ZXJOdW1iZXIpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBwYXNzVHVyblRvKHBsYXllck51bWJlcik7IC8vIFdlIHBhc3MgdHVybiB0byBwbGF5ZXIncyBib2FyZCB3ZSBqdXN0IGNsaWNrZWRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGluaXRQbGF5ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gYXNzaWduIGV2ZW50IGxpc3RlbmVyIGZvciBhdHRhY2tzXG4gICAgICAgIC8vIGxhdGVyIG1ha2UgZmlyc3QgdHVybiByYW5kb20gb3IgY2hvc2VuXG4gICAgICAgIHBsYXllcnMucGxheWVyMi5ib2FyZERPTS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgICAgICAgcGFzc1R1cm5UbygxKTtcbiAgICAgICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcbiAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuXG4gICAgbGV0IHBsYXllcnM7XG4gICAgY29uc3QgaW5pdEdhbWUgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBwbGF5ZXIxID0gbmV3IGh1bWFuUGxheWVyKFwiQW15XCIsIDEpO1xuICAgICAgICBjb25zdCBwbGF5ZXIyID0gbmV3IGh1bWFuUGxheWVyKFwiQmFydFwiLCAyKTtcbiAgICAgICAgUmVuZGVyTWFuYWdlci5pbml0R2FtZVJlbmRlcihwbGF5ZXIxLCBwbGF5ZXIyKTtcbiAgICAgICAgY29uc3QgYm9hcmQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC1hbmQtaGVhZGVyLnBsYXllci0xIC5ib2FyZC5jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGJvYXJkMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtYW5kLWhlYWRlci5wbGF5ZXItMiAuYm9hcmQuY29udGFpbmVyXCIpO1xuICAgICAgICBwbGF5ZXIxLmJvYXJkRE9NID0gYm9hcmQxO1xuICAgICAgICBwbGF5ZXIyLmJvYXJkRE9NID0gYm9hcmQyO1xuICAgICAgICAvLyBlYWNoIHBsYXllciBoYXMgNSBzaGlwcyBvZiBzaXplIDIsIDMsIDMsIDQsIDVcbiAgICAgICAgcGxheWVycyA9IHtwbGF5ZXIxLCBwbGF5ZXIyfTtcbiAgICAgICAgZW50ZXJHYW1lU3RhZ2luZygpO1xuICAgICAgICAvL2p1c3QgZm9yIHRlc3RpbmchXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudWkuY29udGFpbmVyXCIpO1xuICAgICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGVuZEdhbWUoMSkpXG4gICAgfTtcblxuICAgIC8vIHBsYXllciB3aXRoIHBsYXllck51bWJlciBsb3N0XG4gICAgY29uc3QgZW5kR2FtZSA9IGZ1bmN0aW9uKHBsYXllck51bWJlcil7XG4gICAgICAgIGxldCB3aW5uZXJOYW1lO1xuICAgICAgICBpZiAocGxheWVyTnVtYmVyID09MSl7XG4gICAgICAgICAgICB3aW5uZXJOYW1lID0gcGxheWVycy5wbGF5ZXIyLm5hbWU7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHdpbm5lck5hbWUgPSBwbGF5ZXJzLnBsYXllcjEubmFtZTtcbiAgICAgICAgfVxuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlckVuZEdhbWUod2lubmVyTmFtZSk7XG4gICAgICAgIGFjdGl2YXRlUmVwbGF5QnV0dG9uKCk7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVSZXBsYXlCdXR0b24gPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCByZXBsYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmVuZC5jb250YWluZXIgYnV0dG9uXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXBsYXlCdXR0b24pO1xuICAgICAgICByZXBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVudGVyR2FtZVN0YWdpbmcpO1xuICAgIH1cblxuICAgIC8vIFNUQVJUIE9GIENPREUgUkVMQVRFRCBUTyBHQU1FIFNUQUdJTkdcbiAgICBjb25zdCBlbnRlckdhbWVTdGFnaW5nID0gZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gYWN0aXZhdGUgZHJhZyBhbmQgZHJvcCBvZiBzaGlwcyB0byBjaG9vc2Ugc2hpcCBsb2NhdGlvbiB1c2luZyBIVE1MIGRyYWcgYW5kIGRyb3AgQVBJIVxuICAgICAgICBjb25zb2xlLmxvZyhcIkVudGVyaW5nIG5ldyBnYW1lIHN0YWdpbmchXCIpXG4gICAgICAgIFJlbmRlck1hbmFnZXIucmVuZGVyU3RhZ2luZyhcbiAgICAgICAgICAgIHBsYXllcnMucGxheWVyMS5nYW1lYm9hcmQuZ2V0QXR0YWNrTWFwKCksXG4gICAgICAgICAgICBwbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLmdldEJvYXJkTWFwKCksXG4gICAgICAgICAgICBwbGF5ZXJzLnBsYXllcjIuZ2FtZWJvYXJkLmdldEF0dGFja01hcCgpLFxuICAgICAgICAgICAgcGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5nZXRCb2FyZE1hcCgpXG4gICAgICAgICk7XG4gICAgICAgIHBsYXllcnMucGxheWVyMS5nYW1lYm9hcmQucmVzZXRCb2FyZCgpO1xuICAgICAgICBwbGF5ZXJzLnBsYXllcjIuZ2FtZWJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgICAgICAgYWN0aXZhdGVTdGFnaW5nKHBsYXllcnMucGxheWVyMSlcbiAgICAgICAgLy8gcmVwZWF0IGZvciBib2FyZCAyXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVTdGFnaW5nID0gZnVuY3Rpb24ocGxheWVyKXtcbiAgICAgICAgY29uc3QgYm9hcmQxID0gcGxheWVyLmJvYXJkRE9NO1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnRvZ2dsZUJvYXJkVmlzaWJpbGl0eShib2FyZDEpO1xuICAgICAgICByZW5kZXJEcmFnZ2FibGVTaGlwc1RvU3RhZ2UocGxheWVyKTtcbiAgICAgICAgYWN0aXZhdGVEcm9wQW5kRHJhZ1N0YXJ0SGFuZGxlcihib2FyZDEpO1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlclN0YWdpbmdCdXR0b25zKGJvYXJkMSk7XG4gICAgICAgIGFjdGl2YXRlU3RhZ2luZ0J1dHRvbnMocGxheWVyKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJEcmFnZ2FibGVTaGlwc1RvU3RhZ2UgPSBmdW5jdGlvbihwbGF5ZXIpe1xuICAgICAgICBhZGROZXdTaGlwV2l0aERyYWdnaW5nKHBsYXllcixbMCwwXSxbMCwxXSlcbiAgICAgICAgYWRkTmV3U2hpcFdpdGhEcmFnZ2luZyhwbGF5ZXIsWzMsM10sWzQsM10sWzUsM10pO1xuICAgICAgICBhZGROZXdTaGlwV2l0aERyYWdnaW5nKHBsYXllcixbNyw3XSxbOCw3XSxbOSw3XSk7XG4gICAgICAgIGFkZE5ld1NoaXBXaXRoRHJhZ2dpbmcocGxheWVyLFswLDNdLCBbMCw0XSxbMCw1XSxbMCw2XSk7XG4gICAgICAgIGFkZE5ld1NoaXBXaXRoRHJhZ2dpbmcocGxheWVyLFs1LDVdLCBbNiw1XSxbNyw1XSxbOCw1XSxbOSw1XSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkTmV3U2hpcFdpdGhEcmFnZ2luZyA9IGZ1bmN0aW9uKHBsYXllciwgLi4uY29vcmRzKXtcbiAgICAgICAgYWRkTmV3U2hpcChwbGF5ZXIsIC4uLmNvb3Jkcyk7XG4gICAgICAgIHNldFNwZWNpZmljRHJhZ2dhYmxlKHBsYXllci5ib2FyZERPTSwgLi4uY29vcmRzKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRTcGVjaWZpY0RyYWdnYWJsZSA9IGZ1bmN0aW9uKGJvYXJkRE9NLCAuLi5jb29yZHMpe1xuICAgICAgICBmb3IgKGxldCBbeCx5XSBvZiBjb29yZHMpe1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gYm9hcmRET00ucXVlcnlTZWxlY3RvcihgLnJvdy0ke3h9IGRpdjpudGgtY2hpbGQoJHt5KzF9KWApO1xuICAgICAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlU3RhZ2luZ0J1dHRvbnMgPSBmdW5jdGlvbihwbGF5ZXIpe1xuICAgICAgICBjb25zdCBib2FyZERPTSA9IHBsYXllci5ib2FyZERPTTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gYm9hcmRET00ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNvbXBsZXRlU3RhZ2luZyhib2FyZERPTSkpXG4gICAgICAgIGNvbnN0IHJuZ0J1dHRvbiA9IGJ1dHRvbi5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIHJuZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcmFuZG9taXplQm9hcmQocGxheWVyKSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmFuZG9taXplQm9hcmQgPSBmdW5jdGlvbihwbGF5ZXIpe1xuICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnJhbmRvbWl6ZUJvYXJkKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGVTdGFnaW5nID0gZnVuY3Rpb24oYm9hcmRET00pe1xuICAgICAgICBkZWFjdGl2YXRlU3RhZ2luZyhib2FyZERPTSk7XG4gICAgICAgIC8vYnJlYWtTY3JlZW5cbiAgICAgICAgaWYgKGJvYXJkRE9NLmdldEF0dHJpYnV0ZShcInBsYXllcm51bVwiKSA9PSBcIjFcIil7XG4gICAgICAgICAgICBhY3RpdmF0ZVN0YWdpbmcocGxheWVycy5wbGF5ZXIyKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgaW5pdFBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRlYWN0aXZhdGVTdGFnaW5nID0gZnVuY3Rpb24oYm9hcmRET00pe1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnRvZ2dsZUJvYXJkVmlzaWJpbGl0eShib2FyZERPTSk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGJvYXJkRE9NLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgYnV0dG9uLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgY29uc3Qgcm93cyA9IGJvYXJkRE9NLmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8MTA7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCByb3cgPSByb3dzW2ldO1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlcyA9IHJvdy5jaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajwxMDsgaisrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBzcXVhcmVzW2pdO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgb25kcmFnb3ZlckhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBkcm9wSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZ3N0YXJ0SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0YXJnZXQgaXMgPGRpdiBjb2w9XCJcIj4gKGVnOiBzcXVhcmUpXG4gICAgY29uc3QgZHJhZ3N0YXJ0SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgY29uc29sZS5sb2coXCJkcmFnIGV2ZW50IHRyaWdnZXJlZFwiKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBsZXQgc2hpcExlbmd0aCA9IE51bWJlcih0YXJnZXQuZ2V0QXR0cmlidXRlKFwibGVuZ3RoXCIpKTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJzaGlwTGVuZ3RoXCIsIHNoaXBMZW5ndGgpO1xuICAgICAgICBsZXQgZ3JhYkxvY2F0aW9uID0gTnVtYmVyKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJncmFibG9jYXRpb25cIikpO1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImdyYWJMb2NhdGlvblwiLCBncmFiTG9jYXRpb24pO1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImhvcml6b250YWxcIiwgdGFyZ2V0LmdldEF0dHJpYnV0ZShcImhvcml6b250YWxcIikpO1xuICAgICAgICBsZXQgc3RhcnRSb3cgPSBOdW1iZXIodGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwicm93XCIpKTtcbiAgICAgICAgbGV0IHN0YXJ0Q29sID0gTnVtYmVyKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjb2xcIikpO1xuICAgICAgICBsZXQgaXNIb3Jpem9udGFsID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImhvcml6b250YWxcIik7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwic3RhcnRSb3dcIiwgc3RhcnRSb3cpO1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInN0YXJ0Q29sXCIsIHN0YXJ0Q29sKTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJpc0hvcml6b250YWxcIiwgaXNIb3Jpem9udGFsKVxuICAgICAgICBjb25zdCB3aWR0aE9mRGl2ID0gMjA7XG4gICAgICAgIGNvbnN0IHdpZHRoT2ZHYXAgPSAxO1xuICAgICAgICAvLyBpZiBncmFibG9jYXRpb24gPSAwLCBkb24ndCBhZGQgYW55dGhpbmdcbiAgICAgICAgLy8gaWYgZ3JhYmxvY2F0aW9uID0gMSwgYWRkIDEgZ2FwIGFuZCAxIGRpdlxuICAgICAgICAvLyBpZiBncmFibG9jYXRpb24gPSAyLCBhZGQgMiBnYXBzIGFuZCAyIGRpdnNcbiAgICAgICAgbGV0IGFkZE9mZnNldFggPSAwO1xuICAgICAgICBsZXQgYWRkT2Zmc2V0WSA9IDA7XG4gICAgICAgIGxldCBkcmFnSW1hZ2VOb2RlO1xuICAgICAgICBpZiAoaXNIb3Jpem9udGFsID09IFwidHJ1ZVwiKXtcbiAgICAgICAgICAgIGRyYWdJbWFnZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaGlkZGVuLnNhbXBsZXMgLnNoaXBzLmhvcml6b250YWwgI2xlbmd0aC0ke3NoaXBMZW5ndGh9YCk7XG4gICAgICAgICAgICBhZGRPZmZzZXRYID0gKGdyYWJMb2NhdGlvbiAqICh3aWR0aE9mRGl2K3dpZHRoT2ZHYXApKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgZHJhZ0ltYWdlTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5oaWRkZW4uc2FtcGxlcyAuc2hpcHMudmVydGljYWwgI2xlbmd0aC0ke3NoaXBMZW5ndGh9YCk7XG4gICAgICAgICAgICBhZGRPZmZzZXRZID0gKGdyYWJMb2NhdGlvbiAqICh3aWR0aE9mRGl2K3dpZHRoT2ZHYXApKVxuICAgICAgICB9XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoZHJhZ0ltYWdlTm9kZSxldmVudC5vZmZzZXRYICsgYWRkT2Zmc2V0WCxldmVudC5vZmZzZXRZK2FkZE9mZnNldFkpO1xuICAgICAgICAvLyBkeW5hbWljYWxseSBhbGxvdyB3aGVyZSB3ZSBjYW4gZHJvcCB3aXRoIG9uZHJhZ292ZXIgYXR0cmlidXRlXG4gICAgICAgIGNvbnN0IHBsYXllck51bSA9IHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwicGxheWVybnVtXCIpO1xuICAgICAgICBsZXQgcGxheWVyVmFyO1xuICAgICAgICBpZiAocGxheWVyTnVtID09MSl7XG4gICAgICAgICAgICBwbGF5ZXJWYXIgPSBwbGF5ZXJzLnBsYXllcjE7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHBsYXllclZhciA9IHBsYXllcnMucGxheWVyMjtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInBsYXllcm51bVwiLCBwbGF5ZXJOdW0pO1xuICAgICAgICBjb25zdCBzaGlwT2JqZWN0ID0gcGxheWVyVmFyLmdhbWVib2FyZC5nZXRTaGlwRnJvbUNvb3Jkcyhbc3RhcnRSb3csIHN0YXJ0Q29sXSk7XG4gICAgICAgIHBsYXllclZhci5nYW1lYm9hcmQuY3JlYXRlQWxsb3dlZFBvc2l0aW9uTWFwKHNoaXBPYmplY3QsIGlzSG9yaXpvbnRhbCwgZ3JhYkxvY2F0aW9uKTtcbiAgICAgICAgYWN0aXZhdGVPbmRyYWdvdmVyKHBsYXllclZhcik7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVPbmRyYWdvdmVyID0gZnVuY3Rpb24ocGxheWVyKXtcbiAgICAgICAgY29uc3Qgcm93cyA9IHBsYXllci5ib2FyZERPTS5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDEwOyBpKyspe1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gcm93c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZXMgPSByb3cuY2hpbGRyZW47XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8MTA7IGorKyl7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gc3F1YXJlc1tqXTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGAke3BsYXllci5nYW1lYm9hcmQuaXNUaGlzQWxsb3dlZFBsYWNlbWVudChbaSxqXSl9YClcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5pc1RoaXNBbGxvd2VkUGxhY2VtZW50KFtpLGpdKSl7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgb25kcmFnb3ZlckhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBkcmFnb3ZlciBhbGxvd2VkIG9uIFske2l9LCAke2p9XWApXG4gICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIG9uZHJhZ292ZXJIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgZHJhZ292ZXIgbm90IGFsbG93ZWQgb24gWyR7aX0sICR7an1dYClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZURyb3BBbmREcmFnU3RhcnRIYW5kbGVyID0gZnVuY3Rpb24ocGxheWVyQm9hcmQpe1xuICAgICAgICBmb3IgKGxldCByb3cgb2YgcGxheWVyQm9hcmQuY2hpbGRyZW4pe1xuICAgICAgICAgICAgZm9yIChsZXQgY29sIG9mIHJvdy5jaGlsZHJlbil7XG4gICAgICAgICAgICAgICAgY29sLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGRyb3BIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBjb2wuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnc3RhcnRIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9uZHJhZ292ZXJIYW5kbGVyID0gZnVuY3Rpb24oZXYpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImRyYWdvdmVyIGRldGVjdGVkIVwiKVxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGRyb3BIYW5kbGVyID0gZnVuY3Rpb24oZXYpe1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCByb3cgPSBOdW1iZXIoZXYudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwicm93XCIpKTtcbiAgICAgICAgY29uc3QgY29sID0gTnVtYmVyKGV2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjb2xcIikpO1xuICAgICAgICBsZXQgbmV3U3RhcnRSb3cgPSByb3c7XG4gICAgICAgIGxldCBvbGRTdGFydFJvdyA9IE51bWJlcihldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInN0YXJ0Um93XCIpKTtcbiAgICAgICAgbGV0IG5ld1N0YXJ0Q29sID0gY29sO1xuICAgICAgICBsZXQgb2xkU3RhcnRDb2wgPSBOdW1iZXIoZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJzdGFydENvbFwiKSk7XG4gICAgICAgIGNvbnN0IGdyYWJMb2NhdGlvbiA9IE51bWJlcihldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImdyYWJMb2NhdGlvblwiKSk7XG4gICAgICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiaXNIb3Jpem9udGFsXCIpO1xuICAgICAgICBpZiAoaXNIb3Jpem9udGFsID09IFwidHJ1ZVwiKXtcbiAgICAgICAgICAgIG5ld1N0YXJ0Q29sIC09IGdyYWJMb2NhdGlvbjtcbiAgICAgICAgICAgIG9sZFN0YXJ0Q29sIC09IGdyYWJMb2NhdGlvbjtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgbmV3U3RhcnRSb3cgLT0gZ3JhYkxvY2F0aW9uO1xuICAgICAgICAgICAgb2xkU3RhcnRSb3cgLT0gZ3JhYkxvY2F0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBsYXllck51bSA9IGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwicGxheWVybnVtXCIpO1xuICAgICAgICBsZXQgcGxheWVyO1xuICAgICAgICBpZiAocGxheWVyTnVtID09MSl7XG4gICAgICAgICAgICBwbGF5ZXIgPSBwbGF5ZXJzLnBsYXllcjE7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHBsYXllciA9IHBsYXllcnMucGxheWVyMjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gTnVtYmVyKGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwic2hpcExlbmd0aFwiKSk7XG4gICAgICAgIC8vIGNoYW5nZSB0aGUgZ2FtZWJvYXJkIGRhdGFcbiAgICAgICAgcGxheWVyLmdhbWVib2FyZC5tb3ZlU2hpcChwbGF5ZXIuZ2FtZWJvYXJkLmdldFNoaXBGcm9tQ29vcmRzKFtvbGRTdGFydFJvdyxvbGRTdGFydENvbF0pLFxuICAgICAgICBbbmV3U3RhcnRSb3csbmV3U3RhcnRDb2xdLCBzaGlwTGVuZ3RoLCBpc0hvcml6b250YWwpO1xuICAgICAgICAvLyByZW5kZXIgY2hhbmdlcyBhbmQgYWxzbyBtYW5hZ2VzIGRyYWdnYWJsZVxuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlck1vdmVTaGlwKFtvbGRTdGFydFJvdyxvbGRTdGFydENvbF0sXG4gICAgICAgIFtuZXdTdGFydFJvdyxuZXdTdGFydENvbF0sIHNoaXBMZW5ndGgsIGlzSG9yaXpvbnRhbCwgcGxheWVyLmJvYXJkRE9NKTtcbiAgICB9XG4gICAgLy8gRU5EIE9GIENPREUgUkVMQVRFRCBUTyBTVEFHSU5HXG5cbiAgICBjb25zdCBzaG9ydFNsZWVwID0gZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSk7XG4gICAgfVxuXG5cbiAgICAvLyBEUklWRVIgQ09ERVxuICAgIGluaXRHYW1lKCk7XG5cbiAgICByZXR1cm57XG4gICAgICAgIHBsYXllcnMsXG4gICAgfVxufSgpO1xuXG5leHBvcnQge0dhbWVNYW5hZ2VyfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==