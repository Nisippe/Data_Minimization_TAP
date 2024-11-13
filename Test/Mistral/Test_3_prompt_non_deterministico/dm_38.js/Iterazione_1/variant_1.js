const Strava = {
       newActivityByYou: {
         DistanceM: 5 // Reduced from "5000" to "5" for data minimization
       }
     };

     const Monzo = {
       potWithdraw: {
         setAmount: function(amount) {
           console.log("Amount set for withdrawal:", amount);
         }
       }
     };

     var distance = parseInt(Strava.newActivityByYou.DistanceM);
     var amount = distance / 1000;
     Monzo.potWithdraw.setAmount(amount.toFixed(2));