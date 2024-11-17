const Weather = {
       tomorrowsWeatherAtTime: {
         LowTempFahrenheit: ""
       }
     };

     const IfNotifications = {
       sendNotification: {
         skip: function() {
           console.log("Notification skipped due to high temperature.");
         }
       }
     };

     if (Weather.tomorrowsWeatherAtTime.LowTempFahrenheit && parseInt(Weather.tomorrowsWeatherAtTime.LowTempFahrenheit) > 40) {
       IfNotifications.sendNotification.skip();
     }