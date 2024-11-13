const currentMinute = new Date().getMinutes();

     if (currentMinute % 5 === 0) {
       PhoneCall.callMyPhone.skip();
     }