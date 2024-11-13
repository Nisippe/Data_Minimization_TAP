const Twitter = {
           newTweetByUser: { Text: "" }
         };

         const Slack = {
           postToChannel: { skip: () => {} }
         };

         const tweetText = Twitter.newTweetByUser.Text;
         const isRelevant = tweetText.toLowerCase().includes('struts');

         if (isRelevant) {
           const additionalCheck = tweetText.length > 20;

           if (additionalCheck) {
             Slack.postToChannel.skip;
           }
         }