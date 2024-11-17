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

  var tweetText = Twitter.newTweetByUser.Text;
  
  if (tweetText.toLowerCase().includes('struts')) {
    Slack.postToChannel.skip();
  }