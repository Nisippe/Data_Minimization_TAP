const Netatmo = {
    MeasuredRainfall: "3.5"
};

if (parseFloat(Netatmo.MeasuredRainfall) < 5) {
    console.log("Skipping water-related action due to insufficient rainfall.");
}