const Meta = {
        getUserLocation: () => "New York",
        getUserPreferences: () => ({ likesNotifications: true }) // Remove emailUpdates if not necessary
    };

    const NotificationSystem = {
        sendNotification: message => console.log(message)
    };

    const userPreferences = Meta.getUserPreferences();
    const message = "Hello, we have an update for you!";

    if (userPreferences.likesNotifications) {
        NotificationSystem.sendNotification(message);
    }