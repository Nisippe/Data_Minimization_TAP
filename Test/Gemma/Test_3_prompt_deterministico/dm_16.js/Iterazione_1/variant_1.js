const Netatmo = {
rainTodayAmount: {
    MeasuredAt: new Date(),
    MeasuredRainfallMM: 5
}
};

const Netro = {
reportWeather: {
    setDate: function(date) {
    console.log("Date set:", date);
    },
    setRain: function(rain) {
    console.log("Rain amount set:", rain);
    },
    setRainProb: function(probability) {
    console.log("Rain probability set:", probability);
    }
}
};

var report = Netro.reportWeather;
var rainAmountToday = Netatmo.rainTodayAmount.MeasuredRainfallMM;
var rainfallDate = Netatmo.rainTodayAmount.MeasuredAt;

report.setDate(rainfallDate);
report.setRain(rainAmountToday);