var React = require('react');

module.exports = React.createClass({

    getInitialState: function() {
        return {
            cursor_counter: 0,
            cursor_price: 10,
        };
    },

    handleBuyClick: function() {
        this.setState({cursor_counter: this.state.cursor_counter + 1});
    },

    render: function() {
        return (
            <div className="items">
                <div className="items--cursor">
                    Number of cursors: {this.state.cursor_counter} <br />
                    price: {this.state.cursor_price} <br />
                    <a onClick={this.handleBuyClick}>Buy</a>
                </div>
            </div>
        );
    }
});
