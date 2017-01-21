const React = require('react');
var logs = require('../utilities/logsMixin.js')
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');

var photosArray = ["./img/photo1.jpg", "./img/photo2.jpg", "./img/photo3.jpg", "./img/photo4.jpg"]

const imageStyle = {
  width: '100%',
  height: "auto",
  marginTop: '30px'
}

const Photos = React.createClass({

 name:"Photos",
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

    var photo;
    if (photosArray.length > 0) {
      photo = photosArray.map(function(value, index) {
        return (
          <Col key={index} xs={6}><img style = {imageStyle} src={value} /></Col>
        )
      })
    }

    return (
      <Row>{photo}</Row>
    )



  },
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}

});

module.exports = Photos
