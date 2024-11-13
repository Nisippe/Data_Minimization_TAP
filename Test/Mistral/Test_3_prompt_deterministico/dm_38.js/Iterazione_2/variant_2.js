const Strava = {
       newActivityByYou: {
         distance: "5000", // Set the value directly
       },
     };

     const Monzo = {
       potWithdraw: {
         setAmount: function(amount) {
           console.log("Amount set for withdrawal:", amount);
         },
       },
     };

     Monzo.potWithdraw.setAmount(parseFloat(Strava.newActivityByYou.distance) / 1000);