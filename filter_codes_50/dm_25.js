// Data minimization problem:
// 1. The entire event data is being collected, even though only specific pieces of data might be necessary for the specific task.
// 2. Collecting unnecessary data violates the data minimization principle as this information may not be relevant for the intended purpose .
const GoogleCalendar = {
eventFromSearchStarts: {
    Title: "Meeting with team",
    StartTime: "2024-11-05T10:00:00",
    EndTime: "2024-11-05T11:00:00",
    Location: "Conference Room 1",
    Description: "Discussing project updates",
    collectData: function(data) {
    console.log("Event Data Collected: ", data);
    }
}
};

const Ecobee = {
climateNextTransition: {
    skip: function() {
    console.log("Climate transition skipped.");
    }
}
};


if (GoogleCalendar.eventFromSearchStarts.Title.toUpperCase() != "WORK") {
Ecobee.climateNextTransition.skip();
GoogleCalendar.eventFromSearchStarts.collectData({
    eventTitle: GoogleCalendar.eventFromSearchStarts.Title,
    eventStartTime: GoogleCalendar.eventFromSearchStarts.StartTime,
    eventEndTime: GoogleCalendar.eventFromSearchStarts.EndTime,
    eventLocation: GoogleCalendar.eventFromSearchStarts.Location,
    eventDescription: GoogleCalendar.eventFromSearchStarts.Description
});
}
