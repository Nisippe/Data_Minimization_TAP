const Ecobee = { motionDetected: {} };
         const Aquanta = { cancelAway: {}, away: {} };

         Ecobee.motionDetected = { EventType: "" };

         if (navigator.online) { // only check online status if necessary
           fetch('event-data') // replace with actual API call
             .then(response => response.json())
             .then(data => {
               Ecobee.motionDetected.EventType = data.EventType.toLowerCase();
               processEvent();
             })
             .catch(error => console.error('Error:', error));
         }

         function processEvent() {
           const EventType = Ecobee.motionDetected.EventType;

           if (EventType.indexOf("away") != -1) {
             Aquanta.cancelAway.skip();
           } else if (EventType.indexOf("home") != -1) {
             Aquanta.away.skip();
           }
         }