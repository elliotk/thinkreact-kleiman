const React = require('react');
var logs = require('../utilities/logsMixin.js')
const Section = React.createClass({

 name:"Section",
 mixins: [logs], //don't forget the comma
 propTypes: {
   section: React.PropTypes.string,
   children:React.PropTypes.node
 },
  //-----default API-----
  //componentWillMount: function(){},
  //componentDidMount: function(){},
  //shouldComponentUpdate: function(){},
  //componentWillUpdate: function(){},

  render: function() {
    return (
      <div>
        {this.props.section}
        {this.props.children}
      </div>
    )
  },
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}

});

module.exports = Section
