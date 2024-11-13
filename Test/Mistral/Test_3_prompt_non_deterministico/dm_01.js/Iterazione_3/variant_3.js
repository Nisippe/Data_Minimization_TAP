const GoogleCalendar = {
       addDetailedEvent: {
         setDescription: (description) => console.log(`Description set: ${description}`),
         setAllDay: (isAllDay) => console.log(`All-day set: ${isAllDay}`),
         setStartTime: (startTime) => console.log(`Start time set: ${startTime}`),
         setEndTime: (endTime) => console.log(`End time set: ${endTime}`)
       }
     };

     if (GoogleCalendar.newEventAdded && GoogleCalendar.newEventAdded.address) {
       GoogleCalendar.addDetailedEvent.setDescription(`In the office from ${GoogleCalendar.newEventAdded.start} to ${GoogleCalendar.newEventAdded.end}`);
       GoogleCalendar.addDetailedEvent.setAllDay("false"); // Assuming it's not all-day event by default
       GoogleCalendar.addDetailedEvent.setStartTime(GoogleCalendar.newEventAdded.start);
       GoogleCalendar.addDetailedEvent.setEndTime(GoogleCalendar.newEventAdded.end);
     }