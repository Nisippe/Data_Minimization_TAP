const Strava = {
       newActivityByYou: {
         DistanceMeters: null,
       },
     };

     Strava.newActivityByYou.DistanceMeters = 5000; // Set the value when needed

     const Monzo = {
       potWithdraw: {
         setAmount: function(amount) {
           console.log("Amount set for withdrawal:", amount);
         },
       },
     };

     Monzo.potWithdraw.setAmount((Strava.newActivityByYou.DistanceMeters / 1000).toFixed(2)); // Get the value directly from Strava object