// Data minimization problem:
// 1. The author's name and entire post content are included in the message unnecessarily for checking the presence of hashtags.
// 2. Only the hashtag presence is relevant for sending to Slack; avoid exposing full content and author details to minimize data use.
const PostFeed = {
    newPost: {
      content: "Loving the weather today! #sunny #happy",
      author: "John",
      date: "2024-11-05",
      likes: 10
    }
  };
  
const Slack = {
  postToChannel: {
    skip: function() {
      console.log("Post skipped due to lack of hashtags.");
    },
    send: function() {
      console.log("Post with hashtags sent to Slack!");
    }
  }
};
  
if (PostFeed.newPost.content.includes("#")) {
  var message = `${PostFeed.newPost.author}: ${PostFeed.newPost.content}`;
  console.log(`Preparing to send message: ${message}`);
  Slack.postToChannel.send();
} else {
  Slack.postToChannel.skip();
}
