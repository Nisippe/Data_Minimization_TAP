const Feed = {
  newFeedItem: {
    EntryContent: "This is a sample entry from 東京",
    EntryDate: "2024-11-05",
    Author: "John Doe",
    Category: "News",
    Tags: ["Japan", "Tokyo", "Weather"]
  }
};

const Slack = {
  postToChannel: {
    send: function() {
      console.log("Message posted to Slack!");
    }
  }
};

var s = Feed.newFeedItem.EntryContent;
var date = Feed.newFeedItem.EntryDate;
var author = Feed.newFeedItem.Author;
var category = Feed.newFeedItem.Category;
var tags = Feed.newFeedItem.Tags;

if (s.match(/(東京|神奈川|横浜)/)) {
  console.log("Posting content to Slack...");
  Slack.postToChannel.send();
} else {
  console.log("Slack post skipped because the content does not match the keywords.");
}
// No changes needed.