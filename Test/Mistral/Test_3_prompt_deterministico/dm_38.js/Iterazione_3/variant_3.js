const Strava = {
       newActivityByYou: {
         distance: 5, // Reduced the distance to a minimum value
       },
     };

     const Monzo = {
       potWithdraw: {
         setAmount: function(amount) {
           this.amount = amount; // Assumed 'this' refers to Monzo.potWithdraw
           console.log("Amount set for withdrawal:", amount);
         },
       },
     };

     Monzo.potWithdraw.setAmount(Strava.newActivityByYou.distance / 1000);