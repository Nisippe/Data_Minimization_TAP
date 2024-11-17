const Meta = {
       currentUserTime: {
         hour: () => 23, // Change to a getter function or constant if hour value is fixed
       },
     };

     const Notifications = {
       send: {
         skip: () => console.log("Notification skipped due to late/early hour."), // Combine functions if necessary
       },
     };

     const Email = {
       send: {
         skip: () => console.log("Email skipped because it's within notification hours."), // Combine functions if necessary
       },
     };

     const hour = Meta.currentUserTime.hour();

     hour >= 22 || hour <= 8 ? Notifications.send.skip() : Email.send.skip();