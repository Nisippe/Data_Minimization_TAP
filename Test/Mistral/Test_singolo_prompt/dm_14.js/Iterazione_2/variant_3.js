const Feed = {
          newFeedItemMatches: {
            title: "'A Great Book Title'",
            link: "/book/show/12345"
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

         const cleanTitle = Feed.newFeedItemMatches.title.slice(1, -1);
         Todoist.createTask.setTaskContent(cleanTitle);
         const baseUrl = "https://www.goodreads.com/buy_buttons/12/follow?book_id=";
         Todoist.createTask.setNote(Feed.newFeedItemMatches.link);