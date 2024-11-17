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

if (timeCheck < timeBoundary || timeCheck > 10) {
  Slack.postToChannel.skip("Outside of commuting hours");
}

var weekendCheck = (new Date().getDay() === 0 || new Date().getDay() === 6);
if (weekendCheck) {
  Slack.postToChannel.skip("Not a weekday");
}