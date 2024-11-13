const GoogleCalendar = {
      newEventAdded: { start: "[start]", end: "[end]" },
      addDetailedEvent: {
        skip: () => console.log("Event skipped."),
        setDescription: (description) => console.log(`Description: ${description}`),
        setAllDay: (isAllDay) => console.log(`All-day: ${isAllDay}`),
      },
    };

    if (GoogleCalendar.newEventAdded.start && GoogleCalendar.newEventAdded.end) {
      GoogleCalendar.addDetailedEvent.setDescription(
        `From ${GoogleCalendar.newEventAdded.start} to ${GoogleCalendar.newEventAdded.end}`
      );
      GoogleCalendar.addDetailedEvent.setAllDay(false);
    } else {
      GoogleCalendar.addDetailedEvent.skip();
    }