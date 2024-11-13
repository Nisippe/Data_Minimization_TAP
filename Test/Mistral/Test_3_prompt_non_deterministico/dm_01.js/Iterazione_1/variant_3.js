const GoogleCalendar = {
  newEventAdded: {
      address: "[street address]",
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

if (GoogleCalendar.newEventAdded.address.indexOf("[street address]") < 0) {
  GoogleCalendar.addDetailedEvent.skip();
} else {
  GoogleCalendar.addDetailedEvent.setDescription(`In the office from ${GoogleCalendar.newEventAdded.start} to ${GoogleCalendar.newEventAdded.end}`);
  GoogleCalendar.addDetailedEvent.setAllDay("true");
  GoogleCalendar.addDetailedEvent.setStartTime(GoogleCalendar.newEventAdded.start);
  GoogleCalendar.addDetailedEvent.setEndTime(GoogleCalendar.newEventAdded.end);
}