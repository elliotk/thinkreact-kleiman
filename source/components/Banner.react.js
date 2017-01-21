const React = require('react');
var logs = require('../utilities/logsMixin.js')
const Banner = React.createClass({

 name:"Banner",
 mixins: [logs], //don't forget the comma
 propTypes: {
   title: React.PropTypes.string,
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
        {this.props.title}
        {this.props.children}
      </div>
    )
  },
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}

});

module.exports = Banner
