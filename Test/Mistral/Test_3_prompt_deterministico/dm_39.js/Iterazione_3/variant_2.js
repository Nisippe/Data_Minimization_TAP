const MINIMUM_RAINFALL = 5;
     const Netatmo = { rainTodayAmount: "3.5" };

     if (parseFloat(Netatmo.rainTodayAmount) < MINIMUM_RAINFALL) {
       console.log("Skipping water-related action due to insufficient rainfall.");
     }