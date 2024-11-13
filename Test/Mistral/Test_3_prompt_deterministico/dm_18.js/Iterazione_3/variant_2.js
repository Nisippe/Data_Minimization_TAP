const User = {
        getAge: () => 25,
        interests: []
     };

     User.interests = ["sports", "music", "technology", "travel"];

     const EventSystem = {
        sendEventInvite: function(event, user) {
            console.log("Event invite sent for: " + event);
            if (user.getAge() >= 18 && user.interests.includes("sports")) {
                console.log("Hello! You might be interested in this event based on your interests in " + user.interests.join(", ") + ". Event: " + event);
            }
        }
     };

     EventSystem.sendEventInvite("Join us for a sports event!", User);