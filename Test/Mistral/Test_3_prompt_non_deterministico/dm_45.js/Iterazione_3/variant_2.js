const Meta = { currentUserHour: null };

     Meta.getCurrentHour = () => 23;

     const IfNotifications = { check: () => {} };

     IfNotifications.execute = () => {
         Meta.currentUserHour = Meta.getCurrentHour();
         if (Meta.currentUserHour >= 22 || Meta.currentUserHour <= 8) {
             console.log("Notification skipped due to late/early hour.");
             return;
         }
         Email.sendEmail();
     };

     IfNotifications.check = () => {};

     IfNotifications.execute();