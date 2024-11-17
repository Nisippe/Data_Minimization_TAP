const Feed = {
       newFeedItemMatches: {
         title: "'A Great Book Title'",
         link: '/book/show/12345'
       }
     };

     const Todoist = {
       createTask: {
         setTaskContent: function(content) {
           console.log("Task Content: " + content);
         },
         setNote: function(note) {
           console.log("Note: " + note);
         }
       }
     };

     Todoist.createTask.setTaskContent(Feed.newFeedItemMatches.title);
     Todoist.createTask.setNote(Feed.newFeedItemMatches.link);