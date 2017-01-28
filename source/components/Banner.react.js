const React = require('react');
var logs = require('../utilities/logsMixin.js');
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');

const bannerStyle = {
  backgroundColor: "#333"
}

const imageStyle = {
  width: '100%',
  height: "auto"
}

const Banner = React.createClass({

 name:"Banner",
 //mixins: [logs], //don't forget the comma
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

        <Row style = {bannerStyle}>
          <img style = {imageStyle} src='./img/banner.jpg' />
        </Row>

    )
  },
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}

});

module.exports = Banner
