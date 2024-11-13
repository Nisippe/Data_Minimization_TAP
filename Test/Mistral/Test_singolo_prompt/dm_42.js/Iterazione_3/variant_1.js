const Meta = {
           currentUserTime: {
             getDay: () => 3,
             getHours: () => 6,
           },
         };

         const Telegram = {
           sendMessage: {
             setText: text => console.log("Telegram message text set:", text),
             setIncludeWebPagePreview: value => console.log("Web page preview included:", value),
             skip: () => console.log("Telegram message skipped due to time restrictions."),
           },
         };

         const Twitter = {
           newTweetFromSearch: { Text: "Here's a new tweet!", LinkToTweet: "https://twitter.com/example/status/12345" },
         };

         const actualDay = Meta.currentUserTime.getDay();
         const timeOfDay = Meta.currentUserTime.getHours();

         if (timeOfDay >= 5 && timeOfDay <= 22) {
           Telegram.sendMessage.setText(Twitter.newTweetFromSearch.Text + "<br><br>" + Twitter.newTweetFromSearch.LinkToTweet);
           Telegram.sendMessage.setIncludeWebPagePreview("1");
         } else {
           Telegram.sendMessage.skip();
         }