const GoogleCalendar = {
       newEvent: { start: "[start time]", end: "[end time]" },
       addDetailedEvent: { setDescription: Function, setAllDay: Function },
     };

     GoogleCalendar.addDetailedEvent.setDescription = (description) =>
       console.log(`Description set: ${description}`);

     GoogleCalendar.addDetailedEvent.setAllDay = (isAllDay) =>
       console.log(`All-day set: ${isAllDay}`);

     if (GoogleCalendar.newEvent.start && GoogleCalendar.newEvent.end) {
       GoogleCalendar.addDetailedEvent.setDescription(
         `In the office from ${GoogleCalendar.newEvent.start} to ${GoogleCalendar.newEvent.end}`
       );
       GoogleCalendar.addDetailedEvent.setAllDay(false);
     } else {
       GoogleCalendar.addDetailedEvent.setDescription("Event skipped.");
     }