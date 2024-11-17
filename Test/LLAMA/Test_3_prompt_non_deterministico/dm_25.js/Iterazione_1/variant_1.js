// Mocking the GoogleCalendar object
const GoogleCalendar = {
  eventFromSearchStarts: {
    Title: "Meeting with team",
    StartTime: "2024-11-05T10:00:00",
    collectData: function(data) {
      console.log("Event Data Collected: ", data);
    }
  }
};

// Mocking the Ecobee object
const Ecobee = {
  climateNextTransition: {
    skip: function() {
      console.log("Climate transition skipped.");
    }
  }
};

if (GoogleCalendar.eventFromSearchStarts.Title.toUpperCase()!= "WORK") {
  GoogleCalendar.eventFromSearchStarts.collectData({
    eventTitle: GoogleCalendar.eventFromSearchStarts.Title,
    eventStartTime: GoogleCalendar.eventFromSearchStarts.StartTime,
    eventEndTime: GoogleCalendar.eventFromSearchStarts.EndTime,
    eventLocation: GoogleCalendar.eventFromSearchStarts.Location,
    eventDescription: GoogleCalendar.eventFromSearchStarts.Description
  });
}