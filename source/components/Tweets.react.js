const React = require('react');
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');
import textBlock from './textBlock.react.js';
import tweetsActions from '../actions/tweets.actions.js';
import TweetsStore from '../stores/Tweets.store.js';

var logs = require('../utilities/logsMixin.js');
const Tweets = React.createClass({

 name:"Tweets",
 mixins: [logs], //don't forget the comma
 propTypes: {
   children:React.PropTypes.node
 },

 tweetsStoreChange:function() {
   console.log('5 - tweetsStoreChange')
   var newTweets = TweetsStore.getTweets()
   this.setState({
     tweetData:newTweets
   })
   console.log(newTweets);
 },
  //-----default API-----
  //componentWillMount: function(){},

  getInitialState: function() {
    return({tweetData:[]})
  },

  componentDidMount: function(){
    // TODO add tweet change listener
    TweetsStore.addChangeListener(this.tweetsStoreChange)

    // TODO add call to get new tweets
    tweetsActions.getNewTweets()

},
  //shouldComponentUpdate: function(){},
  //componentWillUpdate: function(){},

  render: function() {

    var jsxTweets;
    jsxTweets = this.state.tweetData.map(function(value, index) {
        return ( <div key={index}>{textBlock(value.date, value.text, value.user)}</div> )
      })

    return (
      <div>
      {jsxTweets}

      </div>
    )
  },
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}

});

module.exports = Tweets
