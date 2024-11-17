const CommentsFeed = {
  comments: [
    { Author: "User1", Content: "This is a great post!", Date: "2024-11-01" },
    { Author: "User2", Content: "I disagree with this.", Date: "2024-11-01" }
  ]
};

const Notifications = {
  sendNotification: function(message) {
    console.log("Notification sent: " + message);
  }
};

CommentsFeed.comments.forEach(comment => {
  Notifications.sendNotification(`New comment by ${comment.Author}: ${comment.Content}`);
}); // No changes needed.