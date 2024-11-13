const GoogleCalendar = {
      newEventAdded: { address: "[street address]", start: "9:00 AM", end: "10:00 AM" },
      addDetailedEvent: {
        setDescription: (description) => console.log(`Description set: ${description}`),
        setAllDay: (isAllDay) => console.log(`All-day set: ${isAllDay}`),
        setStartTime: (startTime) => console.log(`Start time set: ${startTime}`),
        setEndTime: (endTime) => console.log(`End time set: ${endTime}`)
      }
    };

    if (GoogleCalendar.newEventAdded.address) {
      GoogleCalendar.addDetailedEvent.setDescription(`In the office from ${GoogleCalendar.newEventAdded.start} to ${GoogleCalendar.newEventAdded.end}`);
      GoogleCalendar.addDetailedEvent.setAllDay("true");
      GoogleCalendar.addDetailedEvent.setStartTime(GoogleCalendar.newEventAdded.start);
      GoogleCalendar.addDetailedEvent.setEndTime(GoogleCalendar.newEventAdded.end);
    } else {
      GoogleCalendar.addDetailedEvent.skip();
    }