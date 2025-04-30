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
    --hover-board-color: rgb(255, 255, 240);
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

.board.container.active-game:not(.visible){
    > div >div:not(.attacked):hover {
        background-color: var(--hover-board-color);
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --content-color: #D6FFF6;\n    --button-clicked-color: #c3ecc3;\n    --bg-color: rgb(255, 255, 240);\n    --accent-color: #4DCCBD;\n    --attacked-color: #ffc2c2; /*red*/\n    --attacked-and-hit-color: #bffdc2; /*green*/\n    --ship-color: #b3c7ff; /*blue*/\n    --board-background-color: #525252;\n    --board-grid-color: rgb(0, 0, 0);\n    --dialog-background-color: rgb(255, 198, 255);\n    --hover-board-color: rgb(255, 255, 240);\n    font-family:Arial, Helvetica, sans-serif;\n}\n\nh1,h2,h3,p,button{\n    margin:0;\n    padding:0;\n}\n\nbody{\n    background-color: var(--bg-color);\n    display:flex;\n    justify-content:center;\n    align-items:start;\n    height: 80vh;\n}\n\n.pregame.container{\n    margin-top: 30vh;\n\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n\n    .title{\n        font-weight: bolder;\n        font-size: 500;\n    }\n\n    .button.container{\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-auto-rows: min-content;\n        gap: 5px;\n\n        button.single{\n            grid-column: 1 / 2;\n            grid-row: 1/2;\n        }\n\n        button.double{\n            grid-column: 2 / 3;\n            grid-row: 1/2;\n        }\n    }\n\n    form{\n        margin-top: 20px;\n        display: flex;\n        flex-direction: column;\n        gap: 3px;\n\n        .input.container{\n            display:flex;\n            flex-direction: row;\n            gap: 3px;\n\n            input{\n                padding: 12px 20px;\n                border: 2px solid var(--board-background-color);\n                border-radius: 24px;\n            }\n        }\n\n        button{\n            width: max-content;\n            align-self: center;\n        }\n    }\n}\n\nbutton{\n    background-color: var(--content-color);\n    padding: 12px 28px;\n    border: 2px solid var(--accent-color);\n    color: black;\n    border-radius: 2px;\n}\n\nbutton:hover{\n    background-color: var(--accent-color);\n    transition-duration: 200ms;\n    color: white;\n}\n\nbutton:active{\n    border: 2px solid var(--content-color);\n    transition-duration: 1ms;\n}\n\n.game.container{\n    margin-top: 15vh;\n\n    display:grid;\n    grid-template-rows: max-content 1fr;\n    grid-template-columns: 1fr 1fr;\n    width: min-content; /* Need to do this to keep board symmetric but still expanded for long names*/\n    gap: 12px 36px;\n    align-items: start;\n\n    /* grid area is r / c / r / c */\n    .ui.container{\n        grid-area: 1 / 1 / 2 / 3;\n        justify-self:center;\n    }\n\n    .board-and-header.container{\n        width:fit-content;\n        display:flex;\n        flex-direction:column;\n        gap: 12px;\n        justify-content: center;\n        align-items: center;\n\n        .board.header{\n            word-wrap: break-word;\n            margin-top: 24px;\n            height: 48px;\n            vertical-align:middle;\n        }\n\n        .button.container{\n            width: min-content;\n            justify-self: center;\n            display:flex;\n            flex-direction: column;\n            gap: 3px;\n        }\n\n        button{\n            width: 163px;\n        }\n    }\n\n    .board-and-header.container.player-1{\n        grid-area: 2 / 1 / 3 / 2;\n        justify-self: end;\n    }\n\n    .board-and-header.container.player-2{\n        grid-area: 2 / 2 / 3 / 3;\n        justify-self: start;\n    }\n\n    h2{\n        text-align: center;\n        text-wrap: wrap;\n    }\n\n    .hidden.samples{\n        grid-area: 3 / 1 / 4 / 3;\n    }\n\n    .end.container{\n        grid-column: 1/3;\n\n        display:flex;\n        flex-direction:column;\n        text-align: center;\n        align-items:center;\n        gap: 12px;\n\n        button{\n            width: 60%;\n        }\n    }\n}\n\n.board.container{\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    width: min-content;\n    background-color: var(--board-grid-color);\n\n    > div{\n        display: flex;\n        flex-direction: row;\n        gap: 1px;\n\n        div{\n            aspect-ratio: 1/1;\n            height: 20px;\n            background-color:var(--board-background-color);\n        }\n\n        .ship.attacked{\n            background-color: var(--attacked-and-hit-color);\n        }\n\n        .attacked{\n            background-color: var(--attacked-color);\n        }\n    }\n}\n\n.board.container.visible{\n    .ship{\n        background-color: var(--ship-color);\n    }\n}\n\n.board.container.active-game:not(.visible){\n    > div >div:not(.attacked):hover {\n        background-color: var(--hover-board-color);\n    }\n}\n\n/* style ships off board during staging */\n.hidden.samples{\n    width:0px;\n    > div{\n        display: flex;\n        gap: 3px;\n        flex-direction: column;\n\n        > div{\n            background-color: var(--board-grid-color);\n            width: min-content;\n            display: flex;\n            flex-direction: row;\n            gap: 1px;\n        \n            div{\n                aspect-ratio: 1/1;\n                height: 20px;\n                background-color:var(--ship-color);\n            }\n        }\n    }\n\n    .vertical > div{\n        flex-direction: column;\n    }\n}\n\n.hidden.samples{\n    transform: translate(-999px, 0px);\n}\n\n/* style dialog */\n::backdrop{\n    background-color: var(--dialog-background-color);\n}\n\ndialog{\n    text-align: center;\n}"],"sourceRoot":""}]);
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
        header.textContent = "Drag and drop to set up!";
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
        players.player1.boardDOM.classList.add("active-game");
        players.player2.boardDOM.classList.add("active-game");
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
        players.player1.boardDOM.classList.remove("active-game");
        players.player2.boardDOM.classList.remove("active-game");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixZQUFZLGFBQWEsYUFBYSxhQUFhLHVCQUF1Qix1QkFBdUIsdUJBQXVCLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLGFBQWEsWUFBWSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsWUFBWSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFlBQVksS0FBSyxVQUFVLFlBQVksWUFBWSxLQUFLLGFBQWEsY0FBYyxjQUFjLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcs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QUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBYTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQWE7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxxREFBYTtBQUNyQixRQUFRLHFEQUFhO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4uL2xpbmtlZC1saXN0cy9saW5rZWRsaXN0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMaW5rZWRMaXN0IHJlcHJlc2VudHMgZnVsbCBsaXN0XG5jb25zdCBMaW5rZWRMaXN0ID0gZnVuY3Rpb24gKCkge1xuICBsZXQgaGVhZE5vZGUgPSBudWxsO1xuICBjb25zdCBoZWFkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBoZWFkTm9kZTtcbiAgfTtcblxuICBjb25zdCB0YWlsID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgd2hpbGUgKG5vZGUubmV4dE5vZGUgIT0gbnVsbCkge1xuICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIGNvbnN0IGFwcGVuZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmIChoZWFkTm9kZSA9PSBudWxsKSB7XG4gICAgICBoZWFkTm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFpbCgpLm5leHROb2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwcmVwZW5kID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKGhlYWROb2RlID09IG51bGwpIHtcbiAgICAgIGhlYWROb2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkTm9kZSA9IG5ldyBOb2RlKHZhbHVlLCBoZWFkTm9kZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBpZiAoaGVhZE5vZGUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgICBsZXQgbm9kZSA9IGhlYWROb2RlO1xuICAgIHdoaWxlIChub2RlLm5leHROb2RlICE9IG51bGwpIHtcbiAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgICAgY291bnQrKztcbiAgICB9XG4gICAgcmV0dXJuIGNvdW50O1xuICB9O1xuXG4gIC8vIGNvdW50IGluZGV4IGZyb20gMVxuICBjb25zdCBhdCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIGlmIChpbmRleCA8PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IG5vZGUgPSBoZWFkTm9kZTtcbiAgICB3aGlsZSAoaW5kZXggPiAxKSB7XG4gICAgICBub2RlID0gbm9kZS5uZXh0Tm9kZTtcbiAgICAgIGluZGV4LS07XG4gICAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICBjb25zdCBwb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHNlY29uZFRvTGFzdEluZGV4ID0gc2l6ZSgpIC0gMTtcbiAgICBsZXQgc2Vjb25kVG9MYXN0Tm9kZSA9IGF0KHNlY29uZFRvTGFzdEluZGV4KTtcbiAgICBzZWNvbmRUb0xhc3ROb2RlLm5leHROb2RlID0gbnVsbDtcbiAgfTtcblxuICAvLyByZXR1cm5zIHRydWUgaWYgdmFsdWUgcGFzc2VkIGlzIGluIGxpc3QsIGVsc2UgcmV0dXJucyBmYWxzZVxuICBjb25zdCBjb250YWlucyA9IGZ1bmN0aW9uICh2YWx1ZSwgY29tcGFyZUtleSA9IFwidmFsdWVcIikge1xuICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUudmFsdWUgPT0gdmFsdWUgfHwgbm9kZS52YWx1ZVtjb21wYXJlS2V5XSA9PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLy8gcmV0dXJucyBpbmRleCBvZiBub2RlIGNvbnRhaW5pbmcgdmFsdWUsIG9yIG51bGwgaWYgbm90IGZvdW5kXG4gIGNvbnN0IGZpbmQgPSBmdW5jdGlvbiAodmFsdWUsIGNvbXBhcmVLZXkgPSBcInZhbHVlXCIpIHtcbiAgICBsZXQgbm9kZSA9IGhlYWROb2RlO1xuICAgIGxldCBpbmRleCA9IDE7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUudmFsdWUgPT0gdmFsdWUgfHwgbm9kZS52YWx1ZVtjb21wYXJlS2V5XSA9PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0Tm9kZTtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgLy8gcmV0dXJucyBub2RlIGNvbnRhaW5pbmcgdmFsdWUsIG9yIG51bGwgaWYgbm90IGZvdW5kXG4gIC8vIGJ1dCBjaGVja3MgZm9yIG5vZGUuY2FsbGJhY2tmdW5jdGlvbigpIGJlaW5nIGVxdWFsIHRvIHZhbHVlXG4gIGNvbnN0IGZpbmRDYWxsYmFjayA9IGZ1bmN0aW9uICh2YWx1ZSwgY2FsbGJhY2tGdW5jdGlvbikge1xuICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUudmFsdWVbY2FsbGJhY2tGdW5jdGlvbl0oKSA9PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTsgIFxuXG4gIC8vIHNhbWUgYXMgZmluZCwgYnV0IHJldHVybnMgdGhlIG5vZGUsIG5vdCBpbmRleFxuICBjb25zdCBmaW5kTm9kZSA9IGZ1bmN0aW9uICh2YWx1ZSwgY29tcGFyZUtleSA9IFwidmFsdWVcIikge1xuICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUudmFsdWUgPT0gdmFsdWUgfHwgbm9kZS52YWx1ZVtjb21wYXJlS2V5XSA9PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICAvLyByZXR1cm5zIHN0cmluZyBvZiBub2RlIHZhbHVlcyBpbiBmb3JtYXQgXCIodmFsdWUpIC0+ICh2YWx1ZSkgLT4gbnVsbFwiXG4gIGNvbnN0IHRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChoZWFkTm9kZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IHN0cmluZyA9IGAoICR7aGVhZE5vZGUudmFsdWV9IClgO1xuICAgIGxldCBub2RlID0gaGVhZE5vZGUubmV4dE5vZGU7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgc3RyaW5nICs9IGAgLT4gKCAke25vZGUudmFsdWV9IClgO1xuICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgfVxuICAgIHN0cmluZyArPSBcIiAtPiBudWxsXCI7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcblxuICAvLyBpbnNlcnRzIG5ldyBOb2RlIHdpdGggdmFsdWUgYXQgaW5kZXggKGNvdW50aW5nIGZyb20gMSlcbiAgY29uc3QgaW5zZXJ0QXQgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgY29uc3QgcHJpb3JJbmRleCA9IGluZGV4IC0gMTtcbiAgICBpZiAocHJpb3JJbmRleCA9PSAwKSB7XG4gICAgICBwcmVwZW5kKHZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHByaW9yTm9kZSA9IGF0KHByaW9ySW5kZXgpO1xuICAgIGlmIChwcmlvck5vZGUgPT0gbnVsbCkge1xuICAgICAgZXJyb3IubG9nKGAke2luZGV4fSBpcyBub3QgdmFsaWQgaW5kZXguYCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5leHROb2RlID0gcHJpb3JOb2RlLm5leHROb2RlO1xuICAgICAgcHJpb3JOb2RlLm5leHROb2RlID0gbmV3IE5vZGUodmFsdWUsIG5leHROb2RlKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gcmVtb3ZlcyBub2RlIGF0IGluZGV4IChjb3VudGluZyBmcm9tIDEpXG4gIGNvbnN0IHJlbW92ZUF0ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgY29uc3QgcHJpb3JJbmRleCA9IGluZGV4IC0gMTtcbiAgICBpZiAocHJpb3JJbmRleCA9PSAwKSB7XG4gICAgICBsZXQgbm9kZVRvUmVtb3ZlID0gaGVhZE5vZGU7XG4gICAgICBoZWFkTm9kZSA9IGhlYWROb2RlLm5leHROb2RlO1xuICAgICAgbm9kZVRvUmVtb3ZlID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHByaW9yTm9kZSA9IGF0KHByaW9ySW5kZXgpO1xuICAgIGxldCBub2RlVG9SZW1vdmUgPSBwcmlvck5vZGUubmV4dE5vZGU7XG4gICAgY29uc3QgbmV4dE5vZGUgPSBwcmlvck5vZGUubmV4dE5vZGUubmV4dE5vZGU7XG4gICAgcHJpb3JOb2RlLm5leHROb2RlID0gbmV4dE5vZGU7XG4gICAgbm9kZVRvUmVtb3ZlID0gbnVsbDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGhlYWQsXG4gICAgdGFpbCxcbiAgICBhcHBlbmQsXG4gICAgcHJlcGVuZCxcbiAgICBzaXplLFxuICAgIGF0LFxuICAgIHBvcCxcbiAgICBjb250YWlucyxcbiAgICBmaW5kLFxuICAgIHRvU3RyaW5nLFxuICAgIGluc2VydEF0LFxuICAgIHJlbW92ZUF0LFxuICAgIGZpbmROb2RlLFxuICAgIGZpbmRDYWxsYmFjayxcbiAgfTtcbn07XG5cbi8vIE5vZGUgY29udGFpbnMgdmFsdWUgcHJvcGVydHksIG5leHROb2RlXG5cbmNvbnN0IE5vZGUgPSBmdW5jdGlvbiAodmFsdWUgPSBudWxsLCBuZXh0Tm9kZSA9IG51bGwpIHtcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZSxcbiAgICBuZXh0Tm9kZSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IExpbmtlZExpc3QsIE5vZGUgfTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcbiAgICAtLWNvbnRlbnQtY29sb3I6ICNENkZGRjY7XG4gICAgLS1idXR0b24tY2xpY2tlZC1jb2xvcjogI2MzZWNjMztcbiAgICAtLWJnLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI0MCk7XG4gICAgLS1hY2NlbnQtY29sb3I6ICM0RENDQkQ7XG4gICAgLS1hdHRhY2tlZC1jb2xvcjogI2ZmYzJjMjsgLypyZWQqL1xuICAgIC0tYXR0YWNrZWQtYW5kLWhpdC1jb2xvcjogI2JmZmRjMjsgLypncmVlbiovXG4gICAgLS1zaGlwLWNvbG9yOiAjYjNjN2ZmOyAvKmJsdWUqL1xuICAgIC0tYm9hcmQtYmFja2dyb3VuZC1jb2xvcjogIzUyNTI1MjtcbiAgICAtLWJvYXJkLWdyaWQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICAtLWRpYWxvZy1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxOTgsIDI1NSk7XG4gICAgLS1ob3Zlci1ib2FyZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNDApO1xuICAgIGZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbmgxLGgyLGgzLHAsYnV0dG9ue1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6MDtcbn1cblxuYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6c3RhcnQ7XG4gICAgaGVpZ2h0OiA4MHZoO1xufVxuXG4ucHJlZ2FtZS5jb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogMzB2aDtcblxuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuXG4gICAgLnRpdGxle1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICBmb250LXNpemU6IDUwMDtcbiAgICB9XG5cbiAgICAuYnV0dG9uLmNvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XG4gICAgICAgIGdhcDogNXB4O1xuXG4gICAgICAgIGJ1dHRvbi5zaW5nbGV7XG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgICAgICAgICBncmlkLXJvdzogMS8yO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uLmRvdWJsZXtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICAgICAgICAgIGdyaWQtcm93OiAxLzI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3Jte1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDNweDtcblxuICAgICAgICAuaW5wdXQuY29udGFpbmVye1xuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGdhcDogM3B4O1xuXG4gICAgICAgICAgICBpbnB1dHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9hcmQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtY29sb3IpO1xuICAgIHBhZGRpbmc6IDEycHggMjhweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbmJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuYnV0dG9uOmFjdGl2ZXtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb250ZW50LWNvbG9yKTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxbXM7XG59XG5cbi5nYW1lLmNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAxNXZoO1xuXG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7IC8qIE5lZWQgdG8gZG8gdGhpcyB0byBrZWVwIGJvYXJkIHN5bW1ldHJpYyBidXQgc3RpbGwgZXhwYW5kZWQgZm9yIGxvbmcgbmFtZXMqL1xuICAgIGdhcDogMTJweCAzNnB4O1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcblxuICAgIC8qIGdyaWQgYXJlYSBpcyByIC8gYyAvIHIgLyBjICovXG4gICAgLnVpLmNvbnRhaW5lcntcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xuICAgICAgICBqdXN0aWZ5LXNlbGY6Y2VudGVyO1xuICAgIH1cblxuICAgIC5ib2FyZC1hbmQtaGVhZGVyLmNvbnRhaW5lcntcbiAgICAgICAgd2lkdGg6Zml0LWNvbnRlbnQ7XG4gICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgICAgICBnYXA6IDEycHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5ib2FyZC5oZWFkZXJ7XG4gICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbi5jb250YWluZXJ7XG4gICAgICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBnYXA6IDNweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxNjNweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ib2FyZC1hbmQtaGVhZGVyLmNvbnRhaW5lci5wbGF5ZXItMXtcbiAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICB9XG5cbiAgICAuYm9hcmQtYW5kLWhlYWRlci5jb250YWluZXIucGxheWVyLTJ7XG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcbiAgICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgICB9XG5cbiAgICBoMntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LXdyYXA6IHdyYXA7XG4gICAgfVxuXG4gICAgLmhpZGRlbi5zYW1wbGVze1xuICAgICAgICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDM7XG4gICAgfVxuXG4gICAgLmVuZC5jb250YWluZXJ7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XG5cbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgICAgICBnYXA6IDEycHg7XG5cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJvYXJkLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcHg7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWdyaWQtY29sb3IpO1xuXG4gICAgPiBkaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGdhcDogMXB4O1xuXG4gICAgICAgIGRpdntcbiAgICAgICAgICAgIGFzcGVjdC1yYXRpbzogMS8xO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ib2FyZC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaGlwLmF0dGFja2Vke1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXR0YWNrZWQtYW5kLWhpdC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuYXR0YWNrZWR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hdHRhY2tlZC1jb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ib2FyZC5jb250YWluZXIudmlzaWJsZXtcbiAgICAuc2hpcHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XG4gICAgfVxufVxuXG4uYm9hcmQuY29udGFpbmVyLmFjdGl2ZS1nYW1lOm5vdCgudmlzaWJsZSl7XG4gICAgPiBkaXYgPmRpdjpub3QoLmF0dGFja2VkKTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWJvYXJkLWNvbG9yKTtcbiAgICB9XG59XG5cbi8qIHN0eWxlIHNoaXBzIG9mZiBib2FyZCBkdXJpbmcgc3RhZ2luZyAqL1xuLmhpZGRlbi5zYW1wbGVze1xuICAgIHdpZHRoOjBweDtcbiAgICA+IGRpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiAzcHg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgPiBkaXZ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1ncmlkLWNvbG9yKTtcbiAgICAgICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgZ2FwOiAxcHg7XG4gICAgICAgIFxuICAgICAgICAgICAgZGl2e1xuICAgICAgICAgICAgICAgIGFzcGVjdC1yYXRpbzogMS8xO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXNoaXAtY29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnZlcnRpY2FsID4gZGl2e1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbn1cblxuLmhpZGRlbi5zYW1wbGVze1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05OTlweCwgMHB4KTtcbn1cblxuLyogc3R5bGUgZGlhbG9nICovXG46OmJhY2tkcm9we1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpYWxvZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuZGlhbG9ne1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLHlCQUF5QixFQUFFLE1BQU07SUFDakMsaUNBQWlDLEVBQUUsUUFBUTtJQUMzQyxxQkFBcUIsRUFBRSxPQUFPO0lBQzlCLGlDQUFpQztJQUNqQyxnQ0FBZ0M7SUFDaEMsNkNBQTZDO0lBQzdDLHVDQUF1QztJQUN2Qyx3Q0FBd0M7QUFDNUM7O0FBRUE7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MUI7QUFDSjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tY29udGVudC1jb2xvcjogI0Q2RkZGNjtcXG4gICAgLS1idXR0b24tY2xpY2tlZC1jb2xvcjogI2MzZWNjMztcXG4gICAgLS1iZy1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNDApO1xcbiAgICAtLWFjY2VudC1jb2xvcjogIzREQ0NCRDtcXG4gICAgLS1hdHRhY2tlZC1jb2xvcjogI2ZmYzJjMjsgLypyZWQqL1xcbiAgICAtLWF0dGFja2VkLWFuZC1oaXQtY29sb3I6ICNiZmZkYzI7IC8qZ3JlZW4qL1xcbiAgICAtLXNoaXAtY29sb3I6ICNiM2M3ZmY7IC8qYmx1ZSovXFxuICAgIC0tYm9hcmQtYmFja2dyb3VuZC1jb2xvcjogIzUyNTI1MjtcXG4gICAgLS1ib2FyZC1ncmlkLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIC0tZGlhbG9nLWJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE5OCwgMjU1KTtcXG4gICAgLS1ob3Zlci1ib2FyZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNDApO1xcbiAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMSxoMixoMyxwLGJ1dHRvbntcXG4gICAgbWFyZ2luOjA7XFxuICAgIHBhZGRpbmc6MDtcXG59XFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOnN0YXJ0O1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxufVxcblxcbi5wcmVnYW1lLmNvbnRhaW5lcntcXG4gICAgbWFyZ2luLXRvcDogMzB2aDtcXG5cXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEycHg7XFxuXFxuICAgIC50aXRsZXtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgICAgICBmb250LXNpemU6IDUwMDtcXG4gICAgfVxcblxcbiAgICAuYnV0dG9uLmNvbnRhaW5lcntcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgICAgICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XFxuICAgICAgICBnYXA6IDVweDtcXG5cXG4gICAgICAgIGJ1dHRvbi5zaW5nbGV7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAxLzI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBidXR0b24uZG91Ymxle1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgICAgICAgICBncmlkLXJvdzogMS8yO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGZvcm17XFxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDNweDtcXG5cXG4gICAgICAgIC5pbnB1dC5jb250YWluZXJ7XFxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICAgICAgZ2FwOiAzcHg7XFxuXFxuICAgICAgICAgICAgaW5wdXR7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9hcmQtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgcGFkZGluZzogMTJweCAyOHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5idXR0b246YWN0aXZle1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMW1zO1xcbn1cXG5cXG4uZ2FtZS5jb250YWluZXJ7XFxuICAgIG1hcmdpbi10b3A6IDE1dmg7XFxuXFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50OyAvKiBOZWVkIHRvIGRvIHRoaXMgdG8ga2VlcCBib2FyZCBzeW1tZXRyaWMgYnV0IHN0aWxsIGV4cGFuZGVkIGZvciBsb25nIG5hbWVzKi9cXG4gICAgZ2FwOiAxMnB4IDM2cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG5cXG4gICAgLyogZ3JpZCBhcmVhIGlzIHIgLyBjIC8gciAvIGMgKi9cXG4gICAgLnVpLmNvbnRhaW5lcntcXG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgICAgIGp1c3RpZnktc2VsZjpjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmJvYXJkLWFuZC1oZWFkZXIuY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxuICAgICAgICBkaXNwbGF5OmZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgICAgICBnYXA6IDEycHg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgICAuYm9hcmQuaGVhZGVye1xcbiAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuYnV0dG9uLmNvbnRhaW5lcntcXG4gICAgICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZ2FwOiAzcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBidXR0b257XFxuICAgICAgICAgICAgd2lkdGg6IDE2M3B4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5ib2FyZC1hbmQtaGVhZGVyLmNvbnRhaW5lci5wbGF5ZXItMXtcXG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICB9XFxuXFxuICAgIC5ib2FyZC1hbmQtaGVhZGVyLmNvbnRhaW5lci5wbGF5ZXItMntcXG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG4gICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIH1cXG5cXG4gICAgaDJ7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB0ZXh0LXdyYXA6IHdyYXA7XFxuICAgIH1cXG5cXG4gICAgLmhpZGRlbi5zYW1wbGVze1xcbiAgICAgICAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAzO1xcbiAgICB9XFxuXFxuICAgIC5lbmQuY29udGFpbmVye1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcXG5cXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgICAgIGdhcDogMTJweDtcXG5cXG4gICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5ib2FyZC5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXB4O1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWdyaWQtY29sb3IpO1xcblxcbiAgICA+IGRpdntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgZ2FwOiAxcHg7XFxuXFxuICAgICAgICBkaXZ7XFxuICAgICAgICAgICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tYm9hcmQtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2hpcC5hdHRhY2tlZHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hdHRhY2tlZC1hbmQtaGl0LWNvbG9yKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5hdHRhY2tlZHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hdHRhY2tlZC1jb2xvcik7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLmJvYXJkLmNvbnRhaW5lci52aXNpYmxle1xcbiAgICAuc2hpcHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xcbiAgICB9XFxufVxcblxcbi5ib2FyZC5jb250YWluZXIuYWN0aXZlLWdhbWU6bm90KC52aXNpYmxlKXtcXG4gICAgPiBkaXYgPmRpdjpub3QoLmF0dGFja2VkKTpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1ib2FyZC1jb2xvcik7XFxuICAgIH1cXG59XFxuXFxuLyogc3R5bGUgc2hpcHMgb2ZmIGJvYXJkIGR1cmluZyBzdGFnaW5nICovXFxuLmhpZGRlbi5zYW1wbGVze1xcbiAgICB3aWR0aDowcHg7XFxuICAgID4gZGl2e1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGdhcDogM3B4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgICAgID4gZGl2e1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWdyaWQtY29sb3IpO1xcbiAgICAgICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICAgICAgZ2FwOiAxcHg7XFxuICAgICAgICBcXG4gICAgICAgICAgICBkaXZ7XFxuICAgICAgICAgICAgICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tc2hpcC1jb2xvcik7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC52ZXJ0aWNhbCA+IGRpdntcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG59XFxuXFxuLmhpZGRlbi5zYW1wbGVze1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTk5cHgsIDBweCk7XFxufVxcblxcbi8qIHN0eWxlIGRpYWxvZyAqL1xcbjo6YmFja2Ryb3B7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpYWxvZy1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuZGlhbG9ne1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge1NoaXB9IGZyb20gXCIuL3NoaXAuanNcIjtcbmltcG9ydCB7TGlua2VkTGlzdH0gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9saW5rZWQtbGlzdHMvbGlua2VkbGlzdC5qc1wiXG5cbmNvbnN0IEdhbWVib2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGJvYXJkTWFwO1xuICBsZXQgYXR0YWNrTWFwO1xuICAvLyBtYWtlIGVhY2ggbWFwIGFuIGFycmF5IG9mIDEwIHdpdGggZWFjaCBhcnJheSBiZWluZyBhbiBvYmplY3QgKHNpbWlsYXIgdG8gaGFzaCBtYXApXG4gIGNvbnN0IGluaXRCb2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBib2FyZE1hcCA9IFt7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fV07XG4gICAgYXR0YWNrTWFwID0gW3t9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9XTtcbiAgfSgpO1xuXG4gIGNvbnN0IGdldEJvYXJkTWFwID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gYm9hcmRNYXA7XG4gIH1cblxuICBjb25zdCBnZXRBdHRhY2tNYXAgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBhdHRhY2tNYXA7XG4gIH1cblxuICAvLyBiYXNlZCBvbiB0aGUgd2F5IHdlIGltcGxlbWVudGVkLFxuICAvLyB0aGUgZmlyc3QgaW5kZXggZm9yIGFycmF5IGlzIHRoZSByLXZhbHVlIG9yIHRoZSBjb2x1bW4gaW4gYSBtYXRyaXgvZ3JpZFxuICAvLyB0aGUgc2Vjb25kIGluZGV4IGZvciBvYmplY3Qga2V5IGlzIHRoZSBjLXZhbHVlIG9yIHRoZSByb3cgaW4gYSBtYXRyaXgvZ3JpZCAoaW5jcmVhc2VzIGdvaW5nIGRvd24pXG4gIGxldCBzaGlwTGlzdCA9IG5ldyBMaW5rZWRMaXN0KCk7XG4gIC8vIHVzZSByZXN0IHBhcmFtZXRlciAoLi4uKSB0byBhY2NlcHQgdmFyaWFibGUgYW1vdW50IG9mIGNvb3Jkc1xuICBjb25zdCBuZXdTaGlwID0gZnVuY3Rpb24gKC4uLmNvb3Jkcykge1xuICAgICAgY29uc3QgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3Jkcy5sZW5ndGgpO1xuICAgICAgaWYgKGlzU2hpcEF0Q29vcmRzKC4uLmNvb3Jkcykpe1xuICAgICAgICBjb25zb2xlLmxvZyhib2FyZE1hcCk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRG9uJ3Qgb3ZlcmxhcCBzaGlwcyBhdDogJHtjb29yZHN9YCk7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBbcixjXSBvZiBjb29yZHMpe1xuICAgICAgICBpZiAoYyA8IDEwICYmIGMgPj0wKXtcbiAgICAgICAgICBib2FyZE1hcFtyXVtjXSA9IG5ld1NoaXA7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICBjb25zb2xlLmxvZyhjb29yZHMpO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQmFkIGNvbCBpbnB1dCBmb3IgbmV3U2hpcCgpOiAke2Nvb3Jkc31gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gYWRkaW5nIG5ldyBzaGlwIHRvIHNoaXAgbGlua2VkIGxpc3RcbiAgICAgIHNoaXBMaXN0LmFwcGVuZChuZXdTaGlwKTtcbiAgfTtcblxuICBjb25zdCBpc1NoaXBBdENvb3JkcyA9IGZ1bmN0aW9uKC4uLmNvb3Jkcyl7XG4gICAgZm9yIChsZXQgW3IsY10gb2YgY29vcmRzKXtcbiAgICAgIGlmIChib2FyZE1hcFtyXSAhPT0gdW5kZWZpbmVkICYmIGJvYXJkTWFwW3JdW2NdICE9PSB1bmRlZmluZWQpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgZ2V0U2hpcEZyb21Db29yZHMgPSBmdW5jdGlvbihbcixjXSl7XG4gICAgcmV0dXJuIGJvYXJkTWFwW3JdW2NdO1xuICB9XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IGZ1bmN0aW9uKFtyLGNdKXtcbiAgICBpZiAod2FzQXR0YWNrZWQoW3IsY10pKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGF0dGFjayBwcmV2aW91cyBhdHRhY2tlZCAoJHtyfSwke2N9KWApO1xuICAgIH1cbiAgICBjb25zdCBzaGlwID0gYm9hcmRNYXBbcl1bY107XG4gICAgaWYgKHR5cGVvZihzaGlwKSA9PSBcIm9iamVjdFwiKXtcbiAgICAgIHNoaXAuaGl0KCk7XG4gICAgICBhdHRhY2tNYXBbcl1bY109XCJoaXRcIjtcbiAgICAgIHJldHVybiBcImhpdFwiO1xuICAgIH0gZWxzZXtcbiAgICAgIGF0dGFja01hcFtyXVtjXSA9IFwibWlzc1wiO1xuICAgICAgcmV0dXJuIFwibWlzc1wiO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHdhc0F0dGFja2VkID0gZnVuY3Rpb24oW3IsY10pe1xuICAgIHJldHVybiBhdHRhY2tNYXBbcl1bY10gfHwgZmFsc2U7XG4gIH1cblxuICBjb25zdCBpc0FsbFN1bmsgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiAoc2hpcExpc3QuZmluZENhbGxiYWNrKGZhbHNlLCBcImlzU3Vua1wiKSA9PSBudWxsKTtcbiAgfVxuXG4gIGNvbnN0IHJlc2V0Qm9hcmQgPSBmdW5jdGlvbigpe1xuICAgIGJvYXJkTWFwID0gW3t9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9XTtcbiAgICBhdHRhY2tNYXAgPSBbe30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge31dO1xuICAgIGF0dGFja0NvdW50ID0gMDtcbiAgfVxuXG4gIC8vIFVTRVMgYWxsb3dlZCBwb3NpdGlvbiBtYXAgY3JlYXRlZCB3aXRoIHNwZWNpZmljIGluZm8gYWJvdXQgc2hpcCBvcmllbnRhdGlvbiBhbmQgbGVuZ3RoXG4gIGNvbnN0IGlzVGhpc0FsbG93ZWRQbGFjZW1lbnQgPSBmdW5jdGlvbihbcixjXSl7XG4gICAgcmV0dXJuIGFsbG93ZWRQb3NpdGlvbk1hcFtyXVtjXTtcbiAgfVxuXG4gIGxldCBhbGxvd2VkUG9zaXRpb25NYXA7XG4gIC8vIHVzZXMgYWRqYWNlbmN5IG1hcCBhbmQgc2hpcCBsZW5ndGggdG8gc2hvdyBhbGwgcG9zaWJsZSB0b3BsZWZ0IHBvc2l0aW9ucyBmb3IgdGhlIHNoaXBcbiAgLy8gcmVjYWxsIHRoYXQgZ3JhYkxvY2F0aW9uIHN0YXJ0cyBhdCAwXG4gIC8vIHJldHVybnMgbnVtYmVyIG9mIHRydWVzIChhbGxvd2VkIHNwb3RzKVxuICBjb25zdCBjcmVhdGVBbGxvd2VkUG9zaXRpb25NYXAgPSBmdW5jdGlvbihzaGlwT2JqZWN0LCBpc0hvcml6b250YWwsIGdyYWJMb2NhdGlvbil7XG4gICAgY29uc3QgYWRqYWNlbmN5TWFwID0gY3JlYXRlQWRqYWNlbmN5TWFwKCk7XG4gICAgYWxsb3dlZFBvc2l0aW9uTWFwID0gW3t9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9XTtcbiAgICBjb25zdCBsZW5ndGggPSBzaGlwT2JqZWN0Lmxlbmd0aDtcbiAgICBsZXQgdHJ1ZUNvdW50ID0wO1xuICAgIGlmIChpc0hvcml6b250YWwgPT0gXCJ0cnVlXCIpe1xuICAgICAgZm9yIChsZXQgciA9IDA7IHI8MTA7IHIrKyl7XG4gICAgICAgIGZvciAobGV0IGM9MDsgYzwxMDsgYysrKXtcbiAgICAgICAgICBpZiAoYz4gKDEwLWxlbmd0aCtncmFiTG9jYXRpb24pIHx8IGM8Z3JhYkxvY2F0aW9uKXtcbiAgICAgICAgICAgIGFsbG93ZWRQb3NpdGlvbk1hcFtyXVtjXSA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGxvd2VkUG9zaXRpb25NYXBbcl1bY10gPSBpc1NoaXBGaXRBZGphY2VuY3koW3IsYy1ncmFiTG9jYXRpb25dLCBzaGlwT2JqZWN0LCBpc0hvcml6b250YWwsIGFkamFjZW5jeU1hcCk7XG4gICAgICAgICAgICBpZiAoYWxsb3dlZFBvc2l0aW9uTWFwW3JdW2NdID09IHRydWUpe1xuICAgICAgICAgICAgICB0cnVlQ291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgICB9XG4gICAgIH0gZWxzZXtcbiAgICAgIGZvciAobGV0IHIgPSAwOyByPDEwOyByKyspe1xuICAgICAgICBmb3IgKGxldCBjPTA7IGM8MTA7IGMrKyl7XG4gICAgICAgICAgaWYgKHIgPiAoMTAtbGVuZ3RoK2dyYWJMb2NhdGlvbikgfHwgcjxncmFiTG9jYXRpb24pe1xuICAgICAgICAgICAgICBhbGxvd2VkUG9zaXRpb25NYXBbcl1bY10gPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxsb3dlZFBvc2l0aW9uTWFwW3JdW2NdID0gaXNTaGlwRml0QWRqYWNlbmN5KFtyLWdyYWJMb2NhdGlvbixjXSxzaGlwT2JqZWN0LCBpc0hvcml6b250YWwsIGFkamFjZW5jeU1hcCk7XG4gICAgICAgICAgICBpZiAoYWxsb3dlZFBvc2l0aW9uTWFwW3JdW2NdID09IHRydWUpe1xuICAgICAgICAgICAgICB0cnVlQ291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJhbGxvd2VkIHBvc2l0aW9uIG1hcCBjcmVhdGVkXCIpXG4gICAgY29uc29sZS5sb2coYWxsb3dlZFBvc2l0aW9uTWFwKTtcbiAgICByZXR1cm4gdHJ1ZUNvdW50O1xuICB9O1xuXG4gIC8vIFtyLGNdIGlzIHRvcGxlZnQgc3F1YXJlIG9mIHNoaXBcbiAgY29uc3QgaXNTaGlwRml0QWRqYWNlbmN5ID0gZnVuY3Rpb24oW3IsY10sc2hpcE9iamVjdCwgaXNIb3Jpem9udGFsLCBtYXApe1xuICAgIGNvbnN0IGxlbmd0aCA9IHNoaXBPYmplY3QubGVuZ3RoO1xuICAgIGlmIChpc0hvcml6b250YWwgIT09IFwidHJ1ZVwiKXtcbiAgICAgIGZvciAobGV0IGk9MDsgaTxsZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmICh0eXBlb2YgbWFwW3IraV0gIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIG1hcFtyK2ldW2NdICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgICAgICBmb3IgKGxldCBzaGlwIG9mIG1hcFtyK2ldW2NdKXtcbiAgICAgICAgICAgIGlmIChzaGlwICE9IHNoaXBPYmplY3Qpe1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGk9MDsgaTxsZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmICh0eXBlb2YgbWFwW3JdICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBtYXBbcl1bYytpXSAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICAgICAgZm9yIChsZXQgc2hpcCBvZiBtYXBbcl1bYytpXSl7XG4gICAgICAgICAgICBpZiAoc2hpcCAhPSBzaGlwT2JqZWN0KXtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG5cbiAgY29uc3QgY3JlYXRlQWRqYWNlbmN5TWFwID0gZnVuY3Rpb24oKXtcbiAgICBsZXQgYWRqYWNlbmN5TWFwID0gW3t9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9XTtcbiAgICBmb3IgKGxldCBpPTA7IGk8MTA7IGkrKyl7XG4gICAgICBmb3IgKGxldCBqPTA7IGo8MTA7IGorKyl7XG4gICAgICAgIGlmICh0eXBlb2YgYm9hcmRNYXBbaV1bal0gIT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICAgIGNvbnN0IHNoaXAgPSBib2FyZE1hcFtpXVtqXTtcbiAgICAgICAgICBhZGRUb0FkamFjZW5jeU1hcChhZGphY2VuY3lNYXAsIHNoaXAsIGksaik7XG4gICAgICAgICAgaWYgKGo+MCl7XG4gICAgICAgICAgICBhZGRUb0FkamFjZW5jeU1hcChhZGphY2VuY3lNYXAsIHNoaXAsIGksai0xKTtcbiAgICAgICAgICAgIGlmIChpPjApe1xuICAgICAgICAgICAgICBhZGRUb0FkamFjZW5jeU1hcChhZGphY2VuY3lNYXAsIHNoaXAsIGktMSxqLTEpO1xuICAgICAgICAgICAgfSBpZiAoaTw5KXtcbiAgICAgICAgICAgICAgYWRkVG9BZGphY2VuY3lNYXAoYWRqYWNlbmN5TWFwLCBzaGlwLCBpKzEsai0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGo8OSl7XG4gICAgICAgICAgICBhZGRUb0FkamFjZW5jeU1hcChhZGphY2VuY3lNYXAsIHNoaXAsIGksaisxKTtcbiAgICAgICAgICAgIGlmIChpPjApe1xuICAgICAgICAgICAgICBhZGRUb0FkamFjZW5jeU1hcChhZGphY2VuY3lNYXAsIHNoaXAsIGktMSxqKzEpO1xuICAgICAgICAgICAgfSBpZiAoaTw5KXtcbiAgICAgICAgICAgICAgYWRkVG9BZGphY2VuY3lNYXAoYWRqYWNlbmN5TWFwLCBzaGlwLCBpKzEsaisxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGk+MCl7XG4gICAgICAgICAgICBhZGRUb0FkamFjZW5jeU1hcChhZGphY2VuY3lNYXAsIHNoaXAsIGktMSxqKTtcbiAgICAgICAgICB9IGlmIChpPDkpe1xuICAgICAgICAgICAgYWRkVG9BZGphY2VuY3lNYXAoYWRqYWNlbmN5TWFwLCBzaGlwLCBpKzEsaik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGFkamFjZW5jeU1hcCk7XG4gICAgcmV0dXJuIGFkamFjZW5jeU1hcDtcbiAgfVxuXG4gIGNvbnN0IGFkZFRvQWRqYWNlbmN5TWFwID0gZnVuY3Rpb24obWFwLCBzaGlwLCBpLCBqKXtcbiAgICBjb25zdCBsb2NhdGlvbiA9IG1hcFtpXVtqXTtcbiAgICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiICYmIGxvY2F0aW9uWzBdICE9IHNoaXApe1xuICAgICAgbWFwW2ldW2pdLnB1c2goc2hpcCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBtYXBbaV1bal0gPSBbc2hpcF07XG4gICAgfVxuICB9XG5cbiAgLy8gcmVtZW1iZXIgdGhhdCBtYXAgaXMgc29ydGVkIGJ5IHIsIHRoZW4gYy5cbiAgY29uc3QgbW92ZVNoaXAgPSBmdW5jdGlvbihzaGlwLFtzdGFydFIsc3RhcnRDXSxsZW5ndGgsIGlzSG9yaXpvbnRhbCl7XG4gICAgZm9yIChsZXQgcm93PTA7IHJvdzwxMDsgcm93Kyspe1xuICAgICAgY29uc3QgbWFwUm93ID0gYm9hcmRNYXBbcm93XTtcbiAgICAgIGZvciAobGV0IGNvbCBvZiBPYmplY3Qua2V5cyhtYXBSb3cpKXtcbiAgICAgICAgaWYgKG1hcFJvd1tjb2xdID09IHNoaXApe1xuICAgICAgICAgIGRlbGV0ZSBib2FyZE1hcFtyb3ddW2NvbF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coYm9hcmRNYXApO1xuICAgIGNvbnN0IGNvb3JkcyA9IFtdO1xuICAgIGlmIChpc0hvcml6b250YWwgPT0gXCJ0cnVlXCIpe1xuICAgICAgZm9yIChsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29vcmRzLnB1c2goW3N0YXJ0UixzdGFydEMraV0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGk9MDsgaTxsZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvb3Jkcy5wdXNoKFtzdGFydFIraSxzdGFydENdKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyguLi5jb29yZHMsIGxlbmd0aCk7XG4gICAgbmV3U2hpcCguLi5jb29yZHMpO1xuICB9XG5cbiAgLy8gbmVlZCB0byByYW5kb21pemUgNSBzaGlwcyBvZiBsZW5ndGggMiwzLDMsNCw1XG4gIGNvbnN0IHJhbmRvbWl6ZUJvYXJkID0gZnVuY3Rpb24oKXtcbiAgICB0cnl7XG4gICAgICByZXNldEJvYXJkKCk7XG4gICAgICBjb25zdCBjb29yZHMxID0gZ2V0UmFuZG9tQ29vcmRzKDIpO1xuICAgICAgbmV3U2hpcCguLi5jb29yZHMxKTtcbiAgICAgIGNvbnN0IGNvb3JkczIgPSBnZXRSYW5kb21Db29yZHMoMyk7XG4gICAgICBuZXdTaGlwKC4uLmNvb3JkczIpO1xuICAgICAgY29uc3QgY29vcmRzMyA9IGdldFJhbmRvbUNvb3JkcygzKTtcbiAgICAgIG5ld1NoaXAoLi4uY29vcmRzMyk7XG4gICAgICBjb25zdCBjb29yZHM0ID0gZ2V0UmFuZG9tQ29vcmRzKDQpO1xuICAgICAgbmV3U2hpcCguLi5jb29yZHM0KTtcbiAgICAgIGNvbnN0IGNvb3JkczUgPSBnZXRSYW5kb21Db29yZHMoNSk7XG4gICAgICBuZXdTaGlwKC4uLmNvb3JkczUpO1xuICAgICAgLy9jb25zb2xlLmxvZyhib2FyZE1hcCk7XG4gICAgICByZXR1cm4ge2Nvb3JkczEsY29vcmRzMixjb29yZHMzLGNvb3JkczQsY29vcmRzNX07XG4gICAgfSBjYXRjaHtcbiAgICAgIHJldHVybiByYW5kb21pemVCb2FyZCgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdldFJhbmRvbUNvb3JkcyA9IGZ1bmN0aW9uKGxlbmd0aCl7XG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gcmFuZG9taXplSXNIb3Jpem9udGFsKCk7XG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XG4gICAgbGV0IHRydWVDb3VudCA9IGNyZWF0ZUFsbG93ZWRQb3NpdGlvbk1hcChzaGlwLCBpc0hvcml6b250YWwsIDApO1xuICAgIC8vIGNhdGNoIHdoZW4gdGhlcmUgaXMgbm8gYWxsb3dlZCBwb3NpdGlvbnNcbiAgICBpZiAodHJ1ZUNvdW50ID09IDApe1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIk11c3QgcmVyYW5kb21pemUgZHVlIHRvIHVubHVja3kgc2V0dXBcIik7XG4gICAgfVxuICAgIC8vIHJuZ0NvdW50IHJhbmdlcyBmcm9tIDAgdG8gdHJ1ZUNvdW50LTE7XG4gICAgbGV0IHJuZ0NvdW50ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnRydWVDb3VudCk7XG4gICAgLy9jb25zb2xlLmxvZyhybmdDb3VudCwgdHJ1ZUNvdW50KTtcbiAgICBsZXQgcj0tMTtcbiAgICBsZXQgYz05O1xuICAgIHdoaWxlIChybmdDb3VudD49MCl7XG4gICAgICBpZiAoYz09OSl7XG4gICAgICAgIHIrKztcbiAgICAgICAgYz0wO1xuICAgICAgfSBlbHNle1xuICAgICAgICBjKys7XG4gICAgICB9XG4gICAgICBpZiAoaXNUaGlzQWxsb3dlZFBsYWNlbWVudChbcixjXSkgPT0gdHJ1ZSl7XG4gICAgICAgIHJuZ0NvdW50LS07XG4gICAgICB9XG4gICAgICAvL2NvbnNvbGUubG9nKHIsIGMsIHJuZ0NvdW50KTtcbiAgICB9XG4gICAgbGV0IGNvb3JkcyA9IFtdO1xuICAgIGlmIChpc0hvcml6b250YWwgPT0gXCJ0cnVlXCIpe1xuICAgICAgZm9yICg7bGVuZ3RoPjA7IGxlbmd0aC0tKXtcbiAgICAgICAgY29vcmRzLnB1c2goW3IsY10pO1xuICAgICAgICBjKys7XG4gICAgICB9XG4gICAgfSBlbHNle1xuICAgICAgZm9yICg7bGVuZ3RoPjA7IGxlbmd0aC0tKXtcbiAgICAgICAgY29vcmRzLnB1c2goW3IsY10pO1xuICAgICAgICByKys7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBHZW5lcmF0ZWQgYWxsb3dlZCByYW5kb20gY29vcmRzICR7Y29vcmRzfWApO1xuICAgIHJldHVybiAoY29vcmRzKTtcbiAgfVxuXG4gIGNvbnN0IHJhbmRvbWl6ZUlzSG9yaXpvbnRhbCA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3Qgcm5nID0gTWF0aC5yYW5kb20oKSoyO1xuICAgIGlmIChybmcgPCAxKXtcbiAgICAgIHJldHVybiBcInRydWVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiZmFsc2VcIjtcbiAgICB9XG4gIH1cblxuICAvLyBzdGFydCBvZiBjb2RlIGZvciBndWVzc2luZyBlZHVjYXRlZCBhdHRhY2sgZm9yIGNvbXB1dGVyIHBsYXllciAvL1xuICBsZXQgcHJldmlvdXNBdHRhY2sgPSB7fTtcbiAgY29uc3QgbWFrZVJhbmRvbUF0dGFjayA9IGZ1bmN0aW9uKG90aGVyUGxheWVyKXtcbiAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSogKDk5LWF0dGFja0NvdW50KSk7XG4gICAgcHJldmlvdXNBdHRhY2suY29vcmRzID0gZ2V0TnRoT3BlbkF0dGFja01hcChvdGhlclBsYXllciwgcmFuZG9tSW5kZXgpO1xuICAgIC8vY29uc29sZS5sb2cocHJldmlvdXNBdHRhY2suY29vcmRzKTtcbiAgICBwcmV2aW91c0F0dGFjay5oaXQgPSBvdGhlclBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhwcmV2aW91c0F0dGFjay5jb29yZHMpO1xuICB9XG5cbiAgbGV0IGF0dGFja0NvdW50ID0gMDtcbiAgY29uc3QgbWFrZUVkdWNhdGVkQXR0YWNrID0gZnVuY3Rpb24ob3RoZXJQbGF5ZXIpe1xuICAgIGlmICh0eXBlb2YgcHJldmlvdXNBdHRhY2sucHJldlN1Y2Nlc3NDb29yZHMgIT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgY29uc3QgW3IsY109IHByZXZpb3VzQXR0YWNrLnByZXZTdWNjZXNzQ29vcmRzO1xuICAgICAgY29uc29sZS5sb2cocixjKTtcbiAgICAgIGNvbnN0IG90aGVyQXR0YWNrTWFwID0gb3RoZXJQbGF5ZXIuZ2FtZWJvYXJkLmdldEF0dGFja01hcCgpO1xuICAgICAgaWYgKGlzT25Cb2FyZEFuZE5vdEF0dGFja2VkKFtyLTEsY10sb3RoZXJBdHRhY2tNYXApKXtcbiAgICAgICAgcHJldmlvdXNBdHRhY2suY29vcmRzID0gW3ItMSxjXTtcbiAgICAgICAgcHJldmlvdXNBdHRhY2suaGl0ID0gb3RoZXJQbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW3ItMSxjXSk7XG4gICAgICB9IGVsc2UgaWYgKGlzT25Cb2FyZEFuZE5vdEF0dGFja2VkKFtyKzEsY10sb3RoZXJBdHRhY2tNYXApKXtcbiAgICAgICAgcHJldmlvdXNBdHRhY2suY29vcmRzID0gW3IrMSxjXTtcbiAgICAgICAgcHJldmlvdXNBdHRhY2suaGl0ID0gb3RoZXJQbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW3IrMSxjXSk7XG4gICAgICB9IGVsc2UgaWYgKGlzT25Cb2FyZEFuZE5vdEF0dGFja2VkKFtyLGMtMV0sb3RoZXJBdHRhY2tNYXApKXtcbiAgICAgICAgcHJldmlvdXNBdHRhY2suY29vcmRzID0gW3IsYy0xXTtcbiAgICAgICAgcHJldmlvdXNBdHRhY2suaGl0ID0gb3RoZXJQbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW3IsYy0xXSk7XG4gICAgICB9IGVsc2UgaWYgKGlzT25Cb2FyZEFuZE5vdEF0dGFja2VkKFtyLGMrMV0sb3RoZXJBdHRhY2tNYXApKXtcbiAgICAgICAgcHJldmlvdXNBdHRhY2suY29vcmRzID0gW3IsYysxXTtcbiAgICAgICAgcHJldmlvdXNBdHRhY2suaGl0ID0gb3RoZXJQbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW3IsYysxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYWtlUmFuZG9tQXR0YWNrKG90aGVyUGxheWVyKTtcbiAgICAgIH1cbiAgICB9IGVsc2V7XG4gICAgICBtYWtlUmFuZG9tQXR0YWNrKG90aGVyUGxheWVyKTtcbiAgICB9XG4gICAgaWYgKHByZXZpb3VzQXR0YWNrLmhpdCA9PSBcImhpdFwiKXtcbiAgICAgIHByZXZpb3VzQXR0YWNrLnByZXZTdWNjZXNzQ29vcmRzID0gcHJldmlvdXNBdHRhY2suY29vcmRzO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgUmVjZWl2ZWQgYXR0YWNrIGF0ICR7cHJldmlvdXNBdHRhY2suY29vcmRzfSBmb3IgcGxheWVyIDEgYnkgY29tcHV0ZXJgKVxuICAgIGF0dGFja0NvdW50Kys7XG4gICAgcmV0dXJuIHByZXZpb3VzQXR0YWNrLmNvb3JkcztcbiAgfVxuXG4gIGNvbnN0IGdldE50aE9wZW5BdHRhY2tNYXAgPSBmdW5jdGlvbihvdGhlclBsYXllciwgaW5kZXgpe1xuICAgIGNvbnN0IG90aGVyQXR0YWNrTWFwID0gb3RoZXJQbGF5ZXIuZ2FtZWJvYXJkLmdldEF0dGFja01hcCgpO1xuICAgIGxldCBjb3VudCA9IGluZGV4O1xuICAgIGZvciAobGV0IHJvdyBvZiBvdGhlckF0dGFja01hcCl7XG4gICAgICBmb3IgKGxldCBjPTA7IGM8MTA7IGMrKyl7XG4gICAgICAgIGNvbnN0IGNvbFZhbHVlID0gcm93W2NdO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGNvbFZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb2xWYWx1ZSA9PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgIGlmIChjb3VudCA8MCl7XG4gICAgICAgICAgICBjb25zdCByID0gb3RoZXJBdHRhY2tNYXAuaW5kZXhPZihyb3cpO1xuICAgICAgICAgICAgcmV0dXJuIFtyLGNdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKGNvdW50KVxuICAgIHRocm93IG5ldyBFcnJvcihcImdldCBOdGggb3BlbiBhdHRhY2sgbWFwIGZhaWxlZFwiKTtcbiAgfVxuXG4gIGNvbnN0IGlzT25Cb2FyZEFuZE5vdEF0dGFja2VkID0gZnVuY3Rpb24oW3IsY10sIGF0dGFja01hcCl7XG4gICAgcmV0dXJuIChyPDkgJiYgcj4wICYmIGM8OSAmJiBjPjAgJiYgdHlwZW9mIGF0dGFja01hcFtyXVtjXSA9PSBcInVuZGVmaW5lZFwiKTtcbiAgfVxuICAvLyBlbmQgb2YgY29kZSByZWxhdGVkIHRvIG1ha2luZyBjb21wdXRlciBlZHVjYXRlZCBhdHRhY2tcblxuICByZXR1cm4ge1xuICAgIG5ld1NoaXAsXG4gICAgZ2V0U2hpcEZyb21Db29yZHMsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICB3YXNBdHRhY2tlZCxcbiAgICBpc0FsbFN1bmssXG4gICAgZ2V0Qm9hcmRNYXAsXG4gICAgcmVzZXRCb2FyZCxcbiAgICBnZXRBdHRhY2tNYXAsXG4gICAgaXNUaGlzQWxsb3dlZFBsYWNlbWVudCxcbiAgICBtb3ZlU2hpcCxcbiAgICBjcmVhdGVBbGxvd2VkUG9zaXRpb25NYXAsXG4gICAgcmFuZG9taXplQm9hcmQsXG4gICAgbWFrZUVkdWNhdGVkQXR0YWNrLFxuICB9O1xufTtcblxuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG4iLCJpbXBvcnQge0dhbWVib2FyZH0gZnJvbSBcIi4vZ2FtZWJvYXJkLmpzXCJcblxuY29uc3QgUGxheWVyID0gZnVuY3Rpb24obmFtZSwgbnVtYmVyKXtcblxuICAgIGxldCBnYW1lYm9hcmQ7XG4gICAgY29uc3QgaW5pdCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB9KCk7XG5cbiAgICByZXR1cm57XG4gICAgICAgIG5hbWUsXG4gICAgICAgIG51bWJlcixcbiAgICAgICAgZ2FtZWJvYXJkLFxuICAgIH1cbn1cblxuY29uc3QgY29tcHV0ZXJQbGF5ZXIgPSBmdW5jdGlvbihudW1iZXIpe1xuXG4gICAgcmV0dXJue1xuICAgICAgICAvLyBpbmhlcml0IHByb3BlcnRpZXMgYnkgY29tcG9zaXRpb25cbiAgICAgICAgLi4uKG5ldyBQbGF5ZXIoXCJDb21wdXRlciBCb2JcIiwgbnVtYmVyKSksXG4gICAgfVxufVxuXG5jb25zdCBodW1hblBsYXllciA9IGZ1bmN0aW9uKG5hbWUsIG51bWJlcil7XG5cbiAgICByZXR1cm57XG4gICAgICAgIC4uLihuZXcgUGxheWVyKG5hbWUsIG51bWJlcikpLFxuICAgIH1cbn1cblxuZXhwb3J0IHtQbGF5ZXIsIGNvbXB1dGVyUGxheWVyLCBodW1hblBsYXllcn07IiwiLy8gY29udGFpbnMgbWV0aG9kcyB0byBwb3B1bGF0ZSBET01cbi8vIHJlbmRlciBmdW5jdGlvbnMgd2lsbCBkaXNwbGF5IERPTSBlbGVtZW50c1xuLy8gYnVpbGQgZnVuY3Rpb25zIHdpbGwgYnVpbGQgZWxlbWVudHMgYW5kIHJldHVybiB0aGVtIHdpdGhvdXQgZGlzcGxheVxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbmNvbnN0IFJlbmRlck1hbmFnZXIgPSBmdW5jdGlvbigpe1xuICAgIFxuICAgIGxldCBib2FyZDE7XG4gICAgbGV0IGJvYXJkMjtcbiAgICBsZXQgZGlhbG9nO1xuICAgIGNvbnN0IGluaXRHYW1lUmVuZGVyID0gZnVuY3Rpb24ocGxheWVyMU9iamVjdCwgcGxheWVyMk9iamVjdCl7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZChib2R5LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZ2FtZS5jb250YWluZXJcIikpO1xuICAgICAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImdhbWUgY29udGFpbmVyXCIpO1xuICAgICAgICBib2R5LmFwcGVuZChnYW1lQ29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gYnVpbGRIZWFkZXIoKTtcbiAgICAgICAgYm9hcmQxID0gYnVpbGRCb2FyZEFuZEhlYWRlcihwbGF5ZXIxT2JqZWN0Lm51bWJlciwgcGxheWVyMU9iamVjdC5uYW1lKTtcbiAgICAgICAgYm9hcmQyID0gYnVpbGRCb2FyZEFuZEhlYWRlcihwbGF5ZXIyT2JqZWN0Lm51bWJlciwgcGxheWVyMk9iamVjdC5uYW1lKTtcbiAgICAgICAgZ2FtZUNvbnRhaW5lci5hcHBlbmQoaGVhZGVyLCBib2FyZDEsIGJvYXJkMik7XG4gICAgICAgIGRpYWxvZyA9IGJ1aWxkRGlhbG9nKCk7XG4gICAgICAgIGdhbWVDb250YWluZXIuYXBwZW5kKGRpYWxvZyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGJ1aWxkSGVhZGVyID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLFwidWkgY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCB0dXJuVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBcInR1cm4gdGV4dFwiKTtcbiAgICAgICAgdHVyblRleHQudGV4dENvbnRlbnQgPSBcIidzIFR1cm5cIjtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZCh0dXJuVGV4dCk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgY29uc3QgYnVpbGRCb2FyZEFuZEhlYWRlciA9IGZ1bmN0aW9uKHBsYXllck51bWJlciwgcGxheWVyTmFtZSl7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gY3JlYXRlRWxlbWVudChcImRpdlwiLGBib2FyZCBjb250YWluZXJgKTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDEwOyBpKyspe1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLGByb3ctJHtpfWApO1xuICAgICAgICAgICAgcm93LnNldEF0dHJpYnV0ZShcInJvd1wiLCBpKTtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajwxMDsgaisrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJjb2xcIiwgaik7XG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZChzcXVhcmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9hcmQuYXBwZW5kKHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgYm9hcmQuc2V0QXR0cmlidXRlKFwicGxheWVybnVtXCIsIHBsYXllck51bWJlcik7XG4gICAgICAgIGNvbnN0IGJvYXJkQW5kSGVhZGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLGBib2FyZC1hbmQtaGVhZGVyIGNvbnRhaW5lciBwbGF5ZXItJHtwbGF5ZXJOdW1iZXJ9YCk7XG4gICAgICAgIGNvbnN0IGJvYXJkSGVhZGVyVGV4dD0gY3JlYXRlRWxlbWVudChcImgyXCIsIFwiYm9hcmQgaGVhZGVyXCIpO1xuICAgICAgICBib2FyZEhlYWRlclRleHQudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lfSdzIEJvYXJkYDtcbiAgICAgICAgYm9hcmRBbmRIZWFkZXIuYXBwZW5kKGJvYXJkSGVhZGVyVGV4dCwgYm9hcmQpO1xuICAgICAgICByZXR1cm4gYm9hcmRBbmRIZWFkZXI7XG4gICAgfVxuXG4gICAgY29uc3QgYnVpbGREaWFsb2cgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICAgICAgICBjb25zdCBkaWFsb2dIZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiaDFcIiwgXCJkaWFsb2cgaGVhZGVyXCIpO1xuICAgICAgICBkaWFsb2dIZWFkZXIudGV4dENvbnRlbnQgPSBcIlN3aXRjaCBQbGF5ZXJzIVwiXG4gICAgICAgIGNvbnN0IGRpYWxvZ1N1YnRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImRpYWxvZyBzdWJ0ZXh0XCIpO1xuICAgICAgICBkaWFsb2dTdWJ0ZXh0LnRleHRDb250ZW50ID0gXCIoY2xpY2sgd2hlbiByZWFkeSlcIjtcbiAgICAgICAgZGlhbG9nLmFwcGVuZChkaWFsb2dIZWFkZXIsIGRpYWxvZ1N1YnRleHQpO1xuICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgZGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtkaWFsb2cuY2xvc2UoKX0pO1xuICAgICAgICByZXR1cm4gZGlhbG9nO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlck5ld1NoaXAgPSBmdW5jdGlvbihwbGF5ZXJOdW1iZXIsLi4uY29vcmRzKXtcbiAgICAgICAgbGV0IGJvYXJkO1xuICAgICAgICBpZiAocGxheWVyTnVtYmVyID09MSl7XG4gICAgICAgICAgICBib2FyZCA9IGJvYXJkMTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgYm9hcmQgPSBib2FyZDI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGk9MDtcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICAgICAgICBsZXQgaXNIb3Jpem9udGFsID0gZmFsc2U7XG4gICAgICAgIGlmIChjb29yZHNbMV1bMF0gPT0gY29vcmRzWzBdWzBdKXtcbiAgICAgICAgICAgIGlzSG9yaXpvbnRhbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgW3gseV0gb2YgY29vcmRzKXtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZVRvQ2hhbmdlID0gYm9hcmQucXVlcnlTZWxlY3RvcihgZGl2LnJvdy0ke3h9ID4gZGl2Om50aC1jaGlsZCgke3krMX0pYCk7XG4gICAgICAgICAgICBzcXVhcmVUb0NoYW5nZS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICAgIHNxdWFyZVRvQ2hhbmdlLnNldEF0dHJpYnV0ZShcImxlbmd0aFwiLCBzaGlwTGVuZ3RoKTtcbiAgICAgICAgICAgIHNxdWFyZVRvQ2hhbmdlLnNldEF0dHJpYnV0ZShcImdyYWJMb2NhdGlvblwiLCBpKTtcbiAgICAgICAgICAgIHNxdWFyZVRvQ2hhbmdlLnNldEF0dHJpYnV0ZShcImhvcml6b250YWxcIiwgaXNIb3Jpem9udGFsKVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyQXR0YWNrZWQgPSBmdW5jdGlvbihzcXVhcmVET01Ob2RlKXtcbiAgICAgICAgc3F1YXJlRE9NTm9kZS5jbGFzc0xpc3QuYWRkKFwiYXR0YWNrZWRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgcmV2ZWFsRGlhbG9nV2l0aFRleHQgPSBmdW5jdGlvbihzdHJpbmcgPSBcIlwiKXtcbiAgICAgICAgY29uc3QgZGlhbG9nSGVhZGVyID0gZGlhbG9nLmZpcnN0Q2hpbGQ7XG4gICAgICAgIGlmIChzdHJpbmcgIT0gXCJcIil7XG4gICAgICAgICAgICBkaWFsb2dIZWFkZXIudGV4dENvbnRlbnQgPSBzdHJpbmc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaWFsb2dIZWFkZXIudGV4dENvbnRlbnQgPSBcIlN3aXRjaCBQbGF5ZXJzIVwiXG4gICAgICAgIH1cbiAgICAgICAgLy8gYWRkIHNjcmVlbiBzd2FwcGluZyBvdmVybGF5XG4gICAgICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJUdXJuU3dpdGNoVG8gPSBmdW5jdGlvbihwbGF5ZXJOdW1iZXIsIHBsYXllck5hbWUpe1xuICAgICAgICByZXZlYWxEaWFsb2dXaXRoVGV4dChgJHtwbGF5ZXJOYW1lfSdzIFR1cm5gKTtcbiAgICAgICAgLy8gcGxheWVyTnVtYmVyIGlzIG51bWJlciBvZiBwbGF5ZXIgd2hvc2UgdHVybiBpdCBzaG91bGQgc3dpdGNoIFRPXG4gICAgICAgIC8vIGNoYW5nZSBoZWFkZXIgdG8gXCJJdCBpcyBwbGF5ZXJze3BsYXllck51bWJlcn0ubmFtZSdzIHR1cm5cIlxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVpLmNvbnRhaW5lciAudHVybi50ZXh0XCIpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lfSdzIFR1cm5gO1xuICAgICAgICAvLyBjaGFuZ2UgYm9hcmQgaGVhZGVyIGZyb20gXCJZb3VyIEJvYXJkXCIgdG8gXCJFbmVteSBCb2FyZFwiIGFuZCB2aXMgdmVyc2FcbiAgICAgICAgY29uc3QgYm9hcmQxSGVhZGVyID0gYm9hcmQxLnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xuICAgICAgICBjb25zdCBib2FyZDJIZWFkZXIgPSBib2FyZDIucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XG4gICAgICAgIC8vIGhpZGUgc2hpcHMgZnJvbSBlbmVteSBib2FyZCBhbmQgcmV2ZWFsIHNoaXBzIG9uIHlvdXIgYm9hcmRcbiAgICAgICAgY29uc3QgYm9hcmRET00xID0gYm9hcmQxLnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQuY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBib2FyZERPTTIgPSBib2FyZDIucXVlcnlTZWxlY3RvcihcIi5ib2FyZC5jb250YWluZXJcIik7XG4gICAgICAgIGlmIChwbGF5ZXJOdW1iZXIgPT0gMSl7XG4gICAgICAgICAgICBib2FyZDJIZWFkZXIudGV4dENvbnRlbnQgPSBcIkVuZW15IEJvYXJkXCI7XG4gICAgICAgICAgICBib2FyZDFIZWFkZXIudGV4dENvbnRlbnQgPSBcIllvdXIgQm9hcmRcIjtcbiAgICAgICAgICAgIGJvYXJkRE9NMS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgICAgICAgICAgIGJvYXJkRE9NMi5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvYXJkMUhlYWRlci50ZXh0Q29udGVudCA9IFwiRW5lbXkgQm9hcmRcIjtcbiAgICAgICAgICAgIGJvYXJkMkhlYWRlci50ZXh0Q29udGVudCA9IFwiWW91ciBCb2FyZFwiO1xuICAgICAgICAgICAgYm9hcmRET00xLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgICAgICAgICAgYm9hcmRET00yLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgICBcbiAgICBjb25zdCByZW5kZXJUdXJuQ291bnRlciA9IGZ1bmN0aW9uKHR1cm5OdW0pe1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVpLmNvbnRhaW5lciAudHVybi50ZXh0XCIpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgVHVybiAke3R1cm5OdW19YDtcbiAgICB9XG5cbiAgICAvLyByZW5kZXIgZW5kaW5nIGdhbWUgKHBsYXllck5hbWUgaGFzIHdvbilcbiAgICBjb25zdCByZW5kZXJFbmRHYW1lID0gZnVuY3Rpb24od2lubmVyTmFtZSl7XG4gICAgICAgIGNvbnN0IHdpbm5lclRleHRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZW5kIGNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3Qgd2lubmVyVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBcIndpbm5lciB0ZXh0XCIpO1xuICAgICAgICB3aW5uZXJUZXh0LnRleHRDb250ZW50ID0gYENvbmdyYXRzISAke3dpbm5lck5hbWV9IHdvbi5gOztcbiAgICAgICAgY29uc3QgcGxheUFnYWluQnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcInJlc2V0IGJ1dHRvblwiKTtcbiAgICAgICAgcGxheUFnYWluQnV0dG9uLnRleHRDb250ZW50ID0gXCJQbGF5IEFnYWluP1wiO1xuICAgICAgICB3aW5uZXJUZXh0Q29udGFpbmVyLmFwcGVuZCh3aW5uZXJUZXh0LCBwbGF5QWdhaW5CdXR0b24pO1xuICAgICAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLmNvbnRhaW5lclwiKTtcbiAgICAgICAgZ2FtZUNvbnRhaW5lci5hcHBlbmQod2lubmVyVGV4dENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyU3RhZ2luZyA9IGZ1bmN0aW9uKGF0dGFja01hcDEsIHNoaXBNYXAxLCBhdHRhY2tNYXAyLCBzaGlwTWFwMil7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudWkuY29udGFpbmVyIC50dXJuLnRleHRcIik7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiRHJhZyBhbmQgZHJvcCB0byBzZXQgdXAhXCI7XG4gICAgICAgIHJlbmRlckJvYXJkUmVzZXQoYXR0YWNrTWFwMSwgc2hpcE1hcDEsIGJvYXJkMS5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLmNvbnRhaW5lclwiKSk7XG4gICAgICAgIHJlbmRlckJvYXJkUmVzZXQoYXR0YWNrTWFwMiwgc2hpcE1hcDIsIGJvYXJkMi5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLmNvbnRhaW5lclwiKSk7XG4gICAgICAgIHJlbmRlclNoaXBTYW1wbGVzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlQm9hcmRWaXNpYmlsaXR5ID0gZnVuY3Rpb24oYm9hcmRET00pe1xuICAgICAgICBib2FyZERPTS5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJCb2FyZFJlc2V0ID0gZnVuY3Rpb24oYXR0YWNrTWFwLCBzaGlwTWFwLCBib2FyZERPTSl7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGk7XG4gICAgICAgICAgICBjb25zdCBhdHRhY2tlZEluUm93ID0gT2JqZWN0LmtleXMoYXR0YWNrTWFwW2ldKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBJblJvdyA9IE9iamVjdC5rZXlzKHNoaXBNYXBbaV0pO1xuICAgICAgICAgICAgZm9yIChsZXQgYXR0YWNrZWQgb2YgYXR0YWNrZWRJblJvdyl7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sID0gTnVtYmVyKGF0dGFja2VkKSsxO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdlRvVW5hdHRhY2sgPSBib2FyZERPTS5xdWVyeVNlbGVjdG9yKGBkaXYucm93LSR7cm93fSBkaXY6bnRoLWNoaWxkKCR7Y29sfSlgKTtcbiAgICAgICAgICAgICAgICBkaXZUb1VuYXR0YWNrLmNsYXNzTGlzdC5yZW1vdmUoXCJhdHRhY2tlZFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgc2hpcCBvZiBzaGlwSW5Sb3cpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IE51bWJlcihzaGlwKSsxO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdlRvVW5zaGlwID0gYm9hcmRET00ucXVlcnlTZWxlY3RvcihgZGl2LnJvdy0ke3Jvd30gZGl2Om50aC1jaGlsZCgke2NvbH0pYCk7XG4gICAgICAgICAgICAgICAgZGl2VG9VbnNoaXAuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIik7XG4gICAgICAgICAgICAgICAgZGl2VG9VbnNoaXAucmVtb3ZlQXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIpO1xuICAgICAgICAgICAgICAgIGRpdlRvVW5zaGlwLnJlbW92ZUF0dHJpYnV0ZShcImdyYWJsb2NhdGlvblwiKTtcbiAgICAgICAgICAgICAgICBkaXZUb1Vuc2hpcC5yZW1vdmVBdHRyaWJ1dGUoXCJsZW5ndGhcIik7XG4gICAgICAgICAgICAgICAgZGl2VG9VbnNoaXAucmVtb3ZlQXR0cmlidXRlKFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclNoaXBTYW1wbGVzID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgaGlkZGVuQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImhpZGRlbiBzYW1wbGVzXCIpO1xuICAgICAgICBjb25zdCBob3Jpem9udGFsU2hpcHMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2hpcHMgaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgY29uc3QgdmVydGljYWxTaGlwcyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzaGlwcyB2ZXJ0aWNhbFwiKTtcbiAgICAgICAgaG9yaXpvbnRhbFNoaXBzLmFwcGVuZChidWlsZFNoaXBPZkxlbmd0aCgyKSwgYnVpbGRTaGlwT2ZMZW5ndGgoMyksXG4gICAgICAgIGJ1aWxkU2hpcE9mTGVuZ3RoKDQpLCBidWlsZFNoaXBPZkxlbmd0aCg1KSk7XG4gICAgICAgIHZlcnRpY2FsU2hpcHMuYXBwZW5kKGJ1aWxkU2hpcE9mTGVuZ3RoKDIpLCBidWlsZFNoaXBPZkxlbmd0aCgzKSxcbiAgICAgICAgYnVpbGRTaGlwT2ZMZW5ndGgoNCksIGJ1aWxkU2hpcE9mTGVuZ3RoKDUpKTtcbiAgICAgICAgaGlkZGVuQ29udGFpbmVyLmFwcGVuZChob3Jpem9udGFsU2hpcHMsdmVydGljYWxTaGlwcyk7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxuICAgICAgICBib2R5LmFwcGVuZChoaWRkZW5Db250YWluZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkU2hpcE9mTGVuZ3RoID0gZnVuY3Rpb24obGVuZ3RoKXtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLFwic2hpcCBjb250YWluZXJcIik7XG4gICAgICAgIGNvbnRhaW5lci5pZCA9IGBsZW5ndGgtJHtsZW5ndGh9YDtcbiAgICAgICAgZm9yIChsZXQgaSA9MDsgaTxsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBwYXJ0ID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQocGFydCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJTdGFnaW5nQnV0dG9ucyA9IGZ1bmN0aW9uKGJvYXJkRE9NKXtcbiAgICAgICAgY29uc3QgYnV0dG9uQXJlYSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcImJ1dHRvbiBjb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIixcInN1Ym1pdCBzdGFnaW5nXCIpO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIkxvY2sgaW4gcG9zaXRpb25zIVwiO1xuICAgICAgICBjb25zdCBybmdCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwicmFuZG9taXplIGJ1dHRvblwiKTtcbiAgICAgICAgcm5nQnV0dG9uLnRleHRDb250ZW50ID0gXCJSYW5kb21pemVcIlxuICAgICAgICBidXR0b25BcmVhLmFwcGVuZChidXR0b24sIHJuZ0J1dHRvbik7XG4gICAgICAgIGJvYXJkRE9NLnBhcmVudE5vZGUuYXBwZW5kKGJ1dHRvbkFyZWEpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlck1vdmVTaGlwID0gZnVuY3Rpb24oW29sZFhTdGFydCwgb2xkWVN0YXJ0XSwgW25ld1hTdGFydCwgbmV3WVN0YXJ0XSwgc2hpcExlbmd0aCwgaXNIb3Jpem9udGFsLCBib2FyZERPTU5vZGUpe1xuICAgICAgICBpZiAob2xkWFN0YXJ0ID09IG5ld1hTdGFydCAmJiBvbGRZU3RhcnQgPT0gbmV3WVN0YXJ0KXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNIb3Jpem9udGFsID09IFwidHJ1ZVwiKXtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxzaGlwTGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZVRvUmVtb3ZlID0gYm9hcmRET01Ob2RlLnF1ZXJ5U2VsZWN0b3IoYC5yb3ctJHtvbGRYU3RhcnR9IGRpdjpudGgtY2hpbGQoJHtvbGRZU3RhcnQraSsxfSlgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBncmFibG9jYXRpb24gPSBzcXVhcmVUb1JlbW92ZS5nZXRBdHRyaWJ1dGUoXCJncmFibG9jYXRpb25cIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUucmVtb3ZlQXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLnJlbW92ZUF0dHJpYnV0ZShcImxlbmd0aFwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5yZW1vdmVBdHRyaWJ1dGUoXCJncmFibG9jYXRpb25cIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUucmVtb3ZlQXR0cmlidXRlKFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKVxuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZVRvQWRkID0gYm9hcmRET01Ob2RlLnF1ZXJ5U2VsZWN0b3IoYC5yb3ctJHtuZXdYU3RhcnR9IGRpdjpudGgtY2hpbGQoJHtuZXdZU3RhcnQraSsxfSlgKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuc2V0QXR0cmlidXRlKFwibGVuZ3RoXCIsIHNoaXBMZW5ndGgpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLnNldEF0dHJpYnV0ZShcImdyYWJsb2NhdGlvblwiLCBncmFibG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLnNldEF0dHJpYnV0ZShcImhvcml6b250YWxcIiwgaXNIb3Jpem9udGFsKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHNoaXBMZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlVG9SZW1vdmUgPSBib2FyZERPTU5vZGUucXVlcnlTZWxlY3RvcihgLnJvdy0ke29sZFhTdGFydCtpfSBkaXY6bnRoLWNoaWxkKCR7b2xkWVN0YXJ0KzF9KWApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyYWJsb2NhdGlvbiA9IHNxdWFyZVRvUmVtb3ZlLmdldEF0dHJpYnV0ZShcImdyYWJsb2NhdGlvblwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5yZW1vdmVBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUucmVtb3ZlQXR0cmlidXRlKFwibGVuZ3RoXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLnJlbW92ZUF0dHJpYnV0ZShcImdyYWJsb2NhdGlvblwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5yZW1vdmVBdHRyaWJ1dGUoXCJob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpXG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlVG9BZGQgPSBib2FyZERPTU5vZGUucXVlcnlTZWxlY3RvcihgLnJvdy0ke25ld1hTdGFydCtpfSBkaXY6bnRoLWNoaWxkKCR7bmV3WVN0YXJ0KzF9KWApO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5zZXRBdHRyaWJ1dGUoXCJsZW5ndGhcIiwgc2hpcExlbmd0aCk7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuc2V0QXR0cmlidXRlKFwiZ3JhYmxvY2F0aW9uXCIsIGdyYWJsb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuc2V0QXR0cmlidXRlKFwiaG9yaXpvbnRhbFwiLCBpc0hvcml6b250YWwpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlRW5kR2FtZUNvbnRhaW5lciA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGVuZEdhbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVuZC5jb250YWluZXJcIik7XG4gICAgICAgIGVuZEdhbWVDb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbmRHYW1lQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvLyByZW5kZXJpbmcgcHJlZ2FtZVxuICAgIGNvbnN0IHJlbmRlclByZWdhbWUgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICAgIGNvbnN0IHByZWdhbWVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJwcmVnYW1lIGNvbnRhaW5lclwiKTtcbiAgICAgICAgYm9keS5hcHBlbmQocHJlZ2FtZUNvbnRhaW5lcik7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gYnVpbGRQcmVnYW1lVGl0bGUoKTtcbiAgICAgICAgY29uc3QgZ2FtZVNlbGVjdGlvbkJ1dHRvbnMgPSBidWlsZFNlbGVjdEJ1dHRvbnMoKTtcbiAgICAgICAgcHJlZ2FtZUNvbnRhaW5lci5hcHBlbmQodGl0bGUsIGdhbWVTZWxlY3Rpb25CdXR0b25zKTtcbiAgICB9XG5cbiAgICBjb25zdCBidWlsZFByZWdhbWVUaXRsZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudChcImgxXCIsIFwidGl0bGVcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJCYXR0bGVzaGlwXCI7XG4gICAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9XG5cbiAgICBjb25zdCBidWlsZFNlbGVjdEJ1dHRvbnMgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJidXR0b24gY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBzaW5nbGVQbGF5ZXJCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsXCJzaW5nbGUgYnV0dG9uXCIpO1xuICAgICAgICBzaW5nbGVQbGF5ZXJCdXR0b24udGV4dENvbnRlbnQgPSBcIlNpbmdsZSBQbGF5ZXJcIlxuICAgICAgICBjb25zdCBkb3VibGVQbGF5ZXJCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiZG91YmxlIGJ1dHRvblwiKTtcbiAgICAgICAgZG91YmxlUGxheWVyQnV0dG9uLnRleHRDb250ZW50ID0gXCJIb3RzZWF0IFR3byBQbGF5ZXJcIlxuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kKHNpbmdsZVBsYXllckJ1dHRvbiwgZG91YmxlUGxheWVyQnV0dG9uKTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbkNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvLyB0aGlzIHNob3VsZCByZW5kZXIgYWZ0ZXIgZ2FtZSBzZWxlY3Rpb24gYnV0dG9uXG4gICAgLy8gaWYgYW4gZXhpc3RpbmcgZm9ybSBpcyB0aGVyZSwgb25seSBjaGFuZ2UgaW5wdXRzXG4gICAgY29uc3QgcmVuZGVyUGxheWVyTmFtZUZvcm0gPSBmdW5jdGlvbihpc1NpbmdsZVBsYXllcil7XG4gICAgICAgIGNvbnN0IG5ld0lucHV0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLFwiaW5wdXQgY29udGFpbmVyXCIpO1xuICAgICAgICBpZiAoaXNTaW5nbGVQbGF5ZXIpe1xuICAgICAgICAgICAgbmV3SW5wdXRDb250YWluZXIuYXBwZW5kKGJ1aWxkTmFtZUlucHV0KFwiV2hhdCBpcyB5b3VyIG5hbWU/XCIpKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgbmV3SW5wdXRDb250YWluZXIuYXBwZW5kKGJ1aWxkTmFtZUlucHV0KFwiRW50ZXIgcGxheWVyIDEgbmFtZS4uLlwiKSk7XG4gICAgICAgICAgICBuZXdJbnB1dENvbnRhaW5lci5hcHBlbmQoYnVpbGROYW1lSW5wdXQoXCJFbnRlciBwbGF5ZXIgMiBuYW1lLi4uXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS5jb250YWluZXJcIik7XG4gICAgICAgIGlmIChmb3JtQ29udGFpbmVyID09IG51bGwpe1xuICAgICAgICAgICAgZm9ybUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsXCJmb3JtIGNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kKG5ld0lucHV0Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGNvbnN0IHByZWdhbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWdhbWUuY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgcHJlZ2FtZUNvbnRhaW5lci5hcHBlbmQoZm9ybUNvbnRhaW5lcik7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIC8vIGp1c3QgcmVwbGFjZSBpbnB1dCBjb250YWluZXIgaWYgZm9ybSBhbHJlYWR5IGV4aXN0c1xuICAgICAgICAgICAgY29uc3Qgb2xkSW5wdXRDb250YWluZXIgPSBmb3JtQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQuY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5yZXBsYWNlQ2hpbGQobmV3SW5wdXRDb250YWluZXIsIG9sZElucHV0Q29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIGV4aXN0aW5nIGJ1dHRvbiBleGlzdHMsIHJlcGxhY2UgaXRcbiAgICBjb25zdCByZW5kZXJGb3JtQnV0dG9uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS5jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IG9sZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS5zdWJtaXRcIik7XG4gICAgICAgIGlmIChvbGRCdXR0b24gIT0gbnVsbCl7XG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLnJlbW92ZUNoaWxkKG9sZEJ1dHRvbik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcImZvcm0gc3VibWl0XCIpO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIkxldCdzIFBsYXkhXCI7XG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kKGJ1dHRvbik7XG4gICAgfVxuXG4gICAgY29uc3QgYnVpbGROYW1lSW5wdXQgPSBmdW5jdGlvbihwbGFjZWhvbGRlclN0cmluZyl7XG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBcIm5hbWUgaW5wdXRcIik7XG4gICAgICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIscGxhY2Vob2xkZXJTdHJpbmcpO1xuICAgICAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIDIwKTtcbiAgICAgICAgcmV0dXJuIG5hbWVJbnB1dDtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24oZWxlbWVudFR5cGUsIGNsYXNzU3RyaW5nID0gdW5kZWZpbmVkKXtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcbiAgICAgICAgaWYgKGNsYXNzU3RyaW5nICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NTdHJpbmcuc3BsaXQoXCIgXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm57XG4gICAgICAgIGluaXRHYW1lUmVuZGVyLFxuICAgICAgICByZW5kZXJOZXdTaGlwLFxuICAgICAgICByZW5kZXJBdHRhY2tlZCxcbiAgICAgICAgcmVuZGVyVHVyblN3aXRjaFRvLFxuICAgICAgICByZW5kZXJFbmRHYW1lLFxuICAgICAgICByZW5kZXJTdGFnaW5nLFxuICAgICAgICByZW5kZXJTaGlwU2FtcGxlcyxcbiAgICAgICAgcmVuZGVyTW92ZVNoaXAsXG4gICAgICAgIHJlbmRlclN0YWdpbmdCdXR0b25zLFxuICAgICAgICB0b2dnbGVCb2FyZFZpc2liaWxpdHksXG4gICAgICAgIHJlbmRlckJvYXJkUmVzZXQsXG4gICAgICAgIHJldmVhbERpYWxvZ1dpdGhUZXh0LFxuICAgICAgICByZW5kZXJQcmVnYW1lLFxuICAgICAgICByZW5kZXJQbGF5ZXJOYW1lRm9ybSxcbiAgICAgICAgcmVuZGVyRm9ybUJ1dHRvbixcbiAgICAgICAgcmVuZGVyVHVybkNvdW50ZXIsXG4gICAgICAgIHJlbW92ZUVuZEdhbWVDb250YWluZXIsXG4gICAgfVxuXG59KCk7XG5cbmV4cG9ydCB7UmVuZGVyTWFuYWdlcn07IiwiY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoKXtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgfVxuXG4gICAgaGl0KCl7XG4gICAgICAgIHRoaXMuaGl0cysrO1xuICAgIH1cblxuICAgIGlzU3Vuaygpe1xuICAgICAgICByZXR1cm4gKHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aClcbiAgICB9XG59XG5cbmV4cG9ydCB7U2hpcH07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gbW9kdWxlIHRvIG1hbmFnZSBnYW1lIHVzaW5nIGV2ZW50IGxpc3RlbmVycyB0byBpbnRlcmFjdCB3aXRoIG9iamVjdHNcbi8vIGNhbGxzIG1ldGhvZHMgaW4gcmVuZGVyLmpzIHRvIGNoYW5nZSBET01cbi8vIHJlYWxpc3RpY2FsbHkgZG9lcyBub3QgZXhwb3J0IGFueXRoaW5nIHNpbmNlIGl0IGlzIGEgZHJpdmVyXG5cbmltcG9ydCB7aHVtYW5QbGF5ZXIsIGNvbXB1dGVyUGxheWVyfSBmcm9tIFwiLi9wbGF5ZXIuanNcIlxuaW1wb3J0IHtSZW5kZXJNYW5hZ2VyfSBmcm9tIFwiLi9yZW5kZXIuanNcIlxuXG5jb25zdCBHYW1lTWFuYWdlciA9IGZ1bmN0aW9uKCl7XG5cbiAgICBjb25zdCBhZGROZXdTaGlwID0gZnVuY3Rpb24ocGxheWVyLCAuLi5jb29yZHMpe1xuICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLm5ld1NoaXAoLi4uY29vcmRzKTtcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJOZXdTaGlwKHBsYXllci5udW1iZXIsLi4uY29vcmRzKTtcbiAgICB9XG5cbiAgICAvLyBwYXNzZXMgdHVybiB0byBwbGF5ZXIgMSBpZiBudW1iZXIgPSAxXG4gICAgLy8gaWYgaXQgaXMgcGxheWVyIDEncyB0dXJuLCB0aGVuIGJvYXJkIDIgc2hvdWxkIGJlIEFDVElWRVxuICAgIGNvbnN0IHBhc3NUdXJuVG8gPSBmdW5jdGlvbihwbGF5ZXJOdW1iZXIpe1xuICAgICAgICBpZiAocGxheWVyTnVtYmVyID09IDEpe1xuICAgICAgICAgICAgYWN0aXZhdGVFdmVudExpc3RlbmVyKHBsYXllcnMucGxheWVyMi5ib2FyZERPTSk7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGFjdGl2YXRlRXZlbnRMaXN0ZW5lcihwbGF5ZXJzLnBsYXllcjEuYm9hcmRET00pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBsYXllck5hbWUgPSBPYmplY3QudmFsdWVzKHBsYXllcnMpW3BsYXllck51bWJlci0xXS5uYW1lO1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtwbGF5ZXJOYW1lfSdzIFR1cm5gKTtcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJUdXJuU3dpdGNoVG8ocGxheWVyTnVtYmVyLCBwbGF5ZXJOYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihib2FyZERPTU5vZGUpe1xuICAgICAgICBib2FyZERPTU5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUJvYXJkQ2xpY2spO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUJvYXJkQ2xpY2sgPSBhc3luYyBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIHR1cm5Db3VudGVyKys7XG4gICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGxldCBwbGF5ZXJOdW1iZXIgPSB0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcInBsYXllcm51bVwiKTtcbiAgICAgICAgbGV0IHkgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiY29sXCIpO1xuICAgICAgICBsZXQgeCA9IHRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcInJvd1wiKTtcbiAgICAgICAgbGV0IHBsYXllck9iamVjdCA9IHBsYXllck51bWJlciA9PSAxID8gcGxheWVycy5wbGF5ZXIxIDogcGxheWVycy5wbGF5ZXIyO1xuICAgICAgICBwbGF5ZXJPYmplY3QuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW3gseV0pO1xuICAgICAgICBjb25zb2xlLmxvZyhgUmVjZWl2ZWQgYXR0YWNrIGF0ICgke3h9LCR7eX0pIGZvciBwbGF5ZXIgJHtwbGF5ZXJOdW1iZXJ9YCk7XG4gICAgICAgIFJlbmRlck1hbmFnZXIucmVuZGVyQXR0YWNrZWQodGFyZ2V0KTtcbiAgICAgICAgcGxheWVyT2JqZWN0LmJvYXJkRE9NLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVCb2FyZENsaWNrKTtcbiAgICAgICAgYXdhaXQgc2hvcnRTbGVlcCgpO1xuICAgICAgICBpZiAocGxheWVyT2JqZWN0LmdhbWVib2FyZC5pc0FsbFN1bmsoKSl7XG4gICAgICAgICAgICBlbmRHYW1lKHBsYXllck51bWJlcik7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNTaW5nbGVQbGF5ZXIpe1xuICAgICAgICAgICAgYXdhaXQgZW11bGF0ZUNvbXB1dGVyVHVybigpO1xuICAgICAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJUdXJuQ291bnRlcih0dXJuQ291bnRlcik7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHBhc3NUdXJuVG8ocGxheWVyTnVtYmVyKTsgLy8gV2UgcGFzcyB0dXJuIHRvIHBsYXllcidzIGJvYXJkIHdlIGp1c3QgY2xpY2tlZFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZW11bGF0ZUNvbXB1dGVyVHVybiA9IGFzeW5jIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRW11bGF0aW5nIGNvbXB1dGVyJ3MgdHVyblwiKVxuICAgICAgICBjb25zdCBbcixjXSA9IHBsYXllcnMucGxheWVyMi5nYW1lYm9hcmQubWFrZUVkdWNhdGVkQXR0YWNrKHBsYXllcnMucGxheWVyMSk7XG4gICAgICAgIGNvbnN0IGhpdFRhcmdldCA9IHBsYXllcnMucGxheWVyMS5ib2FyZERPTS5xdWVyeVNlbGVjdG9yKGAucm93LSR7cn0gZGl2Om50aC1jaGlsZCgke2MrMX0pYClcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJBdHRhY2tlZChoaXRUYXJnZXQpO1xuICAgICAgICBpZiAocGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5pc0FsbFN1bmsoKSl7XG4gICAgICAgICAgICBhd2FpdCBzaG9ydFNsZWVwKCk7XG4gICAgICAgICAgICBlbmRHYW1lKDEpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBhY3RpdmF0ZUV2ZW50TGlzdGVuZXIocGxheWVycy5wbGF5ZXIyLmJvYXJkRE9NKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCB0dXJuQ291bnRlcjtcbiAgICBjb25zdCBpbml0UGxheSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHR1cm5Db3VudGVyID0gMTtcbiAgICAgICAgLy8gYXNzaWduIGV2ZW50IGxpc3RlbmVyIGZvciBhdHRhY2tzXG4gICAgICAgIC8vIGxhdGVyIG1ha2UgZmlyc3QgdHVybiByYW5kb20gb3IgY2hvc2VuXG4gICAgICAgIHBsYXllcnMucGxheWVyMS5ib2FyZERPTS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWdhbWVcIik7XG4gICAgICAgIHBsYXllcnMucGxheWVyMi5ib2FyZERPTS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWdhbWVcIik7XG4gICAgICAgIHBsYXllcnMucGxheWVyMi5ib2FyZERPTS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgICAgICAgcGFzc1R1cm5UbygxKTtcbiAgICAgICAgaWYgKGlzU2luZ2xlUGxheWVyKXtcbiAgICAgICAgICAgIFJlbmRlck1hbmFnZXIucmVuZGVyVHVybkNvdW50ZXIodHVybkNvdW50ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2dcIik7XG4gICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfTtcblxuICAgIGxldCBwbGF5ZXJzO1xuICAgIGxldCBpc1NpbmdsZVBsYXllcjtcbiAgICBjb25zdCBpbml0R2FtZSA9IGZ1bmN0aW9uKHBsYXllcjFOYW1lID0gXCJQbGF5ZXIgMVwiLCBwbGF5ZXIyTmFtZSA9IFwiUGxheWVyIDJcIil7XG4gICAgICAgIGNvbnN0IHBsYXllcjEgPSBuZXcgaHVtYW5QbGF5ZXIocGxheWVyMU5hbWUsIDEpO1xuICAgICAgICBsZXQgcGxheWVyMjtcbiAgICAgICAgaWYgKHBsYXllcjJOYW1lID09IGZhbHNlKXtcbiAgICAgICAgICAgIHBsYXllcjIgPSBuZXcgY29tcHV0ZXJQbGF5ZXIoMik7XG4gICAgICAgICAgICBpc1NpbmdsZVBsYXllciA9IHRydWU7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHBsYXllcjIgPSBuZXcgaHVtYW5QbGF5ZXIocGxheWVyMk5hbWUsIDIpO1xuICAgICAgICAgICAgaXNTaW5nbGVQbGF5ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBSZW5kZXJNYW5hZ2VyLmluaXRHYW1lUmVuZGVyKHBsYXllcjEsIHBsYXllcjIpO1xuICAgICAgICBjb25zdCBib2FyZDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLWFuZC1oZWFkZXIucGxheWVyLTEgLmJvYXJkLmNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgYm9hcmQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC1hbmQtaGVhZGVyLnBsYXllci0yIC5ib2FyZC5jb250YWluZXJcIik7XG4gICAgICAgIHBsYXllcjEuYm9hcmRET00gPSBib2FyZDE7XG4gICAgICAgIHBsYXllcjIuYm9hcmRET00gPSBib2FyZDI7XG4gICAgICAgIC8vIGVhY2ggcGxheWVyIGhhcyA1IHNoaXBzIG9mIHNpemUgMiwgMywgMywgNCwgNVxuICAgICAgICBwbGF5ZXJzID0ge3BsYXllcjEsIHBsYXllcjJ9O1xuICAgICAgICBlbnRlckdhbWVTdGFnaW5nKCk7XG4gICAgICAgIC8vanVzdCBmb3IgdGVzdGluZyFcbiAgICAgICAgLy9jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVpLmNvbnRhaW5lclwiKTtcbiAgICAgICAgLy9oZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGVuZEdhbWUoMSkpXG4gICAgfTtcblxuICAgIC8vIHBsYXllciB3aXRoIHBsYXllck51bWJlciBsb3N0XG4gICAgY29uc3QgZW5kR2FtZSA9IGZ1bmN0aW9uKHBsYXllck51bWJlcil7XG4gICAgICAgIHBsYXllcnMucGxheWVyMS5ib2FyZERPTS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLWdhbWVcIik7XG4gICAgICAgIHBsYXllcnMucGxheWVyMi5ib2FyZERPTS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLWdhbWVcIik7XG4gICAgICAgIGxldCB3aW5uZXJOYW1lO1xuICAgICAgICBpZiAocGxheWVyTnVtYmVyID09MSl7XG4gICAgICAgICAgICB3aW5uZXJOYW1lID0gcGxheWVycy5wbGF5ZXIyLm5hbWU7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHdpbm5lck5hbWUgPSBwbGF5ZXJzLnBsYXllcjEubmFtZTtcbiAgICAgICAgfVxuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlckVuZEdhbWUod2lubmVyTmFtZSk7XG4gICAgICAgIGFjdGl2YXRlUmVwbGF5QnV0dG9uKCk7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVSZXBsYXlCdXR0b24gPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCByZXBsYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmVuZC5jb250YWluZXIgYnV0dG9uXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXBsYXlCdXR0b24pO1xuICAgICAgICByZXBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIFJlbmRlck1hbmFnZXIucmVtb3ZlRW5kR2FtZUNvbnRhaW5lcigpO1xuICAgICAgICAgICAgZW50ZXJHYW1lU3RhZ2luZygpO1xuICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gU1RBUlQgT0YgQ09ERSBSRUxBVEVEIFRPIEdBTUUgU1RBR0lOR1xuICAgIGNvbnN0IGVudGVyR2FtZVN0YWdpbmcgPSBmdW5jdGlvbigpe1xuICAgICAgICAvLyBhY3RpdmF0ZSBkcmFnIGFuZCBkcm9wIG9mIHNoaXBzIHRvIGNob29zZSBzaGlwIGxvY2F0aW9uIHVzaW5nIEhUTUwgZHJhZyBhbmQgZHJvcCBBUEkhXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRW50ZXJpbmcgbmV3IGdhbWUgc3RhZ2luZyFcIilcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJTdGFnaW5nKFxuICAgICAgICAgICAgcGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5nZXRBdHRhY2tNYXAoKSxcbiAgICAgICAgICAgIHBsYXllcnMucGxheWVyMS5nYW1lYm9hcmQuZ2V0Qm9hcmRNYXAoKSxcbiAgICAgICAgICAgIHBsYXllcnMucGxheWVyMi5nYW1lYm9hcmQuZ2V0QXR0YWNrTWFwKCksXG4gICAgICAgICAgICBwbGF5ZXJzLnBsYXllcjIuZ2FtZWJvYXJkLmdldEJvYXJkTWFwKClcbiAgICAgICAgKTtcbiAgICAgICAgcGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5yZXNldEJvYXJkKCk7XG4gICAgICAgIHBsYXllcnMucGxheWVyMi5nYW1lYm9hcmQucmVzZXRCb2FyZCgpO1xuICAgICAgICBhY3RpdmF0ZVN0YWdpbmcocGxheWVycy5wbGF5ZXIxKVxuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlU3RhZ2luZyA9IGZ1bmN0aW9uKHBsYXllcil7XG4gICAgICAgIGNvbnN0IGJvYXJkMSA9IHBsYXllci5ib2FyZERPTTtcbiAgICAgICAgUmVuZGVyTWFuYWdlci50b2dnbGVCb2FyZFZpc2liaWxpdHkoYm9hcmQxKTtcbiAgICAgICAgcmVuZGVyRHJhZ2dhYmxlU2hpcHNUb1N0YWdlKHBsYXllcik7XG4gICAgICAgIGFjdGl2YXRlRHJvcEFuZERyYWdTdGFydEhhbmRsZXIoYm9hcmQxKTtcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJTdGFnaW5nQnV0dG9ucyhib2FyZDEpO1xuICAgICAgICBhY3RpdmF0ZVN0YWdpbmdCdXR0b25zKHBsYXllcik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyRHJhZ2dhYmxlU2hpcHNUb1N0YWdlID0gZnVuY3Rpb24ocGxheWVyKXtcbiAgICAgICAgYWRkTmV3U2hpcFdpdGhEcmFnZ2luZyhwbGF5ZXIsWzAsMF0sWzAsMV0pXG4gICAgICAgIGFkZE5ld1NoaXBXaXRoRHJhZ2dpbmcocGxheWVyLFszLDNdLFs0LDNdLFs1LDNdKTtcbiAgICAgICAgYWRkTmV3U2hpcFdpdGhEcmFnZ2luZyhwbGF5ZXIsWzcsN10sWzgsN10sWzksN10pO1xuICAgICAgICBhZGROZXdTaGlwV2l0aERyYWdnaW5nKHBsYXllcixbMCwzXSwgWzAsNF0sWzAsNV0sWzAsNl0pO1xuICAgICAgICBhZGROZXdTaGlwV2l0aERyYWdnaW5nKHBsYXllcixbNSw1XSwgWzYsNV0sWzcsNV0sWzgsNV0sWzksNV0pO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZE5ld1NoaXBXaXRoRHJhZ2dpbmcgPSBmdW5jdGlvbihwbGF5ZXIsIC4uLmNvb3Jkcyl7XG4gICAgICAgIGFkZE5ld1NoaXAocGxheWVyLCAuLi5jb29yZHMpO1xuICAgICAgICBzZXRTcGVjaWZpY0RyYWdnYWJsZShwbGF5ZXIuYm9hcmRET00sIC4uLmNvb3Jkcyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0U3BlY2lmaWNEcmFnZ2FibGUgPSBmdW5jdGlvbihib2FyZERPTSwgLi4uY29vcmRzKXtcbiAgICAgICAgZm9yIChsZXQgW3gseV0gb2YgY29vcmRzKXtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGJvYXJkRE9NLnF1ZXJ5U2VsZWN0b3IoYC5yb3ctJHt4fSBkaXY6bnRoLWNoaWxkKCR7eSsxfSlgKTtcbiAgICAgICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZVN0YWdpbmdCdXR0b25zID0gZnVuY3Rpb24ocGxheWVyKXtcbiAgICAgICAgY29uc3QgYm9hcmRET00gPSBwbGF5ZXIuYm9hcmRET007XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGJvYXJkRE9NLm5leHRFbGVtZW50U2libGluZy5maXJzdENoaWxkO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNvbXBsZXRlU3RhZ2luZyhib2FyZERPTSkpXG4gICAgICAgIGNvbnN0IHJuZ0J1dHRvbiA9IGJ1dHRvbi5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIHJuZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcmFuZG9taXplQm9hcmQocGxheWVyKSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmFuZG9taXplQm9hcmQgPSBmdW5jdGlvbihwbGF5ZXIpe1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlckJvYXJkUmVzZXQocGxheWVyLmdhbWVib2FyZC5nZXRBdHRhY2tNYXAoKSxcbiAgICAgICAgcGxheWVyLmdhbWVib2FyZC5nZXRCb2FyZE1hcCgpLCBwbGF5ZXIuYm9hcmRET00pO1xuICAgICAgICBjb25zdCByYW5kb21Db29yZHMgPSBwbGF5ZXIuZ2FtZWJvYXJkLnJhbmRvbWl6ZUJvYXJkKCk7XG4gICAgICAgIC8vIHJhbmRvbUNvb3JkcyBpcyB7Y29vcmRzMSwgY29vcmRzMiwgLi4uIGNvb3JkczV9IHdoZXJlIGVhY2ggY29vcmRzIGlzIGFuIGFycmF5IG9mIFt4LHldc1xuICAgICAgICBmb3IgKGxldCBjb29yZHNBcnJheSBvZiBPYmplY3QudmFsdWVzKHJhbmRvbUNvb3Jkcykpe1xuICAgICAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJOZXdTaGlwKHBsYXllci5udW1iZXIsIC4uLmNvb3Jkc0FycmF5KTtcbiAgICAgICAgICAgIHNldFNwZWNpZmljRHJhZ2dhYmxlKHBsYXllci5ib2FyZERPTSwgLi4uY29vcmRzQXJyYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGVTdGFnaW5nID0gYXN5bmMgZnVuY3Rpb24oYm9hcmRET00pe1xuICAgICAgICBkZWFjdGl2YXRlU3RhZ2luZyhib2FyZERPTSk7XG4gICAgICAgIGlmIChib2FyZERPTS5nZXRBdHRyaWJ1dGUoXCJwbGF5ZXJudW1cIikgPT0gXCIxXCIgJiYgIWlzU2luZ2xlUGxheWVyKXtcbiAgICAgICAgICAgIFJlbmRlck1hbmFnZXIucmV2ZWFsRGlhbG9nV2l0aFRleHQoYExldCAke3BsYXllcnMucGxheWVyMi5uYW1lfSBzZXQgdXAuYCk7XG4gICAgICAgICAgICBhY3RpdmF0ZVN0YWdpbmcocGxheWVycy5wbGF5ZXIyKTtcbiAgICAgICAgfSBlbHNlIGlmICghaXNTaW5nbGVQbGF5ZXIpe1xuICAgICAgICAgICAgaW5pdFBsYXkoKTtcbiAgICAgICAgICAgIFJlbmRlck1hbmFnZXIucmV2ZWFsRGlhbG9nV2l0aFRleHQoYCR7cGxheWVycy5wbGF5ZXIxLm5hbWV9J3MgdHVybiBmaXJzdC5gKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgLy8gdGhpcyBjYXNlIGlzIHdoZW4gaXQgaXMgYSBzaW5nbGUgcGxheWVyIGdhbWVcbiAgICAgICAgICAgIHJhbmRvbWl6ZUJvYXJkKHBsYXllcnMucGxheWVyMik7XG4gICAgICAgICAgICBpbml0UGxheSgpO1xuICAgICAgICAgICAgUmVuZGVyTWFuYWdlci5yZXZlYWxEaWFsb2dXaXRoVGV4dChgWW91ciB0dXJuIGZpcnN0LmApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGVhY3RpdmF0ZVN0YWdpbmcgPSBmdW5jdGlvbihib2FyZERPTSl7XG4gICAgICAgIFJlbmRlck1hbmFnZXIudG9nZ2xlQm9hcmRWaXNpYmlsaXR5KGJvYXJkRE9NKTtcbiAgICAgICAgY29uc3QgYnV0dG9uQXJlYSA9IGJvYXJkRE9NLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgYnV0dG9uQXJlYS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJ1dHRvbkFyZWEpO1xuICAgICAgICBjb25zdCByb3dzID0gYm9hcmRET00uY2hpbGRyZW47XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHJvd3NbaV07XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVzID0gcm93LmNoaWxkcmVuO1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPDEwOyBqKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IHNxdWFyZXNbal07XG4gICAgICAgICAgICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBvbmRyYWdvdmVySGFuZGxlcik7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGRyb3BIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnc3RhcnRIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUucmVtb3ZlQXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGFyZ2V0IGlzIDxkaXYgY29sPVwiXCI+IChlZzogc3F1YXJlKVxuICAgIGNvbnN0IGRyYWdzdGFydEhhbmRsZXIgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZHJhZyBldmVudCB0cmlnZ2VyZWRcIik7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgbGV0IHNoaXBMZW5ndGggPSBOdW1iZXIodGFyZ2V0LmdldEF0dHJpYnV0ZShcImxlbmd0aFwiKSk7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwic2hpcExlbmd0aFwiLCBzaGlwTGVuZ3RoKTtcbiAgICAgICAgbGV0IGdyYWJMb2NhdGlvbiA9IE51bWJlcih0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZ3JhYmxvY2F0aW9uXCIpKTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJncmFiTG9jYXRpb25cIiwgZ3JhYkxvY2F0aW9uKTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJob3Jpem9udGFsXCIsIHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJob3Jpem9udGFsXCIpKTtcbiAgICAgICAgbGV0IHN0YXJ0Um93ID0gTnVtYmVyKHRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcInJvd1wiKSk7XG4gICAgICAgIGxldCBzdGFydENvbCA9IE51bWJlcih0YXJnZXQuZ2V0QXR0cmlidXRlKFwiY29sXCIpKTtcbiAgICAgICAgbGV0IGlzSG9yaXpvbnRhbCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJob3Jpem9udGFsXCIpO1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInN0YXJ0Um93XCIsIHN0YXJ0Um93KTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJzdGFydENvbFwiLCBzdGFydENvbCk7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiaXNIb3Jpem9udGFsXCIsIGlzSG9yaXpvbnRhbClcbiAgICAgICAgY29uc3Qgd2lkdGhPZkRpdiA9IDIwO1xuICAgICAgICBjb25zdCB3aWR0aE9mR2FwID0gMTtcbiAgICAgICAgLy8gaWYgZ3JhYmxvY2F0aW9uID0gMCwgZG9uJ3QgYWRkIGFueXRoaW5nXG4gICAgICAgIC8vIGlmIGdyYWJsb2NhdGlvbiA9IDEsIGFkZCAxIGdhcCBhbmQgMSBkaXZcbiAgICAgICAgLy8gaWYgZ3JhYmxvY2F0aW9uID0gMiwgYWRkIDIgZ2FwcyBhbmQgMiBkaXZzXG4gICAgICAgIGxldCBhZGRPZmZzZXRYID0gMDtcbiAgICAgICAgbGV0IGFkZE9mZnNldFkgPSAwO1xuICAgICAgICBsZXQgZHJhZ0ltYWdlTm9kZTtcbiAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCA9PSBcInRydWVcIil7XG4gICAgICAgICAgICBkcmFnSW1hZ2VOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmhpZGRlbi5zYW1wbGVzIC5zaGlwcy5ob3Jpem9udGFsICNsZW5ndGgtJHtzaGlwTGVuZ3RofWApO1xuICAgICAgICAgICAgYWRkT2Zmc2V0WCA9IChncmFiTG9jYXRpb24gKiAod2lkdGhPZkRpdit3aWR0aE9mR2FwKSk7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGRyYWdJbWFnZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaGlkZGVuLnNhbXBsZXMgLnNoaXBzLnZlcnRpY2FsICNsZW5ndGgtJHtzaGlwTGVuZ3RofWApO1xuICAgICAgICAgICAgYWRkT2Zmc2V0WSA9IChncmFiTG9jYXRpb24gKiAod2lkdGhPZkRpdit3aWR0aE9mR2FwKSlcbiAgICAgICAgfVxuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKGRyYWdJbWFnZU5vZGUsZXZlbnQub2Zmc2V0WCArIGFkZE9mZnNldFgsZXZlbnQub2Zmc2V0WSthZGRPZmZzZXRZKTtcbiAgICAgICAgLy8gZHluYW1pY2FsbHkgYWxsb3cgd2hlcmUgd2UgY2FuIGRyb3Agd2l0aCBvbmRyYWdvdmVyIGF0dHJpYnV0ZVxuICAgICAgICBjb25zdCBwbGF5ZXJOdW0gPSB0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcInBsYXllcm51bVwiKTtcbiAgICAgICAgbGV0IHBsYXllclZhcjtcbiAgICAgICAgaWYgKHBsYXllck51bSA9PTEpe1xuICAgICAgICAgICAgcGxheWVyVmFyID0gcGxheWVycy5wbGF5ZXIxO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBwbGF5ZXJWYXIgPSBwbGF5ZXJzLnBsYXllcjI7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJwbGF5ZXJudW1cIiwgcGxheWVyTnVtKTtcbiAgICAgICAgY29uc3Qgc2hpcE9iamVjdCA9IHBsYXllclZhci5nYW1lYm9hcmQuZ2V0U2hpcEZyb21Db29yZHMoW3N0YXJ0Um93LCBzdGFydENvbF0pO1xuICAgICAgICBwbGF5ZXJWYXIuZ2FtZWJvYXJkLmNyZWF0ZUFsbG93ZWRQb3NpdGlvbk1hcChzaGlwT2JqZWN0LCBpc0hvcml6b250YWwsIGdyYWJMb2NhdGlvbik7XG4gICAgICAgIGFjdGl2YXRlT25kcmFnb3ZlcihwbGF5ZXJWYXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlT25kcmFnb3ZlciA9IGZ1bmN0aW9uKHBsYXllcil7XG4gICAgICAgIGNvbnN0IHJvd3MgPSBwbGF5ZXIuYm9hcmRET00uY2hpbGRyZW47XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHJvd3NbaV07XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVzID0gcm93LmNoaWxkcmVuO1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPDEwOyBqKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IHNxdWFyZXNbal07XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgJHtwbGF5ZXIuZ2FtZWJvYXJkLmlzVGhpc0FsbG93ZWRQbGFjZW1lbnQoW2ksal0pfWApXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQuaXNUaGlzQWxsb3dlZFBsYWNlbWVudChbaSxqXSkpe1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIG9uZHJhZ292ZXJIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgZHJhZ292ZXIgYWxsb3dlZCBvbiBbJHtpfSwgJHtqfV1gKVxuICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBvbmRyYWdvdmVySGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYGRyYWdvdmVyIG5vdCBhbGxvd2VkIG9uIFske2l9LCAke2p9XWApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVEcm9wQW5kRHJhZ1N0YXJ0SGFuZGxlciA9IGZ1bmN0aW9uKHBsYXllckJvYXJkKXtcbiAgICAgICAgZm9yIChsZXQgcm93IG9mIHBsYXllckJvYXJkLmNoaWxkcmVuKXtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCBvZiByb3cuY2hpbGRyZW4pe1xuICAgICAgICAgICAgICAgIGNvbC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBkcm9wSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgY29sLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZ3N0YXJ0SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvbmRyYWdvdmVySGFuZGxlciA9IGZ1bmN0aW9uKGV2KXtcbiAgICAgICAgY29uc29sZS5sb2coXCJkcmFnb3ZlciBkZXRlY3RlZCFcIilcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBkcm9wSGFuZGxlciA9IGZ1bmN0aW9uKGV2KXtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgcm93ID0gTnVtYmVyKGV2LnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcInJvd1wiKSk7XG4gICAgICAgIGNvbnN0IGNvbCA9IE51bWJlcihldi50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY29sXCIpKTtcbiAgICAgICAgbGV0IG5ld1N0YXJ0Um93ID0gcm93O1xuICAgICAgICBsZXQgb2xkU3RhcnRSb3cgPSBOdW1iZXIoZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJzdGFydFJvd1wiKSk7XG4gICAgICAgIGxldCBuZXdTdGFydENvbCA9IGNvbDtcbiAgICAgICAgbGV0IG9sZFN0YXJ0Q29sID0gTnVtYmVyKGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwic3RhcnRDb2xcIikpO1xuICAgICAgICBjb25zdCBncmFiTG9jYXRpb24gPSBOdW1iZXIoZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJncmFiTG9jYXRpb25cIikpO1xuICAgICAgICBjb25zdCBpc0hvcml6b250YWwgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImlzSG9yaXpvbnRhbFwiKTtcbiAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCA9PSBcInRydWVcIil7XG4gICAgICAgICAgICBuZXdTdGFydENvbCAtPSBncmFiTG9jYXRpb247XG4gICAgICAgICAgICBvbGRTdGFydENvbCAtPSBncmFiTG9jYXRpb247XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIG5ld1N0YXJ0Um93IC09IGdyYWJMb2NhdGlvbjtcbiAgICAgICAgICAgIG9sZFN0YXJ0Um93IC09IGdyYWJMb2NhdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwbGF5ZXJOdW0gPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInBsYXllcm51bVwiKTtcbiAgICAgICAgbGV0IHBsYXllcjtcbiAgICAgICAgaWYgKHBsYXllck51bSA9PTEpe1xuICAgICAgICAgICAgcGxheWVyID0gcGxheWVycy5wbGF5ZXIxO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBwbGF5ZXIgPSBwbGF5ZXJzLnBsYXllcjI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IE51bWJlcihldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInNoaXBMZW5ndGhcIikpO1xuICAgICAgICAvLyBjaGFuZ2UgdGhlIGdhbWVib2FyZCBkYXRhXG4gICAgICAgIHBsYXllci5nYW1lYm9hcmQubW92ZVNoaXAocGxheWVyLmdhbWVib2FyZC5nZXRTaGlwRnJvbUNvb3Jkcyhbb2xkU3RhcnRSb3csb2xkU3RhcnRDb2xdKSxcbiAgICAgICAgW25ld1N0YXJ0Um93LG5ld1N0YXJ0Q29sXSwgc2hpcExlbmd0aCwgaXNIb3Jpem9udGFsKTtcbiAgICAgICAgLy8gcmVuZGVyIGNoYW5nZXMgYW5kIGFsc28gbWFuYWdlcyBkcmFnZ2FibGVcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJNb3ZlU2hpcChbb2xkU3RhcnRSb3csb2xkU3RhcnRDb2xdLFxuICAgICAgICBbbmV3U3RhcnRSb3csbmV3U3RhcnRDb2xdLCBzaGlwTGVuZ3RoLCBpc0hvcml6b250YWwsIHBsYXllci5ib2FyZERPTSk7XG4gICAgfVxuICAgIC8vIEVORCBPRiBDT0RFIFJFTEFURUQgVE8gU1RBR0lOR1xuXG4gICAgY29uc3Qgc2hvcnRTbGVlcCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpO1xuICAgIH1cblxuICAgIC8vIFByZWdhbWUgY29kZSAobGlrZSB3aGVyZSB5b3UgcHV0IHBsYXllciBuYW1lcyBhbmQgY2hvb3NlIGdhbWUgdHlwZSlcbiAgICBjb25zdCBpbml0UHJlZ2FtZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIHJlbmRlcnMgdGl0bGUsIGdhbWUgbW9kZSBzZWxlY3Rpb24sIGZvcm0gZm9yIG5hbWVzLCBidXR0b24gdG8gc3RhcnRcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJQcmVnYW1lKCk7XG4gICAgICAgIGFjdGl2YXRlUHJlZ2FtZUJ1dHRvbnMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZVByZWdhbWVCdXR0b25zID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgYnV0dG9uc0FyciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJlZ2FtZS5jb250YWluZXIgLmJ1dHRvbi5jb250YWluZXIgLmJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uc0FyclswXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gaGFuZGxlUHJlZ2FtZUJ1dHRvbkNsaWNrKHRydWUpKTtcbiAgICAgICAgYnV0dG9uc0FyclsxXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gaGFuZGxlUHJlZ2FtZUJ1dHRvbkNsaWNrKGZhbHNlKSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUHJlZ2FtZUJ1dHRvbkNsaWNrID0gZnVuY3Rpb24oaXNTaW5nbGVQbGF5ZXIpe1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlclBsYXllck5hbWVGb3JtKGlzU2luZ2xlUGxheWVyKTtcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJGb3JtQnV0dG9uKGlzU2luZ2xlUGxheWVyKTtcbiAgICAgICAgYWN0aXZhdGVGb3JtQnV0dG9ucyhpc1NpbmdsZVBsYXllcik7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVGb3JtQnV0dG9ucyA9IGZ1bmN0aW9uKGlzU2luZ2xlUGxheWVyKXtcbiAgICAgICAgY29uc3QgZm9ybVN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZ2FtZS5jb250YWluZXIgLmZvcm0uc3VibWl0XCIpO1xuICAgICAgICBmb3JtU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IGhhbmRsZUZvcm1TdWJtaXQoZXZlbnQsaXNTaW5nbGVQbGF5ZXIpKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gZnVuY3Rpb24oZXZlbnQsaXNTaW5nbGVQbGF5ZXIpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgIGxldCBmb3JtMVZhbHVlID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcIi5uYW1lLmlucHV0XCIpLnZhbHVlO1xuICAgICAgICBpZiAoZm9ybTFWYWx1ZSA9PVwiXCIpe1xuICAgICAgICAgICAgZm9ybTFWYWx1ZSA9IFwiUGxheWVyIDFcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNTaW5nbGVQbGF5ZXIpe1xuICAgICAgICAgICAgaW5pdEdhbWUoZm9ybTFWYWx1ZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGZvcm0yVmFsdWUgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLm5hbWUuaW5wdXQ6bnRoLWNoaWxkKDIpXCIpLnZhbHVlO1xuICAgICAgICAgICAgaWYgKGZvcm0yVmFsdWUgPT1cIlwiKXtcbiAgICAgICAgICAgICAgICBmb3JtMlZhbHVlID0gXCJQbGF5ZXIgMlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5pdEdhbWUoZm9ybTFWYWx1ZSxmb3JtMlZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gRFJJVkVSIENPREVcbiAgICBpbml0UHJlZ2FtZSgpO1xuXG4gICAgcmV0dXJue1xuICAgICAgICBwbGF5ZXJzLFxuICAgIH1cbn0oKTtcblxuZXhwb3J0IHtHYW1lTWFuYWdlcn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=