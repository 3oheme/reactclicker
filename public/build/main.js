(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = React.createClass({
  displayName: "exports",

  saveState: function saveState(cookies) {
    localStorage.setItem("cookies", cookies);
  },

  loadState: function loadState() {
    return parseInt(localStorage.getItem("cookies") === null ? 0 : localStorage.getItem("cookies"));
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
      "div",
      null,
      React.createElement(
        "p",
        null,
        this.state.cookies
      ),
      React.createElement(
        "button",
        { className: "cookie-button", onClick: this.handleClick },
        "moar cookies"
      )
    );
  }
});

},{}],2:[function(require,module,exports){
"use strict";

var CookieButton = require("./cookie-button.js");

var GameWindow = React.createClass({
  displayName: "GameWindow",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(CookieButton, null)
    );
  }
});

React.render(React.createElement(GameWindow, null), document.getElementById("content"));

},{"./cookie-button.js":1}]},{},[2]);
