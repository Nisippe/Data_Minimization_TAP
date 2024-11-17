// Mock of Meta object
const Meta = {
  hour: function() {
    return new Date().getHours();
  }
};

// Mock of Slack object
const Slack = {
  postToChannel: {
    skip: function(message) {
      console.log("Skip: " + message);
    }
  }
};

var timeCheck = Meta.hour();
var timeBoundary = 7;

if (timeCheck < timeBoundary) {
  Slack.postToChannel.skip("Outside of commuting hours");
}

var currentDay = new Date().getDay();
if (currentDay === 0 || currentDay === 6) {
  Slack.postToChannel.skip("Not a weekday");
}