const Netatmo = {
       rainToday: { date: new Date(), rainfallMM: 5 }
     };

     const report = {
       setDate: function(date) {
         console.log("Date set:", date);
       },
       setRain: function(rain) {
         console.log("Rain amount set:", rain);
       }
     };

     report.setDate(Netatmo.rainToday.date);
     report.setRain(Netatmo.rainToday.rainfallMM);