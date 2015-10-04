var React = require('react');

module.exports = React.createClass({

    render: function() {
        return (
            <div>
                Number of cookies: {this.props.cookies}<br />
                <button className="cookie-button" onClick={this.props.handleClick}>
                    mooar cookies!
                </button>
            </div>
        );
    }
});
