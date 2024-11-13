const Netatmo = { rainTodayAmount: "3.5" };

     const Netro = {
       noWater: {
         skip: () => {
           console.log("Skipping water-related action due to insufficient rainfall.");
         }
       }
     };

     if (parseFloat(Netatmo.rainTodayAmount) < 5) {
       Netro.noWater.skip();
     }