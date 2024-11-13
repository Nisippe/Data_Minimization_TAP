const Netatmo = { rainAmount: 5 }; // Changed name to avoid unnecessary "Today"

     const Netro = {
       reportWeather: {
         setRain: function(rain) {
           console.log("Rain amount:", rain);
         }
       }
     };

     const report = Netro.reportWeather;

     report.setRain(Netatmo.rainAmount); // No need to set date separately