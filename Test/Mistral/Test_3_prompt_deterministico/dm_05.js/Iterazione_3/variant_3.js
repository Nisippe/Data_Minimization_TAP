const WeatherData = { temperature: 35 }; // Removed location attribute as it's not necessary for the given code

     const Sms = {
       sendAlert: function() {
         console.log("High temperature alert sent!");
       }
     };

     if (WeatherData.temperature > 30) {
       console.log("High temperature");
       Sms.sendAlert();
     }