const WeatherData = { temperature: 35, location: "Tokyo" };

     const Sms = { sendAlert: () => console.log("High temperature alert sent!") };

     if (WeatherData.temperature > 30) {
       console.log(`Temperature in ${WeatherData.location}: ${WeatherData.temperature}`);
       Sms.sendAlert();
     }