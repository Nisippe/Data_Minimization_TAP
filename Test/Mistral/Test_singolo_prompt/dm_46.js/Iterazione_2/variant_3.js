const Meta = {
          currentUserTime: { hour: () => 6 },
        };

        const Clicksend = {
          sendSms: {
            skip: () => console.log("SMS skipped due to non-allowed hours."),
          },
        };

        const timeOfDay = Meta.currentUserTime.hour();

        if (timeOfDay > 5 || timeOfDay < 9) {
          Clicksend.sendSms.skip();
        }