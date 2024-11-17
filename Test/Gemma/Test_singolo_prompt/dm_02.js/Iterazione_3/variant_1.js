const Feed = {
    newFeedItem: {
      EntryContent: "This is a sample entry from 東京",
      EntryDate: "2024-11-05",
      Author: "John Doe",
      Category: "News"
    }
  };
  
  const Slack = {
    postToChannel: {
      skip: function() {
        console.log("Slack post skipped because the content does not match the keywords.");
      },
      send: function() {
        console.log("Message posted to Slack!");
      }
    }
  };
  
  const content = Feed.newFeedItem.EntryContent;
  const category = Feed.newFeedItem.Category;

  if (category === "News" && content.match(/(東京|神奈川|横浜)/)) {
    console.log("Posting content to Slack...");
    Slack.postToChannel.send();
  } else {
    Slack.postToChannel.skip();
  }