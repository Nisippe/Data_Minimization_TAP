const Netatmo = {
       rainTodayAmount: 3.5,
     };

     function skipWaterAction() {
       console.log("Skipping water-related action due to insufficient rainfall.");
     }

     if (Netatmo.rainTodayAmount < 5) {
       skipWaterAction();
     }