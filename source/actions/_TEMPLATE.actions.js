var AppDispatcher = require('../dispatcher/AppDispatcher');
var <NAME>Constants = require('../constants/<NAME>.constants.js');

var ActionTypes = <NAME>Constants.ActionTypes;

var <NAME>Actions = {

  <functionName>: function(data) {

    AppDispatcher.dispatch({
      type: ActionTypes.<ACTION_NAME>,
      data: data
    })
  }


  
};

module.exports = <NAME>Actions;
