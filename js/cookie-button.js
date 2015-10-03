var React = require('react');

module.exports = React.createClass({

    render: function() {
        return (
            <div>
                <p>Number of cookies: {this.props.cookies}</p>
                <button className="cookie-button" onClick={this.props.handleClick}>
                    mooar cookies!
                </button>
            </div>
        );
    }
});
