const Meta = {
  currentUserTime: {
    hour: function() {
      return new Date().getHours();
    }
  }
};

const Gmail = {
  sendAnEmail: {
    skip: function(message) {
      console.log("Email skipped:", message);
    }
  }
};

var hour = Meta.currentUserTime.hour();

if (hour > 18) {
  Gmail.sendAnEmail.skip("Too Late");
}