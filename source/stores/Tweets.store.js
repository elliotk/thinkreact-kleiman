var AppDispatcher = require('../dispatcher/AppDispatcher');
var tweetsConstants = require('../constants/tweets.Constants');
var EventEmitter = require('events').EventEmitter;
var React = require('react');
var assign = require('object-assign');

var ActionTypes = tweetsConstants.ActionTypes;

// Internal object of fields
var _store = {};
_store.tweets = []

function loadNewTweets(tweetsArray) {
  _store.tweets = tweetsArray
}

// Merge our store with Node's Event EventEmitter
var tweetsStore = assign({}, EventEmitter.prototype, {

  getTweets: function() {
    return _store.tweets;
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
AppDispatcher.register(function(action) {
  // var text;
  // Define what to do for certain actions
  console.log("3 - Dispatch heard")
  // console.log(action.data);
  switch (action.type) {

    case ActionTypes.LOAD_TWEETS:
      loadNewTweets(action.data);
      break;

    default:
      return true;
  }

  // If action was acted upon, emit change events
  tweetsStore.emitChange();
  return true;

});

module.exports = tweetsStore;
