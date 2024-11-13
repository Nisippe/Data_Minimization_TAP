const Strava = {
       newActivityByYou: {
         DistanceMeters: null, // Set to null and get value when needed
       },
     };

     const Monzo = {
       potWithdraw: {
         setAmount: function(amount) {
           console.log("Amount set for withdrawal:", amount);
         },
       },
     };

     Strava.newActivityByYou.DistanceMeters = "5000"; // Set the value when needed
     const distance = parseInt(Strava.newActivityByYou.DistanceMeters);
     Monzo.potWithdraw.setAmount((distance / 1000).toFixed(2));