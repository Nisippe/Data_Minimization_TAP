const Meta = {
  hour: function() {
    return new Date().getHours();
  }
};

const Heatmiser = {
  skip: function() {
    console.log("Temperature adjustment skipped due to late/early hour.");
  }
};

var timeOfDay = Meta.hour();

if (timeOfDay < 6 || timeOfDay >= 22) {
  Heatmiser.skip();
}