const Meta = { currentUserHour: null };

     const IfNotifications = { sendNotification: {} };
     const Email = { sendEmail: {} };

     Meta.getCurrentHour = () => 23;

     IfNotifications.sendNotification.check = () => {
         Meta.currentUserHour = Meta.getCurrentHour();
         if (Meta.currentUserHour >= 22 || Meta.currentUserHour <= 8) {
             console.log("Notification skipped due to late/early hour.");
             return true;
         }
         return false;
     };

     Email.sendEmail = () => {
         if (IfNotifications.sendNotification.check()) return;
         console.log("Email skipped because it's within notification hours.");
     };

     IfNotifications.sendNotification.execute = () => Email.sendEmail();

     IfNotifications.sendNotification.check();