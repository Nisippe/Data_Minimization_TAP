const Netatmo = {
    rainTodayAmount: {
        MeasuredRainfallMM: "3.5"
    }
};

if (parseFloat(Netatmo.rainTodayAmount.MeasuredRainfallMM) < 5) {
    console.log("Skipping water-related action due to insufficient rainfall.");
}

// No changes needed.