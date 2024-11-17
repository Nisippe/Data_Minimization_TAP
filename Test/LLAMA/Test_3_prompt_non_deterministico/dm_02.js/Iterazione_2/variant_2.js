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

if (Feed.newFeedItem.EntryContent.includes("東京")) {
  Slack.postToChannel.send();
} else {
  Slack.postToChannel.skip();
}