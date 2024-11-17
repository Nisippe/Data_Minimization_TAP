const Ecobee = {
  motionDetected: {
    EventType: "Home"
  }
};

const Aquanta = {
  cancelAway: {
    skip: function() {
      console.log("Cancel Away skipped.");
    }
  },
  away: {
    skip: function() {
      console.log("Away action skipped.");
    }
  }
};

var EventType = Ecobee.motionDetected.EventType.toLowerCase();

if (EventType === "away") {
  Aquanta.cancelAway.skip();
} else if (EventType === "home") {
  Aquanta.away.skip();
}