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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _home = __webpack_require__(11);

var _home2 = _interopRequireDefault(_home);

var _about = __webpack_require__(15);

var _about2 = _interopRequireDefault(_about);

var _quotes = __webpack_require__(16);

var _quotes2 = _interopRequireDefault(_quotes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
    path: '/',
    exact: true,
    component: _home2.default
}, {
    path: '/about',
    exact: true,
    component: _about2.default
}, {
    path: '/quotes',
    exact: true,
    component: _quotes2.default
}];

exports.default = routes;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(6);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(7);

var _cors2 = _interopRequireDefault(_cors);

var _https = __webpack_require__(8);

var _https2 = _interopRequireDefault(_https);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(9);

var _app = __webpack_require__(10);

var _app2 = _interopRequireDefault(_app);

var _html = __webpack_require__(22);

var _html2 = _interopRequireDefault(_html);

var _serializeJavascript = __webpack_require__(23);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactRouterDom = __webpack_require__(1);

var _routes = __webpack_require__(3);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 3000;
var server = (0, _express2.default)();
server.use((0, _cors2.default)());
server.use(_express2.default.static('public'));

server.get('*', function (req, res) {
  var activeRoute = _routes2.default.find(function (route) {
    return (0, _reactRouterDom.matchPath)(req.url, route);
  }) || {};

  var body = (0, _server.renderToString)(_react2.default.createElement(
    _reactRouterDom.StaticRouter,
    { location: req.url, context: {} },
    _react2.default.createElement(_app2.default, null)
  ));

  res.send((0, _html2.default)({
    body: body,
    initialState: (0, _serializeJavascript2.default)({})
  }));
});

server.listen(port);
console.log('Serving at http://localhost:' + port);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _routes = __webpack_require__(3);

var _routes2 = _interopRequireDefault(_routes);

var _navigation = __webpack_require__(17);

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_navigation2.default, null),
        _routes2.default.map(function (_ref) {
            var path = _ref.path,
                exact = _ref.exact,
                C = _ref.component;
            return _react2.default.createElement(_reactRouterDom.Route, {
                key: path,
                path: path,
                exact: exact,
                render: function render() {
                    return _react2.default.createElement(C, null);
                }
            });
        })
    );
};

exports.default = App;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(4);

var _reactBootstrap = __webpack_require__(2);

var _experience = __webpack_require__(12);

var _experience2 = _interopRequireDefault(_experience);

var _thoughtImage = __webpack_require__(13);

