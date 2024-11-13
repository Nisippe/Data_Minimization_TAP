const Meta = { getMinute: () => new Date().getMinutes() };

     const currentMinute = Meta.getMinute();

     if (currentMinute % 5 === 0) {
       PhoneCall.callMyPhone.skip();
     }