const Ecobee = {
  motionDetected: {
    EventType: "Home"
  }
};

const Aquanta = {
  away: {
    skip: function() {
      console.log("Away action skipped.");
    }
  }
};

var EventType = Ecobee.motionDetected.EventType.toLowerCase();

if (EventType === "home") {
  // No changes needed.
} else {
  Aquanta.away.skip();
}