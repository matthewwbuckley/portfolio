module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ ({

/***/ "./components/Icon.js":
/*!****************************!*\
  !*** ./components/Icon.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Websites\\portfolio\\components\\Icon.js";


function Icon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.icon, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.text));
}

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Icon */ "./components/Icon.js");
var _jsxFileName = "D:\\Websites\\portfolio\\pages\\index.js";



class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, "Hi! Welcome to my site."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "I am a self taught web developer with a PhD in Chemistry. I am comfortable with foundational web based technologies."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex-row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        class: "devicon-html5-plain",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }),
      text: 'html5',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        class: "devicon-css3-plain",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }),
      text: 'CSS3',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        class: "devicon-javascript-plain",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }),
      text: 'JS/ES6',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "I am growing in confidence with the MERN Stack. I have more experience with front-end development but have developed full stack applications."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex-row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        class: "devicon-react-original",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }),
      text: 'react',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        class: "devicon-express-original",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }),
      text: 'express',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        class: "devicon-mongodb-plain",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }),
      text: 'mongodb',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        class: "devicon-nodejs-plain",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }),
      text: 'nodejs',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "I have some experience with the following connected technologies:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex-row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        class: "devicon-sass-original",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }),
      text: 'sass',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "static/next-js.svg",
        alt: "next",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }),
      text: 'next',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "static/gatsby.svg",
        alt: "next",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }),
      text: 'gatsby',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "static/strapi.svg",
        alt: "next",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }),
      text: 'strapi',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        class: "devicon-git-plain",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }),
      text: 'git',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "My PhD now comes under \"transferable skills\", so let me discuss it briefly. I investigated small molecule desorption from Ionic Liquids to characterise their interactions  while under Ultra-High Vacuum conditions. The work helped develop a deliberate and methodical approach to problems, and working as a team helped develop my communications skills. Towards the end of my PhD I found that I really enjoyed develping tools to analyse my data, and decided to pursue programming."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "I am quiet, patient, and happily boring. I have an interest in games, science, politics, and technology. Before getting into web development I had a go at game development and developed a game for android, a discussion of which can be seen in my projects."));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Websites\portfolio\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map