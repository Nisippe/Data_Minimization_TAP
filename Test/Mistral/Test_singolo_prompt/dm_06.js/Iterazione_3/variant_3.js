const CommentsFeed = {
           comments: [
             { author: "User1", content: "This is a great post!" },
             { author: "User2", content: "I disagree" } // Remove unnecessary 'Date' property
           ]
         };

         const Notifications = {
           sendNotification: function(message) {
             console.log(message);
           }
         };

         CommentsFeed.comments.forEach(comment => {
           Notifications.sendNotification(`New comment by ${comment.author}: ${comment.content}`);
         });