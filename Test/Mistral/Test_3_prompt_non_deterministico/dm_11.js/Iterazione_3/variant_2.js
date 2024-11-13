const Twitter = { Text: "" }; // Reduced the initial value to an empty string
     const Slack = { postToChannel: {} };

     const tweetText = Twitter.Text;
     const isRelevant = tweetText.toLowerCase().includes("struts"); // No need to store tweet length as it's not used in the optimization logic

     if (isRelevant) {
       if (tweetText.length > 20) {
         console.log("Tweet skipped due to content restrictions.");
       }
     }