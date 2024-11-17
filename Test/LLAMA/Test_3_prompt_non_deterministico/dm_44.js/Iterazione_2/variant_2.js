const Meta = {
  currentUserTime: {
    hour: () => 10
  }
};

const VoipCalls = {
  callMyDevice: {
    skip: (hour) => console.log("Call skipped due to hour:", hour),
    setMessage: (message) => console.log("Message set:", message)
  }
};

if (Meta.currentUserTime.hour() > 8 && Meta.currentUserTime.hour() < 21) {
  VoipCalls.callMyDevice.skip(Meta.currentUserTime.hour().toString());
} else {
  VoipCalls.callMyDevice.setMessage("motion detected!");
}
// No changes needed.