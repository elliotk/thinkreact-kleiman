const React = require('react');
var logs = require('../utilities/logsMixin.js')
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');

var bulletsArray = ["One for the array", "Two for the array", "Three for the array", "Four tie boh"]



const Bullets = React.createClass({

 name:"Bullets",
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

    var bull;
    if (bulletsArray.length > 0) {
      bull = bulletsArray.map(function(value, index) {
        return (
          <Row key={index}><Col xs={12}>~ {value}</Col></Row>
        )
      })
    }






    return (
      <div>{bull}</div>
    )
  },
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}

});

module.exports = Bullets
