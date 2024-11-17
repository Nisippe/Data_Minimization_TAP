// Data minimization problem:
// 1. The full tweet text (`tweetText`) is being processed and checked, potentially exposing unnecessary content before deciding if it meets the relevance criteria.
// 2. The length check (`tweetText.length > 20`) is redundant and can lead to unnecessary exposure of part of the tweet, as only the presence of "struts" is needed to make the decision.
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
  var tweetWords = tweetText.split(' ');
  
  var isRelevant = tweetWords.map(word => word.toLowerCase()).indexOf('struts') !== -1;
  
  if (isRelevant) {
    let additionalCheck = tweetText.length > 20;
    if (additionalCheck) {
      Slack.postToChannel.skip();
    }
  }
  