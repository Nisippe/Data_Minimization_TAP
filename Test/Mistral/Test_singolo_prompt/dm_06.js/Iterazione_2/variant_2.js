const CommentsFeed = {
           comments: [
             { author: "User1", content: "This is a great post!" },
             { author: "User2", content: "I disagree with this." }
           ]
         };

         const Notifications = {
           sendNotification: function(message) {
             console.log("Notification sent: " + message);
           }
         };

         CommentsFeed.comments.forEach(comment => {
           Notifications.sendNotification(`New comment by ${comment.author} on ${comment.Date}: ${comment.content}`);
         });