const Meta = {
currentUserTime: {
    hour: function() {
    return 23;
    }
}
};

const IfNotifications = {
sendNotification: {
    skip: function(message) {
    console.log("Notification skipped:", message);
    }
}
};

var timeOfDay = Meta.currentUserTime.hour();

if (timeOfDay >= 22 || timeOfDay < 8) {
IfNotifications.sendNotification.skip("Too late");
}