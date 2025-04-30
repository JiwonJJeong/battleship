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
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --content-color: #D6FFF6;
    --button-clicked-color: #c3ecc3;
    --bg-color: rgb(255, 255, 240);
    --accent-color: #4DCCBD;
    --attacked-color: #ffc2c2; /*red*/
    --attacked-and-hit-color: #bffdc2; /*green*/
    --ship-color: #b3c7ff; /*blue*/
    --board-background-color: #525252;
    --board-grid-color: rgb(0, 0, 0);
    --dialog-background-color: rgb(255, 198, 255);
    font-family:Arial, Helvetica, sans-serif;
}

h1,h2,h3,p,button{
    margin:0;
    padding:0;
}

body{
    background-color: var(--bg-color);
    display:flex;
    justify-content:center;
    align-items:start;
    height: 80vh;
}

.pregame.container{
    margin-top: 30vh;

    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    .title{
        font-weight: bolder;
        font-size: 500;
    }

    .button.container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: min-content;
        gap: 5px;

        button.single{
            grid-column: 1 / 2;
            grid-row: 1/2;
        }

        button.double{
            grid-column: 2 / 3;
            grid-row: 1/2;
        }
    }

    form{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 3px;

        .input.container{
            display:flex;
            flex-direction: row;
            gap: 3px;

            input{
                padding: 12px 20px;
                border: 2px solid var(--board-background-color);
                border-radius: 24px;
            }
        }

        button{
            width: max-content;
            align-self: center;
        }
    }
}

button{
    background-color: var(--content-color);
    padding: 12px 28px;
    border: 2px solid var(--accent-color);
    color: black;
    border-radius: 2px;
}

button:hover{
    background-color: var(--accent-color);
    transition-duration: 200ms;
    color: white;
}

button:active{
    border: 2px solid var(--content-color);
    transition-duration: 1ms;
}

.game.container{
    margin-top: 15vh;

    display:grid;
    grid-template-rows: max-content 1fr;
    grid-template-columns: 1fr 1fr;
    width: min-content; /* Need to do this to keep board symmetric but still expanded for long names*/
    gap: 12px 36px;
    align-items: start;

    /* grid area is r / c / r / c */
    .ui.container{
        grid-area: 1 / 1 / 2 / 3;
        justify-self:center;
    }

    .board-and-header.container{
        width:fit-content;
        display:flex;
        flex-direction:column;
        gap: 12px;
        justify-content: center;
        align-items: center;

        .board.header{
            word-wrap: break-word;
            margin-top: 24px;
            height: 48px;
            vertical-align:middle;
        }

        .button.container{
            width: min-content;
            justify-self: center;
            display:flex;
            flex-direction: column;
            gap: 3px;
        }

        button{
            width: 163px;
        }
    }

    .board-and-header.container.player-1{
        grid-area: 2 / 1 / 3 / 2;
        justify-self: end;
    }

    .board-and-header.container.player-2{
        grid-area: 2 / 2 / 3 / 3;
        justify-self: start;
    }

    h2{
        text-align: center;
        text-wrap: wrap;
    }

    .hidden.samples{
        grid-area: 3 / 1 / 4 / 3;
    }

    .end.container{
        grid-column: 1/3;

        display:flex;
        flex-direction:column;
        text-align: center;
        align-items:center;
        gap: 12px;

        button{
            width: 60%;
        }
    }
}

.board.container{
    display: flex;
    flex-direction: column;
    gap: 1px;
    width: min-content;
    background-color: var(--board-grid-color);

    > div{
        display: flex;
        flex-direction: row;
        gap: 1px;

        div{
            aspect-ratio: 1/1;
            height: 20px;
            background-color:var(--board-background-color);
        }

        .ship.attacked{
            background-color: var(--attacked-and-hit-color);
        }

        .attacked{
            background-color: var(--attacked-color);
        }
    }
}

.board.container.visible{
    .ship{
        background-color: var(--ship-color);
    }
}

/* style ships off board during staging */
.hidden.samples{
    width:0px;
    > div{
        display: flex;
        gap: 3px;
        flex-direction: column;

        > div{
            background-color: var(--board-grid-color);
            width: min-content;
            display: flex;
            flex-direction: row;
            gap: 1px;
        
            div{
                aspect-ratio: 1/1;
                height: 20px;
                background-color:var(--ship-color);
            }
        }
    }

    .vertical > div{
        flex-direction: column;
    }
}

.hidden.samples{
    transform: translate(-999px, 0px);
}

/* style dialog */
::backdrop{
    background-color: var(--dialog-background-color);
}

