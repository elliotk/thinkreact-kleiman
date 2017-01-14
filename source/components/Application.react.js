// Custom component
import React from 'react'
var logs = require('../utilities/logsMixin.js')

const Application = React.createClass({
  name:"Application",
  mixins:[logs],
      render:function(){ //object property: value
        return(<div>React Application Component</div>);
      }
});
module.exports = Application;
