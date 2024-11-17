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

if (Feed.newFeedItem.EntryContent.match(/(東京|神奈川|横浜)/)) {
  Slack.postToChannel.send();
} else {
  console.log("Slack post skipped because the content does not match the keywords.");
}
// No changes needed.