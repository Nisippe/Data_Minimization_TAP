const Meta = {
       currentUserTime: { hour: 15 }
     };

     const Woopla = {
       ttsCall: {
         skip: (message) => {
           console.log(message);
         }
       }
     };

     const hour = Meta.currentUserTime.hour;

     if (hour >= 6 && hour < 21) {
       Woopla.ttsCall.skip("No calls during daytime.");
     }