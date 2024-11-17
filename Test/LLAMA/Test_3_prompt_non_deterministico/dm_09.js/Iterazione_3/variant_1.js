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

var timeBoundary = 7;

if (Meta.hour() < timeBoundary || Meta.hour() > 10) {
  Slack.postToChannel.skip("Outside of commuting hours");
}
// No changes needed.