dialog{
    text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --content-color: #D6FFF6;\n    --button-clicked-color: #c3ecc3;\n    --bg-color: rgb(255, 255, 240);\n    --accent-color: #4DCCBD;\n    --attacked-color: #ffc2c2; /*red*/\n    --attacked-and-hit-color: #bffdc2; /*green*/\n    --ship-color: #b3c7ff; /*blue*/\n    --board-background-color: #525252;\n    --board-grid-color: rgb(0, 0, 0);\n    --dialog-background-color: rgb(255, 198, 255);\n    font-family:Arial, Helvetica, sans-serif;\n}\n\nh1,h2,h3,p,button{\n    margin:0;\n    padding:0;\n}\n\nbody{\n    background-color: var(--bg-color);\n    display:flex;\n    justify-content:center;\n    align-items:start;\n    height: 80vh;\n}\n\n.pregame.container{\n    margin-top: 30vh;\n\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n\n    .title{\n        font-weight: bolder;\n        font-size: 500;\n    }\n\n    .button.container{\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-auto-rows: min-content;\n        gap: 5px;\n\n        button.single{\n            grid-column: 1 / 2;\n            grid-row: 1/2;\n        }\n\n        button.double{\n            grid-column: 2 / 3;\n            grid-row: 1/2;\n        }\n    }\n\n    form{\n        margin-top: 20px;\n        display: flex;\n        flex-direction: column;\n        gap: 3px;\n\n        .input.container{\n            display:flex;\n            flex-direction: row;\n            gap: 3px;\n\n            input{\n                padding: 12px 20px;\n                border: 2px solid var(--board-background-color);\n                border-radius: 24px;\n            }\n        }\n\n        button{\n            width: max-content;\n            align-self: center;\n        }\n    }\n}\n\nbutton{\n    background-color: var(--content-color);\n    padding: 12px 28px;\n    border: 2px solid var(--accent-color);\n    color: black;\n    border-radius: 2px;\n}\n\nbutton:hover{\n    background-color: var(--accent-color);\n    transition-duration: 200ms;\n    color: white;\n}\n\nbutton:active{\n    border: 2px solid var(--content-color);\n    transition-duration: 1ms;\n}\n\n.game.container{\n    margin-top: 15vh;\n\n    display:grid;\n    grid-template-rows: max-content 1fr;\n    grid-template-columns: 1fr 1fr;\n    width: min-content; /* Need to do this to keep board symmetric but still expanded for long names*/\n    gap: 12px 36px;\n    align-items: start;\n\n    /* grid area is r / c / r / c */\n    .ui.container{\n        grid-area: 1 / 1 / 2 / 3;\n        justify-self:center;\n    }\n\n    .board-and-header.container{\n        width:fit-content;\n        display:flex;\n        flex-direction:column;\n        gap: 12px;\n        justify-content: center;\n        align-items: center;\n\n        .board.header{\n            word-wrap: break-word;\n            margin-top: 24px;\n            height: 48px;\n            vertical-align:middle;\n        }\n\n        .button.container{\n            width: min-content;\n            justify-self: center;\n            display:flex;\n            flex-direction: column;\n            gap: 3px;\n        }\n\n        button{\n            width: 163px;\n        }\n    }\n\n    .board-and-header.container.player-1{\n        grid-area: 2 / 1 / 3 / 2;\n        justify-self: end;\n    }\n\n    .board-and-header.container.player-2{\n        grid-area: 2 / 2 / 3 / 3;\n        justify-self: start;\n    }\n\n    h2{\n        text-align: center;\n        text-wrap: wrap;\n    }\n\n    .hidden.samples{\n        grid-area: 3 / 1 / 4 / 3;\n    }\n\n    .end.container{\n        grid-column: 1/3;\n\n        display:flex;\n        flex-direction:column;\n        text-align: center;\n        align-items:center;\n        gap: 12px;\n\n        button{\n            width: 60%;\n        }\n    }\n}\n\n.board.container{\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    width: min-content;\n    background-color: var(--board-grid-color);\n\n    > div{\n        display: flex;\n        flex-direction: row;\n        gap: 1px;\n\n        div{\n            aspect-ratio: 1/1;\n            height: 20px;\n            background-color:var(--board-background-color);\n        }\n\n        .ship.attacked{\n            background-color: var(--attacked-and-hit-color);\n        }\n\n        .attacked{\n            background-color: var(--attacked-color);\n        }\n    }\n}\n\n.board.container.visible{\n    .ship{\n        background-color: var(--ship-color);\n    }\n}\n\n/* style ships off board during staging */\n.hidden.samples{\n    width:0px;\n    > div{\n        display: flex;\n        gap: 3px;\n        flex-direction: column;\n\n        > div{\n            background-color: var(--board-grid-color);\n            width: min-content;\n            display: flex;\n            flex-direction: row;\n            gap: 1px;\n        \n            div{\n                aspect-ratio: 1/1;\n                height: 20px;\n                background-color:var(--ship-color);\n            }\n        }\n    }\n\n    .vertical > div{\n        flex-direction: column;\n    }\n}\n\n.hidden.samples{\n    transform: translate(-999px, 0px);\n}\n\n/* style dialog */\n::backdrop{\n    background-color: var(--dialog-background-color);\n}\n\ndialog{\n    text-align: center;\n}"],"sourceRoot":""}]);
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
        body.removeChild(body.querySelector(".pregame.container"));
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
     
    const renderTurnCounter = function(turnNum){
        const header = document.querySelector(".ui.container .turn.text");
        header.textContent = `Turn ${turnNum}`;
    }

    // render ending game (playerName has won)
    const renderEndGame = function(winnerName){
        const winnerTextContainer = createElement("div", "end container");
        const winnerText = createElement("h1", "winner text");
        winnerText.textContent = `Congrats! ${winnerName} won.`;;
        const playAgainButton = createElement("button", "reset button");
        playAgainButton.textContent = "Play Again?";
        winnerTextContainer.append(winnerText, playAgainButton);
        const gameContainer = document.querySelector(".game.container");
        gameContainer.append(winnerTextContainer);
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

    const removeEndGameContainer = function(){
        const endGameContainer = document.querySelector(".end.container");
        endGameContainer.parentNode.removeChild(endGameContainer);
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
    // if an existing form is there, only change inputs
    const renderPlayerNameForm = function(isSinglePlayer){
        const newInputContainer = createElement("div","input container");
        if (isSinglePlayer){
            newInputContainer.append(buildNameInput("What is your name?"));
        } else{
            newInputContainer.append(buildNameInput("Enter player 1 name..."));
            newInputContainer.append(buildNameInput("Enter player 2 name..."));
        }
        let formContainer = document.querySelector(".form.container");
        if (formContainer == null){
            formContainer = createElement("form","form container");
            formContainer.append(newInputContainer);
            const pregameContainer = document.querySelector(".pregame.container");
            pregameContainer.append(formContainer);
        } else{
            // just replace input container if form already exists
            const oldInputContainer = formContainer.querySelector(".input.container");
            formContainer.replaceChild(newInputContainer, oldInputContainer);
        }
    }

    // if existing button exists, replace it
    const renderFormButton = function(){
        const formContainer = document.querySelector(".form.container");
        const oldButton = document.querySelector(".form.submit");
        if (oldButton != null){
            formContainer.removeChild(oldButton);
        }
        const button = createElement("button", "form submit");
        button.textContent = "Let's Play!";
        formContainer.append(button);
    }

    const buildNameInput = function(placeholderString){
        const nameInput = createElement("input", "name input");
        nameInput.setAttribute("type", "text");
        nameInput.setAttribute("placeholder",placeholderString);
        nameInput.setAttribute("maxlength", 20);
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
        renderTurnCounter,
        removeEndGameContainer,
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
        turnCounter++;
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
        } else if (isSinglePlayer){
            await emulateComputerTurn();
            _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.renderTurnCounter(turnCounter);
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

    let turnCounter;
    const initPlay = function(){
        turnCounter = 1;
        // assign event listener for attacks
        // later make first turn random or chosen
        players.player2.boardDOM.classList.add("visible");
        passTurnTo(1);
        if (isSinglePlayer){
            _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.renderTurnCounter(turnCounter);
        }
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
        //const header = document.querySelector(".ui.container");
        //header.addEventListener("click", () => endGame(1))
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
        replayButton.addEventListener("click", () => {
            _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.removeEndGameContainer();
            enterGameStaging();
        }
        );
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
            _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.revealDialogWithText(`Let ${players.player2.name} set up.`);
            activateStaging(players.player2);
        } else if (!isSinglePlayer){
            initPlay();
            _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.revealDialogWithText(`${players.player1.name}'s turn first.`);
        } else{
            // this case is when it is a single player game
            randomizeBoard(players.player2);
            initPlay();
            _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.revealDialogWithText(`Your turn first.`);
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
        _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.renderFormButton(isSinglePlayer);
        activateFormButtons(isSinglePlayer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFhO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEscURBQWE7QUFDckIsUUFBUSxxREFBYTtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uLi9saW5rZWQtbGlzdHMvbGlua2VkbGlzdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTGlua2VkTGlzdCByZXByZXNlbnRzIGZ1bGwgbGlzdFxuY29uc3QgTGlua2VkTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGhlYWROb2RlID0gbnVsbDtcbiAgY29uc3QgaGVhZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gaGVhZE5vZGU7XG4gIH07XG5cbiAgY29uc3QgdGFpbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbm9kZSA9IGhlYWROb2RlO1xuICAgIHdoaWxlIChub2RlLm5leHROb2RlICE9IG51bGwpIHtcbiAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICBjb25zdCBhcHBlbmQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoaGVhZE5vZGUgPT0gbnVsbCkge1xuICAgICAgaGVhZE5vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhaWwoKS5uZXh0Tm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcHJlcGVuZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmIChoZWFkTm9kZSA9PSBudWxsKSB7XG4gICAgICBoZWFkTm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZE5vZGUgPSBuZXcgTm9kZSh2YWx1ZSwgaGVhZE5vZGUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzaXplID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgaWYgKGhlYWROb2RlID09IG51bGwpIHtcbiAgICAgIHJldHVybiBjb3VudDtcbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQrKztcbiAgICB9XG4gICAgbGV0IG5vZGUgPSBoZWFkTm9kZTtcbiAgICB3aGlsZSAobm9kZS5uZXh0Tm9kZSAhPSBudWxsKSB7XG4gICAgICBub2RlID0gbm9kZS5uZXh0Tm9kZTtcbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICAgIHJldHVybiBjb3VudDtcbiAgfTtcblxuICAvLyBjb3VudCBpbmRleCBmcm9tIDFcbiAgY29uc3QgYXQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPD0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgd2hpbGUgKGluZGV4ID4gMSkge1xuICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgICBpbmRleC0tO1xuICAgICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgY29uc3QgcG9wID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBzZWNvbmRUb0xhc3RJbmRleCA9IHNpemUoKSAtIDE7XG4gICAgbGV0IHNlY29uZFRvTGFzdE5vZGUgPSBhdChzZWNvbmRUb0xhc3RJbmRleCk7XG4gICAgc2Vjb25kVG9MYXN0Tm9kZS5uZXh0Tm9kZSA9IG51bGw7XG4gIH07XG5cbiAgLy8gcmV0dXJucyB0cnVlIGlmIHZhbHVlIHBhc3NlZCBpcyBpbiBsaXN0LCBlbHNlIHJldHVybnMgZmFsc2VcbiAgY29uc3QgY29udGFpbnMgPSBmdW5jdGlvbiAodmFsdWUsIGNvbXBhcmVLZXkgPSBcInZhbHVlXCIpIHtcbiAgICBsZXQgbm9kZSA9IGhlYWROb2RlO1xuICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgIGlmIChub2RlLnZhbHVlID09IHZhbHVlIHx8IG5vZGUudmFsdWVbY29tcGFyZUtleV0gPT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0Tm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8vIHJldHVybnMgaW5kZXggb2Ygbm9kZSBjb250YWluaW5nIHZhbHVlLCBvciBudWxsIGlmIG5vdCBmb3VuZFxuICBjb25zdCBmaW5kID0gZnVuY3Rpb24gKHZhbHVlLCBjb21wYXJlS2V5ID0gXCJ2YWx1ZVwiKSB7XG4gICAgbGV0IG5vZGUgPSBoZWFkTm9kZTtcbiAgICBsZXQgaW5kZXggPSAxO1xuICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgIGlmIChub2RlLnZhbHVlID09IHZhbHVlIHx8IG5vZGUudmFsdWVbY29tcGFyZUtleV0gPT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIC8vIHJldHVybnMgbm9kZSBjb250YWluaW5nIHZhbHVlLCBvciBudWxsIGlmIG5vdCBmb3VuZFxuICAvLyBidXQgY2hlY2tzIGZvciBub2RlLmNhbGxiYWNrZnVuY3Rpb24oKSBiZWluZyBlcXVhbCB0byB2YWx1ZVxuICBjb25zdCBmaW5kQ2FsbGJhY2sgPSBmdW5jdGlvbiAodmFsdWUsIGNhbGxiYWNrRnVuY3Rpb24pIHtcbiAgICBsZXQgbm9kZSA9IGhlYWROb2RlO1xuICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgIGlmIChub2RlLnZhbHVlW2NhbGxiYWNrRnVuY3Rpb25dKCkgPT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0Tm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07ICBcblxuICAvLyBzYW1lIGFzIGZpbmQsIGJ1dCByZXR1cm5zIHRoZSBub2RlLCBub3QgaW5kZXhcbiAgY29uc3QgZmluZE5vZGUgPSBmdW5jdGlvbiAodmFsdWUsIGNvbXBhcmVLZXkgPSBcInZhbHVlXCIpIHtcbiAgICBsZXQgbm9kZSA9IGhlYWROb2RlO1xuICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgIGlmIChub2RlLnZhbHVlID09IHZhbHVlIHx8IG5vZGUudmFsdWVbY29tcGFyZUtleV0gPT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0Tm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgLy8gcmV0dXJucyBzdHJpbmcgb2Ygbm9kZSB2YWx1ZXMgaW4gZm9ybWF0IFwiKHZhbHVlKSAtPiAodmFsdWUpIC0+IG51bGxcIlxuICBjb25zdCB0b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaGVhZE5vZGUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGxldCBzdHJpbmcgPSBgKCAke2hlYWROb2RlLnZhbHVlfSApYDtcbiAgICBsZXQgbm9kZSA9IGhlYWROb2RlLm5leHROb2RlO1xuICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgIHN0cmluZyArPSBgIC0+ICggJHtub2RlLnZhbHVlfSApYDtcbiAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgIH1cbiAgICBzdHJpbmcgKz0gXCIgLT4gbnVsbFwiO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG5cbiAgLy8gaW5zZXJ0cyBuZXcgTm9kZSB3aXRoIHZhbHVlIGF0IGluZGV4IChjb3VudGluZyBmcm9tIDEpXG4gIGNvbnN0IGluc2VydEF0ID0gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgIGNvbnN0IHByaW9ySW5kZXggPSBpbmRleCAtIDE7XG4gICAgaWYgKHByaW9ySW5kZXggPT0gMCkge1xuICAgICAgcHJlcGVuZCh2YWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBwcmlvck5vZGUgPSBhdChwcmlvckluZGV4KTtcbiAgICBpZiAocHJpb3JOb2RlID09IG51bGwpIHtcbiAgICAgIGVycm9yLmxvZyhgJHtpbmRleH0gaXMgbm90IHZhbGlkIGluZGV4LmApO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuZXh0Tm9kZSA9IHByaW9yTm9kZS5uZXh0Tm9kZTtcbiAgICAgIHByaW9yTm9kZS5uZXh0Tm9kZSA9IG5ldyBOb2RlKHZhbHVlLCBuZXh0Tm9kZSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIHJlbW92ZXMgbm9kZSBhdCBpbmRleCAoY291bnRpbmcgZnJvbSAxKVxuICBjb25zdCByZW1vdmVBdCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIGNvbnN0IHByaW9ySW5kZXggPSBpbmRleCAtIDE7XG4gICAgaWYgKHByaW9ySW5kZXggPT0gMCkge1xuICAgICAgbGV0IG5vZGVUb1JlbW92ZSA9IGhlYWROb2RlO1xuICAgICAgaGVhZE5vZGUgPSBoZWFkTm9kZS5uZXh0Tm9kZTtcbiAgICAgIG5vZGVUb1JlbW92ZSA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBwcmlvck5vZGUgPSBhdChwcmlvckluZGV4KTtcbiAgICBsZXQgbm9kZVRvUmVtb3ZlID0gcHJpb3JOb2RlLm5leHROb2RlO1xuICAgIGNvbnN0IG5leHROb2RlID0gcHJpb3JOb2RlLm5leHROb2RlLm5leHROb2RlO1xuICAgIHByaW9yTm9kZS5uZXh0Tm9kZSA9IG5leHROb2RlO1xuICAgIG5vZGVUb1JlbW92ZSA9IG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBoZWFkLFxuICAgIHRhaWwsXG4gICAgYXBwZW5kLFxuICAgIHByZXBlbmQsXG4gICAgc2l6ZSxcbiAgICBhdCxcbiAgICBwb3AsXG4gICAgY29udGFpbnMsXG4gICAgZmluZCxcbiAgICB0b1N0cmluZyxcbiAgICBpbnNlcnRBdCxcbiAgICByZW1vdmVBdCxcbiAgICBmaW5kTm9kZSxcbiAgICBmaW5kQ2FsbGJhY2ssXG4gIH07XG59O1xuXG4vLyBOb2RlIGNvbnRhaW5zIHZhbHVlIHByb3BlcnR5LCBuZXh0Tm9kZVxuXG5jb25zdCBOb2RlID0gZnVuY3Rpb24gKHZhbHVlID0gbnVsbCwgbmV4dE5vZGUgPSBudWxsKSB7XG4gIHJldHVybiB7XG4gICAgdmFsdWUsXG4gICAgbmV4dE5vZGUsXG4gIH07XG59O1xuXG5leHBvcnQgeyBMaW5rZWRMaXN0LCBOb2RlIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3R7XG4gICAgLS1jb250ZW50LWNvbG9yOiAjRDZGRkY2O1xuICAgIC0tYnV0dG9uLWNsaWNrZWQtY29sb3I6ICNjM2VjYzM7XG4gICAgLS1iZy1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNDApO1xuICAgIC0tYWNjZW50LWNvbG9yOiAjNERDQ0JEO1xuICAgIC0tYXR0YWNrZWQtY29sb3I6ICNmZmMyYzI7IC8qcmVkKi9cbiAgICAtLWF0dGFja2VkLWFuZC1oaXQtY29sb3I6ICNiZmZkYzI7IC8qZ3JlZW4qL1xuICAgIC0tc2hpcC1jb2xvcjogI2IzYzdmZjsgLypibHVlKi9cbiAgICAtLWJvYXJkLWJhY2tncm91bmQtY29sb3I6ICM1MjUyNTI7XG4gICAgLS1ib2FyZC1ncmlkLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgLS1kaWFsb2ctYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTk4LCAyNTUpO1xuICAgIGZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbmgxLGgyLGgzLHAsYnV0dG9ue1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6MDtcbn1cblxuYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6c3RhcnQ7XG4gICAgaGVpZ2h0OiA4MHZoO1xufVxuXG4ucHJlZ2FtZS5jb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogMzB2aDtcblxuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuXG4gICAgLnRpdGxle1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICBmb250LXNpemU6IDUwMDtcbiAgICB9XG5cbiAgICAuYnV0dG9uLmNvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XG4gICAgICAgIGdhcDogNXB4O1xuXG4gICAgICAgIGJ1dHRvbi5zaW5nbGV7XG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgICAgICAgICBncmlkLXJvdzogMS8yO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uLmRvdWJsZXtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICAgICAgICAgIGdyaWQtcm93OiAxLzI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3Jte1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDNweDtcblxuICAgICAgICAuaW5wdXQuY29udGFpbmVye1xuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGdhcDogM3B4O1xuXG4gICAgICAgICAgICBpbnB1dHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9hcmQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtY29sb3IpO1xuICAgIHBhZGRpbmc6IDEycHggMjhweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbmJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuYnV0dG9uOmFjdGl2ZXtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb250ZW50LWNvbG9yKTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxbXM7XG59XG5cbi5nYW1lLmNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAxNXZoO1xuXG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7IC8qIE5lZWQgdG8gZG8gdGhpcyB0byBrZWVwIGJvYXJkIHN5bW1ldHJpYyBidXQgc3RpbGwgZXhwYW5kZWQgZm9yIGxvbmcgbmFtZXMqL1xuICAgIGdhcDogMTJweCAzNnB4O1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcblxuICAgIC8qIGdyaWQgYXJlYSBpcyByIC8gYyAvIHIgLyBjICovXG4gICAgLnVpLmNvbnRhaW5lcntcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xuICAgICAgICBqdXN0aWZ5LXNlbGY6Y2VudGVyO1xuICAgIH1cblxuICAgIC5ib2FyZC1hbmQtaGVhZGVyLmNvbnRhaW5lcntcbiAgICAgICAgd2lkdGg6Zml0LWNvbnRlbnQ7XG4gICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgICAgICBnYXA6IDEycHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5ib2FyZC5oZWFkZXJ7XG4gICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbi5jb250YWluZXJ7XG4gICAgICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBnYXA6IDNweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxNjNweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ib2FyZC1hbmQtaGVhZGVyLmNvbnRhaW5lci5wbGF5ZXItMXtcbiAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICB9XG5cbiAgICAuYm9hcmQtYW5kLWhlYWRlci5jb250YWluZXIucGxheWVyLTJ7XG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcbiAgICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgICB9XG5cbiAgICBoMntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LXdyYXA6IHdyYXA7XG4gICAgfVxuXG4gICAgLmhpZGRlbi5zYW1wbGVze1xuICAgICAgICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDM7XG4gICAgfVxuXG4gICAgLmVuZC5jb250YWluZXJ7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XG5cbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgICAgICBnYXA6IDEycHg7XG5cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJvYXJkLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcHg7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWdyaWQtY29sb3IpO1xuXG4gICAgPiBkaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGdhcDogMXB4O1xuXG4gICAgICAgIGRpdntcbiAgICAgICAgICAgIGFzcGVjdC1yYXRpbzogMS8xO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ib2FyZC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaGlwLmF0dGFja2Vke1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXR0YWNrZWQtYW5kLWhpdC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuYXR0YWNrZWR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hdHRhY2tlZC1jb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ib2FyZC5jb250YWluZXIudmlzaWJsZXtcbiAgICAuc2hpcHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XG4gICAgfVxufVxuXG4vKiBzdHlsZSBzaGlwcyBvZmYgYm9hcmQgZHVyaW5nIHN0YWdpbmcgKi9cbi5oaWRkZW4uc2FtcGxlc3tcbiAgICB3aWR0aDowcHg7XG4gICAgPiBkaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogM3B4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgID4gZGl2e1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtZ3JpZC1jb2xvcik7XG4gICAgICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGdhcDogMXB4O1xuICAgICAgICBcbiAgICAgICAgICAgIGRpdntcbiAgICAgICAgICAgICAgICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1zaGlwLWNvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC52ZXJ0aWNhbCA+IGRpdntcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG59XG5cbi5oaWRkZW4uc2FtcGxlc3tcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTk5cHgsIDBweCk7XG59XG5cbi8qIHN0eWxlIGRpYWxvZyAqL1xuOjpiYWNrZHJvcHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaWFsb2ctYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbmRpYWxvZ3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2Qix5QkFBeUIsRUFBRSxNQUFNO0lBQ2pDLGlDQUFpQyxFQUFFLFFBQVE7SUFDM0MscUJBQXFCLEVBQUUsT0FBTztJQUM5QixpQ0FBaUM7SUFDakMsZ0NBQWdDO0lBQ2hDLDZDQUE2QztJQUM3Qyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7O0lBRWhCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7O0lBRVQ7UUFDSSxtQkFBbUI7UUFDbkIsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsMkJBQTJCO1FBQzNCLFFBQVE7O1FBRVI7WUFDSSxrQkFBa0I7WUFDbEIsYUFBYTtRQUNqQjs7UUFFQTtZQUNJLGtCQUFrQjtZQUNsQixhQUFhO1FBQ2pCO0lBQ0o7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixRQUFROztRQUVSO1lBQ0ksWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixRQUFROztZQUVSO2dCQUNJLGtCQUFrQjtnQkFDbEIsK0NBQStDO2dCQUMvQyxtQkFBbUI7WUFDdkI7UUFDSjs7UUFFQTtZQUNJLGtCQUFrQjtZQUNsQixrQkFBa0I7UUFDdEI7SUFDSjtBQUNKOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLGtCQUFrQjtJQUNsQixxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQywwQkFBMEI7SUFDMUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0Qyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQkFBZ0I7O0lBRWhCLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsOEJBQThCO0lBQzlCLGtCQUFrQixFQUFFLDZFQUE2RTtJQUNqRyxjQUFjO0lBQ2Qsa0JBQWtCOztJQUVsQiwrQkFBK0I7SUFDL0I7UUFDSSx3QkFBd0I7UUFDeEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixxQkFBcUI7UUFDckIsU0FBUztRQUNULHVCQUF1QjtRQUN2QixtQkFBbUI7O1FBRW5CO1lBQ0kscUJBQXFCO1lBQ3JCLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1oscUJBQXFCO1FBQ3pCOztRQUVBO1lBQ0ksa0JBQWtCO1lBQ2xCLG9CQUFvQjtZQUNwQixZQUFZO1lBQ1osc0JBQXNCO1lBQ3RCLFFBQVE7UUFDWjs7UUFFQTtZQUNJLFlBQVk7UUFDaEI7SUFDSjs7SUFFQTtRQUNJLHdCQUF3QjtRQUN4QixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSx3QkFBd0I7UUFDeEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSx3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSxnQkFBZ0I7O1FBRWhCLFlBQVk7UUFDWixxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixTQUFTOztRQUVUO1lBQ0ksVUFBVTtRQUNkO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQix5Q0FBeUM7O0lBRXpDO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixRQUFROztRQUVSO1lBQ0ksaUJBQWlCO1lBQ2pCLFlBQVk7WUFDWiw4Q0FBOEM7UUFDbEQ7O1FBRUE7WUFDSSwrQ0FBK0M7UUFDbkQ7O1FBRUE7WUFDSSx1Q0FBdUM7UUFDM0M7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxtQ0FBbUM7SUFDdkM7QUFDSjs7QUFFQSx5Q0FBeUM7QUFDekM7SUFDSSxTQUFTO0lBQ1Q7UUFDSSxhQUFhO1FBQ2IsUUFBUTtRQUNSLHNCQUFzQjs7UUFFdEI7WUFDSSx5Q0FBeUM7WUFDekMsa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsUUFBUTs7WUFFUjtnQkFDSSxpQkFBaUI7Z0JBQ2pCLFlBQVk7Z0JBQ1osa0NBQWtDO1lBQ3RDO1FBQ0o7SUFDSjs7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQjtBQUNKOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gICAgLS1jb250ZW50LWNvbG9yOiAjRDZGRkY2O1xcbiAgICAtLWJ1dHRvbi1jbGlja2VkLWNvbG9yOiAjYzNlY2MzO1xcbiAgICAtLWJnLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI0MCk7XFxuICAgIC0tYWNjZW50LWNvbG9yOiAjNERDQ0JEO1xcbiAgICAtLWF0dGFja2VkLWNvbG9yOiAjZmZjMmMyOyAvKnJlZCovXFxuICAgIC0tYXR0YWNrZWQtYW5kLWhpdC1jb2xvcjogI2JmZmRjMjsgLypncmVlbiovXFxuICAgIC0tc2hpcC1jb2xvcjogI2IzYzdmZjsgLypibHVlKi9cXG4gICAgLS1ib2FyZC1iYWNrZ3JvdW5kLWNvbG9yOiAjNTI1MjUyO1xcbiAgICAtLWJvYXJkLWdyaWQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgLS1kaWFsb2ctYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTk4LCAyNTUpO1xcbiAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMSxoMixoMyxwLGJ1dHRvbntcXG4gICAgbWFyZ2luOjA7XFxuICAgIHBhZGRpbmc6MDtcXG59XFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOnN0YXJ0O1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxufVxcblxcbi5wcmVnYW1lLmNvbnRhaW5lcntcXG4gICAgbWFyZ2luLXRvcDogMzB2aDtcXG5cXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEycHg7XFxuXFxuICAgIC50aXRsZXtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgICAgICBmb250LXNpemU6IDUwMDtcXG4gICAgfVxcblxcbiAgICAuYnV0dG9uLmNvbnRhaW5lcntcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgICAgICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XFxuICAgICAgICBnYXA6IDVweDtcXG5cXG4gICAgICAgIGJ1dHRvbi5zaW5nbGV7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAxLzI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBidXR0b24uZG91Ymxle1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgICAgICAgICBncmlkLXJvdzogMS8yO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGZvcm17XFxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDNweDtcXG5cXG4gICAgICAgIC5pbnB1dC5jb250YWluZXJ7XFxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICAgICAgZ2FwOiAzcHg7XFxuXFxuICAgICAgICAgICAgaW5wdXR7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9hcmQtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgcGFkZGluZzogMTJweCAyOHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5idXR0b246YWN0aXZle1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMW1zO1xcbn1cXG5cXG4uZ2FtZS5jb250YWluZXJ7XFxuICAgIG1hcmdpbi10b3A6IDE1dmg7XFxuXFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50OyAvKiBOZWVkIHRvIGRvIHRoaXMgdG8ga2VlcCBib2FyZCBzeW1tZXRyaWMgYnV0IHN0aWxsIGV4cGFuZGVkIGZvciBsb25nIG5hbWVzKi9cXG4gICAgZ2FwOiAxMnB4IDM2cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG5cXG4gICAgLyogZ3JpZCBhcmVhIGlzIHIgLyBjIC8gciAvIGMgKi9cXG4gICAgLnVpLmNvbnRhaW5lcntcXG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgICAgIGp1c3RpZnktc2VsZjpjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmJvYXJkLWFuZC1oZWFkZXIuY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxuICAgICAgICBkaXNwbGF5OmZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgICAgICBnYXA6IDEycHg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgICAuYm9hcmQuaGVhZGVye1xcbiAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuYnV0dG9uLmNvbnRhaW5lcntcXG4gICAgICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZ2FwOiAzcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBidXR0b257XFxuICAgICAgICAgICAgd2lkdGg6IDE2M3B4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5ib2FyZC1hbmQtaGVhZGVyLmNvbnRhaW5lci5wbGF5ZXItMXtcXG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICB9XFxuXFxuICAgIC5ib2FyZC1hbmQtaGVhZGVyLmNvbnRhaW5lci5wbGF5ZXItMntcXG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG4gICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIH1cXG5cXG4gICAgaDJ7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB0ZXh0LXdyYXA6IHdyYXA7XFxuICAgIH1cXG5cXG4gICAgLmhpZGRlbi5zYW1wbGVze1xcbiAgICAgICAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAzO1xcbiAgICB9XFxuXFxuICAgIC5lbmQuY29udGFpbmVye1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcXG5cXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgICAgIGdhcDogMTJweDtcXG5cXG4gICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5ib2FyZC5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXB4O1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWdyaWQtY29sb3IpO1xcblxcbiAgICA+IGRpdntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgZ2FwOiAxcHg7XFxuXFxuICAgICAgICBkaXZ7XFxuICAgICAgICAgICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tYm9hcmQtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2hpcC5hdHRhY2tlZHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hdHRhY2tlZC1hbmQtaGl0LWNvbG9yKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5hdHRhY2tlZHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hdHRhY2tlZC1jb2xvcik7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLmJvYXJkLmNvbnRhaW5lci52aXNpYmxle1xcbiAgICAuc2hpcHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xcbiAgICB9XFxufVxcblxcbi8qIHN0eWxlIHNoaXBzIG9mZiBib2FyZCBkdXJpbmcgc3RhZ2luZyAqL1xcbi5oaWRkZW4uc2FtcGxlc3tcXG4gICAgd2lkdGg6MHB4O1xcbiAgICA+IGRpdntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDNweDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgICAgICA+IGRpdntcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1ncmlkLWNvbG9yKTtcXG4gICAgICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgICAgIGdhcDogMXB4O1xcbiAgICAgICAgXFxuICAgICAgICAgICAgZGl2e1xcbiAgICAgICAgICAgICAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXNoaXAtY29sb3IpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAudmVydGljYWwgPiBkaXZ7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxufVxcblxcbi5oaWRkZW4uc2FtcGxlc3tcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTk5OXB4LCAwcHgpO1xcbn1cXG5cXG4vKiBzdHlsZSBkaWFsb2cgKi9cXG46OmJhY2tkcm9we1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaWFsb2ctYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbmRpYWxvZ3tcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtTaGlwfSBmcm9tIFwiLi9zaGlwLmpzXCI7XG5pbXBvcnQge0xpbmtlZExpc3R9IGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbGlua2VkLWxpc3RzL2xpbmtlZGxpc3QuanNcIlxuXG5jb25zdCBHYW1lYm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBib2FyZE1hcDtcbiAgbGV0IGF0dGFja01hcDtcbiAgLy8gbWFrZSBlYWNoIG1hcCBhbiBhcnJheSBvZiAxMCB3aXRoIGVhY2ggYXJyYXkgYmVpbmcgYW4gb2JqZWN0IChzaW1pbGFyIHRvIGhhc2ggbWFwKVxuICBjb25zdCBpbml0Qm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgYm9hcmRNYXAgPSBbe30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge31dO1xuICAgIGF0dGFja01hcCA9IFt7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fV07XG4gIH0oKTtcblxuICBjb25zdCBnZXRCb2FyZE1hcCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGJvYXJkTWFwO1xuICB9XG5cbiAgY29uc3QgZ2V0QXR0YWNrTWFwID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gYXR0YWNrTWFwO1xuICB9XG5cbiAgLy8gYmFzZWQgb24gdGhlIHdheSB3ZSBpbXBsZW1lbnRlZCxcbiAgLy8gdGhlIGZpcnN0IGluZGV4IGZvciBhcnJheSBpcyB0aGUgci12YWx1ZSBvciB0aGUgY29sdW1uIGluIGEgbWF0cml4L2dyaWRcbiAgLy8gdGhlIHNlY29uZCBpbmRleCBmb3Igb2JqZWN0IGtleSBpcyB0aGUgYy12YWx1ZSBvciB0aGUgcm93IGluIGEgbWF0cml4L2dyaWQgKGluY3JlYXNlcyBnb2luZyBkb3duKVxuICBsZXQgc2hpcExpc3QgPSBuZXcgTGlua2VkTGlzdCgpO1xuICAvLyB1c2UgcmVzdCBwYXJhbWV0ZXIgKC4uLikgdG8gYWNjZXB0IHZhcmlhYmxlIGFtb3VudCBvZiBjb29yZHNcbiAgY29uc3QgbmV3U2hpcCA9IGZ1bmN0aW9uICguLi5jb29yZHMpIHtcbiAgICAgIGNvbnN0IG5ld1NoaXAgPSBuZXcgU2hpcChjb29yZHMubGVuZ3RoKTtcbiAgICAgIGlmIChpc1NoaXBBdENvb3JkcyguLi5jb29yZHMpKXtcbiAgICAgICAgY29uc29sZS5sb2coYm9hcmRNYXApO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERvbid0IG92ZXJsYXAgc2hpcHMgYXQ6ICR7Y29vcmRzfWApO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgW3IsY10gb2YgY29vcmRzKXtcbiAgICAgICAgaWYgKGMgPCAxMCAmJiBjID49MCl7XG4gICAgICAgICAgYm9hcmRNYXBbcl1bY10gPSBuZXdTaGlwO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgY29uc29sZS5sb2coY29vcmRzKTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJhZCBjb2wgaW5wdXQgZm9yIG5ld1NoaXAoKTogJHtjb29yZHN9YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGFkZGluZyBuZXcgc2hpcCB0byBzaGlwIGxpbmtlZCBsaXN0XG4gICAgICBzaGlwTGlzdC5hcHBlbmQobmV3U2hpcCk7XG4gIH07XG5cbiAgY29uc3QgaXNTaGlwQXRDb29yZHMgPSBmdW5jdGlvbiguLi5jb29yZHMpe1xuICAgIGZvciAobGV0IFtyLGNdIG9mIGNvb3Jkcyl7XG4gICAgICBpZiAoYm9hcmRNYXBbcl0gIT09IHVuZGVmaW5lZCAmJiBib2FyZE1hcFtyXVtjXSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGdldFNoaXBGcm9tQ29vcmRzID0gZnVuY3Rpb24oW3IsY10pe1xuICAgIHJldHVybiBib2FyZE1hcFtyXVtjXTtcbiAgfVxuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSBmdW5jdGlvbihbcixjXSl7XG4gICAgaWYgKHdhc0F0dGFja2VkKFtyLGNdKSl7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBhdHRhY2sgcHJldmlvdXMgYXR0YWNrZWQgKCR7cn0sJHtjfSlgKTtcbiAgICB9XG4gICAgY29uc3Qgc2hpcCA9IGJvYXJkTWFwW3JdW2NdO1xuICAgIGlmICh0eXBlb2Yoc2hpcCkgPT0gXCJvYmplY3RcIil7XG4gICAgICBzaGlwLmhpdCgpO1xuICAgICAgYXR0YWNrTWFwW3JdW2NdPVwiaGl0XCI7XG4gICAgICByZXR1cm4gXCJoaXRcIjtcbiAgICB9IGVsc2V7XG4gICAgICBhdHRhY2tNYXBbcl1bY10gPSBcIm1pc3NcIjtcbiAgICAgIHJldHVybiBcIm1pc3NcIjtcbiAgICB9XG4gIH1cblxuICBjb25zdCB3YXNBdHRhY2tlZCA9IGZ1bmN0aW9uKFtyLGNdKXtcbiAgICByZXR1cm4gYXR0YWNrTWFwW3JdW2NdIHx8IGZhbHNlO1xuICB9XG5cbiAgY29uc3QgaXNBbGxTdW5rID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gKHNoaXBMaXN0LmZpbmRDYWxsYmFjayhmYWxzZSwgXCJpc1N1bmtcIikgPT0gbnVsbCk7XG4gIH1cblxuICBjb25zdCByZXNldEJvYXJkID0gZnVuY3Rpb24oKXtcbiAgICBib2FyZE1hcCA9IFt7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fV07XG4gICAgYXR0YWNrTWFwID0gW3t9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9XTtcbiAgICBhdHRhY2tDb3VudCA9IDA7XG4gIH1cblxuICAvLyBVU0VTIGFsbG93ZWQgcG9zaXRpb24gbWFwIGNyZWF0ZWQgd2l0aCBzcGVjaWZpYyBpbmZvIGFib3V0IHNoaXAgb3JpZW50YXRpb24gYW5kIGxlbmd0aFxuICBjb25zdCBpc1RoaXNBbGxvd2VkUGxhY2VtZW50ID0gZnVuY3Rpb24oW3IsY10pe1xuICAgIHJldHVybiBhbGxvd2VkUG9zaXRpb25NYXBbcl1bY107XG4gIH1cblxuICBsZXQgYWxsb3dlZFBvc2l0aW9uTWFwO1xuICAvLyB1c2VzIGFkamFjZW5jeSBtYXAgYW5kIHNoaXAgbGVuZ3RoIHRvIHNob3cgYWxsIHBvc2libGUgdG9wbGVmdCBwb3NpdGlvbnMgZm9yIHRoZSBzaGlwXG4gIC8vIHJlY2FsbCB0aGF0IGdyYWJMb2NhdGlvbiBzdGFydHMgYXQgMFxuICAvLyByZXR1cm5zIG51bWJlciBvZiB0cnVlcyAoYWxsb3dlZCBzcG90cylcbiAgY29uc3QgY3JlYXRlQWxsb3dlZFBvc2l0aW9uTWFwID0gZnVuY3Rpb24oc2hpcE9iamVjdCwgaXNIb3Jpem9udGFsLCBncmFiTG9jYXRpb24pe1xuICAgIGNvbnN0IGFkamFjZW5jeU1hcCA9IGNyZWF0ZUFkamFjZW5jeU1hcCgpO1xuICAgIGFsbG93ZWRQb3NpdGlvbk1hcCA9IFt7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fV07XG4gICAgY29uc3QgbGVuZ3RoID0gc2hpcE9iamVjdC5sZW5ndGg7XG4gICAgbGV0IHRydWVDb3VudCA9MDtcbiAgICBpZiAoaXNIb3Jpem9udGFsID09IFwidHJ1ZVwiKXtcbiAgICAgIGZvciAobGV0IHIgPSAwOyByPDEwOyByKyspe1xuICAgICAgICBmb3IgKGxldCBjPTA7IGM8MTA7IGMrKyl7XG4gICAgICAgICAgaWYgKGM+ICgxMC1sZW5ndGgrZ3JhYkxvY2F0aW9uKSB8fCBjPGdyYWJMb2NhdGlvbil7XG4gICAgICAgICAgICBhbGxvd2VkUG9zaXRpb25NYXBbcl1bY10gPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxsb3dlZFBvc2l0aW9uTWFwW3JdW2NdID0gaXNTaGlwRml0QWRqYWNlbmN5KFtyLGMtZ3JhYkxvY2F0aW9uXSwgc2hpcE9iamVjdCwgaXNIb3Jpem9udGFsLCBhZGphY2VuY3lNYXApO1xuICAgICAgICAgICAgaWYgKGFsbG93ZWRQb3NpdGlvbk1hcFtyXVtjXSA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgdHJ1ZUNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgfVxuICAgICB9IGVsc2V7XG4gICAgICBmb3IgKGxldCByID0gMDsgcjwxMDsgcisrKXtcbiAgICAgICAgZm9yIChsZXQgYz0wOyBjPDEwOyBjKyspe1xuICAgICAgICAgIGlmIChyID4gKDEwLWxlbmd0aCtncmFiTG9jYXRpb24pIHx8IHI8Z3JhYkxvY2F0aW9uKXtcbiAgICAgICAgICAgICAgYWxsb3dlZFBvc2l0aW9uTWFwW3JdW2NdID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsbG93ZWRQb3NpdGlvbk1hcFtyXVtjXSA9IGlzU2hpcEZpdEFkamFjZW5jeShbci1ncmFiTG9jYXRpb24sY10sc2hpcE9iamVjdCwgaXNIb3Jpem9udGFsLCBhZGphY2VuY3lNYXApO1xuICAgICAgICAgICAgaWYgKGFsbG93ZWRQb3NpdGlvbk1hcFtyXVtjXSA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgdHJ1ZUNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiYWxsb3dlZCBwb3NpdGlvbiBtYXAgY3JlYXRlZFwiKVxuICAgIGNvbnNvbGUubG9nKGFsbG93ZWRQb3NpdGlvbk1hcCk7XG4gICAgcmV0dXJuIHRydWVDb3VudDtcbiAgfTtcblxuICAvLyBbcixjXSBpcyB0b3BsZWZ0IHNxdWFyZSBvZiBzaGlwXG4gIGNvbnN0IGlzU2hpcEZpdEFkamFjZW5jeSA9IGZ1bmN0aW9uKFtyLGNdLHNoaXBPYmplY3QsIGlzSG9yaXpvbnRhbCwgbWFwKXtcbiAgICBjb25zdCBsZW5ndGggPSBzaGlwT2JqZWN0Lmxlbmd0aDtcbiAgICBpZiAoaXNIb3Jpem9udGFsICE9PSBcInRydWVcIil7XG4gICAgICBmb3IgKGxldCBpPTA7IGk8bGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAodHlwZW9mIG1hcFtyK2ldICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBtYXBbcitpXVtjXSAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICAgICAgZm9yIChsZXQgc2hpcCBvZiBtYXBbcitpXVtjXSl7XG4gICAgICAgICAgICBpZiAoc2hpcCAhPSBzaGlwT2JqZWN0KXtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpPTA7IGk8bGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAodHlwZW9mIG1hcFtyXSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgbWFwW3JdW2MraV0gIT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICAgIGZvciAobGV0IHNoaXAgb2YgbWFwW3JdW2MraV0pe1xuICAgICAgICAgICAgaWYgKHNoaXAgIT0gc2hpcE9iamVjdCl7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuXG4gIGNvbnN0IGNyZWF0ZUFkamFjZW5jeU1hcCA9IGZ1bmN0aW9uKCl7XG4gICAgbGV0IGFkamFjZW5jeU1hcCA9IFt7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fV07XG4gICAgZm9yIChsZXQgaT0wOyBpPDEwOyBpKyspe1xuICAgICAgZm9yIChsZXQgaj0wOyBqPDEwOyBqKyspe1xuICAgICAgICBpZiAodHlwZW9mIGJvYXJkTWFwW2ldW2pdICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgICAgICBjb25zdCBzaGlwID0gYm9hcmRNYXBbaV1bal07XG4gICAgICAgICAgYWRkVG9BZGphY2VuY3lNYXAoYWRqYWNlbmN5TWFwLCBzaGlwLCBpLGopO1xuICAgICAgICAgIGlmIChqPjApe1xuICAgICAgICAgICAgYWRkVG9BZGphY2VuY3lNYXAoYWRqYWNlbmN5TWFwLCBzaGlwLCBpLGotMSk7XG4gICAgICAgICAgICBpZiAoaT4wKXtcbiAgICAgICAgICAgICAgYWRkVG9BZGphY2VuY3lNYXAoYWRqYWNlbmN5TWFwLCBzaGlwLCBpLTEsai0xKTtcbiAgICAgICAgICAgIH0gaWYgKGk8OSl7XG4gICAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaSsxLGotMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChqPDkpe1xuICAgICAgICAgICAgYWRkVG9BZGphY2VuY3lNYXAoYWRqYWNlbmN5TWFwLCBzaGlwLCBpLGorMSk7XG4gICAgICAgICAgICBpZiAoaT4wKXtcbiAgICAgICAgICAgICAgYWRkVG9BZGphY2VuY3lNYXAoYWRqYWNlbmN5TWFwLCBzaGlwLCBpLTEsaisxKTtcbiAgICAgICAgICAgIH0gaWYgKGk8OSl7XG4gICAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaSsxLGorMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpPjApe1xuICAgICAgICAgICAgYWRkVG9BZGphY2VuY3lNYXAoYWRqYWNlbmN5TWFwLCBzaGlwLCBpLTEsaik7XG4gICAgICAgICAgfSBpZiAoaTw5KXtcbiAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaSsxLGopO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhhZGphY2VuY3lNYXApO1xuICAgIHJldHVybiBhZGphY2VuY3lNYXA7XG4gIH1cblxuICBjb25zdCBhZGRUb0FkamFjZW5jeU1hcCA9IGZ1bmN0aW9uKG1hcCwgc2hpcCwgaSwgail7XG4gICAgY29uc3QgbG9jYXRpb24gPSBtYXBbaV1bal07XG4gICAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsb2NhdGlvblswXSAhPSBzaGlwKXtcbiAgICAgIG1hcFtpXVtqXS5wdXNoKHNoaXApO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgbWFwW2ldW2pdID0gW3NoaXBdO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlbWVtYmVyIHRoYXQgbWFwIGlzIHNvcnRlZCBieSByLCB0aGVuIGMuXG4gIGNvbnN0IG1vdmVTaGlwID0gZnVuY3Rpb24oc2hpcCxbc3RhcnRSLHN0YXJ0Q10sbGVuZ3RoLCBpc0hvcml6b250YWwpe1xuICAgIGZvciAobGV0IHJvdz0wOyByb3c8MTA7IHJvdysrKXtcbiAgICAgIGNvbnN0IG1hcFJvdyA9IGJvYXJkTWFwW3Jvd107XG4gICAgICBmb3IgKGxldCBjb2wgb2YgT2JqZWN0LmtleXMobWFwUm93KSl7XG4gICAgICAgIGlmIChtYXBSb3dbY29sXSA9PSBzaGlwKXtcbiAgICAgICAgICBkZWxldGUgYm9hcmRNYXBbcm93XVtjb2xdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGJvYXJkTWFwKTtcbiAgICBjb25zdCBjb29yZHMgPSBbXTtcbiAgICBpZiAoaXNIb3Jpem9udGFsID09IFwidHJ1ZVwiKXtcbiAgICAgIGZvciAobGV0IGk9MDsgaTxsZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvb3Jkcy5wdXNoKFtzdGFydFIsc3RhcnRDK2ldKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpPTA7IGk8bGVuZ3RoOyBpKyspe1xuICAgICAgICBjb29yZHMucHVzaChbc3RhcnRSK2ksc3RhcnRDXSlcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coLi4uY29vcmRzLCBsZW5ndGgpO1xuICAgIG5ld1NoaXAoLi4uY29vcmRzKTtcbiAgfVxuXG4gIC8vIG5lZWQgdG8gcmFuZG9taXplIDUgc2hpcHMgb2YgbGVuZ3RoIDIsMywzLDQsNVxuICBjb25zdCByYW5kb21pemVCb2FyZCA9IGZ1bmN0aW9uKCl7XG4gICAgdHJ5e1xuICAgICAgcmVzZXRCb2FyZCgpO1xuICAgICAgY29uc3QgY29vcmRzMSA9IGdldFJhbmRvbUNvb3JkcygyKTtcbiAgICAgIG5ld1NoaXAoLi4uY29vcmRzMSk7XG4gICAgICBjb25zdCBjb29yZHMyID0gZ2V0UmFuZG9tQ29vcmRzKDMpO1xuICAgICAgbmV3U2hpcCguLi5jb29yZHMyKTtcbiAgICAgIGNvbnN0IGNvb3JkczMgPSBnZXRSYW5kb21Db29yZHMoMyk7XG4gICAgICBuZXdTaGlwKC4uLmNvb3JkczMpO1xuICAgICAgY29uc3QgY29vcmRzNCA9IGdldFJhbmRvbUNvb3Jkcyg0KTtcbiAgICAgIG5ld1NoaXAoLi4uY29vcmRzNCk7XG4gICAgICBjb25zdCBjb29yZHM1ID0gZ2V0UmFuZG9tQ29vcmRzKDUpO1xuICAgICAgbmV3U2hpcCguLi5jb29yZHM1KTtcbiAgICAgIC8vY29uc29sZS5sb2coYm9hcmRNYXApO1xuICAgICAgcmV0dXJuIHtjb29yZHMxLGNvb3JkczIsY29vcmRzMyxjb29yZHM0LGNvb3JkczV9O1xuICAgIH0gY2F0Y2h7XG4gICAgICByZXR1cm4gcmFuZG9taXplQm9hcmQoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBnZXRSYW5kb21Db29yZHMgPSBmdW5jdGlvbihsZW5ndGgpe1xuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHJhbmRvbWl6ZUlzSG9yaXpvbnRhbCgpO1xuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgpO1xuICAgIGxldCB0cnVlQ291bnQgPSBjcmVhdGVBbGxvd2VkUG9zaXRpb25NYXAoc2hpcCwgaXNIb3Jpem9udGFsLCAwKTtcbiAgICAvLyBjYXRjaCB3aGVuIHRoZXJlIGlzIG5vIGFsbG93ZWQgcG9zaXRpb25zXG4gICAgaWYgKHRydWVDb3VudCA9PSAwKXtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJNdXN0IHJlcmFuZG9taXplIGR1ZSB0byB1bmx1Y2t5IHNldHVwXCIpO1xuICAgIH1cbiAgICAvLyBybmdDb3VudCByYW5nZXMgZnJvbSAwIHRvIHRydWVDb3VudC0xO1xuICAgIGxldCBybmdDb3VudCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp0cnVlQ291bnQpO1xuICAgIC8vY29uc29sZS5sb2cocm5nQ291bnQsIHRydWVDb3VudCk7XG4gICAgbGV0IHI9LTE7XG4gICAgbGV0IGM9OTtcbiAgICB3aGlsZSAocm5nQ291bnQ+PTApe1xuICAgICAgaWYgKGM9PTkpe1xuICAgICAgICByKys7XG4gICAgICAgIGM9MDtcbiAgICAgIH0gZWxzZXtcbiAgICAgICAgYysrO1xuICAgICAgfVxuICAgICAgaWYgKGlzVGhpc0FsbG93ZWRQbGFjZW1lbnQoW3IsY10pID09IHRydWUpe1xuICAgICAgICBybmdDb3VudC0tO1xuICAgICAgfVxuICAgICAgLy9jb25zb2xlLmxvZyhyLCBjLCBybmdDb3VudCk7XG4gICAgfVxuICAgIGxldCBjb29yZHMgPSBbXTtcbiAgICBpZiAoaXNIb3Jpem9udGFsID09IFwidHJ1ZVwiKXtcbiAgICAgIGZvciAoO2xlbmd0aD4wOyBsZW5ndGgtLSl7XG4gICAgICAgIGNvb3Jkcy5wdXNoKFtyLGNdKTtcbiAgICAgICAgYysrO1xuICAgICAgfVxuICAgIH0gZWxzZXtcbiAgICAgIGZvciAoO2xlbmd0aD4wOyBsZW5ndGgtLSl7XG4gICAgICAgIGNvb3Jkcy5wdXNoKFtyLGNdKTtcbiAgICAgICAgcisrO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgR2VuZXJhdGVkIGFsbG93ZWQgcmFuZG9tIGNvb3JkcyAke2Nvb3Jkc31gKTtcbiAgICByZXR1cm4gKGNvb3Jkcyk7XG4gIH1cblxuICBjb25zdCByYW5kb21pemVJc0hvcml6b250YWwgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IHJuZyA9IE1hdGgucmFuZG9tKCkqMjtcbiAgICBpZiAocm5nIDwgMSl7XG4gICAgICByZXR1cm4gXCJ0cnVlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcImZhbHNlXCI7XG4gICAgfVxuICB9XG5cbiAgLy8gc3RhcnQgb2YgY29kZSBmb3IgZ3Vlc3NpbmcgZWR1Y2F0ZWQgYXR0YWNrIGZvciBjb21wdXRlciBwbGF5ZXIgLy9cbiAgbGV0IHByZXZpb3VzQXR0YWNrID0ge307XG4gIGNvbnN0IG1ha2VSYW5kb21BdHRhY2sgPSBmdW5jdGlvbihvdGhlclBsYXllcil7XG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqICg5OS1hdHRhY2tDb3VudCkpO1xuICAgIHByZXZpb3VzQXR0YWNrLmNvb3JkcyA9IGdldE50aE9wZW5BdHRhY2tNYXAob3RoZXJQbGF5ZXIsIHJhbmRvbUluZGV4KTtcbiAgICAvL2NvbnNvbGUubG9nKHByZXZpb3VzQXR0YWNrLmNvb3Jkcyk7XG4gICAgcHJldmlvdXNBdHRhY2suaGl0ID0gb3RoZXJQbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socHJldmlvdXNBdHRhY2suY29vcmRzKTtcbiAgfVxuXG4gIGxldCBhdHRhY2tDb3VudCA9IDA7XG4gIGNvbnN0IG1ha2VFZHVjYXRlZEF0dGFjayA9IGZ1bmN0aW9uKG90aGVyUGxheWVyKXtcbiAgICBpZiAodHlwZW9mIHByZXZpb3VzQXR0YWNrLnByZXZTdWNjZXNzQ29vcmRzICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgIGNvbnN0IFtyLGNdPSBwcmV2aW91c0F0dGFjay5wcmV2U3VjY2Vzc0Nvb3JkcztcbiAgICAgIGNvbnNvbGUubG9nKHIsYyk7XG4gICAgICBjb25zdCBvdGhlckF0dGFja01hcCA9IG90aGVyUGxheWVyLmdhbWVib2FyZC5nZXRBdHRhY2tNYXAoKTtcbiAgICAgIGlmIChpc09uQm9hcmRBbmROb3RBdHRhY2tlZChbci0xLGNdLG90aGVyQXR0YWNrTWFwKSl7XG4gICAgICAgIHByZXZpb3VzQXR0YWNrLmNvb3JkcyA9IFtyLTEsY107XG4gICAgICAgIHByZXZpb3VzQXR0YWNrLmhpdCA9IG90aGVyUGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtyLTEsY10pO1xuICAgICAgfSBlbHNlIGlmIChpc09uQm9hcmRBbmROb3RBdHRhY2tlZChbcisxLGNdLG90aGVyQXR0YWNrTWFwKSl7XG4gICAgICAgIHByZXZpb3VzQXR0YWNrLmNvb3JkcyA9IFtyKzEsY107XG4gICAgICAgIHByZXZpb3VzQXR0YWNrLmhpdCA9IG90aGVyUGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtyKzEsY10pO1xuICAgICAgfSBlbHNlIGlmIChpc09uQm9hcmRBbmROb3RBdHRhY2tlZChbcixjLTFdLG90aGVyQXR0YWNrTWFwKSl7XG4gICAgICAgIHByZXZpb3VzQXR0YWNrLmNvb3JkcyA9IFtyLGMtMV07XG4gICAgICAgIHByZXZpb3VzQXR0YWNrLmhpdCA9IG90aGVyUGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtyLGMtMV0pO1xuICAgICAgfSBlbHNlIGlmIChpc09uQm9hcmRBbmROb3RBdHRhY2tlZChbcixjKzFdLG90aGVyQXR0YWNrTWFwKSl7XG4gICAgICAgIHByZXZpb3VzQXR0YWNrLmNvb3JkcyA9IFtyLGMrMV07XG4gICAgICAgIHByZXZpb3VzQXR0YWNrLmhpdCA9IG90aGVyUGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtyLGMrMV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWFrZVJhbmRvbUF0dGFjayhvdGhlclBsYXllcik7XG4gICAgICB9XG4gICAgfSBlbHNle1xuICAgICAgbWFrZVJhbmRvbUF0dGFjayhvdGhlclBsYXllcik7XG4gICAgfVxuICAgIGlmIChwcmV2aW91c0F0dGFjay5oaXQgPT0gXCJoaXRcIil7XG4gICAgICBwcmV2aW91c0F0dGFjay5wcmV2U3VjY2Vzc0Nvb3JkcyA9IHByZXZpb3VzQXR0YWNrLmNvb3JkcztcbiAgICB9XG4gICAgY29uc29sZS5sb2coYFJlY2VpdmVkIGF0dGFjayBhdCAke3ByZXZpb3VzQXR0YWNrLmNvb3Jkc30gZm9yIHBsYXllciAxIGJ5IGNvbXB1dGVyYClcbiAgICBhdHRhY2tDb3VudCsrO1xuICAgIHJldHVybiBwcmV2aW91c0F0dGFjay5jb29yZHM7XG4gIH1cblxuICBjb25zdCBnZXROdGhPcGVuQXR0YWNrTWFwID0gZnVuY3Rpb24ob3RoZXJQbGF5ZXIsIGluZGV4KXtcbiAgICBjb25zdCBvdGhlckF0dGFja01hcCA9IG90aGVyUGxheWVyLmdhbWVib2FyZC5nZXRBdHRhY2tNYXAoKTtcbiAgICBsZXQgY291bnQgPSBpbmRleDtcbiAgICBmb3IgKGxldCByb3cgb2Ygb3RoZXJBdHRhY2tNYXApe1xuICAgICAgZm9yIChsZXQgYz0wOyBjPDEwOyBjKyspe1xuICAgICAgICBjb25zdCBjb2xWYWx1ZSA9IHJvd1tjXTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjb2xWYWx1ZSk7XG4gICAgICAgIGlmICh0eXBlb2YgY29sVmFsdWUgPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICBpZiAoY291bnQgPDApe1xuICAgICAgICAgICAgY29uc3QgciA9IG90aGVyQXR0YWNrTWFwLmluZGV4T2Yocm93KTtcbiAgICAgICAgICAgIHJldHVybiBbcixjXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZyhjb3VudClcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJnZXQgTnRoIG9wZW4gYXR0YWNrIG1hcCBmYWlsZWRcIik7XG4gIH1cblxuICBjb25zdCBpc09uQm9hcmRBbmROb3RBdHRhY2tlZCA9IGZ1bmN0aW9uKFtyLGNdLCBhdHRhY2tNYXApe1xuICAgIHJldHVybiAocjw5ICYmIHI+MCAmJiBjPDkgJiYgYz4wICYmIHR5cGVvZiBhdHRhY2tNYXBbcl1bY10gPT0gXCJ1bmRlZmluZWRcIik7XG4gIH1cbiAgLy8gZW5kIG9mIGNvZGUgcmVsYXRlZCB0byBtYWtpbmcgY29tcHV0ZXIgZWR1Y2F0ZWQgYXR0YWNrXG5cbiAgcmV0dXJuIHtcbiAgICBuZXdTaGlwLFxuICAgIGdldFNoaXBGcm9tQ29vcmRzLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgd2FzQXR0YWNrZWQsXG4gICAgaXNBbGxTdW5rLFxuICAgIGdldEJvYXJkTWFwLFxuICAgIHJlc2V0Qm9hcmQsXG4gICAgZ2V0QXR0YWNrTWFwLFxuICAgIGlzVGhpc0FsbG93ZWRQbGFjZW1lbnQsXG4gICAgbW92ZVNoaXAsXG4gICAgY3JlYXRlQWxsb3dlZFBvc2l0aW9uTWFwLFxuICAgIHJhbmRvbWl6ZUJvYXJkLFxuICAgIG1ha2VFZHVjYXRlZEF0dGFjayxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuIiwiaW1wb3J0IHtHYW1lYm9hcmR9IGZyb20gXCIuL2dhbWVib2FyZC5qc1wiXG5cbmNvbnN0IFBsYXllciA9IGZ1bmN0aW9uKG5hbWUsIG51bWJlcil7XG5cbiAgICBsZXQgZ2FtZWJvYXJkO1xuICAgIGNvbnN0IGluaXQgPSBmdW5jdGlvbigpe1xuICAgICAgICBnYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgfSgpO1xuXG4gICAgcmV0dXJue1xuICAgICAgICBuYW1lLFxuICAgICAgICBudW1iZXIsXG4gICAgICAgIGdhbWVib2FyZCxcbiAgICB9XG59XG5cbmNvbnN0IGNvbXB1dGVyUGxheWVyID0gZnVuY3Rpb24obnVtYmVyKXtcblxuICAgIHJldHVybntcbiAgICAgICAgLy8gaW5oZXJpdCBwcm9wZXJ0aWVzIGJ5IGNvbXBvc2l0aW9uXG4gICAgICAgIC4uLihuZXcgUGxheWVyKFwiQ29tcHV0ZXIgQm9iXCIsIG51bWJlcikpLFxuICAgIH1cbn1cblxuY29uc3QgaHVtYW5QbGF5ZXIgPSBmdW5jdGlvbihuYW1lLCBudW1iZXIpe1xuXG4gICAgcmV0dXJue1xuICAgICAgICAuLi4obmV3IFBsYXllcihuYW1lLCBudW1iZXIpKSxcbiAgICB9XG59XG5cbmV4cG9ydCB7UGxheWVyLCBjb21wdXRlclBsYXllciwgaHVtYW5QbGF5ZXJ9OyIsIi8vIGNvbnRhaW5zIG1ldGhvZHMgdG8gcG9wdWxhdGUgRE9NXG4vLyByZW5kZXIgZnVuY3Rpb25zIHdpbGwgZGlzcGxheSBET00gZWxlbWVudHNcbi8vIGJ1aWxkIGZ1bmN0aW9ucyB3aWxsIGJ1aWxkIGVsZW1lbnRzIGFuZCByZXR1cm4gdGhlbSB3aXRob3V0IGRpc3BsYXlcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5jb25zdCBSZW5kZXJNYW5hZ2VyID0gZnVuY3Rpb24oKXtcbiAgICBcbiAgICBsZXQgYm9hcmQxO1xuICAgIGxldCBib2FyZDI7XG4gICAgbGV0IGRpYWxvZztcbiAgICBjb25zdCBpbml0R2FtZVJlbmRlciA9IGZ1bmN0aW9uKHBsYXllcjFPYmplY3QsIHBsYXllcjJPYmplY3Qpe1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5xdWVyeVNlbGVjdG9yKFwiLnByZWdhbWUuY29udGFpbmVyXCIpKTtcbiAgICAgICAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJnYW1lIGNvbnRhaW5lclwiKTtcbiAgICAgICAgYm9keS5hcHBlbmQoZ2FtZUNvbnRhaW5lcik7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGJ1aWxkSGVhZGVyKCk7XG4gICAgICAgIGJvYXJkMSA9IGJ1aWxkQm9hcmRBbmRIZWFkZXIocGxheWVyMU9iamVjdC5udW1iZXIsIHBsYXllcjFPYmplY3QubmFtZSk7XG4gICAgICAgIGJvYXJkMiA9IGJ1aWxkQm9hcmRBbmRIZWFkZXIocGxheWVyMk9iamVjdC5udW1iZXIsIHBsYXllcjJPYmplY3QubmFtZSk7XG4gICAgICAgIGdhbWVDb250YWluZXIuYXBwZW5kKGhlYWRlciwgYm9hcmQxLCBib2FyZDIpO1xuICAgICAgICBkaWFsb2cgPSBidWlsZERpYWxvZygpO1xuICAgICAgICBnYW1lQ29udGFpbmVyLmFwcGVuZChkaWFsb2cpO1xuICAgIH07XG5cbiAgICBjb25zdCBidWlsZEhlYWRlciA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcInVpIGNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgdHVyblRleHQgPSBjcmVhdGVFbGVtZW50KFwiaDFcIiwgXCJ0dXJuIHRleHRcIik7XG4gICAgICAgIHR1cm5UZXh0LnRleHRDb250ZW50ID0gXCIncyBUdXJuXCI7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQodHVyblRleHQpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkQm9hcmRBbmRIZWFkZXIgPSBmdW5jdGlvbihwbGF5ZXJOdW1iZXIsIHBsYXllck5hbWUpe1xuICAgICAgICBjb25zdCBib2FyZCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixgYm9hcmQgY29udGFpbmVyYCk7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixgcm93LSR7aX1gKTtcbiAgICAgICAgICAgIHJvdy5zZXRBdHRyaWJ1dGUoXCJyb3dcIiwgaSk7XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8MTA7IGorKyl7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiY29sXCIsIGopO1xuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmQoc3F1YXJlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIGJvYXJkLnNldEF0dHJpYnV0ZShcInBsYXllcm51bVwiLCBwbGF5ZXJOdW1iZXIpO1xuICAgICAgICBjb25zdCBib2FyZEFuZEhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixgYm9hcmQtYW5kLWhlYWRlciBjb250YWluZXIgcGxheWVyLSR7cGxheWVyTnVtYmVyfWApO1xuICAgICAgICBjb25zdCBib2FyZEhlYWRlclRleHQ9IGNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBcImJvYXJkIGhlYWRlclwiKTtcbiAgICAgICAgYm9hcmRIZWFkZXJUZXh0LnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZX0ncyBCb2FyZGA7XG4gICAgICAgIGJvYXJkQW5kSGVhZGVyLmFwcGVuZChib2FyZEhlYWRlclRleHQsIGJvYXJkKTtcbiAgICAgICAgcmV0dXJuIGJvYXJkQW5kSGVhZGVyO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkRGlhbG9nID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgICAgICAgY29uc3QgZGlhbG9nSGVhZGVyID0gY3JlYXRlRWxlbWVudChcImgxXCIsIFwiZGlhbG9nIGhlYWRlclwiKTtcbiAgICAgICAgZGlhbG9nSGVhZGVyLnRleHRDb250ZW50ID0gXCJTd2l0Y2ggUGxheWVycyFcIlxuICAgICAgICBjb25zdCBkaWFsb2dTdWJ0ZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJkaWFsb2cgc3VidGV4dFwiKTtcbiAgICAgICAgZGlhbG9nU3VidGV4dC50ZXh0Q29udGVudCA9IFwiKGNsaWNrIHdoZW4gcmVhZHkpXCI7XG4gICAgICAgIGRpYWxvZy5hcHBlbmQoZGlhbG9nSGVhZGVyLCBkaWFsb2dTdWJ0ZXh0KTtcbiAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgIGRpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7ZGlhbG9nLmNsb3NlKCl9KTtcbiAgICAgICAgcmV0dXJuIGRpYWxvZztcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJOZXdTaGlwID0gZnVuY3Rpb24ocGxheWVyTnVtYmVyLC4uLmNvb3Jkcyl7XG4gICAgICAgIGxldCBib2FyZDtcbiAgICAgICAgaWYgKHBsYXllck51bWJlciA9PTEpe1xuICAgICAgICAgICAgYm9hcmQgPSBib2FyZDE7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGJvYXJkID0gYm9hcmQyO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpPTA7XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IGlzSG9yaXpvbnRhbCA9IGZhbHNlO1xuICAgICAgICBpZiAoY29vcmRzWzFdWzBdID09IGNvb3Jkc1swXVswXSl7XG4gICAgICAgICAgICBpc0hvcml6b250YWwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IFt4LHldIG9mIGNvb3Jkcyl7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVUb0NoYW5nZSA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYGRpdi5yb3ctJHt4fSA+IGRpdjpudGgtY2hpbGQoJHt5KzF9KWApO1xuICAgICAgICAgICAgc3F1YXJlVG9DaGFuZ2UuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgICBzcXVhcmVUb0NoYW5nZS5zZXRBdHRyaWJ1dGUoXCJsZW5ndGhcIiwgc2hpcExlbmd0aCk7XG4gICAgICAgICAgICBzcXVhcmVUb0NoYW5nZS5zZXRBdHRyaWJ1dGUoXCJncmFiTG9jYXRpb25cIiwgaSk7XG4gICAgICAgICAgICBzcXVhcmVUb0NoYW5nZS5zZXRBdHRyaWJ1dGUoXCJob3Jpem9udGFsXCIsIGlzSG9yaXpvbnRhbClcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckF0dGFja2VkID0gZnVuY3Rpb24oc3F1YXJlRE9NTm9kZSl7XG4gICAgICAgIHNxdWFyZURPTU5vZGUuY2xhc3NMaXN0LmFkZChcImF0dGFja2VkXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJldmVhbERpYWxvZ1dpdGhUZXh0ID0gZnVuY3Rpb24oc3RyaW5nID0gXCJcIil7XG4gICAgICAgIGNvbnN0IGRpYWxvZ0hlYWRlciA9IGRpYWxvZy5maXJzdENoaWxkO1xuICAgICAgICBpZiAoc3RyaW5nICE9IFwiXCIpe1xuICAgICAgICAgICAgZGlhbG9nSGVhZGVyLnRleHRDb250ZW50ID0gc3RyaW5nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlhbG9nSGVhZGVyLnRleHRDb250ZW50ID0gXCJTd2l0Y2ggUGxheWVycyFcIlxuICAgICAgICB9XG4gICAgICAgIC8vIGFkZCBzY3JlZW4gc3dhcHBpbmcgb3ZlcmxheVxuICAgICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyVHVyblN3aXRjaFRvID0gZnVuY3Rpb24ocGxheWVyTnVtYmVyLCBwbGF5ZXJOYW1lKXtcbiAgICAgICAgcmV2ZWFsRGlhbG9nV2l0aFRleHQoYCR7cGxheWVyTmFtZX0ncyBUdXJuYCk7XG4gICAgICAgIC8vIHBsYXllck51bWJlciBpcyBudW1iZXIgb2YgcGxheWVyIHdob3NlIHR1cm4gaXQgc2hvdWxkIHN3aXRjaCBUT1xuICAgICAgICAvLyBjaGFuZ2UgaGVhZGVyIHRvIFwiSXQgaXMgcGxheWVyc3twbGF5ZXJOdW1iZXJ9Lm5hbWUncyB0dXJuXCJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51aS5jb250YWluZXIgLnR1cm4udGV4dFwiKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZX0ncyBUdXJuYDtcbiAgICAgICAgLy8gY2hhbmdlIGJvYXJkIGhlYWRlciBmcm9tIFwiWW91ciBCb2FyZFwiIHRvIFwiRW5lbXkgQm9hcmRcIiBhbmQgdmlzIHZlcnNhXG4gICAgICAgIGNvbnN0IGJvYXJkMUhlYWRlciA9IGJvYXJkMS5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcbiAgICAgICAgY29uc3QgYm9hcmQySGVhZGVyID0gYm9hcmQyLnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xuICAgICAgICAvLyBoaWRlIHNoaXBzIGZyb20gZW5lbXkgYm9hcmQgYW5kIHJldmVhbCBzaGlwcyBvbiB5b3VyIGJvYXJkXG4gICAgICAgIGNvbnN0IGJvYXJkRE9NMSA9IGJvYXJkMS5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLmNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgYm9hcmRET00yID0gYm9hcmQyLnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQuY29udGFpbmVyXCIpO1xuICAgICAgICBpZiAocGxheWVyTnVtYmVyID09IDEpe1xuICAgICAgICAgICAgYm9hcmQySGVhZGVyLnRleHRDb250ZW50ID0gXCJFbmVteSBCb2FyZFwiO1xuICAgICAgICAgICAgYm9hcmQxSGVhZGVyLnRleHRDb250ZW50ID0gXCJZb3VyIEJvYXJkXCI7XG4gICAgICAgICAgICBib2FyZERPTTEuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gICAgICAgICAgICBib2FyZERPTTIuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2FyZDFIZWFkZXIudGV4dENvbnRlbnQgPSBcIkVuZW15IEJvYXJkXCI7XG4gICAgICAgICAgICBib2FyZDJIZWFkZXIudGV4dENvbnRlbnQgPSBcIllvdXIgQm9hcmRcIjtcbiAgICAgICAgICAgIGJvYXJkRE9NMS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICAgICAgICAgIGJvYXJkRE9NMi5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAgXG4gICAgY29uc3QgcmVuZGVyVHVybkNvdW50ZXIgPSBmdW5jdGlvbih0dXJuTnVtKXtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51aS5jb250YWluZXIgLnR1cm4udGV4dFwiKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gYFR1cm4gJHt0dXJuTnVtfWA7XG4gICAgfVxuXG4gICAgLy8gcmVuZGVyIGVuZGluZyBnYW1lIChwbGF5ZXJOYW1lIGhhcyB3b24pXG4gICAgY29uc3QgcmVuZGVyRW5kR2FtZSA9IGZ1bmN0aW9uKHdpbm5lck5hbWUpe1xuICAgICAgICBjb25zdCB3aW5uZXJUZXh0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImVuZCBjb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHdpbm5lclRleHQgPSBjcmVhdGVFbGVtZW50KFwiaDFcIiwgXCJ3aW5uZXIgdGV4dFwiKTtcbiAgICAgICAgd2lubmVyVGV4dC50ZXh0Q29udGVudCA9IGBDb25ncmF0cyEgJHt3aW5uZXJOYW1lfSB3b24uYDs7XG4gICAgICAgIGNvbnN0IHBsYXlBZ2FpbkJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJyZXNldCBidXR0b25cIik7XG4gICAgICAgIHBsYXlBZ2FpbkJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUGxheSBBZ2Fpbj9cIjtcbiAgICAgICAgd2lubmVyVGV4dENvbnRhaW5lci5hcHBlbmQod2lubmVyVGV4dCwgcGxheUFnYWluQnV0dG9uKTtcbiAgICAgICAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS5jb250YWluZXJcIik7XG4gICAgICAgIGdhbWVDb250YWluZXIuYXBwZW5kKHdpbm5lclRleHRDb250YWluZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclN0YWdpbmcgPSBmdW5jdGlvbihhdHRhY2tNYXAxLCBzaGlwTWFwMSwgYXR0YWNrTWFwMiwgc2hpcE1hcDIpe1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVpLmNvbnRhaW5lciAudHVybi50ZXh0XCIpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlNldHVwIFRpbWVcIjtcbiAgICAgICAgcmVuZGVyQm9hcmRSZXNldChhdHRhY2tNYXAxLCBzaGlwTWFwMSwgYm9hcmQxLnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQuY29udGFpbmVyXCIpKTtcbiAgICAgICAgcmVuZGVyQm9hcmRSZXNldChhdHRhY2tNYXAyLCBzaGlwTWFwMiwgYm9hcmQyLnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQuY29udGFpbmVyXCIpKTtcbiAgICAgICAgcmVuZGVyU2hpcFNhbXBsZXMoKTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVCb2FyZFZpc2liaWxpdHkgPSBmdW5jdGlvbihib2FyZERPTSl7XG4gICAgICAgIGJvYXJkRE9NLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckJvYXJkUmVzZXQgPSBmdW5jdGlvbihhdHRhY2tNYXAsIHNoaXBNYXAsIGJvYXJkRE9NKXtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDEwOyBpKyspe1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gaTtcbiAgICAgICAgICAgIGNvbnN0IGF0dGFja2VkSW5Sb3cgPSBPYmplY3Qua2V5cyhhdHRhY2tNYXBbaV0pO1xuICAgICAgICAgICAgY29uc3Qgc2hpcEluUm93ID0gT2JqZWN0LmtleXMoc2hpcE1hcFtpXSk7XG4gICAgICAgICAgICBmb3IgKGxldCBhdHRhY2tlZCBvZiBhdHRhY2tlZEluUm93KXtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2wgPSBOdW1iZXIoYXR0YWNrZWQpKzE7XG4gICAgICAgICAgICAgICAgY29uc3QgZGl2VG9VbmF0dGFjayA9IGJvYXJkRE9NLnF1ZXJ5U2VsZWN0b3IoYGRpdi5yb3ctJHtyb3d9IGRpdjpudGgtY2hpbGQoJHtjb2x9KWApO1xuICAgICAgICAgICAgICAgIGRpdlRvVW5hdHRhY2suY2xhc3NMaXN0LnJlbW92ZShcImF0dGFja2VkXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBzaGlwIG9mIHNoaXBJblJvdyl7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sID0gTnVtYmVyKHNoaXApKzE7XG4gICAgICAgICAgICAgICAgY29uc3QgZGl2VG9VbnNoaXAgPSBib2FyZERPTS5xdWVyeVNlbGVjdG9yKGBkaXYucm93LSR7cm93fSBkaXY6bnRoLWNoaWxkKCR7Y29sfSlgKTtcbiAgICAgICAgICAgICAgICBkaXZUb1Vuc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKTtcbiAgICAgICAgICAgICAgICBkaXZUb1Vuc2hpcC5yZW1vdmVBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIik7XG4gICAgICAgICAgICAgICAgZGl2VG9VbnNoaXAucmVtb3ZlQXR0cmlidXRlKFwiZ3JhYmxvY2F0aW9uXCIpO1xuICAgICAgICAgICAgICAgIGRpdlRvVW5zaGlwLnJlbW92ZUF0dHJpYnV0ZShcImxlbmd0aFwiKTtcbiAgICAgICAgICAgICAgICBkaXZUb1Vuc2hpcC5yZW1vdmVBdHRyaWJ1dGUoXCJob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyU2hpcFNhbXBsZXMgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBoaWRkZW5Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiaGlkZGVuIHNhbXBsZXNcIik7XG4gICAgICAgIGNvbnN0IGhvcml6b250YWxTaGlwcyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzaGlwcyBob3Jpem9udGFsXCIpO1xuICAgICAgICBjb25zdCB2ZXJ0aWNhbFNoaXBzID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInNoaXBzIHZlcnRpY2FsXCIpO1xuICAgICAgICBob3Jpem9udGFsU2hpcHMuYXBwZW5kKGJ1aWxkU2hpcE9mTGVuZ3RoKDIpLCBidWlsZFNoaXBPZkxlbmd0aCgzKSxcbiAgICAgICAgYnVpbGRTaGlwT2ZMZW5ndGgoNCksIGJ1aWxkU2hpcE9mTGVuZ3RoKDUpKTtcbiAgICAgICAgdmVydGljYWxTaGlwcy5hcHBlbmQoYnVpbGRTaGlwT2ZMZW5ndGgoMiksIGJ1aWxkU2hpcE9mTGVuZ3RoKDMpLFxuICAgICAgICBidWlsZFNoaXBPZkxlbmd0aCg0KSwgYnVpbGRTaGlwT2ZMZW5ndGgoNSkpO1xuICAgICAgICBoaWRkZW5Db250YWluZXIuYXBwZW5kKGhvcml6b250YWxTaGlwcyx2ZXJ0aWNhbFNoaXBzKTtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG4gICAgICAgIGJvZHkuYXBwZW5kKGhpZGRlbkNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgY29uc3QgYnVpbGRTaGlwT2ZMZW5ndGggPSBmdW5jdGlvbihsZW5ndGgpe1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJzaGlwIGNvbnRhaW5lclwiKTtcbiAgICAgICAgY29udGFpbmVyLmlkID0gYGxlbmd0aC0ke2xlbmd0aH1gO1xuICAgICAgICBmb3IgKGxldCBpID0wOyBpPGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZChwYXJ0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclN0YWdpbmdCdXR0b25zID0gZnVuY3Rpb24oYm9hcmRET00pe1xuICAgICAgICBjb25zdCBidXR0b25BcmVhID0gY3JlYXRlRWxlbWVudChcImRpdlwiLFwiYnV0dG9uIGNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLFwic3VibWl0IHN0YWdpbmdcIik7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTG9jayBpbiBwb3NpdGlvbnMhXCI7XG4gICAgICAgIGNvbnN0IHJuZ0J1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJyYW5kb21pemUgYnV0dG9uXCIpO1xuICAgICAgICBybmdCdXR0b24udGV4dENvbnRlbnQgPSBcIlJhbmRvbWl6ZVwiXG4gICAgICAgIGJ1dHRvbkFyZWEuYXBwZW5kKGJ1dHRvbiwgcm5nQnV0dG9uKTtcbiAgICAgICAgYm9hcmRET00ucGFyZW50Tm9kZS5hcHBlbmQoYnV0dG9uQXJlYSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyTW92ZVNoaXAgPSBmdW5jdGlvbihbb2xkWFN0YXJ0LCBvbGRZU3RhcnRdLCBbbmV3WFN0YXJ0LCBuZXdZU3RhcnRdLCBzaGlwTGVuZ3RoLCBpc0hvcml6b250YWwsIGJvYXJkRE9NTm9kZSl7XG4gICAgICAgIGlmIChvbGRYU3RhcnQgPT0gbmV3WFN0YXJ0ICYmIG9sZFlTdGFydCA9PSBuZXdZU3RhcnQpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0hvcml6b250YWwgPT0gXCJ0cnVlXCIpe1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHNoaXBMZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlVG9SZW1vdmUgPSBib2FyZERPTU5vZGUucXVlcnlTZWxlY3RvcihgLnJvdy0ke29sZFhTdGFydH0gZGl2Om50aC1jaGlsZCgke29sZFlTdGFydCtpKzF9KWApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyYWJsb2NhdGlvbiA9IHNxdWFyZVRvUmVtb3ZlLmdldEF0dHJpYnV0ZShcImdyYWJsb2NhdGlvblwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5yZW1vdmVBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUucmVtb3ZlQXR0cmlidXRlKFwibGVuZ3RoXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLnJlbW92ZUF0dHJpYnV0ZShcImdyYWJsb2NhdGlvblwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5yZW1vdmVBdHRyaWJ1dGUoXCJob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpXG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlVG9BZGQgPSBib2FyZERPTU5vZGUucXVlcnlTZWxlY3RvcihgLnJvdy0ke25ld1hTdGFydH0gZGl2Om50aC1jaGlsZCgke25ld1lTdGFydCtpKzF9KWApO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5zZXRBdHRyaWJ1dGUoXCJsZW5ndGhcIiwgc2hpcExlbmd0aCk7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuc2V0QXR0cmlidXRlKFwiZ3JhYmxvY2F0aW9uXCIsIGdyYWJsb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuc2V0QXR0cmlidXRlKFwiaG9yaXpvbnRhbFwiLCBpc0hvcml6b250YWwpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8c2hpcExlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmVUb1JlbW92ZSA9IGJvYXJkRE9NTm9kZS5xdWVyeVNlbGVjdG9yKGAucm93LSR7b2xkWFN0YXJ0K2l9IGRpdjpudGgtY2hpbGQoJHtvbGRZU3RhcnQrMX0pYCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JhYmxvY2F0aW9uID0gc3F1YXJlVG9SZW1vdmUuZ2V0QXR0cmlidXRlKFwiZ3JhYmxvY2F0aW9uXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLnJlbW92ZUF0dHJpYnV0ZShcImRyYWdnYWJsZVwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5yZW1vdmVBdHRyaWJ1dGUoXCJsZW5ndGhcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUucmVtb3ZlQXR0cmlidXRlKFwiZ3JhYmxvY2F0aW9uXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLnJlbW92ZUF0dHJpYnV0ZShcImhvcml6b250YWxcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIilcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmVUb0FkZCA9IGJvYXJkRE9NTm9kZS5xdWVyeVNlbGVjdG9yKGAucm93LSR7bmV3WFN0YXJ0K2l9IGRpdjpudGgtY2hpbGQoJHtuZXdZU3RhcnQrMX0pYCk7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLnNldEF0dHJpYnV0ZShcImxlbmd0aFwiLCBzaGlwTGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5zZXRBdHRyaWJ1dGUoXCJncmFibG9jYXRpb25cIiwgZ3JhYmxvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5zZXRBdHRyaWJ1dGUoXCJob3Jpem9udGFsXCIsIGlzSG9yaXpvbnRhbCk7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVFbmRHYW1lQ29udGFpbmVyID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgZW5kR2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW5kLmNvbnRhaW5lclwiKTtcbiAgICAgICAgZW5kR2FtZUNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVuZEdhbWVDb250YWluZXIpO1xuICAgIH1cblxuICAgIC8vIHJlbmRlcmluZyBwcmVnYW1lXG4gICAgY29uc3QgcmVuZGVyUHJlZ2FtZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgY29uc3QgcHJlZ2FtZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcInByZWdhbWUgY29udGFpbmVyXCIpO1xuICAgICAgICBib2R5LmFwcGVuZChwcmVnYW1lQ29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBidWlsZFByZWdhbWVUaXRsZSgpO1xuICAgICAgICBjb25zdCBnYW1lU2VsZWN0aW9uQnV0dG9ucyA9IGJ1aWxkU2VsZWN0QnV0dG9ucygpO1xuICAgICAgICBwcmVnYW1lQ29udGFpbmVyLmFwcGVuZCh0aXRsZSwgZ2FtZVNlbGVjdGlvbkJ1dHRvbnMpO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkUHJlZ2FtZVRpdGxlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KFwiaDFcIiwgXCJ0aXRsZVwiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkJhdHRsZXNoaXBcIjtcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkU2VsZWN0QnV0dG9ucyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcImJ1dHRvbiBjb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHNpbmdsZVBsYXllckJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIixcInNpbmdsZSBidXR0b25cIik7XG4gICAgICAgIHNpbmdsZVBsYXllckJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2luZ2xlIFBsYXllclwiXG4gICAgICAgIGNvbnN0IGRvdWJsZVBsYXllckJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJkb3VibGUgYnV0dG9uXCIpO1xuICAgICAgICBkb3VibGVQbGF5ZXJCdXR0b24udGV4dENvbnRlbnQgPSBcIkhvdHNlYXQgVHdvIFBsYXllclwiXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoc2luZ2xlUGxheWVyQnV0dG9uLCBkb3VibGVQbGF5ZXJCdXR0b24pO1xuICAgICAgICByZXR1cm4gYnV0dG9uQ29udGFpbmVyO1xuICAgIH1cblxuICAgIC8vIHRoaXMgc2hvdWxkIHJlbmRlciBhZnRlciBnYW1lIHNlbGVjdGlvbiBidXR0b25cbiAgICAvLyBpZiBhbiBleGlzdGluZyBmb3JtIGlzIHRoZXJlLCBvbmx5IGNoYW5nZSBpbnB1dHNcbiAgICBjb25zdCByZW5kZXJQbGF5ZXJOYW1lRm9ybSA9IGZ1bmN0aW9uKGlzU2luZ2xlUGxheWVyKXtcbiAgICAgICAgY29uc3QgbmV3SW5wdXRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJpbnB1dCBjb250YWluZXJcIik7XG4gICAgICAgIGlmIChpc1NpbmdsZVBsYXllcil7XG4gICAgICAgICAgICBuZXdJbnB1dENvbnRhaW5lci5hcHBlbmQoYnVpbGROYW1lSW5wdXQoXCJXaGF0IGlzIHlvdXIgbmFtZT9cIikpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBuZXdJbnB1dENvbnRhaW5lci5hcHBlbmQoYnVpbGROYW1lSW5wdXQoXCJFbnRlciBwbGF5ZXIgMSBuYW1lLi4uXCIpKTtcbiAgICAgICAgICAgIG5ld0lucHV0Q29udGFpbmVyLmFwcGVuZChidWlsZE5hbWVJbnB1dChcIkVudGVyIHBsYXllciAyIG5hbWUuLi5cIikpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLmNvbnRhaW5lclwiKTtcbiAgICAgICAgaWYgKGZvcm1Db250YWluZXIgPT0gbnVsbCl7XG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImZvcm1cIixcImZvcm0gY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmQobmV3SW5wdXRDb250YWluZXIpO1xuICAgICAgICAgICAgY29uc3QgcHJlZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZ2FtZS5jb250YWluZXJcIik7XG4gICAgICAgICAgICBwcmVnYW1lQ29udGFpbmVyLmFwcGVuZChmb3JtQ29udGFpbmVyKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgLy8ganVzdCByZXBsYWNlIGlucHV0IGNvbnRhaW5lciBpZiBmb3JtIGFscmVhZHkgZXhpc3RzXG4gICAgICAgICAgICBjb25zdCBvbGRJbnB1dENvbnRhaW5lciA9IGZvcm1Db250YWluZXIucXVlcnlTZWxlY3RvcihcIi5pbnB1dC5jb250YWluZXJcIik7XG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLnJlcGxhY2VDaGlsZChuZXdJbnB1dENvbnRhaW5lciwgb2xkSW5wdXRDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgZXhpc3RpbmcgYnV0dG9uIGV4aXN0cywgcmVwbGFjZSBpdFxuICAgIGNvbnN0IHJlbmRlckZvcm1CdXR0b24gPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLmNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3Qgb2xkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLnN1Ym1pdFwiKTtcbiAgICAgICAgaWYgKG9sZEJ1dHRvbiAhPSBudWxsKXtcbiAgICAgICAgICAgIGZvcm1Db250YWluZXIucmVtb3ZlQ2hpbGQob2xkQnV0dG9uKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiZm9ybSBzdWJtaXRcIik7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTGV0J3MgUGxheSFcIjtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmQoYnV0dG9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBidWlsZE5hbWVJbnB1dCA9IGZ1bmN0aW9uKHBsYWNlaG9sZGVyU3RyaW5nKXtcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFwibmFtZSBpbnB1dFwiKTtcbiAgICAgICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIixwbGFjZWhvbGRlclN0cmluZyk7XG4gICAgICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgMjApO1xuICAgICAgICByZXR1cm4gbmFtZUlucHV0O1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50VHlwZSwgY2xhc3NTdHJpbmcgPSB1bmRlZmluZWQpe1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICAgICAgICBpZiAoY2xhc3NTdHJpbmcgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc1N0cmluZy5zcGxpdChcIiBcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybntcbiAgICAgICAgaW5pdEdhbWVSZW5kZXIsXG4gICAgICAgIHJlbmRlck5ld1NoaXAsXG4gICAgICAgIHJlbmRlckF0dGFja2VkLFxuICAgICAgICByZW5kZXJUdXJuU3dpdGNoVG8sXG4gICAgICAgIHJlbmRlckVuZEdhbWUsXG4gICAgICAgIHJlbmRlclN0YWdpbmcsXG4gICAgICAgIHJlbmRlclNoaXBTYW1wbGVzLFxuICAgICAgICByZW5kZXJNb3ZlU2hpcCxcbiAgICAgICAgcmVuZGVyU3RhZ2luZ0J1dHRvbnMsXG4gICAgICAgIHRvZ2dsZUJvYXJkVmlzaWJpbGl0eSxcbiAgICAgICAgcmVuZGVyQm9hcmRSZXNldCxcbiAgICAgICAgcmV2ZWFsRGlhbG9nV2l0aFRleHQsXG4gICAgICAgIHJlbmRlclByZWdhbWUsXG4gICAgICAgIHJlbmRlclBsYXllck5hbWVGb3JtLFxuICAgICAgICByZW5kZXJGb3JtQnV0dG9uLFxuICAgICAgICByZW5kZXJUdXJuQ291bnRlcixcbiAgICAgICAgcmVtb3ZlRW5kR2FtZUNvbnRhaW5lcixcbiAgICB9XG5cbn0oKTtcblxuZXhwb3J0IHtSZW5kZXJNYW5hZ2VyfTsiLCJjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgpe1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICB9XG5cbiAgICBoaXQoKXtcbiAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgfVxuXG4gICAgaXNTdW5rKCl7XG4gICAgICAgIHJldHVybiAodGhpcy5oaXRzID49IHRoaXMubGVuZ3RoKVxuICAgIH1cbn1cblxuZXhwb3J0IHtTaGlwfTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBtb2R1bGUgdG8gbWFuYWdlIGdhbWUgdXNpbmcgZXZlbnQgbGlzdGVuZXJzIHRvIGludGVyYWN0IHdpdGggb2JqZWN0c1xuLy8gY2FsbHMgbWV0aG9kcyBpbiByZW5kZXIuanMgdG8gY2hhbmdlIERPTVxuLy8gcmVhbGlzdGljYWxseSBkb2VzIG5vdCBleHBvcnQgYW55dGhpbmcgc2luY2UgaXQgaXMgYSBkcml2ZXJcblxuaW1wb3J0IHtodW1hblBsYXllciwgY29tcHV0ZXJQbGF5ZXJ9IGZyb20gXCIuL3BsYXllci5qc1wiXG5pbXBvcnQge1JlbmRlck1hbmFnZXJ9IGZyb20gXCIuL3JlbmRlci5qc1wiXG5cbmNvbnN0IEdhbWVNYW5hZ2VyID0gZnVuY3Rpb24oKXtcblxuICAgIGNvbnN0IGFkZE5ld1NoaXAgPSBmdW5jdGlvbihwbGF5ZXIsIC4uLmNvb3Jkcyl7XG4gICAgICAgIHBsYXllci5nYW1lYm9hcmQubmV3U2hpcCguLi5jb29yZHMpO1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlck5ld1NoaXAocGxheWVyLm51bWJlciwuLi5jb29yZHMpO1xuICAgIH1cblxuICAgIC8vIHBhc3NlcyB0dXJuIHRvIHBsYXllciAxIGlmIG51bWJlciA9IDFcbiAgICAvLyBpZiBpdCBpcyBwbGF5ZXIgMSdzIHR1cm4sIHRoZW4gYm9hcmQgMiBzaG91bGQgYmUgQUNUSVZFXG4gICAgY29uc3QgcGFzc1R1cm5UbyA9IGZ1bmN0aW9uKHBsYXllck51bWJlcil7XG4gICAgICAgIGlmIChwbGF5ZXJOdW1iZXIgPT0gMSl7XG4gICAgICAgICAgICBhY3RpdmF0ZUV2ZW50TGlzdGVuZXIocGxheWVycy5wbGF5ZXIyLmJvYXJkRE9NKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgYWN0aXZhdGVFdmVudExpc3RlbmVyKHBsYXllcnMucGxheWVyMS5ib2FyZERPTSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGxheWVyTmFtZSA9IE9iamVjdC52YWx1ZXMocGxheWVycylbcGxheWVyTnVtYmVyLTFdLm5hbWU7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3BsYXllck5hbWV9J3MgVHVybmApO1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlclR1cm5Td2l0Y2hUbyhwbGF5ZXJOdW1iZXIsIHBsYXllck5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGJvYXJkRE9NTm9kZSl7XG4gICAgICAgIGJvYXJkRE9NTm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQm9hcmRDbGljayk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQm9hcmRDbGljayA9IGFzeW5jIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgdHVybkNvdW50ZXIrKztcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgbGV0IHBsYXllck51bWJlciA9IHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwicGxheWVybnVtXCIpO1xuICAgICAgICBsZXQgeSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjb2xcIik7XG4gICAgICAgIGxldCB4ID0gdGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwicm93XCIpO1xuICAgICAgICBsZXQgcGxheWVyT2JqZWN0ID0gcGxheWVyTnVtYmVyID09IDEgPyBwbGF5ZXJzLnBsYXllcjEgOiBwbGF5ZXJzLnBsYXllcjI7XG4gICAgICAgIHBsYXllck9iamVjdC5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbeCx5XSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBSZWNlaXZlZCBhdHRhY2sgYXQgKCR7eH0sJHt5fSkgZm9yIHBsYXllciAke3BsYXllck51bWJlcn1gKTtcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJBdHRhY2tlZCh0YXJnZXQpO1xuICAgICAgICBwbGF5ZXJPYmplY3QuYm9hcmRET00ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUJvYXJkQ2xpY2spO1xuICAgICAgICBhd2FpdCBzaG9ydFNsZWVwKCk7XG4gICAgICAgIGlmIChwbGF5ZXJPYmplY3QuZ2FtZWJvYXJkLmlzQWxsU3VuaygpKXtcbiAgICAgICAgICAgIGVuZEdhbWUocGxheWVyTnVtYmVyKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc1NpbmdsZVBsYXllcil7XG4gICAgICAgICAgICBhd2FpdCBlbXVsYXRlQ29tcHV0ZXJUdXJuKCk7XG4gICAgICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlclR1cm5Db3VudGVyKHR1cm5Db3VudGVyKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgcGFzc1R1cm5UbyhwbGF5ZXJOdW1iZXIpOyAvLyBXZSBwYXNzIHR1cm4gdG8gcGxheWVyJ3MgYm9hcmQgd2UganVzdCBjbGlja2VkXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBlbXVsYXRlQ29tcHV0ZXJUdXJuID0gYXN5bmMgZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJFbXVsYXRpbmcgY29tcHV0ZXIncyB0dXJuXCIpXG4gICAgICAgIGNvbnN0IFtyLGNdID0gcGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5tYWtlRWR1Y2F0ZWRBdHRhY2socGxheWVycy5wbGF5ZXIxKTtcbiAgICAgICAgY29uc3QgaGl0VGFyZ2V0ID0gcGxheWVycy5wbGF5ZXIxLmJvYXJkRE9NLnF1ZXJ5U2VsZWN0b3IoYC5yb3ctJHtyfSBkaXY6bnRoLWNoaWxkKCR7YysxfSlgKVxuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlckF0dGFja2VkKGhpdFRhcmdldCk7XG4gICAgICAgIGlmIChwbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLmlzQWxsU3VuaygpKXtcbiAgICAgICAgICAgIGF3YWl0IHNob3J0U2xlZXAoKTtcbiAgICAgICAgICAgIGVuZEdhbWUoMSk7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGFjdGl2YXRlRXZlbnRMaXN0ZW5lcihwbGF5ZXJzLnBsYXllcjIuYm9hcmRET00pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHR1cm5Db3VudGVyO1xuICAgIGNvbnN0IGluaXRQbGF5ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgdHVybkNvdW50ZXIgPSAxO1xuICAgICAgICAvLyBhc3NpZ24gZXZlbnQgbGlzdGVuZXIgZm9yIGF0dGFja3NcbiAgICAgICAgLy8gbGF0ZXIgbWFrZSBmaXJzdCB0dXJuIHJhbmRvbSBvciBjaG9zZW5cbiAgICAgICAgcGxheWVycy5wbGF5ZXIyLmJvYXJkRE9NLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgICAgICBwYXNzVHVyblRvKDEpO1xuICAgICAgICBpZiAoaXNTaW5nbGVQbGF5ZXIpe1xuICAgICAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJUdXJuQ291bnRlcih0dXJuQ291bnRlcik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcbiAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuXG4gICAgbGV0IHBsYXllcnM7XG4gICAgbGV0IGlzU2luZ2xlUGxheWVyO1xuICAgIGNvbnN0IGluaXRHYW1lID0gZnVuY3Rpb24ocGxheWVyMU5hbWUgPSBcIlBsYXllciAxXCIsIHBsYXllcjJOYW1lID0gXCJQbGF5ZXIgMlwiKXtcbiAgICAgICAgY29uc3QgcGxheWVyMSA9IG5ldyBodW1hblBsYXllcihwbGF5ZXIxTmFtZSwgMSk7XG4gICAgICAgIGxldCBwbGF5ZXIyO1xuICAgICAgICBpZiAocGxheWVyMk5hbWUgPT0gZmFsc2Upe1xuICAgICAgICAgICAgcGxheWVyMiA9IG5ldyBjb21wdXRlclBsYXllcigyKTtcbiAgICAgICAgICAgIGlzU2luZ2xlUGxheWVyID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgcGxheWVyMiA9IG5ldyBodW1hblBsYXllcihwbGF5ZXIyTmFtZSwgMik7XG4gICAgICAgICAgICBpc1NpbmdsZVBsYXllciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFJlbmRlck1hbmFnZXIuaW5pdEdhbWVSZW5kZXIocGxheWVyMSwgcGxheWVyMik7XG4gICAgICAgIGNvbnN0IGJvYXJkMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtYW5kLWhlYWRlci5wbGF5ZXItMSAuYm9hcmQuY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBib2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLWFuZC1oZWFkZXIucGxheWVyLTIgLmJvYXJkLmNvbnRhaW5lclwiKTtcbiAgICAgICAgcGxheWVyMS5ib2FyZERPTSA9IGJvYXJkMTtcbiAgICAgICAgcGxheWVyMi5ib2FyZERPTSA9IGJvYXJkMjtcbiAgICAgICAgLy8gZWFjaCBwbGF5ZXIgaGFzIDUgc2hpcHMgb2Ygc2l6ZSAyLCAzLCAzLCA0LCA1XG4gICAgICAgIHBsYXllcnMgPSB7cGxheWVyMSwgcGxheWVyMn07XG4gICAgICAgIGVudGVyR2FtZVN0YWdpbmcoKTtcbiAgICAgICAgLy9qdXN0IGZvciB0ZXN0aW5nIVxuICAgICAgICAvL2NvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudWkuY29udGFpbmVyXCIpO1xuICAgICAgICAvL2hlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZW5kR2FtZSgxKSlcbiAgICB9O1xuXG4gICAgLy8gcGxheWVyIHdpdGggcGxheWVyTnVtYmVyIGxvc3RcbiAgICBjb25zdCBlbmRHYW1lID0gZnVuY3Rpb24ocGxheWVyTnVtYmVyKXtcbiAgICAgICAgbGV0IHdpbm5lck5hbWU7XG4gICAgICAgIGlmIChwbGF5ZXJOdW1iZXIgPT0xKXtcbiAgICAgICAgICAgIHdpbm5lck5hbWUgPSBwbGF5ZXJzLnBsYXllcjIubmFtZTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgd2lubmVyTmFtZSA9IHBsYXllcnMucGxheWVyMS5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIFJlbmRlck1hbmFnZXIucmVuZGVyRW5kR2FtZSh3aW5uZXJOYW1lKTtcbiAgICAgICAgYWN0aXZhdGVSZXBsYXlCdXR0b24oKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZVJlcGxheUJ1dHRvbiA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IHJlcGxheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuZW5kLmNvbnRhaW5lciBidXR0b25cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcGxheUJ1dHRvbik7XG4gICAgICAgIHJlcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgUmVuZGVyTWFuYWdlci5yZW1vdmVFbmRHYW1lQ29udGFpbmVyKCk7XG4gICAgICAgICAgICBlbnRlckdhbWVTdGFnaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBTVEFSVCBPRiBDT0RFIFJFTEFURUQgVE8gR0FNRSBTVEFHSU5HXG4gICAgY29uc3QgZW50ZXJHYW1lU3RhZ2luZyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIGFjdGl2YXRlIGRyYWcgYW5kIGRyb3Agb2Ygc2hpcHMgdG8gY2hvb3NlIHNoaXAgbG9jYXRpb24gdXNpbmcgSFRNTCBkcmFnIGFuZCBkcm9wIEFQSSFcbiAgICAgICAgY29uc29sZS5sb2coXCJFbnRlcmluZyBuZXcgZ2FtZSBzdGFnaW5nIVwiKVxuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlclN0YWdpbmcoXG4gICAgICAgICAgICBwbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLmdldEF0dGFja01hcCgpLFxuICAgICAgICAgICAgcGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5nZXRCb2FyZE1hcCgpLFxuICAgICAgICAgICAgcGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5nZXRBdHRhY2tNYXAoKSxcbiAgICAgICAgICAgIHBsYXllcnMucGxheWVyMi5nYW1lYm9hcmQuZ2V0Qm9hcmRNYXAoKVxuICAgICAgICApO1xuICAgICAgICBwbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgICAgICAgcGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5yZXNldEJvYXJkKCk7XG4gICAgICAgIGFjdGl2YXRlU3RhZ2luZyhwbGF5ZXJzLnBsYXllcjEpXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVTdGFnaW5nID0gZnVuY3Rpb24ocGxheWVyKXtcbiAgICAgICAgY29uc3QgYm9hcmQxID0gcGxheWVyLmJvYXJkRE9NO1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnRvZ2dsZUJvYXJkVmlzaWJpbGl0eShib2FyZDEpO1xuICAgICAgICByZW5kZXJEcmFnZ2FibGVTaGlwc1RvU3RhZ2UocGxheWVyKTtcbiAgICAgICAgYWN0aXZhdGVEcm9wQW5kRHJhZ1N0YXJ0SGFuZGxlcihib2FyZDEpO1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlclN0YWdpbmdCdXR0b25zKGJvYXJkMSk7XG4gICAgICAgIGFjdGl2YXRlU3RhZ2luZ0J1dHRvbnMocGxheWVyKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJEcmFnZ2FibGVTaGlwc1RvU3RhZ2UgPSBmdW5jdGlvbihwbGF5ZXIpe1xuICAgICAgICBhZGROZXdTaGlwV2l0aERyYWdnaW5nKHBsYXllcixbMCwwXSxbMCwxXSlcbiAgICAgICAgYWRkTmV3U2hpcFdpdGhEcmFnZ2luZyhwbGF5ZXIsWzMsM10sWzQsM10sWzUsM10pO1xuICAgICAgICBhZGROZXdTaGlwV2l0aERyYWdnaW5nKHBsYXllcixbNyw3XSxbOCw3XSxbOSw3XSk7XG4gICAgICAgIGFkZE5ld1NoaXBXaXRoRHJhZ2dpbmcocGxheWVyLFswLDNdLCBbMCw0XSxbMCw1XSxbMCw2XSk7XG4gICAgICAgIGFkZE5ld1NoaXBXaXRoRHJhZ2dpbmcocGxheWVyLFs1LDVdLCBbNiw1XSxbNyw1XSxbOCw1XSxbOSw1XSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkTmV3U2hpcFdpdGhEcmFnZ2luZyA9IGZ1bmN0aW9uKHBsYXllciwgLi4uY29vcmRzKXtcbiAgICAgICAgYWRkTmV3U2hpcChwbGF5ZXIsIC4uLmNvb3Jkcyk7XG4gICAgICAgIHNldFNwZWNpZmljRHJhZ2dhYmxlKHBsYXllci5ib2FyZERPTSwgLi4uY29vcmRzKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRTcGVjaWZpY0RyYWdnYWJsZSA9IGZ1bmN0aW9uKGJvYXJkRE9NLCAuLi5jb29yZHMpe1xuICAgICAgICBmb3IgKGxldCBbeCx5XSBvZiBjb29yZHMpe1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gYm9hcmRET00ucXVlcnlTZWxlY3RvcihgLnJvdy0ke3h9IGRpdjpudGgtY2hpbGQoJHt5KzF9KWApO1xuICAgICAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlU3RhZ2luZ0J1dHRvbnMgPSBmdW5jdGlvbihwbGF5ZXIpe1xuICAgICAgICBjb25zdCBib2FyZERPTSA9IHBsYXllci5ib2FyZERPTTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gYm9hcmRET00ubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0Q2hpbGQ7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY29tcGxldGVTdGFnaW5nKGJvYXJkRE9NKSlcbiAgICAgICAgY29uc3Qgcm5nQnV0dG9uID0gYnV0dG9uLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgcm5nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiByYW5kb21pemVCb2FyZChwbGF5ZXIpKTtcbiAgICB9XG5cbiAgICBjb25zdCByYW5kb21pemVCb2FyZCA9IGZ1bmN0aW9uKHBsYXllcil7XG4gICAgICAgIFJlbmRlck1hbmFnZXIucmVuZGVyQm9hcmRSZXNldChwbGF5ZXIuZ2FtZWJvYXJkLmdldEF0dGFja01hcCgpLFxuICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLmdldEJvYXJkTWFwKCksIHBsYXllci5ib2FyZERPTSk7XG4gICAgICAgIGNvbnN0IHJhbmRvbUNvb3JkcyA9IHBsYXllci5nYW1lYm9hcmQucmFuZG9taXplQm9hcmQoKTtcbiAgICAgICAgLy8gcmFuZG9tQ29vcmRzIGlzIHtjb29yZHMxLCBjb29yZHMyLCAuLi4gY29vcmRzNX0gd2hlcmUgZWFjaCBjb29yZHMgaXMgYW4gYXJyYXkgb2YgW3gseV1zXG4gICAgICAgIGZvciAobGV0IGNvb3Jkc0FycmF5IG9mIE9iamVjdC52YWx1ZXMocmFuZG9tQ29vcmRzKSl7XG4gICAgICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlck5ld1NoaXAocGxheWVyLm51bWJlciwgLi4uY29vcmRzQXJyYXkpO1xuICAgICAgICAgICAgc2V0U3BlY2lmaWNEcmFnZ2FibGUocGxheWVyLmJvYXJkRE9NLCAuLi5jb29yZHNBcnJheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZVN0YWdpbmcgPSBhc3luYyBmdW5jdGlvbihib2FyZERPTSl7XG4gICAgICAgIGRlYWN0aXZhdGVTdGFnaW5nKGJvYXJkRE9NKTtcbiAgICAgICAgaWYgKGJvYXJkRE9NLmdldEF0dHJpYnV0ZShcInBsYXllcm51bVwiKSA9PSBcIjFcIiAmJiAhaXNTaW5nbGVQbGF5ZXIpe1xuICAgICAgICAgICAgUmVuZGVyTWFuYWdlci5yZXZlYWxEaWFsb2dXaXRoVGV4dChgTGV0ICR7cGxheWVycy5wbGF5ZXIyLm5hbWV9IHNldCB1cC5gKTtcbiAgICAgICAgICAgIGFjdGl2YXRlU3RhZ2luZyhwbGF5ZXJzLnBsYXllcjIpO1xuICAgICAgICB9IGVsc2UgaWYgKCFpc1NpbmdsZVBsYXllcil7XG4gICAgICAgICAgICBpbml0UGxheSgpO1xuICAgICAgICAgICAgUmVuZGVyTWFuYWdlci5yZXZlYWxEaWFsb2dXaXRoVGV4dChgJHtwbGF5ZXJzLnBsYXllcjEubmFtZX0ncyB0dXJuIGZpcnN0LmApO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAvLyB0aGlzIGNhc2UgaXMgd2hlbiBpdCBpcyBhIHNpbmdsZSBwbGF5ZXIgZ2FtZVxuICAgICAgICAgICAgcmFuZG9taXplQm9hcmQocGxheWVycy5wbGF5ZXIyKTtcbiAgICAgICAgICAgIGluaXRQbGF5KCk7XG4gICAgICAgICAgICBSZW5kZXJNYW5hZ2VyLnJldmVhbERpYWxvZ1dpdGhUZXh0KGBZb3VyIHR1cm4gZmlyc3QuYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkZWFjdGl2YXRlU3RhZ2luZyA9IGZ1bmN0aW9uKGJvYXJkRE9NKXtcbiAgICAgICAgUmVuZGVyTWFuYWdlci50b2dnbGVCb2FyZFZpc2liaWxpdHkoYm9hcmRET00pO1xuICAgICAgICBjb25zdCBidXR0b25BcmVhID0gYm9hcmRET00ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBidXR0b25BcmVhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYnV0dG9uQXJlYSk7XG4gICAgICAgIGNvbnN0IHJvd3MgPSBib2FyZERPTS5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDEwOyBpKyspe1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gcm93c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZXMgPSByb3cuY2hpbGRyZW47XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8MTA7IGorKyl7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gc3F1YXJlc1tqXTtcbiAgICAgICAgICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIG9uZHJhZ292ZXJIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZHJvcEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGRyYWdzdGFydEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5yZW1vdmVBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0YXJnZXQgaXMgPGRpdiBjb2w9XCJcIj4gKGVnOiBzcXVhcmUpXG4gICAgY29uc3QgZHJhZ3N0YXJ0SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgY29uc29sZS5sb2coXCJkcmFnIGV2ZW50IHRyaWdnZXJlZFwiKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBsZXQgc2hpcExlbmd0aCA9IE51bWJlcih0YXJnZXQuZ2V0QXR0cmlidXRlKFwibGVuZ3RoXCIpKTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJzaGlwTGVuZ3RoXCIsIHNoaXBMZW5ndGgpO1xuICAgICAgICBsZXQgZ3JhYkxvY2F0aW9uID0gTnVtYmVyKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJncmFibG9jYXRpb25cIikpO1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImdyYWJMb2NhdGlvblwiLCBncmFiTG9jYXRpb24pO1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImhvcml6b250YWxcIiwgdGFyZ2V0LmdldEF0dHJpYnV0ZShcImhvcml6b250YWxcIikpO1xuICAgICAgICBsZXQgc3RhcnRSb3cgPSBOdW1iZXIodGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwicm93XCIpKTtcbiAgICAgICAgbGV0IHN0YXJ0Q29sID0gTnVtYmVyKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjb2xcIikpO1xuICAgICAgICBsZXQgaXNIb3Jpem9udGFsID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImhvcml6b250YWxcIik7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwic3RhcnRSb3dcIiwgc3RhcnRSb3cpO1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInN0YXJ0Q29sXCIsIHN0YXJ0Q29sKTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJpc0hvcml6b250YWxcIiwgaXNIb3Jpem9udGFsKVxuICAgICAgICBjb25zdCB3aWR0aE9mRGl2ID0gMjA7XG4gICAgICAgIGNvbnN0IHdpZHRoT2ZHYXAgPSAxO1xuICAgICAgICAvLyBpZiBncmFibG9jYXRpb24gPSAwLCBkb24ndCBhZGQgYW55dGhpbmdcbiAgICAgICAgLy8gaWYgZ3JhYmxvY2F0aW9uID0gMSwgYWRkIDEgZ2FwIGFuZCAxIGRpdlxuICAgICAgICAvLyBpZiBncmFibG9jYXRpb24gPSAyLCBhZGQgMiBnYXBzIGFuZCAyIGRpdnNcbiAgICAgICAgbGV0IGFkZE9mZnNldFggPSAwO1xuICAgICAgICBsZXQgYWRkT2Zmc2V0WSA9IDA7XG4gICAgICAgIGxldCBkcmFnSW1hZ2VOb2RlO1xuICAgICAgICBpZiAoaXNIb3Jpem9udGFsID09IFwidHJ1ZVwiKXtcbiAgICAgICAgICAgIGRyYWdJbWFnZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaGlkZGVuLnNhbXBsZXMgLnNoaXBzLmhvcml6b250YWwgI2xlbmd0aC0ke3NoaXBMZW5ndGh9YCk7XG4gICAgICAgICAgICBhZGRPZmZzZXRYID0gKGdyYWJMb2NhdGlvbiAqICh3aWR0aE9mRGl2K3dpZHRoT2ZHYXApKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgZHJhZ0ltYWdlTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5oaWRkZW4uc2FtcGxlcyAuc2hpcHMudmVydGljYWwgI2xlbmd0aC0ke3NoaXBMZW5ndGh9YCk7XG4gICAgICAgICAgICBhZGRPZmZzZXRZID0gKGdyYWJMb2NhdGlvbiAqICh3aWR0aE9mRGl2K3dpZHRoT2ZHYXApKVxuICAgICAgICB9XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoZHJhZ0ltYWdlTm9kZSxldmVudC5vZmZzZXRYICsgYWRkT2Zmc2V0WCxldmVudC5vZmZzZXRZK2FkZE9mZnNldFkpO1xuICAgICAgICAvLyBkeW5hbWljYWxseSBhbGxvdyB3aGVyZSB3ZSBjYW4gZHJvcCB3aXRoIG9uZHJhZ292ZXIgYXR0cmlidXRlXG4gICAgICAgIGNvbnN0IHBsYXllck51bSA9IHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwicGxheWVybnVtXCIpO1xuICAgICAgICBsZXQgcGxheWVyVmFyO1xuICAgICAgICBpZiAocGxheWVyTnVtID09MSl7XG4gICAgICAgICAgICBwbGF5ZXJWYXIgPSBwbGF5ZXJzLnBsYXllcjE7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHBsYXllclZhciA9IHBsYXllcnMucGxheWVyMjtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInBsYXllcm51bVwiLCBwbGF5ZXJOdW0pO1xuICAgICAgICBjb25zdCBzaGlwT2JqZWN0ID0gcGxheWVyVmFyLmdhbWVib2FyZC5nZXRTaGlwRnJvbUNvb3Jkcyhbc3RhcnRSb3csIHN0YXJ0Q29sXSk7XG4gICAgICAgIHBsYXllclZhci5nYW1lYm9hcmQuY3JlYXRlQWxsb3dlZFBvc2l0aW9uTWFwKHNoaXBPYmplY3QsIGlzSG9yaXpvbnRhbCwgZ3JhYkxvY2F0aW9uKTtcbiAgICAgICAgYWN0aXZhdGVPbmRyYWdvdmVyKHBsYXllclZhcik7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVPbmRyYWdvdmVyID0gZnVuY3Rpb24ocGxheWVyKXtcbiAgICAgICAgY29uc3Qgcm93cyA9IHBsYXllci5ib2FyZERPTS5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDEwOyBpKyspe1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gcm93c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZXMgPSByb3cuY2hpbGRyZW47XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8MTA7IGorKyl7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gc3F1YXJlc1tqXTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGAke3BsYXllci5nYW1lYm9hcmQuaXNUaGlzQWxsb3dlZFBsYWNlbWVudChbaSxqXSl9YClcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5pc1RoaXNBbGxvd2VkUGxhY2VtZW50KFtpLGpdKSl7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgb25kcmFnb3ZlckhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBkcmFnb3ZlciBhbGxvd2VkIG9uIFske2l9LCAke2p9XWApXG4gICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIG9uZHJhZ292ZXJIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgZHJhZ292ZXIgbm90IGFsbG93ZWQgb24gWyR7aX0sICR7an1dYClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZURyb3BBbmREcmFnU3RhcnRIYW5kbGVyID0gZnVuY3Rpb24ocGxheWVyQm9hcmQpe1xuICAgICAgICBmb3IgKGxldCByb3cgb2YgcGxheWVyQm9hcmQuY2hpbGRyZW4pe1xuICAgICAgICAgICAgZm9yIChsZXQgY29sIG9mIHJvdy5jaGlsZHJlbil7XG4gICAgICAgICAgICAgICAgY29sLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGRyb3BIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBjb2wuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnc3RhcnRIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9uZHJhZ292ZXJIYW5kbGVyID0gZnVuY3Rpb24oZXYpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImRyYWdvdmVyIGRldGVjdGVkIVwiKVxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGRyb3BIYW5kbGVyID0gZnVuY3Rpb24oZXYpe1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCByb3cgPSBOdW1iZXIoZXYudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwicm93XCIpKTtcbiAgICAgICAgY29uc3QgY29sID0gTnVtYmVyKGV2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjb2xcIikpO1xuICAgICAgICBsZXQgbmV3U3RhcnRSb3cgPSByb3c7XG4gICAgICAgIGxldCBvbGRTdGFydFJvdyA9IE51bWJlcihldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInN0YXJ0Um93XCIpKTtcbiAgICAgICAgbGV0IG5ld1N0YXJ0Q29sID0gY29sO1xuICAgICAgICBsZXQgb2xkU3RhcnRDb2wgPSBOdW1iZXIoZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJzdGFydENvbFwiKSk7XG4gICAgICAgIGNvbnN0IGdyYWJMb2NhdGlvbiA9IE51bWJlcihldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImdyYWJMb2NhdGlvblwiKSk7XG4gICAgICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiaXNIb3Jpem9udGFsXCIpO1xuICAgICAgICBpZiAoaXNIb3Jpem9udGFsID09IFwidHJ1ZVwiKXtcbiAgICAgICAgICAgIG5ld1N0YXJ0Q29sIC09IGdyYWJMb2NhdGlvbjtcbiAgICAgICAgICAgIG9sZFN0YXJ0Q29sIC09IGdyYWJMb2NhdGlvbjtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgbmV3U3RhcnRSb3cgLT0gZ3JhYkxvY2F0aW9uO1xuICAgICAgICAgICAgb2xkU3RhcnRSb3cgLT0gZ3JhYkxvY2F0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBsYXllck51bSA9IGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwicGxheWVybnVtXCIpO1xuICAgICAgICBsZXQgcGxheWVyO1xuICAgICAgICBpZiAocGxheWVyTnVtID09MSl7XG4gICAgICAgICAgICBwbGF5ZXIgPSBwbGF5ZXJzLnBsYXllcjE7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHBsYXllciA9IHBsYXllcnMucGxheWVyMjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gTnVtYmVyKGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwic2hpcExlbmd0aFwiKSk7XG4gICAgICAgIC8vIGNoYW5nZSB0aGUgZ2FtZWJvYXJkIGRhdGFcbiAgICAgICAgcGxheWVyLmdhbWVib2FyZC5tb3ZlU2hpcChwbGF5ZXIuZ2FtZWJvYXJkLmdldFNoaXBGcm9tQ29vcmRzKFtvbGRTdGFydFJvdyxvbGRTdGFydENvbF0pLFxuICAgICAgICBbbmV3U3RhcnRSb3csbmV3U3RhcnRDb2xdLCBzaGlwTGVuZ3RoLCBpc0hvcml6b250YWwpO1xuICAgICAgICAvLyByZW5kZXIgY2hhbmdlcyBhbmQgYWxzbyBtYW5hZ2VzIGRyYWdnYWJsZVxuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlck1vdmVTaGlwKFtvbGRTdGFydFJvdyxvbGRTdGFydENvbF0sXG4gICAgICAgIFtuZXdTdGFydFJvdyxuZXdTdGFydENvbF0sIHNoaXBMZW5ndGgsIGlzSG9yaXpvbnRhbCwgcGxheWVyLmJvYXJkRE9NKTtcbiAgICB9XG4gICAgLy8gRU5EIE9GIENPREUgUkVMQVRFRCBUTyBTVEFHSU5HXG5cbiAgICBjb25zdCBzaG9ydFNsZWVwID0gZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSk7XG4gICAgfVxuXG4gICAgLy8gUHJlZ2FtZSBjb2RlIChsaWtlIHdoZXJlIHlvdSBwdXQgcGxheWVyIG5hbWVzIGFuZCBjaG9vc2UgZ2FtZSB0eXBlKVxuICAgIGNvbnN0IGluaXRQcmVnYW1lID0gZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gcmVuZGVycyB0aXRsZSwgZ2FtZSBtb2RlIHNlbGVjdGlvbiwgZm9ybSBmb3IgbmFtZXMsIGJ1dHRvbiB0byBzdGFydFxuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlclByZWdhbWUoKTtcbiAgICAgICAgYWN0aXZhdGVQcmVnYW1lQnV0dG9ucygpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlUHJlZ2FtZUJ1dHRvbnMgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBidXR0b25zQXJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmVnYW1lLmNvbnRhaW5lciAuYnV0dG9uLmNvbnRhaW5lciAuYnV0dG9uXCIpO1xuICAgICAgICBidXR0b25zQXJyWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBoYW5kbGVQcmVnYW1lQnV0dG9uQ2xpY2sodHJ1ZSkpO1xuICAgICAgICBidXR0b25zQXJyWzFdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBoYW5kbGVQcmVnYW1lQnV0dG9uQ2xpY2soZmFsc2UpKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQcmVnYW1lQnV0dG9uQ2xpY2sgPSBmdW5jdGlvbihpc1NpbmdsZVBsYXllcil7XG4gICAgICAgIFJlbmRlck1hbmFnZXIucmVuZGVyUGxheWVyTmFtZUZvcm0oaXNTaW5nbGVQbGF5ZXIpO1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlckZvcm1CdXR0b24oaXNTaW5nbGVQbGF5ZXIpO1xuICAgICAgICBhY3RpdmF0ZUZvcm1CdXR0b25zKGlzU2luZ2xlUGxheWVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZUZvcm1CdXR0b25zID0gZnVuY3Rpb24oaXNTaW5nbGVQbGF5ZXIpe1xuICAgICAgICBjb25zdCBmb3JtU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVnYW1lLmNvbnRhaW5lciAuZm9ybS5zdWJtaXRcIik7XG4gICAgICAgIGZvcm1TdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4gaGFuZGxlRm9ybVN1Ym1pdChldmVudCxpc1NpbmdsZVBsYXllcikpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBmdW5jdGlvbihldmVudCxpc1NpbmdsZVBsYXllcil7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgbGV0IGZvcm0xVmFsdWUgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLm5hbWUuaW5wdXRcIikudmFsdWU7XG4gICAgICAgIGlmIChmb3JtMVZhbHVlID09XCJcIil7XG4gICAgICAgICAgICBmb3JtMVZhbHVlID0gXCJQbGF5ZXIgMVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1NpbmdsZVBsYXllcil7XG4gICAgICAgICAgICBpbml0R2FtZShmb3JtMVZhbHVlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZm9ybTJWYWx1ZSA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIubmFtZS5pbnB1dDpudGgtY2hpbGQoMilcIikudmFsdWU7XG4gICAgICAgICAgICBpZiAoZm9ybTJWYWx1ZSA9PVwiXCIpe1xuICAgICAgICAgICAgICAgIGZvcm0yVmFsdWUgPSBcIlBsYXllciAyXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbml0R2FtZShmb3JtMVZhbHVlLGZvcm0yVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyBEUklWRVIgQ09ERVxuICAgIGluaXRQcmVnYW1lKCk7XG5cbiAgICByZXR1cm57XG4gICAgICAgIHBsYXllcnMsXG4gICAgfVxufSgpO1xuXG5leHBvcnQge0dhbWVNYW5hZ2VyfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==