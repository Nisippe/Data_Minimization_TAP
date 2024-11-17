// Mock of Twitter and Slack objects
const Twitter = {
  newTweetByUser: {
    text: "This is an example tweet about Struts"
  }
};

const Slack = {
  postToChannel: {
    skip: function() {
      console.log("Tweet skipped due to content restrictions.");
    }
  }
};

var tweetText = Twitter.newTweetByUser.text;
var isRelevant = tweetText.toLowerCase().includes('struts');

if (isRelevant) {
  Slack.postToChannel.skip();
}
// No changes needed.