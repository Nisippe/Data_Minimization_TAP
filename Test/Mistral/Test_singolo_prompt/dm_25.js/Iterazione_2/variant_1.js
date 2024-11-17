const GoogleCalendar = {
       eventFromSearchStarts: {
         Title: "",
         StartTime: "",
         EndTime: "",
         Location: "",
         Description: "",
         collectData: function(data) {
           if (this.Title.toUpperCase() != "WORK") {
             data = { eventTitle: this.Title, eventStartTime: this.StartTime, eventEndTime: this.EndTime };
             console.log("Event Data Collected: ", data);
           }
         }
       }
     };

     // Mocking the Ecobee object
     const Ecobee = {
       climateNextTransition: {
         skip: function() {
           console.log("Climate transition skipped.");
         }
       }
     };

     GoogleCalendar.eventFromSearchStarts.collectData.bind(GoogleCalendar.eventFromSearchStarts)();