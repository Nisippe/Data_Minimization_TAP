const Meta = { hour: 15 };

     const Woopla = {
       ttsCall: {
         skip: (message) => {
           console.log(message);
         }
       }
     };

     const hour = Meta.hour;

     if (hour >= 6 && hour < 21) {
       Woopla.ttsCall.skip("No calls during daytime.");
     }