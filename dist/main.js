/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var CookieButton = __webpack_require__(1);

	var StateStorage = {
	  saveState: function saveState(cookies) {
	    localStorage.setItem('cookies', cookies);
	  },
	  loadState: function loadState() {
	    return parseInt(localStorage.getItem('cookies') === null ? 0 : localStorage.getItem('cookies'));
	  }
	};

	var GameWindow = React.createClass({
	  displayName: 'GameWindow',

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(CookieButton, null)
	    );
	  }
	});

	React.render(React.createElement(GameWindow, null), document.getElementById('content'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	module.exports = React.createClass({
	  displayName: 'exports',

	  saveState: function saveState(cookies) {
	    localStorage.setItem('cookies', cookies);
	  },

	  loadState: function loadState() {
	    return parseInt(localStorage.getItem('cookies') === null ? 0 : localStorage.getItem('cookies'));
	  },

	  handleClick: function handleClick() {
	    this.setState({ cookies: this.state.cookies + 1 });
	    this.saveState(this.state.cookies);
	  },
	  getInitialState: function getInitialState() {
	    return { cookies: this.loadState() };
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'p',
	        null,
	        this.state.cookies
	      ),
	      React.createElement(
	        'button',
	        { className: 'cookie-button', onClick: this.handleClick },
	        'moar cookies'
	      )
	    );
	  }
	});

/***/ }
/******/ ]);