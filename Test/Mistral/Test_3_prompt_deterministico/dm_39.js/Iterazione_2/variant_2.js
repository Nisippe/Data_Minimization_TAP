const Netatmo = { rainTodayAmount: "3.5" };

     if (parseFloat(Netatmo.rainTodayAmount) < 5) {
       console.log("Skipping water-related action due to insufficient rainfall.");
     }