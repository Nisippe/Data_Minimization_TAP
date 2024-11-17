const User = {
    getAge: function() {
        return 25;
    },
    getUserInterests: function() {
        return ["sports", "music", "technology", "travel"];
    }
};

const EventSystem = {
    sendEventInvite: function(event) {
        console.log("Event invite sent for: " + event);
    }
};

var userAge = User.getAge();
var userInterests = User.getUserInterests();

if (userAge >= 18 && userInterests.includes("sports")) {
    EventSystem.sendEventInvite("Event: Join us for a sports event!");
}