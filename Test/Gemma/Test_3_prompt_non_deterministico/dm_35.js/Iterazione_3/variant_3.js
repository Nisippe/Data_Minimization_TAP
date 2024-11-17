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

var EventType = Ecobee.motionDetected.EventType;

if (EventType === "Away") {
Aquanta.cancelAway.skip();
} else {
Aquanta.away.skip();
}