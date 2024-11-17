// Mocking the GoogleCalendar object
const GoogleCalendar = {
  collectData: function(data) {
    console.log("Event Data Collected: ", data);
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

if (GoogleCalendar.eventFromSearchStarts && GoogleCalendar.eventFromSearchStarts.StartTime) {
  GoogleCalendar.collectData({
    eventStartTime: GoogleCalendar.eventFromSearchStarts.StartTime
  });
}
// No changes needed.