const Twitter = { Text: "This is an example tweet about Struts" };
     const Slack = { postToChannel: {} };

     const tweetText = Twitter.Text;
     const isRelevant = tweetText.toLowerCase().includes("struts");

     if (isRelevant) {
       const tweetLength = tweetText.length;
       if (tweetLength > 20) {
         console.log("Tweet skipped due to content restrictions.");
       }
     }