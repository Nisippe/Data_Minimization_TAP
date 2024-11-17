const Netatmo = {
       rainToday: {
         date: new Date(),
         rainfallMM: 5
       }
     };

     const Netro = {
       reportWeather: {
         setDate: function(date) {
           console.log("Date set:", date);
         },
         setRain: function(rain) {
           console.log("Rain amount set:", rain);
         }
       }
     };

     const report = Netro.reportWeather;
     const rainAmount = Netatmo.rainToday.rainfallMM;

     report.setDate(Netatmo.rainToday.date);
     report.setRain(rainAmount);