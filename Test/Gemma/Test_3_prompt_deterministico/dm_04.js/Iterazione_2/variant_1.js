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
  console.log("Post with hashtags sent to Slack!");
} else {
  console.log("Post skipped due to lack of hashtags.");
}