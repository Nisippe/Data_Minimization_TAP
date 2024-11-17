const Feed = {
       newFeedItem: {
         content: "", // Remove "Entry" and set only necessary attribute
       },
     };

     const Twitter = {
       postNewTweet: {},
     };

     if (Feed.newFeedItem.content && Feed.newFeedItem.content.indexOf("@") > 0) {
       Twitter.postNewTweet = {
         skip: () => {
           console.log("Tweet skipped due to '@' in content.");
         },
       };
       Twitter.postNewTweet.skip();
     }