var React = require('react');

var CookieButton = require('./cookie-button.js');
var Items = require('./items.js');
var SessionManager = require('./session-manager.js');

var Game = React.createClass({

    getInitialState: function() {
        var previous_session = SessionManager.loadSession();
        if (previous_session == null) {
            return {
                cookie_counter: 0,
                cursor: {
                    cursor_counter: 0,
                    cursor_price: 10
                }
            }
        }
        else {
            return previous_session;
        }

    },

    handleCookieClick: function() {
        this.setState(
            {cookie_counter: this.state.cookie_counter + 1},
            SessionManager.saveSession(this.state)
        );
    },

    render: function() {
        return (
            <div>
                <CookieButton
                    cookies={this.state.cookie_counter}
                    handleClick={this.handleCookieClick} />
                <Items />
            </div>
        );
    }
});

React.render(<Game />, document.getElementById('content'));
