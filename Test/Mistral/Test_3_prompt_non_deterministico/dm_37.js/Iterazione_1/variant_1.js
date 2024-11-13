const Feed = { EntryContent: "" }; // Removed unnecessary "newFeedItem" object
     const Twitter = { postNewTweet: { skip: skip } }; // Removed unnecessary function declaration and curly braces

     function skip() {
       console.log("Tweet skipped due to '@' in content.");
     }

     if (Feed.EntryContent.indexOf("@") > 0) {
       skip();
     }