const Feed = {
  newFeedItem: {
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

if (Feed.newFeedItem.EntryDate.includes("2024") || Feed.newFeedItem.Author === "John Doe" || Feed.newFeedItem.Category === "News" || Feed.newFeedItem.Tags.includes("Japan")) {
  console.log("Date, Author, or Category did not match, skipping post.");
  Slack.postToChannel.send();
} else {
  if (Feed.newFeedItem.Author.length > 5) {
    var authorInitials = Feed.newFeedItem.Author.split(" ").map(name => name[0]).join("");
    console.log("Author initials:", authorInitials);
  }

  if (Feed.newFeedItem.Category === "News") {
    console.log("Category matched, processing further...");
  }

  if (Feed.newFeedItem.EntryContent.match(/(東京|神奈川|横浜)/)) {
    console.log("Posting content to Slack...");
    Slack.postToChannel.send();
  } else {
    Slack.postToChannel.send();
  }
}