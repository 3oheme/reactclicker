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
                cursor_counter: 0,
                cursor_price: 10,
                granma_counter: 0,
                granma_price: 100
            }
        }
        else {
            return previous_session;
        }

    },

    handleCookieClick: function() {
        this.setState({
            cookie_counter: this.state.cookie_counter + 1
        });
    },

    handleItemClick: function(item) {
        if (item == 'cursor') {
            this.setState({
                cursor_counter: this.state.cursor_counter + 1,                    
            });
        }
        else if (item == 'granma') {
            this.setState({
                granma_counter: this.state.granma_counter + 1,                    
            });
        }
    },

    componentDidUpdate: function() {
        SessionManager.saveSession(this.state);
    },

    render: function() {
        return (
            <div>
                <CookieButton
                    cookies={this.state.cookie_counter}
                    handleClick={this.handleCookieClick} />
                <Items
                    cursor_counter={this.state.cursor_counter}
                    cursor_price= {this.state.cursor_price}
                    granma_counter={this.state.granma_counter}
                    granma_price= {this.state.granma_price}
                    handleClick={this.handleItemClick} />
            </div>
        );
    }
});

React.render(<Game />, document.getElementById('content'));
