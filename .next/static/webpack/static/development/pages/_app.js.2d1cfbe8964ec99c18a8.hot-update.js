webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./layout/MainLeft.js":
/*!****************************!*\
  !*** ./layout/MainLeft.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _components_NavigationMain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NavigationMain */ "./components/NavigationMain.js");

var _jsxFileName = "D:\\Websites\\portfolio\\layout\\MainLeft.js";




const transitionDuration = 0.6;
const transitionStyles = {
  start: {
    opacity: 0,
    color: '#77BA99',
    filter: 'blur(1px)',
    position: 'absolute',
    ease: gsap__WEBPACK_IMPORTED_MODULE_3__["SlowMo"].easeInOut
  },
  end: {
    opacity: 1,
    color: null,
    filter: 'blur(0px)',
    delay: transitionDuration,
    ease: gsap__WEBPACK_IMPORTED_MODULE_3__["SlowMo"].easeInOut
  }
};

const navEnter = component => {
  let _transitionStyles$sta = transitionStyles.start,
      {
    position
  } = _transitionStyles$sta,
      cleanStart = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_transitionStyles$sta, ["position"]);

  let _transitionStyles$end = transitionStyles.end,
      {
    delay
  } = _transitionStyles$end,
      cleanEnd = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_transitionStyles$end, ["delay"]);

  gsap__WEBPACK_IMPORTED_MODULE_3__["TweenLite"].set(component, cleanStart);
  gsap__WEBPACK_IMPORTED_MODULE_3__["TweenLite"].to(component, transitionDuration * 1.5, cleanEnd);
};

const enter = component => {
  gsap__WEBPACK_IMPORTED_MODULE_3__["TweenLite"].set(component, transitionStyles.start);
  gsap__WEBPACK_IMPORTED_MODULE_3__["TweenLite"].to(component, transitionDuration, transitionStyles.end);
};

const exit = component => {
  gsap__WEBPACK_IMPORTED_MODULE_3__["TweenLite"].set(component, transitionStyles.end);
  gsap__WEBPACK_IMPORTED_MODULE_3__["TweenLite"].to(component, transitionDuration, transitionStyles.start);
};

class MainLeft extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const {
      component,
      app
    } = this.props;
    const componentWithProps = react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(component, {
      app
    });
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "main-left",
      ref: this.ref,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["Transition"], {
      in: true,
      appear: !this.props.app.state.hasMounted,
      timeout: 0,
      onEnter: component => {
        navEnter(component);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_NavigationMain__WEBPACK_IMPORTED_MODULE_4__["default"], {
      app: app,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["TransitionGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["Transition"], {
      appear: true,
      timeout: {
        enter: transitionDuration * 1000,
        exit: transitionDuration * 1000
      },
      key: this.props.app.props.router.route,
      onEnter: component => {
        enter(component);
      },
      onExit: component => {
        exit(component);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, componentWithProps)));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (MainLeft);

/***/ })

})
//# sourceMappingURL=_app.js.2d1cfbe8964ec99c18a8.hot-update.js.map