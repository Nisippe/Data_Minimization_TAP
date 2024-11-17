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
var minuteStatus = (currentMinute % 10 === 0)? 'triggered' : 'not triggered';

if (minuteStatus === 'triggered' && currentMinute % 5 === 0) {
PhoneCall.callMyPhone.skip();
}