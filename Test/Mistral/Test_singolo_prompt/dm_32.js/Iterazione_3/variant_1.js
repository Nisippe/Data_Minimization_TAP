const Meta = {
           currentUserTime: {
             hour: () => 8,
           },
         };

         const PhoneCall = {
           callMyPhone: {
             skip: (message) => {
               console.log("Call skipped:", message);
             },
           },
         };

         const hour = Meta.currentUserTime.hour();

         if (hour >= 6 && hour <= 22) {
           PhoneCall.callMyPhone.skip("Not during sleeping hours");
         } else {
           console.log("Calling during sleeping hours.");
         } // No changes needed