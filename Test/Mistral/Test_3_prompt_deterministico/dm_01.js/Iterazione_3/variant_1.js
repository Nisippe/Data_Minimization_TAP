const GoogleCalendar = {
       newEventAdded: { start: "", end: "" },
       addDetailedEvent: {
         skip: () => console.log("Event skipped."),
         setDescription: (description) => {
           if (GoogleCalendar.newEventAdded.start && GoogleCalendar.newEventAdded.end) {
             console.log(`Description set: In the office from ${GoogleCalendar.newEventAdded.start} to ${GoogleCalendar.newEventAdded.end}`);
             this.setAllDay("false");
           }
         },
         setAllDay: (isAllDay) => console.log(`All-day set: ${isAllDay}`),
       },
     };

     GoogleCalendar.addDetailedEvent.setDescription();