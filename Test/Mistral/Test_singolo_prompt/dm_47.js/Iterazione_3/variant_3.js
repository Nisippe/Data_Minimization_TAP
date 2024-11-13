const Meta = { hour: 15 }; // Removed unnecessary property "hour" alias

         const Woopla = {
           ttsCall: {
             skip: (message) => {
               const isDaytime = Meta.hour >= 6 && Meta.hour < 21;
               if (!isDaytime) {
                 return; // Exit early if not daytime
               }
               console.log(message);
             },
           },
         };

         Woopla.ttsCall.skip("No calls during daytime.");