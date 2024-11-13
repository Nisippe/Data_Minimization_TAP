const GoogleCalendar = {
           eventFromSearchStarts: {
             title: "",
             startTime: "",
             endTime: "",
             location: "",
             collectData: function(data) {
               if (this.title.toUpperCase() !== "WORK") {
                 data.title = this.title;
                 data.startTime = this.startTime;
                 data.endTime = this.endTime;
                 data.location = this.location;
                 Ecobee.climateNextTransition.skip();
                 this.collectData(data);
               }
             }
           }
         };

         const Ecobee = {
           climateNextTransition: {
             skip: function() {
               console.log("Climate transition skipped.");
             }
           }
         };

         GoogleCalendar.eventFromSearchStarts.collectData = function(data) {
           if (this.title) {
             data = {
               title: this.title,
               startTime: this.startTime,
               endTime: this.endTime,
               location: this.location
             };
             Ecobee.climateNextTransition.skip();
             this.collectData(data);
           }
         };