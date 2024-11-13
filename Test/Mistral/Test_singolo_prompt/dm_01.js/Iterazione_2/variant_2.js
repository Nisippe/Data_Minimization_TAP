const GoogleCalendar = {
          newEventAdded: { starts: "9:00 AM", ends: "10:00 AM" },
          addDetailedEvent: {
            skip: () => console.log("Event skipped."),
            setDescription: (description) => console.log(`Description set: ${description}`),
            setAllDay: (isAllDay) => console.log(`All-day set: ${isAllDay}`),
            setStartTime: (startTime) => console.log(`Start time set: ${startTime}`),
            setEndTime: (endTime) => console.log(`End time set: ${endTime}`)
          }
        };

        const address = "[some street address]";

        if (GoogleCalendar.newEventAdded.starts && GoogleCalendar.newEventAdded.ends && address.indexOf(GoogleCalendar.newEventAdded.starts.split(" ")[0]) >= 0) {
          GoogleCalendar.addDetailedEvent.setDescription(`In the office from ${GoogleCalendar.newEventAdded.starts} to ${GoogleCalendar.newEventAdded.ends}`);
          GoogleCalendar.addDetailedEvent.setAllDay("true");
          GoogleCalendar.addDetailedEvent.setStartTime(GoogleCalendar.newEventAdded.starts);
          GoogleCalendar.addDetailedEvent.setEndTime(GoogleCalendar.newEventAdded.ends);
        } else {
          GoogleCalendar.addDetailedEvent.skip();
        }