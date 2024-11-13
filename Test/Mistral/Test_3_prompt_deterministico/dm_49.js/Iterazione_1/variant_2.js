const Meta = {
       currentUserTime: { hour: () => 5 } // arrow function for better performance and less context
     };

     const Inoreader = {
       markFolderAsRead: {
         skip: () => console.log("Skipping mark as read - hour does not match specified intervals.")
       }
     };

     const hour = Meta.currentUserTime.hour();

     const validHours = [0, 3, 6, 9, 12, 15, 18, 21];

     if (!validHours.includes(hour)) {
       Inoreader.markFolderAsRead.skip();
     }