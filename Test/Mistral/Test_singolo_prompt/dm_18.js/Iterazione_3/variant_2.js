const User = {
            getAge: () => 25,
            getUserInterests: () => ["sports", "music"] // return only first two interests
         };

         const EventSystem = {
            sendEventInvite: function(message, interest) {
                console.log("Event invite sent for: " + message + " " + interest + ". Event: Join us for a sports event!");
            }
         };

         const [firstInterest, _] = User.getUserInterests();
         const eventDetails = "Join us for a sports event!";

         if (User.getAge() >= 18 && User.getUserInterests().includes("sports")) {
             EventSystem.sendEventInvite("Hello! You might be interested in this event based on your interest in ", firstInterest);
         }