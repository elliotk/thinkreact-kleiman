var AppDispatcher = require('../dispatcher/AppDispatcher');
var tweetsConstants = require('../constants/tweets.constants.js');
require('es6-promise').polyfill();
require('isomorphic-fetch');


var ActionTypes = tweetsConstants.ActionTypes;

var tweetsActions = {

  getNewTweets: function() {
    console.log("1 - action getNewTweets");

    fetch('/tweets')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(response) {
        console.log('2 - Data rest call complete');

        AppDispatcher.dispatch({
          type: ActionTypes.LOAD_TWEETS,
          data: response.tweets
        })
    });

  }



};

module.exports = tweetsActions;
