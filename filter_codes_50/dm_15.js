// Data minimization problem:
// 1. The full minute information (`currentMinute`) is used to create complex logic based on its value. This could lead to unnecessary exposure of detailed timing data when only a simple check is required.
// 2. The current minute value is being checked against multiple conditions (e.g., modulo checks) that expose more detailed time data than necessary.
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

var currentMinute = Meta.triggerTime.minute();
var minuteStatus = (currentMinute % 10 === 0) ? 'triggered' : 'not triggered';
var secondaryCheck = (minuteStatus === 'triggered') ? (currentMinute % 5) : (currentMinute % 3);

if (minuteStatus === 'triggered' && secondaryCheck === 0) {
PhoneCall.callMyPhone.skip();
}
