const WeatherData = {
    temperature: 35,
    humidity: 80,
  };
  
const Sms = {
  sendAlert: function() {
    console.log("High temperature alert sent!");
  }
};

if (WeatherData.temperature > 30) {
  Sms.sendAlert();
}