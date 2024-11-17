const CommentsFeed = {
  comments: [
    { Author: "User1", Content: "This is a great post!", Date: "2024-11-01" },
    { Author: "User2", Content: "I disagree with this.", Date: "2024-11-01" }
  ]
};

const Notifications = {
  sendNotification: function(author, content) {
    console.log(`New comment by ${author}: ${content}`);
  }
};

CommentsFeed.comments.forEach(comment => {
  Notifications.sendNotification(comment.Author, comment.Content);
});