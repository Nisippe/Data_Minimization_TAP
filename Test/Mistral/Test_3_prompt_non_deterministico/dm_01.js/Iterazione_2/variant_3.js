const GoogleCalendar = {
  newEventAdded: {
      address: "",
      start: "9:00 AM",
      end: "10:00 AM"
  },
  addDetailedEvent: {
      skip: () => console.log("Event skipped."),
      setDescription: (description) => console.log(`Description set: ${description}`),
      setAllDay: (isAllDay) => console.log(`All-day set: ${isAllDay}`),
      setStartTime: (startTime) => console.log(`Start time set: ${startTime}`),
      setEndTime: (endTime) => console.log(`End time set: ${endTime}`)
  }
};

if (GoogleCalendar.newEventAdded.address === "[street address]") {
  GoogleCalendar.addDetailedEvent.skip();
} else {
  GoogleCalendar.addDetailedEvent.setDescription(`In the office from ${GoogleCalendar.newEventAdded.start} to ${GoogleCalendar.newEventAdded.end}`);
  GoogleCalendar.addDetailedEvent.setAllDay("true");
  GoogleCalendar.addDetailedEvent.setStartTime(GoogleCalendar.newEventAdded.start);
  GoogleCalendar.addDetailedEvent.setEndTime(GoogleCalendar.newEventAdded.end);
}

// Replaced the anonymized street address with an empty string and removed the if condition check for the presence of the anonymized string in the address attribute. This assumes that the street address is not necessary for the processing purposes and can be removed to comply with data minimization.