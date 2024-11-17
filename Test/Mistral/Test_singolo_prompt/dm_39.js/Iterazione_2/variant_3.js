const Netatmo = {
       rainTodayAmount: {
         MeasuredRainfallMM: "" // Remove unnecessary data and set to empty string
       }
     };

     const Netro = {
       noWater: {
         skip: function() {
           console.log("Skipping water-related action due to insufficient rainfall.");
         }
       }
     };

     if (parseFloat(Netatmo.rainTodayAmount.MeasuredRainfallMM) < 5) {
       Netro.noWater.skip();
     }