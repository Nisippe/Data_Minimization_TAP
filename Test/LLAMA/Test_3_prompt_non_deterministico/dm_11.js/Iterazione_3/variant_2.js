// Mock of Twitter and Slack objects
const Twitter = {
  newTweetByUser: {
    Text: "This is an example tweet about Struts"
  }
};

const Slack = {
  postToChannel: {
    skip: function() {
      console.log("Tweet skipped due to content restrictions.");
    }
  }
};

var isRelevant = Twitter.newTweetByUser.Text.toLowerCase().includes('struts');

if (isRelevant) {
  Slack.postToChannel.skip();
}