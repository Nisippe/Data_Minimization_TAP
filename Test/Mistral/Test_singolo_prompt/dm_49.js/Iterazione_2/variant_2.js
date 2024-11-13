const Meta = {
          currentUserTime: {
            hour: () => 5, // Make function arrow function to reduce scope and improve performance
          },
        };

        const Inoreader = {
          markFolderAsRead: {
            skip: () => {
              console.log("Skipping mark as read - hour does not match specified intervals.");
            },
          },
        };

        const hour = Meta.currentUserTime.hour();

        const validHours = [0, 3, 6, 9, 12, 15, 18, 21];

        if (!validHours.includes(hour)) {
          Inoreader.markFolderAsRead.skip();
        }