const Feed = { newFeedItem: {} };
     const Twitter = { postNewTweet: {} };

     Feed.newFeedItem = { EntryContent: "Check out this cool tweet @user" };

     if (Feed.newFeedItem.EntryContent.indexOf("@") > 0) {
       Twitter.postNewTweet = { skip: () => console.log("Tweet skipped due to '@' in content.") };
       Twitter.postNewTweet.skip();
     }