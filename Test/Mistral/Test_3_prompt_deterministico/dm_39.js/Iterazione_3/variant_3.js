const Netatmo = { rainTodayAmount: "" };

     if (parseFloat(Netatmo.rainTodayAmount) < 5) {
       Netatmo.skip = () => console.log("Skipping water-related action due to insufficient rainfall.");
     }