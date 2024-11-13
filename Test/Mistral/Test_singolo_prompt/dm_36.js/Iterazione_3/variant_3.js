const Weather = { temp: "45" }; // Removed unnecessary property "tomorrowsWeather"

        const IfNotifications = {
          sendNotification: {
            skip: () => {
              console.log("Notification skipped due to high temperature.");
            },
          },
        };

        if (parseInt(Weather.temp) > 40) {
          IfNotifications.sendNotification.skip();
        }