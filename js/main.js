var CookieButton = require('./cookie-button.js');

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
