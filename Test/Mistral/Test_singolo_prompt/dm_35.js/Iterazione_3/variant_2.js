const Ecobee = { motionDetected: { EventType: "" } };

         if (navigator.onLine) { // only check online status if necessary
           fetch('event-data') // replace with actual API call
             .then(response => response.json())
             .then(data => {
               Ecobee.motionDetected.EventType = data.EventType.toLowerCase();
             })
             .catch(error => console.error('Error:', error));
         }

         function processEvent() {
           const EventType = Ecobee.motionDetected.EventType;

           if (EventType) {
             const [, type] = EventType.split(":");
             if (type === "away") {
               Aquanta.cancelAway.skip();
             } else if (type === "home") {
               Aquanta.away.skip();
             }
           }
         }