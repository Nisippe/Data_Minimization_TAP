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
Aquanta.away.skip();
} else {
Aquanta.away.skip();
}