const Meta = {
       currentUserTime: {
         hour: () => 8,
       },
     };

     const PhoneCall = {
       callMyPhone: {
         skip: (message) => {
           if (Meta.currentUserTime.hour() < 22 && Meta.currentUserTime.hour() > 6) {
             console.log("Call skipped:", message);
           }
         },
       },
     };

     PhoneCall.callMyPhone.skip("Not during sleeping hours"); // No changes needed