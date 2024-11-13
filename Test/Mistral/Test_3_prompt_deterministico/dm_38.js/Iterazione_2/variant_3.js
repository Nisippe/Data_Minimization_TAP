const Strava = {
       newActivityByYou: {
         DistanceM: 5 // Essential attribute for calculating amount
       }
     };

     const Monzo = {
       potWithdraw: {
         setAmount: function(amount) {
           console.log("Amount set for withdrawal:", amount);
         }
       }
     };

     const distance = parseInt(Strava.newActivityByYou.DistanceM);
     Monzo.potWithdraw.setAmount((distance / 1000).toFixed(2)); // Calculate and pass the amount directly to Monzo function.