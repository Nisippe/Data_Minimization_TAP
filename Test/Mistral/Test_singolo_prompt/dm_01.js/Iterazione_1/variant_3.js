const GoogleCalendar = {
      newEventAdded: {
          address: "", // Remove "[some street address]" and initialize an empty string instead
          starts: "9:00 AM",
          ends: "10:00 AM"
      },
      addDetailedEvent: {
          skip: () => console.log("Event skipped."),
          setDescription: (description) => console.log(`Description set: ${description}`),
          // Remove unnecessary setters if not needed
          // setAllDay: (isAllDay) => console.log(`All-day set: ${isAllDay}`),
          setStartTime: (startTime) => console.log(`Start time set: ${startTime}`),
          setEndTime: (endTime) => console.log(`End time set: ${endTime}`)
      }
  };

  if (GoogleCalendar.newEventAdded.address.length < 1) {
    GoogleCalendar.addDetailedEvent.skip();
  } else {
    GoogleCalendar.addDetailedEvent.setDescription(`In the office from ${GoogleCalendar.newEventAdded.starts} to ${GoogleCalendar.newEventAdded.ends}`);
    // Remove redundant setters if not needed
    // GoogleCalendar.addDetailedEvent.setAllDay("true");
    // GoogleCalendar.addDetailedEvent.setStartTime(GoogleCalendar.newEventAdded.starts);
    // GoogleCalendar.addDetailedEvent.setEndTime(GoogleCalendar.newEventAdded.ends);
  }