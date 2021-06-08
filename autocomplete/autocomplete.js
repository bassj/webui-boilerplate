/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ui-autocomplete-menu {\n    border: 1px solid black;\n    border-top: none;\n    overflow: hidden;\n\n    overflow-y: auto;\n\n    margin: 0;\n    padding: 0;\n\n    flex-direction: column;\n\n    max-height: 300px;\n\n    z-index: 9999;\n}\n\n.ui-autocomplete-menu .ui-menu-item {\n    border: none;\n    outline: none;\n\n    background-color: white;\n    color: black;\n\n    cursor: pointer;\n    user-select: none;\n\n    text-align: left;\n\n    list-style: none;\n\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    padding-left: 0.5rem;\n}\n\n.ui-autocomplete-menu .ui-menu-item:focus,\n.ui-autocomplete-menu .ui-menu-item.focus {\n    background-color: gray;\n}\n\nui-autocomplete input {\n    border: 1px solid black;\n    padding: 0.5rem;\n}\n\nui-autocomplete.form-control {\n    display: unset;\n    padding: unset;\n    border:unset;\n}\n\nui-autocomplete.form-control input {\n    display: block;\n    width: 100%;\n    padding: .375rem .75rem;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #212529;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    border-radius: .25rem;\n    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n}\n\n.form-control.ui-autocomplete-menu {\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #212529;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    border-radius: .25rem;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n}\n\n.form-control.ui-autocomplete-menu .ui-menu-item.focus {\n    background-color: #f1f3f5;\n}\n\n.input-group ui-autocomplete.form-control input {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(1);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./autocomplete/src/autocomplete.css
var autocomplete = __webpack_require__(0);

// CONCATENATED MODULE: ./autocomplete/src/autocomplete.css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(autocomplete["a" /* default */], options);



/* harmony default export */ var src_autocomplete = (autocomplete["a" /* default */].locals || {});
// CONCATENATED MODULE: ./autocomplete/src/autocomplete.js


class UIAutocomplete extends HTMLElement {
    constructor() {
        super();

        this._source = [];
        this.suggestions = [];
        this._selectedSuggestion = -1;
        this._typedValue = "";
        this._sourceFunction = function (input, source) {
            return source.filter(source => source.value.toLowerCase().includes(input) && input.length > 0);
        };

        this.inputElement = null;
        this.sourceElement = null;
        this.overlayElement = document.createElement('ul');
        this.overlayElement.style.display = "none";
        this.overlayElement.style.position = "absolute";
        this.overlayElement.classList.add("ui-autocomplete-menu");
        this.overlayElement.setAttribute("tabindex", "-1");
        this.overlayElement.setAttribute("role", "listbox");
        this.overlayElement.setAttribute("aria-expanded", "false");


        document.addEventListener('DOMContentLoaded', () => {
            this.overlayElement.setAttribute("id", this.id+"-suggestions");

            if (this.dataset.overlayClass) {
                for (const cls of this.dataset.overlayClass.split(/[ ,]+/)) {
                    this.overlayElement.classList.add(cls);
                }
            } else {
                for (const cls of this.classList) {
                    this.overlayElement.classList.add(cls);
                }
            }

            this.inputElement = this.querySelector("input");
            this.inputElement.setAttribute("aria-autocomplete", "list");
            this.inputElement.setAttribute("aria-owns", this.overlayElement.id);
            this.inputElement.setAttribute("role", "combobox");

            if ('source' in this.inputElement.dataset) {
                this.sourceElement = document.getElementById(this.inputElement.dataset.source);

                let cntr = 0;

                for (const child of this.sourceElement.children) {
                    const overlay = document.createElement('li');
                    overlay.setAttribute("id", this.overlayElement.id + "-opt-" + cntr);
                    overlay.setAttribute("role", "option");
                    overlay.classList.add("ui-menu-item");
                    overlay.innerText = child.value;
                    
                    const source = {    
                        value: child.value,
                        overlayElement: overlay
                    };

                    overlay.addEventListener("mouseover", () => {
                        const index = this.suggestions.indexOf(source);
                        if (this._selectedSuggestion > -1) {
                            this.suggestions[this._selectedSuggestion].overlayElement.classList.remove("focus");
                        }
                        
                        this._selectedSuggestion = index;
                        overlay.classList.add("focus");
                    });

                    this._source.push(source);
                    this.overlayElement.appendChild(overlay);
                    cntr++;
                }
            }

            this.inputElement.addEventListener("focus", () => {                
                this._selectedSuggestion = -1;
            });

            this.inputElement.addEventListener("blur", () => {
                this.hideSuggestions();
            });

            this.inputElement.addEventListener("keyup", (e) => {
                if (e.key == "Enter") {
                    this.hideSuggestions();
                }
            });

            this.inputElement.addEventListener("keydown", (e) => {
                if (e.key == "ArrowDown") {
                    this.nextFocus();
                } else if (e.key == "ArrowUp") {
                    if (this._selectedSuggestion > -1) {
                        this.prevFocus();
                        e.preventDefault();
                    }
                }
            });

            this.inputElement.addEventListener("input", (e) => {
                this._typedValue = this.inputElement.value;
                this.updateSuggestions();
            });

            this.overlayElement.addEventListener("mousedown", (e) => {
                e.preventDefault();
            });

            this.overlayElement.addEventListener("mouseup", (e) => {
                if (this._selectedSuggestion > -1) {
                    const suggestion = this.suggestions[this._selectedSuggestion];
                    this.inputElement.value = suggestion.value;
                    this._typedValue = suggestion.value;
                    this.updateSuggestions();
                    this.hideSuggestions();
                }
            });
        });
    }

    set source(value) {
        
    }

    connectedCallback() {
        document.body.appendChild(this.overlayElement);
    }

    disconnectedCallback() {
        document.body.removeChild(this.overlayElement);
    }

    showSuggestions() {
        this.overlayElement.style.display = "flex";
        this.overlayElement.setAttribute("aria-hidden", "false");
        this.overlayElement.setAttribute("aria-expanded", "true");
        
        const rect = this.inputElement.getBoundingClientRect();

        this.overlayElement.style.width = (rect.right - rect.left) + "px";
        this.overlayElement.style.left = rect.left + "px";
        this.overlayElement.style.top = rect.bottom + "px";
    }

    hideSuggestions() {
        this.overlayElement.style.display = "none";
        this.overlayElement.setAttribute("aria-hidden", "true");
        this.overlayElement.setAttribute("aria-expanded", "false");
        
    }

    updateSuggestions() {
        const value = this._typedValue.toLowerCase();

        this.suggestions = this._sourceFunction(value, this._source);

        for (const item of this._source) {
            if (this.suggestions.includes(item)) {
                item.overlayElement.style.display = "block";
                this.suggestions.push(item);
            } else {
                item.overlayElement.style.display = "none";
                item.overlayElement.classList.remove("focus");
            }
        }

        if (this.suggestions.length == 0) {
            this._selectedSuggestion = -1;
            this.hideSuggestions();
        } else {
            if (this._selectedSuggestion >= this.suggestions.length) {
                this._selectedSuggestion = this.suggestions.length - 1;
            }
            this.showSuggestions();
        }
    }

    nextFocus() {
        if (this._selectedSuggestion + 1 < this.suggestions.length) {
            if (this._selectedSuggestion > -1) {
                this.suggestions[this._selectedSuggestion].overlayElement.classList.remove("focus");
            }
            this._selectedSuggestion += 1;
            const suggestion = this.suggestions[this._selectedSuggestion];
            suggestion.overlayElement.classList.add("focus");
            this.inputElement.value = "";
            this.inputElement.value = suggestion.value;
        }
    }

    prevFocus() {
        if (this._selectedSuggestion > -1) {
            this.suggestions[this._selectedSuggestion].overlayElement.classList.remove("focus");
            this._selectedSuggestion -= 1;

            if (this._selectedSuggestion == -1) {
                this.inputElement.focus();
                this.suggestions[0].overlayElement.classList.remove("focus");
            } else {
                const suggestion = this.suggestions[this._selectedSuggestion];
                suggestion.overlayElement.classList.add("focus");
                this.inputElement.value = "";
                this.inputElement.value = suggestion.value;
            }
        }
    }
}

window.customElements.define('ui-autocomplete', UIAutocomplete);

/***/ })
/******/ ]);