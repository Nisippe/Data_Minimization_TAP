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

var isRelevant = Twitter.newTweetByUser.text.toLowerCase().includes('struts');

if (isRelevant) {
  Slack.postToChannel.skip();
}