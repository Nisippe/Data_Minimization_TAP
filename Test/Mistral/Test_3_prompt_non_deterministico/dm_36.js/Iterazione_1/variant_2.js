const Weather = {
       lowTempFahrenheit: "45"
     };

     const Notifications = {
       send: {
         skip: () => {
           console.log("Notification skipped due to high temperature.");
         }
       }
     };

     if (parseInt(Weather.lowTempFahrenheit) > 40) {
       Notifications.send.skip();
     }