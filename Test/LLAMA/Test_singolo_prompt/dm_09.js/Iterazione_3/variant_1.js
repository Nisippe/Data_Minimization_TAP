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

var condition = Math.random() > 0.5;

if (timeCheck < 7 || timeCheck > 10 || currentDay === 6 || currentDay === 0) {
  Slack.postToChannel.skip("Outside of commuting hours or weekend");
}