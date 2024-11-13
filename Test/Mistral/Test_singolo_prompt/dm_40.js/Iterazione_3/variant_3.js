const Meta = {
          currentUserTime: {
            hour: () => 23, // Make it an arrow function to reduce the scope
          },
        };

        const ifNotifications = {
          sendNotification: {
            skip: (message) => {
              console.log(`Notification skipped: ${message}`);
            },
          },
        };

        const feedly = {
          createNewEntryFeedly: {
            skip: (message) => {
              console.log(`Feedly entry skipped: ${message}`);
            },
          },
        };

        const timeOfDay = Meta.currentUserTime.hour();

        if (timeOfDay >= 22 || timeOfDay < 8) {
          ifNotifications.sendNotification.skip("Too late");
        } else {
          feedly.createNewEntryFeedly.skip("I already know");
        }