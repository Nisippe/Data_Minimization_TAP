const Meta = {
currentUserTime: {
    hour: function() {
        return 23; 
    }
}
};

const IfNotifications = {
sendNotification: {
    skip: function(hour) {
        if (hour >= 22 || hour <= 8) {
            console.log("Notification skipped due to late/early hour.");
        }
    }
}
};

const Email = {
sendMeEmail: {
    skip: function(hour) {
        if (hour < 22 || hour > 8) {
            console.log("Email skipped because it's within notification hours.");
        }
    }
}
};

var hour = Meta.currentUserTime.hour();

IfNotifications.sendNotification.skip(hour);
Email.sendMeEmail.skip(hour);