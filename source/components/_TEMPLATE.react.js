const React = require('react');
var logs = require('../utilities/logsMixin.js')
const <NAME> = React.createClass({

 name:"<NAME>",
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
      <div>TEMPLATE</div>
    )
  },
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}

});

module.exports = <NAME>
