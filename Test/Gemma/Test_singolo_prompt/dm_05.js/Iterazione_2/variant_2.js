const WeatherData = {
    temperature: 35,
  };
  
const Sms = {
  sendAlert: function() {
    console.log("High temperature alert sent!");
  }
};

if (WeatherData.temperature > 30) {
  console.log(`Temperature recorded: ${WeatherData.temperature}`);
  Sms.sendAlert();
}