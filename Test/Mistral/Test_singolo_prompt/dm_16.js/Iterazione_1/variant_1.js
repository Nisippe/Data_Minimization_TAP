const Netatmo = {
           measureRain: () => ({
             date: new Date(),
             rainfallMM: 5
           })
         };

         const Netro = {
           reportWeather: {
             setDate: function(date) {
               console.log("Date set:", date);
             },
             setRain: function(rain) {
               console.log("Rain amount set:", rain);
             },
             setRainProb: function(probability) {
               console.log("Rain probability set:", probability);
             }
           }
         };

         const { reportWeather } = Netro;
         const { date, rainfallMM } = Netatmo.measureRain();
         const rainChance = "100";

         reportWeather.setDate(date);
         reportWeather.setRain(rainfallMM);
         reportWeather.setRainProb(rainChance);