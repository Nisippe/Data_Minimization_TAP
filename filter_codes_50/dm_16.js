// Data minimization problem:
// 1. The full `MeasuredAt` timestamp is used to set the date, but only the relevant date portion (without the time) is necessary to report rainfall data.
// 2. The entire `MeasuredAt` timestamp is being processed and exposed when only the specific date is needed for the report.
// 3. The code also includes a hardcoded value for rain probability (`rainChance`) which might be unnecessary or irrelevant to the actual rainfall amount, further exposing data.
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
var rainChance = "100";

report.setDate(rainfallDate);
report.setRain(rainAmountToday);
report.setRainProb(rainChance);
