const Netatmo = {
       rainTodayAmount: {
         MeasuredRainfallMM: "" // Remove unnecessary data attribute
       }
     };

     if (parseFloat(Netatmo.rainTodayAmount.MeasuredRainfallMM) < 5) {
       console.log("Skipping water-related action due to insufficient rainfall.");
       // Remove unnecessary Netro object and its skip function
     }