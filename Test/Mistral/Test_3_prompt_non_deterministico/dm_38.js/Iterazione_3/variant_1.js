const Strava = {
       newActivityByYou: {
         DistanceM: 5 // Essential attribute for calculating amount
       }
     };

     const Monzo = {
       potWithdraw: {
         setAmount: function(amount) {
           console.log("Amount set for withdrawal:", amount);
           this.amount = amount; // Store the amount directly
         }
       }
     };

     Monzo.potWithdraw.setAmount(Strava.newActivityByYou.DistanceM / 1000); // Calculate and pass the amount directly to Monzo object