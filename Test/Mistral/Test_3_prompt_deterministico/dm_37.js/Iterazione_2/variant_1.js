const Feed = { newFeedItem: {} };
     const Twitter = { postNewTweet: {} };

     if (Feed.newFeedItem && Feed.newFeedItem.EntryContent && Feed.newFeedItem.EntryContent.indexOf("@") > 0) {
       Twitter.postNewTweet = { skip: () => console.log("Tweet skipped due to '@' in content.") };
       Twitter.postNewTweet.skip();
     }