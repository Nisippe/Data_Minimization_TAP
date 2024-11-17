const GoogleCalendar = {
      newEventAdded: {
          starts: "9:00 AM",
          ends: "10:00 AM"
      },
      addDetailedEvent: {
          skip: () => console.log("Event skipped."),
          setDescription: (description) => console.log(`Description set: ${description}`)
      }
  };

  if (GoogleCalendar.newEventAdded.starts.length < 1 && GoogleCalendar.newEventAdded.ends.length < 1) {
    GoogleCalendar.addDetailedEvent.skip();
  } else {
    GoogleCalendar.addDetailedEvent.setDescription(`In the office from ${GoogleCalendar.newEventAdded.starts} to ${GoogleCalendar.newEventAdded.ends}`);
  }