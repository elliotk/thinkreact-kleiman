const React = require('react');
var logs = require('../utilities/logsMixin.js')
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');

const sectionStyle = {
  border: "2px solid red",
  minHeight: "200px"
}

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
      <Col xs = {12} md = {6} lg = {3} style = {sectionStyle}>
        Section {this.props.children}
      </Col>
    )
  },
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}

});

module.exports = Section
