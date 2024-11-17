// Data minimization problem:
// 1. The full user location ("New York") is checked, but only the location name is required for this decision. The full string could potentially expose more data than needed (e.g., city name might not be required).
// 2. The timestamp (`timestamp`) is added to the notification, which may not be necessary for the purpose of the message and could expose more information than needed.
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
var timestamp = new Date().toISOString();

if (userPreferences.likesNotifications && userLocation === "New York") {
    NotificationSystem.sendNotification(message + " Time: " + timestamp);
}
