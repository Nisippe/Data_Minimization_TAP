const Netatmo = {
           measureRain: () => ({ date: new Date(), rainfallMM: 5 })
         };

         const Netro = {
           reportWeather: {
             setDate: function(date) { /* No changes needed */ },
             setRain: function(rainfallMM) { /* No changes needed */ },
             setRainProb: function(probability = 100) { /* No changes needed */ }
           }
         };

         const { reportWeather } = Netro;
         const { date, rainfallMM } = Netatmo.measureRain();

         reportWeather.setDate(date);
         reportWeather.setRain(rainfallMM);
         reportWeather.setRainProb(); // Remove unnecessary rainChance variable // No changes needed