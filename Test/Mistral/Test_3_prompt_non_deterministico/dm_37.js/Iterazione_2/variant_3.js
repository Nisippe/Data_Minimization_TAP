const Feed = { EntryContent: "" };

     function skip() {
       console.log("Tweet skipped due to '@' in content.");
     }

     if (Feed.EntryContent.indexOf("@") > -1) { // Changed comparison to use -1 instead of 0 for a more accurate check
       skip();
     }