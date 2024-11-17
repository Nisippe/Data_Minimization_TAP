const Meta = {
    getUserLocation: function() {
        return "New York";
    }
};

const NotificationSystem = {
    sendNotification: function(message) {
        console.log("Notification sent: " + message);
    }
};

var message = "Hello, we have an update for you!";
var timestamp = new Date().toISOString();

if (Meta.getUserLocation() === "New York") {
    NotificationSystem.sendNotification(message + " Time: " + timestamp);
}