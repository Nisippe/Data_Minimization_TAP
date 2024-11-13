const Netatmo = { rainAmountToday: 5 };

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

     report.setDate(new Date());
     report.setRain(Netatmo.rainAmountToday);