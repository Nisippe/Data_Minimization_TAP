const GoogleCalendar = {
      newEventAdded: { start: "[start time]", end: "[end time]" },
      addDetailedEvent: {
        skip: () => console.log("Event skipped."),
        setDescription: (description) => console.log(`Description set: ${description}`),
        setAllDay: (isAllDay) => console.log(`All-day set: ${isAllDay}`),
      },
    };

    if (GoogleCalendar.newEventAdded.start && GoogleCalendar.newEventAdded.end) {
      GoogleCalendar.addDetailedEvent.setDescription(
        `In the office from ${GoogleCalendar.newEventAdded.start} to ${GoogleCalendar.newEventAdded.end}`
      );
      GoogleCalendar.addDetailedEvent.setAllDay("false");
    } else {
      GoogleCalendar.addDetailedEvent.skip();
    }