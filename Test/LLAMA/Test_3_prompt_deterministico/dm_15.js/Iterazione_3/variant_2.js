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

if (new Date().getMinutes() % 10 === 0 && new Date().getMinutes() % 5 === 0) {
  PhoneCall.callMyPhone.skip();
}