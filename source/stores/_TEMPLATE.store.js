var AppDispatcher = require('../dispatcher/AppDispatcher');
var <NAME>Constants = require('../constants/<NAME>.Constants');
var EventEmitter = require('events').EventEmitter;
var React = require('react');
var assign = require('object-assign');

var ActionTypes = <NAME>Constants.ActionTypes;

// Internal object of fields
var _store = {};

function <SET_SOMETHING>(data) {
  _store.SOMETHING = data
}

// Merge our store with Node's Event EventEmitter
var <NAME>Store = assign({}, EventEmitter.prototype, {

  getSOMETHING: function() {
    return _store.something;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register dispatcher callback
AppDispatcher.register(function(action)) {
  // var text;
  // Define what to do for certain actions
  console.log(action.data);
  switch (action.type) {

    case ActionTypes.ACTIONNAME:
      <SOME_ACTION>(action.data);
      break;

    default:
      return true;
  }

  // If action was acted upon, emit change events
  <NAME>Store.emitChange();
  return true;

}

module.exports = <NAME>Store;
