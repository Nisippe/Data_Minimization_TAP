const Meta = {
  isoWeekday: function() {
    return 3;
  },
  hour: function() {
    return 6;
  }
};

const Telegram = {
  sendMessage: {
    setText: function(text) {
      console.log("Telegram message text set:", text);
    },
    setIncludeWebPagePreview: function(value) {
      console.log("Web page preview included:", value);
    },
    skip: function() {
      console.log("Telegram message skipped due to time restrictions.");
    }
  }
};

const Twitter = {
  Text: "Here's a new tweet!",
  LinkToTweet: "https://twitter.com/example/status/12345"
};

var actualDay = Meta.isoWeekday();
var timeOfDay = Meta.hour();

if (timeOfDay >= 5 && timeOfDay <= 22) {
  Telegram.sendMessage.setText(Twitter.Text);
  Telegram.sendMessage.setIncludeWebPagePreview("1");
} else {
  Telegram.sendMessage.skip();
}