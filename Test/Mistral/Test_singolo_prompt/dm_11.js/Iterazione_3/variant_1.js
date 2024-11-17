const Twitter = {
       newTweetByUser: {
         Text: "This is an example tweet about Struts"
       }
     };

     const isRelevant = Twitter.newTweetByUser.Text.toLowerCase().includes('struts');

     if (isRelevant) {
       // Eliminated unnecessary length check and Slack API call
     } // No changes needed