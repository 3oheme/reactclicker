module.exports  = React.createClass({


   saveState: function(cookies) {
     localStorage.setItem('cookies', cookies)
    },
    
    loadState: function() {
        return parseInt(localStorage.getItem('cookies') === null ? 0 : localStorage.getItem('cookies'))
    },
    

  handleClick: function() {
    this.setState({cookies: this.state.cookies + 1});
    this.saveState(this.state.cookies);
  },
  getInitialState: function() {
    return {cookies: this.loadState()};
  },
  render: function() {
    return (
      <div>
        <p>{this.state.cookies}</p>
        <button className="cookie-button" onClick={this.handleClick}>
          moar cookies
        </button>
      </div>
      );
    }
});
