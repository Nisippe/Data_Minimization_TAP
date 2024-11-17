const Meta = {
currentUserTime: {
    hour: function() {
        return new Date().getHours(); // No changes needed.
    }
}
};

const Woopla = {
ttsCall: {
    skip: function(message) {
        console.log(message);
    }
}
};

var hour = Meta.currentUserTime.hour();

if (hour >= 6 && hour < 21) {
Woopla.ttsCall.skip("No calls during daytime.");
}