const Feed = { content: "" };
     const skip = () => console.log("Tweet skipped.");

     if (Feed.content.indexOf("@") > 0) {
       skip();
     }