// Mocking the GoogleCalendar object
const GoogleCalendar = {
  eventFromSearchStarts: {
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

if (GoogleCalendar.eventFromSearchStarts.StartTime) {
  GoogleCalendar.eventFromSearchStarts.collectData({
    eventStartTime: GoogleCalendar.eventFromSearchStarts.StartTime
  });
}
// No changes needed.