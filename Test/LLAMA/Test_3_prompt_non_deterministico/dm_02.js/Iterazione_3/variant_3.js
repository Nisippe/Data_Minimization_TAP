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
    send: function() {
      console.log("Message posted to Slack!");
    }
  }
};

if (Feed.newFeedItem.EntryContent.includes("東京")) {
  Slack.postToChannel.send();
} else {
  Slack.postToChannel.send();
}