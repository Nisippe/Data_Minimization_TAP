const Netatmo = {
    RainfallMM: "3.5"
};

if (parseFloat(Netatmo.RainfallMM) < 5) {
    console.log("Skipping water-related action due to insufficient rainfall.");
}