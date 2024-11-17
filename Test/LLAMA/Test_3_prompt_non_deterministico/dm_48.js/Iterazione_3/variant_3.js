const Meta = {
  currentUserTime: {
    hour: function() {
      return new Date().getHours();
    }
  }
};

const Heatmiser = {
  setTemp: {
    skip: function() {
      console.log("Temperature adjustment skipped due to late/early hour.");
    }
  }
};

var timeOfDay = Meta.currentUserTime.hour();

if (timeOfDay < 6 || timeOfDay >= 22) {
  Heatmiser.setTemp.skip();
}