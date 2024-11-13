const Strava = {
       newActivityByYou: { DistanceM: 5 } // Essential attribute only
     };

     const Monzo = {
       potWithdraw: {
         setAmount: function(amount) {
           console.log("Amount set for withdrawal:", amount);
         }
       }
     };

     Monzo.potWithdraw.setAmount((Strava.newActivityByYou.DistanceM / 1000).toFixed(2)); // Calculate and pass the amount directly from Strava