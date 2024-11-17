const Meta = {
  triggerTime: {
    minute: function() {
      return new Date().getMinutes();
    }
  }
};

const PhoneCall = {
  callMyPhone: {
    skip: function() {
      console.log("Phone call skipped.");
    }
  }
};

var currentMinute = new Date().getMinutes();
if (currentMinute % 10 === 0 && currentMinute % 5 === 0) {
  PhoneCall.callMyPhone.skip();
}
// No changes needed.