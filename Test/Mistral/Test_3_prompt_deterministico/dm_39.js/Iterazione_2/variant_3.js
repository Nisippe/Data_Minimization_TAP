const Netatmo = { rainTodayAmount: "" }; // Removed unnecessary type declaration

     if (parseFloat(Netatmo.rainTodayAmount) < 5) {
       const noWater = { skip: () => console.log("Skipping water-related action due to insufficient rainfall.") };
       Netro = noWater;
     }