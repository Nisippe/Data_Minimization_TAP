const Netatmo = { rainAmount: 5 }; // Changed name to avoid unnecessary object with single property

     const reportWeather = {
       setDate: function(date) {
         console.log("Date set:", date);
       },
       setRain: function(rain) {
         console.log("Rain amount set:", rain);
       }
     };

     reportWeather.setDate(new Date());
     reportWeather.setRain(Netatmo.rainAmount); // Changed property name to match the variable name