var _thoughtImage2 = _interopRequireDefault(_thoughtImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.state = {
      hide: false
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({ hide: true });
      }, 2500);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_thoughtImage2.default, { hide: this.state.hide }),
        this.state.hide && _react2.default.createElement(
          'div',
          { className: 'home_container' },
          _react2.default.createElement(
            _reactBootstrap.Grid,
            null,
            _react2.default.createElement(
              _reactBootstrap.Row,
              { className: 'show-grid' },
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 12, md: 4 },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('img', { src: '/img/profile.jpg', alt: 'Technology Quote' })
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 12, md: 8 },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'h2',
                    null,
                    '"A champion loves being challenged because that\'s the way you get to prove you\'re still the champion."'
                  ),
                  _react2.default.createElement(
                    'h4',
                    { className: 'summary' },
                    'Computer Science Graduate and Full Stack Engineer Working for PayPal. I enjoy writing elegant, modular, re-usable and well-tested code. Enjoy functional programming principles and using the latest ES features and Striving to build re-usable modules.'
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Panel,
              { style: { marginTop: "20px" } },
              _react2.default.createElement(
                _reactBootstrap.Panel.Heading,
                null,
                _react2.default.createElement(
                  _reactBootstrap.Panel.Title,
                  { componentClass: 'h3' },
                  'Education'
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Panel.Body,
                null,
                _react2.default.createElement(
                  _reactBootstrap.Row,
                  { className: 'show-grid' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 6, md: 4 },
                    _react2.default.createElement(
                      'h4',
                      null,
                      'University of Illinois Springfield'
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 6, md: 8 },
                    _react2.default.createElement(
                      'p',
                      null,
                      'Master\u2019s Degree, Computer Science'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      '2015-2016'
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.Row,
                  { className: 'show-grid' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 6, md: 4 },
                    _react2.default.createElement(
                      'h4',
                      null,
                      'Bharat Institute of Engineering and Technology'
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 6, md: 8 },
                    _react2.default.createElement(
                      'p',
                      null,
                      'Bachelors\u2019s Degree, Computer Science'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      '2011-2015'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Panel,
              null,
              _react2.default.createElement(
                _reactBootstrap.Panel.Heading,
                null,
                _react2.default.createElement(
                  _reactBootstrap.Panel.Title,
                  { componentClass: 'h3' },
                  'Experience'
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Panel.Body,
                null,
                _react2.default.createElement(
                  _reactBootstrap.Row,
                  { className: 'show-grid' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 6, md: 4 },
                    _react2.default.createElement(
                      'h4',
                      null,
                      'PayPal'
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 6, md: 8 },
                    _react2.default.createElement(
                      'ul',
                      null,
                      _experience2.default.PayPal.map(function (val, index) {
                        return _react2.default.createElement(
                          'li',
                          { key: index },
                          val
                        );
                      })
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.Row,
                  { className: 'show-grid' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 6, md: 4 },
                    _react2.default.createElement(
                      'h4',
                      null,
                      'Verizon Wireless'
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 6, md: 8 },
                    _react2.default.createElement(
                      'ul',
                      null,
                      _experience2.default.Verizon.map(function (val, index) {
                        return _react2.default.createElement(
                          'li',
                          { key: index },
                          val
                        );
                      })
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.Row,
                  { className: 'show-grid' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 6, md: 4 },
                    _react2.default.createElement(
                      'h4',
                      null,
                      'University of Illinois'
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 6, md: 8 },
                    _react2.default.createElement(
                      'ul',
                      null,
                      _experience2.default.UIS.map(function (val, index) {
                        return _react2.default.createElement(
                          'li',
                          { key: index },
                          val
                        );
                      })
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.Row,
                  { className: 'show-grid' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 6, md: 4 },
                    _react2.default.createElement(
                      'h4',
                      null,
                      'Bharat Institute of Engineering and Technology'
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 6, md: 8 },
                    _react2.default.createElement(
                      'ul',
                      null,
                      _experience2.default.BIET.map(function (val, index) {
                        return _react2.default.createElement(
                          'li',
                          { key: index },
                          val
                        );
                      })
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.Row,
                  { className: 'show-grid' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 6, md: 4 },
                    _react2.default.createElement(
                      'h4',
                      null,
                      'CMC Limited'
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 6, md: 8 },
                    _react2.default.createElement(
                      'ul',
                      null,
                      _experience2.default.CMC.map(function (val, index) {
                        return _react2.default.createElement(
                          'li',
                          { key: index },
                          val
                        );
                      })
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

;

exports.default = Home;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {"PayPal":["Develop new user-facing features and ensure the technical feasibility of UI/UX designs.","Implement business logic on both server side and client side using JavaScript, NodeJS, ReactJS, and Redux.","Programing with PayPal proprietary languages.","Designing UI components that can be reusable and are mostly configuration based.","Optimize applications for better performance, cross-browser compatible and scalability.","Handling live production issues and providing solutions to the issues.","Build web markup, including HTML5, CSS3 and server-side CSS pre-processing platforms, such as LESS and SASS.","Perform refactoring (change the internal structure of software) on code based to reduce code complexity and increase code extensibility and maintainability.","Create and maintain technical design documents of applications and workflow process for and within PayPal.","Implement unit testing to validate each unit of the application performs as designed."],"Verizon":["Developed the UI responsible for creating an efficient design and developing User Interaction screens using ReactJS, Redux-form, HTML5, CSS3, JavaScript and JSON."," Build web markup, including server-side CSS pre-processing platforms, such as LESS and SASS."," Prototyping and analyzing Responsive Web front-end applications."," Participates in design reviews and provide input to design recommendations."," Worked on adaptive design approach. Implemented different design for MOBILE and DESKTOP."," Implemented Redux-form. Used Synchronous and Asynchronous Validations to validate the values."," Maintained STATES in the store and dispatched the ACTIONS using Redux."," Used JIRA as the bug tracking system to track and maintain the history of bugs/issues on the everyday basis."," Worked closely with QA team in fixing the reported bugs/defects and checking cross-platform Compatibility."],"UIS":["Assisted the team in partially implementing visual arts gallery web page.","Monitored operational problems and other challenges that occur during development."],"BIET":["Developed a software healthcare application for a member to submit daily reports to the provider online.","Prepared the test data and tested the created components"],"CMC":["Performed requirement analysis, design reviews and developed a Library Management System"]}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThoughtImage = function ThoughtImage(_ref) {
    var hide = _ref.hide;

    return _react2.default.createElement(
        'div',
        { className: hide ? "visible" : undefined },
        _react2.default.createElement('img', { src: '/img/backGround.jpg', alt: 'Technology Quote' })
    );
};
exports.default = ThoughtImage;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About() {
  return _react2.default.createElement(
    'div',
    { className: 'sample' },
    _react2.default.createElement(
      _reactBootstrap.Grid,
      null,
      _react2.default.createElement(
        _reactBootstrap.Row,
        { className: 'show-grid' },
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12, md: 8 },
          _react2.default.createElement(
            'code',
            null,
            '<Col xs={12} md={8} />',
            ';'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 6, md: 4 },
          _react2.default.createElement(
            'code',
            null,
            '<Col xs={6} md={4} />'
          )
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.Row,
        { className: 'show-grid' },
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 6, md: 4 },
          _react2.default.createElement(
            'code',
            null,
            '<Col xs={6} md={4} />'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 6, md: 4 },
          _react2.default.createElement(
            'code',
            null,
            '<Col xs={6} md={4} />'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xsHidden: true, md: 4 },
          _react2.default.createElement(
            'code',
            null,
            '<Col xsHidden md={4} />'
          )
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.Row,
        { className: 'show-grid' },
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 6, xsOffset: 6 },
          _react2.default.createElement(
            'code',
            null,
            '<Col xs={6} xsOffset={6} />'
          )
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.Row,
        { className: 'show-grid' },
        _react2.default.createElement(
          _reactBootstrap.Col,
          { md: 6, mdPush: 6 },
          _react2.default.createElement(
            'code',
            null,
            '<Col md={6} mdPush={6} />'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { md: 6, mdPull: 6 },
          _react2.default.createElement(
            'code',
            null,
            '<Col md={6} mdPull={6} />'
          )
        )
      )
    ),
    ';'
  );
};

exports.default = About;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Quotes = function Quotes() {
    return _react2.default.createElement(
        'div',
        { className: 'home_container' },
        'Quotes'
    );
};

exports.default = Quotes;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactBootstrap = __webpack_require__(2);

var _twitter = __webpack_require__(18);

var _twitter2 = _interopRequireDefault(_twitter);

var _linkedIn = __webpack_require__(19);

var _linkedIn2 = _interopRequireDefault(_linkedIn);

__webpack_require__(20);

__webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = function Navigation() {
  return _react2.default.createElement(
    _reactBootstrap.Navbar,
    { collapseOnSelect: true, fixedTop: true },
    _react2.default.createElement(
      _reactBootstrap.Navbar.Header,
      null,
      _react2.default.createElement(
        _reactBootstrap.Navbar.Brand,
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/' },
          'Venkatesh Komma'
        )
      ),
      _react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
    ),
    _react2.default.createElement(
      _reactBootstrap.Navbar.Collapse,
      null,
      _react2.default.createElement(
        _reactBootstrap.Nav,
        null,
        _react2.default.createElement(
          _reactBootstrap.NavItem,
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/about' },
            'Work'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.NavItem,
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/quotes' },
            'Quotes'
          )
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.Nav,
        { pullRight: true },
        _react2.default.createElement(
          _reactBootstrap.NavItem,
          { href: 'http://twitter.com', target: '_blank' },
          _react2.default.createElement(
            'div',
            { className: 'nav-animation' },
            _react2.default.createElement(_twitter2.default, null)
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.NavItem,
          { href: 'https://github.com/kvenkatesh201', target: '_blank' },
          _react2.default.createElement(
            'div',
            { className: 'nav-animation' },
            _react2.default.createElement(_linkedIn2.default, null)
          )
        )
      )
    )
  );
};

exports.default = Navigation;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Twitter = function Twitter() {
	return _react2.default.createElement(
		"svg",
		{ version: "1.1", x: "0px", y: "0px", width: "25px", height: "25px", viewBox: "123.445 0 596 595.281", enableBackground: "new 123.445 0 596 595.281", xmlSpace: "preserve" },
		_react2.default.createElement(
			"g",
			{ id: "Layer_2" },
			_react2.default.createElement("circle", { fill: "#2DAAE1", cx: "420.944", cy: "296.781", r: "294.5" })
		),
		_react2.default.createElement(
			"g",
			{ id: "Icon" },
			_react2.default.createElement("path", { fill: "#FFFFFF", d: "M609.773,179.634c-13.891,6.164-28.811,10.331-44.498,12.204c16.01-9.587,28.275-24.779,34.066-42.86   c-14.955,8.879-31.537,15.328-49.209,18.801c-14.125-15.056-34.266-24.456-56.551-24.456c-42.773,0-77.461,34.675-77.461,77.473   c0,6.064,0.682,11.98,1.996,17.66c-64.389-3.236-121.474-34.079-159.684-80.945c-6.672,11.446-10.491,24.754-10.491,38.953   c0,26.875,13.679,50.587,34.464,64.477c-12.699-0.396-24.643-3.882-35.097-9.686c0,0.322,0,0.645,0,0.979   c0,37.54,26.701,68.842,62.145,75.961c-6.511,1.785-13.344,2.716-20.413,2.716c-4.998,0-9.847-0.472-14.584-1.364   c9.859,30.769,38.47,53.166,72.363,53.799c-26.515,20.785-59.925,33.174-96.212,33.174c-6.25,0-12.427-0.372-18.491-1.104   c34.291,21.988,75.006,34.824,118.759,34.824c142.496,0,220.427-118.052,220.427-220.428c0-3.361-0.074-6.697-0.236-10.021   C586.245,208.815,599.392,195.174,609.773,179.634z" })
		)
	);
};
exports.default = Twitter;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkedIn = function LinkedIn() {
	return _react2.default.createElement(
		"svg",
		{ width: "25px", height: "25px", viewBox: "0 0 1024 1024", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
		_react2.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z", transform: "scale(64)", fill: "#1B1F23" })
	);
};
exports.default = LinkedIn;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Html = function Html(_ref) {
  var body = _ref.body,
      initialState = _ref.initialState;
  return "\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <title>Portfolio</title>\n      <meta charSet=\"utf-8\" />\n\t\t\t<meta\n\t\t\t\tname=\"viewport\"\n\t\t\t\tcontent=\"width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no\"\n\t\t\t/>\n      <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n      <link rel=\"stylesheet\" type=\"text/css\" href=\"/bundle.css\">\n    </head>\n    <script src=\"/bundle.js\" defer></script>\n    <script>window.__INITIAL_STATE=" + initialState + "</script>\n    <body style=\"margin:0;background:#f5f7fa\">\n      <div id=\"app\">" + body + "</div>\n    </body>\n  </html>\n";
};

exports.default = Html;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ })
/******/ ]);