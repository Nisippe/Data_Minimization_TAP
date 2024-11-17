const Meta = {
    hour: function() {
        return 23; 
    }
};

const IfNotifications = {
    skip: function() {
        console.log("Notification skipped due to late/early hour.");
    }
};

var hour = Meta.hour();

if (hour >= 22 || hour <= 8) {
    IfNotifications.skip();
}