const Meta = {
    currentUserTime: {
        hour: function() {
            return new Date().getHours(); 
        }
    }
};

const Slack = {
    postToChannel: {
        post: function(message) {
            console.log("Posting to Slack:", message);
        }
    }
};

var Hour = Meta.currentUserTime.hour();

if (Hour < 7 || Hour > 9) {
    Slack.postToChannel.post("Not morning commute hours");
} else {
    Slack.postToChannel.post("Posting to Slack during morning commute hours.");
}