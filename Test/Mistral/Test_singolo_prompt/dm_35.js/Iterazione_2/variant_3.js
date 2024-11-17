const Ecobee = {
       motionDetected: {
         EventType: "",
       }
     };

     const Aquanta = {
       cancelAway: {
         skip: function() {
           console.log("Cancel Away skipped.");
         }
       },
       away: {
         skip: function() {
           console.log("Away action skipped.");
         }
       }
     };

     Ecobee.motionDetected.EventType = "Home".toLowerCase();

     if (Ecobee.motionDetected.EventType === "away") {
       Aquanta.cancelAway.skip();
     } else if (Ecobee.motionDetected.EventType === "home") {
       Aquanta.away.skip();
     }