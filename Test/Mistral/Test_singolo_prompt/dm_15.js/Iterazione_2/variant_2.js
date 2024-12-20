const Meta = {
       triggerTime: {
         getMinute: function() {
           return new Date().getMinutes();
         }
       }
     };

     const PhoneCall = {
       call: {
         skip: function() {
           console.log("Phone call skipped.");
         }
       }
     };

     const currentMinute = Meta.triggerTime.getMinute();

     if (currentMinute % 5 === 0) {
       PhoneCall.call.skip();
     }