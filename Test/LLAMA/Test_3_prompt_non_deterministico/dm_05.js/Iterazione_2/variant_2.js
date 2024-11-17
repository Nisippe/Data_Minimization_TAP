const WeatherData = {
  location: "Tokyo",
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