const Meta = {
     triggerTime: {
     getMinute: function() {
     return new Date().getMinutes();
     }
    }
   };

   const currentMinute = Meta.triggerTime.getMinute();

   if (currentMinute % 5 === 0) {
     PhoneCall.callMyPhone.skip();
   }