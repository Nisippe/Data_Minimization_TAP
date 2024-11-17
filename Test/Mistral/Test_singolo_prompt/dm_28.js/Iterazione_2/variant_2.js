const Meta = {
       currentUserTime: {
         hour: () => 8,
         day: () => 5,
       },
     };

     const Slack = {
       postToChannel: {
         skip: message => console.log("Slack post skipped:", message),
       },
     };

     const [Hour, Day] = [Meta.currentUserTime.hour(), Meta.currentUserTime.day()];

     if ([6, 7].includes(Day)) {
       Slack.postToChannel.skip("Not a weekday");
     } else if (Hour < 7 || Hour > 9) {
       Slack.postToChannel.skip("Not morning commute hours");
     } else {
       console.log("Posting to Slack during weekday morning commute hours.");
     }