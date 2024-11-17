const Meta = {
currentUserTime: {
    hour: function() {
        return 8; 
    }
}
};

const Slack = {
postToChannel: {
    skip: function(message) {
        console.log("Slack post skipped:", message);
    }
}
};

var Hour = Meta.currentUserTime.hour();

if (Hour < 7 || Hour > 9) {
    Slack.postToChannel.skip("Not morning commute hours");
} else {
    console.log("Posting to Slack during morning commute hours.");
}