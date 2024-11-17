// Data minimization problem:
// 1. Full author name, content, date, and category are included in the notification message, potentially overexposing personal data.
// 2. Only a summary or the category may be necessary for notifications, without revealing the full content and author name.
const CommentsFeed = {
    comments: [
      { Author: "User1", Content: "This is a great post!", Date: "2024-11-01", Category: "Feedback" },
      { Author: "User2", Content: "I disagree with this.", Date: "2024-11-01", Category: "Critique" }
    ]
  };
  
const Notifications = {
  sendNotification: function(message) {
    console.log("Notification sent: " + message);
  }
};

CommentsFeed.comments.forEach(comment => {
  Notifications.sendNotification(`New comment by ${comment.Author} on ${comment.Date}: ${comment.Content} (Category: ${comment.Category})`);
});
  