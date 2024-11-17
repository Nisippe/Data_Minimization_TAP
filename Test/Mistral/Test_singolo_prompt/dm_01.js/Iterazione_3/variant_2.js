const GoogleCalendar = {
       addDetailedEvent: {
         setDescription: (starts, ends) => console.log(`Description set: In the office from ${starts} to ${ends}`)
       }
     };

     if (GoogleCalendar.newEventAdded && (GoogleCalendar.newEventAdded.starts.length > 0 && GoogleCalendar.newEventAdded.ends.length > 0)) {
       GoogleCalendar.addDetailedEvent.setDescription(GoogleCalendar.newEventAdded.starts, GoogleCalendar.newEventAdded.ends);
     }