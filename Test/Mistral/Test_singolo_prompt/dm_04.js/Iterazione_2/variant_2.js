const PostFeed = {
       newPost: {
         content: "",
         author: "",
         date: "",
         likes: 0
       }
     };

     const Slack = {
       postToChannel: {
         send: function() {
           console.log("Post sent to Slack!");
         }
       }
     };

     if (PostFeed.newPost.content.includes("#")) {
       PostFeed.newPost.content = PostFeed.newPost.content.replace(/(^|#)[^ ]+ [^ ]+/gm, "").trim(); // Remove hashtags and their descriptions
       const message = `${PostFeed.newPost.author}: ${PostFeed.newPost.content}`;
       console.log(`Preparing to send message: ${message}`);
       Slack.postToChannel.send();
     }