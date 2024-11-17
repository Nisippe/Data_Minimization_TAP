const Weather = {
tomorrowsWeatherAtTime: {
    LowTempFahrenheit: 45
}
};

if (Weather.tomorrowsWeatherAtTime.LowTempFahrenheit > 40) {
console.log("Notification skipped due to high temperature.");
}