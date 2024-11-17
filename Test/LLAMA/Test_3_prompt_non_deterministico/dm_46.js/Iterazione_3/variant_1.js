const Meta = {
  currentUserTime: {
    hour: function() {
      return new Date().getHours();
    }
  }
};

const Clicksend = {
  sendSms: {
    skip: function() {
      console.log("SMS skipped due to non-allowed hours.");
    }
  }
};

var timeOfDay = Meta.currentUserTime.hour();

if (timeOfDay > 5) {
  Clicksend.sendSms.skip();
}