const GoogleCalendar = {
  newEventAdded: {
      Starts: "9:00 AM",
      Ends: "10:00 AM"
  },
  addEvent: {
      setDescription: (description) => console.log(`Description set: ${description}`),
      setAllDay: (isAllDay) => console.log(`All-day set: ${isAllDay}`),
      setStartTime: (startTime) => console.log(`Start time set: ${startTime}`),
      setEndTime: (endTime) => console.log(`End time set: ${endTime}`)
  }
};

if (GoogleCalendar.newEventAdded.Starts) {
  GoogleCalendar.addEvent.setDescription("In the office from " 
      + GoogleCalendar.newEventAdded.Starts 
      + " to " + GoogleCalendar.newEventAdded.Ends);
  GoogleCalendar.addEvent.setAllDay("true");
  GoogleCalendar.addEvent.setStartTime(GoogleCalendar.newEventAdded.Starts);
  GoogleCalendar.addEvent.setEndTime(GoogleCalendar.newEventAdded.Ends);
}