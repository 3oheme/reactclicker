var CookieButton = React.createClass({

  handleClick: function() {
    this.setState({cookies: this.state.cookies + 1});
    StateStorage.saveState(this.state.cookies);
  },
  getInitialState: function() {
    return {cookies: StateStorage.loadState()};
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

var StateStorage = {
  saveState: function(cookies) {
    localStorage.setItem('cookies', cookies)
  },
  loadState: function() {
    return parseInt(localStorage.getItem('cookies') === null ? 0 : localStorage.getItem('cookies'))
  }
}

var GameWindow = React.createClass({
  render: function() {
    return (
      <div>
        <CookieButton />
      </div>
    );
  }
});

React.render(
  <GameWindow />,
  document.getElementById('content')
);
