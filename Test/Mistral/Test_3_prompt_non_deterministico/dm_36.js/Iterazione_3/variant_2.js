const Weather = {
       tomorrowsLowTemp: "45" // Removed the unit "Fahrenheit" as it's not necessary for the condition
     };

     if (parseInt(Weather.tomorrowsLowTemp) > 40) {
       console.log("Notification skipped due to high temperature.");
     }