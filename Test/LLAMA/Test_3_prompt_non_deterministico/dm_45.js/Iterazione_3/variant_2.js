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

const Email = {
    skip: function() {
        console.log("Email skipped because it's within notification hours.");
    }
};

var hour = Meta.hour();

if (hour >= 22 || hour <= 8) {
    IfNotifications.skip();
} else {
    Email.skip();
}