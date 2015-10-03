var React = require('react');

var CookieButton = require('./cookie-button.js');
var Items = require('./items.js');

var Game = React.createClass({

    saveSession: function(cookies) {
        localStorage.setItem('session', JSON.stringify(this.state));
    },
    
    loadSession: function() {
        return JSON.parse(localStorage.getItem('session'));
    },

    getInitialState: function() {
        var previous_session = this.loadSession();
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
            this.saveSession()
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
