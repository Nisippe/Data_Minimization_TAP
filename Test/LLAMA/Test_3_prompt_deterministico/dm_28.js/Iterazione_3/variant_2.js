const Meta = {
currentUserTime: {
    hour: function() {
        return new Date().getHours(); 
    }
}
};

var Hour = Meta.currentUserTime.hour();

if (Hour < 7 || Hour > 9) {
    console.log("Posting to Slack during non-morning commute hours.");
} else {
    console.log("Posting to Slack during weekday morning commute hours.");
}