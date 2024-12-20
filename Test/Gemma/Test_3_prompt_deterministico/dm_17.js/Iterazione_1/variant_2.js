const Meta = {
    getUserLocation: function() {
        return "New York";
    },
    getUserPreferences: function() {
        return {
            likesNotifications: true,
            emailUpdates: true,
            smsUpdates: false
        };
    }
};

const NotificationSystem = {
    sendNotification: function(message) {
        console.log("Notification sent: " + message);
    }
};

var userLocation = Meta.getUserLocation();
var userPreferences = Meta.getUserPreferences();
var message = "Hello, we have an update for you!";

if (userPreferences.likesNotifications && userLocation === "New York") {
    console.log("Notification sent: " + message + " Time: " + new Date().toISOString());
}