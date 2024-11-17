const Meta = {
  hour: () => 10
};

const VoipCalls = {
  callMyDevice: {
    skip: (hour) => console.log("Call skipped due to hour:", hour),
    setMessage: (message) => console.log("Message set:", message)
  }
};

if (Meta.hour() > 8 && Meta.hour() < 21) {
  VoipCalls.callMyDevice.skip(Meta.hour().toString());
} else {
  VoipCalls.callMyDevice.setMessage("motion detected!");
}
// No changes needed.