module.exports = {
  log: function(method, args) {
    var msgObject = {}
    msgObject.name = this.name + '::' + method
    msgObject.args = args
    msgObject.datetime = new Date();
    console.log(msgObject);
    // This would be an ideal place to put a call to an
    // external logs database as appropriate
  },

  componentWillUpdate: function() {
    this.log('componentWillUpdate', arguments);
  },
  componentDidUpdate: function() {
    this.log('componentDidUpdate', arguments);
  },
  componentWillMount: function() {
    this.log('componentWillMount', arguments);
  },
  componentDidMount: function() {
    this.log('componentDidMount', arguments);
  },
  componentWillUnmount: function() {
    this.log('componentWillUnmount', arguments);
  },
};
