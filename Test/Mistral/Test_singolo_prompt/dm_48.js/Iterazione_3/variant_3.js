const Meta = {
          currentUserTime: { hour: () => 23 },
        };

        const Heatmiser = {
          setTemp: {
            skip: () => console.log("Temperature adjustment skipped due to late/early hour."),
          },
        };

        const timeOfDay = Meta.currentUserTime.hour();

        if (timeOfDay < 6 || timeOfDay >= 22) {
          Heatmiser.setTemp.skip();
        }