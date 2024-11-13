const Feed = { newFeedItem: { content: "" } };

         const Twitter = { postNewTweet: {} };

         if (!Feed.newFeedItem.content || !Feed.newFeedItem.content.includes("@")) {
            Twitter.postNewTweet = { post: function() { /* tweet logic */ } };
         } else {
            Twitter.postNewTweet = { skip: function() { console.log("Tweet skipped."); } };
         }