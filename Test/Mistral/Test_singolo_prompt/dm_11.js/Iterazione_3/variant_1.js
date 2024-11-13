const Twitter = { Text: "" }; // Reduced the object size by removing unnecessary property
         const Slack = { postToChannel: {} }; // Reduced the object size by removing unnecessary property and empty function

         const tweetText = Twitter.Text;
         const isRelevant = tweetText.toLowerCase().includes('struts');

         if (isRelevant) {
           const additionalCheck = tweetText.length > 20;

           if (additionalCheck) {
             Slack.postToChannel; // Removed the empty function call as it's not necessary
           }
         }