const Meta = {
    hour: function() {
        return 8; 
    }
};

var Hour = Meta.hour();

if (Hour < 7 || Hour > 9) {
    console.log("Posting to Slack during non-morning commute hours.");
} else {
    console.log("Posting to Slack during weekday morning commute hours.");
}