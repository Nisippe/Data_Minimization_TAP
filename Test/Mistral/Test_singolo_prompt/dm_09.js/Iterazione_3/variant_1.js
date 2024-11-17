const Meta = {
       currentUserTime: { getHours: () => new Date().getHours() }
     };

     const Slack = { postToChannel: null };

     const timeCheck = Meta.currentUserTime.getHours();
     const timeBoundary = 7;

     if (timeCheck < timeBoundary || timeCheck > 10 || new Date().getDay() >= 6) {
       Slack.postToChannel = { skip: console.log };
       Slack.postToChannel.skip("Outside of commuting hours or weekends");
     }