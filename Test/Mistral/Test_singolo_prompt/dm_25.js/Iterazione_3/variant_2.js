const GoogleCalendar = {
       eventFromSearchStarts: {
         Title: "",
         StartTime: "",
         collectData: function(data) {
           if (this.Title.toUpperCase() === "WORK") return; // Reduce anonymization if necessary
           data = { eventTitle: this.Title, eventStartTime: this.StartTime }; // Eliminate unnecessary attributes
           console.log("Event Data Collected: ", data);
         }
       }
     };

     // Mocking the Ecobee object
     const Ecobee = {
       climateNextTransition: {}
     };

     GoogleCalendar.eventFromSearchStarts.collectData.bind(GoogleCalendar.eventFromSearchStarts)(); // Remove unnecessary function call to skip()