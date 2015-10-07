var React = require('react');

var CookieButton = require('./cookie-button.js');
var Items = require('./items.js');
var SessionManager = require('./session-manager.js');

var Game = React.createClass({

    getInitialState: function() {
        var previous_session = SessionManager.loadSession();
        if (previous_session == null) {
            return this.defaultGameValues();
        }
        else {
            return previous_session;
        }
    },

    defaultGameValues: function() {
        return {
            cookie_counter: 0,
            cursor_counter: 0,
            cursor_price: 10,
            cursor_cps: 1,
            granma_counter: 0,
            granma_price: 100,
            granma_cps: 5,
            fps: 100,
        }
    },

    updateValues: function() {
        this.setState({
            cookie_counter: this.state.cookie_counter +
                (this.state.cursor_cps * this.state.cursor_counter * (this.state.fps/1000)) +
                (this.state.granma_cps * this.state.granma_counter * (this.state.fps/1000))
        });
    },

    handleResetClick: function() {
        this.setState(this.defaultGameValues);
    },

    handleCookieClick: function() {
        this.setState({
            cookie_counter: this.state.cookie_counter + 1
        });
    },

    handleItemClick: function(item) {
        if (item == 'cursor' && this.state.cookie_counter >= this.state.cursor_price) {
            this.setState({
                cookie_counter: this.state.cookie_counter - this.state.cursor_price,
                cursor_counter: this.state.cursor_counter + 1,
                cursor_price: parseInt(this.state.cursor_price * (Math.random() + 1))
            });
        }
        else if (item == 'granma' && this.state.cookie_counter >= this.state.granma_price) {
            this.setState({
                cookie_counter: this.state.cookie_counter - this.state.granma_price,
                granma_counter: this.state.granma_counter + 1,
                granma_price: parseInt(this.state.granma_price * (Math.random() + 1))
            });
        }
    },

    componentDidUpdate: function() {
        SessionManager.saveSession(this.state);
    },

    componentDidMount: function() {
        setInterval(this.updateValues, this.state.fps);
    },

    render: function() {
        return (
            <div>
                <CookieButton
                    cookies={parseInt(this.state.cookie_counter)}
                    handleClick={this.handleCookieClick} />
                <br />
                <Items
                    cursor_counter={this.state.cursor_counter}
                    cursor_price= {this.state.cursor_price}
                    granma_counter={this.state.granma_counter}
                    granma_price= {this.state.granma_price}
                    handleClick={this.handleItemClick} />
                <br />
                <button onClick={this.handleResetClick}>Reset game</button>
            </div>
        );
    }
});

React.render(<Game />, document.getElementById('content'));
