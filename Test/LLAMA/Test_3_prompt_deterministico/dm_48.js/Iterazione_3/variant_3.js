const Meta = {
  hour: function() {
    return 23;
  }
};

const Heatmiser = {
  skip: function() {
    console.log("Temperature adjustment skipped due to late/early hour.");
  }
};

var timeOfDay = Meta.hour();

if (timeOfDay < 6) {
  Heatmiser.skip();
}