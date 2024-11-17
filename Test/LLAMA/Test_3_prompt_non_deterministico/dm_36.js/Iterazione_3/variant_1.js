const Weather = {
  tomorrow: {
    lowTempFahrenheit: 45
  }
};

if (Weather.tomorrow.lowTempFahrenheit > 40) {
  console.log("Notification skipped due to high temperature.");
}
// No changes needed.