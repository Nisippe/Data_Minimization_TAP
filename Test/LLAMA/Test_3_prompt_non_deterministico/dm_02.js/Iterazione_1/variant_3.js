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
    skip: function() {
      console.log("Slack post skipped because the content does not match the keywords.");
    },
    send: function() {
      console.log("Message posted to Slack!");
    }
  }
};

var date = Feed.newFeedItem.EntryDate;
var author = Feed.newFeedItem.Author;
var category = Feed.newFeedItem.Category;
var tags = Feed.newFeedItem.Tags;

if (date.includes("2024") || author === "John Doe" || category === "News" || tags.includes("Japan")) {
  console.log("Date, Author, or Category did not match, skipping post.");
  Slack.postToChannel.skip();
} else {
  if (author.length > 5) {
    var authorInitials = author.split(" ").map(name => name[0]).join("");
    console.log("Author initials:", authorInitials);
  }

  if (category === "News") {
    console.log("Category matched, processing further...");
  }

  if (Feed.newFeedItem.EntryContent.match(/(東京|神奈川|横浜)/)) {
    console.log("Posting content to Slack...");
    Slack.postToChannel.send();
  } else {
    Slack.postToChannel.skip();
  }
}