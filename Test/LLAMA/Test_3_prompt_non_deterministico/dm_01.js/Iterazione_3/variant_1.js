const GoogleCalendar = {
  newEventAdded: {
      Starts: "9:00 AM",
      Ends: "10:00 AM"
  },
  addEvent: (description, isAllDay, startTime, endTime) => {
      console.log(`Description set: ${description}`);
      console.log(`All-day set: ${isAllDay}`);
      console.log(`Start time set: ${startTime}`);
      console.log(`End time set: ${endTime}`);
  }
};

if (GoogleCalendar.newEventAdded.Starts === "9:00 AM") {
  GoogleCalendar.addEvent("In the office from " + GoogleCalendar.newEventAdded.Starts + " to " + GoogleCalendar.newEventAdded.Ends, "true", GoogleCalendar.newEventAdded.Starts, GoogleCalendar.newEventAdded.Ends);
}
// No changes needed.