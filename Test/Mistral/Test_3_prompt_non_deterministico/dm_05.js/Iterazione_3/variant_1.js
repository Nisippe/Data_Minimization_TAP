const WeatherData = { temperature: 35 }; // Remove location property if not necessary for processing

     const Sms = { sendAlert: function() { console.log("High temperature alert sent!"); } };

     if (WeatherData.temperature > 30) {
       console.log("High temperature");
       Sms.sendAlert();
     }