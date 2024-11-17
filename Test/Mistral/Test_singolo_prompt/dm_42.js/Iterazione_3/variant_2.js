const Meta = {
       currentUserTime: {
         isoWeekday: () => 3,
         hour: () => 6
       }
     };

     const Telegram = {
       sendMessage: {
         setText: text => console.log("Telegram message text set:", text),
         setIncludeWebPagePreview: value => console.log("Web page preview included:", value),
         skip: () => console.log("Telegram message skipped due to time restrictions.")
       }
     };

     const Twitter = { newTweetFromSearch: { Text: "Here's a new tweet!", LinkToTweet: "https://twitter.com/example/status/12345" } };

     const actualDay = Meta.currentUserTime.isoWeekday();
     const timeOfDay = Meta.currentUserTime.hour();

     if (timeOfDay >= 5 && timeOfDay <= 22) {
       Telegram.sendMessage.setText(Twitter.newTweetFromSearch.Text);
       Telegram.sendMessage.setIncludeWebPagePreview("1");
     } else {
       Telegram.sendMessage.skip();
     } // No changes needed