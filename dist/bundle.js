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
    display:grid;
    grid-template-rows: max-content 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 12px 36px;
    align-items: start;

    /* grid area is r / c / r / c */
    .ui.container{
        margin-top: 15vh;
        grid-area: 1 / 1 / 2 / 3;
        justify-self:center;
    }

    .board-and-header.container{
        width:min-content;
        display:grid;
        grid-template-rows: 72px 1fr min-content;
        gap: 12px;

        .board.header{
            align-self: end;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,+BAA+B;IAC/B,8BAA8B;IAC9B,uBAAuB;IACvB,yBAAyB,EAAE,MAAM;IACjC,iCAAiC,EAAE,QAAQ;IAC3C,qBAAqB,EAAE,OAAO;IAC9B,iCAAiC;IACjC,gCAAgC;IAChC,6CAA6C;IAC7C,wCAAwC;AAC5C;;AAEA;IACI,QAAQ;IACR,SAAS;AACb;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;;IAET;QACI,mBAAmB;QACnB,cAAc;IAClB;;IAEA;QACI,aAAa;QACb,8BAA8B;QAC9B,2BAA2B;QAC3B,QAAQ;;QAER;YACI,kBAAkB;YAClB,aAAa;QACjB;;QAEA;YACI,kBAAkB;YAClB,aAAa;QACjB;IACJ;;IAEA;QACI,gBAAgB;QAChB,aAAa;QACb,sBAAsB;QACtB,QAAQ;;QAER;YACI,YAAY;YACZ,mBAAmB;YACnB,QAAQ;;YAER;gBACI,kBAAkB;gBAClB,+CAA+C;gBAC/C,mBAAmB;YACvB;QACJ;;QAEA;YACI,kBAAkB;YAClB,kBAAkB;QACtB;IACJ;AACJ;;AAEA;IACI,sCAAsC;IACtC,kBAAkB;IAClB,qCAAqC;IACrC,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,qCAAqC;IACrC,0BAA0B;IAC1B,YAAY;AAChB;;AAEA;IACI,sCAAsC;IACtC,wBAAwB;AAC5B;;AAEA;IACI,YAAY;IACZ,mCAAmC;IACnC,8BAA8B;IAC9B,cAAc;IACd,kBAAkB;;IAElB,+BAA+B;IAC/B;QACI,gBAAgB;QAChB,wBAAwB;QACxB,mBAAmB;IACvB;;IAEA;QACI,iBAAiB;QACjB,YAAY;QACZ,wCAAwC;QACxC,SAAS;;QAET;YACI,eAAe;QACnB;;QAEA;YACI,kBAAkB;YAClB,oBAAoB;YACpB,YAAY;YACZ,sBAAsB;YACtB,QAAQ;QACZ;;QAEA;YACI,YAAY;QAChB;IACJ;;IAEA;QACI,wBAAwB;QACxB,iBAAiB;IACrB;;IAEA;QACI,wBAAwB;QACxB,mBAAmB;IACvB;;IAEA;QACI,kBAAkB;QAClB,eAAe;IACnB;;IAEA;QACI,wBAAwB;IAC5B;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,kBAAkB;IAClB,yCAAyC;;IAEzC;QACI,aAAa;QACb,mBAAmB;QACnB,QAAQ;;QAER;YACI,iBAAiB;YACjB,YAAY;YACZ,8CAA8C;QAClD;;QAEA;YACI,+CAA+C;QACnD;;QAEA;YACI,uCAAuC;QAC3C;IACJ;AACJ;;AAEA;IACI;QACI,mCAAmC;IACvC;AACJ;;AAEA,yCAAyC;AACzC;IACI;QACI,aAAa;QACb,QAAQ;QACR,sBAAsB;;QAEtB;YACI,yCAAyC;YACzC,kBAAkB;YAClB,aAAa;YACb,mBAAmB;YACnB,QAAQ;;YAER;gBACI,iBAAiB;gBACjB,YAAY;gBACZ,kCAAkC;YACtC;QACJ;IACJ;;IAEA;QACI,sBAAsB;IAC1B;AACJ;;AAEA;IACI,iCAAiC;AACrC;;AAEA,iBAAiB;AACjB;IACI,gDAAgD;AACpD","sourcesContent":[":root{\n    --content-color: #D6FFF6;\n    --button-clicked-color: #c3ecc3;\n    --bg-color: rgb(255, 255, 240);\n    --accent-color: #4DCCBD;\n    --attacked-color: #ffc2c2; /*red*/\n    --attacked-and-hit-color: #bffdc2; /*green*/\n    --ship-color: #b3c7ff; /*blue*/\n    --board-background-color: #525252;\n    --board-grid-color: rgb(0, 0, 0);\n    --dialog-background-color: rgb(255, 198, 255);\n    font-family:Arial, Helvetica, sans-serif;\n}\n\nh1,h2,h3,p,button{\n    margin:0;\n    padding:0;\n}\n\nbody{\n    background-color: var(--bg-color);\n}\n\n.pregame.container{\n    margin-top: 30vh;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n\n    .title{\n        font-weight: bolder;\n        font-size: 500;\n    }\n\n    .button.container{\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-auto-rows: min-content;\n        gap: 5px;\n\n        button.single{\n            grid-column: 1 / 2;\n            grid-row: 1/2;\n        }\n\n        button.double{\n            grid-column: 2 / 3;\n            grid-row: 1/2;\n        }\n    }\n\n    form{\n        margin-top: 20px;\n        display: flex;\n        flex-direction: column;\n        gap: 3px;\n\n        .input.container{\n            display:flex;\n            flex-direction: row;\n            gap: 3px;\n\n            input{\n                padding: 12px 20px;\n                border: 2px solid var(--board-background-color);\n                border-radius: 24px;\n            }\n        }\n\n        button{\n            width: max-content;\n            align-self: center;\n        }\n    }\n}\n\nbutton{\n    background-color: var(--content-color);\n    padding: 12px 28px;\n    border: 2px solid var(--accent-color);\n    color: black;\n    border-radius: 2px;\n}\n\nbutton:hover{\n    background-color: var(--accent-color);\n    transition-duration: 200ms;\n    color: white;\n}\n\nbutton:active{\n    border: 2px solid var(--content-color);\n    transition-duration: 1ms;\n}\n\n.game.container{\n    display:grid;\n    grid-template-rows: max-content 1fr;\n    grid-template-columns: 1fr 1fr;\n    gap: 12px 36px;\n    align-items: start;\n\n    /* grid area is r / c / r / c */\n    .ui.container{\n        margin-top: 15vh;\n        grid-area: 1 / 1 / 2 / 3;\n        justify-self:center;\n    }\n\n    .board-and-header.container{\n        width:min-content;\n        display:grid;\n        grid-template-rows: 72px 1fr min-content;\n        gap: 12px;\n\n        .board.header{\n            align-self: end;\n        }\n\n        .button.container{\n            width: min-content;\n            justify-self: center;\n            display:flex;\n            flex-direction: column;\n            gap: 3px;\n        }\n\n        button{\n            width: 163px;\n        }\n    }\n\n    .board-and-header.container.player-1{\n        grid-area: 2 / 1 / 3 / 2;\n        justify-self: end;\n    }\n\n    .board-and-header.container.player-2{\n        grid-area: 2 / 2 / 3 / 3;\n        justify-self: start;\n    }\n\n    h2{\n        text-align: center;\n        text-wrap: wrap;\n    }\n\n    .hidden.samples{\n        grid-area: 3 / 1 / 4 / 3;\n    }\n}\n\n.board.container{\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    width: min-content;\n    background-color: var(--board-grid-color);\n\n    > div{\n        display: flex;\n        flex-direction: row;\n        gap: 1px;\n\n        div{\n            aspect-ratio: 1/1;\n            height: 20px;\n            background-color:var(--board-background-color);\n        }\n\n        .ship.attacked{\n            background-color: var(--attacked-and-hit-color);\n        }\n\n        .attacked{\n            background-color: var(--attacked-color);\n        }\n    }\n}\n\n.board.container.visible{\n    .ship{\n        background-color: var(--ship-color);\n    }\n}\n\n/* style ships off board during staging */\n.hidden.samples{\n    > div{\n        display: flex;\n        gap: 3px;\n        flex-direction: column;\n\n        > div{\n            background-color: var(--board-grid-color);\n            width: min-content;\n            display: flex;\n            flex-direction: row;\n            gap: 1px;\n        \n            div{\n                aspect-ratio: 1/1;\n                height: 20px;\n                background-color:var(--ship-color);\n            }\n        }\n    }\n\n    .vertical > div{\n        flex-direction: column;\n    }\n}\n\n.hidden.samples{\n    transform: translate(-999px, 0px);\n}\n\n/* style dialog */\n::backdrop{\n    background-color: var(--dialog-background-color);\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQSx5QkFBeUIsWUFBWTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TTVCO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLHVDQUF1QztBQUN2QywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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QUFrQjtBQUNsQjtBQUNBLDhEQUE4RCxFQUFFLElBQUksRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBYTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQWE7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxxREFBYTtBQUNyQixRQUFRLHFEQUFhO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4uL2xpbmtlZC1saXN0cy9saW5rZWRsaXN0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMaW5rZWRMaXN0IHJlcHJlc2VudHMgZnVsbCBsaXN0XG5jb25zdCBMaW5rZWRMaXN0ID0gZnVuY3Rpb24gKCkge1xuICBsZXQgaGVhZE5vZGUgPSBudWxsO1xuICBjb25zdCBoZWFkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBoZWFkTm9kZTtcbiAgfTtcblxuICBjb25zdCB0YWlsID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgd2hpbGUgKG5vZGUubmV4dE5vZGUgIT0gbnVsbCkge1xuICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIGNvbnN0IGFwcGVuZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmIChoZWFkTm9kZSA9PSBudWxsKSB7XG4gICAgICBoZWFkTm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFpbCgpLm5leHROb2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwcmVwZW5kID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKGhlYWROb2RlID09IG51bGwpIHtcbiAgICAgIGhlYWROb2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkTm9kZSA9IG5ldyBOb2RlKHZhbHVlLCBoZWFkTm9kZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBpZiAoaGVhZE5vZGUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgICBsZXQgbm9kZSA9IGhlYWROb2RlO1xuICAgIHdoaWxlIChub2RlLm5leHROb2RlICE9IG51bGwpIHtcbiAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgICAgY291bnQrKztcbiAgICB9XG4gICAgcmV0dXJuIGNvdW50O1xuICB9O1xuXG4gIC8vIGNvdW50IGluZGV4IGZyb20gMVxuICBjb25zdCBhdCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIGlmIChpbmRleCA8PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IG5vZGUgPSBoZWFkTm9kZTtcbiAgICB3aGlsZSAoaW5kZXggPiAxKSB7XG4gICAgICBub2RlID0gbm9kZS5uZXh0Tm9kZTtcbiAgICAgIGluZGV4LS07XG4gICAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICBjb25zdCBwb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHNlY29uZFRvTGFzdEluZGV4ID0gc2l6ZSgpIC0gMTtcbiAgICBsZXQgc2Vjb25kVG9MYXN0Tm9kZSA9IGF0KHNlY29uZFRvTGFzdEluZGV4KTtcbiAgICBzZWNvbmRUb0xhc3ROb2RlLm5leHROb2RlID0gbnVsbDtcbiAgfTtcblxuICAvLyByZXR1cm5zIHRydWUgaWYgdmFsdWUgcGFzc2VkIGlzIGluIGxpc3QsIGVsc2UgcmV0dXJucyBmYWxzZVxuICBjb25zdCBjb250YWlucyA9IGZ1bmN0aW9uICh2YWx1ZSwgY29tcGFyZUtleSA9IFwidmFsdWVcIikge1xuICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUudmFsdWUgPT0gdmFsdWUgfHwgbm9kZS52YWx1ZVtjb21wYXJlS2V5XSA9PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLy8gcmV0dXJucyBpbmRleCBvZiBub2RlIGNvbnRhaW5pbmcgdmFsdWUsIG9yIG51bGwgaWYgbm90IGZvdW5kXG4gIGNvbnN0IGZpbmQgPSBmdW5jdGlvbiAodmFsdWUsIGNvbXBhcmVLZXkgPSBcInZhbHVlXCIpIHtcbiAgICBsZXQgbm9kZSA9IGhlYWROb2RlO1xuICAgIGxldCBpbmRleCA9IDE7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUudmFsdWUgPT0gdmFsdWUgfHwgbm9kZS52YWx1ZVtjb21wYXJlS2V5XSA9PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0Tm9kZTtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgLy8gcmV0dXJucyBub2RlIGNvbnRhaW5pbmcgdmFsdWUsIG9yIG51bGwgaWYgbm90IGZvdW5kXG4gIC8vIGJ1dCBjaGVja3MgZm9yIG5vZGUuY2FsbGJhY2tmdW5jdGlvbigpIGJlaW5nIGVxdWFsIHRvIHZhbHVlXG4gIGNvbnN0IGZpbmRDYWxsYmFjayA9IGZ1bmN0aW9uICh2YWx1ZSwgY2FsbGJhY2tGdW5jdGlvbikge1xuICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUudmFsdWVbY2FsbGJhY2tGdW5jdGlvbl0oKSA9PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTsgIFxuXG4gIC8vIHNhbWUgYXMgZmluZCwgYnV0IHJldHVybnMgdGhlIG5vZGUsIG5vdCBpbmRleFxuICBjb25zdCBmaW5kTm9kZSA9IGZ1bmN0aW9uICh2YWx1ZSwgY29tcGFyZUtleSA9IFwidmFsdWVcIikge1xuICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUudmFsdWUgPT0gdmFsdWUgfHwgbm9kZS52YWx1ZVtjb21wYXJlS2V5XSA9PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICAvLyByZXR1cm5zIHN0cmluZyBvZiBub2RlIHZhbHVlcyBpbiBmb3JtYXQgXCIodmFsdWUpIC0+ICh2YWx1ZSkgLT4gbnVsbFwiXG4gIGNvbnN0IHRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChoZWFkTm9kZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IHN0cmluZyA9IGAoICR7aGVhZE5vZGUudmFsdWV9IClgO1xuICAgIGxldCBub2RlID0gaGVhZE5vZGUubmV4dE5vZGU7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgc3RyaW5nICs9IGAgLT4gKCAke25vZGUudmFsdWV9IClgO1xuICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgfVxuICAgIHN0cmluZyArPSBcIiAtPiBudWxsXCI7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcblxuICAvLyBpbnNlcnRzIG5ldyBOb2RlIHdpdGggdmFsdWUgYXQgaW5kZXggKGNvdW50aW5nIGZyb20gMSlcbiAgY29uc3QgaW5zZXJ0QXQgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgY29uc3QgcHJpb3JJbmRleCA9IGluZGV4IC0gMTtcbiAgICBpZiAocHJpb3JJbmRleCA9PSAwKSB7XG4gICAgICBwcmVwZW5kKHZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHByaW9yTm9kZSA9IGF0KHByaW9ySW5kZXgpO1xuICAgIGlmIChwcmlvck5vZGUgPT0gbnVsbCkge1xuICAgICAgZXJyb3IubG9nKGAke2luZGV4fSBpcyBub3QgdmFsaWQgaW5kZXguYCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5leHROb2RlID0gcHJpb3JOb2RlLm5leHROb2RlO1xuICAgICAgcHJpb3JOb2RlLm5leHROb2RlID0gbmV3IE5vZGUodmFsdWUsIG5leHROb2RlKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gcmVtb3ZlcyBub2RlIGF0IGluZGV4IChjb3VudGluZyBmcm9tIDEpXG4gIGNvbnN0IHJlbW92ZUF0ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgY29uc3QgcHJpb3JJbmRleCA9IGluZGV4IC0gMTtcbiAgICBpZiAocHJpb3JJbmRleCA9PSAwKSB7XG4gICAgICBsZXQgbm9kZVRvUmVtb3ZlID0gaGVhZE5vZGU7XG4gICAgICBoZWFkTm9kZSA9IGhlYWROb2RlLm5leHROb2RlO1xuICAgICAgbm9kZVRvUmVtb3ZlID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHByaW9yTm9kZSA9IGF0KHByaW9ySW5kZXgpO1xuICAgIGxldCBub2RlVG9SZW1vdmUgPSBwcmlvck5vZGUubmV4dE5vZGU7XG4gICAgY29uc3QgbmV4dE5vZGUgPSBwcmlvck5vZGUubmV4dE5vZGUubmV4dE5vZGU7XG4gICAgcHJpb3JOb2RlLm5leHROb2RlID0gbmV4dE5vZGU7XG4gICAgbm9kZVRvUmVtb3ZlID0gbnVsbDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGhlYWQsXG4gICAgdGFpbCxcbiAgICBhcHBlbmQsXG4gICAgcHJlcGVuZCxcbiAgICBzaXplLFxuICAgIGF0LFxuICAgIHBvcCxcbiAgICBjb250YWlucyxcbiAgICBmaW5kLFxuICAgIHRvU3RyaW5nLFxuICAgIGluc2VydEF0LFxuICAgIHJlbW92ZUF0LFxuICAgIGZpbmROb2RlLFxuICAgIGZpbmRDYWxsYmFjayxcbiAgfTtcbn07XG5cbi8vIE5vZGUgY29udGFpbnMgdmFsdWUgcHJvcGVydHksIG5leHROb2RlXG5cbmNvbnN0IE5vZGUgPSBmdW5jdGlvbiAodmFsdWUgPSBudWxsLCBuZXh0Tm9kZSA9IG51bGwpIHtcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZSxcbiAgICBuZXh0Tm9kZSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IExpbmtlZExpc3QsIE5vZGUgfTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcbiAgICAtLWNvbnRlbnQtY29sb3I6ICNENkZGRjY7XG4gICAgLS1idXR0b24tY2xpY2tlZC1jb2xvcjogI2MzZWNjMztcbiAgICAtLWJnLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI0MCk7XG4gICAgLS1hY2NlbnQtY29sb3I6ICM0RENDQkQ7XG4gICAgLS1hdHRhY2tlZC1jb2xvcjogI2ZmYzJjMjsgLypyZWQqL1xuICAgIC0tYXR0YWNrZWQtYW5kLWhpdC1jb2xvcjogI2JmZmRjMjsgLypncmVlbiovXG4gICAgLS1zaGlwLWNvbG9yOiAjYjNjN2ZmOyAvKmJsdWUqL1xuICAgIC0tYm9hcmQtYmFja2dyb3VuZC1jb2xvcjogIzUyNTI1MjtcbiAgICAtLWJvYXJkLWdyaWQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICAtLWRpYWxvZy1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxOTgsIDI1NSk7XG4gICAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuaDEsaDIsaDMscCxidXR0b257XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xufVxuXG5ib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcbn1cblxuLnByZWdhbWUuY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDMwdmg7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG5cbiAgICAudGl0bGV7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogNTAwO1xuICAgIH1cblxuICAgIC5idXR0b24uY29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDtcbiAgICAgICAgZ2FwOiA1cHg7XG5cbiAgICAgICAgYnV0dG9uLnNpbmdsZXtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICAgICAgICAgIGdyaWQtcm93OiAxLzI7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24uZG91Ymxle1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvcm17XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogM3B4O1xuXG4gICAgICAgIC5pbnB1dC5jb250YWluZXJ7XG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgZ2FwOiAzcHg7XG5cbiAgICAgICAgICAgIGlucHV0e1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib2FyZC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1jb2xvcik7XG4gICAgcGFkZGluZzogMTJweCAyOHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5idXR0b246YWN0aXZle1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbnRlbnQtY29sb3IpO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFtcztcbn1cblxuLmdhbWUuY29udGFpbmVye1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ2FwOiAxMnB4IDM2cHg7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuXG4gICAgLyogZ3JpZCBhcmVhIGlzIHIgLyBjIC8gciAvIGMgKi9cbiAgICAudWkuY29udGFpbmVye1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXZoO1xuICAgICAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XG4gICAgICAgIGp1c3RpZnktc2VsZjpjZW50ZXI7XG4gICAgfVxuXG4gICAgLmJvYXJkLWFuZC1oZWFkZXIuY29udGFpbmVye1xuICAgICAgICB3aWR0aDptaW4tY29udGVudDtcbiAgICAgICAgZGlzcGxheTpncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcycHggMWZyIG1pbi1jb250ZW50O1xuICAgICAgICBnYXA6IDEycHg7XG5cbiAgICAgICAgLmJvYXJkLmhlYWRlcntcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b24uY29udGFpbmVye1xuICAgICAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgZ2FwOiAzcHg7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b257XG4gICAgICAgICAgICB3aWR0aDogMTYzcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYm9hcmQtYW5kLWhlYWRlci5jb250YWluZXIucGxheWVyLTF7XG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcbiAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgfVxuXG4gICAgLmJvYXJkLWFuZC1oZWFkZXIuY29udGFpbmVyLnBsYXllci0ye1xuICAgICAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XG4gICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gICAgfVxuXG4gICAgaDJ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC13cmFwOiB3cmFwO1xuICAgIH1cblxuICAgIC5oaWRkZW4uc2FtcGxlc3tcbiAgICAgICAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAzO1xuICAgIH1cbn1cblxuLmJvYXJkLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcHg7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWdyaWQtY29sb3IpO1xuXG4gICAgPiBkaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGdhcDogMXB4O1xuXG4gICAgICAgIGRpdntcbiAgICAgICAgICAgIGFzcGVjdC1yYXRpbzogMS8xO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ib2FyZC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaGlwLmF0dGFja2Vke1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXR0YWNrZWQtYW5kLWhpdC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuYXR0YWNrZWR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hdHRhY2tlZC1jb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ib2FyZC5jb250YWluZXIudmlzaWJsZXtcbiAgICAuc2hpcHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XG4gICAgfVxufVxuXG4vKiBzdHlsZSBzaGlwcyBvZmYgYm9hcmQgZHVyaW5nIHN0YWdpbmcgKi9cbi5oaWRkZW4uc2FtcGxlc3tcbiAgICA+IGRpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiAzcHg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgPiBkaXZ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1ncmlkLWNvbG9yKTtcbiAgICAgICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgZ2FwOiAxcHg7XG4gICAgICAgIFxuICAgICAgICAgICAgZGl2e1xuICAgICAgICAgICAgICAgIGFzcGVjdC1yYXRpbzogMS8xO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXNoaXAtY29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnZlcnRpY2FsID4gZGl2e1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbn1cblxuLmhpZGRlbi5zYW1wbGVze1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05OTlweCwgMHB4KTtcbn1cblxuLyogc3R5bGUgZGlhbG9nICovXG46OmJhY2tkcm9we1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpYWxvZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Ny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SSxnREFBZ0Q7QUFDcERcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tY29udGVudC1jb2xvcjogI0Q2RkZGNjtcXG4gICAgLS1idXR0b24tY2xpY2tlZC1jb2xvcjogI2MzZWNjMztcXG4gICAgLS1iZy1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNDApO1xcbiAgICAtLWFjY2VudC1jb2xvcjogIzREQ0NCRDtcXG4gICAgLS1hdHRhY2tlZC1jb2xvcjogI2ZmYzJjMjsgLypyZWQqL1xcbiAgICAtLWF0dGFja2VkLWFuZC1oaXQtY29sb3I6ICNiZmZkYzI7IC8qZ3JlZW4qL1xcbiAgICAtLXNoaXAtY29sb3I6ICNiM2M3ZmY7IC8qYmx1ZSovXFxuICAgIC0tYm9hcmQtYmFja2dyb3VuZC1jb2xvcjogIzUyNTI1MjtcXG4gICAgLS1ib2FyZC1ncmlkLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIC0tZGlhbG9nLWJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE5OCwgMjU1KTtcXG4gICAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaDEsaDIsaDMscCxidXR0b257XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOjA7XFxufVxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG59XFxuXFxuLnByZWdhbWUuY29udGFpbmVye1xcbiAgICBtYXJnaW4tdG9wOiAzMHZoO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTJweDtcXG5cXG4gICAgLnRpdGxle1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogNTAwO1xcbiAgICB9XFxuXFxuICAgIC5idXR0b24uY29udGFpbmVye1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgICAgIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDtcXG4gICAgICAgIGdhcDogNXB4O1xcblxcbiAgICAgICAgYnV0dG9uLnNpbmdsZXtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGJ1dHRvbi5kb3VibGV7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAxLzI7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgZm9ybXtcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogM3B4O1xcblxcbiAgICAgICAgLmlucHV0LmNvbnRhaW5lcntcXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgICBnYXA6IDNweDtcXG5cXG4gICAgICAgICAgICBpbnB1dHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib2FyZC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICBidXR0b257XFxuICAgICAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxMnB4IDI4cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG5idXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmJ1dHRvbjphY3RpdmV7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxbXM7XFxufVxcblxcbi5nYW1lLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDEycHggMzZweDtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcblxcbiAgICAvKiBncmlkIGFyZWEgaXMgciAvIGMgLyByIC8gYyAqL1xcbiAgICAudWkuY29udGFpbmVye1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTV2aDtcXG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgICAgIGp1c3RpZnktc2VsZjpjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmJvYXJkLWFuZC1oZWFkZXIuY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6bWluLWNvbnRlbnQ7XFxuICAgICAgICBkaXNwbGF5OmdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcycHggMWZyIG1pbi1jb250ZW50O1xcbiAgICAgICAgZ2FwOiAxMnB4O1xcblxcbiAgICAgICAgLmJvYXJkLmhlYWRlcntcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuYnV0dG9uLmNvbnRhaW5lcntcXG4gICAgICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZ2FwOiAzcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBidXR0b257XFxuICAgICAgICAgICAgd2lkdGg6IDE2M3B4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5ib2FyZC1hbmQtaGVhZGVyLmNvbnRhaW5lci5wbGF5ZXItMXtcXG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICB9XFxuXFxuICAgIC5ib2FyZC1hbmQtaGVhZGVyLmNvbnRhaW5lci5wbGF5ZXItMntcXG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG4gICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIH1cXG5cXG4gICAgaDJ7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB0ZXh0LXdyYXA6IHdyYXA7XFxuICAgIH1cXG5cXG4gICAgLmhpZGRlbi5zYW1wbGVze1xcbiAgICAgICAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAzO1xcbiAgICB9XFxufVxcblxcbi5ib2FyZC5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXB4O1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWdyaWQtY29sb3IpO1xcblxcbiAgICA+IGRpdntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgZ2FwOiAxcHg7XFxuXFxuICAgICAgICBkaXZ7XFxuICAgICAgICAgICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tYm9hcmQtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2hpcC5hdHRhY2tlZHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hdHRhY2tlZC1hbmQtaGl0LWNvbG9yKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5hdHRhY2tlZHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hdHRhY2tlZC1jb2xvcik7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLmJvYXJkLmNvbnRhaW5lci52aXNpYmxle1xcbiAgICAuc2hpcHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xcbiAgICB9XFxufVxcblxcbi8qIHN0eWxlIHNoaXBzIG9mZiBib2FyZCBkdXJpbmcgc3RhZ2luZyAqL1xcbi5oaWRkZW4uc2FtcGxlc3tcXG4gICAgPiBkaXZ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiAzcHg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICAgICAgPiBkaXZ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtZ3JpZC1jb2xvcik7XFxuICAgICAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgICBnYXA6IDFweDtcXG4gICAgICAgIFxcbiAgICAgICAgICAgIGRpdntcXG4gICAgICAgICAgICAgICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1zaGlwLWNvbG9yKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnZlcnRpY2FsID4gZGl2e1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbn1cXG5cXG4uaGlkZGVuLnNhbXBsZXN7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05OTlweCwgMHB4KTtcXG59XFxuXFxuLyogc3R5bGUgZGlhbG9nICovXFxuOjpiYWNrZHJvcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlhbG9nLWJhY2tncm91bmQtY29sb3IpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtTaGlwfSBmcm9tIFwiLi9zaGlwLmpzXCI7XG5pbXBvcnQge0xpbmtlZExpc3R9IGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbGlua2VkLWxpc3RzL2xpbmtlZGxpc3QuanNcIlxuXG5jb25zdCBHYW1lYm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBib2FyZE1hcDtcbiAgbGV0IGF0dGFja01hcDtcbiAgLy8gbWFrZSBlYWNoIG1hcCBhbiBhcnJheSBvZiAxMCB3aXRoIGVhY2ggYXJyYXkgYmVpbmcgYW4gb2JqZWN0IChzaW1pbGFyIHRvIGhhc2ggbWFwKVxuICBjb25zdCBpbml0Qm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgYm9hcmRNYXAgPSBbe30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge31dO1xuICAgIGF0dGFja01hcCA9IFt7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fV07XG4gIH0oKTtcblxuICBjb25zdCBnZXRCb2FyZE1hcCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGJvYXJkTWFwO1xuICB9XG5cbiAgY29uc3QgZ2V0QXR0YWNrTWFwID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gYXR0YWNrTWFwO1xuICB9XG5cbiAgLy8gYmFzZWQgb24gdGhlIHdheSB3ZSBpbXBsZW1lbnRlZCxcbiAgLy8gdGhlIGZpcnN0IGluZGV4IGZvciBhcnJheSBpcyB0aGUgci12YWx1ZSBvciB0aGUgY29sdW1uIGluIGEgbWF0cml4L2dyaWRcbiAgLy8gdGhlIHNlY29uZCBpbmRleCBmb3Igb2JqZWN0IGtleSBpcyB0aGUgYy12YWx1ZSBvciB0aGUgcm93IGluIGEgbWF0cml4L2dyaWQgKGluY3JlYXNlcyBnb2luZyBkb3duKVxuICBsZXQgc2hpcExpc3QgPSBuZXcgTGlua2VkTGlzdCgpO1xuICAvLyB1c2UgcmVzdCBwYXJhbWV0ZXIgKC4uLikgdG8gYWNjZXB0IHZhcmlhYmxlIGFtb3VudCBvZiBjb29yZHNcbiAgY29uc3QgbmV3U2hpcCA9IGZ1bmN0aW9uICguLi5jb29yZHMpIHtcbiAgICAgIGNvbnN0IG5ld1NoaXAgPSBuZXcgU2hpcChjb29yZHMubGVuZ3RoKTtcbiAgICAgIGlmIChpc1NoaXBBdENvb3JkcyguLi5jb29yZHMpKXtcbiAgICAgICAgY29uc29sZS5sb2coYm9hcmRNYXApO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERvbid0IG92ZXJsYXAgc2hpcHMgYXQ6ICR7Y29vcmRzfWApO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgW3IsY10gb2YgY29vcmRzKXtcbiAgICAgICAgaWYgKGMgPCAxMCAmJiBjID49MCl7XG4gICAgICAgICAgYm9hcmRNYXBbcl1bY10gPSBuZXdTaGlwO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgY29uc29sZS5sb2coY29vcmRzKTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJhZCBjb2wgaW5wdXQgZm9yIG5ld1NoaXAoKTogJHtjb29yZHN9YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGFkZGluZyBuZXcgc2hpcCB0byBzaGlwIGxpbmtlZCBsaXN0XG4gICAgICBzaGlwTGlzdC5hcHBlbmQobmV3U2hpcCk7XG4gIH07XG5cbiAgY29uc3QgaXNTaGlwQXRDb29yZHMgPSBmdW5jdGlvbiguLi5jb29yZHMpe1xuICAgIGZvciAobGV0IFtyLGNdIG9mIGNvb3Jkcyl7XG4gICAgICBpZiAoYm9hcmRNYXBbcl0gIT09IHVuZGVmaW5lZCAmJiBib2FyZE1hcFtyXVtjXSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGdldFNoaXBGcm9tQ29vcmRzID0gZnVuY3Rpb24oW3IsY10pe1xuICAgIHJldHVybiBib2FyZE1hcFtyXVtjXTtcbiAgfVxuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSBmdW5jdGlvbihbcixjXSl7XG4gICAgaWYgKHdhc0F0dGFja2VkKFtyLGNdKSl7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBhdHRhY2sgcHJldmlvdXMgYXR0YWNrZWQgKCR7cn0sJHtjfSlgKTtcbiAgICB9XG4gICAgY29uc3Qgc2hpcCA9IGJvYXJkTWFwW3JdW2NdO1xuICAgIGlmICh0eXBlb2Yoc2hpcCkgPT0gXCJvYmplY3RcIil7XG4gICAgICBzaGlwLmhpdCgpO1xuICAgICAgYXR0YWNrTWFwW3JdW2NdPVwiaGl0XCI7XG4gICAgICByZXR1cm4gXCJoaXRcIjtcbiAgICB9IGVsc2V7XG4gICAgICBhdHRhY2tNYXBbcl1bY10gPSBcIm1pc3NcIjtcbiAgICAgIHJldHVybiBcIm1pc3NcIjtcbiAgICB9XG4gIH1cblxuICBjb25zdCB3YXNBdHRhY2tlZCA9IGZ1bmN0aW9uKFtyLGNdKXtcbiAgICByZXR1cm4gYXR0YWNrTWFwW3JdW2NdIHx8IGZhbHNlO1xuICB9XG5cbiAgY29uc3QgaXNBbGxTdW5rID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gKHNoaXBMaXN0LmZpbmRDYWxsYmFjayhmYWxzZSwgXCJpc1N1bmtcIikgPT0gbnVsbCk7XG4gIH1cblxuICBjb25zdCByZXNldEJvYXJkID0gZnVuY3Rpb24oKXtcbiAgICBib2FyZE1hcCA9IFt7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fV07XG4gICAgYXR0YWNrTWFwID0gW3t9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9XTtcbiAgICBhdHRhY2tDb3VudCA9IDA7XG4gIH1cblxuICAvLyBVU0VTIGFsbG93ZWQgcG9zaXRpb24gbWFwIGNyZWF0ZWQgd2l0aCBzcGVjaWZpYyBpbmZvIGFib3V0IHNoaXAgb3JpZW50YXRpb24gYW5kIGxlbmd0aFxuICBjb25zdCBpc1RoaXNBbGxvd2VkUGxhY2VtZW50ID0gZnVuY3Rpb24oW3IsY10pe1xuICAgIHJldHVybiBhbGxvd2VkUG9zaXRpb25NYXBbcl1bY107XG4gIH1cblxuICBsZXQgYWxsb3dlZFBvc2l0aW9uTWFwO1xuICAvLyB1c2VzIGFkamFjZW5jeSBtYXAgYW5kIHNoaXAgbGVuZ3RoIHRvIHNob3cgYWxsIHBvc2libGUgdG9wbGVmdCBwb3NpdGlvbnMgZm9yIHRoZSBzaGlwXG4gIC8vIHJlY2FsbCB0aGF0IGdyYWJMb2NhdGlvbiBzdGFydHMgYXQgMFxuICAvLyByZXR1cm5zIG51bWJlciBvZiB0cnVlcyAoYWxsb3dlZCBzcG90cylcbiAgY29uc3QgY3JlYXRlQWxsb3dlZFBvc2l0aW9uTWFwID0gZnVuY3Rpb24oc2hpcE9iamVjdCwgaXNIb3Jpem9udGFsLCBncmFiTG9jYXRpb24pe1xuICAgIGNvbnN0IGFkamFjZW5jeU1hcCA9IGNyZWF0ZUFkamFjZW5jeU1hcCgpO1xuICAgIGFsbG93ZWRQb3NpdGlvbk1hcCA9IFt7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fV07XG4gICAgY29uc3QgbGVuZ3RoID0gc2hpcE9iamVjdC5sZW5ndGg7XG4gICAgbGV0IHRydWVDb3VudCA9MDtcbiAgICBpZiAoaXNIb3Jpem9udGFsID09IFwidHJ1ZVwiKXtcbiAgICAgIGZvciAobGV0IHIgPSAwOyByPDEwOyByKyspe1xuICAgICAgICBmb3IgKGxldCBjPTA7IGM8MTA7IGMrKyl7XG4gICAgICAgICAgaWYgKGM+ICgxMC1sZW5ndGgrZ3JhYkxvY2F0aW9uKSB8fCBjPGdyYWJMb2NhdGlvbil7XG4gICAgICAgICAgICBhbGxvd2VkUG9zaXRpb25NYXBbcl1bY10gPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxsb3dlZFBvc2l0aW9uTWFwW3JdW2NdID0gaXNTaGlwRml0QWRqYWNlbmN5KFtyLGMtZ3JhYkxvY2F0aW9uXSwgc2hpcE9iamVjdCwgaXNIb3Jpem9udGFsLCBhZGphY2VuY3lNYXApO1xuICAgICAgICAgICAgaWYgKGFsbG93ZWRQb3NpdGlvbk1hcFtyXVtjXSA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgdHJ1ZUNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgfVxuICAgICB9IGVsc2V7XG4gICAgICBmb3IgKGxldCByID0gMDsgcjwxMDsgcisrKXtcbiAgICAgICAgZm9yIChsZXQgYz0wOyBjPDEwOyBjKyspe1xuICAgICAgICAgIGlmIChyID4gKDEwLWxlbmd0aCtncmFiTG9jYXRpb24pIHx8IHI8Z3JhYkxvY2F0aW9uKXtcbiAgICAgICAgICAgICAgYWxsb3dlZFBvc2l0aW9uTWFwW3JdW2NdID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsbG93ZWRQb3NpdGlvbk1hcFtyXVtjXSA9IGlzU2hpcEZpdEFkamFjZW5jeShbci1ncmFiTG9jYXRpb24sY10sc2hpcE9iamVjdCwgaXNIb3Jpem9udGFsLCBhZGphY2VuY3lNYXApO1xuICAgICAgICAgICAgaWYgKGFsbG93ZWRQb3NpdGlvbk1hcFtyXVtjXSA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgdHJ1ZUNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiYWxsb3dlZCBwb3NpdGlvbiBtYXAgY3JlYXRlZFwiKVxuICAgIGNvbnNvbGUubG9nKGFsbG93ZWRQb3NpdGlvbk1hcCk7XG4gICAgcmV0dXJuIHRydWVDb3VudDtcbiAgfTtcblxuICAvLyBbcixjXSBpcyB0b3BsZWZ0IHNxdWFyZSBvZiBzaGlwXG4gIGNvbnN0IGlzU2hpcEZpdEFkamFjZW5jeSA9IGZ1bmN0aW9uKFtyLGNdLHNoaXBPYmplY3QsIGlzSG9yaXpvbnRhbCwgbWFwKXtcbiAgICBjb25zdCBsZW5ndGggPSBzaGlwT2JqZWN0Lmxlbmd0aDtcbiAgICBpZiAoaXNIb3Jpem9udGFsICE9PSBcInRydWVcIil7XG4gICAgICBmb3IgKGxldCBpPTA7IGk8bGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAodHlwZW9mIG1hcFtyK2ldICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBtYXBbcitpXVtjXSAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICAgICAgZm9yIChsZXQgc2hpcCBvZiBtYXBbcitpXVtjXSl7XG4gICAgICAgICAgICBpZiAoc2hpcCAhPSBzaGlwT2JqZWN0KXtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpPTA7IGk8bGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAodHlwZW9mIG1hcFtyXSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgbWFwW3JdW2MraV0gIT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICAgIGZvciAobGV0IHNoaXAgb2YgbWFwW3JdW2MraV0pe1xuICAgICAgICAgICAgaWYgKHNoaXAgIT0gc2hpcE9iamVjdCl7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuXG4gIGNvbnN0IGNyZWF0ZUFkamFjZW5jeU1hcCA9IGZ1bmN0aW9uKCl7XG4gICAgbGV0IGFkamFjZW5jeU1hcCA9IFt7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fV07XG4gICAgZm9yIChsZXQgaT0wOyBpPDEwOyBpKyspe1xuICAgICAgZm9yIChsZXQgaj0wOyBqPDEwOyBqKyspe1xuICAgICAgICBpZiAodHlwZW9mIGJvYXJkTWFwW2ldW2pdICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgICAgICBjb25zdCBzaGlwID0gYm9hcmRNYXBbaV1bal07XG4gICAgICAgICAgYWRkVG9BZGphY2VuY3lNYXAoYWRqYWNlbmN5TWFwLCBzaGlwLCBpLGopO1xuICAgICAgICAgIGlmIChqPjApe1xuICAgICAgICAgICAgYWRkVG9BZGphY2VuY3lNYXAoYWRqYWNlbmN5TWFwLCBzaGlwLCBpLGotMSk7XG4gICAgICAgICAgICBpZiAoaT4wKXtcbiAgICAgICAgICAgICAgYWRkVG9BZGphY2VuY3lNYXAoYWRqYWNlbmN5TWFwLCBzaGlwLCBpLTEsai0xKTtcbiAgICAgICAgICAgIH0gaWYgKGk8OSl7XG4gICAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaSsxLGotMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChqPDkpe1xuICAgICAgICAgICAgYWRkVG9BZGphY2VuY3lNYXAoYWRqYWNlbmN5TWFwLCBzaGlwLCBpLGorMSk7XG4gICAgICAgICAgICBpZiAoaT4wKXtcbiAgICAgICAgICAgICAgYWRkVG9BZGphY2VuY3lNYXAoYWRqYWNlbmN5TWFwLCBzaGlwLCBpLTEsaisxKTtcbiAgICAgICAgICAgIH0gaWYgKGk8OSl7XG4gICAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaSsxLGorMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpPjApe1xuICAgICAgICAgICAgYWRkVG9BZGphY2VuY3lNYXAoYWRqYWNlbmN5TWFwLCBzaGlwLCBpLTEsaik7XG4gICAgICAgICAgfSBpZiAoaTw5KXtcbiAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaSsxLGopO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhhZGphY2VuY3lNYXApO1xuICAgIHJldHVybiBhZGphY2VuY3lNYXA7XG4gIH1cblxuICBjb25zdCBhZGRUb0FkamFjZW5jeU1hcCA9IGZ1bmN0aW9uKG1hcCwgc2hpcCwgaSwgail7XG4gICAgY29uc3QgbG9jYXRpb24gPSBtYXBbaV1bal07XG4gICAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsb2NhdGlvblswXSAhPSBzaGlwKXtcbiAgICAgIG1hcFtpXVtqXS5wdXNoKHNoaXApO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgbWFwW2ldW2pdID0gW3NoaXBdO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlbWVtYmVyIHRoYXQgbWFwIGlzIHNvcnRlZCBieSByLCB0aGVuIGMuXG4gIGNvbnN0IG1vdmVTaGlwID0gZnVuY3Rpb24oc2hpcCxbc3RhcnRSLHN0YXJ0Q10sbGVuZ3RoLCBpc0hvcml6b250YWwpe1xuICAgIGZvciAobGV0IHJvdz0wOyByb3c8MTA7IHJvdysrKXtcbiAgICAgIGNvbnN0IG1hcFJvdyA9IGJvYXJkTWFwW3Jvd107XG4gICAgICBmb3IgKGxldCBjb2wgb2YgT2JqZWN0LmtleXMobWFwUm93KSl7XG4gICAgICAgIGlmIChtYXBSb3dbY29sXSA9PSBzaGlwKXtcbiAgICAgICAgICBkZWxldGUgYm9hcmRNYXBbcm93XVtjb2xdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGJvYXJkTWFwKTtcbiAgICBjb25zdCBjb29yZHMgPSBbXTtcbiAgICBpZiAoaXNIb3Jpem9udGFsID09IFwidHJ1ZVwiKXtcbiAgICAgIGZvciAobGV0IGk9MDsgaTxsZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvb3Jkcy5wdXNoKFtzdGFydFIsc3RhcnRDK2ldKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpPTA7IGk8bGVuZ3RoOyBpKyspe1xuICAgICAgICBjb29yZHMucHVzaChbc3RhcnRSK2ksc3RhcnRDXSlcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coLi4uY29vcmRzLCBsZW5ndGgpO1xuICAgIG5ld1NoaXAoLi4uY29vcmRzKTtcbiAgfVxuXG4gIC8vIG5lZWQgdG8gcmFuZG9taXplIDUgc2hpcHMgb2YgbGVuZ3RoIDIsMywzLDQsNVxuICBjb25zdCByYW5kb21pemVCb2FyZCA9IGZ1bmN0aW9uKCl7XG4gICAgdHJ5e1xuICAgICAgcmVzZXRCb2FyZCgpO1xuICAgICAgY29uc3QgY29vcmRzMSA9IGdldFJhbmRvbUNvb3JkcygyKTtcbiAgICAgIG5ld1NoaXAoLi4uY29vcmRzMSk7XG4gICAgICBjb25zdCBjb29yZHMyID0gZ2V0UmFuZG9tQ29vcmRzKDMpO1xuICAgICAgbmV3U2hpcCguLi5jb29yZHMyKTtcbiAgICAgIGNvbnN0IGNvb3JkczMgPSBnZXRSYW5kb21Db29yZHMoMyk7XG4gICAgICBuZXdTaGlwKC4uLmNvb3JkczMpO1xuICAgICAgY29uc3QgY29vcmRzNCA9IGdldFJhbmRvbUNvb3Jkcyg0KTtcbiAgICAgIG5ld1NoaXAoLi4uY29vcmRzNCk7XG4gICAgICBjb25zdCBjb29yZHM1ID0gZ2V0UmFuZG9tQ29vcmRzKDUpO1xuICAgICAgbmV3U2hpcCguLi5jb29yZHM1KTtcbiAgICAgIC8vY29uc29sZS5sb2coYm9hcmRNYXApO1xuICAgICAgcmV0dXJuIHtjb29yZHMxLGNvb3JkczIsY29vcmRzMyxjb29yZHM0LGNvb3JkczV9O1xuICAgIH0gY2F0Y2h7XG4gICAgICByZXR1cm4gcmFuZG9taXplQm9hcmQoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBnZXRSYW5kb21Db29yZHMgPSBmdW5jdGlvbihsZW5ndGgpe1xuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHJhbmRvbWl6ZUlzSG9yaXpvbnRhbCgpO1xuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgpO1xuICAgIGxldCB0cnVlQ291bnQgPSBjcmVhdGVBbGxvd2VkUG9zaXRpb25NYXAoc2hpcCwgaXNIb3Jpem9udGFsLCAwKTtcbiAgICAvLyBjYXRjaCB3aGVuIHRoZXJlIGlzIG5vIGFsbG93ZWQgcG9zaXRpb25zXG4gICAgaWYgKHRydWVDb3VudCA9PSAwKXtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJNdXN0IHJlcmFuZG9taXplIGR1ZSB0byB1bmx1Y2t5IHNldHVwXCIpO1xuICAgIH1cbiAgICAvLyBybmdDb3VudCByYW5nZXMgZnJvbSAwIHRvIHRydWVDb3VudC0xO1xuICAgIGxldCBybmdDb3VudCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp0cnVlQ291bnQpO1xuICAgIC8vY29uc29sZS5sb2cocm5nQ291bnQsIHRydWVDb3VudCk7XG4gICAgbGV0IHI9LTE7XG4gICAgbGV0IGM9OTtcbiAgICB3aGlsZSAocm5nQ291bnQ+PTApe1xuICAgICAgaWYgKGM9PTkpe1xuICAgICAgICByKys7XG4gICAgICAgIGM9MDtcbiAgICAgIH0gZWxzZXtcbiAgICAgICAgYysrO1xuICAgICAgfVxuICAgICAgaWYgKGlzVGhpc0FsbG93ZWRQbGFjZW1lbnQoW3IsY10pID09IHRydWUpe1xuICAgICAgICBybmdDb3VudC0tO1xuICAgICAgfVxuICAgICAgLy9jb25zb2xlLmxvZyhyLCBjLCBybmdDb3VudCk7XG4gICAgfVxuICAgIGxldCBjb29yZHMgPSBbXTtcbiAgICBpZiAoaXNIb3Jpem9udGFsID09IFwidHJ1ZVwiKXtcbiAgICAgIGZvciAoO2xlbmd0aD4wOyBsZW5ndGgtLSl7XG4gICAgICAgIGNvb3Jkcy5wdXNoKFtyLGNdKTtcbiAgICAgICAgYysrO1xuICAgICAgfVxuICAgIH0gZWxzZXtcbiAgICAgIGZvciAoO2xlbmd0aD4wOyBsZW5ndGgtLSl7XG4gICAgICAgIGNvb3Jkcy5wdXNoKFtyLGNdKTtcbiAgICAgICAgcisrO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgR2VuZXJhdGVkIGFsbG93ZWQgcmFuZG9tIGNvb3JkcyAke2Nvb3Jkc31gKTtcbiAgICByZXR1cm4gKGNvb3Jkcyk7XG4gIH1cblxuICBjb25zdCByYW5kb21pemVJc0hvcml6b250YWwgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IHJuZyA9IE1hdGgucmFuZG9tKCkqMjtcbiAgICBpZiAocm5nIDwgMSl7XG4gICAgICByZXR1cm4gXCJ0cnVlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcImZhbHNlXCI7XG4gICAgfVxuICB9XG5cbiAgLy8gc3RhcnQgb2YgY29kZSBmb3IgZ3Vlc3NpbmcgZWR1Y2F0ZWQgYXR0YWNrIGZvciBjb21wdXRlciBwbGF5ZXIgLy9cbiAgbGV0IHByZXZpb3VzQXR0YWNrID0ge307XG4gIGNvbnN0IG1ha2VSYW5kb21BdHRhY2sgPSBmdW5jdGlvbihvdGhlclBsYXllcil7XG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqICg5OS1hdHRhY2tDb3VudCkpO1xuICAgIHByZXZpb3VzQXR0YWNrLmNvb3JkcyA9IGdldE50aE9wZW5BdHRhY2tNYXAob3RoZXJQbGF5ZXIsIHJhbmRvbUluZGV4KTtcbiAgICAvL2NvbnNvbGUubG9nKHByZXZpb3VzQXR0YWNrLmNvb3Jkcyk7XG4gICAgcHJldmlvdXNBdHRhY2suaGl0ID0gb3RoZXJQbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socHJldmlvdXNBdHRhY2suY29vcmRzKTtcbiAgfVxuXG4gIGxldCBhdHRhY2tDb3VudCA9IDA7XG4gIGNvbnN0IG1ha2VFZHVjYXRlZEF0dGFjayA9IGZ1bmN0aW9uKG90aGVyUGxheWVyKXtcbiAgICBpZiAodHlwZW9mIHByZXZpb3VzQXR0YWNrLnByZXZTdWNjZXNzQ29vcmRzICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgIGNvbnN0IFtyLGNdPSBwcmV2aW91c0F0dGFjay5wcmV2U3VjY2Vzc0Nvb3JkcztcbiAgICAgIGNvbnNvbGUubG9nKHIsYyk7XG4gICAgICBjb25zdCBvdGhlckF0dGFja01hcCA9IG90aGVyUGxheWVyLmdhbWVib2FyZC5nZXRBdHRhY2tNYXAoKTtcbiAgICAgIGlmIChpc09uQm9hcmRBbmROb3RBdHRhY2tlZChbci0xLGNdLG90aGVyQXR0YWNrTWFwKSl7XG4gICAgICAgIHByZXZpb3VzQXR0YWNrLmNvb3JkcyA9IFtyLTEsY107XG4gICAgICAgIHByZXZpb3VzQXR0YWNrLmhpdCA9IG90aGVyUGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtyLTEsY10pO1xuICAgICAgfSBlbHNlIGlmIChpc09uQm9hcmRBbmROb3RBdHRhY2tlZChbcisxLGNdLG90aGVyQXR0YWNrTWFwKSl7XG4gICAgICAgIHByZXZpb3VzQXR0YWNrLmNvb3JkcyA9IFtyKzEsY107XG4gICAgICAgIHByZXZpb3VzQXR0YWNrLmhpdCA9IG90aGVyUGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtyKzEsY10pO1xuICAgICAgfSBlbHNlIGlmIChpc09uQm9hcmRBbmROb3RBdHRhY2tlZChbcixjLTFdLG90aGVyQXR0YWNrTWFwKSl7XG4gICAgICAgIHByZXZpb3VzQXR0YWNrLmNvb3JkcyA9IFtyLGMtMV07XG4gICAgICAgIHByZXZpb3VzQXR0YWNrLmhpdCA9IG90aGVyUGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtyLGMtMV0pO1xuICAgICAgfSBlbHNlIGlmIChpc09uQm9hcmRBbmROb3RBdHRhY2tlZChbcixjKzFdLG90aGVyQXR0YWNrTWFwKSl7XG4gICAgICAgIHByZXZpb3VzQXR0YWNrLmNvb3JkcyA9IFtyLGMrMV07XG4gICAgICAgIHByZXZpb3VzQXR0YWNrLmhpdCA9IG90aGVyUGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtyLGMrMV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWFrZVJhbmRvbUF0dGFjayhvdGhlclBsYXllcik7XG4gICAgICB9XG4gICAgfSBlbHNle1xuICAgICAgbWFrZVJhbmRvbUF0dGFjayhvdGhlclBsYXllcik7XG4gICAgfVxuICAgIGlmIChwcmV2aW91c0F0dGFjay5oaXQgPT0gXCJoaXRcIil7XG4gICAgICBwcmV2aW91c0F0dGFjay5wcmV2U3VjY2Vzc0Nvb3JkcyA9IHByZXZpb3VzQXR0YWNrLmNvb3JkcztcbiAgICB9XG4gICAgY29uc29sZS5sb2coYFJlY2VpdmVkIGF0dGFjayBhdCAke3ByZXZpb3VzQXR0YWNrLmNvb3Jkc30gZm9yIHBsYXllciAxIGJ5IGNvbXB1dGVyYClcbiAgICBhdHRhY2tDb3VudCsrO1xuICAgIHJldHVybiBwcmV2aW91c0F0dGFjay5jb29yZHM7XG4gIH1cblxuICBjb25zdCBnZXROdGhPcGVuQXR0YWNrTWFwID0gZnVuY3Rpb24ob3RoZXJQbGF5ZXIsIGluZGV4KXtcbiAgICBjb25zdCBvdGhlckF0dGFja01hcCA9IG90aGVyUGxheWVyLmdhbWVib2FyZC5nZXRBdHRhY2tNYXAoKTtcbiAgICBsZXQgY291bnQgPSBpbmRleDtcbiAgICBmb3IgKGxldCByb3cgb2Ygb3RoZXJBdHRhY2tNYXApe1xuICAgICAgZm9yIChsZXQgYz0wOyBjPDEwOyBjKyspe1xuICAgICAgICBjb25zdCBjb2xWYWx1ZSA9IHJvd1tjXTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjb2xWYWx1ZSk7XG4gICAgICAgIGlmICh0eXBlb2YgY29sVmFsdWUgPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICBpZiAoY291bnQgPDApe1xuICAgICAgICAgICAgY29uc3QgciA9IG90aGVyQXR0YWNrTWFwLmluZGV4T2Yocm93KTtcbiAgICAgICAgICAgIHJldHVybiBbcixjXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZyhjb3VudClcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJnZXQgTnRoIG9wZW4gYXR0YWNrIG1hcCBmYWlsZWRcIik7XG4gIH1cblxuICBjb25zdCBpc09uQm9hcmRBbmROb3RBdHRhY2tlZCA9IGZ1bmN0aW9uKFtyLGNdLCBhdHRhY2tNYXApe1xuICAgIHJldHVybiAocjw5ICYmIHI+MCAmJiBjPDkgJiYgYz4wICYmIHR5cGVvZiBhdHRhY2tNYXBbcl1bY10gPT0gXCJ1bmRlZmluZWRcIik7XG4gIH1cbiAgLy8gZW5kIG9mIGNvZGUgcmVsYXRlZCB0byBtYWtpbmcgY29tcHV0ZXIgZWR1Y2F0ZWQgYXR0YWNrXG5cbiAgcmV0dXJuIHtcbiAgICBuZXdTaGlwLFxuICAgIGdldFNoaXBGcm9tQ29vcmRzLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgd2FzQXR0YWNrZWQsXG4gICAgaXNBbGxTdW5rLFxuICAgIGdldEJvYXJkTWFwLFxuICAgIHJlc2V0Qm9hcmQsXG4gICAgZ2V0QXR0YWNrTWFwLFxuICAgIGlzVGhpc0FsbG93ZWRQbGFjZW1lbnQsXG4gICAgbW92ZVNoaXAsXG4gICAgY3JlYXRlQWxsb3dlZFBvc2l0aW9uTWFwLFxuICAgIHJhbmRvbWl6ZUJvYXJkLFxuICAgIG1ha2VFZHVjYXRlZEF0dGFjayxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuIiwiaW1wb3J0IHtHYW1lYm9hcmR9IGZyb20gXCIuL2dhbWVib2FyZC5qc1wiXG5cbmNvbnN0IFBsYXllciA9IGZ1bmN0aW9uKG5hbWUsIG51bWJlcil7XG5cbiAgICBsZXQgZ2FtZWJvYXJkO1xuICAgIGNvbnN0IGluaXQgPSBmdW5jdGlvbigpe1xuICAgICAgICBnYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgfSgpO1xuXG4gICAgcmV0dXJue1xuICAgICAgICBuYW1lLFxuICAgICAgICBudW1iZXIsXG4gICAgICAgIGdhbWVib2FyZCxcbiAgICB9XG59XG5cbmNvbnN0IGNvbXB1dGVyUGxheWVyID0gZnVuY3Rpb24obnVtYmVyKXtcblxuICAgIHJldHVybntcbiAgICAgICAgLy8gaW5oZXJpdCBwcm9wZXJ0aWVzIGJ5IGNvbXBvc2l0aW9uXG4gICAgICAgIC4uLihuZXcgUGxheWVyKFwiQ29tcHV0ZXIgQm9iXCIsIG51bWJlcikpLFxuICAgIH1cbn1cblxuY29uc3QgaHVtYW5QbGF5ZXIgPSBmdW5jdGlvbihuYW1lLCBudW1iZXIpe1xuXG4gICAgcmV0dXJue1xuICAgICAgICAuLi4obmV3IFBsYXllcihuYW1lLCBudW1iZXIpKSxcbiAgICB9XG59XG5cbmV4cG9ydCB7UGxheWVyLCBjb21wdXRlclBsYXllciwgaHVtYW5QbGF5ZXJ9OyIsIi8vIGNvbnRhaW5zIG1ldGhvZHMgdG8gcG9wdWxhdGUgRE9NXG4vLyByZW5kZXIgZnVuY3Rpb25zIHdpbGwgZGlzcGxheSBET00gZWxlbWVudHNcbi8vIGJ1aWxkIGZ1bmN0aW9ucyB3aWxsIGJ1aWxkIGVsZW1lbnRzIGFuZCByZXR1cm4gdGhlbSB3aXRob3V0IGRpc3BsYXlcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5jb25zdCBSZW5kZXJNYW5hZ2VyID0gZnVuY3Rpb24oKXtcbiAgICBcbiAgICBsZXQgYm9hcmQxO1xuICAgIGxldCBib2FyZDI7XG4gICAgbGV0IGRpYWxvZztcbiAgICBjb25zdCBpbml0R2FtZVJlbmRlciA9IGZ1bmN0aW9uKHBsYXllcjFPYmplY3QsIHBsYXllcjJPYmplY3Qpe1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5xdWVyeVNlbGVjdG9yKFwiLnByZWdhbWUuY29udGFpbmVyXCIpKTtcbiAgICAgICAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJnYW1lIGNvbnRhaW5lclwiKTtcbiAgICAgICAgYm9keS5hcHBlbmQoZ2FtZUNvbnRhaW5lcik7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGJ1aWxkSGVhZGVyKCk7XG4gICAgICAgIGJvYXJkMSA9IGJ1aWxkQm9hcmRBbmRIZWFkZXIocGxheWVyMU9iamVjdC5udW1iZXIsIHBsYXllcjFPYmplY3QubmFtZSk7XG4gICAgICAgIGJvYXJkMiA9IGJ1aWxkQm9hcmRBbmRIZWFkZXIocGxheWVyMk9iamVjdC5udW1iZXIsIHBsYXllcjJPYmplY3QubmFtZSk7XG4gICAgICAgIGdhbWVDb250YWluZXIuYXBwZW5kKGhlYWRlciwgYm9hcmQxLCBib2FyZDIpO1xuICAgICAgICBkaWFsb2cgPSBidWlsZERpYWxvZygpO1xuICAgICAgICBnYW1lQ29udGFpbmVyLmFwcGVuZChkaWFsb2cpO1xuICAgIH07XG5cbiAgICBjb25zdCBidWlsZEhlYWRlciA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcInVpIGNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgdHVyblRleHQgPSBjcmVhdGVFbGVtZW50KFwiaDFcIiwgXCJ0dXJuIHRleHRcIik7XG4gICAgICAgIHR1cm5UZXh0LnRleHRDb250ZW50ID0gXCIncyBUdXJuXCI7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQodHVyblRleHQpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkQm9hcmRBbmRIZWFkZXIgPSBmdW5jdGlvbihwbGF5ZXJOdW1iZXIsIHBsYXllck5hbWUpe1xuICAgICAgICBjb25zdCBib2FyZCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixgYm9hcmQgY29udGFpbmVyYCk7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixgcm93LSR7aX1gKTtcbiAgICAgICAgICAgIHJvdy5zZXRBdHRyaWJ1dGUoXCJyb3dcIiwgaSk7XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8MTA7IGorKyl7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiY29sXCIsIGopO1xuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmQoc3F1YXJlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIGJvYXJkLnNldEF0dHJpYnV0ZShcInBsYXllcm51bVwiLCBwbGF5ZXJOdW1iZXIpO1xuICAgICAgICBjb25zdCBib2FyZEFuZEhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixgYm9hcmQtYW5kLWhlYWRlciBjb250YWluZXIgcGxheWVyLSR7cGxheWVyTnVtYmVyfWApO1xuICAgICAgICBjb25zdCBib2FyZEhlYWRlclRleHQ9IGNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBcImJvYXJkIGhlYWRlclwiKTtcbiAgICAgICAgYm9hcmRIZWFkZXJUZXh0LnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZX0ncyBCb2FyZGA7XG4gICAgICAgIGJvYXJkQW5kSGVhZGVyLmFwcGVuZChib2FyZEhlYWRlclRleHQsIGJvYXJkKTtcbiAgICAgICAgcmV0dXJuIGJvYXJkQW5kSGVhZGVyO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkRGlhbG9nID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgICAgICAgY29uc3QgZGlhbG9nSGVhZGVyID0gY3JlYXRlRWxlbWVudChcImgxXCIsIFwiZGlhbG9nIGhlYWRlclwiKTtcbiAgICAgICAgZGlhbG9nSGVhZGVyLnRleHRDb250ZW50ID0gXCJTd2l0Y2ggUGxheWVycyFcIlxuICAgICAgICBjb25zdCBkaWFsb2dTdWJ0ZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJkaWFsb2cgc3VidGV4dFwiKTtcbiAgICAgICAgZGlhbG9nU3VidGV4dC50ZXh0Q29udGVudCA9IFwiKGNsaWNrIHdoZW4gcmVhZHkpXCI7XG4gICAgICAgIGRpYWxvZy5hcHBlbmQoZGlhbG9nSGVhZGVyLCBkaWFsb2dTdWJ0ZXh0KTtcbiAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgIGRpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7ZGlhbG9nLmNsb3NlKCl9KTtcbiAgICAgICAgcmV0dXJuIGRpYWxvZztcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJOZXdTaGlwID0gZnVuY3Rpb24ocGxheWVyTnVtYmVyLC4uLmNvb3Jkcyl7XG4gICAgICAgIGxldCBib2FyZDtcbiAgICAgICAgaWYgKHBsYXllck51bWJlciA9PTEpe1xuICAgICAgICAgICAgYm9hcmQgPSBib2FyZDE7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGJvYXJkID0gYm9hcmQyO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpPTA7XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IGlzSG9yaXpvbnRhbCA9IGZhbHNlO1xuICAgICAgICBpZiAoY29vcmRzWzFdWzBdID09IGNvb3Jkc1swXVswXSl7XG4gICAgICAgICAgICBpc0hvcml6b250YWwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IFt4LHldIG9mIGNvb3Jkcyl7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVUb0NoYW5nZSA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYGRpdi5yb3ctJHt4fSA+IGRpdjpudGgtY2hpbGQoJHt5KzF9KWApO1xuICAgICAgICAgICAgc3F1YXJlVG9DaGFuZ2UuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgICBzcXVhcmVUb0NoYW5nZS5zZXRBdHRyaWJ1dGUoXCJsZW5ndGhcIiwgc2hpcExlbmd0aCk7XG4gICAgICAgICAgICBzcXVhcmVUb0NoYW5nZS5zZXRBdHRyaWJ1dGUoXCJncmFiTG9jYXRpb25cIiwgaSk7XG4gICAgICAgICAgICBzcXVhcmVUb0NoYW5nZS5zZXRBdHRyaWJ1dGUoXCJob3Jpem9udGFsXCIsIGlzSG9yaXpvbnRhbClcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckF0dGFja2VkID0gZnVuY3Rpb24oc3F1YXJlRE9NTm9kZSl7XG4gICAgICAgIHNxdWFyZURPTU5vZGUuY2xhc3NMaXN0LmFkZChcImF0dGFja2VkXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJldmVhbERpYWxvZ1dpdGhUZXh0ID0gZnVuY3Rpb24oc3RyaW5nID0gXCJcIil7XG4gICAgICAgIGNvbnN0IGRpYWxvZ0hlYWRlciA9IGRpYWxvZy5maXJzdENoaWxkO1xuICAgICAgICBpZiAoc3RyaW5nICE9IFwiXCIpe1xuICAgICAgICAgICAgZGlhbG9nSGVhZGVyLnRleHRDb250ZW50ID0gc3RyaW5nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlhbG9nSGVhZGVyLnRleHRDb250ZW50ID0gXCJTd2l0Y2ggUGxheWVycyFcIlxuICAgICAgICB9XG4gICAgICAgIC8vIGFkZCBzY3JlZW4gc3dhcHBpbmcgb3ZlcmxheVxuICAgICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyVHVyblN3aXRjaFRvID0gZnVuY3Rpb24ocGxheWVyTnVtYmVyLCBwbGF5ZXJOYW1lKXtcbiAgICAgICAgcmV2ZWFsRGlhbG9nV2l0aFRleHQoYCR7cGxheWVyTmFtZX0ncyBUdXJuYCk7XG4gICAgICAgIC8vIHBsYXllck51bWJlciBpcyBudW1iZXIgb2YgcGxheWVyIHdob3NlIHR1cm4gaXQgc2hvdWxkIHN3aXRjaCBUT1xuICAgICAgICAvLyBjaGFuZ2UgaGVhZGVyIHRvIFwiSXQgaXMgcGxheWVyc3twbGF5ZXJOdW1iZXJ9Lm5hbWUncyB0dXJuXCJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51aS5jb250YWluZXIgLnR1cm4udGV4dFwiKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZX0ncyBUdXJuYDtcbiAgICAgICAgLy8gY2hhbmdlIGJvYXJkIGhlYWRlciBmcm9tIFwiWW91ciBCb2FyZFwiIHRvIFwiRW5lbXkgQm9hcmRcIiBhbmQgdmlzIHZlcnNhXG4gICAgICAgIGNvbnN0IGJvYXJkMUhlYWRlciA9IGJvYXJkMS5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcbiAgICAgICAgY29uc3QgYm9hcmQySGVhZGVyID0gYm9hcmQyLnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xuICAgICAgICAvLyBoaWRlIHNoaXBzIGZyb20gZW5lbXkgYm9hcmQgYW5kIHJldmVhbCBzaGlwcyBvbiB5b3VyIGJvYXJkXG4gICAgICAgIGNvbnN0IGJvYXJkRE9NMSA9IGJvYXJkMS5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLmNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgYm9hcmRET00yID0gYm9hcmQyLnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQuY29udGFpbmVyXCIpO1xuICAgICAgICBpZiAocGxheWVyTnVtYmVyID09IDEpe1xuICAgICAgICAgICAgYm9hcmQySGVhZGVyLnRleHRDb250ZW50ID0gXCJFbmVteSBCb2FyZFwiO1xuICAgICAgICAgICAgYm9hcmQxSGVhZGVyLnRleHRDb250ZW50ID0gXCJZb3VyIEJvYXJkXCI7XG4gICAgICAgICAgICBib2FyZERPTTEuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gICAgICAgICAgICBib2FyZERPTTIuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2FyZDFIZWFkZXIudGV4dENvbnRlbnQgPSBcIkVuZW15IEJvYXJkXCI7XG4gICAgICAgICAgICBib2FyZDJIZWFkZXIudGV4dENvbnRlbnQgPSBcIllvdXIgQm9hcmRcIjtcbiAgICAgICAgICAgIGJvYXJkRE9NMS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICAgICAgICAgIGJvYXJkRE9NMi5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlbmRlciBlbmRpbmcgZ2FtZSAocGxheWVyTmFtZSBoYXMgd29uKVxuICAgIGNvbnN0IHJlbmRlckVuZEdhbWUgPSBmdW5jdGlvbih3aW5uZXJOYW1lKXtcbiAgICAgICAgY29uc3Qgd2lubmVyVGV4dENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJlbmQgY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCB3aW5uZXJUZXh0ID0gY3JlYXRlRWxlbWVudChcImgxXCIsIFwid2lubmVyIHRleHRcIik7XG4gICAgICAgIHdpbm5lclRleHQudGV4dENvbnRlbnQgPSBgQ29uZ3JhdHMhICR7d2lubmVyTmFtZX0gd29uLmA7O1xuICAgICAgICBjb25zdCBwbGF5QWdhaW5CdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwicmVzZXQgYnV0dG9uXCIpO1xuICAgICAgICBwbGF5QWdhaW5CdXR0b24udGV4dENvbnRlbnQgPSBcIlBsYXkgQWdhaW4/XCI7XG4gICAgICAgIHdpbm5lclRleHRDb250YWluZXIuYXBwZW5kKHdpbm5lclRleHQsIHBsYXlBZ2FpbkJ1dHRvbik7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgYm9keS5hcHBlbmQod2lubmVyVGV4dENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyU3RhZ2luZyA9IGZ1bmN0aW9uKGF0dGFja01hcDEsIHNoaXBNYXAxLCBhdHRhY2tNYXAyLCBzaGlwTWFwMil7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudWkuY29udGFpbmVyIC50dXJuLnRleHRcIik7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiU2V0dXAgVGltZVwiO1xuICAgICAgICByZW5kZXJCb2FyZFJlc2V0KGF0dGFja01hcDEsIHNoaXBNYXAxLCBib2FyZDEucXVlcnlTZWxlY3RvcihcIi5ib2FyZC5jb250YWluZXJcIikpO1xuICAgICAgICByZW5kZXJCb2FyZFJlc2V0KGF0dGFja01hcDIsIHNoaXBNYXAyLCBib2FyZDIucXVlcnlTZWxlY3RvcihcIi5ib2FyZC5jb250YWluZXJcIikpO1xuICAgICAgICByZW5kZXJTaGlwU2FtcGxlcygpO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZUJvYXJkVmlzaWJpbGl0eSA9IGZ1bmN0aW9uKGJvYXJkRE9NKXtcbiAgICAgICAgYm9hcmRET00uY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyQm9hcmRSZXNldCA9IGZ1bmN0aW9uKGF0dGFja01hcCwgc2hpcE1hcCwgYm9hcmRET00pe1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8MTA7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBpO1xuICAgICAgICAgICAgY29uc3QgYXR0YWNrZWRJblJvdyA9IE9iamVjdC5rZXlzKGF0dGFja01hcFtpXSk7XG4gICAgICAgICAgICBjb25zdCBzaGlwSW5Sb3cgPSBPYmplY3Qua2V5cyhzaGlwTWFwW2ldKTtcbiAgICAgICAgICAgIGZvciAobGV0IGF0dGFja2VkIG9mIGF0dGFja2VkSW5Sb3cpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IE51bWJlcihhdHRhY2tlZCkrMTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXZUb1VuYXR0YWNrID0gYm9hcmRET00ucXVlcnlTZWxlY3RvcihgZGl2LnJvdy0ke3Jvd30gZGl2Om50aC1jaGlsZCgke2NvbH0pYCk7XG4gICAgICAgICAgICAgICAgZGl2VG9VbmF0dGFjay5jbGFzc0xpc3QucmVtb3ZlKFwiYXR0YWNrZWRcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHNoaXAgb2Ygc2hpcEluUm93KXtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2wgPSBOdW1iZXIoc2hpcCkrMTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXZUb1Vuc2hpcCA9IGJvYXJkRE9NLnF1ZXJ5U2VsZWN0b3IoYGRpdi5yb3ctJHtyb3d9IGRpdjpudGgtY2hpbGQoJHtjb2x9KWApO1xuICAgICAgICAgICAgICAgIGRpdlRvVW5zaGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpO1xuICAgICAgICAgICAgICAgIGRpdlRvVW5zaGlwLnJlbW92ZUF0dHJpYnV0ZShcImRyYWdnYWJsZVwiKTtcbiAgICAgICAgICAgICAgICBkaXZUb1Vuc2hpcC5yZW1vdmVBdHRyaWJ1dGUoXCJncmFibG9jYXRpb25cIik7XG4gICAgICAgICAgICAgICAgZGl2VG9VbnNoaXAucmVtb3ZlQXR0cmlidXRlKFwibGVuZ3RoXCIpO1xuICAgICAgICAgICAgICAgIGRpdlRvVW5zaGlwLnJlbW92ZUF0dHJpYnV0ZShcImhvcml6b250YWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJTaGlwU2FtcGxlcyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGhpZGRlbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJoaWRkZW4gc2FtcGxlc1wiKTtcbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbFNoaXBzID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInNoaXBzIGhvcml6b250YWxcIik7XG4gICAgICAgIGNvbnN0IHZlcnRpY2FsU2hpcHMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2hpcHMgdmVydGljYWxcIik7XG4gICAgICAgIGhvcml6b250YWxTaGlwcy5hcHBlbmQoYnVpbGRTaGlwT2ZMZW5ndGgoMiksIGJ1aWxkU2hpcE9mTGVuZ3RoKDMpLFxuICAgICAgICBidWlsZFNoaXBPZkxlbmd0aCg0KSwgYnVpbGRTaGlwT2ZMZW5ndGgoNSkpO1xuICAgICAgICB2ZXJ0aWNhbFNoaXBzLmFwcGVuZChidWlsZFNoaXBPZkxlbmd0aCgyKSwgYnVpbGRTaGlwT2ZMZW5ndGgoMyksXG4gICAgICAgIGJ1aWxkU2hpcE9mTGVuZ3RoKDQpLCBidWlsZFNoaXBPZkxlbmd0aCg1KSk7XG4gICAgICAgIGhpZGRlbkNvbnRhaW5lci5hcHBlbmQoaG9yaXpvbnRhbFNoaXBzLHZlcnRpY2FsU2hpcHMpO1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIilcbiAgICAgICAgYm9keS5hcHBlbmQoaGlkZGVuQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBidWlsZFNoaXBPZkxlbmd0aCA9IGZ1bmN0aW9uKGxlbmd0aCl7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcInNoaXAgY29udGFpbmVyXCIpO1xuICAgICAgICBjb250YWluZXIuaWQgPSBgbGVuZ3RoLSR7bGVuZ3RofWA7XG4gICAgICAgIGZvciAobGV0IGkgPTA7IGk8bGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKHBhcnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyU3RhZ2luZ0J1dHRvbnMgPSBmdW5jdGlvbihib2FyZERPTSl7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkFyZWEgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJidXR0b24gY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBidXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsXCJzdWJtaXQgc3RhZ2luZ1wiKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJMb2NrIGluIHBvc2l0aW9ucyFcIjtcbiAgICAgICAgY29uc3Qgcm5nQnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcInJhbmRvbWl6ZSBidXR0b25cIik7XG4gICAgICAgIHJuZ0J1dHRvbi50ZXh0Q29udGVudCA9IFwiUmFuZG9taXplXCJcbiAgICAgICAgYnV0dG9uQXJlYS5hcHBlbmQoYnV0dG9uLCBybmdCdXR0b24pO1xuICAgICAgICBib2FyZERPTS5wYXJlbnROb2RlLmFwcGVuZChidXR0b25BcmVhKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJNb3ZlU2hpcCA9IGZ1bmN0aW9uKFtvbGRYU3RhcnQsIG9sZFlTdGFydF0sIFtuZXdYU3RhcnQsIG5ld1lTdGFydF0sIHNoaXBMZW5ndGgsIGlzSG9yaXpvbnRhbCwgYm9hcmRET01Ob2RlKXtcbiAgICAgICAgaWYgKG9sZFhTdGFydCA9PSBuZXdYU3RhcnQgJiYgb2xkWVN0YXJ0ID09IG5ld1lTdGFydCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCA9PSBcInRydWVcIil7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8c2hpcExlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmVUb1JlbW92ZSA9IGJvYXJkRE9NTm9kZS5xdWVyeVNlbGVjdG9yKGAucm93LSR7b2xkWFN0YXJ0fSBkaXY6bnRoLWNoaWxkKCR7b2xkWVN0YXJ0K2krMX0pYCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JhYmxvY2F0aW9uID0gc3F1YXJlVG9SZW1vdmUuZ2V0QXR0cmlidXRlKFwiZ3JhYmxvY2F0aW9uXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLnJlbW92ZUF0dHJpYnV0ZShcImRyYWdnYWJsZVwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5yZW1vdmVBdHRyaWJ1dGUoXCJsZW5ndGhcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUucmVtb3ZlQXR0cmlidXRlKFwiZ3JhYmxvY2F0aW9uXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLnJlbW92ZUF0dHJpYnV0ZShcImhvcml6b250YWxcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIilcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmVUb0FkZCA9IGJvYXJkRE9NTm9kZS5xdWVyeVNlbGVjdG9yKGAucm93LSR7bmV3WFN0YXJ0fSBkaXY6bnRoLWNoaWxkKCR7bmV3WVN0YXJ0K2krMX0pYCk7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLnNldEF0dHJpYnV0ZShcImxlbmd0aFwiLCBzaGlwTGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5zZXRBdHRyaWJ1dGUoXCJncmFibG9jYXRpb25cIiwgZ3JhYmxvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5zZXRBdHRyaWJ1dGUoXCJob3Jpem9udGFsXCIsIGlzSG9yaXpvbnRhbCk7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxzaGlwTGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZVRvUmVtb3ZlID0gYm9hcmRET01Ob2RlLnF1ZXJ5U2VsZWN0b3IoYC5yb3ctJHtvbGRYU3RhcnQraX0gZGl2Om50aC1jaGlsZCgke29sZFlTdGFydCsxfSlgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBncmFibG9jYXRpb24gPSBzcXVhcmVUb1JlbW92ZS5nZXRBdHRyaWJ1dGUoXCJncmFibG9jYXRpb25cIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUucmVtb3ZlQXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLnJlbW92ZUF0dHJpYnV0ZShcImxlbmd0aFwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5yZW1vdmVBdHRyaWJ1dGUoXCJncmFibG9jYXRpb25cIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUucmVtb3ZlQXR0cmlidXRlKFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKVxuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZVRvQWRkID0gYm9hcmRET01Ob2RlLnF1ZXJ5U2VsZWN0b3IoYC5yb3ctJHtuZXdYU3RhcnQraX0gZGl2Om50aC1jaGlsZCgke25ld1lTdGFydCsxfSlgKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuc2V0QXR0cmlidXRlKFwibGVuZ3RoXCIsIHNoaXBMZW5ndGgpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLnNldEF0dHJpYnV0ZShcImdyYWJsb2NhdGlvblwiLCBncmFibG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLnNldEF0dHJpYnV0ZShcImhvcml6b250YWxcIiwgaXNIb3Jpem9udGFsKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlbmRlcmluZyBwcmVnYW1lXG4gICAgY29uc3QgcmVuZGVyUHJlZ2FtZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgY29uc3QgcHJlZ2FtZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcInByZWdhbWUgY29udGFpbmVyXCIpO1xuICAgICAgICBib2R5LmFwcGVuZChwcmVnYW1lQ29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBidWlsZFByZWdhbWVUaXRsZSgpO1xuICAgICAgICBjb25zdCBnYW1lU2VsZWN0aW9uQnV0dG9ucyA9IGJ1aWxkU2VsZWN0QnV0dG9ucygpO1xuICAgICAgICBwcmVnYW1lQ29udGFpbmVyLmFwcGVuZCh0aXRsZSwgZ2FtZVNlbGVjdGlvbkJ1dHRvbnMpO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkUHJlZ2FtZVRpdGxlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KFwiaDFcIiwgXCJ0aXRsZVwiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkJhdHRsZXNoaXBcIjtcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkU2VsZWN0QnV0dG9ucyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcImJ1dHRvbiBjb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHNpbmdsZVBsYXllckJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIixcInNpbmdsZSBidXR0b25cIik7XG4gICAgICAgIHNpbmdsZVBsYXllckJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2luZ2xlIFBsYXllclwiXG4gICAgICAgIGNvbnN0IGRvdWJsZVBsYXllckJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJkb3VibGUgYnV0dG9uXCIpO1xuICAgICAgICBkb3VibGVQbGF5ZXJCdXR0b24udGV4dENvbnRlbnQgPSBcIkhvdHNlYXQgVHdvIFBsYXllclwiXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoc2luZ2xlUGxheWVyQnV0dG9uLCBkb3VibGVQbGF5ZXJCdXR0b24pO1xuICAgICAgICByZXR1cm4gYnV0dG9uQ29udGFpbmVyO1xuICAgIH1cblxuICAgIC8vIHRoaXMgc2hvdWxkIHJlbmRlciBhZnRlciBnYW1lIHNlbGVjdGlvbiBidXR0b25cbiAgICAvLyBpZiBhbiBleGlzdGluZyBmb3JtIGlzIHRoZXJlLCBvbmx5IGNoYW5nZSBpbnB1dHNcbiAgICBjb25zdCByZW5kZXJQbGF5ZXJOYW1lRm9ybSA9IGZ1bmN0aW9uKGlzU2luZ2xlUGxheWVyKXtcbiAgICAgICAgY29uc3QgbmV3SW5wdXRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJpbnB1dCBjb250YWluZXJcIik7XG4gICAgICAgIGlmIChpc1NpbmdsZVBsYXllcil7XG4gICAgICAgICAgICBuZXdJbnB1dENvbnRhaW5lci5hcHBlbmQoYnVpbGROYW1lSW5wdXQoXCJXaGF0IGlzIHlvdXIgbmFtZT9cIikpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBuZXdJbnB1dENvbnRhaW5lci5hcHBlbmQoYnVpbGROYW1lSW5wdXQoXCJFbnRlciBwbGF5ZXIgMSBuYW1lLi4uXCIpKTtcbiAgICAgICAgICAgIG5ld0lucHV0Q29udGFpbmVyLmFwcGVuZChidWlsZE5hbWVJbnB1dChcIkVudGVyIHBsYXllciAyIG5hbWUuLi5cIikpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLmNvbnRhaW5lclwiKTtcbiAgICAgICAgaWYgKGZvcm1Db250YWluZXIgPT0gbnVsbCl7XG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImZvcm1cIixcImZvcm0gY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmQobmV3SW5wdXRDb250YWluZXIpO1xuICAgICAgICAgICAgY29uc3QgcHJlZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZ2FtZS5jb250YWluZXJcIik7XG4gICAgICAgICAgICBwcmVnYW1lQ29udGFpbmVyLmFwcGVuZChmb3JtQ29udGFpbmVyKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgLy8ganVzdCByZXBsYWNlIGlucHV0IGNvbnRhaW5lciBpZiBmb3JtIGFscmVhZHkgZXhpc3RzXG4gICAgICAgICAgICBjb25zdCBvbGRJbnB1dENvbnRhaW5lciA9IGZvcm1Db250YWluZXIucXVlcnlTZWxlY3RvcihcIi5pbnB1dC5jb250YWluZXJcIik7XG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLnJlcGxhY2VDaGlsZChuZXdJbnB1dENvbnRhaW5lciwgb2xkSW5wdXRDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgZXhpc3RpbmcgYnV0dG9uIGV4aXN0cywgcmVwbGFjZSBpdFxuICAgIGNvbnN0IHJlbmRlckZvcm1CdXR0b24gPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLmNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3Qgb2xkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLnN1Ym1pdFwiKTtcbiAgICAgICAgaWYgKG9sZEJ1dHRvbiAhPSBudWxsKXtcbiAgICAgICAgICAgIGZvcm1Db250YWluZXIucmVtb3ZlQ2hpbGQob2xkQnV0dG9uKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiZm9ybSBzdWJtaXRcIik7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTGV0J3MgUGxheSFcIjtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmQoYnV0dG9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBidWlsZE5hbWVJbnB1dCA9IGZ1bmN0aW9uKHBsYWNlaG9sZGVyU3RyaW5nKXtcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFwibmFtZSBpbnB1dFwiKTtcbiAgICAgICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIixwbGFjZWhvbGRlclN0cmluZyk7XG4gICAgICAgIHJldHVybiBuYW1lSW5wdXQ7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnRUeXBlLCBjbGFzc1N0cmluZyA9IHVuZGVmaW5lZCl7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XG4gICAgICAgIGlmIChjbGFzc1N0cmluZyAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzU3RyaW5nLnNwbGl0KFwiIFwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJue1xuICAgICAgICBpbml0R2FtZVJlbmRlcixcbiAgICAgICAgcmVuZGVyTmV3U2hpcCxcbiAgICAgICAgcmVuZGVyQXR0YWNrZWQsXG4gICAgICAgIHJlbmRlclR1cm5Td2l0Y2hUbyxcbiAgICAgICAgcmVuZGVyRW5kR2FtZSxcbiAgICAgICAgcmVuZGVyU3RhZ2luZyxcbiAgICAgICAgcmVuZGVyU2hpcFNhbXBsZXMsXG4gICAgICAgIHJlbmRlck1vdmVTaGlwLFxuICAgICAgICByZW5kZXJTdGFnaW5nQnV0dG9ucyxcbiAgICAgICAgdG9nZ2xlQm9hcmRWaXNpYmlsaXR5LFxuICAgICAgICByZW5kZXJCb2FyZFJlc2V0LFxuICAgICAgICByZXZlYWxEaWFsb2dXaXRoVGV4dCxcbiAgICAgICAgcmVuZGVyUHJlZ2FtZSxcbiAgICAgICAgcmVuZGVyUGxheWVyTmFtZUZvcm0sXG4gICAgICAgIHJlbmRlckZvcm1CdXR0b24sXG4gICAgfVxuXG59KCk7XG5cbmV4cG9ydCB7UmVuZGVyTWFuYWdlcn07IiwiY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoKXtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgfVxuXG4gICAgaGl0KCl7XG4gICAgICAgIHRoaXMuaGl0cysrO1xuICAgIH1cblxuICAgIGlzU3Vuaygpe1xuICAgICAgICByZXR1cm4gKHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aClcbiAgICB9XG59XG5cbmV4cG9ydCB7U2hpcH07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gbW9kdWxlIHRvIG1hbmFnZSBnYW1lIHVzaW5nIGV2ZW50IGxpc3RlbmVycyB0byBpbnRlcmFjdCB3aXRoIG9iamVjdHNcbi8vIGNhbGxzIG1ldGhvZHMgaW4gcmVuZGVyLmpzIHRvIGNoYW5nZSBET01cbi8vIHJlYWxpc3RpY2FsbHkgZG9lcyBub3QgZXhwb3J0IGFueXRoaW5nIHNpbmNlIGl0IGlzIGEgZHJpdmVyXG5cbmltcG9ydCB7aHVtYW5QbGF5ZXIsIGNvbXB1dGVyUGxheWVyfSBmcm9tIFwiLi9wbGF5ZXIuanNcIlxuaW1wb3J0IHtSZW5kZXJNYW5hZ2VyfSBmcm9tIFwiLi9yZW5kZXIuanNcIlxuXG5jb25zdCBHYW1lTWFuYWdlciA9IGZ1bmN0aW9uKCl7XG5cbiAgICBjb25zdCBhZGROZXdTaGlwID0gZnVuY3Rpb24ocGxheWVyLCAuLi5jb29yZHMpe1xuICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLm5ld1NoaXAoLi4uY29vcmRzKTtcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJOZXdTaGlwKHBsYXllci5udW1iZXIsLi4uY29vcmRzKTtcbiAgICB9XG5cbiAgICAvLyBwYXNzZXMgdHVybiB0byBwbGF5ZXIgMSBpZiBudW1iZXIgPSAxXG4gICAgLy8gaWYgaXQgaXMgcGxheWVyIDEncyB0dXJuLCB0aGVuIGJvYXJkIDIgc2hvdWxkIGJlIEFDVElWRVxuICAgIGNvbnN0IHBhc3NUdXJuVG8gPSBmdW5jdGlvbihwbGF5ZXJOdW1iZXIpe1xuICAgICAgICBpZiAocGxheWVyTnVtYmVyID09IDEpe1xuICAgICAgICAgICAgYWN0aXZhdGVFdmVudExpc3RlbmVyKHBsYXllcnMucGxheWVyMi5ib2FyZERPTSk7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGFjdGl2YXRlRXZlbnRMaXN0ZW5lcihwbGF5ZXJzLnBsYXllcjEuYm9hcmRET00pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBsYXllck5hbWUgPSBPYmplY3QudmFsdWVzKHBsYXllcnMpW3BsYXllck51bWJlci0xXS5uYW1lO1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtwbGF5ZXJOYW1lfSdzIFR1cm5gKTtcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJUdXJuU3dpdGNoVG8ocGxheWVyTnVtYmVyLCBwbGF5ZXJOYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihib2FyZERPTU5vZGUpe1xuICAgICAgICBib2FyZERPTU5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUJvYXJkQ2xpY2spO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUJvYXJkQ2xpY2sgPSBhc3luYyBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGxldCBwbGF5ZXJOdW1iZXIgPSB0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcInBsYXllcm51bVwiKTtcbiAgICAgICAgbGV0IHkgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiY29sXCIpO1xuICAgICAgICBsZXQgeCA9IHRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcInJvd1wiKTtcbiAgICAgICAgbGV0IHBsYXllck9iamVjdCA9IHBsYXllck51bWJlciA9PSAxID8gcGxheWVycy5wbGF5ZXIxIDogcGxheWVycy5wbGF5ZXIyO1xuICAgICAgICBwbGF5ZXJPYmplY3QuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW3gseV0pO1xuICAgICAgICBjb25zb2xlLmxvZyhgUmVjZWl2ZWQgYXR0YWNrIGF0ICgke3h9LCR7eX0pIGZvciBwbGF5ZXIgJHtwbGF5ZXJOdW1iZXJ9YCk7XG4gICAgICAgIFJlbmRlck1hbmFnZXIucmVuZGVyQXR0YWNrZWQodGFyZ2V0KTtcbiAgICAgICAgcGxheWVyT2JqZWN0LmJvYXJkRE9NLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVCb2FyZENsaWNrKTtcbiAgICAgICAgYXdhaXQgc2hvcnRTbGVlcCgpO1xuICAgICAgICBpZiAoaXNTaW5nbGVQbGF5ZXIpe1xuICAgICAgICAgICAgYXdhaXQgZW11bGF0ZUNvbXB1dGVyVHVybigpO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllck9iamVjdC5nYW1lYm9hcmQuaXNBbGxTdW5rKCkpe1xuICAgICAgICAgICAgZW5kR2FtZShwbGF5ZXJOdW1iZXIpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBwYXNzVHVyblRvKHBsYXllck51bWJlcik7IC8vIFdlIHBhc3MgdHVybiB0byBwbGF5ZXIncyBib2FyZCB3ZSBqdXN0IGNsaWNrZWRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGVtdWxhdGVDb21wdXRlclR1cm4gPSBhc3luYyBmdW5jdGlvbigpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVtdWxhdGluZyBjb21wdXRlcidzIHR1cm5cIilcbiAgICAgICAgY29uc3QgW3IsY10gPSBwbGF5ZXJzLnBsYXllcjIuZ2FtZWJvYXJkLm1ha2VFZHVjYXRlZEF0dGFjayhwbGF5ZXJzLnBsYXllcjEpO1xuICAgICAgICBjb25zdCBoaXRUYXJnZXQgPSBwbGF5ZXJzLnBsYXllcjEuYm9hcmRET00ucXVlcnlTZWxlY3RvcihgLnJvdy0ke3J9IGRpdjpudGgtY2hpbGQoJHtjKzF9KWApXG4gICAgICAgIFJlbmRlck1hbmFnZXIucmVuZGVyQXR0YWNrZWQoaGl0VGFyZ2V0KTtcbiAgICAgICAgaWYgKHBsYXllcnMucGxheWVyMS5nYW1lYm9hcmQuaXNBbGxTdW5rKCkpe1xuICAgICAgICAgICAgYXdhaXQgc2hvcnRTbGVlcCgpO1xuICAgICAgICAgICAgZW5kR2FtZSgxKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgYWN0aXZhdGVFdmVudExpc3RlbmVyKHBsYXllcnMucGxheWVyMi5ib2FyZERPTSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbml0UGxheSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIGFzc2lnbiBldmVudCBsaXN0ZW5lciBmb3IgYXR0YWNrc1xuICAgICAgICAvLyBsYXRlciBtYWtlIGZpcnN0IHR1cm4gcmFuZG9tIG9yIGNob3NlblxuICAgICAgICBwbGF5ZXJzLnBsYXllcjIuYm9hcmRET00uY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gICAgICAgIHBhc3NUdXJuVG8oMSk7XG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2dcIik7XG4gICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfTtcblxuICAgIGxldCBwbGF5ZXJzO1xuICAgIGxldCBpc1NpbmdsZVBsYXllcjtcbiAgICBjb25zdCBpbml0R2FtZSA9IGZ1bmN0aW9uKHBsYXllcjFOYW1lID0gXCJQbGF5ZXIgMVwiLCBwbGF5ZXIyTmFtZSA9IFwiUGxheWVyIDJcIil7XG4gICAgICAgIGNvbnN0IHBsYXllcjEgPSBuZXcgaHVtYW5QbGF5ZXIocGxheWVyMU5hbWUsIDEpO1xuICAgICAgICBsZXQgcGxheWVyMjtcbiAgICAgICAgaWYgKHBsYXllcjJOYW1lID09IGZhbHNlKXtcbiAgICAgICAgICAgIHBsYXllcjIgPSBuZXcgY29tcHV0ZXJQbGF5ZXIoMik7XG4gICAgICAgICAgICBpc1NpbmdsZVBsYXllciA9IHRydWU7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHBsYXllcjIgPSBuZXcgaHVtYW5QbGF5ZXIocGxheWVyMk5hbWUsIDIpO1xuICAgICAgICAgICAgaXNTaW5nbGVQbGF5ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBSZW5kZXJNYW5hZ2VyLmluaXRHYW1lUmVuZGVyKHBsYXllcjEsIHBsYXllcjIpO1xuICAgICAgICBjb25zdCBib2FyZDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLWFuZC1oZWFkZXIucGxheWVyLTEgLmJvYXJkLmNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgYm9hcmQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC1hbmQtaGVhZGVyLnBsYXllci0yIC5ib2FyZC5jb250YWluZXJcIik7XG4gICAgICAgIHBsYXllcjEuYm9hcmRET00gPSBib2FyZDE7XG4gICAgICAgIHBsYXllcjIuYm9hcmRET00gPSBib2FyZDI7XG4gICAgICAgIC8vIGVhY2ggcGxheWVyIGhhcyA1IHNoaXBzIG9mIHNpemUgMiwgMywgMywgNCwgNVxuICAgICAgICBwbGF5ZXJzID0ge3BsYXllcjEsIHBsYXllcjJ9O1xuICAgICAgICBlbnRlckdhbWVTdGFnaW5nKCk7XG4gICAgICAgIC8vanVzdCBmb3IgdGVzdGluZyFcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51aS5jb250YWluZXJcIik7XG4gICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZW5kR2FtZSgxKSlcbiAgICB9O1xuXG4gICAgLy8gcGxheWVyIHdpdGggcGxheWVyTnVtYmVyIGxvc3RcbiAgICBjb25zdCBlbmRHYW1lID0gZnVuY3Rpb24ocGxheWVyTnVtYmVyKXtcbiAgICAgICAgbGV0IHdpbm5lck5hbWU7XG4gICAgICAgIGlmIChwbGF5ZXJOdW1iZXIgPT0xKXtcbiAgICAgICAgICAgIHdpbm5lck5hbWUgPSBwbGF5ZXJzLnBsYXllcjIubmFtZTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgd2lubmVyTmFtZSA9IHBsYXllcnMucGxheWVyMS5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIFJlbmRlck1hbmFnZXIucmVuZGVyRW5kR2FtZSh3aW5uZXJOYW1lKTtcbiAgICAgICAgYWN0aXZhdGVSZXBsYXlCdXR0b24oKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZVJlcGxheUJ1dHRvbiA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IHJlcGxheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuZW5kLmNvbnRhaW5lciBidXR0b25cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcGxheUJ1dHRvbik7XG4gICAgICAgIHJlcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZW50ZXJHYW1lU3RhZ2luZyk7XG4gICAgfVxuXG4gICAgLy8gU1RBUlQgT0YgQ09ERSBSRUxBVEVEIFRPIEdBTUUgU1RBR0lOR1xuICAgIGNvbnN0IGVudGVyR2FtZVN0YWdpbmcgPSBmdW5jdGlvbigpe1xuICAgICAgICAvLyBhY3RpdmF0ZSBkcmFnIGFuZCBkcm9wIG9mIHNoaXBzIHRvIGNob29zZSBzaGlwIGxvY2F0aW9uIHVzaW5nIEhUTUwgZHJhZyBhbmQgZHJvcCBBUEkhXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRW50ZXJpbmcgbmV3IGdhbWUgc3RhZ2luZyFcIilcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJTdGFnaW5nKFxuICAgICAgICAgICAgcGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5nZXRBdHRhY2tNYXAoKSxcbiAgICAgICAgICAgIHBsYXllcnMucGxheWVyMS5nYW1lYm9hcmQuZ2V0Qm9hcmRNYXAoKSxcbiAgICAgICAgICAgIHBsYXllcnMucGxheWVyMi5nYW1lYm9hcmQuZ2V0QXR0YWNrTWFwKCksXG4gICAgICAgICAgICBwbGF5ZXJzLnBsYXllcjIuZ2FtZWJvYXJkLmdldEJvYXJkTWFwKClcbiAgICAgICAgKTtcbiAgICAgICAgcGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5yZXNldEJvYXJkKCk7XG4gICAgICAgIHBsYXllcnMucGxheWVyMi5nYW1lYm9hcmQucmVzZXRCb2FyZCgpO1xuICAgICAgICBhY3RpdmF0ZVN0YWdpbmcocGxheWVycy5wbGF5ZXIxKVxuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlU3RhZ2luZyA9IGZ1bmN0aW9uKHBsYXllcil7XG4gICAgICAgIGNvbnN0IGJvYXJkMSA9IHBsYXllci5ib2FyZERPTTtcbiAgICAgICAgUmVuZGVyTWFuYWdlci50b2dnbGVCb2FyZFZpc2liaWxpdHkoYm9hcmQxKTtcbiAgICAgICAgcmVuZGVyRHJhZ2dhYmxlU2hpcHNUb1N0YWdlKHBsYXllcik7XG4gICAgICAgIGFjdGl2YXRlRHJvcEFuZERyYWdTdGFydEhhbmRsZXIoYm9hcmQxKTtcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJTdGFnaW5nQnV0dG9ucyhib2FyZDEpO1xuICAgICAgICBhY3RpdmF0ZVN0YWdpbmdCdXR0b25zKHBsYXllcik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyRHJhZ2dhYmxlU2hpcHNUb1N0YWdlID0gZnVuY3Rpb24ocGxheWVyKXtcbiAgICAgICAgYWRkTmV3U2hpcFdpdGhEcmFnZ2luZyhwbGF5ZXIsWzAsMF0sWzAsMV0pXG4gICAgICAgIGFkZE5ld1NoaXBXaXRoRHJhZ2dpbmcocGxheWVyLFszLDNdLFs0LDNdLFs1LDNdKTtcbiAgICAgICAgYWRkTmV3U2hpcFdpdGhEcmFnZ2luZyhwbGF5ZXIsWzcsN10sWzgsN10sWzksN10pO1xuICAgICAgICBhZGROZXdTaGlwV2l0aERyYWdnaW5nKHBsYXllcixbMCwzXSwgWzAsNF0sWzAsNV0sWzAsNl0pO1xuICAgICAgICBhZGROZXdTaGlwV2l0aERyYWdnaW5nKHBsYXllcixbNSw1XSwgWzYsNV0sWzcsNV0sWzgsNV0sWzksNV0pO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZE5ld1NoaXBXaXRoRHJhZ2dpbmcgPSBmdW5jdGlvbihwbGF5ZXIsIC4uLmNvb3Jkcyl7XG4gICAgICAgIGFkZE5ld1NoaXAocGxheWVyLCAuLi5jb29yZHMpO1xuICAgICAgICBzZXRTcGVjaWZpY0RyYWdnYWJsZShwbGF5ZXIuYm9hcmRET00sIC4uLmNvb3Jkcyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0U3BlY2lmaWNEcmFnZ2FibGUgPSBmdW5jdGlvbihib2FyZERPTSwgLi4uY29vcmRzKXtcbiAgICAgICAgZm9yIChsZXQgW3gseV0gb2YgY29vcmRzKXtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGJvYXJkRE9NLnF1ZXJ5U2VsZWN0b3IoYC5yb3ctJHt4fSBkaXY6bnRoLWNoaWxkKCR7eSsxfSlgKTtcbiAgICAgICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZVN0YWdpbmdCdXR0b25zID0gZnVuY3Rpb24ocGxheWVyKXtcbiAgICAgICAgY29uc3QgYm9hcmRET00gPSBwbGF5ZXIuYm9hcmRET007XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGJvYXJkRE9NLm5leHRFbGVtZW50U2libGluZy5maXJzdENoaWxkO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNvbXBsZXRlU3RhZ2luZyhib2FyZERPTSkpXG4gICAgICAgIGNvbnN0IHJuZ0J1dHRvbiA9IGJ1dHRvbi5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIHJuZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcmFuZG9taXplQm9hcmQocGxheWVyKSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmFuZG9taXplQm9hcmQgPSBmdW5jdGlvbihwbGF5ZXIpe1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlckJvYXJkUmVzZXQocGxheWVyLmdhbWVib2FyZC5nZXRBdHRhY2tNYXAoKSxcbiAgICAgICAgcGxheWVyLmdhbWVib2FyZC5nZXRCb2FyZE1hcCgpLCBwbGF5ZXIuYm9hcmRET00pO1xuICAgICAgICBjb25zdCByYW5kb21Db29yZHMgPSBwbGF5ZXIuZ2FtZWJvYXJkLnJhbmRvbWl6ZUJvYXJkKCk7XG4gICAgICAgIC8vIHJhbmRvbUNvb3JkcyBpcyB7Y29vcmRzMSwgY29vcmRzMiwgLi4uIGNvb3JkczV9IHdoZXJlIGVhY2ggY29vcmRzIGlzIGFuIGFycmF5IG9mIFt4LHldc1xuICAgICAgICBmb3IgKGxldCBjb29yZHNBcnJheSBvZiBPYmplY3QudmFsdWVzKHJhbmRvbUNvb3Jkcykpe1xuICAgICAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJOZXdTaGlwKHBsYXllci5udW1iZXIsIC4uLmNvb3Jkc0FycmF5KTtcbiAgICAgICAgICAgIHNldFNwZWNpZmljRHJhZ2dhYmxlKHBsYXllci5ib2FyZERPTSwgLi4uY29vcmRzQXJyYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGVTdGFnaW5nID0gYXN5bmMgZnVuY3Rpb24oYm9hcmRET00pe1xuICAgICAgICBkZWFjdGl2YXRlU3RhZ2luZyhib2FyZERPTSk7XG4gICAgICAgIGlmIChib2FyZERPTS5nZXRBdHRyaWJ1dGUoXCJwbGF5ZXJudW1cIikgPT0gXCIxXCIgJiYgIWlzU2luZ2xlUGxheWVyKXtcbiAgICAgICAgICAgIFJlbmRlck1hbmFnZXIucmV2ZWFsRGlhbG9nV2l0aFRleHQoYE5vdyBsZXQgJHtwbGF5ZXJzLnBsYXllcjIubmFtZX0gc2V0IHVwLmApO1xuICAgICAgICAgICAgYWN0aXZhdGVTdGFnaW5nKHBsYXllcnMucGxheWVyMik7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzU2luZ2xlUGxheWVyKXtcbiAgICAgICAgICAgIGluaXRQbGF5KCk7XG4gICAgICAgICAgICBSZW5kZXJNYW5hZ2VyLnJldmVhbERpYWxvZ1dpdGhUZXh0KGBMZXQncyBwbGF5ISAke3BsYXllcnMucGxheWVyMS5uYW1lfSBmaXJzdC5gKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgLy8gdGhpcyBjYXNlIGlzIHdoZW4gaXQgaXMgYSBzaW5nbGUgcGxheWVyIGdhbWVcbiAgICAgICAgICAgIHJhbmRvbWl6ZUJvYXJkKHBsYXllcnMucGxheWVyMik7XG4gICAgICAgICAgICBpbml0UGxheSgpO1xuICAgICAgICAgICAgUmVuZGVyTWFuYWdlci5yZXZlYWxEaWFsb2dXaXRoVGV4dChgTGV0J3MgcGxheSEgWW91ciB0dXJuIGZpcnN0LmApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGVhY3RpdmF0ZVN0YWdpbmcgPSBmdW5jdGlvbihib2FyZERPTSl7XG4gICAgICAgIFJlbmRlck1hbmFnZXIudG9nZ2xlQm9hcmRWaXNpYmlsaXR5KGJvYXJkRE9NKTtcbiAgICAgICAgY29uc3QgYnV0dG9uQXJlYSA9IGJvYXJkRE9NLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgYnV0dG9uQXJlYS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJ1dHRvbkFyZWEpO1xuICAgICAgICBjb25zdCByb3dzID0gYm9hcmRET00uY2hpbGRyZW47XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHJvd3NbaV07XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVzID0gcm93LmNoaWxkcmVuO1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPDEwOyBqKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IHNxdWFyZXNbal07XG4gICAgICAgICAgICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBvbmRyYWdvdmVySGFuZGxlcik7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGRyb3BIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnc3RhcnRIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUucmVtb3ZlQXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGFyZ2V0IGlzIDxkaXYgY29sPVwiXCI+IChlZzogc3F1YXJlKVxuICAgIGNvbnN0IGRyYWdzdGFydEhhbmRsZXIgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZHJhZyBldmVudCB0cmlnZ2VyZWRcIik7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgbGV0IHNoaXBMZW5ndGggPSBOdW1iZXIodGFyZ2V0LmdldEF0dHJpYnV0ZShcImxlbmd0aFwiKSk7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwic2hpcExlbmd0aFwiLCBzaGlwTGVuZ3RoKTtcbiAgICAgICAgbGV0IGdyYWJMb2NhdGlvbiA9IE51bWJlcih0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZ3JhYmxvY2F0aW9uXCIpKTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJncmFiTG9jYXRpb25cIiwgZ3JhYkxvY2F0aW9uKTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJob3Jpem9udGFsXCIsIHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJob3Jpem9udGFsXCIpKTtcbiAgICAgICAgbGV0IHN0YXJ0Um93ID0gTnVtYmVyKHRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcInJvd1wiKSk7XG4gICAgICAgIGxldCBzdGFydENvbCA9IE51bWJlcih0YXJnZXQuZ2V0QXR0cmlidXRlKFwiY29sXCIpKTtcbiAgICAgICAgbGV0IGlzSG9yaXpvbnRhbCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJob3Jpem9udGFsXCIpO1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInN0YXJ0Um93XCIsIHN0YXJ0Um93KTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJzdGFydENvbFwiLCBzdGFydENvbCk7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiaXNIb3Jpem9udGFsXCIsIGlzSG9yaXpvbnRhbClcbiAgICAgICAgY29uc3Qgd2lkdGhPZkRpdiA9IDIwO1xuICAgICAgICBjb25zdCB3aWR0aE9mR2FwID0gMTtcbiAgICAgICAgLy8gaWYgZ3JhYmxvY2F0aW9uID0gMCwgZG9uJ3QgYWRkIGFueXRoaW5nXG4gICAgICAgIC8vIGlmIGdyYWJsb2NhdGlvbiA9IDEsIGFkZCAxIGdhcCBhbmQgMSBkaXZcbiAgICAgICAgLy8gaWYgZ3JhYmxvY2F0aW9uID0gMiwgYWRkIDIgZ2FwcyBhbmQgMiBkaXZzXG4gICAgICAgIGxldCBhZGRPZmZzZXRYID0gMDtcbiAgICAgICAgbGV0IGFkZE9mZnNldFkgPSAwO1xuICAgICAgICBsZXQgZHJhZ0ltYWdlTm9kZTtcbiAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCA9PSBcInRydWVcIil7XG4gICAgICAgICAgICBkcmFnSW1hZ2VOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmhpZGRlbi5zYW1wbGVzIC5zaGlwcy5ob3Jpem9udGFsICNsZW5ndGgtJHtzaGlwTGVuZ3RofWApO1xuICAgICAgICAgICAgYWRkT2Zmc2V0WCA9IChncmFiTG9jYXRpb24gKiAod2lkdGhPZkRpdit3aWR0aE9mR2FwKSk7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGRyYWdJbWFnZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaGlkZGVuLnNhbXBsZXMgLnNoaXBzLnZlcnRpY2FsICNsZW5ndGgtJHtzaGlwTGVuZ3RofWApO1xuICAgICAgICAgICAgYWRkT2Zmc2V0WSA9IChncmFiTG9jYXRpb24gKiAod2lkdGhPZkRpdit3aWR0aE9mR2FwKSlcbiAgICAgICAgfVxuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKGRyYWdJbWFnZU5vZGUsZXZlbnQub2Zmc2V0WCArIGFkZE9mZnNldFgsZXZlbnQub2Zmc2V0WSthZGRPZmZzZXRZKTtcbiAgICAgICAgLy8gZHluYW1pY2FsbHkgYWxsb3cgd2hlcmUgd2UgY2FuIGRyb3Agd2l0aCBvbmRyYWdvdmVyIGF0dHJpYnV0ZVxuICAgICAgICBjb25zdCBwbGF5ZXJOdW0gPSB0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcInBsYXllcm51bVwiKTtcbiAgICAgICAgbGV0IHBsYXllclZhcjtcbiAgICAgICAgaWYgKHBsYXllck51bSA9PTEpe1xuICAgICAgICAgICAgcGxheWVyVmFyID0gcGxheWVycy5wbGF5ZXIxO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBwbGF5ZXJWYXIgPSBwbGF5ZXJzLnBsYXllcjI7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJwbGF5ZXJudW1cIiwgcGxheWVyTnVtKTtcbiAgICAgICAgY29uc3Qgc2hpcE9iamVjdCA9IHBsYXllclZhci5nYW1lYm9hcmQuZ2V0U2hpcEZyb21Db29yZHMoW3N0YXJ0Um93LCBzdGFydENvbF0pO1xuICAgICAgICBwbGF5ZXJWYXIuZ2FtZWJvYXJkLmNyZWF0ZUFsbG93ZWRQb3NpdGlvbk1hcChzaGlwT2JqZWN0LCBpc0hvcml6b250YWwsIGdyYWJMb2NhdGlvbik7XG4gICAgICAgIGFjdGl2YXRlT25kcmFnb3ZlcihwbGF5ZXJWYXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlT25kcmFnb3ZlciA9IGZ1bmN0aW9uKHBsYXllcil7XG4gICAgICAgIGNvbnN0IHJvd3MgPSBwbGF5ZXIuYm9hcmRET00uY2hpbGRyZW47XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHJvd3NbaV07XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVzID0gcm93LmNoaWxkcmVuO1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPDEwOyBqKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IHNxdWFyZXNbal07XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgJHtwbGF5ZXIuZ2FtZWJvYXJkLmlzVGhpc0FsbG93ZWRQbGFjZW1lbnQoW2ksal0pfWApXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQuaXNUaGlzQWxsb3dlZFBsYWNlbWVudChbaSxqXSkpe1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIG9uZHJhZ292ZXJIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgZHJhZ292ZXIgYWxsb3dlZCBvbiBbJHtpfSwgJHtqfV1gKVxuICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBvbmRyYWdvdmVySGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYGRyYWdvdmVyIG5vdCBhbGxvd2VkIG9uIFske2l9LCAke2p9XWApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVEcm9wQW5kRHJhZ1N0YXJ0SGFuZGxlciA9IGZ1bmN0aW9uKHBsYXllckJvYXJkKXtcbiAgICAgICAgZm9yIChsZXQgcm93IG9mIHBsYXllckJvYXJkLmNoaWxkcmVuKXtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCBvZiByb3cuY2hpbGRyZW4pe1xuICAgICAgICAgICAgICAgIGNvbC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBkcm9wSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgY29sLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZ3N0YXJ0SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvbmRyYWdvdmVySGFuZGxlciA9IGZ1bmN0aW9uKGV2KXtcbiAgICAgICAgY29uc29sZS5sb2coXCJkcmFnb3ZlciBkZXRlY3RlZCFcIilcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBkcm9wSGFuZGxlciA9IGZ1bmN0aW9uKGV2KXtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgcm93ID0gTnVtYmVyKGV2LnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcInJvd1wiKSk7XG4gICAgICAgIGNvbnN0IGNvbCA9IE51bWJlcihldi50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY29sXCIpKTtcbiAgICAgICAgbGV0IG5ld1N0YXJ0Um93ID0gcm93O1xuICAgICAgICBsZXQgb2xkU3RhcnRSb3cgPSBOdW1iZXIoZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJzdGFydFJvd1wiKSk7XG4gICAgICAgIGxldCBuZXdTdGFydENvbCA9IGNvbDtcbiAgICAgICAgbGV0IG9sZFN0YXJ0Q29sID0gTnVtYmVyKGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwic3RhcnRDb2xcIikpO1xuICAgICAgICBjb25zdCBncmFiTG9jYXRpb24gPSBOdW1iZXIoZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJncmFiTG9jYXRpb25cIikpO1xuICAgICAgICBjb25zdCBpc0hvcml6b250YWwgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImlzSG9yaXpvbnRhbFwiKTtcbiAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCA9PSBcInRydWVcIil7XG4gICAgICAgICAgICBuZXdTdGFydENvbCAtPSBncmFiTG9jYXRpb247XG4gICAgICAgICAgICBvbGRTdGFydENvbCAtPSBncmFiTG9jYXRpb247XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIG5ld1N0YXJ0Um93IC09IGdyYWJMb2NhdGlvbjtcbiAgICAgICAgICAgIG9sZFN0YXJ0Um93IC09IGdyYWJMb2NhdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwbGF5ZXJOdW0gPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInBsYXllcm51bVwiKTtcbiAgICAgICAgbGV0IHBsYXllcjtcbiAgICAgICAgaWYgKHBsYXllck51bSA9PTEpe1xuICAgICAgICAgICAgcGxheWVyID0gcGxheWVycy5wbGF5ZXIxO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBwbGF5ZXIgPSBwbGF5ZXJzLnBsYXllcjI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IE51bWJlcihldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInNoaXBMZW5ndGhcIikpO1xuICAgICAgICAvLyBjaGFuZ2UgdGhlIGdhbWVib2FyZCBkYXRhXG4gICAgICAgIHBsYXllci5nYW1lYm9hcmQubW92ZVNoaXAocGxheWVyLmdhbWVib2FyZC5nZXRTaGlwRnJvbUNvb3Jkcyhbb2xkU3RhcnRSb3csb2xkU3RhcnRDb2xdKSxcbiAgICAgICAgW25ld1N0YXJ0Um93LG5ld1N0YXJ0Q29sXSwgc2hpcExlbmd0aCwgaXNIb3Jpem9udGFsKTtcbiAgICAgICAgLy8gcmVuZGVyIGNoYW5nZXMgYW5kIGFsc28gbWFuYWdlcyBkcmFnZ2FibGVcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJNb3ZlU2hpcChbb2xkU3RhcnRSb3csb2xkU3RhcnRDb2xdLFxuICAgICAgICBbbmV3U3RhcnRSb3csbmV3U3RhcnRDb2xdLCBzaGlwTGVuZ3RoLCBpc0hvcml6b250YWwsIHBsYXllci5ib2FyZERPTSk7XG4gICAgfVxuICAgIC8vIEVORCBPRiBDT0RFIFJFTEFURUQgVE8gU1RBR0lOR1xuXG4gICAgY29uc3Qgc2hvcnRTbGVlcCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpO1xuICAgIH1cblxuICAgIC8vIFByZWdhbWUgY29kZSAobGlrZSB3aGVyZSB5b3UgcHV0IHBsYXllciBuYW1lcyBhbmQgY2hvb3NlIGdhbWUgdHlwZSlcbiAgICBjb25zdCBpbml0UHJlZ2FtZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIHJlbmRlcnMgdGl0bGUsIGdhbWUgbW9kZSBzZWxlY3Rpb24sIGZvcm0gZm9yIG5hbWVzLCBidXR0b24gdG8gc3RhcnRcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJQcmVnYW1lKCk7XG4gICAgICAgIGFjdGl2YXRlUHJlZ2FtZUJ1dHRvbnMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZVByZWdhbWVCdXR0b25zID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgYnV0dG9uc0FyciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJlZ2FtZS5jb250YWluZXIgLmJ1dHRvbi5jb250YWluZXIgLmJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uc0FyclswXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gaGFuZGxlUHJlZ2FtZUJ1dHRvbkNsaWNrKHRydWUpKTtcbiAgICAgICAgYnV0dG9uc0FyclsxXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gaGFuZGxlUHJlZ2FtZUJ1dHRvbkNsaWNrKGZhbHNlKSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUHJlZ2FtZUJ1dHRvbkNsaWNrID0gZnVuY3Rpb24oaXNTaW5nbGVQbGF5ZXIpe1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlclBsYXllck5hbWVGb3JtKGlzU2luZ2xlUGxheWVyKTtcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJGb3JtQnV0dG9uKGlzU2luZ2xlUGxheWVyKTtcbiAgICAgICAgYWN0aXZhdGVGb3JtQnV0dG9ucyhpc1NpbmdsZVBsYXllcik7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVGb3JtQnV0dG9ucyA9IGZ1bmN0aW9uKGlzU2luZ2xlUGxheWVyKXtcbiAgICAgICAgY29uc3QgZm9ybVN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZ2FtZS5jb250YWluZXIgLmZvcm0uc3VibWl0XCIpO1xuICAgICAgICBmb3JtU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IGhhbmRsZUZvcm1TdWJtaXQoZXZlbnQsaXNTaW5nbGVQbGF5ZXIpKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gZnVuY3Rpb24oZXZlbnQsaXNTaW5nbGVQbGF5ZXIpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgIGxldCBmb3JtMVZhbHVlID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcIi5uYW1lLmlucHV0XCIpLnZhbHVlO1xuICAgICAgICBpZiAoZm9ybTFWYWx1ZSA9PVwiXCIpe1xuICAgICAgICAgICAgZm9ybTFWYWx1ZSA9IFwiUGxheWVyIDFcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNTaW5nbGVQbGF5ZXIpe1xuICAgICAgICAgICAgaW5pdEdhbWUoZm9ybTFWYWx1ZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGZvcm0yVmFsdWUgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLm5hbWUuaW5wdXQ6bnRoLWNoaWxkKDIpXCIpLnZhbHVlO1xuICAgICAgICAgICAgaWYgKGZvcm0yVmFsdWUgPT1cIlwiKXtcbiAgICAgICAgICAgICAgICBmb3JtMlZhbHVlID0gXCJQbGF5ZXIgMlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5pdEdhbWUoZm9ybTFWYWx1ZSxmb3JtMlZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gRFJJVkVSIENPREVcbiAgICBpbml0UHJlZ2FtZSgpO1xuXG4gICAgcmV0dXJue1xuICAgICAgICBwbGF5ZXJzLFxuICAgIH1cbn0oKTtcblxuZXhwb3J0IHtHYW1lTWFuYWdlcn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=