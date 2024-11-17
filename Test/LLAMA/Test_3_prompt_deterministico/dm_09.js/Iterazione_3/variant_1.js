// Mock of Meta object
const Meta = {
  hour: function() {
    return new Date().getHours();
  },
  day: function() {
    return new Date().getDay();
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
var currentDay = Meta.day();

if (timeCheck < 7 || timeCheck > 10) {
  Slack.postToChannel.skip("Outside of commuting hours");
}

if (currentDay === 6 || currentDay === 0) {
  Slack.postToChannel.skip("Not a weekday");
}