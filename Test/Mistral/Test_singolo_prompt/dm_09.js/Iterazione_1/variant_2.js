const Meta = {
       currentUserTime: {
         hour: () => new Date().getHours(),
         day: () => new Date().getDay()
       }
     };

     const Slack = {
       postToChannel: {
         skip: message => console.log("Skip: " + message)
       }
     };

     const timeCheck = Meta.currentUserTime.hour();
     const currentDay = Meta.currentUserTime.day();
     const timeBoundary = 7;

     if (timeCheck < timeBoundary || timeCheck > 10) {
       Slack.postToChannel.skip("Outside of commuting hours");
     }

     if (currentDay === 6 || currentDay === 7) {
       Slack.postToChannel.skip("Not a weekday");
     }