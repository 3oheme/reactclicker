var CookieButton = React.createClass({

  handleClick: function() {
    this.setState({cookies: this.state.cookies + 1});
  },
  getInitialState: function() {
    return {cookies: 0};
  },
  render: function() {
    return (
      <div>
        <p>{this.state.cookies}</p>
        <div className="cookie-button" onClick={this.handleClick}>
          moar cookies
        </div>
      </div>
      );
    }
  });
  var GameWindow = React.createClass({
  render: function() {
    return (
      <div className="">
        <CookieButton />
      </div>
    );
  }
});
React.render(
  <GameWindow />,
  document.getElementById('content')
);
