const Weather = {
tomorrowsWeatherAtTime: {
    LowTempFahrenheit: 45
}
};

const IfNotifications = {
sendNotification: {
    skip: function() {
    console.log("Notification skipped due to high temperature.");
    }
}
};

if (Weather.tomorrowsWeatherAtTime.LowTempFahrenheit > 40) {
IfNotifications.sendNotification.skip();
}