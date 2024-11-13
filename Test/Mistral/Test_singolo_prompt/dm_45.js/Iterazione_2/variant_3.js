const Meta = {
           currentUserHour: () => 23,
         };

         const IfNotifications = {
           sendNotification: {
             skip: () => console.log("Notification skipped due to late/early hour."),
           },
         };

         const Email = {
           sendEmail: {
             skip: () => console.log("Email skipped because it's within notification hours."),
           },
         };

         const hour = Meta.currentUserHour();

         (hour >= 22 || hour <= 8)
           ? IfNotifications.sendNotification.skip()
           : Email.sendEmail.skip();