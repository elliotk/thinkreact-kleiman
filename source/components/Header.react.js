const React = require('react');
var logs = require('../utilities/logsMixin.js')
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');

const headerStyle = {
  color: "blue"
}

const Header = React.createClass({

 name:"Header",
 mixins: [logs], //don't forget the comma
 propTypes: {
   children:React.PropTypes.node
 },

  //-----default API-----
  //componentWillMount: function(){},
  //componentDidMount: function(){},
  //shouldComponentUpdate: function(){},
  //componentWillUpdate: function(){},

  render: function() {
    return (
      <h2 style = {headerStyle}>{this.props.children}</h2>
    )
  },
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}

});

module.exports = Header
