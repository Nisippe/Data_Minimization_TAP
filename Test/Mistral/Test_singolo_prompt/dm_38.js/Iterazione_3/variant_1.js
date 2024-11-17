const Strava = {
       newActivityByYou: {
         DistanceMeters: "" // Remove hardcoded value, make it dynamic
       }
     };

     const Monzo = {
       potWithdraw: {
         setAmount: function(amount) {
           console.log("Amount set for withdrawal:", amount);
         }
       }
     };

     function getDistanceInKilometers(distanceMeters) {
       return distanceMeters / 1000;
     }

     Strava.newActivityByYou.DistanceMeters = ""; // Make it dynamic
     var distance = parseInt(Strava.newActivityByYou.DistanceMeters);
     var amount = getDistanceInKilometers(distance);
     Monzo.potWithdraw.setAmount(amount.toFixed(2));