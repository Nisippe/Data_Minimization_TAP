const WeatherData = {
       temperature: 35,
       location: "Tokyo"
     };

     const Sms = {
       sendAlert: function() {
         console.log("High temperature alert sent!");
       }
     };

     if (WeatherData.temperature > 30) {
       console.log("High temperature in " + WeatherData.location);
       Sms.sendAlert();
     }