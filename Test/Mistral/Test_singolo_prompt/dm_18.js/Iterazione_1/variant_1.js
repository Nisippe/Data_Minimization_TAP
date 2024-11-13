const User = {
            getAge: () => 25,
            getUserInterests: () => ["sports", "music", "technology", "travel"][0, 1] // return only first two interests
         };

         const EventSystem = {
            sendEventInvite: function(message, interest) {
                console.log("Event invite sent for: " + message + " " + interest + ". Event: Join us for a sports event!");
            }
         };

         const userInterests = User.getUserInterests();
         const [firstInterest, _] = userInterests; // destructure and discard the rest
         const eventDetails = "Join us for a sports event!";

         if (User.getAge() >= 18 && userInterests.includes("sports")) {
             EventSystem.sendEventInvite("Hello! You might be interested in this event based on your interest in ", firstInterest);
         }