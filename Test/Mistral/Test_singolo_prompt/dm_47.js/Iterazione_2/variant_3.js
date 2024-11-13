const Meta = { hour: 15 }; // Removed unnecessary property "currentUserTime"

         const Woopla = {
           ttsCall: {
             skip: (message) => {
               const isDaytime = Meta.hour >= 6 && Meta.hour < 21;
               if (isDaytime) {
                 console.log(message);
               }
             },
           },
         };

         Woopla.ttsCall.skip("No calls during daytime.");