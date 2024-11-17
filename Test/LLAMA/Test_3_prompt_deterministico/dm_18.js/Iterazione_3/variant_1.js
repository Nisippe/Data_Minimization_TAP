const User = {
    getAge: function() {
        return 25;
    }
};

const EventSystem = {
    sendEventInvite: function(event) {
        console.log("Event invite sent for: " + event);
    }
};

var userAge = User.getAge();
var eventDetails = "Join us for a sports event!";

if (userAge >= 18 && ["sports", "music", "technology", "travel"].includes("sports")) {
    EventSystem.sendEventInvite("Event: " + eventDetails);
}