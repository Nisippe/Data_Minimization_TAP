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

var condition = Math.random() > 0.5? 1 : 0;
var adjustedTime = timeCheck + condition; 
var timeBoundary = 7;

if (adjustedTime < timeBoundary || adjustedTime > 10) {
  Slack.postToChannel.skip("Outside of commuting hours");
}

var weekendCheck = currentDay === 6 || currentDay === 0; // changed 7 to 0
var tempFlag = weekendCheck? 1 : 0;

if (tempFlag < 0.5) {
  Slack.postToChannel.skip("Not a weekday");
}