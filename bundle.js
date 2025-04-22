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


    // DRIVER CODE
    initGame();

    return{
        players,
    }
}();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4uL2xpbmtlZC1saXN0cy9saW5rZWRsaXN0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMaW5rZWRMaXN0IHJlcHJlc2VudHMgZnVsbCBsaXN0XG5jb25zdCBMaW5rZWRMaXN0ID0gZnVuY3Rpb24gKCkge1xuICBsZXQgaGVhZE5vZGUgPSBudWxsO1xuICBjb25zdCBoZWFkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBoZWFkTm9kZTtcbiAgfTtcblxuICBjb25zdCB0YWlsID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgd2hpbGUgKG5vZGUubmV4dE5vZGUgIT0gbnVsbCkge1xuICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIGNvbnN0IGFwcGVuZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmIChoZWFkTm9kZSA9PSBudWxsKSB7XG4gICAgICBoZWFkTm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFpbCgpLm5leHROb2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwcmVwZW5kID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKGhlYWROb2RlID09IG51bGwpIHtcbiAgICAgIGhlYWROb2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkTm9kZSA9IG5ldyBOb2RlKHZhbHVlLCBoZWFkTm9kZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBpZiAoaGVhZE5vZGUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgICBsZXQgbm9kZSA9IGhlYWROb2RlO1xuICAgIHdoaWxlIChub2RlLm5leHROb2RlICE9IG51bGwpIHtcbiAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgICAgY291bnQrKztcbiAgICB9XG4gICAgcmV0dXJuIGNvdW50O1xuICB9O1xuXG4gIC8vIGNvdW50IGluZGV4IGZyb20gMVxuICBjb25zdCBhdCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIGlmIChpbmRleCA8PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IG5vZGUgPSBoZWFkTm9kZTtcbiAgICB3aGlsZSAoaW5kZXggPiAxKSB7XG4gICAgICBub2RlID0gbm9kZS5uZXh0Tm9kZTtcbiAgICAgIGluZGV4LS07XG4gICAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICBjb25zdCBwb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHNlY29uZFRvTGFzdEluZGV4ID0gc2l6ZSgpIC0gMTtcbiAgICBsZXQgc2Vjb25kVG9MYXN0Tm9kZSA9IGF0KHNlY29uZFRvTGFzdEluZGV4KTtcbiAgICBzZWNvbmRUb0xhc3ROb2RlLm5leHROb2RlID0gbnVsbDtcbiAgfTtcblxuICAvLyByZXR1cm5zIHRydWUgaWYgdmFsdWUgcGFzc2VkIGlzIGluIGxpc3QsIGVsc2UgcmV0dXJucyBmYWxzZVxuICBjb25zdCBjb250YWlucyA9IGZ1bmN0aW9uICh2YWx1ZSwgY29tcGFyZUtleSA9IFwidmFsdWVcIikge1xuICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUudmFsdWUgPT0gdmFsdWUgfHwgbm9kZS52YWx1ZVtjb21wYXJlS2V5XSA9PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLy8gcmV0dXJucyBpbmRleCBvZiBub2RlIGNvbnRhaW5pbmcgdmFsdWUsIG9yIG51bGwgaWYgbm90IGZvdW5kXG4gIGNvbnN0IGZpbmQgPSBmdW5jdGlvbiAodmFsdWUsIGNvbXBhcmVLZXkgPSBcInZhbHVlXCIpIHtcbiAgICBsZXQgbm9kZSA9IGhlYWROb2RlO1xuICAgIGxldCBpbmRleCA9IDE7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUudmFsdWUgPT0gdmFsdWUgfHwgbm9kZS52YWx1ZVtjb21wYXJlS2V5XSA9PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0Tm9kZTtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgLy8gcmV0dXJucyBub2RlIGNvbnRhaW5pbmcgdmFsdWUsIG9yIG51bGwgaWYgbm90IGZvdW5kXG4gIC8vIGJ1dCBjaGVja3MgZm9yIG5vZGUuY2FsbGJhY2tmdW5jdGlvbigpIGJlaW5nIGVxdWFsIHRvIHZhbHVlXG4gIGNvbnN0IGZpbmRDYWxsYmFjayA9IGZ1bmN0aW9uICh2YWx1ZSwgY2FsbGJhY2tGdW5jdGlvbikge1xuICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUudmFsdWVbY2FsbGJhY2tGdW5jdGlvbl0oKSA9PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTsgIFxuXG4gIC8vIHNhbWUgYXMgZmluZCwgYnV0IHJldHVybnMgdGhlIG5vZGUsIG5vdCBpbmRleFxuICBjb25zdCBmaW5kTm9kZSA9IGZ1bmN0aW9uICh2YWx1ZSwgY29tcGFyZUtleSA9IFwidmFsdWVcIikge1xuICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUudmFsdWUgPT0gdmFsdWUgfHwgbm9kZS52YWx1ZVtjb21wYXJlS2V5XSA9PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICAvLyByZXR1cm5zIHN0cmluZyBvZiBub2RlIHZhbHVlcyBpbiBmb3JtYXQgXCIodmFsdWUpIC0+ICh2YWx1ZSkgLT4gbnVsbFwiXG4gIGNvbnN0IHRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChoZWFkTm9kZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IHN0cmluZyA9IGAoICR7aGVhZE5vZGUudmFsdWV9IClgO1xuICAgIGxldCBub2RlID0gaGVhZE5vZGUubmV4dE5vZGU7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgc3RyaW5nICs9IGAgLT4gKCAke25vZGUudmFsdWV9IClgO1xuICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgfVxuICAgIHN0cmluZyArPSBcIiAtPiBudWxsXCI7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcblxuICAvLyBpbnNlcnRzIG5ldyBOb2RlIHdpdGggdmFsdWUgYXQgaW5kZXggKGNvdW50aW5nIGZyb20gMSlcbiAgY29uc3QgaW5zZXJ0QXQgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgY29uc3QgcHJpb3JJbmRleCA9IGluZGV4IC0gMTtcbiAgICBpZiAocHJpb3JJbmRleCA9PSAwKSB7XG4gICAgICBwcmVwZW5kKHZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHByaW9yTm9kZSA9IGF0KHByaW9ySW5kZXgpO1xuICAgIGlmIChwcmlvck5vZGUgPT0gbnVsbCkge1xuICAgICAgZXJyb3IubG9nKGAke2luZGV4fSBpcyBub3QgdmFsaWQgaW5kZXguYCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5leHROb2RlID0gcHJpb3JOb2RlLm5leHROb2RlO1xuICAgICAgcHJpb3JOb2RlLm5leHROb2RlID0gbmV3IE5vZGUodmFsdWUsIG5leHROb2RlKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gcmVtb3ZlcyBub2RlIGF0IGluZGV4IChjb3VudGluZyBmcm9tIDEpXG4gIGNvbnN0IHJlbW92ZUF0ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgY29uc3QgcHJpb3JJbmRleCA9IGluZGV4IC0gMTtcbiAgICBpZiAocHJpb3JJbmRleCA9PSAwKSB7XG4gICAgICBsZXQgbm9kZVRvUmVtb3ZlID0gaGVhZE5vZGU7XG4gICAgICBoZWFkTm9kZSA9IGhlYWROb2RlLm5leHROb2RlO1xuICAgICAgbm9kZVRvUmVtb3ZlID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHByaW9yTm9kZSA9IGF0KHByaW9ySW5kZXgpO1xuICAgIGxldCBub2RlVG9SZW1vdmUgPSBwcmlvck5vZGUubmV4dE5vZGU7XG4gICAgY29uc3QgbmV4dE5vZGUgPSBwcmlvck5vZGUubmV4dE5vZGUubmV4dE5vZGU7XG4gICAgcHJpb3JOb2RlLm5leHROb2RlID0gbmV4dE5vZGU7XG4gICAgbm9kZVRvUmVtb3ZlID0gbnVsbDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGhlYWQsXG4gICAgdGFpbCxcbiAgICBhcHBlbmQsXG4gICAgcHJlcGVuZCxcbiAgICBzaXplLFxuICAgIGF0LFxuICAgIHBvcCxcbiAgICBjb250YWlucyxcbiAgICBmaW5kLFxuICAgIHRvU3RyaW5nLFxuICAgIGluc2VydEF0LFxuICAgIHJlbW92ZUF0LFxuICAgIGZpbmROb2RlLFxuICAgIGZpbmRDYWxsYmFjayxcbiAgfTtcbn07XG5cbi8vIE5vZGUgY29udGFpbnMgdmFsdWUgcHJvcGVydHksIG5leHROb2RlXG5cbmNvbnN0IE5vZGUgPSBmdW5jdGlvbiAodmFsdWUgPSBudWxsLCBuZXh0Tm9kZSA9IG51bGwpIHtcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZSxcbiAgICBuZXh0Tm9kZSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IExpbmtlZExpc3QsIE5vZGUgfTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5e1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciAxMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcblxuICAgIC8qIGdyaWQgYXJlYSBpcyByIC8gYyAvIHIgLyBjICovXG4gICAgLnVpLmNvbnRhaW5lcntcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xuICAgIH1cblxuICAgIC5ib2FyZC5jb250YWluZXIucGxheWVyLTF7XG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcbiAgICB9XG5cbiAgICAuYm9hcmQuY29udGFpbmVyLnBsYXllci0ye1xuICAgICAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XG4gICAgfVxuXG4gICAgLmhpZGRlbi5zYW1wbGVze1xuICAgICAgICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDM7XG4gICAgfVxufVxuXG4uYm9hcmQuY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFweDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cbiAgICA+IGRpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZ2FwOiAxcHg7XG5cbiAgICAgICAgZGl2e1xuICAgICAgICAgICAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyYXk7XG4gICAgICAgIH1cblxuICAgICAgICAuc2hpcC5hdHRhY2tlZHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdHRhY2tlZHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJvYXJkLmNvbnRhaW5lci52aXNpYmxle1xuICAgIC5zaGlwe1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIH1cbn1cblxuLyogc3R5bGUgc2hpcHMgb2ZmIGJvYXJkIGR1cmluZyBzdGFnaW5nICovXG4uaGlkZGVuLnNhbXBsZXN7XG4gICAgPiBkaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogM3B4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgID4gZGl2e1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGdhcDogMXB4O1xuICAgICAgICBcbiAgICAgICAgICAgIGRpdntcbiAgICAgICAgICAgICAgICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjphcXVhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnZlcnRpY2FsID4gZGl2e1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbn1cblxuLyogc3R5bGUgZGlhbG9nICovXG46OmJhY2tkcm9we1xuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtDQUFrQztJQUNsQyw4QkFBOEI7O0lBRTlCLCtCQUErQjtJQUMvQjtRQUNJLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLHdCQUF3QjtJQUM1QjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLHVCQUF1Qjs7SUFFdkI7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFFBQVE7O1FBRVI7WUFDSSxpQkFBaUI7WUFDakIsWUFBWTtZQUNaLHFCQUFxQjtRQUN6Qjs7UUFFQTtZQUNJLHdCQUF3QjtRQUM1Qjs7UUFFQTtZQUNJLHFCQUFxQjtRQUN6QjtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtBQUNKOztBQUVBLHlDQUF5QztBQUN6QztJQUNJO1FBQ0ksYUFBYTtRQUNiLFFBQVE7UUFDUixzQkFBc0I7O1FBRXRCO1lBQ0ksdUJBQXVCO1lBQ3ZCLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLFFBQVE7O1lBRVI7Z0JBQ0ksaUJBQWlCO2dCQUNqQixZQUFZO2dCQUNaLHFCQUFxQjtZQUN6QjtRQUNKO0lBQ0o7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7QUFDSjs7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSx3QkFBd0I7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciAxMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuXFxuICAgIC8qIGdyaWQgYXJlYSBpcyByIC8gYyAvIHIgLyBjICovXFxuICAgIC51aS5jb250YWluZXJ7XFxuICAgICAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICAgIH1cXG5cXG4gICAgLmJvYXJkLmNvbnRhaW5lci5wbGF5ZXItMXtcXG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG4gICAgfVxcblxcbiAgICAuYm9hcmQuY29udGFpbmVyLnBsYXllci0ye1xcbiAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcbiAgICB9XFxuXFxuICAgIC5oaWRkZW4uc2FtcGxlc3tcXG4gICAgICAgIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMztcXG4gICAgfVxcbn1cXG5cXG4uYm9hcmQuY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFweDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXG4gICAgPiBkaXZ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGdhcDogMXB4O1xcblxcbiAgICAgICAgZGl2e1xcbiAgICAgICAgICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyYXk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2hpcC5hdHRhY2tlZHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuYXR0YWNrZWR7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5ib2FyZC5jb250YWluZXIudmlzaWJsZXtcXG4gICAgLnNoaXB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgICB9XFxufVxcblxcbi8qIHN0eWxlIHNoaXBzIG9mZiBib2FyZCBkdXJpbmcgc3RhZ2luZyAqL1xcbi5oaWRkZW4uc2FtcGxlc3tcXG4gICAgPiBkaXZ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiAzcHg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICAgICAgPiBkaXZ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgICAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgICBnYXA6IDFweDtcXG4gICAgICAgIFxcbiAgICAgICAgICAgIGRpdntcXG4gICAgICAgICAgICAgICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjphcXVhO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAudmVydGljYWwgPiBkaXZ7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxufVxcblxcbi8qIHN0eWxlIGRpYWxvZyAqL1xcbjo6YmFja2Ryb3B7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7U2hpcH0gZnJvbSBcIi4vc2hpcC5qc1wiO1xuaW1wb3J0IHtMaW5rZWRMaXN0fSBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2xpbmtlZC1saXN0cy9saW5rZWRsaXN0LmpzXCJcblxuY29uc3QgR2FtZWJvYXJkID0gZnVuY3Rpb24gKCkge1xuICBsZXQgYm9hcmRNYXA7XG4gIGxldCBhdHRhY2tNYXA7XG4gIC8vIG1ha2UgZWFjaCBtYXAgYW4gYXJyYXkgb2YgMTAgd2l0aCBlYWNoIGFycmF5IGJlaW5nIGFuIG9iamVjdCAoc2ltaWxhciB0byBoYXNoIG1hcClcbiAgY29uc3QgaW5pdEJvYXJkID0gZnVuY3Rpb24gKCkge1xuICAgIGJvYXJkTWFwID0gW3t9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9XTtcbiAgICBhdHRhY2tNYXAgPSBbe30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge31dO1xuICB9KCk7XG5cbiAgY29uc3QgZ2V0Qm9hcmRNYXAgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBib2FyZE1hcDtcbiAgfVxuXG4gIGNvbnN0IGdldEF0dGFja01hcCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGF0dGFja01hcDtcbiAgfVxuXG4gIC8vIGJhc2VkIG9uIHRoZSB3YXkgd2UgaW1wbGVtZW50ZWQsXG4gIC8vIHRoZSBmaXJzdCBpbmRleCBmb3IgYXJyYXkgaXMgdGhlIHItdmFsdWUgb3IgdGhlIGNvbHVtbiBpbiBhIG1hdHJpeC9ncmlkXG4gIC8vIHRoZSBzZWNvbmQgaW5kZXggZm9yIG9iamVjdCBrZXkgaXMgdGhlIGMtdmFsdWUgb3IgdGhlIHJvdyBpbiBhIG1hdHJpeC9ncmlkIChpbmNyZWFzZXMgZ29pbmcgZG93bilcbiAgbGV0IHNoaXBMaXN0ID0gbmV3IExpbmtlZExpc3QoKTtcbiAgLy8gdXNlIHJlc3QgcGFyYW1ldGVyICguLi4pIHRvIGFjY2VwdCB2YXJpYWJsZSBhbW91bnQgb2YgY29vcmRzXG4gIGNvbnN0IG5ld1NoaXAgPSBmdW5jdGlvbiAoLi4uY29vcmRzKSB7XG4gICAgICBjb25zdCBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmRzLmxlbmd0aCk7XG4gICAgICBpZiAoaXNTaGlwQXRDb29yZHMoLi4uY29vcmRzKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGJvYXJkTWFwKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEb24ndCBvdmVybGFwIHNoaXBzIGF0OiAke2Nvb3Jkc31gKTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IFtyLGNdIG9mIGNvb3Jkcyl7XG4gICAgICAgIGlmIChjIDwgMTAgJiYgYyA+PTApe1xuICAgICAgICAgIGJvYXJkTWFwW3JdW2NdID0gbmV3U2hpcDtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgIGNvbnNvbGUubG9nKGNvb3Jkcyk7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCYWQgY29sIGlucHV0IGZvciBuZXdTaGlwKCk6ICR7Y29vcmRzfWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBhZGRpbmcgbmV3IHNoaXAgdG8gc2hpcCBsaW5rZWQgbGlzdFxuICAgICAgc2hpcExpc3QuYXBwZW5kKG5ld1NoaXApO1xuICB9O1xuXG4gIGNvbnN0IGlzU2hpcEF0Q29vcmRzID0gZnVuY3Rpb24oLi4uY29vcmRzKXtcbiAgICBmb3IgKGxldCBbcixjXSBvZiBjb29yZHMpe1xuICAgICAgaWYgKGJvYXJkTWFwW3JdICE9PSB1bmRlZmluZWQgJiYgYm9hcmRNYXBbcl1bY10gIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBnZXRTaGlwRnJvbUNvb3JkcyA9IGZ1bmN0aW9uKFtyLGNdKXtcbiAgICByZXR1cm4gYm9hcmRNYXBbcl1bY107XG4gIH1cblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gZnVuY3Rpb24oW3IsY10pe1xuICAgIGlmICh3YXNBdHRhY2tlZChbcixjXSkpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgYXR0YWNrIHByZXZpb3VzIGF0dGFja2VkICgke3J9LCR7Y30pYCk7XG4gICAgfVxuICAgIGNvbnN0IHNoaXAgPSBib2FyZE1hcFtyXVtjXTtcbiAgICBpZiAodHlwZW9mKHNoaXApID09IFwib2JqZWN0XCIpe1xuICAgICAgc2hpcC5oaXQoKTtcbiAgICAgIGF0dGFja01hcFtyXVtjXT1cImhpdFwiO1xuICAgICAgcmV0dXJuIFwiaGl0XCI7XG4gICAgfSBlbHNle1xuICAgICAgYXR0YWNrTWFwW3JdW2NdID0gXCJtaXNzXCI7XG4gICAgICByZXR1cm4gXCJtaXNzXCI7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgd2FzQXR0YWNrZWQgPSBmdW5jdGlvbihbcixjXSl7XG4gICAgcmV0dXJuIGF0dGFja01hcFtyXVtjXSB8fCBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGlzQWxsU3VuayA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIChzaGlwTGlzdC5maW5kQ2FsbGJhY2soZmFsc2UsIFwiaXNTdW5rXCIpID09IG51bGwpO1xuICB9XG5cbiAgY29uc3QgcmVzZXRCb2FyZCA9IGZ1bmN0aW9uKCl7XG4gICAgYm9hcmRNYXAgPSBbe30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge31dO1xuICAgIGF0dGFja01hcCA9IFt7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fV07XG4gIH1cblxuICAvLyBVU0VTIGFsbG93ZWQgcG9zaXRpb24gbWFwIGNyZWF0ZWQgd2l0aCBzcGVjaWZpYyBpbmZvIGFib3V0IHNoaXAgb3JpZW50YXRpb24gYW5kIGxlbmd0aFxuICBjb25zdCBpc1RoaXNBbGxvd2VkUGxhY2VtZW50ID0gZnVuY3Rpb24oW3IsY10pe1xuICAgIHJldHVybiBhbGxvd2VkUG9zaXRpb25NYXBbcl1bY107XG4gIH1cblxuICBsZXQgYWxsb3dlZFBvc2l0aW9uTWFwO1xuICAvLyB1c2VzIGFkamFjZW5jeSBtYXAgYW5kIHNoaXAgbGVuZ3RoIHRvIHNob3cgYWxsIHBvc2libGUgdG9wbGVmdCBwb3NpdGlvbnMgZm9yIHRoZSBzaGlwXG4gIC8vIHJlY2FsbCB0aGF0IGdyYWJMb2NhdGlvbiBzdGFydHMgYXQgMFxuICAvLyByZXR1cm5zIG51bWJlciBvZiB0cnVlcyAoYWxsb3dlZCBzcG90cylcbiAgY29uc3QgY3JlYXRlQWxsb3dlZFBvc2l0aW9uTWFwID0gZnVuY3Rpb24oc2hpcE9iamVjdCwgaXNIb3Jpem9udGFsLCBncmFiTG9jYXRpb24pe1xuICAgIGNvbnN0IGFkamFjZW5jeU1hcCA9IGNyZWF0ZUFkamFjZW5jeU1hcCgpO1xuICAgIGFsbG93ZWRQb3NpdGlvbk1hcCA9IFt7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fV07XG4gICAgY29uc3QgbGVuZ3RoID0gc2hpcE9iamVjdC5sZW5ndGg7XG4gICAgbGV0IHRydWVDb3VudCA9MDtcbiAgICBpZiAoaXNIb3Jpem9udGFsID09IFwidHJ1ZVwiKXtcbiAgICAgIGZvciAobGV0IHIgPSAwOyByPDEwOyByKyspe1xuICAgICAgICBmb3IgKGxldCBjPTA7IGM8MTA7IGMrKyl7XG4gICAgICAgICAgaWYgKGM+ICgxMC1sZW5ndGgrZ3JhYkxvY2F0aW9uKSB8fCBjPGdyYWJMb2NhdGlvbil7XG4gICAgICAgICAgICBhbGxvd2VkUG9zaXRpb25NYXBbcl1bY10gPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxsb3dlZFBvc2l0aW9uTWFwW3JdW2NdID0gaXNTaGlwRml0QWRqYWNlbmN5KFtyLGMtZ3JhYkxvY2F0aW9uXSwgc2hpcE9iamVjdCwgaXNIb3Jpem9udGFsLCBhZGphY2VuY3lNYXApO1xuICAgICAgICAgICAgaWYgKGFsbG93ZWRQb3NpdGlvbk1hcFtyXVtjXSA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgdHJ1ZUNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgfVxuICAgICB9IGVsc2V7XG4gICAgICBmb3IgKGxldCByID0gMDsgcjwxMDsgcisrKXtcbiAgICAgICAgZm9yIChsZXQgYz0wOyBjPDEwOyBjKyspe1xuICAgICAgICAgIGlmIChyID4gKDEwLWxlbmd0aCtncmFiTG9jYXRpb24pIHx8IHI8Z3JhYkxvY2F0aW9uKXtcbiAgICAgICAgICAgICAgYWxsb3dlZFBvc2l0aW9uTWFwW3JdW2NdID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsbG93ZWRQb3NpdGlvbk1hcFtyXVtjXSA9IGlzU2hpcEZpdEFkamFjZW5jeShbci1ncmFiTG9jYXRpb24sY10sc2hpcE9iamVjdCwgaXNIb3Jpem9udGFsLCBhZGphY2VuY3lNYXApO1xuICAgICAgICAgICAgaWYgKGFsbG93ZWRQb3NpdGlvbk1hcFtyXVtjXSA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgdHJ1ZUNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiYWxsb3dlZCBwb3NpdGlvbiBtYXAgY3JlYXRlZFwiKVxuICAgIGNvbnNvbGUubG9nKGFsbG93ZWRQb3NpdGlvbk1hcCk7XG4gICAgcmV0dXJuIHRydWVDb3VudDtcbiAgfTtcblxuICAvLyBbcixjXSBpcyB0b3BsZWZ0IHNxdWFyZSBvZiBzaGlwXG4gIGNvbnN0IGlzU2hpcEZpdEFkamFjZW5jeSA9IGZ1bmN0aW9uKFtyLGNdLHNoaXBPYmplY3QsIGlzSG9yaXpvbnRhbCwgbWFwKXtcbiAgICBjb25zdCBsZW5ndGggPSBzaGlwT2JqZWN0Lmxlbmd0aDtcbiAgICBpZiAoaXNIb3Jpem9udGFsICE9PSBcInRydWVcIil7XG4gICAgICBmb3IgKGxldCBpPTA7IGk8bGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAodHlwZW9mIG1hcFtyK2ldICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBtYXBbcitpXVtjXSAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICAgICAgZm9yIChsZXQgc2hpcCBvZiBtYXBbcitpXVtjXSl7XG4gICAgICAgICAgICBpZiAoc2hpcCAhPSBzaGlwT2JqZWN0KXtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpPTA7IGk8bGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAodHlwZW9mIG1hcFtyXSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgbWFwW3JdW2MraV0gIT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICAgIGZvciAobGV0IHNoaXAgb2YgbWFwW3JdW2MraV0pe1xuICAgICAgICAgICAgaWYgKHNoaXAgIT0gc2hpcE9iamVjdCl7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuXG4gIGNvbnN0IGNyZWF0ZUFkamFjZW5jeU1hcCA9IGZ1bmN0aW9uKCl7XG4gICAgbGV0IGFkamFjZW5jeU1hcCA9IFt7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fV07XG4gICAgZm9yIChsZXQgaT0wOyBpPDEwOyBpKyspe1xuICAgICAgZm9yIChsZXQgaj0wOyBqPDEwOyBqKyspe1xuICAgICAgICBpZiAodHlwZW9mIGJvYXJkTWFwW2ldW2pdICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgICAgICBjb25zdCBzaGlwID0gYm9hcmRNYXBbaV1bal07XG4gICAgICAgICAgYWRkVG9BZGphY2VuY3lNYXAoYWRqYWNlbmN5TWFwLCBzaGlwLCBpLGopO1xuICAgICAgICAgIGlmIChqPjApe1xuICAgICAgICAgICAgYWRkVG9BZGphY2VuY3lNYXAoYWRqYWNlbmN5TWFwLCBzaGlwLCBpLGotMSk7XG4gICAgICAgICAgICBpZiAoaT4wKXtcbiAgICAgICAgICAgICAgYWRkVG9BZGphY2VuY3lNYXAoYWRqYWNlbmN5TWFwLCBzaGlwLCBpLTEsai0xKTtcbiAgICAgICAgICAgIH0gaWYgKGk8OSl7XG4gICAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaSsxLGotMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChqPDkpe1xuICAgICAgICAgICAgYWRkVG9BZGphY2VuY3lNYXAoYWRqYWNlbmN5TWFwLCBzaGlwLCBpLGorMSk7XG4gICAgICAgICAgICBpZiAoaT4wKXtcbiAgICAgICAgICAgICAgYWRkVG9BZGphY2VuY3lNYXAoYWRqYWNlbmN5TWFwLCBzaGlwLCBpLTEsaisxKTtcbiAgICAgICAgICAgIH0gaWYgKGk8OSl7XG4gICAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaSsxLGorMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpPjApe1xuICAgICAgICAgICAgYWRkVG9BZGphY2VuY3lNYXAoYWRqYWNlbmN5TWFwLCBzaGlwLCBpLTEsaik7XG4gICAgICAgICAgfSBpZiAoaTw5KXtcbiAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaSsxLGopO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhhZGphY2VuY3lNYXApO1xuICAgIHJldHVybiBhZGphY2VuY3lNYXA7XG4gIH1cblxuICBjb25zdCBhZGRUb0FkamFjZW5jeU1hcCA9IGZ1bmN0aW9uKG1hcCwgc2hpcCwgaSwgail7XG4gICAgY29uc3QgbG9jYXRpb24gPSBtYXBbaV1bal07XG4gICAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsb2NhdGlvblswXSAhPSBzaGlwKXtcbiAgICAgIG1hcFtpXVtqXS5wdXNoKHNoaXApO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgbWFwW2ldW2pdID0gW3NoaXBdO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlbWVtYmVyIHRoYXQgbWFwIGlzIHNvcnRlZCBieSByLCB0aGVuIGMuXG4gIGNvbnN0IG1vdmVTaGlwID0gZnVuY3Rpb24oc2hpcCxbc3RhcnRSLHN0YXJ0Q10sbGVuZ3RoLCBpc0hvcml6b250YWwpe1xuICAgIGZvciAobGV0IHJvdz0wOyByb3c8MTA7IHJvdysrKXtcbiAgICAgIGNvbnN0IG1hcFJvdyA9IGJvYXJkTWFwW3Jvd107XG4gICAgICBmb3IgKGxldCBjb2wgb2YgT2JqZWN0LmtleXMobWFwUm93KSl7XG4gICAgICAgIGlmIChtYXBSb3dbY29sXSA9PSBzaGlwKXtcbiAgICAgICAgICBkZWxldGUgYm9hcmRNYXBbcm93XVtjb2xdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGJvYXJkTWFwKTtcbiAgICBjb25zdCBjb29yZHMgPSBbXTtcbiAgICBpZiAoaXNIb3Jpem9udGFsID09IFwidHJ1ZVwiKXtcbiAgICAgIGZvciAobGV0IGk9MDsgaTxsZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvb3Jkcy5wdXNoKFtzdGFydFIsc3RhcnRDK2ldKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpPTA7IGk8bGVuZ3RoOyBpKyspe1xuICAgICAgICBjb29yZHMucHVzaChbc3RhcnRSK2ksc3RhcnRDXSlcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coLi4uY29vcmRzLCBsZW5ndGgpO1xuICAgIG5ld1NoaXAoLi4uY29vcmRzKTtcbiAgfVxuXG4gIC8vIG5lZWQgdG8gcmFuZG9taXplIDUgc2hpcHMgb2YgbGVuZ3RoIDIsMywzLDQsNVxuICBjb25zdCByYW5kb21pemVCb2FyZCA9IGZ1bmN0aW9uKCl7XG4gICAgdHJ5e1xuICAgICAgcmVzZXRCb2FyZCgpO1xuICAgICAgY29uc3QgY29vcmRzMSA9IGdldFJhbmRvbUNvb3JkcygyKTtcbiAgICAgIG5ld1NoaXAoLi4uY29vcmRzMSk7XG4gICAgICBjb25zdCBjb29yZHMyID0gZ2V0UmFuZG9tQ29vcmRzKDMpO1xuICAgICAgbmV3U2hpcCguLi5jb29yZHMyKTtcbiAgICAgIGNvbnN0IGNvb3JkczMgPSBnZXRSYW5kb21Db29yZHMoMyk7XG4gICAgICBuZXdTaGlwKC4uLmNvb3JkczMpO1xuICAgICAgY29uc3QgY29vcmRzNCA9IGdldFJhbmRvbUNvb3Jkcyg0KTtcbiAgICAgIG5ld1NoaXAoLi4uY29vcmRzNCk7XG4gICAgICBjb25zdCBjb29yZHM1ID0gZ2V0UmFuZG9tQ29vcmRzKDUpO1xuICAgICAgbmV3U2hpcCguLi5jb29yZHM1KTtcbiAgICAgIC8vY29uc29sZS5sb2coYm9hcmRNYXApO1xuICAgICAgcmV0dXJuIHtjb29yZHMxLGNvb3JkczIsY29vcmRzMyxjb29yZHM0LGNvb3JkczV9O1xuICAgIH0gY2F0Y2h7XG4gICAgICByZXR1cm4gcmFuZG9taXplQm9hcmQoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBnZXRSYW5kb21Db29yZHMgPSBmdW5jdGlvbihsZW5ndGgpe1xuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHJhbmRvbWl6ZUlzSG9yaXpvbnRhbCgpO1xuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgpO1xuICAgIGxldCB0cnVlQ291bnQgPSBjcmVhdGVBbGxvd2VkUG9zaXRpb25NYXAoc2hpcCwgaXNIb3Jpem9udGFsLCAwKTtcbiAgICAvLyBjYXRjaCB3aGVuIHRoZXJlIGlzIG5vIGFsbG93ZWQgcG9zaXRpb25zXG4gICAgaWYgKHRydWVDb3VudCA9PSAwKXtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJNdXN0IHJlcmFuZG9taXplIGR1ZSB0byB1bmx1Y2t5IHNldHVwXCIpO1xuICAgIH1cbiAgICAvLyBybmdDb3VudCByYW5nZXMgZnJvbSAwIHRvIHRydWVDb3VudC0xO1xuICAgIGxldCBybmdDb3VudCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp0cnVlQ291bnQpO1xuICAgIC8vY29uc29sZS5sb2cocm5nQ291bnQsIHRydWVDb3VudCk7XG4gICAgbGV0IHI9LTE7XG4gICAgbGV0IGM9OTtcbiAgICB3aGlsZSAocm5nQ291bnQ+PTApe1xuICAgICAgaWYgKGM9PTkpe1xuICAgICAgICByKys7XG4gICAgICAgIGM9MDtcbiAgICAgIH0gZWxzZXtcbiAgICAgICAgYysrO1xuICAgICAgfVxuICAgICAgaWYgKGlzVGhpc0FsbG93ZWRQbGFjZW1lbnQoW3IsY10pID09IHRydWUpe1xuICAgICAgICBybmdDb3VudC0tO1xuICAgICAgfVxuICAgICAgLy9jb25zb2xlLmxvZyhyLCBjLCBybmdDb3VudCk7XG4gICAgfVxuICAgIGxldCBjb29yZHMgPSBbXTtcbiAgICBpZiAoaXNIb3Jpem9udGFsID09IFwidHJ1ZVwiKXtcbiAgICAgIGZvciAoO2xlbmd0aD4wOyBsZW5ndGgtLSl7XG4gICAgICAgIGNvb3Jkcy5wdXNoKFtyLGNdKTtcbiAgICAgICAgYysrO1xuICAgICAgfVxuICAgIH0gZWxzZXtcbiAgICAgIGZvciAoO2xlbmd0aD4wOyBsZW5ndGgtLSl7XG4gICAgICAgIGNvb3Jkcy5wdXNoKFtyLGNdKTtcbiAgICAgICAgcisrO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgR2VuZXJhdGVkIGFsbG93ZWQgcmFuZG9tIGNvb3JkcyAke2Nvb3Jkc31gKTtcbiAgICByZXR1cm4gKGNvb3Jkcyk7XG4gIH1cblxuICBjb25zdCByYW5kb21pemVJc0hvcml6b250YWwgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IHJuZyA9IE1hdGgucmFuZG9tKCkqMjtcbiAgICBpZiAocm5nIDwgMSl7XG4gICAgICByZXR1cm4gXCJ0cnVlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcImZhbHNlXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdTaGlwLFxuICAgIGdldFNoaXBGcm9tQ29vcmRzLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgd2FzQXR0YWNrZWQsXG4gICAgaXNBbGxTdW5rLFxuICAgIGdldEJvYXJkTWFwLFxuICAgIHJlc2V0Qm9hcmQsXG4gICAgZ2V0QXR0YWNrTWFwLFxuICAgIGlzVGhpc0FsbG93ZWRQbGFjZW1lbnQsXG4gICAgbW92ZVNoaXAsXG4gICAgY3JlYXRlQWxsb3dlZFBvc2l0aW9uTWFwLFxuICAgIHJhbmRvbWl6ZUJvYXJkLFxuICB9O1xufTtcblxuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG4iLCJpbXBvcnQge0dhbWVib2FyZH0gZnJvbSBcIi4vZ2FtZWJvYXJkLmpzXCJcblxuY29uc3QgUGxheWVyID0gZnVuY3Rpb24obmFtZSwgbnVtYmVyKXtcblxuICAgIGxldCBnYW1lYm9hcmQ7XG4gICAgY29uc3QgaW5pdCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB9KCk7XG5cbiAgICByZXR1cm57XG4gICAgICAgIG5hbWUsXG4gICAgICAgIG51bWJlcixcbiAgICAgICAgZ2FtZWJvYXJkLFxuICAgIH1cbn1cblxuY29uc3QgY29tcHV0ZXJQbGF5ZXIgPSBmdW5jdGlvbihuYW1lLCBudW1iZXIpe1xuXG4gICAgcmV0dXJue1xuICAgICAgICAvLyBpbmhlcml0IHByb3BlcnRpZXMgYnkgY29tcG9zaXRpb25cbiAgICAgICAgLi4uKG5ldyBQbGF5ZXIobmFtZSwgbnVtYmVyKSksXG4gICAgfVxufVxuXG5jb25zdCBodW1hblBsYXllciA9IGZ1bmN0aW9uKG5hbWUsIG51bWJlcil7XG5cbiAgICByZXR1cm57XG4gICAgICAgIC4uLihuZXcgUGxheWVyKG5hbWUsIG51bWJlcikpLFxuICAgIH1cbn1cblxuZXhwb3J0IHtQbGF5ZXIsIGNvbXB1dGVyUGxheWVyLCBodW1hblBsYXllcn07IiwiLy8gY29udGFpbnMgbWV0aG9kcyB0byBwb3B1bGF0ZSBET01cbi8vIHJlbmRlciBmdW5jdGlvbnMgd2lsbCBkaXNwbGF5IERPTSBlbGVtZW50c1xuLy8gYnVpbGQgZnVuY3Rpb25zIHdpbGwgYnVpbGQgZWxlbWVudHMgYW5kIHJldHVybiB0aGVtIHdpdGhvdXQgZGlzcGxheVxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbmNvbnN0IFJlbmRlck1hbmFnZXIgPSBmdW5jdGlvbigpe1xuICAgIFxuICAgIGxldCBib2FyZDE7XG4gICAgbGV0IGJvYXJkMjtcbiAgICBsZXQgZGlhbG9nO1xuICAgIGNvbnN0IGluaXRHYW1lUmVuZGVyID0gZnVuY3Rpb24ocGxheWVyMU9iamVjdCwgcGxheWVyMk9iamVjdCl7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gYnVpbGRIZWFkZXIoKTtcbiAgICAgICAgYm9hcmQxID0gYnVpbGRCb2FyZEFuZEhlYWRlcihwbGF5ZXIxT2JqZWN0Lm51bWJlciwgcGxheWVyMU9iamVjdC5uYW1lKTtcbiAgICAgICAgYm9hcmQyID0gYnVpbGRCb2FyZEFuZEhlYWRlcihwbGF5ZXIyT2JqZWN0Lm51bWJlciwgcGxheWVyMk9iamVjdC5uYW1lKTtcbiAgICAgICAgYm9keS5hcHBlbmQoaGVhZGVyLCBib2FyZDEsIGJvYXJkMik7XG4gICAgICAgIGRpYWxvZyA9IGJ1aWxkRGlhbG9nKCk7XG4gICAgICAgIGJvZHkuYXBwZW5kKGRpYWxvZyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGJ1aWxkSGVhZGVyID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLFwidWkgY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCB0dXJuVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBcInR1cm4gdGV4dFwiKTtcbiAgICAgICAgdHVyblRleHQudGV4dENvbnRlbnQgPSBcIidzIFR1cm5cIjtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZCh0dXJuVGV4dCk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgY29uc3QgYnVpbGRCb2FyZEFuZEhlYWRlciA9IGZ1bmN0aW9uKHBsYXllck51bWJlciwgcGxheWVyTmFtZSl7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gY3JlYXRlRWxlbWVudChcImRpdlwiLGBib2FyZCBjb250YWluZXJgKTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDEwOyBpKyspe1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLGByb3ctJHtpfWApO1xuICAgICAgICAgICAgcm93LnNldEF0dHJpYnV0ZShcInJvd1wiLCBpKTtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajwxMDsgaisrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJjb2xcIiwgaik7XG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZChzcXVhcmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9hcmQuYXBwZW5kKHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgYm9hcmQuc2V0QXR0cmlidXRlKFwicGxheWVybnVtXCIsIHBsYXllck51bWJlcik7XG4gICAgICAgIGNvbnN0IGJvYXJkQW5kSGVhZGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLGBib2FyZC1hbmQtaGVhZGVyIGNvbnRhaW5lciBwbGF5ZXItJHtwbGF5ZXJOdW1iZXJ9YCk7XG4gICAgICAgIGNvbnN0IGJvYXJkSGVhZGVyVGV4dD0gY3JlYXRlRWxlbWVudChcImgyXCIsIFwiYm9hcmQgaGVhZGVyXCIpO1xuICAgICAgICBib2FyZEhlYWRlclRleHQudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lfSdzIEJvYXJkYDtcbiAgICAgICAgYm9hcmRBbmRIZWFkZXIuYXBwZW5kKGJvYXJkSGVhZGVyVGV4dCwgYm9hcmQpO1xuICAgICAgICByZXR1cm4gYm9hcmRBbmRIZWFkZXI7XG4gICAgfVxuXG4gICAgY29uc3QgYnVpbGREaWFsb2cgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICAgICAgICBjb25zdCBkaWFsb2dIZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiaDFcIiwgXCJkaWFsb2cgaGVhZGVyXCIpO1xuICAgICAgICBkaWFsb2dIZWFkZXIudGV4dENvbnRlbnQgPSBcIlN3aXRjaCBQbGF5ZXJzIVwiXG4gICAgICAgIGNvbnN0IGRpYWxvZ1N1YnRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImRpYWxvZyBzdWJ0ZXh0XCIpO1xuICAgICAgICBkaWFsb2dTdWJ0ZXh0LnRleHRDb250ZW50ID0gXCIoY2xpY2sgd2hlbiByZWFkeSlcIjtcbiAgICAgICAgZGlhbG9nLmFwcGVuZChkaWFsb2dIZWFkZXIsIGRpYWxvZ1N1YnRleHQpO1xuICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgZGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtkaWFsb2cuY2xvc2UoKX0pO1xuICAgICAgICByZXR1cm4gZGlhbG9nO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlck5ld1NoaXAgPSBmdW5jdGlvbihwbGF5ZXJOdW1iZXIsLi4uY29vcmRzKXtcbiAgICAgICAgbGV0IGJvYXJkO1xuICAgICAgICBpZiAocGxheWVyTnVtYmVyID09MSl7XG4gICAgICAgICAgICBib2FyZCA9IGJvYXJkMTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgYm9hcmQgPSBib2FyZDI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGk9MDtcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICAgICAgICBsZXQgaXNIb3Jpem9udGFsID0gZmFsc2U7XG4gICAgICAgIGlmIChjb29yZHNbMV1bMF0gPT0gY29vcmRzWzBdWzBdKXtcbiAgICAgICAgICAgIGlzSG9yaXpvbnRhbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgW3gseV0gb2YgY29vcmRzKXtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZVRvQ2hhbmdlID0gYm9hcmQucXVlcnlTZWxlY3RvcihgZGl2LnJvdy0ke3h9ID4gZGl2Om50aC1jaGlsZCgke3krMX0pYCk7XG4gICAgICAgICAgICBzcXVhcmVUb0NoYW5nZS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICAgIHNxdWFyZVRvQ2hhbmdlLnNldEF0dHJpYnV0ZShcImxlbmd0aFwiLCBzaGlwTGVuZ3RoKTtcbiAgICAgICAgICAgIHNxdWFyZVRvQ2hhbmdlLnNldEF0dHJpYnV0ZShcImdyYWJMb2NhdGlvblwiLCBpKTtcbiAgICAgICAgICAgIHNxdWFyZVRvQ2hhbmdlLnNldEF0dHJpYnV0ZShcImhvcml6b250YWxcIiwgaXNIb3Jpem9udGFsKVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyQXR0YWNrZWQgPSBmdW5jdGlvbihzcXVhcmVET01Ob2RlKXtcbiAgICAgICAgc3F1YXJlRE9NTm9kZS5jbGFzc0xpc3QuYWRkKFwiYXR0YWNrZWRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyVHVyblN3aXRjaFRvID0gZnVuY3Rpb24ocGxheWVyTnVtYmVyLCBwbGF5ZXJOYW1lKXtcbiAgICAgICAgLy8gYWRkIHNjcmVlbiBzd2FwcGluZyBvdmVybGF5XG4gICAgICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcbiAgICAgICAgLy8gcGxheWVyTnVtYmVyIGlzIG51bWJlciBvZiBwbGF5ZXIgd2hvc2UgdHVybiBpdCBzaG91bGQgc3dpdGNoIFRPXG4gICAgICAgIC8vIGNoYW5nZSBoZWFkZXIgdG8gXCJJdCBpcyBwbGF5ZXJze3BsYXllck51bWJlcn0ubmFtZSdzIHR1cm5cIlxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVpLmNvbnRhaW5lciAudHVybi50ZXh0XCIpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lfSdzIFR1cm5gO1xuICAgICAgICAvLyBjaGFuZ2UgYm9hcmQgaGVhZGVyIGZyb20gXCJZb3VyIEJvYXJkXCIgdG8gXCJFbmVteSBCb2FyZFwiIGFuZCB2aXMgdmVyc2FcbiAgICAgICAgY29uc3QgYm9hcmQxSGVhZGVyID0gYm9hcmQxLnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xuICAgICAgICBjb25zdCBib2FyZDJIZWFkZXIgPSBib2FyZDIucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XG4gICAgICAgIGlmIChwbGF5ZXJOdW1iZXIgPT0gMSl7XG4gICAgICAgICAgICBib2FyZDJIZWFkZXIudGV4dENvbnRlbnQgPSBcIkVuZW15IEJvYXJkXCI7XG4gICAgICAgICAgICBib2FyZDFIZWFkZXIudGV4dENvbnRlbnQgPSBcIllvdXIgQm9hcmRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvYXJkMUhlYWRlci50ZXh0Q29udGVudCA9IFwiRW5lbXkgQm9hcmRcIjtcbiAgICAgICAgICAgIGJvYXJkMkhlYWRlci50ZXh0Q29udGVudCA9IFwiWW91ciBCb2FyZFwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIGhpZGUgc2hpcHMgZnJvbSBlbmVteSBib2FyZCBhbmQgcmV2ZWFsIHNoaXBzIG9uIHlvdXIgYm9hcmRcbiAgICAgICAgYm9hcmQxLmxhc3RDaGlsZC5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbiAgICAgICAgYm9hcmQyLmxhc3RDaGlsZC5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbiAgICB9XG5cbiAgICAvLyByZW5kZXIgZW5kaW5nIGdhbWUgKHBsYXllck5hbWUgaGFzIHdvbilcbiAgICBjb25zdCByZW5kZXJFbmRHYW1lID0gZnVuY3Rpb24od2lubmVyTmFtZSl7XG4gICAgICAgIGNvbnN0IHdpbm5lclRleHRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZW5kIGNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3Qgd2lubmVyVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBcIndpbm5lciB0ZXh0XCIpO1xuICAgICAgICB3aW5uZXJUZXh0LnRleHRDb250ZW50ID0gYENvbmdyYXRzISAke3dpbm5lck5hbWV9IHdvbi5gOztcbiAgICAgICAgY29uc3QgcGxheUFnYWluQnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcInJlc2V0IGJ1dHRvblwiKTtcbiAgICAgICAgcGxheUFnYWluQnV0dG9uLnRleHRDb250ZW50ID0gXCJQbGF5IEFnYWluP1wiO1xuICAgICAgICB3aW5uZXJUZXh0Q29udGFpbmVyLmFwcGVuZCh3aW5uZXJUZXh0LCBwbGF5QWdhaW5CdXR0b24pO1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICAgIGJvZHkuYXBwZW5kKHdpbm5lclRleHRDb250YWluZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclN0YWdpbmcgPSBmdW5jdGlvbihhdHRhY2tNYXAxLCBzaGlwTWFwMSwgYXR0YWNrTWFwMiwgc2hpcE1hcDIpe1xuICAgICAgICByZW5kZXJCb2FyZFJlc2V0KGF0dGFja01hcDEsIHNoaXBNYXAxLCBib2FyZDEucXVlcnlTZWxlY3RvcihcIi5ib2FyZC5jb250YWluZXJcIikpO1xuICAgICAgICByZW5kZXJCb2FyZFJlc2V0KGF0dGFja01hcDIsIHNoaXBNYXAyLCBib2FyZDIucXVlcnlTZWxlY3RvcihcIi5ib2FyZC5jb250YWluZXJcIikpO1xuICAgICAgICByZW5kZXJTaGlwU2FtcGxlcygpO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZUJvYXJkVmlzaWJpbGl0eSA9IGZ1bmN0aW9uKGJvYXJkRE9NKXtcbiAgICAgICAgYm9hcmRET00uY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyQm9hcmRSZXNldCA9IGZ1bmN0aW9uKGF0dGFja01hcCwgc2hpcE1hcCwgYm9hcmRET00pe1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8MTA7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBpO1xuICAgICAgICAgICAgY29uc3QgYXR0YWNrZWRJblJvdyA9IE9iamVjdC5rZXlzKGF0dGFja01hcFtpXSk7XG4gICAgICAgICAgICBjb25zdCBzaGlwSW5Sb3cgPSBPYmplY3Qua2V5cyhzaGlwTWFwW2ldKTtcbiAgICAgICAgICAgIGZvciAobGV0IGF0dGFja2VkIG9mIGF0dGFja2VkSW5Sb3cpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IE51bWJlcihhdHRhY2tlZCkrMTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXZUb1VuYXR0YWNrID0gYm9hcmRET00ucXVlcnlTZWxlY3RvcihgZGl2LnJvdy0ke3Jvd30gZGl2Om50aC1jaGlsZCgke2NvbH0pYCk7XG4gICAgICAgICAgICAgICAgZGl2VG9VbmF0dGFjay5jbGFzc0xpc3QucmVtb3ZlKFwiYXR0YWNrZWRcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHNoaXAgb2Ygc2hpcEluUm93KXtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2wgPSBOdW1iZXIoc2hpcCkrMTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXZUb1Vuc2hpcCA9IGJvYXJkRE9NLnF1ZXJ5U2VsZWN0b3IoYGRpdi5yb3ctJHtyb3d9IGRpdjpudGgtY2hpbGQoJHtjb2x9KWApO1xuICAgICAgICAgICAgICAgIGRpdlRvVW5zaGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpO1xuICAgICAgICAgICAgICAgIGRpdlRvVW5zaGlwLnJlbW92ZUF0dHJpYnV0ZShcImRyYWdnYWJsZVwiKTtcbiAgICAgICAgICAgICAgICBkaXZUb1Vuc2hpcC5yZW1vdmVBdHRyaWJ1dGUoXCJncmFibG9jYXRpb25cIik7XG4gICAgICAgICAgICAgICAgZGl2VG9VbnNoaXAucmVtb3ZlQXR0cmlidXRlKFwibGVuZ3RoXCIpO1xuICAgICAgICAgICAgICAgIGRpdlRvVW5zaGlwLnJlbW92ZUF0dHJpYnV0ZShcImhvcml6b250YWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJTaGlwU2FtcGxlcyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGhpZGRlbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJoaWRkZW4gc2FtcGxlc1wiKTtcbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbFNoaXBzID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInNoaXBzIGhvcml6b250YWxcIik7XG4gICAgICAgIGNvbnN0IHZlcnRpY2FsU2hpcHMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2hpcHMgdmVydGljYWxcIik7XG4gICAgICAgIGhvcml6b250YWxTaGlwcy5hcHBlbmQoYnVpbGRTaGlwT2ZMZW5ndGgoMiksIGJ1aWxkU2hpcE9mTGVuZ3RoKDMpLFxuICAgICAgICBidWlsZFNoaXBPZkxlbmd0aCg0KSwgYnVpbGRTaGlwT2ZMZW5ndGgoNSkpO1xuICAgICAgICB2ZXJ0aWNhbFNoaXBzLmFwcGVuZChidWlsZFNoaXBPZkxlbmd0aCgyKSwgYnVpbGRTaGlwT2ZMZW5ndGgoMyksXG4gICAgICAgIGJ1aWxkU2hpcE9mTGVuZ3RoKDQpLCBidWlsZFNoaXBPZkxlbmd0aCg1KSk7XG4gICAgICAgIGhpZGRlbkNvbnRhaW5lci5hcHBlbmQoaG9yaXpvbnRhbFNoaXBzLHZlcnRpY2FsU2hpcHMpO1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIilcbiAgICAgICAgYm9keS5hcHBlbmQoaGlkZGVuQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBidWlsZFNoaXBPZkxlbmd0aCA9IGZ1bmN0aW9uKGxlbmd0aCl7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcInNoaXAgY29udGFpbmVyXCIpO1xuICAgICAgICBjb250YWluZXIuaWQgPSBgbGVuZ3RoLSR7bGVuZ3RofWA7XG4gICAgICAgIGZvciAobGV0IGkgPTA7IGk8bGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKHBhcnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyU3RhZ2luZ0J1dHRvbnMgPSBmdW5jdGlvbihib2FyZERPTSl7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkFyZWEgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJidXR0b24gY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBidXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsXCJzdWJtaXQgc3RhZ2luZ1wiKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJMb2NrIGluIHBvc2l0aW9ucyFcIjtcbiAgICAgICAgY29uc3Qgcm5nQnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcInJhbmRvbWl6ZSBidXR0b25cIik7XG4gICAgICAgIHJuZ0J1dHRvbi50ZXh0Q29udGVudCA9IFwiUmFuZG9taXplXCJcbiAgICAgICAgYnV0dG9uQXJlYS5hcHBlbmQoYnV0dG9uLCBybmdCdXR0b24pO1xuICAgICAgICBib2FyZERPTS5wYXJlbnROb2RlLmFwcGVuZChidXR0b25BcmVhKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJNb3ZlU2hpcCA9IGZ1bmN0aW9uKFtvbGRYU3RhcnQsIG9sZFlTdGFydF0sIFtuZXdYU3RhcnQsIG5ld1lTdGFydF0sIHNoaXBMZW5ndGgsIGlzSG9yaXpvbnRhbCwgYm9hcmRET01Ob2RlKXtcbiAgICAgICAgaWYgKG9sZFhTdGFydCA9PSBuZXdYU3RhcnQgJiYgb2xkWVN0YXJ0ID09IG5ld1lTdGFydCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCA9PSBcInRydWVcIil7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8c2hpcExlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmVUb1JlbW92ZSA9IGJvYXJkRE9NTm9kZS5xdWVyeVNlbGVjdG9yKGAucm93LSR7b2xkWFN0YXJ0fSBkaXY6bnRoLWNoaWxkKCR7b2xkWVN0YXJ0K2krMX0pYCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JhYmxvY2F0aW9uID0gc3F1YXJlVG9SZW1vdmUuZ2V0QXR0cmlidXRlKFwiZ3JhYmxvY2F0aW9uXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLnJlbW92ZUF0dHJpYnV0ZShcImRyYWdnYWJsZVwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5yZW1vdmVBdHRyaWJ1dGUoXCJsZW5ndGhcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUucmVtb3ZlQXR0cmlidXRlKFwiZ3JhYmxvY2F0aW9uXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLnJlbW92ZUF0dHJpYnV0ZShcImhvcml6b250YWxcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIilcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmVUb0FkZCA9IGJvYXJkRE9NTm9kZS5xdWVyeVNlbGVjdG9yKGAucm93LSR7bmV3WFN0YXJ0fSBkaXY6bnRoLWNoaWxkKCR7bmV3WVN0YXJ0K2krMX0pYCk7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLnNldEF0dHJpYnV0ZShcImxlbmd0aFwiLCBzaGlwTGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5zZXRBdHRyaWJ1dGUoXCJncmFibG9jYXRpb25cIiwgZ3JhYmxvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5zZXRBdHRyaWJ1dGUoXCJob3Jpem9udGFsXCIsIGlzSG9yaXpvbnRhbCk7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxzaGlwTGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZVRvUmVtb3ZlID0gYm9hcmRET01Ob2RlLnF1ZXJ5U2VsZWN0b3IoYC5yb3ctJHtvbGRYU3RhcnQraX0gZGl2Om50aC1jaGlsZCgke29sZFlTdGFydCsxfSlgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBncmFibG9jYXRpb24gPSBzcXVhcmVUb1JlbW92ZS5nZXRBdHRyaWJ1dGUoXCJncmFibG9jYXRpb25cIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUucmVtb3ZlQXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLnJlbW92ZUF0dHJpYnV0ZShcImxlbmd0aFwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5yZW1vdmVBdHRyaWJ1dGUoXCJncmFibG9jYXRpb25cIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUucmVtb3ZlQXR0cmlidXRlKFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKVxuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZVRvQWRkID0gYm9hcmRET01Ob2RlLnF1ZXJ5U2VsZWN0b3IoYC5yb3ctJHtuZXdYU3RhcnQraX0gZGl2Om50aC1jaGlsZCgke25ld1lTdGFydCsxfSlgKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuc2V0QXR0cmlidXRlKFwibGVuZ3RoXCIsIHNoaXBMZW5ndGgpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLnNldEF0dHJpYnV0ZShcImdyYWJsb2NhdGlvblwiLCBncmFibG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLnNldEF0dHJpYnV0ZShcImhvcml6b250YWxcIiwgaXNIb3Jpem9udGFsKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50VHlwZSwgY2xhc3NTdHJpbmcgPSB1bmRlZmluZWQpe1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICAgICAgICBpZiAoY2xhc3NTdHJpbmcgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc1N0cmluZy5zcGxpdChcIiBcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybntcbiAgICAgICAgaW5pdEdhbWVSZW5kZXIsXG4gICAgICAgIHJlbmRlck5ld1NoaXAsXG4gICAgICAgIHJlbmRlckF0dGFja2VkLFxuICAgICAgICByZW5kZXJUdXJuU3dpdGNoVG8sXG4gICAgICAgIHJlbmRlckVuZEdhbWUsXG4gICAgICAgIHJlbmRlclN0YWdpbmcsXG4gICAgICAgIHJlbmRlclNoaXBTYW1wbGVzLFxuICAgICAgICByZW5kZXJNb3ZlU2hpcCxcbiAgICAgICAgcmVuZGVyU3RhZ2luZ0J1dHRvbnMsXG4gICAgICAgIHRvZ2dsZUJvYXJkVmlzaWJpbGl0eSxcbiAgICAgICAgcmVuZGVyQm9hcmRSZXNldCxcbiAgICB9XG5cbn0oKTtcblxuZXhwb3J0IHtSZW5kZXJNYW5hZ2VyfTsiLCJjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgpe1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICB9XG5cbiAgICBoaXQoKXtcbiAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgfVxuXG4gICAgaXNTdW5rKCl7XG4gICAgICAgIHJldHVybiAodGhpcy5oaXRzID49IHRoaXMubGVuZ3RoKVxuICAgIH1cbn1cblxuZXhwb3J0IHtTaGlwfTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBtb2R1bGUgdG8gbWFuYWdlIGdhbWUgdXNpbmcgZXZlbnQgbGlzdGVuZXJzIHRvIGludGVyYWN0IHdpdGggb2JqZWN0c1xuLy8gY2FsbHMgbWV0aG9kcyBpbiByZW5kZXIuanMgdG8gY2hhbmdlIERPTVxuLy8gcmVhbGlzdGljYWxseSBkb2VzIG5vdCBleHBvcnQgYW55dGhpbmcgc2luY2UgaXQgaXMgYSBkcml2ZXJcblxuaW1wb3J0IHtodW1hblBsYXllciwgY29tcHV0ZXJQbGF5ZXJ9IGZyb20gXCIuL3BsYXllci5qc1wiXG5pbXBvcnQge1JlbmRlck1hbmFnZXJ9IGZyb20gXCIuL3JlbmRlci5qc1wiXG5cbmNvbnN0IEdhbWVNYW5hZ2VyID0gZnVuY3Rpb24oKXtcblxuICAgIGNvbnN0IGFkZE5ld1NoaXAgPSBmdW5jdGlvbihwbGF5ZXIsIC4uLmNvb3Jkcyl7XG4gICAgICAgIHBsYXllci5nYW1lYm9hcmQubmV3U2hpcCguLi5jb29yZHMpO1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlck5ld1NoaXAocGxheWVyLm51bWJlciwuLi5jb29yZHMpO1xuICAgIH1cblxuICAgIC8vIHBhc3NlcyB0dXJuIHRvIHBsYXllciAxIGlmIG51bWJlciA9IDFcbiAgICAvLyBpZiBpdCBpcyBwbGF5ZXIgMSdzIHR1cm4sIHRoZW4gYm9hcmQgMiBzaG91bGQgYmUgQUNUSVZFXG4gICAgY29uc3QgcGFzc1R1cm5UbyA9IGZ1bmN0aW9uKHBsYXllck51bWJlcil7XG4gICAgICAgIGlmIChwbGF5ZXJOdW1iZXIgPT0gMSl7XG4gICAgICAgICAgICBhY3RpdmF0ZUV2ZW50TGlzdGVuZXIocGxheWVycy5wbGF5ZXIyLmJvYXJkRE9NKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgYWN0aXZhdGVFdmVudExpc3RlbmVyKHBsYXllcnMucGxheWVyMS5ib2FyZERPTSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGxheWVyTmFtZSA9IE9iamVjdC52YWx1ZXMocGxheWVycylbcGxheWVyTnVtYmVyLTFdLm5hbWU7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3BsYXllck5hbWV9J3MgVHVybmApO1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlclR1cm5Td2l0Y2hUbyhwbGF5ZXJOdW1iZXIsIHBsYXllck5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGJvYXJkRE9NTm9kZSl7XG4gICAgICAgIGJvYXJkRE9NTm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQm9hcmRDbGljayk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQm9hcmRDbGljayA9IGFzeW5jIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgbGV0IHBsYXllck51bWJlciA9IHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwicGxheWVybnVtXCIpO1xuICAgICAgICBsZXQgeSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjb2xcIik7XG4gICAgICAgIGxldCB4ID0gdGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwicm93XCIpO1xuICAgICAgICBsZXQgcGxheWVyT2JqZWN0ID0gcGxheWVyTnVtYmVyID09IDEgPyBwbGF5ZXJzLnBsYXllcjEgOiBwbGF5ZXJzLnBsYXllcjI7XG4gICAgICAgIHBsYXllck9iamVjdC5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbeCx5XSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBSZWNlaXZlZCBhdHRhY2sgYXQgKCR7eH0sJHt5fSkgZm9yIHBsYXllciAke3BsYXllck51bWJlcn1gKTtcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJBdHRhY2tlZCh0YXJnZXQpO1xuICAgICAgICBwbGF5ZXJPYmplY3QuYm9hcmRET00ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUJvYXJkQ2xpY2spO1xuICAgICAgICBhd2FpdCBzaG9ydFNsZWVwKCk7XG4gICAgICAgIGlmIChwbGF5ZXJPYmplY3QuZ2FtZWJvYXJkLmlzQWxsU3VuaygpKXtcbiAgICAgICAgICAgIGVuZEdhbWUocGxheWVyTnVtYmVyKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgcGFzc1R1cm5UbyhwbGF5ZXJOdW1iZXIpOyAvLyBXZSBwYXNzIHR1cm4gdG8gcGxheWVyJ3MgYm9hcmQgd2UganVzdCBjbGlja2VkXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbml0UGxheSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIGFzc2lnbiBldmVudCBsaXN0ZW5lciBmb3IgYXR0YWNrc1xuICAgICAgICAvLyBsYXRlciBtYWtlIGZpcnN0IHR1cm4gcmFuZG9tIG9yIGNob3NlblxuICAgICAgICBwbGF5ZXJzLnBsYXllcjIuYm9hcmRET00uY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gICAgICAgIHBhc3NUdXJuVG8oMSk7XG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2dcIik7XG4gICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfTtcblxuICAgIGxldCBwbGF5ZXJzO1xuICAgIGNvbnN0IGluaXRHYW1lID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgcGxheWVyMSA9IG5ldyBodW1hblBsYXllcihcIkFteVwiLCAxKTtcbiAgICAgICAgY29uc3QgcGxheWVyMiA9IG5ldyBodW1hblBsYXllcihcIkJhcnRcIiwgMik7XG4gICAgICAgIFJlbmRlck1hbmFnZXIuaW5pdEdhbWVSZW5kZXIocGxheWVyMSwgcGxheWVyMik7XG4gICAgICAgIGNvbnN0IGJvYXJkMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtYW5kLWhlYWRlci5wbGF5ZXItMSAuYm9hcmQuY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBib2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLWFuZC1oZWFkZXIucGxheWVyLTIgLmJvYXJkLmNvbnRhaW5lclwiKTtcbiAgICAgICAgcGxheWVyMS5ib2FyZERPTSA9IGJvYXJkMTtcbiAgICAgICAgcGxheWVyMi5ib2FyZERPTSA9IGJvYXJkMjtcbiAgICAgICAgLy8gZWFjaCBwbGF5ZXIgaGFzIDUgc2hpcHMgb2Ygc2l6ZSAyLCAzLCAzLCA0LCA1XG4gICAgICAgIHBsYXllcnMgPSB7cGxheWVyMSwgcGxheWVyMn07XG4gICAgICAgIGVudGVyR2FtZVN0YWdpbmcoKTtcbiAgICAgICAgLy9qdXN0IGZvciB0ZXN0aW5nIVxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVpLmNvbnRhaW5lclwiKTtcbiAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBlbmRHYW1lKDEpKVxuICAgIH07XG5cbiAgICAvLyBwbGF5ZXIgd2l0aCBwbGF5ZXJOdW1iZXIgbG9zdFxuICAgIGNvbnN0IGVuZEdhbWUgPSBmdW5jdGlvbihwbGF5ZXJOdW1iZXIpe1xuICAgICAgICBsZXQgd2lubmVyTmFtZTtcbiAgICAgICAgaWYgKHBsYXllck51bWJlciA9PTEpe1xuICAgICAgICAgICAgd2lubmVyTmFtZSA9IHBsYXllcnMucGxheWVyMi5uYW1lO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICB3aW5uZXJOYW1lID0gcGxheWVycy5wbGF5ZXIxLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJFbmRHYW1lKHdpbm5lck5hbWUpO1xuICAgICAgICBhY3RpdmF0ZVJlcGxheUJ1dHRvbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlUmVwbGF5QnV0dG9uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgcmVwbGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5lbmQuY29udGFpbmVyIGJ1dHRvblwiKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVwbGF5QnV0dG9uKTtcbiAgICAgICAgcmVwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlbnRlckdhbWVTdGFnaW5nKTtcbiAgICB9XG5cbiAgICAvLyBTVEFSVCBPRiBDT0RFIFJFTEFURUQgVE8gR0FNRSBTVEFHSU5HXG4gICAgY29uc3QgZW50ZXJHYW1lU3RhZ2luZyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIGFjdGl2YXRlIGRyYWcgYW5kIGRyb3Agb2Ygc2hpcHMgdG8gY2hvb3NlIHNoaXAgbG9jYXRpb24gdXNpbmcgSFRNTCBkcmFnIGFuZCBkcm9wIEFQSSFcbiAgICAgICAgY29uc29sZS5sb2coXCJFbnRlcmluZyBuZXcgZ2FtZSBzdGFnaW5nIVwiKVxuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlclN0YWdpbmcoXG4gICAgICAgICAgICBwbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLmdldEF0dGFja01hcCgpLFxuICAgICAgICAgICAgcGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5nZXRCb2FyZE1hcCgpLFxuICAgICAgICAgICAgcGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5nZXRBdHRhY2tNYXAoKSxcbiAgICAgICAgICAgIHBsYXllcnMucGxheWVyMi5nYW1lYm9hcmQuZ2V0Qm9hcmRNYXAoKVxuICAgICAgICApO1xuICAgICAgICBwbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgICAgICAgcGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5yZXNldEJvYXJkKCk7XG4gICAgICAgIGFjdGl2YXRlU3RhZ2luZyhwbGF5ZXJzLnBsYXllcjEpXG4gICAgICAgIC8vIHJlcGVhdCBmb3IgYm9hcmQgMlxuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlU3RhZ2luZyA9IGZ1bmN0aW9uKHBsYXllcil7XG4gICAgICAgIGNvbnN0IGJvYXJkMSA9IHBsYXllci5ib2FyZERPTTtcbiAgICAgICAgUmVuZGVyTWFuYWdlci50b2dnbGVCb2FyZFZpc2liaWxpdHkoYm9hcmQxKTtcbiAgICAgICAgcmVuZGVyRHJhZ2dhYmxlU2hpcHNUb1N0YWdlKHBsYXllcik7XG4gICAgICAgIGFjdGl2YXRlRHJvcEFuZERyYWdTdGFydEhhbmRsZXIoYm9hcmQxKTtcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJTdGFnaW5nQnV0dG9ucyhib2FyZDEpO1xuICAgICAgICBhY3RpdmF0ZVN0YWdpbmdCdXR0b25zKHBsYXllcik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyRHJhZ2dhYmxlU2hpcHNUb1N0YWdlID0gZnVuY3Rpb24ocGxheWVyKXtcbiAgICAgICAgYWRkTmV3U2hpcFdpdGhEcmFnZ2luZyhwbGF5ZXIsWzAsMF0sWzAsMV0pXG4gICAgICAgIGFkZE5ld1NoaXBXaXRoRHJhZ2dpbmcocGxheWVyLFszLDNdLFs0LDNdLFs1LDNdKTtcbiAgICAgICAgYWRkTmV3U2hpcFdpdGhEcmFnZ2luZyhwbGF5ZXIsWzcsN10sWzgsN10sWzksN10pO1xuICAgICAgICBhZGROZXdTaGlwV2l0aERyYWdnaW5nKHBsYXllcixbMCwzXSwgWzAsNF0sWzAsNV0sWzAsNl0pO1xuICAgICAgICBhZGROZXdTaGlwV2l0aERyYWdnaW5nKHBsYXllcixbNSw1XSwgWzYsNV0sWzcsNV0sWzgsNV0sWzksNV0pO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZE5ld1NoaXBXaXRoRHJhZ2dpbmcgPSBmdW5jdGlvbihwbGF5ZXIsIC4uLmNvb3Jkcyl7XG4gICAgICAgIGFkZE5ld1NoaXAocGxheWVyLCAuLi5jb29yZHMpO1xuICAgICAgICBzZXRTcGVjaWZpY0RyYWdnYWJsZShwbGF5ZXIuYm9hcmRET00sIC4uLmNvb3Jkcyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0U3BlY2lmaWNEcmFnZ2FibGUgPSBmdW5jdGlvbihib2FyZERPTSwgLi4uY29vcmRzKXtcbiAgICAgICAgZm9yIChsZXQgW3gseV0gb2YgY29vcmRzKXtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGJvYXJkRE9NLnF1ZXJ5U2VsZWN0b3IoYC5yb3ctJHt4fSBkaXY6bnRoLWNoaWxkKCR7eSsxfSlgKTtcbiAgICAgICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZVN0YWdpbmdCdXR0b25zID0gZnVuY3Rpb24ocGxheWVyKXtcbiAgICAgICAgY29uc3QgYm9hcmRET00gPSBwbGF5ZXIuYm9hcmRET007XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGJvYXJkRE9NLm5leHRFbGVtZW50U2libGluZy5maXJzdENoaWxkO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNvbXBsZXRlU3RhZ2luZyhib2FyZERPTSkpXG4gICAgICAgIGNvbnN0IHJuZ0J1dHRvbiA9IGJ1dHRvbi5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIHJuZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcmFuZG9taXplQm9hcmQocGxheWVyKSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmFuZG9taXplQm9hcmQgPSBmdW5jdGlvbihwbGF5ZXIpe1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlckJvYXJkUmVzZXQocGxheWVyLmdhbWVib2FyZC5nZXRBdHRhY2tNYXAoKSxcbiAgICAgICAgcGxheWVyLmdhbWVib2FyZC5nZXRCb2FyZE1hcCgpLCBwbGF5ZXIuYm9hcmRET00pO1xuICAgICAgICBjb25zdCByYW5kb21Db29yZHMgPSBwbGF5ZXIuZ2FtZWJvYXJkLnJhbmRvbWl6ZUJvYXJkKCk7XG4gICAgICAgIC8vIHJhbmRvbUNvb3JkcyBpcyB7Y29vcmRzMSwgY29vcmRzMiwgLi4uIGNvb3JkczV9IHdoZXJlIGVhY2ggY29vcmRzIGlzIGFuIGFycmF5IG9mIFt4LHldc1xuICAgICAgICBmb3IgKGxldCBjb29yZHNBcnJheSBvZiBPYmplY3QudmFsdWVzKHJhbmRvbUNvb3Jkcykpe1xuICAgICAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJOZXdTaGlwKHBsYXllci5udW1iZXIsIC4uLmNvb3Jkc0FycmF5KTtcbiAgICAgICAgICAgIHNldFNwZWNpZmljRHJhZ2dhYmxlKHBsYXllci5ib2FyZERPTSwgLi4uY29vcmRzQXJyYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGVTdGFnaW5nID0gZnVuY3Rpb24oYm9hcmRET00pe1xuICAgICAgICBkZWFjdGl2YXRlU3RhZ2luZyhib2FyZERPTSk7XG4gICAgICAgIC8vYnJlYWtTY3JlZW5cbiAgICAgICAgaWYgKGJvYXJkRE9NLmdldEF0dHJpYnV0ZShcInBsYXllcm51bVwiKSA9PSBcIjFcIil7XG4gICAgICAgICAgICBhY3RpdmF0ZVN0YWdpbmcocGxheWVycy5wbGF5ZXIyKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgaW5pdFBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRlYWN0aXZhdGVTdGFnaW5nID0gZnVuY3Rpb24oYm9hcmRET00pe1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnRvZ2dsZUJvYXJkVmlzaWJpbGl0eShib2FyZERPTSk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkFyZWEgPSBib2FyZERPTS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGJ1dHRvbkFyZWEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChidXR0b25BcmVhKTtcbiAgICAgICAgY29uc3Qgcm93cyA9IGJvYXJkRE9NLmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8MTA7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCByb3cgPSByb3dzW2ldO1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlcyA9IHJvdy5jaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajwxMDsgaisrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBzcXVhcmVzW2pdO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgb25kcmFnb3ZlckhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBkcm9wSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZ3N0YXJ0SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnJlbW92ZUF0dHJpYnV0ZShcImRyYWdnYWJsZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRhcmdldCBpcyA8ZGl2IGNvbD1cIlwiPiAoZWc6IHNxdWFyZSlcbiAgICBjb25zdCBkcmFnc3RhcnRIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImRyYWcgZXZlbnQgdHJpZ2dlcmVkXCIpO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGxldCBzaGlwTGVuZ3RoID0gTnVtYmVyKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJsZW5ndGhcIikpO1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInNoaXBMZW5ndGhcIiwgc2hpcExlbmd0aCk7XG4gICAgICAgIGxldCBncmFiTG9jYXRpb24gPSBOdW1iZXIodGFyZ2V0LmdldEF0dHJpYnV0ZShcImdyYWJsb2NhdGlvblwiKSk7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiZ3JhYkxvY2F0aW9uXCIsIGdyYWJMb2NhdGlvbik7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiaG9yaXpvbnRhbFwiLCB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiaG9yaXpvbnRhbFwiKSk7XG4gICAgICAgIGxldCBzdGFydFJvdyA9IE51bWJlcih0YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJyb3dcIikpO1xuICAgICAgICBsZXQgc3RhcnRDb2wgPSBOdW1iZXIodGFyZ2V0LmdldEF0dHJpYnV0ZShcImNvbFwiKSk7XG4gICAgICAgIGxldCBpc0hvcml6b250YWwgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJzdGFydFJvd1wiLCBzdGFydFJvdyk7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwic3RhcnRDb2xcIiwgc3RhcnRDb2wpO1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImlzSG9yaXpvbnRhbFwiLCBpc0hvcml6b250YWwpXG4gICAgICAgIGNvbnN0IHdpZHRoT2ZEaXYgPSAyMDtcbiAgICAgICAgY29uc3Qgd2lkdGhPZkdhcCA9IDE7XG4gICAgICAgIC8vIGlmIGdyYWJsb2NhdGlvbiA9IDAsIGRvbid0IGFkZCBhbnl0aGluZ1xuICAgICAgICAvLyBpZiBncmFibG9jYXRpb24gPSAxLCBhZGQgMSBnYXAgYW5kIDEgZGl2XG4gICAgICAgIC8vIGlmIGdyYWJsb2NhdGlvbiA9IDIsIGFkZCAyIGdhcHMgYW5kIDIgZGl2c1xuICAgICAgICBsZXQgYWRkT2Zmc2V0WCA9IDA7XG4gICAgICAgIGxldCBhZGRPZmZzZXRZID0gMDtcbiAgICAgICAgbGV0IGRyYWdJbWFnZU5vZGU7XG4gICAgICAgIGlmIChpc0hvcml6b250YWwgPT0gXCJ0cnVlXCIpe1xuICAgICAgICAgICAgZHJhZ0ltYWdlTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5oaWRkZW4uc2FtcGxlcyAuc2hpcHMuaG9yaXpvbnRhbCAjbGVuZ3RoLSR7c2hpcExlbmd0aH1gKTtcbiAgICAgICAgICAgIGFkZE9mZnNldFggPSAoZ3JhYkxvY2F0aW9uICogKHdpZHRoT2ZEaXYrd2lkdGhPZkdhcCkpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBkcmFnSW1hZ2VOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmhpZGRlbi5zYW1wbGVzIC5zaGlwcy52ZXJ0aWNhbCAjbGVuZ3RoLSR7c2hpcExlbmd0aH1gKTtcbiAgICAgICAgICAgIGFkZE9mZnNldFkgPSAoZ3JhYkxvY2F0aW9uICogKHdpZHRoT2ZEaXYrd2lkdGhPZkdhcCkpXG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZShkcmFnSW1hZ2VOb2RlLGV2ZW50Lm9mZnNldFggKyBhZGRPZmZzZXRYLGV2ZW50Lm9mZnNldFkrYWRkT2Zmc2V0WSk7XG4gICAgICAgIC8vIGR5bmFtaWNhbGx5IGFsbG93IHdoZXJlIHdlIGNhbiBkcm9wIHdpdGggb25kcmFnb3ZlciBhdHRyaWJ1dGVcbiAgICAgICAgY29uc3QgcGxheWVyTnVtID0gdGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJwbGF5ZXJudW1cIik7XG4gICAgICAgIGxldCBwbGF5ZXJWYXI7XG4gICAgICAgIGlmIChwbGF5ZXJOdW0gPT0xKXtcbiAgICAgICAgICAgIHBsYXllclZhciA9IHBsYXllcnMucGxheWVyMTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgcGxheWVyVmFyID0gcGxheWVycy5wbGF5ZXIyO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwicGxheWVybnVtXCIsIHBsYXllck51bSk7XG4gICAgICAgIGNvbnN0IHNoaXBPYmplY3QgPSBwbGF5ZXJWYXIuZ2FtZWJvYXJkLmdldFNoaXBGcm9tQ29vcmRzKFtzdGFydFJvdywgc3RhcnRDb2xdKTtcbiAgICAgICAgcGxheWVyVmFyLmdhbWVib2FyZC5jcmVhdGVBbGxvd2VkUG9zaXRpb25NYXAoc2hpcE9iamVjdCwgaXNIb3Jpem9udGFsLCBncmFiTG9jYXRpb24pO1xuICAgICAgICBhY3RpdmF0ZU9uZHJhZ292ZXIocGxheWVyVmFyKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZU9uZHJhZ292ZXIgPSBmdW5jdGlvbihwbGF5ZXIpe1xuICAgICAgICBjb25zdCByb3dzID0gcGxheWVyLmJvYXJkRE9NLmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8MTA7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCByb3cgPSByb3dzW2ldO1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlcyA9IHJvdy5jaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajwxMDsgaisrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBzcXVhcmVzW2pdO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYCR7cGxheWVyLmdhbWVib2FyZC5pc1RoaXNBbGxvd2VkUGxhY2VtZW50KFtpLGpdKX1gKVxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmlzVGhpc0FsbG93ZWRQbGFjZW1lbnQoW2ksal0pKXtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBvbmRyYWdvdmVySGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYGRyYWdvdmVyIGFsbG93ZWQgb24gWyR7aX0sICR7an1dYClcbiAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgb25kcmFnb3ZlckhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBkcmFnb3ZlciBub3QgYWxsb3dlZCBvbiBbJHtpfSwgJHtqfV1gKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlRHJvcEFuZERyYWdTdGFydEhhbmRsZXIgPSBmdW5jdGlvbihwbGF5ZXJCb2FyZCl7XG4gICAgICAgIGZvciAobGV0IHJvdyBvZiBwbGF5ZXJCb2FyZC5jaGlsZHJlbil7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgb2Ygcm93LmNoaWxkcmVuKXtcbiAgICAgICAgICAgICAgICBjb2wuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZHJvcEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIGNvbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGRyYWdzdGFydEhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgb25kcmFnb3ZlckhhbmRsZXIgPSBmdW5jdGlvbihldil7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZHJhZ292ZXIgZGV0ZWN0ZWQhXCIpXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgY29uc3QgZHJvcEhhbmRsZXIgPSBmdW5jdGlvbihldil7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHJvdyA9IE51bWJlcihldi50YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJyb3dcIikpO1xuICAgICAgICBjb25zdCBjb2wgPSBOdW1iZXIoZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNvbFwiKSk7XG4gICAgICAgIGxldCBuZXdTdGFydFJvdyA9IHJvdztcbiAgICAgICAgbGV0IG9sZFN0YXJ0Um93ID0gTnVtYmVyKGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwic3RhcnRSb3dcIikpO1xuICAgICAgICBsZXQgbmV3U3RhcnRDb2wgPSBjb2w7XG4gICAgICAgIGxldCBvbGRTdGFydENvbCA9IE51bWJlcihldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInN0YXJ0Q29sXCIpKTtcbiAgICAgICAgY29uc3QgZ3JhYkxvY2F0aW9uID0gTnVtYmVyKGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiZ3JhYkxvY2F0aW9uXCIpKTtcbiAgICAgICAgY29uc3QgaXNIb3Jpem9udGFsID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJpc0hvcml6b250YWxcIik7XG4gICAgICAgIGlmIChpc0hvcml6b250YWwgPT0gXCJ0cnVlXCIpe1xuICAgICAgICAgICAgbmV3U3RhcnRDb2wgLT0gZ3JhYkxvY2F0aW9uO1xuICAgICAgICAgICAgb2xkU3RhcnRDb2wgLT0gZ3JhYkxvY2F0aW9uO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBuZXdTdGFydFJvdyAtPSBncmFiTG9jYXRpb247XG4gICAgICAgICAgICBvbGRTdGFydFJvdyAtPSBncmFiTG9jYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGxheWVyTnVtID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJwbGF5ZXJudW1cIik7XG4gICAgICAgIGxldCBwbGF5ZXI7XG4gICAgICAgIGlmIChwbGF5ZXJOdW0gPT0xKXtcbiAgICAgICAgICAgIHBsYXllciA9IHBsYXllcnMucGxheWVyMTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgcGxheWVyID0gcGxheWVycy5wbGF5ZXIyO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSBOdW1iZXIoZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJzaGlwTGVuZ3RoXCIpKTtcbiAgICAgICAgLy8gY2hhbmdlIHRoZSBnYW1lYm9hcmQgZGF0YVxuICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLm1vdmVTaGlwKHBsYXllci5nYW1lYm9hcmQuZ2V0U2hpcEZyb21Db29yZHMoW29sZFN0YXJ0Um93LG9sZFN0YXJ0Q29sXSksXG4gICAgICAgIFtuZXdTdGFydFJvdyxuZXdTdGFydENvbF0sIHNoaXBMZW5ndGgsIGlzSG9yaXpvbnRhbCk7XG4gICAgICAgIC8vIHJlbmRlciBjaGFuZ2VzIGFuZCBhbHNvIG1hbmFnZXMgZHJhZ2dhYmxlXG4gICAgICAgIFJlbmRlck1hbmFnZXIucmVuZGVyTW92ZVNoaXAoW29sZFN0YXJ0Um93LG9sZFN0YXJ0Q29sXSxcbiAgICAgICAgW25ld1N0YXJ0Um93LG5ld1N0YXJ0Q29sXSwgc2hpcExlbmd0aCwgaXNIb3Jpem9udGFsLCBwbGF5ZXIuYm9hcmRET00pO1xuICAgIH1cbiAgICAvLyBFTkQgT0YgQ09ERSBSRUxBVEVEIFRPIFNUQUdJTkdcblxuICAgIGNvbnN0IHNob3J0U2xlZXAgPSBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKTtcbiAgICB9XG5cblxuICAgIC8vIERSSVZFUiBDT0RFXG4gICAgaW5pdEdhbWUoKTtcblxuICAgIHJldHVybntcbiAgICAgICAgcGxheWVycyxcbiAgICB9XG59KCk7XG5cbmV4cG9ydCB7R2FtZU1hbmFnZXJ9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9