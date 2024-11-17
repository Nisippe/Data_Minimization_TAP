const Netatmo = {
    MeasuredRainfallMM: "3.5"
};

if (parseFloat(Netatmo.MeasuredRainfallMM) < 5) {
    function skip() {
        console.log("Skipping water-related action due to insufficient rainfall.");
    }
    skip();
}