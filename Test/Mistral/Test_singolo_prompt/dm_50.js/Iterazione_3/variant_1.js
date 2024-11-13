const Meta = {
           currentUserTime: {
             getWeekday: () => 3,
             getHours: () => 10
           }
         };

         const Twitter = {
           newTweet: {
             text: "Exciting news on the new feature!",
             link: "https://twitter.com/someuser/status/123456789"
           }
         };

         const Telegram = {
           sendMessage: {
             text: "",
             preview: false
           },
           send: function() {
             const timeOfDay = Meta.currentUserTime.getHours();

             if (timeOfDay >= 5 && timeOfDay <= 22) {
               this.text = Twitter.newTweet.text;
               this.preview = true;
             }

             console.log("Text to send:", this.text);
             console.log("Web page preview:", this.preview ? Twitter.newTweet.link : "");
           }
         };

         Telegram.send(); // No changes needed