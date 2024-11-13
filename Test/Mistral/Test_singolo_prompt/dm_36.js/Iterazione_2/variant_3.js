const Weather = {
          tomorrowsWeather: { temp: "45" },
        };

        const IfNotifications = {
          sendNotification: {
            skip: () => {
              console.log("Notification skipped due to high temperature.");
            },
          },
        };

        if (parseInt(Weather.tomorrowsWeather.temp) > 40) {
          IfNotifications.sendNotification.skip();
        }