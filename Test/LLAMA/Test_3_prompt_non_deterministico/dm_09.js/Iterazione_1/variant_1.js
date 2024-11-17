// Mock of Meta object
const Meta = {
  currentUserTime: {
    hour: function() {
      return new Date().getHours();
    }
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

var timeCheck = Meta.currentUserTime.hour();
var timeBoundary = 7;

if (timeCheck < timeBoundary || timeCheck > 10) {
  Slack.postToChannel.skip("Outside of commuting hours");
}

// No changes needed.