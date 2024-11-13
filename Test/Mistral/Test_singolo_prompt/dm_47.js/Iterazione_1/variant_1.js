const Meta = {
           currentUserTime: { hour: 15 },
         };

         const Woopla = {
           ttsCall: {
             skip: (message) => {
               if (Meta.currentUserTime.hour >= 6 && Meta.currentUserTime.hour < 21) {
                 console.log(message);
               }
             },
           },
         };

         Woopla.ttsCall.skip("No calls during daytime.");