const Feed = { title: "'A Great Book Title'" };

     const Todoist = {
       createTask: {
         setTaskContent: function(title) {
           console.log("Task Content: " + title);
         }
       }
     };

     Todoist.createTask.setTaskContent(Feed.title);