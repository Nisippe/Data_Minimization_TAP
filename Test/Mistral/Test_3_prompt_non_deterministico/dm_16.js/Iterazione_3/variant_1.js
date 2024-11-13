const Netatmo = { rainAmount: 5 };

     const reportWeather = {
       setRain: function(rain) {
         console.log("Rain amount:", rain);
       }
     };

     reportWeather.setRain(Netatmo.rainAmount);