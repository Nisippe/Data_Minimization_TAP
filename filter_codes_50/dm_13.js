// Data minimization problem:
// 1. The full date and time (`CreatedAt` and `new Date().toISOString()`) are used to extract the day and minute information, which exposes more detailed information than needed to make the decision.
// 2. The full battery level and creation date are being checked even though only specific thresholds (battery < 100, or creation date mismatch) are relevant for the decision.
const Meta = {
triggerTime: {
    minute: function() {
    return new Date().getMinutes(); 
    },
    day: function() {
    return new Date().getDay();
    }
}
};

const LinkMyPet = {
collarInfo: {
    CreatedAt: new Date().toISOString(),
    Battery: '85'
}
};

const Sms = {
sendMeText: {
    skip: function() {
    console.log("SMS sending skipped.");
    }
}
};

var timeCheck = Meta.triggerTime.minute();
var stringifiedTime = timeCheck.toString();
var dayCheck = Meta.triggerTime.day();
var creationDate = new Date(LinkMyPet.collarInfo.CreatedAt).getDay();

var batteryCheck = parseInt(LinkMyPet.collarInfo.Battery, 10);
var adjustedMinute = timeCheck;

if ((adjustedMinute % 30 > 0 && batteryCheck < 100) || (creationDate !== dayCheck)) {
Sms.sendMeText.skip();
}
