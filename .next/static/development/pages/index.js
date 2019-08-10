(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./components/Icon.js":
/*!****************************!*\
  !*** ./components/Icon.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=D%3A%5CWebsites%5Cportfolio%5Cpages%5Cindex.js!./":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=D%3A%5CWebsites%5Cportfolio%5Cpages%5Cindex.js ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var page = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_7aff549c98b978433226 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_7aff549c98b978433226 */ "dll-reference dll_7aff549c98b978433226"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ 1:
/*!***************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=D%3A%5CWebsites%5Cportfolio%5Cpages%5Cindex.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=D%3A%5CWebsites%5Cportfolio%5Cpages%5Cindex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=D%3A%5CWebsites%5Cportfolio%5Cpages%5Cindex.js!./");


/***/ }),

/***/ "dll-reference dll_7aff549c98b978433226":
/*!*******************************************!*\
  !*** external "dll_7aff549c98b978433226" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_7aff549c98b978433226;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map