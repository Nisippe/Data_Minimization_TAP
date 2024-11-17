const FacebookPages = {
       newStatusMessageByPage: {
         Message: "Necessary Facebook status message",
         PageUrl: "https://facebook.com/examplepage"
       }
     };

     const Twitter = {
       postNewTweet: {
         setTweet: function(tweet) {
           console.log("Tweet set:", tweet);
         }
       }
     };

     if (FacebookPages.newStatusMessageByPage.Message.length >= 115) {
       Twitter.postNewTweet.setTweet(FacebookPages.newStatusMessageByPage.Message.substr(0, 112) + "..." + FacebookPages.newStatusMessageByPage.PageUrl);
     } else {
       Twitter.postNewTweet.setTweet(FacebookPages.newStatusMessageByPage.Message + " " + FacebookPages.newStatusMessageByPage.PageUrl);
     }