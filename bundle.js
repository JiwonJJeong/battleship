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

    const completeStaging = async function(boardDOM){
        deactivateStaging(boardDOM);
        if (boardDOM.getAttribute("playernum") == "1"){
            _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.revealDialogWithText(`Now let ${players.player2.name} set up.`);
            activateStaging(players.player2);
        } else{
            initPlay();
            _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.revealDialogWithText(`Let's play! ${players.player1.name} first.`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQWE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uLi9saW5rZWQtbGlzdHMvbGlua2VkbGlzdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTGlua2VkTGlzdCByZXByZXNlbnRzIGZ1bGwgbGlzdFxuY29uc3QgTGlua2VkTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGhlYWROb2RlID0gbnVsbDtcbiAgY29uc3QgaGVhZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gaGVhZE5vZGU7XG4gIH07XG5cbiAgY29uc3QgdGFpbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbm9kZSA9IGhlYWROb2RlO1xuICAgIHdoaWxlIChub2RlLm5leHROb2RlICE9IG51bGwpIHtcbiAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICBjb25zdCBhcHBlbmQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoaGVhZE5vZGUgPT0gbnVsbCkge1xuICAgICAgaGVhZE5vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhaWwoKS5uZXh0Tm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcHJlcGVuZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmIChoZWFkTm9kZSA9PSBudWxsKSB7XG4gICAgICBoZWFkTm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZE5vZGUgPSBuZXcgTm9kZSh2YWx1ZSwgaGVhZE5vZGUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzaXplID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgaWYgKGhlYWROb2RlID09IG51bGwpIHtcbiAgICAgIHJldHVybiBjb3VudDtcbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQrKztcbiAgICB9XG4gICAgbGV0IG5vZGUgPSBoZWFkTm9kZTtcbiAgICB3aGlsZSAobm9kZS5uZXh0Tm9kZSAhPSBudWxsKSB7XG4gICAgICBub2RlID0gbm9kZS5uZXh0Tm9kZTtcbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICAgIHJldHVybiBjb3VudDtcbiAgfTtcblxuICAvLyBjb3VudCBpbmRleCBmcm9tIDFcbiAgY29uc3QgYXQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPD0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgd2hpbGUgKGluZGV4ID4gMSkge1xuICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgICBpbmRleC0tO1xuICAgICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgY29uc3QgcG9wID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBzZWNvbmRUb0xhc3RJbmRleCA9IHNpemUoKSAtIDE7XG4gICAgbGV0IHNlY29uZFRvTGFzdE5vZGUgPSBhdChzZWNvbmRUb0xhc3RJbmRleCk7XG4gICAgc2Vjb25kVG9MYXN0Tm9kZS5uZXh0Tm9kZSA9IG51bGw7XG4gIH07XG5cbiAgLy8gcmV0dXJucyB0cnVlIGlmIHZhbHVlIHBhc3NlZCBpcyBpbiBsaXN0LCBlbHNlIHJldHVybnMgZmFsc2VcbiAgY29uc3QgY29udGFpbnMgPSBmdW5jdGlvbiAodmFsdWUsIGNvbXBhcmVLZXkgPSBcInZhbHVlXCIpIHtcbiAgICBsZXQgbm9kZSA9IGhlYWROb2RlO1xuICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgIGlmIChub2RlLnZhbHVlID09IHZhbHVlIHx8IG5vZGUudmFsdWVbY29tcGFyZUtleV0gPT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0Tm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8vIHJldHVybnMgaW5kZXggb2Ygbm9kZSBjb250YWluaW5nIHZhbHVlLCBvciBudWxsIGlmIG5vdCBmb3VuZFxuICBjb25zdCBmaW5kID0gZnVuY3Rpb24gKHZhbHVlLCBjb21wYXJlS2V5ID0gXCJ2YWx1ZVwiKSB7XG4gICAgbGV0IG5vZGUgPSBoZWFkTm9kZTtcbiAgICBsZXQgaW5kZXggPSAxO1xuICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgIGlmIChub2RlLnZhbHVlID09IHZhbHVlIHx8IG5vZGUudmFsdWVbY29tcGFyZUtleV0gPT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIC8vIHJldHVybnMgbm9kZSBjb250YWluaW5nIHZhbHVlLCBvciBudWxsIGlmIG5vdCBmb3VuZFxuICAvLyBidXQgY2hlY2tzIGZvciBub2RlLmNhbGxiYWNrZnVuY3Rpb24oKSBiZWluZyBlcXVhbCB0byB2YWx1ZVxuICBjb25zdCBmaW5kQ2FsbGJhY2sgPSBmdW5jdGlvbiAodmFsdWUsIGNhbGxiYWNrRnVuY3Rpb24pIHtcbiAgICBsZXQgbm9kZSA9IGhlYWROb2RlO1xuICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgIGlmIChub2RlLnZhbHVlW2NhbGxiYWNrRnVuY3Rpb25dKCkgPT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0Tm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07ICBcblxuICAvLyBzYW1lIGFzIGZpbmQsIGJ1dCByZXR1cm5zIHRoZSBub2RlLCBub3QgaW5kZXhcbiAgY29uc3QgZmluZE5vZGUgPSBmdW5jdGlvbiAodmFsdWUsIGNvbXBhcmVLZXkgPSBcInZhbHVlXCIpIHtcbiAgICBsZXQgbm9kZSA9IGhlYWROb2RlO1xuICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgIGlmIChub2RlLnZhbHVlID09IHZhbHVlIHx8IG5vZGUudmFsdWVbY29tcGFyZUtleV0gPT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0Tm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgLy8gcmV0dXJucyBzdHJpbmcgb2Ygbm9kZSB2YWx1ZXMgaW4gZm9ybWF0IFwiKHZhbHVlKSAtPiAodmFsdWUpIC0+IG51bGxcIlxuICBjb25zdCB0b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaGVhZE5vZGUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGxldCBzdHJpbmcgPSBgKCAke2hlYWROb2RlLnZhbHVlfSApYDtcbiAgICBsZXQgbm9kZSA9IGhlYWROb2RlLm5leHROb2RlO1xuICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgIHN0cmluZyArPSBgIC0+ICggJHtub2RlLnZhbHVlfSApYDtcbiAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgIH1cbiAgICBzdHJpbmcgKz0gXCIgLT4gbnVsbFwiO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG5cbiAgLy8gaW5zZXJ0cyBuZXcgTm9kZSB3aXRoIHZhbHVlIGF0IGluZGV4IChjb3VudGluZyBmcm9tIDEpXG4gIGNvbnN0IGluc2VydEF0ID0gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgIGNvbnN0IHByaW9ySW5kZXggPSBpbmRleCAtIDE7XG4gICAgaWYgKHByaW9ySW5kZXggPT0gMCkge1xuICAgICAgcHJlcGVuZCh2YWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBwcmlvck5vZGUgPSBhdChwcmlvckluZGV4KTtcbiAgICBpZiAocHJpb3JOb2RlID09IG51bGwpIHtcbiAgICAgIGVycm9yLmxvZyhgJHtpbmRleH0gaXMgbm90IHZhbGlkIGluZGV4LmApO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuZXh0Tm9kZSA9IHByaW9yTm9kZS5uZXh0Tm9kZTtcbiAgICAgIHByaW9yTm9kZS5uZXh0Tm9kZSA9IG5ldyBOb2RlKHZhbHVlLCBuZXh0Tm9kZSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIHJlbW92ZXMgbm9kZSBhdCBpbmRleCAoY291bnRpbmcgZnJvbSAxKVxuICBjb25zdCByZW1vdmVBdCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIGNvbnN0IHByaW9ySW5kZXggPSBpbmRleCAtIDE7XG4gICAgaWYgKHByaW9ySW5kZXggPT0gMCkge1xuICAgICAgbGV0IG5vZGVUb1JlbW92ZSA9IGhlYWROb2RlO1xuICAgICAgaGVhZE5vZGUgPSBoZWFkTm9kZS5uZXh0Tm9kZTtcbiAgICAgIG5vZGVUb1JlbW92ZSA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBwcmlvck5vZGUgPSBhdChwcmlvckluZGV4KTtcbiAgICBsZXQgbm9kZVRvUmVtb3ZlID0gcHJpb3JOb2RlLm5leHROb2RlO1xuICAgIGNvbnN0IG5leHROb2RlID0gcHJpb3JOb2RlLm5leHROb2RlLm5leHROb2RlO1xuICAgIHByaW9yTm9kZS5uZXh0Tm9kZSA9IG5leHROb2RlO1xuICAgIG5vZGVUb1JlbW92ZSA9IG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBoZWFkLFxuICAgIHRhaWwsXG4gICAgYXBwZW5kLFxuICAgIHByZXBlbmQsXG4gICAgc2l6ZSxcbiAgICBhdCxcbiAgICBwb3AsXG4gICAgY29udGFpbnMsXG4gICAgZmluZCxcbiAgICB0b1N0cmluZyxcbiAgICBpbnNlcnRBdCxcbiAgICByZW1vdmVBdCxcbiAgICBmaW5kTm9kZSxcbiAgICBmaW5kQ2FsbGJhY2ssXG4gIH07XG59O1xuXG4vLyBOb2RlIGNvbnRhaW5zIHZhbHVlIHByb3BlcnR5LCBuZXh0Tm9kZVxuXG5jb25zdCBOb2RlID0gZnVuY3Rpb24gKHZhbHVlID0gbnVsbCwgbmV4dE5vZGUgPSBudWxsKSB7XG4gIHJldHVybiB7XG4gICAgdmFsdWUsXG4gICAgbmV4dE5vZGUsXG4gIH07XG59O1xuXG5leHBvcnQgeyBMaW5rZWRMaXN0LCBOb2RlIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keXtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnIgMTBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG5cbiAgICAvKiBncmlkIGFyZWEgaXMgciAvIGMgLyByIC8gYyAqL1xuICAgIC51aS5jb250YWluZXJ7XG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcbiAgICB9XG5cbiAgICAuYm9hcmQuY29udGFpbmVyLnBsYXllci0xe1xuICAgICAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XG4gICAgfVxuXG4gICAgLmJvYXJkLmNvbnRhaW5lci5wbGF5ZXItMntcbiAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xuICAgIH1cblxuICAgIC5oaWRkZW4uc2FtcGxlc3tcbiAgICAgICAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAzO1xuICAgIH1cbn1cblxuLmJvYXJkLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcHg7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuXG4gICAgPiBkaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGdhcDogMXB4O1xuXG4gICAgICAgIGRpdntcbiAgICAgICAgICAgIGFzcGVjdC1yYXRpbzogMS8xO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpncmF5O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNoaXAuYXR0YWNrZWR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG4gICAgICAgIH1cblxuICAgICAgICAuYXR0YWNrZWR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ib2FyZC5jb250YWluZXIudmlzaWJsZXtcbiAgICAuc2hpcHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICB9XG59XG5cbi8qIHN0eWxlIHNoaXBzIG9mZiBib2FyZCBkdXJpbmcgc3RhZ2luZyAqL1xuLmhpZGRlbi5zYW1wbGVze1xuICAgID4gZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDNweDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICA+IGRpdntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBnYXA6IDFweDtcbiAgICAgICAgXG4gICAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICAgICAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6YXF1YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC52ZXJ0aWNhbCA+IGRpdntcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG59XG5cbi8qIHN0eWxlIGRpYWxvZyAqL1xuOjpiYWNrZHJvcHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsOEJBQThCOztJQUU5QiwrQkFBK0I7SUFDL0I7UUFDSSx3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSx3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSx3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSx3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQix1QkFBdUI7O0lBRXZCO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixRQUFROztRQUVSO1lBQ0ksaUJBQWlCO1lBQ2pCLFlBQVk7WUFDWixxQkFBcUI7UUFDekI7O1FBRUE7WUFDSSx3QkFBd0I7UUFDNUI7O1FBRUE7WUFDSSxxQkFBcUI7UUFDekI7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7QUFDSjs7QUFFQSx5Q0FBeUM7QUFDekM7SUFDSTtRQUNJLGFBQWE7UUFDYixRQUFRO1FBQ1Isc0JBQXNCOztRQUV0QjtZQUNJLHVCQUF1QjtZQUN2QixrQkFBa0I7WUFDbEIsYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixRQUFROztZQUVSO2dCQUNJLGlCQUFpQjtnQkFDakIsWUFBWTtnQkFDWixxQkFBcUI7WUFDekI7UUFDSjtJQUNKOztJQUVBO1FBQ0ksc0JBQXNCO0lBQzFCO0FBQ0o7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksd0JBQXdCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnIgMTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcblxcbiAgICAvKiBncmlkIGFyZWEgaXMgciAvIGMgLyByIC8gYyAqL1xcbiAgICAudWkuY29udGFpbmVye1xcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcbiAgICB9XFxuXFxuICAgIC5ib2FyZC5jb250YWluZXIucGxheWVyLTF7XFxuICAgICAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuICAgIH1cXG5cXG4gICAgLmJvYXJkLmNvbnRhaW5lci5wbGF5ZXItMntcXG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG4gICAgfVxcblxcbiAgICAuaGlkZGVuLnNhbXBsZXN7XFxuICAgICAgICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDM7XFxuICAgIH1cXG59XFxuXFxuLmJvYXJkLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcHg7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFxuICAgID4gZGl2e1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBnYXA6IDFweDtcXG5cXG4gICAgICAgIGRpdntcXG4gICAgICAgICAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpncmF5O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnNoaXAuYXR0YWNrZWR7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmF0dGFja2Vke1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4uYm9hcmQuY29udGFpbmVyLnZpc2libGV7XFxuICAgIC5zaGlwe1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gICAgfVxcbn1cXG5cXG4vKiBzdHlsZSBzaGlwcyBvZmYgYm9hcmQgZHVyaW5nIHN0YWdpbmcgKi9cXG4uaGlkZGVuLnNhbXBsZXN7XFxuICAgID4gZGl2e1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGdhcDogM3B4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgICAgID4gZGl2e1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICAgICAgZ2FwOiAxcHg7XFxuICAgICAgICBcXG4gICAgICAgICAgICBkaXZ7XFxuICAgICAgICAgICAgICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6YXF1YTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnZlcnRpY2FsID4gZGl2e1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbn1cXG5cXG4vKiBzdHlsZSBkaWFsb2cgKi9cXG46OmJhY2tkcm9we1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge1NoaXB9IGZyb20gXCIuL3NoaXAuanNcIjtcbmltcG9ydCB7TGlua2VkTGlzdH0gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9saW5rZWQtbGlzdHMvbGlua2VkbGlzdC5qc1wiXG5cbmNvbnN0IEdhbWVib2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGJvYXJkTWFwO1xuICBsZXQgYXR0YWNrTWFwO1xuICAvLyBtYWtlIGVhY2ggbWFwIGFuIGFycmF5IG9mIDEwIHdpdGggZWFjaCBhcnJheSBiZWluZyBhbiBvYmplY3QgKHNpbWlsYXIgdG8gaGFzaCBtYXApXG4gIGNvbnN0IGluaXRCb2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBib2FyZE1hcCA9IFt7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fV07XG4gICAgYXR0YWNrTWFwID0gW3t9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9XTtcbiAgfSgpO1xuXG4gIGNvbnN0IGdldEJvYXJkTWFwID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gYm9hcmRNYXA7XG4gIH1cblxuICBjb25zdCBnZXRBdHRhY2tNYXAgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBhdHRhY2tNYXA7XG4gIH1cblxuICAvLyBiYXNlZCBvbiB0aGUgd2F5IHdlIGltcGxlbWVudGVkLFxuICAvLyB0aGUgZmlyc3QgaW5kZXggZm9yIGFycmF5IGlzIHRoZSByLXZhbHVlIG9yIHRoZSBjb2x1bW4gaW4gYSBtYXRyaXgvZ3JpZFxuICAvLyB0aGUgc2Vjb25kIGluZGV4IGZvciBvYmplY3Qga2V5IGlzIHRoZSBjLXZhbHVlIG9yIHRoZSByb3cgaW4gYSBtYXRyaXgvZ3JpZCAoaW5jcmVhc2VzIGdvaW5nIGRvd24pXG4gIGxldCBzaGlwTGlzdCA9IG5ldyBMaW5rZWRMaXN0KCk7XG4gIC8vIHVzZSByZXN0IHBhcmFtZXRlciAoLi4uKSB0byBhY2NlcHQgdmFyaWFibGUgYW1vdW50IG9mIGNvb3Jkc1xuICBjb25zdCBuZXdTaGlwID0gZnVuY3Rpb24gKC4uLmNvb3Jkcykge1xuICAgICAgY29uc3QgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3Jkcy5sZW5ndGgpO1xuICAgICAgaWYgKGlzU2hpcEF0Q29vcmRzKC4uLmNvb3Jkcykpe1xuICAgICAgICBjb25zb2xlLmxvZyhib2FyZE1hcCk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRG9uJ3Qgb3ZlcmxhcCBzaGlwcyBhdDogJHtjb29yZHN9YCk7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBbcixjXSBvZiBjb29yZHMpe1xuICAgICAgICBpZiAoYyA8IDEwICYmIGMgPj0wKXtcbiAgICAgICAgICBib2FyZE1hcFtyXVtjXSA9IG5ld1NoaXA7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICBjb25zb2xlLmxvZyhjb29yZHMpO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQmFkIGNvbCBpbnB1dCBmb3IgbmV3U2hpcCgpOiAke2Nvb3Jkc31gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gYWRkaW5nIG5ldyBzaGlwIHRvIHNoaXAgbGlua2VkIGxpc3RcbiAgICAgIHNoaXBMaXN0LmFwcGVuZChuZXdTaGlwKTtcbiAgfTtcblxuICBjb25zdCBpc1NoaXBBdENvb3JkcyA9IGZ1bmN0aW9uKC4uLmNvb3Jkcyl7XG4gICAgZm9yIChsZXQgW3IsY10gb2YgY29vcmRzKXtcbiAgICAgIGlmIChib2FyZE1hcFtyXSAhPT0gdW5kZWZpbmVkICYmIGJvYXJkTWFwW3JdW2NdICE9PSB1bmRlZmluZWQpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgZ2V0U2hpcEZyb21Db29yZHMgPSBmdW5jdGlvbihbcixjXSl7XG4gICAgcmV0dXJuIGJvYXJkTWFwW3JdW2NdO1xuICB9XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IGZ1bmN0aW9uKFtyLGNdKXtcbiAgICBpZiAod2FzQXR0YWNrZWQoW3IsY10pKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGF0dGFjayBwcmV2aW91cyBhdHRhY2tlZCAoJHtyfSwke2N9KWApO1xuICAgIH1cbiAgICBjb25zdCBzaGlwID0gYm9hcmRNYXBbcl1bY107XG4gICAgaWYgKHR5cGVvZihzaGlwKSA9PSBcIm9iamVjdFwiKXtcbiAgICAgIHNoaXAuaGl0KCk7XG4gICAgICBhdHRhY2tNYXBbcl1bY109XCJoaXRcIjtcbiAgICAgIHJldHVybiBcImhpdFwiO1xuICAgIH0gZWxzZXtcbiAgICAgIGF0dGFja01hcFtyXVtjXSA9IFwibWlzc1wiO1xuICAgICAgcmV0dXJuIFwibWlzc1wiO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHdhc0F0dGFja2VkID0gZnVuY3Rpb24oW3IsY10pe1xuICAgIHJldHVybiBhdHRhY2tNYXBbcl1bY10gfHwgZmFsc2U7XG4gIH1cblxuICBjb25zdCBpc0FsbFN1bmsgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiAoc2hpcExpc3QuZmluZENhbGxiYWNrKGZhbHNlLCBcImlzU3Vua1wiKSA9PSBudWxsKTtcbiAgfVxuXG4gIGNvbnN0IHJlc2V0Qm9hcmQgPSBmdW5jdGlvbigpe1xuICAgIGJvYXJkTWFwID0gW3t9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9XTtcbiAgICBhdHRhY2tNYXAgPSBbe30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge31dO1xuICB9XG5cbiAgLy8gVVNFUyBhbGxvd2VkIHBvc2l0aW9uIG1hcCBjcmVhdGVkIHdpdGggc3BlY2lmaWMgaW5mbyBhYm91dCBzaGlwIG9yaWVudGF0aW9uIGFuZCBsZW5ndGhcbiAgY29uc3QgaXNUaGlzQWxsb3dlZFBsYWNlbWVudCA9IGZ1bmN0aW9uKFtyLGNdKXtcbiAgICByZXR1cm4gYWxsb3dlZFBvc2l0aW9uTWFwW3JdW2NdO1xuICB9XG5cbiAgbGV0IGFsbG93ZWRQb3NpdGlvbk1hcDtcbiAgLy8gdXNlcyBhZGphY2VuY3kgbWFwIGFuZCBzaGlwIGxlbmd0aCB0byBzaG93IGFsbCBwb3NpYmxlIHRvcGxlZnQgcG9zaXRpb25zIGZvciB0aGUgc2hpcFxuICAvLyByZWNhbGwgdGhhdCBncmFiTG9jYXRpb24gc3RhcnRzIGF0IDBcbiAgLy8gcmV0dXJucyBudW1iZXIgb2YgdHJ1ZXMgKGFsbG93ZWQgc3BvdHMpXG4gIGNvbnN0IGNyZWF0ZUFsbG93ZWRQb3NpdGlvbk1hcCA9IGZ1bmN0aW9uKHNoaXBPYmplY3QsIGlzSG9yaXpvbnRhbCwgZ3JhYkxvY2F0aW9uKXtcbiAgICBjb25zdCBhZGphY2VuY3lNYXAgPSBjcmVhdGVBZGphY2VuY3lNYXAoKTtcbiAgICBhbGxvd2VkUG9zaXRpb25NYXAgPSBbe30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge31dO1xuICAgIGNvbnN0IGxlbmd0aCA9IHNoaXBPYmplY3QubGVuZ3RoO1xuICAgIGxldCB0cnVlQ291bnQgPTA7XG4gICAgaWYgKGlzSG9yaXpvbnRhbCA9PSBcInRydWVcIil7XG4gICAgICBmb3IgKGxldCByID0gMDsgcjwxMDsgcisrKXtcbiAgICAgICAgZm9yIChsZXQgYz0wOyBjPDEwOyBjKyspe1xuICAgICAgICAgIGlmIChjPiAoMTAtbGVuZ3RoK2dyYWJMb2NhdGlvbikgfHwgYzxncmFiTG9jYXRpb24pe1xuICAgICAgICAgICAgYWxsb3dlZFBvc2l0aW9uTWFwW3JdW2NdID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsbG93ZWRQb3NpdGlvbk1hcFtyXVtjXSA9IGlzU2hpcEZpdEFkamFjZW5jeShbcixjLWdyYWJMb2NhdGlvbl0sIHNoaXBPYmplY3QsIGlzSG9yaXpvbnRhbCwgYWRqYWNlbmN5TWFwKTtcbiAgICAgICAgICAgIGlmIChhbGxvd2VkUG9zaXRpb25NYXBbcl1bY10gPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgIHRydWVDb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgfSBlbHNle1xuICAgICAgZm9yIChsZXQgciA9IDA7IHI8MTA7IHIrKyl7XG4gICAgICAgIGZvciAobGV0IGM9MDsgYzwxMDsgYysrKXtcbiAgICAgICAgICBpZiAociA+ICgxMC1sZW5ndGgrZ3JhYkxvY2F0aW9uKSB8fCByPGdyYWJMb2NhdGlvbil7XG4gICAgICAgICAgICAgIGFsbG93ZWRQb3NpdGlvbk1hcFtyXVtjXSA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGxvd2VkUG9zaXRpb25NYXBbcl1bY10gPSBpc1NoaXBGaXRBZGphY2VuY3koW3ItZ3JhYkxvY2F0aW9uLGNdLHNoaXBPYmplY3QsIGlzSG9yaXpvbnRhbCwgYWRqYWNlbmN5TWFwKTtcbiAgICAgICAgICAgIGlmIChhbGxvd2VkUG9zaXRpb25NYXBbcl1bY10gPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgIHRydWVDb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcImFsbG93ZWQgcG9zaXRpb24gbWFwIGNyZWF0ZWRcIilcbiAgICBjb25zb2xlLmxvZyhhbGxvd2VkUG9zaXRpb25NYXApO1xuICAgIHJldHVybiB0cnVlQ291bnQ7XG4gIH07XG5cbiAgLy8gW3IsY10gaXMgdG9wbGVmdCBzcXVhcmUgb2Ygc2hpcFxuICBjb25zdCBpc1NoaXBGaXRBZGphY2VuY3kgPSBmdW5jdGlvbihbcixjXSxzaGlwT2JqZWN0LCBpc0hvcml6b250YWwsIG1hcCl7XG4gICAgY29uc3QgbGVuZ3RoID0gc2hpcE9iamVjdC5sZW5ndGg7XG4gICAgaWYgKGlzSG9yaXpvbnRhbCAhPT0gXCJ0cnVlXCIpe1xuICAgICAgZm9yIChsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXBbcitpXSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgbWFwW3IraV1bY10gIT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICAgIGZvciAobGV0IHNoaXAgb2YgbWFwW3IraV1bY10pe1xuICAgICAgICAgICAgaWYgKHNoaXAgIT0gc2hpcE9iamVjdCl7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXBbcl0gIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIG1hcFtyXVtjK2ldICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgICAgICBmb3IgKGxldCBzaGlwIG9mIG1hcFtyXVtjK2ldKXtcbiAgICAgICAgICAgIGlmIChzaGlwICE9IHNoaXBPYmplY3Qpe1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cblxuICBjb25zdCBjcmVhdGVBZGphY2VuY3lNYXAgPSBmdW5jdGlvbigpe1xuICAgIGxldCBhZGphY2VuY3lNYXAgPSBbe30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge31dO1xuICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKXtcbiAgICAgIGZvciAobGV0IGo9MDsgajwxMDsgaisrKXtcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZE1hcFtpXVtqXSAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICAgICAgY29uc3Qgc2hpcCA9IGJvYXJkTWFwW2ldW2pdO1xuICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaSxqKTtcbiAgICAgICAgICBpZiAoaj4wKXtcbiAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaSxqLTEpO1xuICAgICAgICAgICAgaWYgKGk+MCl7XG4gICAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaS0xLGotMSk7XG4gICAgICAgICAgICB9IGlmIChpPDkpe1xuICAgICAgICAgICAgICBhZGRUb0FkamFjZW5jeU1hcChhZGphY2VuY3lNYXAsIHNoaXAsIGkrMSxqLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoajw5KXtcbiAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaSxqKzEpO1xuICAgICAgICAgICAgaWYgKGk+MCl7XG4gICAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaS0xLGorMSk7XG4gICAgICAgICAgICB9IGlmIChpPDkpe1xuICAgICAgICAgICAgICBhZGRUb0FkamFjZW5jeU1hcChhZGphY2VuY3lNYXAsIHNoaXAsIGkrMSxqKzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaT4wKXtcbiAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaS0xLGopO1xuICAgICAgICAgIH0gaWYgKGk8OSl7XG4gICAgICAgICAgICBhZGRUb0FkamFjZW5jeU1hcChhZGphY2VuY3lNYXAsIHNoaXAsIGkrMSxqKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coYWRqYWNlbmN5TWFwKTtcbiAgICByZXR1cm4gYWRqYWNlbmN5TWFwO1xuICB9XG5cbiAgY29uc3QgYWRkVG9BZGphY2VuY3lNYXAgPSBmdW5jdGlvbihtYXAsIHNoaXAsIGksIGope1xuICAgIGNvbnN0IGxvY2F0aW9uID0gbWFwW2ldW2pdO1xuICAgIGlmICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYXRpb25bMF0gIT0gc2hpcCl7XG4gICAgICBtYXBbaV1bal0ucHVzaChzaGlwKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIG1hcFtpXVtqXSA9IFtzaGlwXTtcbiAgICB9XG4gIH1cblxuICAvLyByZW1lbWJlciB0aGF0IG1hcCBpcyBzb3J0ZWQgYnkgciwgdGhlbiBjLlxuICBjb25zdCBtb3ZlU2hpcCA9IGZ1bmN0aW9uKHNoaXAsW3N0YXJ0UixzdGFydENdLGxlbmd0aCwgaXNIb3Jpem9udGFsKXtcbiAgICBmb3IgKGxldCByb3c9MDsgcm93PDEwOyByb3crKyl7XG4gICAgICBjb25zdCBtYXBSb3cgPSBib2FyZE1hcFtyb3ddO1xuICAgICAgZm9yIChsZXQgY29sIG9mIE9iamVjdC5rZXlzKG1hcFJvdykpe1xuICAgICAgICBpZiAobWFwUm93W2NvbF0gPT0gc2hpcCl7XG4gICAgICAgICAgZGVsZXRlIGJvYXJkTWFwW3Jvd11bY29sXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhib2FyZE1hcCk7XG4gICAgY29uc3QgY29vcmRzID0gW107XG4gICAgaWYgKGlzSG9yaXpvbnRhbCA9PSBcInRydWVcIil7XG4gICAgICBmb3IgKGxldCBpPTA7IGk8bGVuZ3RoOyBpKyspe1xuICAgICAgICBjb29yZHMucHVzaChbc3RhcnRSLHN0YXJ0QytpXSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29vcmRzLnB1c2goW3N0YXJ0UitpLHN0YXJ0Q10pXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKC4uLmNvb3JkcywgbGVuZ3RoKTtcbiAgICBuZXdTaGlwKC4uLmNvb3Jkcyk7XG4gIH1cblxuICAvLyBuZWVkIHRvIHJhbmRvbWl6ZSA1IHNoaXBzIG9mIGxlbmd0aCAyLDMsMyw0LDVcbiAgY29uc3QgcmFuZG9taXplQm9hcmQgPSBmdW5jdGlvbigpe1xuICAgIHRyeXtcbiAgICAgIHJlc2V0Qm9hcmQoKTtcbiAgICAgIGNvbnN0IGNvb3JkczEgPSBnZXRSYW5kb21Db29yZHMoMik7XG4gICAgICBuZXdTaGlwKC4uLmNvb3JkczEpO1xuICAgICAgY29uc3QgY29vcmRzMiA9IGdldFJhbmRvbUNvb3JkcygzKTtcbiAgICAgIG5ld1NoaXAoLi4uY29vcmRzMik7XG4gICAgICBjb25zdCBjb29yZHMzID0gZ2V0UmFuZG9tQ29vcmRzKDMpO1xuICAgICAgbmV3U2hpcCguLi5jb29yZHMzKTtcbiAgICAgIGNvbnN0IGNvb3JkczQgPSBnZXRSYW5kb21Db29yZHMoNCk7XG4gICAgICBuZXdTaGlwKC4uLmNvb3JkczQpO1xuICAgICAgY29uc3QgY29vcmRzNSA9IGdldFJhbmRvbUNvb3Jkcyg1KTtcbiAgICAgIG5ld1NoaXAoLi4uY29vcmRzNSk7XG4gICAgICAvL2NvbnNvbGUubG9nKGJvYXJkTWFwKTtcbiAgICAgIHJldHVybiB7Y29vcmRzMSxjb29yZHMyLGNvb3JkczMsY29vcmRzNCxjb29yZHM1fTtcbiAgICB9IGNhdGNoe1xuICAgICAgcmV0dXJuIHJhbmRvbWl6ZUJvYXJkKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2V0UmFuZG9tQ29vcmRzID0gZnVuY3Rpb24obGVuZ3RoKXtcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSByYW5kb21pemVJc0hvcml6b250YWwoKTtcbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcbiAgICBsZXQgdHJ1ZUNvdW50ID0gY3JlYXRlQWxsb3dlZFBvc2l0aW9uTWFwKHNoaXAsIGlzSG9yaXpvbnRhbCwgMCk7XG4gICAgLy8gY2F0Y2ggd2hlbiB0aGVyZSBpcyBubyBhbGxvd2VkIHBvc2l0aW9uc1xuICAgIGlmICh0cnVlQ291bnQgPT0gMCl7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFwiTXVzdCByZXJhbmRvbWl6ZSBkdWUgdG8gdW5sdWNreSBzZXR1cFwiKTtcbiAgICB9XG4gICAgLy8gcm5nQ291bnQgcmFuZ2VzIGZyb20gMCB0byB0cnVlQ291bnQtMTtcbiAgICBsZXQgcm5nQ291bnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqdHJ1ZUNvdW50KTtcbiAgICAvL2NvbnNvbGUubG9nKHJuZ0NvdW50LCB0cnVlQ291bnQpO1xuICAgIGxldCByPS0xO1xuICAgIGxldCBjPTk7XG4gICAgd2hpbGUgKHJuZ0NvdW50Pj0wKXtcbiAgICAgIGlmIChjPT05KXtcbiAgICAgICAgcisrO1xuICAgICAgICBjPTA7XG4gICAgICB9IGVsc2V7XG4gICAgICAgIGMrKztcbiAgICAgIH1cbiAgICAgIGlmIChpc1RoaXNBbGxvd2VkUGxhY2VtZW50KFtyLGNdKSA9PSB0cnVlKXtcbiAgICAgICAgcm5nQ291bnQtLTtcbiAgICAgIH1cbiAgICAgIC8vY29uc29sZS5sb2cociwgYywgcm5nQ291bnQpO1xuICAgIH1cbiAgICBsZXQgY29vcmRzID0gW107XG4gICAgaWYgKGlzSG9yaXpvbnRhbCA9PSBcInRydWVcIil7XG4gICAgICBmb3IgKDtsZW5ndGg+MDsgbGVuZ3RoLS0pe1xuICAgICAgICBjb29yZHMucHVzaChbcixjXSk7XG4gICAgICAgIGMrKztcbiAgICAgIH1cbiAgICB9IGVsc2V7XG4gICAgICBmb3IgKDtsZW5ndGg+MDsgbGVuZ3RoLS0pe1xuICAgICAgICBjb29yZHMucHVzaChbcixjXSk7XG4gICAgICAgIHIrKztcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coYEdlbmVyYXRlZCBhbGxvd2VkIHJhbmRvbSBjb29yZHMgJHtjb29yZHN9YCk7XG4gICAgcmV0dXJuIChjb29yZHMpO1xuICB9XG5cbiAgY29uc3QgcmFuZG9taXplSXNIb3Jpem9udGFsID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBybmcgPSBNYXRoLnJhbmRvbSgpKjI7XG4gICAgaWYgKHJuZyA8IDEpe1xuICAgICAgcmV0dXJuIFwidHJ1ZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJmYWxzZVwiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3U2hpcCxcbiAgICBnZXRTaGlwRnJvbUNvb3JkcyxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHdhc0F0dGFja2VkLFxuICAgIGlzQWxsU3VuayxcbiAgICBnZXRCb2FyZE1hcCxcbiAgICByZXNldEJvYXJkLFxuICAgIGdldEF0dGFja01hcCxcbiAgICBpc1RoaXNBbGxvd2VkUGxhY2VtZW50LFxuICAgIG1vdmVTaGlwLFxuICAgIGNyZWF0ZUFsbG93ZWRQb3NpdGlvbk1hcCxcbiAgICByYW5kb21pemVCb2FyZCxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuIiwiaW1wb3J0IHtHYW1lYm9hcmR9IGZyb20gXCIuL2dhbWVib2FyZC5qc1wiXG5cbmNvbnN0IFBsYXllciA9IGZ1bmN0aW9uKG5hbWUsIG51bWJlcil7XG5cbiAgICBsZXQgZ2FtZWJvYXJkO1xuICAgIGNvbnN0IGluaXQgPSBmdW5jdGlvbigpe1xuICAgICAgICBnYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgfSgpO1xuXG4gICAgcmV0dXJue1xuICAgICAgICBuYW1lLFxuICAgICAgICBudW1iZXIsXG4gICAgICAgIGdhbWVib2FyZCxcbiAgICB9XG59XG5cbmNvbnN0IGNvbXB1dGVyUGxheWVyID0gZnVuY3Rpb24obmFtZSwgbnVtYmVyKXtcblxuICAgIHJldHVybntcbiAgICAgICAgLy8gaW5oZXJpdCBwcm9wZXJ0aWVzIGJ5IGNvbXBvc2l0aW9uXG4gICAgICAgIC4uLihuZXcgUGxheWVyKG5hbWUsIG51bWJlcikpLFxuICAgIH1cbn1cblxuY29uc3QgaHVtYW5QbGF5ZXIgPSBmdW5jdGlvbihuYW1lLCBudW1iZXIpe1xuXG4gICAgcmV0dXJue1xuICAgICAgICAuLi4obmV3IFBsYXllcihuYW1lLCBudW1iZXIpKSxcbiAgICB9XG59XG5cbmV4cG9ydCB7UGxheWVyLCBjb21wdXRlclBsYXllciwgaHVtYW5QbGF5ZXJ9OyIsIi8vIGNvbnRhaW5zIG1ldGhvZHMgdG8gcG9wdWxhdGUgRE9NXG4vLyByZW5kZXIgZnVuY3Rpb25zIHdpbGwgZGlzcGxheSBET00gZWxlbWVudHNcbi8vIGJ1aWxkIGZ1bmN0aW9ucyB3aWxsIGJ1aWxkIGVsZW1lbnRzIGFuZCByZXR1cm4gdGhlbSB3aXRob3V0IGRpc3BsYXlcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5jb25zdCBSZW5kZXJNYW5hZ2VyID0gZnVuY3Rpb24oKXtcbiAgICBcbiAgICBsZXQgYm9hcmQxO1xuICAgIGxldCBib2FyZDI7XG4gICAgbGV0IGRpYWxvZztcbiAgICBjb25zdCBpbml0R2FtZVJlbmRlciA9IGZ1bmN0aW9uKHBsYXllcjFPYmplY3QsIHBsYXllcjJPYmplY3Qpe1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGJ1aWxkSGVhZGVyKCk7XG4gICAgICAgIGJvYXJkMSA9IGJ1aWxkQm9hcmRBbmRIZWFkZXIocGxheWVyMU9iamVjdC5udW1iZXIsIHBsYXllcjFPYmplY3QubmFtZSk7XG4gICAgICAgIGJvYXJkMiA9IGJ1aWxkQm9hcmRBbmRIZWFkZXIocGxheWVyMk9iamVjdC5udW1iZXIsIHBsYXllcjJPYmplY3QubmFtZSk7XG4gICAgICAgIGJvZHkuYXBwZW5kKGhlYWRlciwgYm9hcmQxLCBib2FyZDIpO1xuICAgICAgICBkaWFsb2cgPSBidWlsZERpYWxvZygpO1xuICAgICAgICBib2R5LmFwcGVuZChkaWFsb2cpO1xuICAgIH07XG5cbiAgICBjb25zdCBidWlsZEhlYWRlciA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcInVpIGNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgdHVyblRleHQgPSBjcmVhdGVFbGVtZW50KFwiaDFcIiwgXCJ0dXJuIHRleHRcIik7XG4gICAgICAgIHR1cm5UZXh0LnRleHRDb250ZW50ID0gXCIncyBUdXJuXCI7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQodHVyblRleHQpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkQm9hcmRBbmRIZWFkZXIgPSBmdW5jdGlvbihwbGF5ZXJOdW1iZXIsIHBsYXllck5hbWUpe1xuICAgICAgICBjb25zdCBib2FyZCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixgYm9hcmQgY29udGFpbmVyYCk7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixgcm93LSR7aX1gKTtcbiAgICAgICAgICAgIHJvdy5zZXRBdHRyaWJ1dGUoXCJyb3dcIiwgaSk7XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8MTA7IGorKyl7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiY29sXCIsIGopO1xuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmQoc3F1YXJlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIGJvYXJkLnNldEF0dHJpYnV0ZShcInBsYXllcm51bVwiLCBwbGF5ZXJOdW1iZXIpO1xuICAgICAgICBjb25zdCBib2FyZEFuZEhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixgYm9hcmQtYW5kLWhlYWRlciBjb250YWluZXIgcGxheWVyLSR7cGxheWVyTnVtYmVyfWApO1xuICAgICAgICBjb25zdCBib2FyZEhlYWRlclRleHQ9IGNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBcImJvYXJkIGhlYWRlclwiKTtcbiAgICAgICAgYm9hcmRIZWFkZXJUZXh0LnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZX0ncyBCb2FyZGA7XG4gICAgICAgIGJvYXJkQW5kSGVhZGVyLmFwcGVuZChib2FyZEhlYWRlclRleHQsIGJvYXJkKTtcbiAgICAgICAgcmV0dXJuIGJvYXJkQW5kSGVhZGVyO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkRGlhbG9nID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgICAgICAgY29uc3QgZGlhbG9nSGVhZGVyID0gY3JlYXRlRWxlbWVudChcImgxXCIsIFwiZGlhbG9nIGhlYWRlclwiKTtcbiAgICAgICAgZGlhbG9nSGVhZGVyLnRleHRDb250ZW50ID0gXCJTd2l0Y2ggUGxheWVycyFcIlxuICAgICAgICBjb25zdCBkaWFsb2dTdWJ0ZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJkaWFsb2cgc3VidGV4dFwiKTtcbiAgICAgICAgZGlhbG9nU3VidGV4dC50ZXh0Q29udGVudCA9IFwiKGNsaWNrIHdoZW4gcmVhZHkpXCI7XG4gICAgICAgIGRpYWxvZy5hcHBlbmQoZGlhbG9nSGVhZGVyLCBkaWFsb2dTdWJ0ZXh0KTtcbiAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgIGRpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7ZGlhbG9nLmNsb3NlKCl9KTtcbiAgICAgICAgcmV0dXJuIGRpYWxvZztcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJOZXdTaGlwID0gZnVuY3Rpb24ocGxheWVyTnVtYmVyLC4uLmNvb3Jkcyl7XG4gICAgICAgIGxldCBib2FyZDtcbiAgICAgICAgaWYgKHBsYXllck51bWJlciA9PTEpe1xuICAgICAgICAgICAgYm9hcmQgPSBib2FyZDE7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGJvYXJkID0gYm9hcmQyO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpPTA7XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IGlzSG9yaXpvbnRhbCA9IGZhbHNlO1xuICAgICAgICBpZiAoY29vcmRzWzFdWzBdID09IGNvb3Jkc1swXVswXSl7XG4gICAgICAgICAgICBpc0hvcml6b250YWwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IFt4LHldIG9mIGNvb3Jkcyl7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVUb0NoYW5nZSA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYGRpdi5yb3ctJHt4fSA+IGRpdjpudGgtY2hpbGQoJHt5KzF9KWApO1xuICAgICAgICAgICAgc3F1YXJlVG9DaGFuZ2UuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgICBzcXVhcmVUb0NoYW5nZS5zZXRBdHRyaWJ1dGUoXCJsZW5ndGhcIiwgc2hpcExlbmd0aCk7XG4gICAgICAgICAgICBzcXVhcmVUb0NoYW5nZS5zZXRBdHRyaWJ1dGUoXCJncmFiTG9jYXRpb25cIiwgaSk7XG4gICAgICAgICAgICBzcXVhcmVUb0NoYW5nZS5zZXRBdHRyaWJ1dGUoXCJob3Jpem9udGFsXCIsIGlzSG9yaXpvbnRhbClcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckF0dGFja2VkID0gZnVuY3Rpb24oc3F1YXJlRE9NTm9kZSl7XG4gICAgICAgIHNxdWFyZURPTU5vZGUuY2xhc3NMaXN0LmFkZChcImF0dGFja2VkXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJldmVhbERpYWxvZ1dpdGhUZXh0ID0gZnVuY3Rpb24oc3RyaW5nID0gXCJcIil7XG4gICAgICAgIGNvbnN0IGRpYWxvZ0hlYWRlciA9IGRpYWxvZy5maXJzdENoaWxkO1xuICAgICAgICBpZiAoc3RyaW5nICE9IFwiXCIpe1xuICAgICAgICAgICAgZGlhbG9nSGVhZGVyLnRleHRDb250ZW50ID0gc3RyaW5nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlhbG9nSGVhZGVyLnRleHRDb250ZW50ID0gXCJTd2l0Y2ggUGxheWVycyFcIlxuICAgICAgICB9XG4gICAgICAgIC8vIGFkZCBzY3JlZW4gc3dhcHBpbmcgb3ZlcmxheVxuICAgICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyVHVyblN3aXRjaFRvID0gZnVuY3Rpb24ocGxheWVyTnVtYmVyLCBwbGF5ZXJOYW1lKXtcbiAgICAgICAgcmV2ZWFsRGlhbG9nV2l0aFRleHQoYCR7cGxheWVyTmFtZX0ncyBUdXJuYCk7XG4gICAgICAgIC8vIHBsYXllck51bWJlciBpcyBudW1iZXIgb2YgcGxheWVyIHdob3NlIHR1cm4gaXQgc2hvdWxkIHN3aXRjaCBUT1xuICAgICAgICAvLyBjaGFuZ2UgaGVhZGVyIHRvIFwiSXQgaXMgcGxheWVyc3twbGF5ZXJOdW1iZXJ9Lm5hbWUncyB0dXJuXCJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51aS5jb250YWluZXIgLnR1cm4udGV4dFwiKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZX0ncyBUdXJuYDtcbiAgICAgICAgLy8gY2hhbmdlIGJvYXJkIGhlYWRlciBmcm9tIFwiWW91ciBCb2FyZFwiIHRvIFwiRW5lbXkgQm9hcmRcIiBhbmQgdmlzIHZlcnNhXG4gICAgICAgIGNvbnN0IGJvYXJkMUhlYWRlciA9IGJvYXJkMS5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcbiAgICAgICAgY29uc3QgYm9hcmQySGVhZGVyID0gYm9hcmQyLnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xuICAgICAgICBpZiAocGxheWVyTnVtYmVyID09IDEpe1xuICAgICAgICAgICAgYm9hcmQySGVhZGVyLnRleHRDb250ZW50ID0gXCJFbmVteSBCb2FyZFwiO1xuICAgICAgICAgICAgYm9hcmQxSGVhZGVyLnRleHRDb250ZW50ID0gXCJZb3VyIEJvYXJkXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2FyZDFIZWFkZXIudGV4dENvbnRlbnQgPSBcIkVuZW15IEJvYXJkXCI7XG4gICAgICAgICAgICBib2FyZDJIZWFkZXIudGV4dENvbnRlbnQgPSBcIllvdXIgQm9hcmRcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBoaWRlIHNoaXBzIGZyb20gZW5lbXkgYm9hcmQgYW5kIHJldmVhbCBzaGlwcyBvbiB5b3VyIGJvYXJkXG4gICAgICAgIGJvYXJkMS5sYXN0Q2hpbGQuY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG4gICAgICAgIGJvYXJkMi5sYXN0Q2hpbGQuY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG4gICAgfVxuXG4gICAgLy8gcmVuZGVyIGVuZGluZyBnYW1lIChwbGF5ZXJOYW1lIGhhcyB3b24pXG4gICAgY29uc3QgcmVuZGVyRW5kR2FtZSA9IGZ1bmN0aW9uKHdpbm5lck5hbWUpe1xuICAgICAgICBjb25zdCB3aW5uZXJUZXh0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImVuZCBjb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHdpbm5lclRleHQgPSBjcmVhdGVFbGVtZW50KFwiaDFcIiwgXCJ3aW5uZXIgdGV4dFwiKTtcbiAgICAgICAgd2lubmVyVGV4dC50ZXh0Q29udGVudCA9IGBDb25ncmF0cyEgJHt3aW5uZXJOYW1lfSB3b24uYDs7XG4gICAgICAgIGNvbnN0IHBsYXlBZ2FpbkJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJyZXNldCBidXR0b25cIik7XG4gICAgICAgIHBsYXlBZ2FpbkJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUGxheSBBZ2Fpbj9cIjtcbiAgICAgICAgd2lubmVyVGV4dENvbnRhaW5lci5hcHBlbmQod2lubmVyVGV4dCwgcGxheUFnYWluQnV0dG9uKTtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgICBib2R5LmFwcGVuZCh3aW5uZXJUZXh0Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJTdGFnaW5nID0gZnVuY3Rpb24oYXR0YWNrTWFwMSwgc2hpcE1hcDEsIGF0dGFja01hcDIsIHNoaXBNYXAyKXtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51aS5jb250YWluZXIgLnR1cm4udGV4dFwiKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJTZXR1cCBUaW1lXCI7XG4gICAgICAgIHJlbmRlckJvYXJkUmVzZXQoYXR0YWNrTWFwMSwgc2hpcE1hcDEsIGJvYXJkMS5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLmNvbnRhaW5lclwiKSk7XG4gICAgICAgIHJlbmRlckJvYXJkUmVzZXQoYXR0YWNrTWFwMiwgc2hpcE1hcDIsIGJvYXJkMi5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLmNvbnRhaW5lclwiKSk7XG4gICAgICAgIHJlbmRlclNoaXBTYW1wbGVzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlQm9hcmRWaXNpYmlsaXR5ID0gZnVuY3Rpb24oYm9hcmRET00pe1xuICAgICAgICBib2FyZERPTS5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJCb2FyZFJlc2V0ID0gZnVuY3Rpb24oYXR0YWNrTWFwLCBzaGlwTWFwLCBib2FyZERPTSl7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGk7XG4gICAgICAgICAgICBjb25zdCBhdHRhY2tlZEluUm93ID0gT2JqZWN0LmtleXMoYXR0YWNrTWFwW2ldKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBJblJvdyA9IE9iamVjdC5rZXlzKHNoaXBNYXBbaV0pO1xuICAgICAgICAgICAgZm9yIChsZXQgYXR0YWNrZWQgb2YgYXR0YWNrZWRJblJvdyl7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sID0gTnVtYmVyKGF0dGFja2VkKSsxO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdlRvVW5hdHRhY2sgPSBib2FyZERPTS5xdWVyeVNlbGVjdG9yKGBkaXYucm93LSR7cm93fSBkaXY6bnRoLWNoaWxkKCR7Y29sfSlgKTtcbiAgICAgICAgICAgICAgICBkaXZUb1VuYXR0YWNrLmNsYXNzTGlzdC5yZW1vdmUoXCJhdHRhY2tlZFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgc2hpcCBvZiBzaGlwSW5Sb3cpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IE51bWJlcihzaGlwKSsxO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdlRvVW5zaGlwID0gYm9hcmRET00ucXVlcnlTZWxlY3RvcihgZGl2LnJvdy0ke3Jvd30gZGl2Om50aC1jaGlsZCgke2NvbH0pYCk7XG4gICAgICAgICAgICAgICAgZGl2VG9VbnNoaXAuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIik7XG4gICAgICAgICAgICAgICAgZGl2VG9VbnNoaXAucmVtb3ZlQXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIpO1xuICAgICAgICAgICAgICAgIGRpdlRvVW5zaGlwLnJlbW92ZUF0dHJpYnV0ZShcImdyYWJsb2NhdGlvblwiKTtcbiAgICAgICAgICAgICAgICBkaXZUb1Vuc2hpcC5yZW1vdmVBdHRyaWJ1dGUoXCJsZW5ndGhcIik7XG4gICAgICAgICAgICAgICAgZGl2VG9VbnNoaXAucmVtb3ZlQXR0cmlidXRlKFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclNoaXBTYW1wbGVzID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgaGlkZGVuQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImhpZGRlbiBzYW1wbGVzXCIpO1xuICAgICAgICBjb25zdCBob3Jpem9udGFsU2hpcHMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2hpcHMgaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgY29uc3QgdmVydGljYWxTaGlwcyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzaGlwcyB2ZXJ0aWNhbFwiKTtcbiAgICAgICAgaG9yaXpvbnRhbFNoaXBzLmFwcGVuZChidWlsZFNoaXBPZkxlbmd0aCgyKSwgYnVpbGRTaGlwT2ZMZW5ndGgoMyksXG4gICAgICAgIGJ1aWxkU2hpcE9mTGVuZ3RoKDQpLCBidWlsZFNoaXBPZkxlbmd0aCg1KSk7XG4gICAgICAgIHZlcnRpY2FsU2hpcHMuYXBwZW5kKGJ1aWxkU2hpcE9mTGVuZ3RoKDIpLCBidWlsZFNoaXBPZkxlbmd0aCgzKSxcbiAgICAgICAgYnVpbGRTaGlwT2ZMZW5ndGgoNCksIGJ1aWxkU2hpcE9mTGVuZ3RoKDUpKTtcbiAgICAgICAgaGlkZGVuQ29udGFpbmVyLmFwcGVuZChob3Jpem9udGFsU2hpcHMsdmVydGljYWxTaGlwcyk7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxuICAgICAgICBib2R5LmFwcGVuZChoaWRkZW5Db250YWluZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkU2hpcE9mTGVuZ3RoID0gZnVuY3Rpb24obGVuZ3RoKXtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLFwic2hpcCBjb250YWluZXJcIik7XG4gICAgICAgIGNvbnRhaW5lci5pZCA9IGBsZW5ndGgtJHtsZW5ndGh9YDtcbiAgICAgICAgZm9yIChsZXQgaSA9MDsgaTxsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBwYXJ0ID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQocGFydCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJTdGFnaW5nQnV0dG9ucyA9IGZ1bmN0aW9uKGJvYXJkRE9NKXtcbiAgICAgICAgY29uc3QgYnV0dG9uQXJlYSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcImJ1dHRvbiBjb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIixcInN1Ym1pdCBzdGFnaW5nXCIpO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIkxvY2sgaW4gcG9zaXRpb25zIVwiO1xuICAgICAgICBjb25zdCBybmdCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwicmFuZG9taXplIGJ1dHRvblwiKTtcbiAgICAgICAgcm5nQnV0dG9uLnRleHRDb250ZW50ID0gXCJSYW5kb21pemVcIlxuICAgICAgICBidXR0b25BcmVhLmFwcGVuZChidXR0b24sIHJuZ0J1dHRvbik7XG4gICAgICAgIGJvYXJkRE9NLnBhcmVudE5vZGUuYXBwZW5kKGJ1dHRvbkFyZWEpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlck1vdmVTaGlwID0gZnVuY3Rpb24oW29sZFhTdGFydCwgb2xkWVN0YXJ0XSwgW25ld1hTdGFydCwgbmV3WVN0YXJ0XSwgc2hpcExlbmd0aCwgaXNIb3Jpem9udGFsLCBib2FyZERPTU5vZGUpe1xuICAgICAgICBpZiAob2xkWFN0YXJ0ID09IG5ld1hTdGFydCAmJiBvbGRZU3RhcnQgPT0gbmV3WVN0YXJ0KXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNIb3Jpem9udGFsID09IFwidHJ1ZVwiKXtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxzaGlwTGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZVRvUmVtb3ZlID0gYm9hcmRET01Ob2RlLnF1ZXJ5U2VsZWN0b3IoYC5yb3ctJHtvbGRYU3RhcnR9IGRpdjpudGgtY2hpbGQoJHtvbGRZU3RhcnQraSsxfSlgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBncmFibG9jYXRpb24gPSBzcXVhcmVUb1JlbW92ZS5nZXRBdHRyaWJ1dGUoXCJncmFibG9jYXRpb25cIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUucmVtb3ZlQXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLnJlbW92ZUF0dHJpYnV0ZShcImxlbmd0aFwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5yZW1vdmVBdHRyaWJ1dGUoXCJncmFibG9jYXRpb25cIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUucmVtb3ZlQXR0cmlidXRlKFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKVxuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZVRvQWRkID0gYm9hcmRET01Ob2RlLnF1ZXJ5U2VsZWN0b3IoYC5yb3ctJHtuZXdYU3RhcnR9IGRpdjpudGgtY2hpbGQoJHtuZXdZU3RhcnQraSsxfSlgKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuc2V0QXR0cmlidXRlKFwibGVuZ3RoXCIsIHNoaXBMZW5ndGgpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLnNldEF0dHJpYnV0ZShcImdyYWJsb2NhdGlvblwiLCBncmFibG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLnNldEF0dHJpYnV0ZShcImhvcml6b250YWxcIiwgaXNIb3Jpem9udGFsKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHNoaXBMZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlVG9SZW1vdmUgPSBib2FyZERPTU5vZGUucXVlcnlTZWxlY3RvcihgLnJvdy0ke29sZFhTdGFydCtpfSBkaXY6bnRoLWNoaWxkKCR7b2xkWVN0YXJ0KzF9KWApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyYWJsb2NhdGlvbiA9IHNxdWFyZVRvUmVtb3ZlLmdldEF0dHJpYnV0ZShcImdyYWJsb2NhdGlvblwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5yZW1vdmVBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUucmVtb3ZlQXR0cmlidXRlKFwibGVuZ3RoXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLnJlbW92ZUF0dHJpYnV0ZShcImdyYWJsb2NhdGlvblwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5yZW1vdmVBdHRyaWJ1dGUoXCJob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpXG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlVG9BZGQgPSBib2FyZERPTU5vZGUucXVlcnlTZWxlY3RvcihgLnJvdy0ke25ld1hTdGFydCtpfSBkaXY6bnRoLWNoaWxkKCR7bmV3WVN0YXJ0KzF9KWApO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5zZXRBdHRyaWJ1dGUoXCJsZW5ndGhcIiwgc2hpcExlbmd0aCk7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuc2V0QXR0cmlidXRlKFwiZ3JhYmxvY2F0aW9uXCIsIGdyYWJsb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuc2V0QXR0cmlidXRlKFwiaG9yaXpvbnRhbFwiLCBpc0hvcml6b250YWwpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnRUeXBlLCBjbGFzc1N0cmluZyA9IHVuZGVmaW5lZCl7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XG4gICAgICAgIGlmIChjbGFzc1N0cmluZyAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzU3RyaW5nLnNwbGl0KFwiIFwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJue1xuICAgICAgICBpbml0R2FtZVJlbmRlcixcbiAgICAgICAgcmVuZGVyTmV3U2hpcCxcbiAgICAgICAgcmVuZGVyQXR0YWNrZWQsXG4gICAgICAgIHJlbmRlclR1cm5Td2l0Y2hUbyxcbiAgICAgICAgcmVuZGVyRW5kR2FtZSxcbiAgICAgICAgcmVuZGVyU3RhZ2luZyxcbiAgICAgICAgcmVuZGVyU2hpcFNhbXBsZXMsXG4gICAgICAgIHJlbmRlck1vdmVTaGlwLFxuICAgICAgICByZW5kZXJTdGFnaW5nQnV0dG9ucyxcbiAgICAgICAgdG9nZ2xlQm9hcmRWaXNpYmlsaXR5LFxuICAgICAgICByZW5kZXJCb2FyZFJlc2V0LFxuICAgICAgICByZXZlYWxEaWFsb2dXaXRoVGV4dCxcbiAgICB9XG5cbn0oKTtcblxuZXhwb3J0IHtSZW5kZXJNYW5hZ2VyfTsiLCJjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgpe1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICB9XG5cbiAgICBoaXQoKXtcbiAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgfVxuXG4gICAgaXNTdW5rKCl7XG4gICAgICAgIHJldHVybiAodGhpcy5oaXRzID49IHRoaXMubGVuZ3RoKVxuICAgIH1cbn1cblxuZXhwb3J0IHtTaGlwfTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBtb2R1bGUgdG8gbWFuYWdlIGdhbWUgdXNpbmcgZXZlbnQgbGlzdGVuZXJzIHRvIGludGVyYWN0IHdpdGggb2JqZWN0c1xuLy8gY2FsbHMgbWV0aG9kcyBpbiByZW5kZXIuanMgdG8gY2hhbmdlIERPTVxuLy8gcmVhbGlzdGljYWxseSBkb2VzIG5vdCBleHBvcnQgYW55dGhpbmcgc2luY2UgaXQgaXMgYSBkcml2ZXJcblxuaW1wb3J0IHtodW1hblBsYXllciwgY29tcHV0ZXJQbGF5ZXJ9IGZyb20gXCIuL3BsYXllci5qc1wiXG5pbXBvcnQge1JlbmRlck1hbmFnZXJ9IGZyb20gXCIuL3JlbmRlci5qc1wiXG5cbmNvbnN0IEdhbWVNYW5hZ2VyID0gZnVuY3Rpb24oKXtcblxuICAgIGNvbnN0IGFkZE5ld1NoaXAgPSBmdW5jdGlvbihwbGF5ZXIsIC4uLmNvb3Jkcyl7XG4gICAgICAgIHBsYXllci5nYW1lYm9hcmQubmV3U2hpcCguLi5jb29yZHMpO1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlck5ld1NoaXAocGxheWVyLm51bWJlciwuLi5jb29yZHMpO1xuICAgIH1cblxuICAgIC8vIHBhc3NlcyB0dXJuIHRvIHBsYXllciAxIGlmIG51bWJlciA9IDFcbiAgICAvLyBpZiBpdCBpcyBwbGF5ZXIgMSdzIHR1cm4sIHRoZW4gYm9hcmQgMiBzaG91bGQgYmUgQUNUSVZFXG4gICAgY29uc3QgcGFzc1R1cm5UbyA9IGZ1bmN0aW9uKHBsYXllck51bWJlcil7XG4gICAgICAgIGlmIChwbGF5ZXJOdW1iZXIgPT0gMSl7XG4gICAgICAgICAgICBhY3RpdmF0ZUV2ZW50TGlzdGVuZXIocGxheWVycy5wbGF5ZXIyLmJvYXJkRE9NKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgYWN0aXZhdGVFdmVudExpc3RlbmVyKHBsYXllcnMucGxheWVyMS5ib2FyZERPTSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGxheWVyTmFtZSA9IE9iamVjdC52YWx1ZXMocGxheWVycylbcGxheWVyTnVtYmVyLTFdLm5hbWU7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3BsYXllck5hbWV9J3MgVHVybmApO1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlclR1cm5Td2l0Y2hUbyhwbGF5ZXJOdW1iZXIsIHBsYXllck5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGJvYXJkRE9NTm9kZSl7XG4gICAgICAgIGJvYXJkRE9NTm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQm9hcmRDbGljayk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQm9hcmRDbGljayA9IGFzeW5jIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgbGV0IHBsYXllck51bWJlciA9IHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwicGxheWVybnVtXCIpO1xuICAgICAgICBsZXQgeSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjb2xcIik7XG4gICAgICAgIGxldCB4ID0gdGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwicm93XCIpO1xuICAgICAgICBsZXQgcGxheWVyT2JqZWN0ID0gcGxheWVyTnVtYmVyID09IDEgPyBwbGF5ZXJzLnBsYXllcjEgOiBwbGF5ZXJzLnBsYXllcjI7XG4gICAgICAgIHBsYXllck9iamVjdC5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbeCx5XSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBSZWNlaXZlZCBhdHRhY2sgYXQgKCR7eH0sJHt5fSkgZm9yIHBsYXllciAke3BsYXllck51bWJlcn1gKTtcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJBdHRhY2tlZCh0YXJnZXQpO1xuICAgICAgICBwbGF5ZXJPYmplY3QuYm9hcmRET00ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUJvYXJkQ2xpY2spO1xuICAgICAgICBhd2FpdCBzaG9ydFNsZWVwKCk7XG4gICAgICAgIGlmIChwbGF5ZXJPYmplY3QuZ2FtZWJvYXJkLmlzQWxsU3VuaygpKXtcbiAgICAgICAgICAgIGVuZEdhbWUocGxheWVyTnVtYmVyKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgcGFzc1R1cm5UbyhwbGF5ZXJOdW1iZXIpOyAvLyBXZSBwYXNzIHR1cm4gdG8gcGxheWVyJ3MgYm9hcmQgd2UganVzdCBjbGlja2VkXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbml0UGxheSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIGFzc2lnbiBldmVudCBsaXN0ZW5lciBmb3IgYXR0YWNrc1xuICAgICAgICAvLyBsYXRlciBtYWtlIGZpcnN0IHR1cm4gcmFuZG9tIG9yIGNob3NlblxuICAgICAgICBwbGF5ZXJzLnBsYXllcjIuYm9hcmRET00uY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gICAgICAgIHBhc3NUdXJuVG8oMSk7XG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2dcIik7XG4gICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfTtcblxuICAgIGxldCBwbGF5ZXJzO1xuICAgIGNvbnN0IGluaXRHYW1lID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgcGxheWVyMSA9IG5ldyBodW1hblBsYXllcihcIkFteVwiLCAxKTtcbiAgICAgICAgY29uc3QgcGxheWVyMiA9IG5ldyBodW1hblBsYXllcihcIkJhcnRcIiwgMik7XG4gICAgICAgIFJlbmRlck1hbmFnZXIuaW5pdEdhbWVSZW5kZXIocGxheWVyMSwgcGxheWVyMik7XG4gICAgICAgIGNvbnN0IGJvYXJkMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtYW5kLWhlYWRlci5wbGF5ZXItMSAuYm9hcmQuY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBib2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLWFuZC1oZWFkZXIucGxheWVyLTIgLmJvYXJkLmNvbnRhaW5lclwiKTtcbiAgICAgICAgcGxheWVyMS5ib2FyZERPTSA9IGJvYXJkMTtcbiAgICAgICAgcGxheWVyMi5ib2FyZERPTSA9IGJvYXJkMjtcbiAgICAgICAgLy8gZWFjaCBwbGF5ZXIgaGFzIDUgc2hpcHMgb2Ygc2l6ZSAyLCAzLCAzLCA0LCA1XG4gICAgICAgIHBsYXllcnMgPSB7cGxheWVyMSwgcGxheWVyMn07XG4gICAgICAgIGVudGVyR2FtZVN0YWdpbmcoKTtcbiAgICAgICAgLy9qdXN0IGZvciB0ZXN0aW5nIVxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVpLmNvbnRhaW5lclwiKTtcbiAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBlbmRHYW1lKDEpKVxuICAgIH07XG5cbiAgICAvLyBwbGF5ZXIgd2l0aCBwbGF5ZXJOdW1iZXIgbG9zdFxuICAgIGNvbnN0IGVuZEdhbWUgPSBmdW5jdGlvbihwbGF5ZXJOdW1iZXIpe1xuICAgICAgICBsZXQgd2lubmVyTmFtZTtcbiAgICAgICAgaWYgKHBsYXllck51bWJlciA9PTEpe1xuICAgICAgICAgICAgd2lubmVyTmFtZSA9IHBsYXllcnMucGxheWVyMi5uYW1lO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICB3aW5uZXJOYW1lID0gcGxheWVycy5wbGF5ZXIxLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJFbmRHYW1lKHdpbm5lck5hbWUpO1xuICAgICAgICBhY3RpdmF0ZVJlcGxheUJ1dHRvbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlUmVwbGF5QnV0dG9uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgcmVwbGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5lbmQuY29udGFpbmVyIGJ1dHRvblwiKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVwbGF5QnV0dG9uKTtcbiAgICAgICAgcmVwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlbnRlckdhbWVTdGFnaW5nKTtcbiAgICB9XG5cbiAgICAvLyBTVEFSVCBPRiBDT0RFIFJFTEFURUQgVE8gR0FNRSBTVEFHSU5HXG4gICAgY29uc3QgZW50ZXJHYW1lU3RhZ2luZyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIGFjdGl2YXRlIGRyYWcgYW5kIGRyb3Agb2Ygc2hpcHMgdG8gY2hvb3NlIHNoaXAgbG9jYXRpb24gdXNpbmcgSFRNTCBkcmFnIGFuZCBkcm9wIEFQSSFcbiAgICAgICAgY29uc29sZS5sb2coXCJFbnRlcmluZyBuZXcgZ2FtZSBzdGFnaW5nIVwiKVxuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlclN0YWdpbmcoXG4gICAgICAgICAgICBwbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLmdldEF0dGFja01hcCgpLFxuICAgICAgICAgICAgcGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5nZXRCb2FyZE1hcCgpLFxuICAgICAgICAgICAgcGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5nZXRBdHRhY2tNYXAoKSxcbiAgICAgICAgICAgIHBsYXllcnMucGxheWVyMi5nYW1lYm9hcmQuZ2V0Qm9hcmRNYXAoKVxuICAgICAgICApO1xuICAgICAgICBwbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgICAgICAgcGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5yZXNldEJvYXJkKCk7XG4gICAgICAgIGFjdGl2YXRlU3RhZ2luZyhwbGF5ZXJzLnBsYXllcjEpXG4gICAgICAgIC8vIHJlcGVhdCBmb3IgYm9hcmQgMlxuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlU3RhZ2luZyA9IGZ1bmN0aW9uKHBsYXllcil7XG4gICAgICAgIGNvbnN0IGJvYXJkMSA9IHBsYXllci5ib2FyZERPTTtcbiAgICAgICAgUmVuZGVyTWFuYWdlci50b2dnbGVCb2FyZFZpc2liaWxpdHkoYm9hcmQxKTtcbiAgICAgICAgcmVuZGVyRHJhZ2dhYmxlU2hpcHNUb1N0YWdlKHBsYXllcik7XG4gICAgICAgIGFjdGl2YXRlRHJvcEFuZERyYWdTdGFydEhhbmRsZXIoYm9hcmQxKTtcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJTdGFnaW5nQnV0dG9ucyhib2FyZDEpO1xuICAgICAgICBhY3RpdmF0ZVN0YWdpbmdCdXR0b25zKHBsYXllcik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyRHJhZ2dhYmxlU2hpcHNUb1N0YWdlID0gZnVuY3Rpb24ocGxheWVyKXtcbiAgICAgICAgYWRkTmV3U2hpcFdpdGhEcmFnZ2luZyhwbGF5ZXIsWzAsMF0sWzAsMV0pXG4gICAgICAgIGFkZE5ld1NoaXBXaXRoRHJhZ2dpbmcocGxheWVyLFszLDNdLFs0LDNdLFs1LDNdKTtcbiAgICAgICAgYWRkTmV3U2hpcFdpdGhEcmFnZ2luZyhwbGF5ZXIsWzcsN10sWzgsN10sWzksN10pO1xuICAgICAgICBhZGROZXdTaGlwV2l0aERyYWdnaW5nKHBsYXllcixbMCwzXSwgWzAsNF0sWzAsNV0sWzAsNl0pO1xuICAgICAgICBhZGROZXdTaGlwV2l0aERyYWdnaW5nKHBsYXllcixbNSw1XSwgWzYsNV0sWzcsNV0sWzgsNV0sWzksNV0pO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZE5ld1NoaXBXaXRoRHJhZ2dpbmcgPSBmdW5jdGlvbihwbGF5ZXIsIC4uLmNvb3Jkcyl7XG4gICAgICAgIGFkZE5ld1NoaXAocGxheWVyLCAuLi5jb29yZHMpO1xuICAgICAgICBzZXRTcGVjaWZpY0RyYWdnYWJsZShwbGF5ZXIuYm9hcmRET00sIC4uLmNvb3Jkcyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0U3BlY2lmaWNEcmFnZ2FibGUgPSBmdW5jdGlvbihib2FyZERPTSwgLi4uY29vcmRzKXtcbiAgICAgICAgZm9yIChsZXQgW3gseV0gb2YgY29vcmRzKXtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGJvYXJkRE9NLnF1ZXJ5U2VsZWN0b3IoYC5yb3ctJHt4fSBkaXY6bnRoLWNoaWxkKCR7eSsxfSlgKTtcbiAgICAgICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZVN0YWdpbmdCdXR0b25zID0gZnVuY3Rpb24ocGxheWVyKXtcbiAgICAgICAgY29uc3QgYm9hcmRET00gPSBwbGF5ZXIuYm9hcmRET007XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGJvYXJkRE9NLm5leHRFbGVtZW50U2libGluZy5maXJzdENoaWxkO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNvbXBsZXRlU3RhZ2luZyhib2FyZERPTSkpXG4gICAgICAgIGNvbnN0IHJuZ0J1dHRvbiA9IGJ1dHRvbi5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIHJuZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcmFuZG9taXplQm9hcmQocGxheWVyKSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmFuZG9taXplQm9hcmQgPSBmdW5jdGlvbihwbGF5ZXIpe1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlckJvYXJkUmVzZXQocGxheWVyLmdhbWVib2FyZC5nZXRBdHRhY2tNYXAoKSxcbiAgICAgICAgcGxheWVyLmdhbWVib2FyZC5nZXRCb2FyZE1hcCgpLCBwbGF5ZXIuYm9hcmRET00pO1xuICAgICAgICBjb25zdCByYW5kb21Db29yZHMgPSBwbGF5ZXIuZ2FtZWJvYXJkLnJhbmRvbWl6ZUJvYXJkKCk7XG4gICAgICAgIC8vIHJhbmRvbUNvb3JkcyBpcyB7Y29vcmRzMSwgY29vcmRzMiwgLi4uIGNvb3JkczV9IHdoZXJlIGVhY2ggY29vcmRzIGlzIGFuIGFycmF5IG9mIFt4LHldc1xuICAgICAgICBmb3IgKGxldCBjb29yZHNBcnJheSBvZiBPYmplY3QudmFsdWVzKHJhbmRvbUNvb3Jkcykpe1xuICAgICAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJOZXdTaGlwKHBsYXllci5udW1iZXIsIC4uLmNvb3Jkc0FycmF5KTtcbiAgICAgICAgICAgIHNldFNwZWNpZmljRHJhZ2dhYmxlKHBsYXllci5ib2FyZERPTSwgLi4uY29vcmRzQXJyYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGVTdGFnaW5nID0gYXN5bmMgZnVuY3Rpb24oYm9hcmRET00pe1xuICAgICAgICBkZWFjdGl2YXRlU3RhZ2luZyhib2FyZERPTSk7XG4gICAgICAgIGlmIChib2FyZERPTS5nZXRBdHRyaWJ1dGUoXCJwbGF5ZXJudW1cIikgPT0gXCIxXCIpe1xuICAgICAgICAgICAgUmVuZGVyTWFuYWdlci5yZXZlYWxEaWFsb2dXaXRoVGV4dChgTm93IGxldCAke3BsYXllcnMucGxheWVyMi5uYW1lfSBzZXQgdXAuYCk7XG4gICAgICAgICAgICBhY3RpdmF0ZVN0YWdpbmcocGxheWVycy5wbGF5ZXIyKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgaW5pdFBsYXkoKTtcbiAgICAgICAgICAgIFJlbmRlck1hbmFnZXIucmV2ZWFsRGlhbG9nV2l0aFRleHQoYExldCdzIHBsYXkhICR7cGxheWVycy5wbGF5ZXIxLm5hbWV9IGZpcnN0LmApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGVhY3RpdmF0ZVN0YWdpbmcgPSBmdW5jdGlvbihib2FyZERPTSl7XG4gICAgICAgIFJlbmRlck1hbmFnZXIudG9nZ2xlQm9hcmRWaXNpYmlsaXR5KGJvYXJkRE9NKTtcbiAgICAgICAgY29uc3QgYnV0dG9uQXJlYSA9IGJvYXJkRE9NLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgYnV0dG9uQXJlYS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJ1dHRvbkFyZWEpO1xuICAgICAgICBjb25zdCByb3dzID0gYm9hcmRET00uY2hpbGRyZW47XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHJvd3NbaV07XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVzID0gcm93LmNoaWxkcmVuO1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPDEwOyBqKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IHNxdWFyZXNbal07XG4gICAgICAgICAgICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBvbmRyYWdvdmVySGFuZGxlcik7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGRyb3BIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnc3RhcnRIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUucmVtb3ZlQXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGFyZ2V0IGlzIDxkaXYgY29sPVwiXCI+IChlZzogc3F1YXJlKVxuICAgIGNvbnN0IGRyYWdzdGFydEhhbmRsZXIgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZHJhZyBldmVudCB0cmlnZ2VyZWRcIik7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgbGV0IHNoaXBMZW5ndGggPSBOdW1iZXIodGFyZ2V0LmdldEF0dHJpYnV0ZShcImxlbmd0aFwiKSk7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwic2hpcExlbmd0aFwiLCBzaGlwTGVuZ3RoKTtcbiAgICAgICAgbGV0IGdyYWJMb2NhdGlvbiA9IE51bWJlcih0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZ3JhYmxvY2F0aW9uXCIpKTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJncmFiTG9jYXRpb25cIiwgZ3JhYkxvY2F0aW9uKTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJob3Jpem9udGFsXCIsIHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJob3Jpem9udGFsXCIpKTtcbiAgICAgICAgbGV0IHN0YXJ0Um93ID0gTnVtYmVyKHRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcInJvd1wiKSk7XG4gICAgICAgIGxldCBzdGFydENvbCA9IE51bWJlcih0YXJnZXQuZ2V0QXR0cmlidXRlKFwiY29sXCIpKTtcbiAgICAgICAgbGV0IGlzSG9yaXpvbnRhbCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJob3Jpem9udGFsXCIpO1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInN0YXJ0Um93XCIsIHN0YXJ0Um93KTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJzdGFydENvbFwiLCBzdGFydENvbCk7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiaXNIb3Jpem9udGFsXCIsIGlzSG9yaXpvbnRhbClcbiAgICAgICAgY29uc3Qgd2lkdGhPZkRpdiA9IDIwO1xuICAgICAgICBjb25zdCB3aWR0aE9mR2FwID0gMTtcbiAgICAgICAgLy8gaWYgZ3JhYmxvY2F0aW9uID0gMCwgZG9uJ3QgYWRkIGFueXRoaW5nXG4gICAgICAgIC8vIGlmIGdyYWJsb2NhdGlvbiA9IDEsIGFkZCAxIGdhcCBhbmQgMSBkaXZcbiAgICAgICAgLy8gaWYgZ3JhYmxvY2F0aW9uID0gMiwgYWRkIDIgZ2FwcyBhbmQgMiBkaXZzXG4gICAgICAgIGxldCBhZGRPZmZzZXRYID0gMDtcbiAgICAgICAgbGV0IGFkZE9mZnNldFkgPSAwO1xuICAgICAgICBsZXQgZHJhZ0ltYWdlTm9kZTtcbiAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCA9PSBcInRydWVcIil7XG4gICAgICAgICAgICBkcmFnSW1hZ2VOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmhpZGRlbi5zYW1wbGVzIC5zaGlwcy5ob3Jpem9udGFsICNsZW5ndGgtJHtzaGlwTGVuZ3RofWApO1xuICAgICAgICAgICAgYWRkT2Zmc2V0WCA9IChncmFiTG9jYXRpb24gKiAod2lkdGhPZkRpdit3aWR0aE9mR2FwKSk7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGRyYWdJbWFnZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaGlkZGVuLnNhbXBsZXMgLnNoaXBzLnZlcnRpY2FsICNsZW5ndGgtJHtzaGlwTGVuZ3RofWApO1xuICAgICAgICAgICAgYWRkT2Zmc2V0WSA9IChncmFiTG9jYXRpb24gKiAod2lkdGhPZkRpdit3aWR0aE9mR2FwKSlcbiAgICAgICAgfVxuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKGRyYWdJbWFnZU5vZGUsZXZlbnQub2Zmc2V0WCArIGFkZE9mZnNldFgsZXZlbnQub2Zmc2V0WSthZGRPZmZzZXRZKTtcbiAgICAgICAgLy8gZHluYW1pY2FsbHkgYWxsb3cgd2hlcmUgd2UgY2FuIGRyb3Agd2l0aCBvbmRyYWdvdmVyIGF0dHJpYnV0ZVxuICAgICAgICBjb25zdCBwbGF5ZXJOdW0gPSB0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcInBsYXllcm51bVwiKTtcbiAgICAgICAgbGV0IHBsYXllclZhcjtcbiAgICAgICAgaWYgKHBsYXllck51bSA9PTEpe1xuICAgICAgICAgICAgcGxheWVyVmFyID0gcGxheWVycy5wbGF5ZXIxO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBwbGF5ZXJWYXIgPSBwbGF5ZXJzLnBsYXllcjI7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJwbGF5ZXJudW1cIiwgcGxheWVyTnVtKTtcbiAgICAgICAgY29uc3Qgc2hpcE9iamVjdCA9IHBsYXllclZhci5nYW1lYm9hcmQuZ2V0U2hpcEZyb21Db29yZHMoW3N0YXJ0Um93LCBzdGFydENvbF0pO1xuICAgICAgICBwbGF5ZXJWYXIuZ2FtZWJvYXJkLmNyZWF0ZUFsbG93ZWRQb3NpdGlvbk1hcChzaGlwT2JqZWN0LCBpc0hvcml6b250YWwsIGdyYWJMb2NhdGlvbik7XG4gICAgICAgIGFjdGl2YXRlT25kcmFnb3ZlcihwbGF5ZXJWYXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlT25kcmFnb3ZlciA9IGZ1bmN0aW9uKHBsYXllcil7XG4gICAgICAgIGNvbnN0IHJvd3MgPSBwbGF5ZXIuYm9hcmRET00uY2hpbGRyZW47XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHJvd3NbaV07XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVzID0gcm93LmNoaWxkcmVuO1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPDEwOyBqKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IHNxdWFyZXNbal07XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgJHtwbGF5ZXIuZ2FtZWJvYXJkLmlzVGhpc0FsbG93ZWRQbGFjZW1lbnQoW2ksal0pfWApXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQuaXNUaGlzQWxsb3dlZFBsYWNlbWVudChbaSxqXSkpe1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIG9uZHJhZ292ZXJIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgZHJhZ292ZXIgYWxsb3dlZCBvbiBbJHtpfSwgJHtqfV1gKVxuICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBvbmRyYWdvdmVySGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYGRyYWdvdmVyIG5vdCBhbGxvd2VkIG9uIFske2l9LCAke2p9XWApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVEcm9wQW5kRHJhZ1N0YXJ0SGFuZGxlciA9IGZ1bmN0aW9uKHBsYXllckJvYXJkKXtcbiAgICAgICAgZm9yIChsZXQgcm93IG9mIHBsYXllckJvYXJkLmNoaWxkcmVuKXtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCBvZiByb3cuY2hpbGRyZW4pe1xuICAgICAgICAgICAgICAgIGNvbC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBkcm9wSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgY29sLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZ3N0YXJ0SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvbmRyYWdvdmVySGFuZGxlciA9IGZ1bmN0aW9uKGV2KXtcbiAgICAgICAgY29uc29sZS5sb2coXCJkcmFnb3ZlciBkZXRlY3RlZCFcIilcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBkcm9wSGFuZGxlciA9IGZ1bmN0aW9uKGV2KXtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgcm93ID0gTnVtYmVyKGV2LnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcInJvd1wiKSk7XG4gICAgICAgIGNvbnN0IGNvbCA9IE51bWJlcihldi50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY29sXCIpKTtcbiAgICAgICAgbGV0IG5ld1N0YXJ0Um93ID0gcm93O1xuICAgICAgICBsZXQgb2xkU3RhcnRSb3cgPSBOdW1iZXIoZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJzdGFydFJvd1wiKSk7XG4gICAgICAgIGxldCBuZXdTdGFydENvbCA9IGNvbDtcbiAgICAgICAgbGV0IG9sZFN0YXJ0Q29sID0gTnVtYmVyKGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwic3RhcnRDb2xcIikpO1xuICAgICAgICBjb25zdCBncmFiTG9jYXRpb24gPSBOdW1iZXIoZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJncmFiTG9jYXRpb25cIikpO1xuICAgICAgICBjb25zdCBpc0hvcml6b250YWwgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImlzSG9yaXpvbnRhbFwiKTtcbiAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCA9PSBcInRydWVcIil7XG4gICAgICAgICAgICBuZXdTdGFydENvbCAtPSBncmFiTG9jYXRpb247XG4gICAgICAgICAgICBvbGRTdGFydENvbCAtPSBncmFiTG9jYXRpb247XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIG5ld1N0YXJ0Um93IC09IGdyYWJMb2NhdGlvbjtcbiAgICAgICAgICAgIG9sZFN0YXJ0Um93IC09IGdyYWJMb2NhdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwbGF5ZXJOdW0gPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInBsYXllcm51bVwiKTtcbiAgICAgICAgbGV0IHBsYXllcjtcbiAgICAgICAgaWYgKHBsYXllck51bSA9PTEpe1xuICAgICAgICAgICAgcGxheWVyID0gcGxheWVycy5wbGF5ZXIxO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBwbGF5ZXIgPSBwbGF5ZXJzLnBsYXllcjI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IE51bWJlcihldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInNoaXBMZW5ndGhcIikpO1xuICAgICAgICAvLyBjaGFuZ2UgdGhlIGdhbWVib2FyZCBkYXRhXG4gICAgICAgIHBsYXllci5nYW1lYm9hcmQubW92ZVNoaXAocGxheWVyLmdhbWVib2FyZC5nZXRTaGlwRnJvbUNvb3Jkcyhbb2xkU3RhcnRSb3csb2xkU3RhcnRDb2xdKSxcbiAgICAgICAgW25ld1N0YXJ0Um93LG5ld1N0YXJ0Q29sXSwgc2hpcExlbmd0aCwgaXNIb3Jpem9udGFsKTtcbiAgICAgICAgLy8gcmVuZGVyIGNoYW5nZXMgYW5kIGFsc28gbWFuYWdlcyBkcmFnZ2FibGVcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJNb3ZlU2hpcChbb2xkU3RhcnRSb3csb2xkU3RhcnRDb2xdLFxuICAgICAgICBbbmV3U3RhcnRSb3csbmV3U3RhcnRDb2xdLCBzaGlwTGVuZ3RoLCBpc0hvcml6b250YWwsIHBsYXllci5ib2FyZERPTSk7XG4gICAgfVxuICAgIC8vIEVORCBPRiBDT0RFIFJFTEFURUQgVE8gU1RBR0lOR1xuXG4gICAgY29uc3Qgc2hvcnRTbGVlcCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpO1xuICAgIH1cblxuXG4gICAgLy8gRFJJVkVSIENPREVcbiAgICBpbml0R2FtZSgpO1xuXG4gICAgcmV0dXJue1xuICAgICAgICBwbGF5ZXJzLFxuICAgIH1cbn0oKTtcblxuZXhwb3J0IHtHYW1lTWFuYWdlcn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=