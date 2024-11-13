const WeatherData = {
       temperature: 35,
       location: "Tokyo",
       // humidity: 80 (if humidity is not necessary for the purpose of processing, it can be removed)
     };

     const Sms = {
       sendAlert: function() {
         console.log("High temperature alert sent!");
       }
     };

     if (WeatherData.temperature > 30) {
       console.log(`Temperature recorded in ${WeatherData.location}: ${WeatherData.temperature}`);
       Sms.sendAlert();
     }