const Meta = { currentUserTime: { hour: () => 5 } };

     const Inoreader = { markFolderAsRead: { skip: () => console.log("Skipping mark as read") } };

     const hour = Meta.currentUserTime.hour();

     if ([0, 3, 6, 9, 12, 15, 18, 21].includes(hour)) {
       Inoreader.markFolderAsRead.skip();
     }