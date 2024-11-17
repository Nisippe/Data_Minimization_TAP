const Meta = {
       currentUserTime: {
         getHours: () => new Date().getHours()
       }
     };

     const Slack = {
       postToChannel: {}
     };

     const timeCheck = Meta.currentUserTime.getHours();
     const timeBoundary = 7;

     if (timeCheck < timeBoundary || timeCheck > 10) {
       Slack.postToChannel = {
         skip: message => console.log("Skip: " + message)
       };
       Slack.postToChannel.skip("Outside of commuting hours");
     }

     if (new Date().getDay() >= 6) {
       Slack.postToChannel = {
         skip: message => console.log("Skip: " + message)
       };
       Slack.postToChannel.skip("Not a weekday");
     }