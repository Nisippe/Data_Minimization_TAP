const Strava = {
          newActivityByYou: {
            DistanceMeters: null, // Set to null to avoid storing unnecessary string value
          },
        };

        const Monzo = {
          potWithdraw: {
            setAmount: function (value) {
              console.log("Amount set for withdrawal:", value);
            },
          },
        };

        if (Strava.newActivityByYou.DistanceMeters) {
          Strava.newActivityByYou.DistanceMeters = parseInt(Strava.newActivityByYou.DistanceMeters);
          const amount = Strava.newActivityByYou.DistanceMeters / 1000;
          Monzo.potWithdraw.setAmount(amount.toFixed(2));
        } // No changes needed