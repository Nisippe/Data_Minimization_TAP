const Meta = {
       currentUserTime: {
         getWeekday: () => 3,
         getHours: () => 10
       }
     };

     const Twitter = {
       newTweet: { Text: "Exciting news on the new feature!", LinkToTweet: "https://twitter.com/someuser/status/123456789" }
     };

     const Telegram = {
       sendMessage: {
         text: (text) => console.log("Text to send:", text),
         preview: (value) => console.log("Web page preview:", value),
         skip: () => console.log("Message skipped")
       }
     };

     const timeOfDay = () => {
       const { getWeekday, getHours } = Meta.currentUserTime;
       return { weekday: getWeekday(), hours: getHours() };
     };

     const { hours } = timeOfDay();

     if (hours >= 5 && hours <= 22) {
       Telegram.sendMessage.text(Twitter.newTweet.Text + "<br><br>" + Twitter.newTweet.LinkToTweet);
       Telegram.sendMessage.preview("1");
     } else {
       Telegram.sendMessage.skip();
     } // No changes needed