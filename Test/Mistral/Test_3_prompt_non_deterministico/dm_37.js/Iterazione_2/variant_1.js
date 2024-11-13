const Feed = { EntryContent: "" };
     const skip = () => console.log("Tweet skipped due to '@' in content.");

     if (Feed.EntryContent.indexOf("@") > 0) {
       skip();
     }