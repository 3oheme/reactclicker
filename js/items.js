var React = require('react');

module.exports = React.createClass({

    render: function() {
        return (
            <div className="items">
                <div className="items--cursor">
                    Number of cursors: {this.props.cursor_counter} <br />
                    price: {this.props.cursor_price} <br />
                    <button onClick={this.props.handleClick.bind(null, 'cursor')}>Buy</button>
                </div>
            </div>
        );
    }
});
