const Netatmo = { rainTodayAmount: 3.5 };
     const Netro = { skip: () => { console.log("Skipping water-related action due to insufficient rainfall.");} };

     if (Netatmo.rainTodayAmount < 5) {
       Netro.skip();
     }