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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,+BAA+B;IAC/B,8BAA8B;IAC9B,uBAAuB;IACvB,yBAAyB,EAAE,MAAM;IACjC,iCAAiC,EAAE,QAAQ;IAC3C,qBAAqB,EAAE,OAAO;IAC9B,iCAAiC;IACjC,gCAAgC;IAChC,6CAA6C;IAC7C,wCAAwC;AAC5C;;AAEA;IACI,QAAQ;IACR,SAAS;AACb;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,sBAAsB;IACtB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,gBAAgB;;IAEhB,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;;IAET;QACI,mBAAmB;QACnB,cAAc;IAClB;;IAEA;QACI,aAAa;QACb,8BAA8B;QAC9B,2BAA2B;QAC3B,QAAQ;;QAER;YACI,kBAAkB;YAClB,aAAa;QACjB;;QAEA;YACI,kBAAkB;YAClB,aAAa;QACjB;IACJ;;IAEA;QACI,gBAAgB;QAChB,aAAa;QACb,sBAAsB;QACtB,QAAQ;;QAER;YACI,YAAY;YACZ,mBAAmB;YACnB,QAAQ;;YAER;gBACI,kBAAkB;gBAClB,+CAA+C;gBAC/C,mBAAmB;YACvB;QACJ;;QAEA;YACI,kBAAkB;YAClB,kBAAkB;QACtB;IACJ;AACJ;;AAEA;IACI,sCAAsC;IACtC,kBAAkB;IAClB,qCAAqC;IACrC,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,qCAAqC;IACrC,0BAA0B;IAC1B,YAAY;AAChB;;AAEA;IACI,sCAAsC;IACtC,wBAAwB;AAC5B;;AAEA;IACI,gBAAgB;;IAEhB,YAAY;IACZ,mCAAmC;IACnC,8BAA8B;IAC9B,kBAAkB,EAAE,6EAA6E;IACjG,cAAc;IACd,kBAAkB;;IAElB,+BAA+B;IAC/B;QACI,wBAAwB;QACxB,mBAAmB;IACvB;;IAEA;QACI,iBAAiB;QACjB,YAAY;QACZ,qBAAqB;QACrB,SAAS;QACT,uBAAuB;QACvB,mBAAmB;;QAEnB;YACI,qBAAqB;YACrB,gBAAgB;YAChB,YAAY;YACZ,qBAAqB;QACzB;;QAEA;YACI,kBAAkB;YAClB,oBAAoB;YACpB,YAAY;YACZ,sBAAsB;YACtB,QAAQ;QACZ;;QAEA;YACI,YAAY;QAChB;IACJ;;IAEA;QACI,wBAAwB;QACxB,iBAAiB;IACrB;;IAEA;QACI,wBAAwB;QACxB,mBAAmB;IACvB;;IAEA;QACI,kBAAkB;QAClB,eAAe;IACnB;;IAEA;QACI,wBAAwB;IAC5B;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,kBAAkB;IAClB,yCAAyC;;IAEzC;QACI,aAAa;QACb,mBAAmB;QACnB,QAAQ;;QAER;YACI,iBAAiB;YACjB,YAAY;YACZ,8CAA8C;QAClD;;QAEA;YACI,+CAA+C;QACnD;;QAEA;YACI,uCAAuC;QAC3C;IACJ;AACJ;;AAEA;IACI;QACI,mCAAmC;IACvC;AACJ;;AAEA,yCAAyC;AACzC;IACI,SAAS;IACT;QACI,aAAa;QACb,QAAQ;QACR,sBAAsB;;QAEtB;YACI,yCAAyC;YACzC,kBAAkB;YAClB,aAAa;YACb,mBAAmB;YACnB,QAAQ;;YAER;gBACI,iBAAiB;gBACjB,YAAY;gBACZ,kCAAkC;YACtC;QACJ;IACJ;;IAEA;QACI,sBAAsB;IAC1B;AACJ;;AAEA;IACI,iCAAiC;AACrC;;AAEA,iBAAiB;AACjB;IACI,gDAAgD;AACpD;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":[":root{\n    --content-color: #D6FFF6;\n    --button-clicked-color: #c3ecc3;\n    --bg-color: rgb(255, 255, 240);\n    --accent-color: #4DCCBD;\n    --attacked-color: #ffc2c2; /*red*/\n    --attacked-and-hit-color: #bffdc2; /*green*/\n    --ship-color: #b3c7ff; /*blue*/\n    --board-background-color: #525252;\n    --board-grid-color: rgb(0, 0, 0);\n    --dialog-background-color: rgb(255, 198, 255);\n    font-family:Arial, Helvetica, sans-serif;\n}\n\nh1,h2,h3,p,button{\n    margin:0;\n    padding:0;\n}\n\nbody{\n    background-color: var(--bg-color);\n    display:flex;\n    justify-content:center;\n    align-items:start;\n    height: 80vh;\n}\n\n.pregame.container{\n    margin-top: 30vh;\n\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n\n    .title{\n        font-weight: bolder;\n        font-size: 500;\n    }\n\n    .button.container{\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-auto-rows: min-content;\n        gap: 5px;\n\n        button.single{\n            grid-column: 1 / 2;\n            grid-row: 1/2;\n        }\n\n        button.double{\n            grid-column: 2 / 3;\n            grid-row: 1/2;\n        }\n    }\n\n    form{\n        margin-top: 20px;\n        display: flex;\n        flex-direction: column;\n        gap: 3px;\n\n        .input.container{\n            display:flex;\n            flex-direction: row;\n            gap: 3px;\n\n            input{\n                padding: 12px 20px;\n                border: 2px solid var(--board-background-color);\n                border-radius: 24px;\n            }\n        }\n\n        button{\n            width: max-content;\n            align-self: center;\n        }\n    }\n}\n\nbutton{\n    background-color: var(--content-color);\n    padding: 12px 28px;\n    border: 2px solid var(--accent-color);\n    color: black;\n    border-radius: 2px;\n}\n\nbutton:hover{\n    background-color: var(--accent-color);\n    transition-duration: 200ms;\n    color: white;\n}\n\nbutton:active{\n    border: 2px solid var(--content-color);\n    transition-duration: 1ms;\n}\n\n.game.container{\n    margin-top: 15vh;\n\n    display:grid;\n    grid-template-rows: max-content 1fr;\n    grid-template-columns: 1fr 1fr;\n    width: min-content; /* Need to do this to keep board symmetric but still expanded for long names*/\n    gap: 12px 36px;\n    align-items: start;\n\n    /* grid area is r / c / r / c */\n    .ui.container{\n        grid-area: 1 / 1 / 2 / 3;\n        justify-self:center;\n    }\n\n    .board-and-header.container{\n        width:fit-content;\n        display:flex;\n        flex-direction:column;\n        gap: 12px;\n        justify-content: center;\n        align-items: center;\n\n        .board.header{\n            word-wrap: break-word;\n            margin-top: 24px;\n            height: 48px;\n            vertical-align:middle;\n        }\n\n        .button.container{\n            width: min-content;\n            justify-self: center;\n            display:flex;\n            flex-direction: column;\n            gap: 3px;\n        }\n\n        button{\n            width: 163px;\n        }\n    }\n\n    .board-and-header.container.player-1{\n        grid-area: 2 / 1 / 3 / 2;\n        justify-self: end;\n    }\n\n    .board-and-header.container.player-2{\n        grid-area: 2 / 2 / 3 / 3;\n        justify-self: start;\n    }\n\n    h2{\n        text-align: center;\n        text-wrap: wrap;\n    }\n\n    .hidden.samples{\n        grid-area: 3 / 1 / 4 / 3;\n    }\n}\n\n.board.container{\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    width: min-content;\n    background-color: var(--board-grid-color);\n\n    > div{\n        display: flex;\n        flex-direction: row;\n        gap: 1px;\n\n        div{\n            aspect-ratio: 1/1;\n            height: 20px;\n            background-color:var(--board-background-color);\n        }\n\n        .ship.attacked{\n            background-color: var(--attacked-and-hit-color);\n        }\n\n        .attacked{\n            background-color: var(--attacked-color);\n        }\n    }\n}\n\n.board.container.visible{\n    .ship{\n        background-color: var(--ship-color);\n    }\n}\n\n/* style ships off board during staging */\n.hidden.samples{\n    width:0px;\n    > div{\n        display: flex;\n        gap: 3px;\n        flex-direction: column;\n\n        > div{\n            background-color: var(--board-grid-color);\n            width: min-content;\n            display: flex;\n            flex-direction: row;\n            gap: 1px;\n        \n            div{\n                aspect-ratio: 1/1;\n                height: 20px;\n                background-color:var(--ship-color);\n            }\n        }\n    }\n\n    .vertical > div{\n        flex-direction: column;\n    }\n}\n\n.hidden.samples{\n    transform: translate(-999px, 0px);\n}\n\n/* style dialog */\n::backdrop{\n    background-color: var(--dialog-background-color);\n}\n\ndialog{\n    text-align: center;\n}"],"sourceRoot":""}]);
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
        if (isSinglePlayer){
            await emulateComputerTurn();
            _render_js__WEBPACK_IMPORTED_MODULE_1__.RenderManager.renderTurnCounter(turnCounter);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQSx5QkFBeUIsWUFBWTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TTVCO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLHVDQUF1QztBQUN2QywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsWUFBWSxhQUFhLGFBQWEsYUFBYSx1QkFBdUIsdUJBQXVCLHVCQUF1QixhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksYUFBYSxZQUFZLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksWUFBWSxLQUFLLFVBQVUsWUFBWSxZQUFZLEtBQUssYUFBYSxjQUFjLGNBQWMsTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxhQUFhLHlCQUF5QixXQUFXLGFBQWEsYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGNBQWMsTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsTUFBTSxVQUFVLFlBQVksWUFBWSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sVUFBVSxLQUFLLFVBQVUsVUFBVSxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxZQUFZLEtBQUssYUFBYSxZQUFZLGFBQWEsTUFBTSxLQUFLLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxnQ0FBZ0MsK0JBQStCLHNDQUFzQyxxQ0FBcUMsOEJBQThCLGlDQUFpQyxnREFBZ0Qsc0NBQXNDLGdEQUFnRCx1Q0FBdUMsb0RBQW9ELCtDQUErQyxHQUFHLHNCQUFzQixlQUFlLGdCQUFnQixHQUFHLFNBQVMsd0NBQXdDLG1CQUFtQiw2QkFBNkIsd0JBQXdCLG1CQUFtQixHQUFHLHVCQUF1Qix1QkFBdUIscUJBQXFCLDZCQUE2QiwwQkFBMEIsZ0JBQWdCLGVBQWUsOEJBQThCLHlCQUF5QixPQUFPLDBCQUEwQix3QkFBd0IseUNBQXlDLHNDQUFzQyxtQkFBbUIsMEJBQTBCLGlDQUFpQyw0QkFBNEIsV0FBVywwQkFBMEIsaUNBQWlDLDRCQUE0QixXQUFXLE9BQU8sYUFBYSwyQkFBMkIsd0JBQXdCLGlDQUFpQyxtQkFBbUIsNkJBQTZCLDJCQUEyQixrQ0FBa0MsdUJBQXVCLHNCQUFzQixxQ0FBcUMsa0VBQWtFLHNDQUFzQyxlQUFlLFdBQVcsbUJBQW1CLGlDQUFpQyxpQ0FBaUMsV0FBVyxPQUFPLEdBQUcsV0FBVyw2Q0FBNkMseUJBQXlCLDRDQUE0QyxtQkFBbUIseUJBQXlCLEdBQUcsaUJBQWlCLDRDQUE0QyxpQ0FBaUMsbUJBQW1CLEdBQUcsa0JBQWtCLDZDQUE2QywrQkFBK0IsR0FBRyxvQkFBb0IsdUJBQXVCLHFCQUFxQiwwQ0FBMEMscUNBQXFDLDBCQUEwQixtR0FBbUcseUJBQXlCLDREQUE0RCxtQ0FBbUMsOEJBQThCLE9BQU8sb0NBQW9DLDRCQUE0Qix1QkFBdUIsZ0NBQWdDLG9CQUFvQixrQ0FBa0MsOEJBQThCLDBCQUEwQixvQ0FBb0MsK0JBQStCLDJCQUEyQixvQ0FBb0MsV0FBVyw4QkFBOEIsaUNBQWlDLG1DQUFtQywyQkFBMkIscUNBQXFDLHVCQUF1QixXQUFXLG1CQUFtQiwyQkFBMkIsV0FBVyxPQUFPLDZDQUE2QyxtQ0FBbUMsNEJBQTRCLE9BQU8sNkNBQTZDLG1DQUFtQyw4QkFBOEIsT0FBTyxXQUFXLDZCQUE2QiwwQkFBMEIsT0FBTyx3QkFBd0IsbUNBQW1DLE9BQU8sR0FBRyxxQkFBcUIsb0JBQW9CLDZCQUE2QixlQUFlLHlCQUF5QixnREFBZ0QsY0FBYyx3QkFBd0IsOEJBQThCLG1CQUFtQixnQkFBZ0IsZ0NBQWdDLDJCQUEyQiw2REFBNkQsV0FBVywyQkFBMkIsOERBQThELFdBQVcsc0JBQXNCLHNEQUFzRCxXQUFXLE9BQU8sR0FBRyw2QkFBNkIsWUFBWSw4Q0FBOEMsT0FBTyxHQUFHLGdFQUFnRSxnQkFBZ0IsWUFBWSx3QkFBd0IsbUJBQW1CLGlDQUFpQyxrQkFBa0Isd0RBQXdELGlDQUFpQyw0QkFBNEIsa0NBQWtDLHVCQUF1Qiw0QkFBNEIsb0NBQW9DLCtCQUErQixxREFBcUQsZUFBZSxXQUFXLE9BQU8sd0JBQXdCLGlDQUFpQyxPQUFPLEdBQUcsb0JBQW9CLHdDQUF3QyxHQUFHLG1DQUFtQyx1REFBdUQsR0FBRyxXQUFXLHlCQUF5QixHQUFHLG1CQUFtQjtBQUNwOE47QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNyUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNmYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiK0I7QUFDc0M7O0FBRXJFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUk7QUFDdEQsbUJBQW1CLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJO0FBQ3ZELEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0ZBQVU7QUFDL0I7QUFDQTtBQUNBLDBCQUEwQiwwQ0FBSTtBQUM5QjtBQUNBO0FBQ0EsbURBQW1ELE9BQU87QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSwwREFBMEQsT0FBTztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQsRUFBRSxHQUFHLEVBQUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUk7QUFDdEQsbUJBQW1CLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixNQUFNO0FBQzVCLHNCQUFzQixNQUFNO0FBQzVCO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1Asc0JBQXNCLE1BQU07QUFDNUIsc0JBQXNCLE1BQU07QUFDNUI7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLG9CQUFvQixVQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsMEJBQTBCLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJO0FBQzlELGtCQUFrQixNQUFNO0FBQ3hCLG9CQUFvQixNQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBLE1BQU07QUFDTixvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELE9BQU87QUFDMUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHVCQUF1QjtBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL1htQjs7QUFFeEM7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixvREFBUztBQUNqQyxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixNQUFNO0FBQzVCLG1EQUFtRCxFQUFFO0FBQ3JEO0FBQ0EsMEJBQTBCLE1BQU07QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RkFBd0YsYUFBYTtBQUNyRztBQUNBLHlDQUF5QyxXQUFXO0FBQ3BEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGVBQWU7QUFDOUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsR0FBRyxrQkFBa0IsSUFBSTtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxXQUFXO0FBQzNDO0FBQ0EsMkNBQTJDLGFBQWE7QUFDeEQ7QUFDQSxnQ0FBZ0MsV0FBVztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxRQUFRO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFlBQVk7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixNQUFNO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsS0FBSyxnQkFBZ0IsSUFBSTtBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxLQUFLLGdCQUFnQixJQUFJO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTztBQUN4Qyx1QkFBdUIsVUFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGNBQWM7QUFDeEMsMEVBQTBFLFdBQVcsZ0JBQWdCLGNBQWM7QUFDbkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLFdBQVcsZ0JBQWdCLGNBQWM7QUFDaEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDBCQUEwQixjQUFjO0FBQ3hDLDBFQUEwRSxhQUFhLGdCQUFnQixZQUFZO0FBQ25IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxhQUFhLGdCQUFnQixZQUFZO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDelZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSx1RkFBTyxVQUFVLHVGQUFPLG1CQUFtQixFQUFDOzs7Ozs7O1VDeEI3RTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7QUFFdUQ7QUFDZDs7QUFFekM7O0FBRUE7QUFDQTtBQUNBLFFBQVEscURBQWE7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsV0FBVztBQUNsQyxRQUFRLHFEQUFhO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLEVBQUUsR0FBRyxFQUFFLGVBQWUsYUFBYTtBQUM5RSxRQUFRLHFEQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxREFBYTtBQUN6QixVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Ysc0NBQXNDO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLEdBQUcsZ0JBQWdCLElBQUk7QUFDaEcsUUFBUSxxREFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFEQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1EQUFXO0FBQ3ZDO0FBQ0E7QUFDQSwwQkFBMEIsc0RBQWM7QUFDeEM7QUFDQSxVQUFVO0FBQ1YsMEJBQTBCLG1EQUFXO0FBQ3JDO0FBQ0E7QUFDQSxRQUFRLHFEQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRLHFEQUFhO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHFEQUFhO0FBQ3JCO0FBQ0E7QUFDQSxRQUFRLHFEQUFhO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRCxHQUFHLGdCQUFnQixJQUFJO0FBQ2pGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEscURBQWE7QUFDckI7QUFDQTtBQUNBLDRCQUE0QiwrQkFBK0I7QUFDM0Q7QUFDQSxZQUFZLHFEQUFhO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFEQUFhLDZCQUE2QixzQkFBc0I7QUFDNUU7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxZQUFZLHFEQUFhLHlCQUF5QixxQkFBcUI7QUFDdkUsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFlBQVkscURBQWE7QUFDekI7QUFDQTs7QUFFQTtBQUNBLFFBQVEscURBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE1BQU07QUFDNUI7QUFDQTtBQUNBLDBCQUEwQixNQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0dBQWdHLFdBQVc7QUFDM0c7QUFDQSxVQUFVO0FBQ1YsOEZBQThGLFdBQVc7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLE1BQU07QUFDNUI7QUFDQTtBQUNBLDBCQUEwQixNQUFNO0FBQ2hDO0FBQ0EsaUNBQWlDLCtDQUErQztBQUNoRjtBQUNBO0FBQ0EsMERBQTBELEVBQUUsSUFBSSxFQUFFO0FBQ2xFLGtCQUFrQjtBQUNsQjtBQUNBLDhEQUE4RCxFQUFFLElBQUksRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBYTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQWE7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxxREFBYTtBQUNyQixRQUFRLHFEQUFhO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4uL2xpbmtlZC1saXN0cy9saW5rZWRsaXN0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMaW5rZWRMaXN0IHJlcHJlc2VudHMgZnVsbCBsaXN0XG5jb25zdCBMaW5rZWRMaXN0ID0gZnVuY3Rpb24gKCkge1xuICBsZXQgaGVhZE5vZGUgPSBudWxsO1xuICBjb25zdCBoZWFkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBoZWFkTm9kZTtcbiAgfTtcblxuICBjb25zdCB0YWlsID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgd2hpbGUgKG5vZGUubmV4dE5vZGUgIT0gbnVsbCkge1xuICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIGNvbnN0IGFwcGVuZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmIChoZWFkTm9kZSA9PSBudWxsKSB7XG4gICAgICBoZWFkTm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFpbCgpLm5leHROb2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwcmVwZW5kID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKGhlYWROb2RlID09IG51bGwpIHtcbiAgICAgIGhlYWROb2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkTm9kZSA9IG5ldyBOb2RlKHZhbHVlLCBoZWFkTm9kZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBpZiAoaGVhZE5vZGUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgICBsZXQgbm9kZSA9IGhlYWROb2RlO1xuICAgIHdoaWxlIChub2RlLm5leHROb2RlICE9IG51bGwpIHtcbiAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgICAgY291bnQrKztcbiAgICB9XG4gICAgcmV0dXJuIGNvdW50O1xuICB9O1xuXG4gIC8vIGNvdW50IGluZGV4IGZyb20gMVxuICBjb25zdCBhdCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIGlmIChpbmRleCA8PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IG5vZGUgPSBoZWFkTm9kZTtcbiAgICB3aGlsZSAoaW5kZXggPiAxKSB7XG4gICAgICBub2RlID0gbm9kZS5uZXh0Tm9kZTtcbiAgICAgIGluZGV4LS07XG4gICAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICBjb25zdCBwb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHNlY29uZFRvTGFzdEluZGV4ID0gc2l6ZSgpIC0gMTtcbiAgICBsZXQgc2Vjb25kVG9MYXN0Tm9kZSA9IGF0KHNlY29uZFRvTGFzdEluZGV4KTtcbiAgICBzZWNvbmRUb0xhc3ROb2RlLm5leHROb2RlID0gbnVsbDtcbiAgfTtcblxuICAvLyByZXR1cm5zIHRydWUgaWYgdmFsdWUgcGFzc2VkIGlzIGluIGxpc3QsIGVsc2UgcmV0dXJucyBmYWxzZVxuICBjb25zdCBjb250YWlucyA9IGZ1bmN0aW9uICh2YWx1ZSwgY29tcGFyZUtleSA9IFwidmFsdWVcIikge1xuICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUudmFsdWUgPT0gdmFsdWUgfHwgbm9kZS52YWx1ZVtjb21wYXJlS2V5XSA9PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLy8gcmV0dXJucyBpbmRleCBvZiBub2RlIGNvbnRhaW5pbmcgdmFsdWUsIG9yIG51bGwgaWYgbm90IGZvdW5kXG4gIGNvbnN0IGZpbmQgPSBmdW5jdGlvbiAodmFsdWUsIGNvbXBhcmVLZXkgPSBcInZhbHVlXCIpIHtcbiAgICBsZXQgbm9kZSA9IGhlYWROb2RlO1xuICAgIGxldCBpbmRleCA9IDE7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUudmFsdWUgPT0gdmFsdWUgfHwgbm9kZS52YWx1ZVtjb21wYXJlS2V5XSA9PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0Tm9kZTtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgLy8gcmV0dXJucyBub2RlIGNvbnRhaW5pbmcgdmFsdWUsIG9yIG51bGwgaWYgbm90IGZvdW5kXG4gIC8vIGJ1dCBjaGVja3MgZm9yIG5vZGUuY2FsbGJhY2tmdW5jdGlvbigpIGJlaW5nIGVxdWFsIHRvIHZhbHVlXG4gIGNvbnN0IGZpbmRDYWxsYmFjayA9IGZ1bmN0aW9uICh2YWx1ZSwgY2FsbGJhY2tGdW5jdGlvbikge1xuICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUudmFsdWVbY2FsbGJhY2tGdW5jdGlvbl0oKSA9PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTsgIFxuXG4gIC8vIHNhbWUgYXMgZmluZCwgYnV0IHJldHVybnMgdGhlIG5vZGUsIG5vdCBpbmRleFxuICBjb25zdCBmaW5kTm9kZSA9IGZ1bmN0aW9uICh2YWx1ZSwgY29tcGFyZUtleSA9IFwidmFsdWVcIikge1xuICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUudmFsdWUgPT0gdmFsdWUgfHwgbm9kZS52YWx1ZVtjb21wYXJlS2V5XSA9PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICAvLyByZXR1cm5zIHN0cmluZyBvZiBub2RlIHZhbHVlcyBpbiBmb3JtYXQgXCIodmFsdWUpIC0+ICh2YWx1ZSkgLT4gbnVsbFwiXG4gIGNvbnN0IHRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChoZWFkTm9kZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IHN0cmluZyA9IGAoICR7aGVhZE5vZGUudmFsdWV9IClgO1xuICAgIGxldCBub2RlID0gaGVhZE5vZGUubmV4dE5vZGU7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgc3RyaW5nICs9IGAgLT4gKCAke25vZGUudmFsdWV9IClgO1xuICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgfVxuICAgIHN0cmluZyArPSBcIiAtPiBudWxsXCI7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcblxuICAvLyBpbnNlcnRzIG5ldyBOb2RlIHdpdGggdmFsdWUgYXQgaW5kZXggKGNvdW50aW5nIGZyb20gMSlcbiAgY29uc3QgaW5zZXJ0QXQgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgY29uc3QgcHJpb3JJbmRleCA9IGluZGV4IC0gMTtcbiAgICBpZiAocHJpb3JJbmRleCA9PSAwKSB7XG4gICAgICBwcmVwZW5kKHZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHByaW9yTm9kZSA9IGF0KHByaW9ySW5kZXgpO1xuICAgIGlmIChwcmlvck5vZGUgPT0gbnVsbCkge1xuICAgICAgZXJyb3IubG9nKGAke2luZGV4fSBpcyBub3QgdmFsaWQgaW5kZXguYCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5leHROb2RlID0gcHJpb3JOb2RlLm5leHROb2RlO1xuICAgICAgcHJpb3JOb2RlLm5leHROb2RlID0gbmV3IE5vZGUodmFsdWUsIG5leHROb2RlKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gcmVtb3ZlcyBub2RlIGF0IGluZGV4IChjb3VudGluZyBmcm9tIDEpXG4gIGNvbnN0IHJlbW92ZUF0ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgY29uc3QgcHJpb3JJbmRleCA9IGluZGV4IC0gMTtcbiAgICBpZiAocHJpb3JJbmRleCA9PSAwKSB7XG4gICAgICBsZXQgbm9kZVRvUmVtb3ZlID0gaGVhZE5vZGU7XG4gICAgICBoZWFkTm9kZSA9IGhlYWROb2RlLm5leHROb2RlO1xuICAgICAgbm9kZVRvUmVtb3ZlID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHByaW9yTm9kZSA9IGF0KHByaW9ySW5kZXgpO1xuICAgIGxldCBub2RlVG9SZW1vdmUgPSBwcmlvck5vZGUubmV4dE5vZGU7XG4gICAgY29uc3QgbmV4dE5vZGUgPSBwcmlvck5vZGUubmV4dE5vZGUubmV4dE5vZGU7XG4gICAgcHJpb3JOb2RlLm5leHROb2RlID0gbmV4dE5vZGU7XG4gICAgbm9kZVRvUmVtb3ZlID0gbnVsbDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGhlYWQsXG4gICAgdGFpbCxcbiAgICBhcHBlbmQsXG4gICAgcHJlcGVuZCxcbiAgICBzaXplLFxuICAgIGF0LFxuICAgIHBvcCxcbiAgICBjb250YWlucyxcbiAgICBmaW5kLFxuICAgIHRvU3RyaW5nLFxuICAgIGluc2VydEF0LFxuICAgIHJlbW92ZUF0LFxuICAgIGZpbmROb2RlLFxuICAgIGZpbmRDYWxsYmFjayxcbiAgfTtcbn07XG5cbi8vIE5vZGUgY29udGFpbnMgdmFsdWUgcHJvcGVydHksIG5leHROb2RlXG5cbmNvbnN0IE5vZGUgPSBmdW5jdGlvbiAodmFsdWUgPSBudWxsLCBuZXh0Tm9kZSA9IG51bGwpIHtcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZSxcbiAgICBuZXh0Tm9kZSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IExpbmtlZExpc3QsIE5vZGUgfTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcbiAgICAtLWNvbnRlbnQtY29sb3I6ICNENkZGRjY7XG4gICAgLS1idXR0b24tY2xpY2tlZC1jb2xvcjogI2MzZWNjMztcbiAgICAtLWJnLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI0MCk7XG4gICAgLS1hY2NlbnQtY29sb3I6ICM0RENDQkQ7XG4gICAgLS1hdHRhY2tlZC1jb2xvcjogI2ZmYzJjMjsgLypyZWQqL1xuICAgIC0tYXR0YWNrZWQtYW5kLWhpdC1jb2xvcjogI2JmZmRjMjsgLypncmVlbiovXG4gICAgLS1zaGlwLWNvbG9yOiAjYjNjN2ZmOyAvKmJsdWUqL1xuICAgIC0tYm9hcmQtYmFja2dyb3VuZC1jb2xvcjogIzUyNTI1MjtcbiAgICAtLWJvYXJkLWdyaWQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICAtLWRpYWxvZy1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxOTgsIDI1NSk7XG4gICAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuaDEsaDIsaDMscCxidXR0b257XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xufVxuXG5ib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczpzdGFydDtcbiAgICBoZWlnaHQ6IDgwdmg7XG59XG5cbi5wcmVnYW1lLmNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAzMHZoO1xuXG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG5cbiAgICAudGl0bGV7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogNTAwO1xuICAgIH1cblxuICAgIC5idXR0b24uY29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDtcbiAgICAgICAgZ2FwOiA1cHg7XG5cbiAgICAgICAgYnV0dG9uLnNpbmdsZXtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICAgICAgICAgIGdyaWQtcm93OiAxLzI7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24uZG91Ymxle1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvcm17XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogM3B4O1xuXG4gICAgICAgIC5pbnB1dC5jb250YWluZXJ7XG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgZ2FwOiAzcHg7XG5cbiAgICAgICAgICAgIGlucHV0e1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib2FyZC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1jb2xvcik7XG4gICAgcGFkZGluZzogMTJweCAyOHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5idXR0b246YWN0aXZle1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbnRlbnQtY29sb3IpO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFtcztcbn1cblxuLmdhbWUuY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDE1dmg7XG5cbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDsgLyogTmVlZCB0byBkbyB0aGlzIHRvIGtlZXAgYm9hcmQgc3ltbWV0cmljIGJ1dCBzdGlsbCBleHBhbmRlZCBmb3IgbG9uZyBuYW1lcyovXG4gICAgZ2FwOiAxMnB4IDM2cHg7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuXG4gICAgLyogZ3JpZCBhcmVhIGlzIHIgLyBjIC8gciAvIGMgKi9cbiAgICAudWkuY29udGFpbmVye1xuICAgICAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XG4gICAgICAgIGp1c3RpZnktc2VsZjpjZW50ZXI7XG4gICAgfVxuXG4gICAgLmJvYXJkLWFuZC1oZWFkZXIuY29udGFpbmVye1xuICAgICAgICB3aWR0aDpmaXQtY29udGVudDtcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgICAgIGdhcDogMTJweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgLmJvYXJkLmhlYWRlcntcbiAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uLmNvbnRhaW5lcntcbiAgICAgICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGdhcDogM3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDE2M3B4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJvYXJkLWFuZC1oZWFkZXIuY29udGFpbmVyLnBsYXllci0xe1xuICAgICAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XG4gICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgIH1cblxuICAgIC5ib2FyZC1hbmQtaGVhZGVyLmNvbnRhaW5lci5wbGF5ZXItMntcbiAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICAgIH1cblxuICAgIGgye1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRleHQtd3JhcDogd3JhcDtcbiAgICB9XG5cbiAgICAuaGlkZGVuLnNhbXBsZXN7XG4gICAgICAgIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMztcbiAgICB9XG59XG5cbi5ib2FyZC5jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXB4O1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1ncmlkLWNvbG9yKTtcblxuICAgID4gZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBnYXA6IDFweDtcblxuICAgICAgICBkaXZ7XG4gICAgICAgICAgICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tYm9hcmQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuc2hpcC5hdHRhY2tlZHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWF0dGFja2VkLWFuZC1oaXQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF0dGFja2Vke1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXR0YWNrZWQtY29sb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYm9hcmQuY29udGFpbmVyLnZpc2libGV7XG4gICAgLnNoaXB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xuICAgIH1cbn1cblxuLyogc3R5bGUgc2hpcHMgb2ZmIGJvYXJkIGR1cmluZyBzdGFnaW5nICovXG4uaGlkZGVuLnNhbXBsZXN7XG4gICAgd2lkdGg6MHB4O1xuICAgID4gZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDNweDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICA+IGRpdntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWdyaWQtY29sb3IpO1xuICAgICAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBnYXA6IDFweDtcbiAgICAgICAgXG4gICAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICAgICAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tc2hpcC1jb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudmVydGljYWwgPiBkaXZ7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxufVxuXG4uaGlkZGVuLnNhbXBsZXN7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTk5OXB4LCAwcHgpO1xufVxuXG4vKiBzdHlsZSBkaWFsb2cgKi9cbjo6YmFja2Ryb3B7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlhbG9nLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG5kaWFsb2d7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIseUJBQXlCLEVBQUUsTUFBTTtJQUNqQyxpQ0FBaUMsRUFBRSxRQUFRO0lBQzND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REFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tY29udGVudC1jb2xvcjogI0Q2RkZGNjtcXG4gICAgLS1idXR0b24tY2xpY2tlZC1jb2xvcjogI2MzZWNjMztcXG4gICAgLS1iZy1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNDApO1xcbiAgICAtLWFjY2VudC1jb2xvcjogIzREQ0NCRDtcXG4gICAgLS1hdHRhY2tlZC1jb2xvcjogI2ZmYzJjMjsgLypyZWQqL1xcbiAgICAtLWF0dGFja2VkLWFuZC1oaXQtY29sb3I6ICNiZmZkYzI7IC8qZ3JlZW4qL1xcbiAgICAtLXNoaXAtY29sb3I6ICNiM2M3ZmY7IC8qYmx1ZSovXFxuICAgIC0tYm9hcmQtYmFja2dyb3VuZC1jb2xvcjogIzUyNTI1MjtcXG4gICAgLS1ib2FyZC1ncmlkLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIC0tZGlhbG9nLWJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE5OCwgMjU1KTtcXG4gICAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaDEsaDIsaDMscCxidXR0b257XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOjA7XFxufVxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczpzdGFydDtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbn1cXG5cXG4ucHJlZ2FtZS5jb250YWluZXJ7XFxuICAgIG1hcmdpbi10b3A6IDMwdmg7XFxuXFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcblxcbiAgICAudGl0bGV7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICAgICAgZm9udC1zaXplOiA1MDA7XFxuICAgIH1cXG5cXG4gICAgLmJ1dHRvbi5jb250YWluZXJ7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgICAgICAgZ2FwOiA1cHg7XFxuXFxuICAgICAgICBidXR0b24uc2luZ2xle1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgICAgICAgICBncmlkLXJvdzogMS8yO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgYnV0dG9uLmRvdWJsZXtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBmb3Jte1xcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAzcHg7XFxuXFxuICAgICAgICAuaW5wdXQuY29udGFpbmVye1xcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgICAgIGdhcDogM3B4O1xcblxcbiAgICAgICAgICAgIGlucHV0e1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvYXJkLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbmJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDEycHggMjhweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZXtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29udGVudC1jb2xvcik7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFtcztcXG59XFxuXFxuLmdhbWUuY29udGFpbmVye1xcbiAgICBtYXJnaW4tdG9wOiAxNXZoO1xcblxcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDsgLyogTmVlZCB0byBkbyB0aGlzIHRvIGtlZXAgYm9hcmQgc3ltbWV0cmljIGJ1dCBzdGlsbCBleHBhbmRlZCBmb3IgbG9uZyBuYW1lcyovXFxuICAgIGdhcDogMTJweCAzNnB4O1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuXFxuICAgIC8qIGdyaWQgYXJlYSBpcyByIC8gYyAvIHIgLyBjICovXFxuICAgIC51aS5jb250YWluZXJ7XFxuICAgICAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6Y2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5ib2FyZC1hbmQtaGVhZGVyLmNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOmZpdC1jb250ZW50O1xcbiAgICAgICAgZGlzcGxheTpmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICAgICAgZ2FwOiAxMnB4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgICAgLmJvYXJkLmhlYWRlcntcXG4gICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmJ1dHRvbi5jb250YWluZXJ7XFxuICAgICAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGdhcDogM3B4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgICAgIHdpZHRoOiAxNjNweDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuYm9hcmQtYW5kLWhlYWRlci5jb250YWluZXIucGxheWVyLTF7XFxuICAgICAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgfVxcblxcbiAgICAuYm9hcmQtYW5kLWhlYWRlci5jb250YWluZXIucGxheWVyLTJ7XFxuICAgICAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICB9XFxuXFxuICAgIGgye1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgdGV4dC13cmFwOiB3cmFwO1xcbiAgICB9XFxuXFxuICAgIC5oaWRkZW4uc2FtcGxlc3tcXG4gICAgICAgIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMztcXG4gICAgfVxcbn1cXG5cXG4uYm9hcmQuY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFweDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1ncmlkLWNvbG9yKTtcXG5cXG4gICAgPiBkaXZ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGdhcDogMXB4O1xcblxcbiAgICAgICAgZGl2e1xcbiAgICAgICAgICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJvYXJkLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnNoaXAuYXR0YWNrZWR7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXR0YWNrZWQtYW5kLWhpdC1jb2xvcik7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuYXR0YWNrZWR7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXR0YWNrZWQtY29sb3IpO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5ib2FyZC5jb250YWluZXIudmlzaWJsZXtcXG4gICAgLnNoaXB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG9yKTtcXG4gICAgfVxcbn1cXG5cXG4vKiBzdHlsZSBzaGlwcyBvZmYgYm9hcmQgZHVyaW5nIHN0YWdpbmcgKi9cXG4uaGlkZGVuLnNhbXBsZXN7XFxuICAgIHdpZHRoOjBweDtcXG4gICAgPiBkaXZ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiAzcHg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICAgICAgPiBkaXZ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtZ3JpZC1jb2xvcik7XFxuICAgICAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgICBnYXA6IDFweDtcXG4gICAgICAgIFxcbiAgICAgICAgICAgIGRpdntcXG4gICAgICAgICAgICAgICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1zaGlwLWNvbG9yKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnZlcnRpY2FsID4gZGl2e1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbn1cXG5cXG4uaGlkZGVuLnNhbXBsZXN7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05OTlweCwgMHB4KTtcXG59XFxuXFxuLyogc3R5bGUgZGlhbG9nICovXFxuOjpiYWNrZHJvcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlhbG9nLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG5kaWFsb2d7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7U2hpcH0gZnJvbSBcIi4vc2hpcC5qc1wiO1xuaW1wb3J0IHtMaW5rZWRMaXN0fSBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2xpbmtlZC1saXN0cy9saW5rZWRsaXN0LmpzXCJcblxuY29uc3QgR2FtZWJvYXJkID0gZnVuY3Rpb24gKCkge1xuICBsZXQgYm9hcmRNYXA7XG4gIGxldCBhdHRhY2tNYXA7XG4gIC8vIG1ha2UgZWFjaCBtYXAgYW4gYXJyYXkgb2YgMTAgd2l0aCBlYWNoIGFycmF5IGJlaW5nIGFuIG9iamVjdCAoc2ltaWxhciB0byBoYXNoIG1hcClcbiAgY29uc3QgaW5pdEJvYXJkID0gZnVuY3Rpb24gKCkge1xuICAgIGJvYXJkTWFwID0gW3t9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9XTtcbiAgICBhdHRhY2tNYXAgPSBbe30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge31dO1xuICB9KCk7XG5cbiAgY29uc3QgZ2V0Qm9hcmRNYXAgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBib2FyZE1hcDtcbiAgfVxuXG4gIGNvbnN0IGdldEF0dGFja01hcCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGF0dGFja01hcDtcbiAgfVxuXG4gIC8vIGJhc2VkIG9uIHRoZSB3YXkgd2UgaW1wbGVtZW50ZWQsXG4gIC8vIHRoZSBmaXJzdCBpbmRleCBmb3IgYXJyYXkgaXMgdGhlIHItdmFsdWUgb3IgdGhlIGNvbHVtbiBpbiBhIG1hdHJpeC9ncmlkXG4gIC8vIHRoZSBzZWNvbmQgaW5kZXggZm9yIG9iamVjdCBrZXkgaXMgdGhlIGMtdmFsdWUgb3IgdGhlIHJvdyBpbiBhIG1hdHJpeC9ncmlkIChpbmNyZWFzZXMgZ29pbmcgZG93bilcbiAgbGV0IHNoaXBMaXN0ID0gbmV3IExpbmtlZExpc3QoKTtcbiAgLy8gdXNlIHJlc3QgcGFyYW1ldGVyICguLi4pIHRvIGFjY2VwdCB2YXJpYWJsZSBhbW91bnQgb2YgY29vcmRzXG4gIGNvbnN0IG5ld1NoaXAgPSBmdW5jdGlvbiAoLi4uY29vcmRzKSB7XG4gICAgICBjb25zdCBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmRzLmxlbmd0aCk7XG4gICAgICBpZiAoaXNTaGlwQXRDb29yZHMoLi4uY29vcmRzKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGJvYXJkTWFwKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEb24ndCBvdmVybGFwIHNoaXBzIGF0OiAke2Nvb3Jkc31gKTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IFtyLGNdIG9mIGNvb3Jkcyl7XG4gICAgICAgIGlmIChjIDwgMTAgJiYgYyA+PTApe1xuICAgICAgICAgIGJvYXJkTWFwW3JdW2NdID0gbmV3U2hpcDtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgIGNvbnNvbGUubG9nKGNvb3Jkcyk7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCYWQgY29sIGlucHV0IGZvciBuZXdTaGlwKCk6ICR7Y29vcmRzfWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBhZGRpbmcgbmV3IHNoaXAgdG8gc2hpcCBsaW5rZWQgbGlzdFxuICAgICAgc2hpcExpc3QuYXBwZW5kKG5ld1NoaXApO1xuICB9O1xuXG4gIGNvbnN0IGlzU2hpcEF0Q29vcmRzID0gZnVuY3Rpb24oLi4uY29vcmRzKXtcbiAgICBmb3IgKGxldCBbcixjXSBvZiBjb29yZHMpe1xuICAgICAgaWYgKGJvYXJkTWFwW3JdICE9PSB1bmRlZmluZWQgJiYgYm9hcmRNYXBbcl1bY10gIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBnZXRTaGlwRnJvbUNvb3JkcyA9IGZ1bmN0aW9uKFtyLGNdKXtcbiAgICByZXR1cm4gYm9hcmRNYXBbcl1bY107XG4gIH1cblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gZnVuY3Rpb24oW3IsY10pe1xuICAgIGlmICh3YXNBdHRhY2tlZChbcixjXSkpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgYXR0YWNrIHByZXZpb3VzIGF0dGFja2VkICgke3J9LCR7Y30pYCk7XG4gICAgfVxuICAgIGNvbnN0IHNoaXAgPSBib2FyZE1hcFtyXVtjXTtcbiAgICBpZiAodHlwZW9mKHNoaXApID09IFwib2JqZWN0XCIpe1xuICAgICAgc2hpcC5oaXQoKTtcbiAgICAgIGF0dGFja01hcFtyXVtjXT1cImhpdFwiO1xuICAgICAgcmV0dXJuIFwiaGl0XCI7XG4gICAgfSBlbHNle1xuICAgICAgYXR0YWNrTWFwW3JdW2NdID0gXCJtaXNzXCI7XG4gICAgICByZXR1cm4gXCJtaXNzXCI7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgd2FzQXR0YWNrZWQgPSBmdW5jdGlvbihbcixjXSl7XG4gICAgcmV0dXJuIGF0dGFja01hcFtyXVtjXSB8fCBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGlzQWxsU3VuayA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIChzaGlwTGlzdC5maW5kQ2FsbGJhY2soZmFsc2UsIFwiaXNTdW5rXCIpID09IG51bGwpO1xuICB9XG5cbiAgY29uc3QgcmVzZXRCb2FyZCA9IGZ1bmN0aW9uKCl7XG4gICAgYm9hcmRNYXAgPSBbe30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge31dO1xuICAgIGF0dGFja01hcCA9IFt7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fV07XG4gICAgYXR0YWNrQ291bnQgPSAwO1xuICB9XG5cbiAgLy8gVVNFUyBhbGxvd2VkIHBvc2l0aW9uIG1hcCBjcmVhdGVkIHdpdGggc3BlY2lmaWMgaW5mbyBhYm91dCBzaGlwIG9yaWVudGF0aW9uIGFuZCBsZW5ndGhcbiAgY29uc3QgaXNUaGlzQWxsb3dlZFBsYWNlbWVudCA9IGZ1bmN0aW9uKFtyLGNdKXtcbiAgICByZXR1cm4gYWxsb3dlZFBvc2l0aW9uTWFwW3JdW2NdO1xuICB9XG5cbiAgbGV0IGFsbG93ZWRQb3NpdGlvbk1hcDtcbiAgLy8gdXNlcyBhZGphY2VuY3kgbWFwIGFuZCBzaGlwIGxlbmd0aCB0byBzaG93IGFsbCBwb3NpYmxlIHRvcGxlZnQgcG9zaXRpb25zIGZvciB0aGUgc2hpcFxuICAvLyByZWNhbGwgdGhhdCBncmFiTG9jYXRpb24gc3RhcnRzIGF0IDBcbiAgLy8gcmV0dXJucyBudW1iZXIgb2YgdHJ1ZXMgKGFsbG93ZWQgc3BvdHMpXG4gIGNvbnN0IGNyZWF0ZUFsbG93ZWRQb3NpdGlvbk1hcCA9IGZ1bmN0aW9uKHNoaXBPYmplY3QsIGlzSG9yaXpvbnRhbCwgZ3JhYkxvY2F0aW9uKXtcbiAgICBjb25zdCBhZGphY2VuY3lNYXAgPSBjcmVhdGVBZGphY2VuY3lNYXAoKTtcbiAgICBhbGxvd2VkUG9zaXRpb25NYXAgPSBbe30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge31dO1xuICAgIGNvbnN0IGxlbmd0aCA9IHNoaXBPYmplY3QubGVuZ3RoO1xuICAgIGxldCB0cnVlQ291bnQgPTA7XG4gICAgaWYgKGlzSG9yaXpvbnRhbCA9PSBcInRydWVcIil7XG4gICAgICBmb3IgKGxldCByID0gMDsgcjwxMDsgcisrKXtcbiAgICAgICAgZm9yIChsZXQgYz0wOyBjPDEwOyBjKyspe1xuICAgICAgICAgIGlmIChjPiAoMTAtbGVuZ3RoK2dyYWJMb2NhdGlvbikgfHwgYzxncmFiTG9jYXRpb24pe1xuICAgICAgICAgICAgYWxsb3dlZFBvc2l0aW9uTWFwW3JdW2NdID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsbG93ZWRQb3NpdGlvbk1hcFtyXVtjXSA9IGlzU2hpcEZpdEFkamFjZW5jeShbcixjLWdyYWJMb2NhdGlvbl0sIHNoaXBPYmplY3QsIGlzSG9yaXpvbnRhbCwgYWRqYWNlbmN5TWFwKTtcbiAgICAgICAgICAgIGlmIChhbGxvd2VkUG9zaXRpb25NYXBbcl1bY10gPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgIHRydWVDb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgfSBlbHNle1xuICAgICAgZm9yIChsZXQgciA9IDA7IHI8MTA7IHIrKyl7XG4gICAgICAgIGZvciAobGV0IGM9MDsgYzwxMDsgYysrKXtcbiAgICAgICAgICBpZiAociA+ICgxMC1sZW5ndGgrZ3JhYkxvY2F0aW9uKSB8fCByPGdyYWJMb2NhdGlvbil7XG4gICAgICAgICAgICAgIGFsbG93ZWRQb3NpdGlvbk1hcFtyXVtjXSA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGxvd2VkUG9zaXRpb25NYXBbcl1bY10gPSBpc1NoaXBGaXRBZGphY2VuY3koW3ItZ3JhYkxvY2F0aW9uLGNdLHNoaXBPYmplY3QsIGlzSG9yaXpvbnRhbCwgYWRqYWNlbmN5TWFwKTtcbiAgICAgICAgICAgIGlmIChhbGxvd2VkUG9zaXRpb25NYXBbcl1bY10gPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgIHRydWVDb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcImFsbG93ZWQgcG9zaXRpb24gbWFwIGNyZWF0ZWRcIilcbiAgICBjb25zb2xlLmxvZyhhbGxvd2VkUG9zaXRpb25NYXApO1xuICAgIHJldHVybiB0cnVlQ291bnQ7XG4gIH07XG5cbiAgLy8gW3IsY10gaXMgdG9wbGVmdCBzcXVhcmUgb2Ygc2hpcFxuICBjb25zdCBpc1NoaXBGaXRBZGphY2VuY3kgPSBmdW5jdGlvbihbcixjXSxzaGlwT2JqZWN0LCBpc0hvcml6b250YWwsIG1hcCl7XG4gICAgY29uc3QgbGVuZ3RoID0gc2hpcE9iamVjdC5sZW5ndGg7XG4gICAgaWYgKGlzSG9yaXpvbnRhbCAhPT0gXCJ0cnVlXCIpe1xuICAgICAgZm9yIChsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXBbcitpXSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgbWFwW3IraV1bY10gIT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICAgIGZvciAobGV0IHNoaXAgb2YgbWFwW3IraV1bY10pe1xuICAgICAgICAgICAgaWYgKHNoaXAgIT0gc2hpcE9iamVjdCl7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXBbcl0gIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIG1hcFtyXVtjK2ldICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgICAgICBmb3IgKGxldCBzaGlwIG9mIG1hcFtyXVtjK2ldKXtcbiAgICAgICAgICAgIGlmIChzaGlwICE9IHNoaXBPYmplY3Qpe1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cblxuICBjb25zdCBjcmVhdGVBZGphY2VuY3lNYXAgPSBmdW5jdGlvbigpe1xuICAgIGxldCBhZGphY2VuY3lNYXAgPSBbe30sIHt9LCB7fSwge30sIHt9LCB7fSwge30sIHt9LCB7fSwge31dO1xuICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKXtcbiAgICAgIGZvciAobGV0IGo9MDsgajwxMDsgaisrKXtcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZE1hcFtpXVtqXSAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICAgICAgY29uc3Qgc2hpcCA9IGJvYXJkTWFwW2ldW2pdO1xuICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaSxqKTtcbiAgICAgICAgICBpZiAoaj4wKXtcbiAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaSxqLTEpO1xuICAgICAgICAgICAgaWYgKGk+MCl7XG4gICAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaS0xLGotMSk7XG4gICAgICAgICAgICB9IGlmIChpPDkpe1xuICAgICAgICAgICAgICBhZGRUb0FkamFjZW5jeU1hcChhZGphY2VuY3lNYXAsIHNoaXAsIGkrMSxqLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoajw5KXtcbiAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaSxqKzEpO1xuICAgICAgICAgICAgaWYgKGk+MCl7XG4gICAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaS0xLGorMSk7XG4gICAgICAgICAgICB9IGlmIChpPDkpe1xuICAgICAgICAgICAgICBhZGRUb0FkamFjZW5jeU1hcChhZGphY2VuY3lNYXAsIHNoaXAsIGkrMSxqKzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaT4wKXtcbiAgICAgICAgICAgIGFkZFRvQWRqYWNlbmN5TWFwKGFkamFjZW5jeU1hcCwgc2hpcCwgaS0xLGopO1xuICAgICAgICAgIH0gaWYgKGk8OSl7XG4gICAgICAgICAgICBhZGRUb0FkamFjZW5jeU1hcChhZGphY2VuY3lNYXAsIHNoaXAsIGkrMSxqKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coYWRqYWNlbmN5TWFwKTtcbiAgICByZXR1cm4gYWRqYWNlbmN5TWFwO1xuICB9XG5cbiAgY29uc3QgYWRkVG9BZGphY2VuY3lNYXAgPSBmdW5jdGlvbihtYXAsIHNoaXAsIGksIGope1xuICAgIGNvbnN0IGxvY2F0aW9uID0gbWFwW2ldW2pdO1xuICAgIGlmICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYXRpb25bMF0gIT0gc2hpcCl7XG4gICAgICBtYXBbaV1bal0ucHVzaChzaGlwKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIG1hcFtpXVtqXSA9IFtzaGlwXTtcbiAgICB9XG4gIH1cblxuICAvLyByZW1lbWJlciB0aGF0IG1hcCBpcyBzb3J0ZWQgYnkgciwgdGhlbiBjLlxuICBjb25zdCBtb3ZlU2hpcCA9IGZ1bmN0aW9uKHNoaXAsW3N0YXJ0UixzdGFydENdLGxlbmd0aCwgaXNIb3Jpem9udGFsKXtcbiAgICBmb3IgKGxldCByb3c9MDsgcm93PDEwOyByb3crKyl7XG4gICAgICBjb25zdCBtYXBSb3cgPSBib2FyZE1hcFtyb3ddO1xuICAgICAgZm9yIChsZXQgY29sIG9mIE9iamVjdC5rZXlzKG1hcFJvdykpe1xuICAgICAgICBpZiAobWFwUm93W2NvbF0gPT0gc2hpcCl7XG4gICAgICAgICAgZGVsZXRlIGJvYXJkTWFwW3Jvd11bY29sXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhib2FyZE1hcCk7XG4gICAgY29uc3QgY29vcmRzID0gW107XG4gICAgaWYgKGlzSG9yaXpvbnRhbCA9PSBcInRydWVcIil7XG4gICAgICBmb3IgKGxldCBpPTA7IGk8bGVuZ3RoOyBpKyspe1xuICAgICAgICBjb29yZHMucHVzaChbc3RhcnRSLHN0YXJ0QytpXSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29vcmRzLnB1c2goW3N0YXJ0UitpLHN0YXJ0Q10pXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKC4uLmNvb3JkcywgbGVuZ3RoKTtcbiAgICBuZXdTaGlwKC4uLmNvb3Jkcyk7XG4gIH1cblxuICAvLyBuZWVkIHRvIHJhbmRvbWl6ZSA1IHNoaXBzIG9mIGxlbmd0aCAyLDMsMyw0LDVcbiAgY29uc3QgcmFuZG9taXplQm9hcmQgPSBmdW5jdGlvbigpe1xuICAgIHRyeXtcbiAgICAgIHJlc2V0Qm9hcmQoKTtcbiAgICAgIGNvbnN0IGNvb3JkczEgPSBnZXRSYW5kb21Db29yZHMoMik7XG4gICAgICBuZXdTaGlwKC4uLmNvb3JkczEpO1xuICAgICAgY29uc3QgY29vcmRzMiA9IGdldFJhbmRvbUNvb3JkcygzKTtcbiAgICAgIG5ld1NoaXAoLi4uY29vcmRzMik7XG4gICAgICBjb25zdCBjb29yZHMzID0gZ2V0UmFuZG9tQ29vcmRzKDMpO1xuICAgICAgbmV3U2hpcCguLi5jb29yZHMzKTtcbiAgICAgIGNvbnN0IGNvb3JkczQgPSBnZXRSYW5kb21Db29yZHMoNCk7XG4gICAgICBuZXdTaGlwKC4uLmNvb3JkczQpO1xuICAgICAgY29uc3QgY29vcmRzNSA9IGdldFJhbmRvbUNvb3Jkcyg1KTtcbiAgICAgIG5ld1NoaXAoLi4uY29vcmRzNSk7XG4gICAgICAvL2NvbnNvbGUubG9nKGJvYXJkTWFwKTtcbiAgICAgIHJldHVybiB7Y29vcmRzMSxjb29yZHMyLGNvb3JkczMsY29vcmRzNCxjb29yZHM1fTtcbiAgICB9IGNhdGNoe1xuICAgICAgcmV0dXJuIHJhbmRvbWl6ZUJvYXJkKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2V0UmFuZG9tQ29vcmRzID0gZnVuY3Rpb24obGVuZ3RoKXtcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSByYW5kb21pemVJc0hvcml6b250YWwoKTtcbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcbiAgICBsZXQgdHJ1ZUNvdW50ID0gY3JlYXRlQWxsb3dlZFBvc2l0aW9uTWFwKHNoaXAsIGlzSG9yaXpvbnRhbCwgMCk7XG4gICAgLy8gY2F0Y2ggd2hlbiB0aGVyZSBpcyBubyBhbGxvd2VkIHBvc2l0aW9uc1xuICAgIGlmICh0cnVlQ291bnQgPT0gMCl7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFwiTXVzdCByZXJhbmRvbWl6ZSBkdWUgdG8gdW5sdWNreSBzZXR1cFwiKTtcbiAgICB9XG4gICAgLy8gcm5nQ291bnQgcmFuZ2VzIGZyb20gMCB0byB0cnVlQ291bnQtMTtcbiAgICBsZXQgcm5nQ291bnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqdHJ1ZUNvdW50KTtcbiAgICAvL2NvbnNvbGUubG9nKHJuZ0NvdW50LCB0cnVlQ291bnQpO1xuICAgIGxldCByPS0xO1xuICAgIGxldCBjPTk7XG4gICAgd2hpbGUgKHJuZ0NvdW50Pj0wKXtcbiAgICAgIGlmIChjPT05KXtcbiAgICAgICAgcisrO1xuICAgICAgICBjPTA7XG4gICAgICB9IGVsc2V7XG4gICAgICAgIGMrKztcbiAgICAgIH1cbiAgICAgIGlmIChpc1RoaXNBbGxvd2VkUGxhY2VtZW50KFtyLGNdKSA9PSB0cnVlKXtcbiAgICAgICAgcm5nQ291bnQtLTtcbiAgICAgIH1cbiAgICAgIC8vY29uc29sZS5sb2cociwgYywgcm5nQ291bnQpO1xuICAgIH1cbiAgICBsZXQgY29vcmRzID0gW107XG4gICAgaWYgKGlzSG9yaXpvbnRhbCA9PSBcInRydWVcIil7XG4gICAgICBmb3IgKDtsZW5ndGg+MDsgbGVuZ3RoLS0pe1xuICAgICAgICBjb29yZHMucHVzaChbcixjXSk7XG4gICAgICAgIGMrKztcbiAgICAgIH1cbiAgICB9IGVsc2V7XG4gICAgICBmb3IgKDtsZW5ndGg+MDsgbGVuZ3RoLS0pe1xuICAgICAgICBjb29yZHMucHVzaChbcixjXSk7XG4gICAgICAgIHIrKztcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coYEdlbmVyYXRlZCBhbGxvd2VkIHJhbmRvbSBjb29yZHMgJHtjb29yZHN9YCk7XG4gICAgcmV0dXJuIChjb29yZHMpO1xuICB9XG5cbiAgY29uc3QgcmFuZG9taXplSXNIb3Jpem9udGFsID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBybmcgPSBNYXRoLnJhbmRvbSgpKjI7XG4gICAgaWYgKHJuZyA8IDEpe1xuICAgICAgcmV0dXJuIFwidHJ1ZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJmYWxzZVwiO1xuICAgIH1cbiAgfVxuXG4gIC8vIHN0YXJ0IG9mIGNvZGUgZm9yIGd1ZXNzaW5nIGVkdWNhdGVkIGF0dGFjayBmb3IgY29tcHV0ZXIgcGxheWVyIC8vXG4gIGxldCBwcmV2aW91c0F0dGFjayA9IHt9O1xuICBjb25zdCBtYWtlUmFuZG9tQXR0YWNrID0gZnVuY3Rpb24ob3RoZXJQbGF5ZXIpe1xuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKiAoOTktYXR0YWNrQ291bnQpKTtcbiAgICBwcmV2aW91c0F0dGFjay5jb29yZHMgPSBnZXROdGhPcGVuQXR0YWNrTWFwKG90aGVyUGxheWVyLCByYW5kb21JbmRleCk7XG4gICAgLy9jb25zb2xlLmxvZyhwcmV2aW91c0F0dGFjay5jb29yZHMpO1xuICAgIHByZXZpb3VzQXR0YWNrLmhpdCA9IG90aGVyUGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHByZXZpb3VzQXR0YWNrLmNvb3Jkcyk7XG4gIH1cblxuICBsZXQgYXR0YWNrQ291bnQgPSAwO1xuICBjb25zdCBtYWtlRWR1Y2F0ZWRBdHRhY2sgPSBmdW5jdGlvbihvdGhlclBsYXllcil7XG4gICAgaWYgKHR5cGVvZiBwcmV2aW91c0F0dGFjay5wcmV2U3VjY2Vzc0Nvb3JkcyAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICBjb25zdCBbcixjXT0gcHJldmlvdXNBdHRhY2sucHJldlN1Y2Nlc3NDb29yZHM7XG4gICAgICBjb25zb2xlLmxvZyhyLGMpO1xuICAgICAgY29uc3Qgb3RoZXJBdHRhY2tNYXAgPSBvdGhlclBsYXllci5nYW1lYm9hcmQuZ2V0QXR0YWNrTWFwKCk7XG4gICAgICBpZiAoaXNPbkJvYXJkQW5kTm90QXR0YWNrZWQoW3ItMSxjXSxvdGhlckF0dGFja01hcCkpe1xuICAgICAgICBwcmV2aW91c0F0dGFjay5jb29yZHMgPSBbci0xLGNdO1xuICAgICAgICBwcmV2aW91c0F0dGFjay5oaXQgPSBvdGhlclBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbci0xLGNdKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNPbkJvYXJkQW5kTm90QXR0YWNrZWQoW3IrMSxjXSxvdGhlckF0dGFja01hcCkpe1xuICAgICAgICBwcmV2aW91c0F0dGFjay5jb29yZHMgPSBbcisxLGNdO1xuICAgICAgICBwcmV2aW91c0F0dGFjay5oaXQgPSBvdGhlclBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbcisxLGNdKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNPbkJvYXJkQW5kTm90QXR0YWNrZWQoW3IsYy0xXSxvdGhlckF0dGFja01hcCkpe1xuICAgICAgICBwcmV2aW91c0F0dGFjay5jb29yZHMgPSBbcixjLTFdO1xuICAgICAgICBwcmV2aW91c0F0dGFjay5oaXQgPSBvdGhlclBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbcixjLTFdKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNPbkJvYXJkQW5kTm90QXR0YWNrZWQoW3IsYysxXSxvdGhlckF0dGFja01hcCkpe1xuICAgICAgICBwcmV2aW91c0F0dGFjay5jb29yZHMgPSBbcixjKzFdO1xuICAgICAgICBwcmV2aW91c0F0dGFjay5oaXQgPSBvdGhlclBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbcixjKzFdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1ha2VSYW5kb21BdHRhY2sob3RoZXJQbGF5ZXIpO1xuICAgICAgfVxuICAgIH0gZWxzZXtcbiAgICAgIG1ha2VSYW5kb21BdHRhY2sob3RoZXJQbGF5ZXIpO1xuICAgIH1cbiAgICBpZiAocHJldmlvdXNBdHRhY2suaGl0ID09IFwiaGl0XCIpe1xuICAgICAgcHJldmlvdXNBdHRhY2sucHJldlN1Y2Nlc3NDb29yZHMgPSBwcmV2aW91c0F0dGFjay5jb29yZHM7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBSZWNlaXZlZCBhdHRhY2sgYXQgJHtwcmV2aW91c0F0dGFjay5jb29yZHN9IGZvciBwbGF5ZXIgMSBieSBjb21wdXRlcmApXG4gICAgYXR0YWNrQ291bnQrKztcbiAgICByZXR1cm4gcHJldmlvdXNBdHRhY2suY29vcmRzO1xuICB9XG5cbiAgY29uc3QgZ2V0TnRoT3BlbkF0dGFja01hcCA9IGZ1bmN0aW9uKG90aGVyUGxheWVyLCBpbmRleCl7XG4gICAgY29uc3Qgb3RoZXJBdHRhY2tNYXAgPSBvdGhlclBsYXllci5nYW1lYm9hcmQuZ2V0QXR0YWNrTWFwKCk7XG4gICAgbGV0IGNvdW50ID0gaW5kZXg7XG4gICAgZm9yIChsZXQgcm93IG9mIG90aGVyQXR0YWNrTWFwKXtcbiAgICAgIGZvciAobGV0IGM9MDsgYzwxMDsgYysrKXtcbiAgICAgICAgY29uc3QgY29sVmFsdWUgPSByb3dbY107XG4gICAgICAgIC8vY29uc29sZS5sb2coY29sVmFsdWUpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbFZhbHVlID09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgaWYgKGNvdW50IDwwKXtcbiAgICAgICAgICAgIGNvbnN0IHIgPSBvdGhlckF0dGFja01hcC5pbmRleE9mKHJvdyk7XG4gICAgICAgICAgICByZXR1cm4gW3IsY107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coY291bnQpXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZ2V0IE50aCBvcGVuIGF0dGFjayBtYXAgZmFpbGVkXCIpO1xuICB9XG5cbiAgY29uc3QgaXNPbkJvYXJkQW5kTm90QXR0YWNrZWQgPSBmdW5jdGlvbihbcixjXSwgYXR0YWNrTWFwKXtcbiAgICByZXR1cm4gKHI8OSAmJiByPjAgJiYgYzw5ICYmIGM+MCAmJiB0eXBlb2YgYXR0YWNrTWFwW3JdW2NdID09IFwidW5kZWZpbmVkXCIpO1xuICB9XG4gIC8vIGVuZCBvZiBjb2RlIHJlbGF0ZWQgdG8gbWFraW5nIGNvbXB1dGVyIGVkdWNhdGVkIGF0dGFja1xuXG4gIHJldHVybiB7XG4gICAgbmV3U2hpcCxcbiAgICBnZXRTaGlwRnJvbUNvb3JkcyxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHdhc0F0dGFja2VkLFxuICAgIGlzQWxsU3VuayxcbiAgICBnZXRCb2FyZE1hcCxcbiAgICByZXNldEJvYXJkLFxuICAgIGdldEF0dGFja01hcCxcbiAgICBpc1RoaXNBbGxvd2VkUGxhY2VtZW50LFxuICAgIG1vdmVTaGlwLFxuICAgIGNyZWF0ZUFsbG93ZWRQb3NpdGlvbk1hcCxcbiAgICByYW5kb21pemVCb2FyZCxcbiAgICBtYWtlRWR1Y2F0ZWRBdHRhY2ssXG4gIH07XG59O1xuXG5leHBvcnQgeyBHYW1lYm9hcmQgfTtcbiIsImltcG9ydCB7R2FtZWJvYXJkfSBmcm9tIFwiLi9nYW1lYm9hcmQuanNcIlxuXG5jb25zdCBQbGF5ZXIgPSBmdW5jdGlvbihuYW1lLCBudW1iZXIpe1xuXG4gICAgbGV0IGdhbWVib2FyZDtcbiAgICBjb25zdCBpbml0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIH0oKTtcblxuICAgIHJldHVybntcbiAgICAgICAgbmFtZSxcbiAgICAgICAgbnVtYmVyLFxuICAgICAgICBnYW1lYm9hcmQsXG4gICAgfVxufVxuXG5jb25zdCBjb21wdXRlclBsYXllciA9IGZ1bmN0aW9uKG51bWJlcil7XG5cbiAgICByZXR1cm57XG4gICAgICAgIC8vIGluaGVyaXQgcHJvcGVydGllcyBieSBjb21wb3NpdGlvblxuICAgICAgICAuLi4obmV3IFBsYXllcihcIkNvbXB1dGVyIEJvYlwiLCBudW1iZXIpKSxcbiAgICB9XG59XG5cbmNvbnN0IGh1bWFuUGxheWVyID0gZnVuY3Rpb24obmFtZSwgbnVtYmVyKXtcblxuICAgIHJldHVybntcbiAgICAgICAgLi4uKG5ldyBQbGF5ZXIobmFtZSwgbnVtYmVyKSksXG4gICAgfVxufVxuXG5leHBvcnQge1BsYXllciwgY29tcHV0ZXJQbGF5ZXIsIGh1bWFuUGxheWVyfTsiLCIvLyBjb250YWlucyBtZXRob2RzIHRvIHBvcHVsYXRlIERPTVxuLy8gcmVuZGVyIGZ1bmN0aW9ucyB3aWxsIGRpc3BsYXkgRE9NIGVsZW1lbnRzXG4vLyBidWlsZCBmdW5jdGlvbnMgd2lsbCBidWlsZCBlbGVtZW50cyBhbmQgcmV0dXJuIHRoZW0gd2l0aG91dCBkaXNwbGF5XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuY29uc3QgUmVuZGVyTWFuYWdlciA9IGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgbGV0IGJvYXJkMTtcbiAgICBsZXQgYm9hcmQyO1xuICAgIGxldCBkaWFsb2c7XG4gICAgY29uc3QgaW5pdEdhbWVSZW5kZXIgPSBmdW5jdGlvbihwbGF5ZXIxT2JqZWN0LCBwbGF5ZXIyT2JqZWN0KXtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGJvZHkucXVlcnlTZWxlY3RvcihcIi5wcmVnYW1lLmNvbnRhaW5lclwiKSk7XG4gICAgICAgIGNvbnN0IGdhbWVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZ2FtZSBjb250YWluZXJcIik7XG4gICAgICAgIGJvZHkuYXBwZW5kKGdhbWVDb250YWluZXIpO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBidWlsZEhlYWRlcigpO1xuICAgICAgICBib2FyZDEgPSBidWlsZEJvYXJkQW5kSGVhZGVyKHBsYXllcjFPYmplY3QubnVtYmVyLCBwbGF5ZXIxT2JqZWN0Lm5hbWUpO1xuICAgICAgICBib2FyZDIgPSBidWlsZEJvYXJkQW5kSGVhZGVyKHBsYXllcjJPYmplY3QubnVtYmVyLCBwbGF5ZXIyT2JqZWN0Lm5hbWUpO1xuICAgICAgICBnYW1lQ29udGFpbmVyLmFwcGVuZChoZWFkZXIsIGJvYXJkMSwgYm9hcmQyKTtcbiAgICAgICAgZGlhbG9nID0gYnVpbGREaWFsb2coKTtcbiAgICAgICAgZ2FtZUNvbnRhaW5lci5hcHBlbmQoZGlhbG9nKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYnVpbGRIZWFkZXIgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJ1aSBjb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHR1cm5UZXh0ID0gY3JlYXRlRWxlbWVudChcImgxXCIsIFwidHVybiB0ZXh0XCIpO1xuICAgICAgICB0dXJuVGV4dC50ZXh0Q29udGVudCA9IFwiJ3MgVHVyblwiO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHR1cm5UZXh0KTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBidWlsZEJvYXJkQW5kSGVhZGVyID0gZnVuY3Rpb24ocGxheWVyTnVtYmVyLCBwbGF5ZXJOYW1lKXtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsYGJvYXJkIGNvbnRhaW5lcmApO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8MTA7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsYHJvdy0ke2l9YCk7XG4gICAgICAgICAgICByb3cuc2V0QXR0cmlidXRlKFwicm93XCIsIGkpO1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPDEwOyBqKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImNvbFwiLCBqKTtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kKHNxdWFyZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2FyZC5hcHBlbmQocm93KTtcbiAgICAgICAgfVxuICAgICAgICBib2FyZC5zZXRBdHRyaWJ1dGUoXCJwbGF5ZXJudW1cIiwgcGxheWVyTnVtYmVyKTtcbiAgICAgICAgY29uc3QgYm9hcmRBbmRIZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsYGJvYXJkLWFuZC1oZWFkZXIgY29udGFpbmVyIHBsYXllci0ke3BsYXllck51bWJlcn1gKTtcbiAgICAgICAgY29uc3QgYm9hcmRIZWFkZXJUZXh0PSBjcmVhdGVFbGVtZW50KFwiaDJcIiwgXCJib2FyZCBoZWFkZXJcIik7XG4gICAgICAgIGJvYXJkSGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWV9J3MgQm9hcmRgO1xuICAgICAgICBib2FyZEFuZEhlYWRlci5hcHBlbmQoYm9hcmRIZWFkZXJUZXh0LCBib2FyZCk7XG4gICAgICAgIHJldHVybiBib2FyZEFuZEhlYWRlcjtcbiAgICB9XG5cbiAgICBjb25zdCBidWlsZERpYWxvZyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gICAgICAgIGNvbnN0IGRpYWxvZ0hlYWRlciA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBcImRpYWxvZyBoZWFkZXJcIik7XG4gICAgICAgIGRpYWxvZ0hlYWRlci50ZXh0Q29udGVudCA9IFwiU3dpdGNoIFBsYXllcnMhXCJcbiAgICAgICAgY29uc3QgZGlhbG9nU3VidGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiZGlhbG9nIHN1YnRleHRcIik7XG4gICAgICAgIGRpYWxvZ1N1YnRleHQudGV4dENvbnRlbnQgPSBcIihjbGljayB3aGVuIHJlYWR5KVwiO1xuICAgICAgICBkaWFsb2cuYXBwZW5kKGRpYWxvZ0hlYWRlciwgZGlhbG9nU3VidGV4dCk7XG4gICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICBkaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge2RpYWxvZy5jbG9zZSgpfSk7XG4gICAgICAgIHJldHVybiBkaWFsb2c7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyTmV3U2hpcCA9IGZ1bmN0aW9uKHBsYXllck51bWJlciwuLi5jb29yZHMpe1xuICAgICAgICBsZXQgYm9hcmQ7XG4gICAgICAgIGlmIChwbGF5ZXJOdW1iZXIgPT0xKXtcbiAgICAgICAgICAgIGJvYXJkID0gYm9hcmQxO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBib2FyZCA9IGJvYXJkMjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaT0wO1xuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCBpc0hvcml6b250YWwgPSBmYWxzZTtcbiAgICAgICAgaWYgKGNvb3Jkc1sxXVswXSA9PSBjb29yZHNbMF1bMF0pe1xuICAgICAgICAgICAgaXNIb3Jpem9udGFsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBbeCx5XSBvZiBjb29yZHMpe1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlVG9DaGFuZ2UgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGBkaXYucm93LSR7eH0gPiBkaXY6bnRoLWNoaWxkKCR7eSsxfSlgKTtcbiAgICAgICAgICAgIHNxdWFyZVRvQ2hhbmdlLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgICAgc3F1YXJlVG9DaGFuZ2Uuc2V0QXR0cmlidXRlKFwibGVuZ3RoXCIsIHNoaXBMZW5ndGgpO1xuICAgICAgICAgICAgc3F1YXJlVG9DaGFuZ2Uuc2V0QXR0cmlidXRlKFwiZ3JhYkxvY2F0aW9uXCIsIGkpO1xuICAgICAgICAgICAgc3F1YXJlVG9DaGFuZ2Uuc2V0QXR0cmlidXRlKFwiaG9yaXpvbnRhbFwiLCBpc0hvcml6b250YWwpXG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJBdHRhY2tlZCA9IGZ1bmN0aW9uKHNxdWFyZURPTU5vZGUpe1xuICAgICAgICBzcXVhcmVET01Ob2RlLmNsYXNzTGlzdC5hZGQoXCJhdHRhY2tlZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXZlYWxEaWFsb2dXaXRoVGV4dCA9IGZ1bmN0aW9uKHN0cmluZyA9IFwiXCIpe1xuICAgICAgICBjb25zdCBkaWFsb2dIZWFkZXIgPSBkaWFsb2cuZmlyc3RDaGlsZDtcbiAgICAgICAgaWYgKHN0cmluZyAhPSBcIlwiKXtcbiAgICAgICAgICAgIGRpYWxvZ0hlYWRlci50ZXh0Q29udGVudCA9IHN0cmluZztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpYWxvZ0hlYWRlci50ZXh0Q29udGVudCA9IFwiU3dpdGNoIFBsYXllcnMhXCJcbiAgICAgICAgfVxuICAgICAgICAvLyBhZGQgc2NyZWVuIHN3YXBwaW5nIG92ZXJsYXlcbiAgICAgICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclR1cm5Td2l0Y2hUbyA9IGZ1bmN0aW9uKHBsYXllck51bWJlciwgcGxheWVyTmFtZSl7XG4gICAgICAgIHJldmVhbERpYWxvZ1dpdGhUZXh0KGAke3BsYXllck5hbWV9J3MgVHVybmApO1xuICAgICAgICAvLyBwbGF5ZXJOdW1iZXIgaXMgbnVtYmVyIG9mIHBsYXllciB3aG9zZSB0dXJuIGl0IHNob3VsZCBzd2l0Y2ggVE9cbiAgICAgICAgLy8gY2hhbmdlIGhlYWRlciB0byBcIkl0IGlzIHBsYXllcnN7cGxheWVyTnVtYmVyfS5uYW1lJ3MgdHVyblwiXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudWkuY29udGFpbmVyIC50dXJuLnRleHRcIik7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWV9J3MgVHVybmA7XG4gICAgICAgIC8vIGNoYW5nZSBib2FyZCBoZWFkZXIgZnJvbSBcIllvdXIgQm9hcmRcIiB0byBcIkVuZW15IEJvYXJkXCIgYW5kIHZpcyB2ZXJzYVxuICAgICAgICBjb25zdCBib2FyZDFIZWFkZXIgPSBib2FyZDEucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XG4gICAgICAgIGNvbnN0IGJvYXJkMkhlYWRlciA9IGJvYXJkMi5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcbiAgICAgICAgLy8gaGlkZSBzaGlwcyBmcm9tIGVuZW15IGJvYXJkIGFuZCByZXZlYWwgc2hpcHMgb24geW91ciBib2FyZFxuICAgICAgICBjb25zdCBib2FyZERPTTEgPSBib2FyZDEucXVlcnlTZWxlY3RvcihcIi5ib2FyZC5jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGJvYXJkRE9NMiA9IGJvYXJkMi5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLmNvbnRhaW5lclwiKTtcbiAgICAgICAgaWYgKHBsYXllck51bWJlciA9PSAxKXtcbiAgICAgICAgICAgIGJvYXJkMkhlYWRlci50ZXh0Q29udGVudCA9IFwiRW5lbXkgQm9hcmRcIjtcbiAgICAgICAgICAgIGJvYXJkMUhlYWRlci50ZXh0Q29udGVudCA9IFwiWW91ciBCb2FyZFwiO1xuICAgICAgICAgICAgYm9hcmRET00xLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgICAgICAgICAgYm9hcmRET00yLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9hcmQxSGVhZGVyLnRleHRDb250ZW50ID0gXCJFbmVteSBCb2FyZFwiO1xuICAgICAgICAgICAgYm9hcmQySGVhZGVyLnRleHRDb250ZW50ID0gXCJZb3VyIEJvYXJkXCI7XG4gICAgICAgICAgICBib2FyZERPTTEuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgICAgICAgICBib2FyZERPTTIuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgIFxuICAgIGNvbnN0IHJlbmRlclR1cm5Db3VudGVyID0gZnVuY3Rpb24odHVybk51bSl7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudWkuY29udGFpbmVyIC50dXJuLnRleHRcIik7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGBUdXJuICR7dHVybk51bX1gO1xuICAgIH1cblxuICAgIC8vIHJlbmRlciBlbmRpbmcgZ2FtZSAocGxheWVyTmFtZSBoYXMgd29uKVxuICAgIGNvbnN0IHJlbmRlckVuZEdhbWUgPSBmdW5jdGlvbih3aW5uZXJOYW1lKXtcbiAgICAgICAgY29uc3Qgd2lubmVyVGV4dENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJlbmQgY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCB3aW5uZXJUZXh0ID0gY3JlYXRlRWxlbWVudChcImgxXCIsIFwid2lubmVyIHRleHRcIik7XG4gICAgICAgIHdpbm5lclRleHQudGV4dENvbnRlbnQgPSBgQ29uZ3JhdHMhICR7d2lubmVyTmFtZX0gd29uLmA7O1xuICAgICAgICBjb25zdCBwbGF5QWdhaW5CdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwicmVzZXQgYnV0dG9uXCIpO1xuICAgICAgICBwbGF5QWdhaW5CdXR0b24udGV4dENvbnRlbnQgPSBcIlBsYXkgQWdhaW4/XCI7XG4gICAgICAgIHdpbm5lclRleHRDb250YWluZXIuYXBwZW5kKHdpbm5lclRleHQsIHBsYXlBZ2FpbkJ1dHRvbik7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgYm9keS5hcHBlbmQod2lubmVyVGV4dENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyU3RhZ2luZyA9IGZ1bmN0aW9uKGF0dGFja01hcDEsIHNoaXBNYXAxLCBhdHRhY2tNYXAyLCBzaGlwTWFwMil7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudWkuY29udGFpbmVyIC50dXJuLnRleHRcIik7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiU2V0dXAgVGltZVwiO1xuICAgICAgICByZW5kZXJCb2FyZFJlc2V0KGF0dGFja01hcDEsIHNoaXBNYXAxLCBib2FyZDEucXVlcnlTZWxlY3RvcihcIi5ib2FyZC5jb250YWluZXJcIikpO1xuICAgICAgICByZW5kZXJCb2FyZFJlc2V0KGF0dGFja01hcDIsIHNoaXBNYXAyLCBib2FyZDIucXVlcnlTZWxlY3RvcihcIi5ib2FyZC5jb250YWluZXJcIikpO1xuICAgICAgICByZW5kZXJTaGlwU2FtcGxlcygpO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZUJvYXJkVmlzaWJpbGl0eSA9IGZ1bmN0aW9uKGJvYXJkRE9NKXtcbiAgICAgICAgYm9hcmRET00uY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyQm9hcmRSZXNldCA9IGZ1bmN0aW9uKGF0dGFja01hcCwgc2hpcE1hcCwgYm9hcmRET00pe1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8MTA7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBpO1xuICAgICAgICAgICAgY29uc3QgYXR0YWNrZWRJblJvdyA9IE9iamVjdC5rZXlzKGF0dGFja01hcFtpXSk7XG4gICAgICAgICAgICBjb25zdCBzaGlwSW5Sb3cgPSBPYmplY3Qua2V5cyhzaGlwTWFwW2ldKTtcbiAgICAgICAgICAgIGZvciAobGV0IGF0dGFja2VkIG9mIGF0dGFja2VkSW5Sb3cpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IE51bWJlcihhdHRhY2tlZCkrMTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXZUb1VuYXR0YWNrID0gYm9hcmRET00ucXVlcnlTZWxlY3RvcihgZGl2LnJvdy0ke3Jvd30gZGl2Om50aC1jaGlsZCgke2NvbH0pYCk7XG4gICAgICAgICAgICAgICAgZGl2VG9VbmF0dGFjay5jbGFzc0xpc3QucmVtb3ZlKFwiYXR0YWNrZWRcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHNoaXAgb2Ygc2hpcEluUm93KXtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2wgPSBOdW1iZXIoc2hpcCkrMTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXZUb1Vuc2hpcCA9IGJvYXJkRE9NLnF1ZXJ5U2VsZWN0b3IoYGRpdi5yb3ctJHtyb3d9IGRpdjpudGgtY2hpbGQoJHtjb2x9KWApO1xuICAgICAgICAgICAgICAgIGRpdlRvVW5zaGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpO1xuICAgICAgICAgICAgICAgIGRpdlRvVW5zaGlwLnJlbW92ZUF0dHJpYnV0ZShcImRyYWdnYWJsZVwiKTtcbiAgICAgICAgICAgICAgICBkaXZUb1Vuc2hpcC5yZW1vdmVBdHRyaWJ1dGUoXCJncmFibG9jYXRpb25cIik7XG4gICAgICAgICAgICAgICAgZGl2VG9VbnNoaXAucmVtb3ZlQXR0cmlidXRlKFwibGVuZ3RoXCIpO1xuICAgICAgICAgICAgICAgIGRpdlRvVW5zaGlwLnJlbW92ZUF0dHJpYnV0ZShcImhvcml6b250YWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJTaGlwU2FtcGxlcyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGhpZGRlbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJoaWRkZW4gc2FtcGxlc1wiKTtcbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbFNoaXBzID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInNoaXBzIGhvcml6b250YWxcIik7XG4gICAgICAgIGNvbnN0IHZlcnRpY2FsU2hpcHMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2hpcHMgdmVydGljYWxcIik7XG4gICAgICAgIGhvcml6b250YWxTaGlwcy5hcHBlbmQoYnVpbGRTaGlwT2ZMZW5ndGgoMiksIGJ1aWxkU2hpcE9mTGVuZ3RoKDMpLFxuICAgICAgICBidWlsZFNoaXBPZkxlbmd0aCg0KSwgYnVpbGRTaGlwT2ZMZW5ndGgoNSkpO1xuICAgICAgICB2ZXJ0aWNhbFNoaXBzLmFwcGVuZChidWlsZFNoaXBPZkxlbmd0aCgyKSwgYnVpbGRTaGlwT2ZMZW5ndGgoMyksXG4gICAgICAgIGJ1aWxkU2hpcE9mTGVuZ3RoKDQpLCBidWlsZFNoaXBPZkxlbmd0aCg1KSk7XG4gICAgICAgIGhpZGRlbkNvbnRhaW5lci5hcHBlbmQoaG9yaXpvbnRhbFNoaXBzLHZlcnRpY2FsU2hpcHMpO1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIilcbiAgICAgICAgYm9keS5hcHBlbmQoaGlkZGVuQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBidWlsZFNoaXBPZkxlbmd0aCA9IGZ1bmN0aW9uKGxlbmd0aCl7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcInNoaXAgY29udGFpbmVyXCIpO1xuICAgICAgICBjb250YWluZXIuaWQgPSBgbGVuZ3RoLSR7bGVuZ3RofWA7XG4gICAgICAgIGZvciAobGV0IGkgPTA7IGk8bGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKHBhcnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyU3RhZ2luZ0J1dHRvbnMgPSBmdW5jdGlvbihib2FyZERPTSl7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkFyZWEgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJidXR0b24gY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBidXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsXCJzdWJtaXQgc3RhZ2luZ1wiKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJMb2NrIGluIHBvc2l0aW9ucyFcIjtcbiAgICAgICAgY29uc3Qgcm5nQnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcInJhbmRvbWl6ZSBidXR0b25cIik7XG4gICAgICAgIHJuZ0J1dHRvbi50ZXh0Q29udGVudCA9IFwiUmFuZG9taXplXCJcbiAgICAgICAgYnV0dG9uQXJlYS5hcHBlbmQoYnV0dG9uLCBybmdCdXR0b24pO1xuICAgICAgICBib2FyZERPTS5wYXJlbnROb2RlLmFwcGVuZChidXR0b25BcmVhKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJNb3ZlU2hpcCA9IGZ1bmN0aW9uKFtvbGRYU3RhcnQsIG9sZFlTdGFydF0sIFtuZXdYU3RhcnQsIG5ld1lTdGFydF0sIHNoaXBMZW5ndGgsIGlzSG9yaXpvbnRhbCwgYm9hcmRET01Ob2RlKXtcbiAgICAgICAgaWYgKG9sZFhTdGFydCA9PSBuZXdYU3RhcnQgJiYgb2xkWVN0YXJ0ID09IG5ld1lTdGFydCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCA9PSBcInRydWVcIil7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8c2hpcExlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmVUb1JlbW92ZSA9IGJvYXJkRE9NTm9kZS5xdWVyeVNlbGVjdG9yKGAucm93LSR7b2xkWFN0YXJ0fSBkaXY6bnRoLWNoaWxkKCR7b2xkWVN0YXJ0K2krMX0pYCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JhYmxvY2F0aW9uID0gc3F1YXJlVG9SZW1vdmUuZ2V0QXR0cmlidXRlKFwiZ3JhYmxvY2F0aW9uXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLnJlbW92ZUF0dHJpYnV0ZShcImRyYWdnYWJsZVwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5yZW1vdmVBdHRyaWJ1dGUoXCJsZW5ndGhcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUucmVtb3ZlQXR0cmlidXRlKFwiZ3JhYmxvY2F0aW9uXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLnJlbW92ZUF0dHJpYnV0ZShcImhvcml6b250YWxcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIilcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmVUb0FkZCA9IGJvYXJkRE9NTm9kZS5xdWVyeVNlbGVjdG9yKGAucm93LSR7bmV3WFN0YXJ0fSBkaXY6bnRoLWNoaWxkKCR7bmV3WVN0YXJ0K2krMX0pYCk7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLnNldEF0dHJpYnV0ZShcImxlbmd0aFwiLCBzaGlwTGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5zZXRBdHRyaWJ1dGUoXCJncmFibG9jYXRpb25cIiwgZ3JhYmxvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5zZXRBdHRyaWJ1dGUoXCJob3Jpem9udGFsXCIsIGlzSG9yaXpvbnRhbCk7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxzaGlwTGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZVRvUmVtb3ZlID0gYm9hcmRET01Ob2RlLnF1ZXJ5U2VsZWN0b3IoYC5yb3ctJHtvbGRYU3RhcnQraX0gZGl2Om50aC1jaGlsZCgke29sZFlTdGFydCsxfSlgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBncmFibG9jYXRpb24gPSBzcXVhcmVUb1JlbW92ZS5nZXRBdHRyaWJ1dGUoXCJncmFibG9jYXRpb25cIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUucmVtb3ZlQXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvUmVtb3ZlLnJlbW92ZUF0dHJpYnV0ZShcImxlbmd0aFwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5yZW1vdmVBdHRyaWJ1dGUoXCJncmFibG9jYXRpb25cIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9SZW1vdmUucmVtb3ZlQXR0cmlidXRlKFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb1JlbW92ZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKVxuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZVRvQWRkID0gYm9hcmRET01Ob2RlLnF1ZXJ5U2VsZWN0b3IoYC5yb3ctJHtuZXdYU3RhcnQraX0gZGl2Om50aC1jaGlsZCgke25ld1lTdGFydCsxfSlgKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgc3F1YXJlVG9BZGQuc2V0QXR0cmlidXRlKFwibGVuZ3RoXCIsIHNoaXBMZW5ndGgpO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLnNldEF0dHJpYnV0ZShcImdyYWJsb2NhdGlvblwiLCBncmFibG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIHNxdWFyZVRvQWRkLnNldEF0dHJpYnV0ZShcImhvcml6b250YWxcIiwgaXNIb3Jpem9udGFsKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVUb0FkZC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlbmRlcmluZyBwcmVnYW1lXG4gICAgY29uc3QgcmVuZGVyUHJlZ2FtZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgY29uc3QgcHJlZ2FtZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcInByZWdhbWUgY29udGFpbmVyXCIpO1xuICAgICAgICBib2R5LmFwcGVuZChwcmVnYW1lQ29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBidWlsZFByZWdhbWVUaXRsZSgpO1xuICAgICAgICBjb25zdCBnYW1lU2VsZWN0aW9uQnV0dG9ucyA9IGJ1aWxkU2VsZWN0QnV0dG9ucygpO1xuICAgICAgICBwcmVnYW1lQ29udGFpbmVyLmFwcGVuZCh0aXRsZSwgZ2FtZVNlbGVjdGlvbkJ1dHRvbnMpO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkUHJlZ2FtZVRpdGxlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KFwiaDFcIiwgXCJ0aXRsZVwiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkJhdHRsZXNoaXBcIjtcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkU2VsZWN0QnV0dG9ucyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcImJ1dHRvbiBjb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHNpbmdsZVBsYXllckJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIixcInNpbmdsZSBidXR0b25cIik7XG4gICAgICAgIHNpbmdsZVBsYXllckJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2luZ2xlIFBsYXllclwiXG4gICAgICAgIGNvbnN0IGRvdWJsZVBsYXllckJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJkb3VibGUgYnV0dG9uXCIpO1xuICAgICAgICBkb3VibGVQbGF5ZXJCdXR0b24udGV4dENvbnRlbnQgPSBcIkhvdHNlYXQgVHdvIFBsYXllclwiXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoc2luZ2xlUGxheWVyQnV0dG9uLCBkb3VibGVQbGF5ZXJCdXR0b24pO1xuICAgICAgICByZXR1cm4gYnV0dG9uQ29udGFpbmVyO1xuICAgIH1cblxuICAgIC8vIHRoaXMgc2hvdWxkIHJlbmRlciBhZnRlciBnYW1lIHNlbGVjdGlvbiBidXR0b25cbiAgICAvLyBpZiBhbiBleGlzdGluZyBmb3JtIGlzIHRoZXJlLCBvbmx5IGNoYW5nZSBpbnB1dHNcbiAgICBjb25zdCByZW5kZXJQbGF5ZXJOYW1lRm9ybSA9IGZ1bmN0aW9uKGlzU2luZ2xlUGxheWVyKXtcbiAgICAgICAgY29uc3QgbmV3SW5wdXRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJpbnB1dCBjb250YWluZXJcIik7XG4gICAgICAgIGlmIChpc1NpbmdsZVBsYXllcil7XG4gICAgICAgICAgICBuZXdJbnB1dENvbnRhaW5lci5hcHBlbmQoYnVpbGROYW1lSW5wdXQoXCJXaGF0IGlzIHlvdXIgbmFtZT9cIikpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBuZXdJbnB1dENvbnRhaW5lci5hcHBlbmQoYnVpbGROYW1lSW5wdXQoXCJFbnRlciBwbGF5ZXIgMSBuYW1lLi4uXCIpKTtcbiAgICAgICAgICAgIG5ld0lucHV0Q29udGFpbmVyLmFwcGVuZChidWlsZE5hbWVJbnB1dChcIkVudGVyIHBsYXllciAyIG5hbWUuLi5cIikpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLmNvbnRhaW5lclwiKTtcbiAgICAgICAgaWYgKGZvcm1Db250YWluZXIgPT0gbnVsbCl7XG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImZvcm1cIixcImZvcm0gY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmQobmV3SW5wdXRDb250YWluZXIpO1xuICAgICAgICAgICAgY29uc3QgcHJlZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZ2FtZS5jb250YWluZXJcIik7XG4gICAgICAgICAgICBwcmVnYW1lQ29udGFpbmVyLmFwcGVuZChmb3JtQ29udGFpbmVyKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgLy8ganVzdCByZXBsYWNlIGlucHV0IGNvbnRhaW5lciBpZiBmb3JtIGFscmVhZHkgZXhpc3RzXG4gICAgICAgICAgICBjb25zdCBvbGRJbnB1dENvbnRhaW5lciA9IGZvcm1Db250YWluZXIucXVlcnlTZWxlY3RvcihcIi5pbnB1dC5jb250YWluZXJcIik7XG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLnJlcGxhY2VDaGlsZChuZXdJbnB1dENvbnRhaW5lciwgb2xkSW5wdXRDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgZXhpc3RpbmcgYnV0dG9uIGV4aXN0cywgcmVwbGFjZSBpdFxuICAgIGNvbnN0IHJlbmRlckZvcm1CdXR0b24gPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLmNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3Qgb2xkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLnN1Ym1pdFwiKTtcbiAgICAgICAgaWYgKG9sZEJ1dHRvbiAhPSBudWxsKXtcbiAgICAgICAgICAgIGZvcm1Db250YWluZXIucmVtb3ZlQ2hpbGQob2xkQnV0dG9uKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiZm9ybSBzdWJtaXRcIik7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTGV0J3MgUGxheSFcIjtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmQoYnV0dG9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBidWlsZE5hbWVJbnB1dCA9IGZ1bmN0aW9uKHBsYWNlaG9sZGVyU3RyaW5nKXtcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFwibmFtZSBpbnB1dFwiKTtcbiAgICAgICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIixwbGFjZWhvbGRlclN0cmluZyk7XG4gICAgICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgMjApO1xuICAgICAgICByZXR1cm4gbmFtZUlucHV0O1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50VHlwZSwgY2xhc3NTdHJpbmcgPSB1bmRlZmluZWQpe1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICAgICAgICBpZiAoY2xhc3NTdHJpbmcgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc1N0cmluZy5zcGxpdChcIiBcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybntcbiAgICAgICAgaW5pdEdhbWVSZW5kZXIsXG4gICAgICAgIHJlbmRlck5ld1NoaXAsXG4gICAgICAgIHJlbmRlckF0dGFja2VkLFxuICAgICAgICByZW5kZXJUdXJuU3dpdGNoVG8sXG4gICAgICAgIHJlbmRlckVuZEdhbWUsXG4gICAgICAgIHJlbmRlclN0YWdpbmcsXG4gICAgICAgIHJlbmRlclNoaXBTYW1wbGVzLFxuICAgICAgICByZW5kZXJNb3ZlU2hpcCxcbiAgICAgICAgcmVuZGVyU3RhZ2luZ0J1dHRvbnMsXG4gICAgICAgIHRvZ2dsZUJvYXJkVmlzaWJpbGl0eSxcbiAgICAgICAgcmVuZGVyQm9hcmRSZXNldCxcbiAgICAgICAgcmV2ZWFsRGlhbG9nV2l0aFRleHQsXG4gICAgICAgIHJlbmRlclByZWdhbWUsXG4gICAgICAgIHJlbmRlclBsYXllck5hbWVGb3JtLFxuICAgICAgICByZW5kZXJGb3JtQnV0dG9uLFxuICAgICAgICByZW5kZXJUdXJuQ291bnRlcixcbiAgICB9XG5cbn0oKTtcblxuZXhwb3J0IHtSZW5kZXJNYW5hZ2VyfTsiLCJjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgpe1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICB9XG5cbiAgICBoaXQoKXtcbiAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgfVxuXG4gICAgaXNTdW5rKCl7XG4gICAgICAgIHJldHVybiAodGhpcy5oaXRzID49IHRoaXMubGVuZ3RoKVxuICAgIH1cbn1cblxuZXhwb3J0IHtTaGlwfTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBtb2R1bGUgdG8gbWFuYWdlIGdhbWUgdXNpbmcgZXZlbnQgbGlzdGVuZXJzIHRvIGludGVyYWN0IHdpdGggb2JqZWN0c1xuLy8gY2FsbHMgbWV0aG9kcyBpbiByZW5kZXIuanMgdG8gY2hhbmdlIERPTVxuLy8gcmVhbGlzdGljYWxseSBkb2VzIG5vdCBleHBvcnQgYW55dGhpbmcgc2luY2UgaXQgaXMgYSBkcml2ZXJcblxuaW1wb3J0IHtodW1hblBsYXllciwgY29tcHV0ZXJQbGF5ZXJ9IGZyb20gXCIuL3BsYXllci5qc1wiXG5pbXBvcnQge1JlbmRlck1hbmFnZXJ9IGZyb20gXCIuL3JlbmRlci5qc1wiXG5cbmNvbnN0IEdhbWVNYW5hZ2VyID0gZnVuY3Rpb24oKXtcblxuICAgIGNvbnN0IGFkZE5ld1NoaXAgPSBmdW5jdGlvbihwbGF5ZXIsIC4uLmNvb3Jkcyl7XG4gICAgICAgIHBsYXllci5nYW1lYm9hcmQubmV3U2hpcCguLi5jb29yZHMpO1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlck5ld1NoaXAocGxheWVyLm51bWJlciwuLi5jb29yZHMpO1xuICAgIH1cblxuICAgIC8vIHBhc3NlcyB0dXJuIHRvIHBsYXllciAxIGlmIG51bWJlciA9IDFcbiAgICAvLyBpZiBpdCBpcyBwbGF5ZXIgMSdzIHR1cm4sIHRoZW4gYm9hcmQgMiBzaG91bGQgYmUgQUNUSVZFXG4gICAgY29uc3QgcGFzc1R1cm5UbyA9IGZ1bmN0aW9uKHBsYXllck51bWJlcil7XG4gICAgICAgIGlmIChwbGF5ZXJOdW1iZXIgPT0gMSl7XG4gICAgICAgICAgICBhY3RpdmF0ZUV2ZW50TGlzdGVuZXIocGxheWVycy5wbGF5ZXIyLmJvYXJkRE9NKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgYWN0aXZhdGVFdmVudExpc3RlbmVyKHBsYXllcnMucGxheWVyMS5ib2FyZERPTSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGxheWVyTmFtZSA9IE9iamVjdC52YWx1ZXMocGxheWVycylbcGxheWVyTnVtYmVyLTFdLm5hbWU7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3BsYXllck5hbWV9J3MgVHVybmApO1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlclR1cm5Td2l0Y2hUbyhwbGF5ZXJOdW1iZXIsIHBsYXllck5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGJvYXJkRE9NTm9kZSl7XG4gICAgICAgIGJvYXJkRE9NTm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQm9hcmRDbGljayk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQm9hcmRDbGljayA9IGFzeW5jIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgdHVybkNvdW50ZXIrKztcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgbGV0IHBsYXllck51bWJlciA9IHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwicGxheWVybnVtXCIpO1xuICAgICAgICBsZXQgeSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjb2xcIik7XG4gICAgICAgIGxldCB4ID0gdGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwicm93XCIpO1xuICAgICAgICBsZXQgcGxheWVyT2JqZWN0ID0gcGxheWVyTnVtYmVyID09IDEgPyBwbGF5ZXJzLnBsYXllcjEgOiBwbGF5ZXJzLnBsYXllcjI7XG4gICAgICAgIHBsYXllck9iamVjdC5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbeCx5XSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBSZWNlaXZlZCBhdHRhY2sgYXQgKCR7eH0sJHt5fSkgZm9yIHBsYXllciAke3BsYXllck51bWJlcn1gKTtcbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJBdHRhY2tlZCh0YXJnZXQpO1xuICAgICAgICBwbGF5ZXJPYmplY3QuYm9hcmRET00ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUJvYXJkQ2xpY2spO1xuICAgICAgICBhd2FpdCBzaG9ydFNsZWVwKCk7XG4gICAgICAgIGlmIChpc1NpbmdsZVBsYXllcil7XG4gICAgICAgICAgICBhd2FpdCBlbXVsYXRlQ29tcHV0ZXJUdXJuKCk7XG4gICAgICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlclR1cm5Db3VudGVyKHR1cm5Db3VudGVyKTtcbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJPYmplY3QuZ2FtZWJvYXJkLmlzQWxsU3VuaygpKXtcbiAgICAgICAgICAgIGVuZEdhbWUocGxheWVyTnVtYmVyKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgcGFzc1R1cm5UbyhwbGF5ZXJOdW1iZXIpOyAvLyBXZSBwYXNzIHR1cm4gdG8gcGxheWVyJ3MgYm9hcmQgd2UganVzdCBjbGlja2VkXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBlbXVsYXRlQ29tcHV0ZXJUdXJuID0gYXN5bmMgZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJFbXVsYXRpbmcgY29tcHV0ZXIncyB0dXJuXCIpXG4gICAgICAgIGNvbnN0IFtyLGNdID0gcGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5tYWtlRWR1Y2F0ZWRBdHRhY2socGxheWVycy5wbGF5ZXIxKTtcbiAgICAgICAgY29uc3QgaGl0VGFyZ2V0ID0gcGxheWVycy5wbGF5ZXIxLmJvYXJkRE9NLnF1ZXJ5U2VsZWN0b3IoYC5yb3ctJHtyfSBkaXY6bnRoLWNoaWxkKCR7YysxfSlgKVxuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlckF0dGFja2VkKGhpdFRhcmdldCk7XG4gICAgICAgIGlmIChwbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLmlzQWxsU3VuaygpKXtcbiAgICAgICAgICAgIGF3YWl0IHNob3J0U2xlZXAoKTtcbiAgICAgICAgICAgIGVuZEdhbWUoMSk7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGFjdGl2YXRlRXZlbnRMaXN0ZW5lcihwbGF5ZXJzLnBsYXllcjIuYm9hcmRET00pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHR1cm5Db3VudGVyO1xuICAgIGNvbnN0IGluaXRQbGF5ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgdHVybkNvdW50ZXIgPSAxO1xuICAgICAgICAvLyBhc3NpZ24gZXZlbnQgbGlzdGVuZXIgZm9yIGF0dGFja3NcbiAgICAgICAgLy8gbGF0ZXIgbWFrZSBmaXJzdCB0dXJuIHJhbmRvbSBvciBjaG9zZW5cbiAgICAgICAgcGxheWVycy5wbGF5ZXIyLmJvYXJkRE9NLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgICAgICBwYXNzVHVyblRvKDEpO1xuICAgICAgICBpZiAoaXNTaW5nbGVQbGF5ZXIpe1xuICAgICAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJUdXJuQ291bnRlcih0dXJuQ291bnRlcik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcbiAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuXG4gICAgbGV0IHBsYXllcnM7XG4gICAgbGV0IGlzU2luZ2xlUGxheWVyO1xuICAgIGNvbnN0IGluaXRHYW1lID0gZnVuY3Rpb24ocGxheWVyMU5hbWUgPSBcIlBsYXllciAxXCIsIHBsYXllcjJOYW1lID0gXCJQbGF5ZXIgMlwiKXtcbiAgICAgICAgY29uc3QgcGxheWVyMSA9IG5ldyBodW1hblBsYXllcihwbGF5ZXIxTmFtZSwgMSk7XG4gICAgICAgIGxldCBwbGF5ZXIyO1xuICAgICAgICBpZiAocGxheWVyMk5hbWUgPT0gZmFsc2Upe1xuICAgICAgICAgICAgcGxheWVyMiA9IG5ldyBjb21wdXRlclBsYXllcigyKTtcbiAgICAgICAgICAgIGlzU2luZ2xlUGxheWVyID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgcGxheWVyMiA9IG5ldyBodW1hblBsYXllcihwbGF5ZXIyTmFtZSwgMik7XG4gICAgICAgICAgICBpc1NpbmdsZVBsYXllciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFJlbmRlck1hbmFnZXIuaW5pdEdhbWVSZW5kZXIocGxheWVyMSwgcGxheWVyMik7XG4gICAgICAgIGNvbnN0IGJvYXJkMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtYW5kLWhlYWRlci5wbGF5ZXItMSAuYm9hcmQuY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBib2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLWFuZC1oZWFkZXIucGxheWVyLTIgLmJvYXJkLmNvbnRhaW5lclwiKTtcbiAgICAgICAgcGxheWVyMS5ib2FyZERPTSA9IGJvYXJkMTtcbiAgICAgICAgcGxheWVyMi5ib2FyZERPTSA9IGJvYXJkMjtcbiAgICAgICAgLy8gZWFjaCBwbGF5ZXIgaGFzIDUgc2hpcHMgb2Ygc2l6ZSAyLCAzLCAzLCA0LCA1XG4gICAgICAgIHBsYXllcnMgPSB7cGxheWVyMSwgcGxheWVyMn07XG4gICAgICAgIGVudGVyR2FtZVN0YWdpbmcoKTtcbiAgICAgICAgLy9qdXN0IGZvciB0ZXN0aW5nIVxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVpLmNvbnRhaW5lclwiKTtcbiAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBlbmRHYW1lKDEpKVxuICAgIH07XG5cbiAgICAvLyBwbGF5ZXIgd2l0aCBwbGF5ZXJOdW1iZXIgbG9zdFxuICAgIGNvbnN0IGVuZEdhbWUgPSBmdW5jdGlvbihwbGF5ZXJOdW1iZXIpe1xuICAgICAgICBsZXQgd2lubmVyTmFtZTtcbiAgICAgICAgaWYgKHBsYXllck51bWJlciA9PTEpe1xuICAgICAgICAgICAgd2lubmVyTmFtZSA9IHBsYXllcnMucGxheWVyMi5uYW1lO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICB3aW5uZXJOYW1lID0gcGxheWVycy5wbGF5ZXIxLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgUmVuZGVyTWFuYWdlci5yZW5kZXJFbmRHYW1lKHdpbm5lck5hbWUpO1xuICAgICAgICBhY3RpdmF0ZVJlcGxheUJ1dHRvbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlUmVwbGF5QnV0dG9uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgcmVwbGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5lbmQuY29udGFpbmVyIGJ1dHRvblwiKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVwbGF5QnV0dG9uKTtcbiAgICAgICAgcmVwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlbnRlckdhbWVTdGFnaW5nKTtcbiAgICB9XG5cbiAgICAvLyBTVEFSVCBPRiBDT0RFIFJFTEFURUQgVE8gR0FNRSBTVEFHSU5HXG4gICAgY29uc3QgZW50ZXJHYW1lU3RhZ2luZyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIGFjdGl2YXRlIGRyYWcgYW5kIGRyb3Agb2Ygc2hpcHMgdG8gY2hvb3NlIHNoaXAgbG9jYXRpb24gdXNpbmcgSFRNTCBkcmFnIGFuZCBkcm9wIEFQSSFcbiAgICAgICAgY29uc29sZS5sb2coXCJFbnRlcmluZyBuZXcgZ2FtZSBzdGFnaW5nIVwiKVxuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlclN0YWdpbmcoXG4gICAgICAgICAgICBwbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLmdldEF0dGFja01hcCgpLFxuICAgICAgICAgICAgcGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5nZXRCb2FyZE1hcCgpLFxuICAgICAgICAgICAgcGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5nZXRBdHRhY2tNYXAoKSxcbiAgICAgICAgICAgIHBsYXllcnMucGxheWVyMi5nYW1lYm9hcmQuZ2V0Qm9hcmRNYXAoKVxuICAgICAgICApO1xuICAgICAgICBwbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgICAgICAgcGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5yZXNldEJvYXJkKCk7XG4gICAgICAgIGFjdGl2YXRlU3RhZ2luZyhwbGF5ZXJzLnBsYXllcjEpXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVTdGFnaW5nID0gZnVuY3Rpb24ocGxheWVyKXtcbiAgICAgICAgY29uc3QgYm9hcmQxID0gcGxheWVyLmJvYXJkRE9NO1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnRvZ2dsZUJvYXJkVmlzaWJpbGl0eShib2FyZDEpO1xuICAgICAgICByZW5kZXJEcmFnZ2FibGVTaGlwc1RvU3RhZ2UocGxheWVyKTtcbiAgICAgICAgYWN0aXZhdGVEcm9wQW5kRHJhZ1N0YXJ0SGFuZGxlcihib2FyZDEpO1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlclN0YWdpbmdCdXR0b25zKGJvYXJkMSk7XG4gICAgICAgIGFjdGl2YXRlU3RhZ2luZ0J1dHRvbnMocGxheWVyKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJEcmFnZ2FibGVTaGlwc1RvU3RhZ2UgPSBmdW5jdGlvbihwbGF5ZXIpe1xuICAgICAgICBhZGROZXdTaGlwV2l0aERyYWdnaW5nKHBsYXllcixbMCwwXSxbMCwxXSlcbiAgICAgICAgYWRkTmV3U2hpcFdpdGhEcmFnZ2luZyhwbGF5ZXIsWzMsM10sWzQsM10sWzUsM10pO1xuICAgICAgICBhZGROZXdTaGlwV2l0aERyYWdnaW5nKHBsYXllcixbNyw3XSxbOCw3XSxbOSw3XSk7XG4gICAgICAgIGFkZE5ld1NoaXBXaXRoRHJhZ2dpbmcocGxheWVyLFswLDNdLCBbMCw0XSxbMCw1XSxbMCw2XSk7XG4gICAgICAgIGFkZE5ld1NoaXBXaXRoRHJhZ2dpbmcocGxheWVyLFs1LDVdLCBbNiw1XSxbNyw1XSxbOCw1XSxbOSw1XSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkTmV3U2hpcFdpdGhEcmFnZ2luZyA9IGZ1bmN0aW9uKHBsYXllciwgLi4uY29vcmRzKXtcbiAgICAgICAgYWRkTmV3U2hpcChwbGF5ZXIsIC4uLmNvb3Jkcyk7XG4gICAgICAgIHNldFNwZWNpZmljRHJhZ2dhYmxlKHBsYXllci5ib2FyZERPTSwgLi4uY29vcmRzKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRTcGVjaWZpY0RyYWdnYWJsZSA9IGZ1bmN0aW9uKGJvYXJkRE9NLCAuLi5jb29yZHMpe1xuICAgICAgICBmb3IgKGxldCBbeCx5XSBvZiBjb29yZHMpe1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gYm9hcmRET00ucXVlcnlTZWxlY3RvcihgLnJvdy0ke3h9IGRpdjpudGgtY2hpbGQoJHt5KzF9KWApO1xuICAgICAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlU3RhZ2luZ0J1dHRvbnMgPSBmdW5jdGlvbihwbGF5ZXIpe1xuICAgICAgICBjb25zdCBib2FyZERPTSA9IHBsYXllci5ib2FyZERPTTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gYm9hcmRET00ubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0Q2hpbGQ7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY29tcGxldGVTdGFnaW5nKGJvYXJkRE9NKSlcbiAgICAgICAgY29uc3Qgcm5nQnV0dG9uID0gYnV0dG9uLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgcm5nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiByYW5kb21pemVCb2FyZChwbGF5ZXIpKTtcbiAgICB9XG5cbiAgICBjb25zdCByYW5kb21pemVCb2FyZCA9IGZ1bmN0aW9uKHBsYXllcil7XG4gICAgICAgIFJlbmRlck1hbmFnZXIucmVuZGVyQm9hcmRSZXNldChwbGF5ZXIuZ2FtZWJvYXJkLmdldEF0dGFja01hcCgpLFxuICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLmdldEJvYXJkTWFwKCksIHBsYXllci5ib2FyZERPTSk7XG4gICAgICAgIGNvbnN0IHJhbmRvbUNvb3JkcyA9IHBsYXllci5nYW1lYm9hcmQucmFuZG9taXplQm9hcmQoKTtcbiAgICAgICAgLy8gcmFuZG9tQ29vcmRzIGlzIHtjb29yZHMxLCBjb29yZHMyLCAuLi4gY29vcmRzNX0gd2hlcmUgZWFjaCBjb29yZHMgaXMgYW4gYXJyYXkgb2YgW3gseV1zXG4gICAgICAgIGZvciAobGV0IGNvb3Jkc0FycmF5IG9mIE9iamVjdC52YWx1ZXMocmFuZG9tQ29vcmRzKSl7XG4gICAgICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlck5ld1NoaXAocGxheWVyLm51bWJlciwgLi4uY29vcmRzQXJyYXkpO1xuICAgICAgICAgICAgc2V0U3BlY2lmaWNEcmFnZ2FibGUocGxheWVyLmJvYXJkRE9NLCAuLi5jb29yZHNBcnJheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZVN0YWdpbmcgPSBhc3luYyBmdW5jdGlvbihib2FyZERPTSl7XG4gICAgICAgIGRlYWN0aXZhdGVTdGFnaW5nKGJvYXJkRE9NKTtcbiAgICAgICAgaWYgKGJvYXJkRE9NLmdldEF0dHJpYnV0ZShcInBsYXllcm51bVwiKSA9PSBcIjFcIiAmJiAhaXNTaW5nbGVQbGF5ZXIpe1xuICAgICAgICAgICAgUmVuZGVyTWFuYWdlci5yZXZlYWxEaWFsb2dXaXRoVGV4dChgTGV0ICR7cGxheWVycy5wbGF5ZXIyLm5hbWV9IHNldCB1cC5gKTtcbiAgICAgICAgICAgIGFjdGl2YXRlU3RhZ2luZyhwbGF5ZXJzLnBsYXllcjIpO1xuICAgICAgICB9IGVsc2UgaWYgKCFpc1NpbmdsZVBsYXllcil7XG4gICAgICAgICAgICBpbml0UGxheSgpO1xuICAgICAgICAgICAgUmVuZGVyTWFuYWdlci5yZXZlYWxEaWFsb2dXaXRoVGV4dChgJHtwbGF5ZXJzLnBsYXllcjEubmFtZX0ncyB0dXJuIGZpcnN0LmApO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAvLyB0aGlzIGNhc2UgaXMgd2hlbiBpdCBpcyBhIHNpbmdsZSBwbGF5ZXIgZ2FtZVxuICAgICAgICAgICAgcmFuZG9taXplQm9hcmQocGxheWVycy5wbGF5ZXIyKTtcbiAgICAgICAgICAgIGluaXRQbGF5KCk7XG4gICAgICAgICAgICBSZW5kZXJNYW5hZ2VyLnJldmVhbERpYWxvZ1dpdGhUZXh0KGBZb3VyIHR1cm4gZmlyc3QuYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkZWFjdGl2YXRlU3RhZ2luZyA9IGZ1bmN0aW9uKGJvYXJkRE9NKXtcbiAgICAgICAgUmVuZGVyTWFuYWdlci50b2dnbGVCb2FyZFZpc2liaWxpdHkoYm9hcmRET00pO1xuICAgICAgICBjb25zdCBidXR0b25BcmVhID0gYm9hcmRET00ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBidXR0b25BcmVhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYnV0dG9uQXJlYSk7XG4gICAgICAgIGNvbnN0IHJvd3MgPSBib2FyZERPTS5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDEwOyBpKyspe1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gcm93c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZXMgPSByb3cuY2hpbGRyZW47XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8MTA7IGorKyl7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gc3F1YXJlc1tqXTtcbiAgICAgICAgICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIG9uZHJhZ292ZXJIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZHJvcEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGRyYWdzdGFydEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5yZW1vdmVBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0YXJnZXQgaXMgPGRpdiBjb2w9XCJcIj4gKGVnOiBzcXVhcmUpXG4gICAgY29uc3QgZHJhZ3N0YXJ0SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgY29uc29sZS5sb2coXCJkcmFnIGV2ZW50IHRyaWdnZXJlZFwiKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBsZXQgc2hpcExlbmd0aCA9IE51bWJlcih0YXJnZXQuZ2V0QXR0cmlidXRlKFwibGVuZ3RoXCIpKTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJzaGlwTGVuZ3RoXCIsIHNoaXBMZW5ndGgpO1xuICAgICAgICBsZXQgZ3JhYkxvY2F0aW9uID0gTnVtYmVyKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJncmFibG9jYXRpb25cIikpO1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImdyYWJMb2NhdGlvblwiLCBncmFiTG9jYXRpb24pO1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImhvcml6b250YWxcIiwgdGFyZ2V0LmdldEF0dHJpYnV0ZShcImhvcml6b250YWxcIikpO1xuICAgICAgICBsZXQgc3RhcnRSb3cgPSBOdW1iZXIodGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwicm93XCIpKTtcbiAgICAgICAgbGV0IHN0YXJ0Q29sID0gTnVtYmVyKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjb2xcIikpO1xuICAgICAgICBsZXQgaXNIb3Jpem9udGFsID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImhvcml6b250YWxcIik7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwic3RhcnRSb3dcIiwgc3RhcnRSb3cpO1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInN0YXJ0Q29sXCIsIHN0YXJ0Q29sKTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJpc0hvcml6b250YWxcIiwgaXNIb3Jpem9udGFsKVxuICAgICAgICBjb25zdCB3aWR0aE9mRGl2ID0gMjA7XG4gICAgICAgIGNvbnN0IHdpZHRoT2ZHYXAgPSAxO1xuICAgICAgICAvLyBpZiBncmFibG9jYXRpb24gPSAwLCBkb24ndCBhZGQgYW55dGhpbmdcbiAgICAgICAgLy8gaWYgZ3JhYmxvY2F0aW9uID0gMSwgYWRkIDEgZ2FwIGFuZCAxIGRpdlxuICAgICAgICAvLyBpZiBncmFibG9jYXRpb24gPSAyLCBhZGQgMiBnYXBzIGFuZCAyIGRpdnNcbiAgICAgICAgbGV0IGFkZE9mZnNldFggPSAwO1xuICAgICAgICBsZXQgYWRkT2Zmc2V0WSA9IDA7XG4gICAgICAgIGxldCBkcmFnSW1hZ2VOb2RlO1xuICAgICAgICBpZiAoaXNIb3Jpem9udGFsID09IFwidHJ1ZVwiKXtcbiAgICAgICAgICAgIGRyYWdJbWFnZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaGlkZGVuLnNhbXBsZXMgLnNoaXBzLmhvcml6b250YWwgI2xlbmd0aC0ke3NoaXBMZW5ndGh9YCk7XG4gICAgICAgICAgICBhZGRPZmZzZXRYID0gKGdyYWJMb2NhdGlvbiAqICh3aWR0aE9mRGl2K3dpZHRoT2ZHYXApKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgZHJhZ0ltYWdlTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5oaWRkZW4uc2FtcGxlcyAuc2hpcHMudmVydGljYWwgI2xlbmd0aC0ke3NoaXBMZW5ndGh9YCk7XG4gICAgICAgICAgICBhZGRPZmZzZXRZID0gKGdyYWJMb2NhdGlvbiAqICh3aWR0aE9mRGl2K3dpZHRoT2ZHYXApKVxuICAgICAgICB9XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoZHJhZ0ltYWdlTm9kZSxldmVudC5vZmZzZXRYICsgYWRkT2Zmc2V0WCxldmVudC5vZmZzZXRZK2FkZE9mZnNldFkpO1xuICAgICAgICAvLyBkeW5hbWljYWxseSBhbGxvdyB3aGVyZSB3ZSBjYW4gZHJvcCB3aXRoIG9uZHJhZ292ZXIgYXR0cmlidXRlXG4gICAgICAgIGNvbnN0IHBsYXllck51bSA9IHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwicGxheWVybnVtXCIpO1xuICAgICAgICBsZXQgcGxheWVyVmFyO1xuICAgICAgICBpZiAocGxheWVyTnVtID09MSl7XG4gICAgICAgICAgICBwbGF5ZXJWYXIgPSBwbGF5ZXJzLnBsYXllcjE7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHBsYXllclZhciA9IHBsYXllcnMucGxheWVyMjtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInBsYXllcm51bVwiLCBwbGF5ZXJOdW0pO1xuICAgICAgICBjb25zdCBzaGlwT2JqZWN0ID0gcGxheWVyVmFyLmdhbWVib2FyZC5nZXRTaGlwRnJvbUNvb3Jkcyhbc3RhcnRSb3csIHN0YXJ0Q29sXSk7XG4gICAgICAgIHBsYXllclZhci5nYW1lYm9hcmQuY3JlYXRlQWxsb3dlZFBvc2l0aW9uTWFwKHNoaXBPYmplY3QsIGlzSG9yaXpvbnRhbCwgZ3JhYkxvY2F0aW9uKTtcbiAgICAgICAgYWN0aXZhdGVPbmRyYWdvdmVyKHBsYXllclZhcik7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVPbmRyYWdvdmVyID0gZnVuY3Rpb24ocGxheWVyKXtcbiAgICAgICAgY29uc3Qgcm93cyA9IHBsYXllci5ib2FyZERPTS5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDEwOyBpKyspe1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gcm93c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZXMgPSByb3cuY2hpbGRyZW47XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8MTA7IGorKyl7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gc3F1YXJlc1tqXTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGAke3BsYXllci5nYW1lYm9hcmQuaXNUaGlzQWxsb3dlZFBsYWNlbWVudChbaSxqXSl9YClcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5pc1RoaXNBbGxvd2VkUGxhY2VtZW50KFtpLGpdKSl7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgb25kcmFnb3ZlckhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBkcmFnb3ZlciBhbGxvd2VkIG9uIFske2l9LCAke2p9XWApXG4gICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIG9uZHJhZ292ZXJIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgZHJhZ292ZXIgbm90IGFsbG93ZWQgb24gWyR7aX0sICR7an1dYClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZURyb3BBbmREcmFnU3RhcnRIYW5kbGVyID0gZnVuY3Rpb24ocGxheWVyQm9hcmQpe1xuICAgICAgICBmb3IgKGxldCByb3cgb2YgcGxheWVyQm9hcmQuY2hpbGRyZW4pe1xuICAgICAgICAgICAgZm9yIChsZXQgY29sIG9mIHJvdy5jaGlsZHJlbil7XG4gICAgICAgICAgICAgICAgY29sLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGRyb3BIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBjb2wuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnc3RhcnRIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9uZHJhZ292ZXJIYW5kbGVyID0gZnVuY3Rpb24oZXYpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImRyYWdvdmVyIGRldGVjdGVkIVwiKVxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGRyb3BIYW5kbGVyID0gZnVuY3Rpb24oZXYpe1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCByb3cgPSBOdW1iZXIoZXYudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwicm93XCIpKTtcbiAgICAgICAgY29uc3QgY29sID0gTnVtYmVyKGV2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjb2xcIikpO1xuICAgICAgICBsZXQgbmV3U3RhcnRSb3cgPSByb3c7XG4gICAgICAgIGxldCBvbGRTdGFydFJvdyA9IE51bWJlcihldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInN0YXJ0Um93XCIpKTtcbiAgICAgICAgbGV0IG5ld1N0YXJ0Q29sID0gY29sO1xuICAgICAgICBsZXQgb2xkU3RhcnRDb2wgPSBOdW1iZXIoZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJzdGFydENvbFwiKSk7XG4gICAgICAgIGNvbnN0IGdyYWJMb2NhdGlvbiA9IE51bWJlcihldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImdyYWJMb2NhdGlvblwiKSk7XG4gICAgICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiaXNIb3Jpem9udGFsXCIpO1xuICAgICAgICBpZiAoaXNIb3Jpem9udGFsID09IFwidHJ1ZVwiKXtcbiAgICAgICAgICAgIG5ld1N0YXJ0Q29sIC09IGdyYWJMb2NhdGlvbjtcbiAgICAgICAgICAgIG9sZFN0YXJ0Q29sIC09IGdyYWJMb2NhdGlvbjtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgbmV3U3RhcnRSb3cgLT0gZ3JhYkxvY2F0aW9uO1xuICAgICAgICAgICAgb2xkU3RhcnRSb3cgLT0gZ3JhYkxvY2F0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBsYXllck51bSA9IGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwicGxheWVybnVtXCIpO1xuICAgICAgICBsZXQgcGxheWVyO1xuICAgICAgICBpZiAocGxheWVyTnVtID09MSl7XG4gICAgICAgICAgICBwbGF5ZXIgPSBwbGF5ZXJzLnBsYXllcjE7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHBsYXllciA9IHBsYXllcnMucGxheWVyMjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gTnVtYmVyKGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwic2hpcExlbmd0aFwiKSk7XG4gICAgICAgIC8vIGNoYW5nZSB0aGUgZ2FtZWJvYXJkIGRhdGFcbiAgICAgICAgcGxheWVyLmdhbWVib2FyZC5tb3ZlU2hpcChwbGF5ZXIuZ2FtZWJvYXJkLmdldFNoaXBGcm9tQ29vcmRzKFtvbGRTdGFydFJvdyxvbGRTdGFydENvbF0pLFxuICAgICAgICBbbmV3U3RhcnRSb3csbmV3U3RhcnRDb2xdLCBzaGlwTGVuZ3RoLCBpc0hvcml6b250YWwpO1xuICAgICAgICAvLyByZW5kZXIgY2hhbmdlcyBhbmQgYWxzbyBtYW5hZ2VzIGRyYWdnYWJsZVxuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlck1vdmVTaGlwKFtvbGRTdGFydFJvdyxvbGRTdGFydENvbF0sXG4gICAgICAgIFtuZXdTdGFydFJvdyxuZXdTdGFydENvbF0sIHNoaXBMZW5ndGgsIGlzSG9yaXpvbnRhbCwgcGxheWVyLmJvYXJkRE9NKTtcbiAgICB9XG4gICAgLy8gRU5EIE9GIENPREUgUkVMQVRFRCBUTyBTVEFHSU5HXG5cbiAgICBjb25zdCBzaG9ydFNsZWVwID0gZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSk7XG4gICAgfVxuXG4gICAgLy8gUHJlZ2FtZSBjb2RlIChsaWtlIHdoZXJlIHlvdSBwdXQgcGxheWVyIG5hbWVzIGFuZCBjaG9vc2UgZ2FtZSB0eXBlKVxuICAgIGNvbnN0IGluaXRQcmVnYW1lID0gZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gcmVuZGVycyB0aXRsZSwgZ2FtZSBtb2RlIHNlbGVjdGlvbiwgZm9ybSBmb3IgbmFtZXMsIGJ1dHRvbiB0byBzdGFydFxuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlclByZWdhbWUoKTtcbiAgICAgICAgYWN0aXZhdGVQcmVnYW1lQnV0dG9ucygpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlUHJlZ2FtZUJ1dHRvbnMgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBidXR0b25zQXJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmVnYW1lLmNvbnRhaW5lciAuYnV0dG9uLmNvbnRhaW5lciAuYnV0dG9uXCIpO1xuICAgICAgICBidXR0b25zQXJyWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBoYW5kbGVQcmVnYW1lQnV0dG9uQ2xpY2sodHJ1ZSkpO1xuICAgICAgICBidXR0b25zQXJyWzFdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBoYW5kbGVQcmVnYW1lQnV0dG9uQ2xpY2soZmFsc2UpKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQcmVnYW1lQnV0dG9uQ2xpY2sgPSBmdW5jdGlvbihpc1NpbmdsZVBsYXllcil7XG4gICAgICAgIFJlbmRlck1hbmFnZXIucmVuZGVyUGxheWVyTmFtZUZvcm0oaXNTaW5nbGVQbGF5ZXIpO1xuICAgICAgICBSZW5kZXJNYW5hZ2VyLnJlbmRlckZvcm1CdXR0b24oaXNTaW5nbGVQbGF5ZXIpO1xuICAgICAgICBhY3RpdmF0ZUZvcm1CdXR0b25zKGlzU2luZ2xlUGxheWVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZUZvcm1CdXR0b25zID0gZnVuY3Rpb24oaXNTaW5nbGVQbGF5ZXIpe1xuICAgICAgICBjb25zdCBmb3JtU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVnYW1lLmNvbnRhaW5lciAuZm9ybS5zdWJtaXRcIik7XG4gICAgICAgIGZvcm1TdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4gaGFuZGxlRm9ybVN1Ym1pdChldmVudCxpc1NpbmdsZVBsYXllcikpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBmdW5jdGlvbihldmVudCxpc1NpbmdsZVBsYXllcil7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgbGV0IGZvcm0xVmFsdWUgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLm5hbWUuaW5wdXRcIikudmFsdWU7XG4gICAgICAgIGlmIChmb3JtMVZhbHVlID09XCJcIil7XG4gICAgICAgICAgICBmb3JtMVZhbHVlID0gXCJQbGF5ZXIgMVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1NpbmdsZVBsYXllcil7XG4gICAgICAgICAgICBpbml0R2FtZShmb3JtMVZhbHVlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZm9ybTJWYWx1ZSA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIubmFtZS5pbnB1dDpudGgtY2hpbGQoMilcIikudmFsdWU7XG4gICAgICAgICAgICBpZiAoZm9ybTJWYWx1ZSA9PVwiXCIpe1xuICAgICAgICAgICAgICAgIGZvcm0yVmFsdWUgPSBcIlBsYXllciAyXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbml0R2FtZShmb3JtMVZhbHVlLGZvcm0yVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyBEUklWRVIgQ09ERVxuICAgIGluaXRQcmVnYW1lKCk7XG5cbiAgICByZXR1cm57XG4gICAgICAgIHBsYXllcnMsXG4gICAgfVxufSgpO1xuXG5leHBvcnQge0dhbWVNYW5hZ2VyfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==