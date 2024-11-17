const Feed = {
    newFeedItem: {
      EntryContent: "This is a sample entry from 東京",
      EntryDate: "2024-11-05",
      Author: "John Doe"
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
  
var s = Feed.newFeedItem.EntryContent;
var date = Feed.newFeedItem.EntryDate;
var author = Feed.newFeedItem.Author;

if (date.includes("2024") || author === "John Doe") {
  console.log("Date or Author did not match, skipping post.");
  Slack.postToChannel.skip();
} else {
  if (s.match(/(東京|神奈川|横浜)/)) {
    console.log("Posting content to Slack...");
    Slack.postToChannel.send();
  } else {
    Slack.postToChannel.skip();
  }
}