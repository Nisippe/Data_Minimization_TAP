const NetatmoThreshold = 5;
     const Netatmo = { rainTodayAmount: 3.5 };

     if (Netatmo.rainTodayAmount < NetatmoThreshold) {
       console.log("Skipping water-related action due to insufficient rainfall.");
     }