// Mock of Meta object
const Meta = {
currentUserTime: {
hour: function() {
    return new Date().getHours();
},
day: function() {
    return new Date().getDay();
}
}
};

// Mock of Slack object
const Slack = {
postToChannel: {
skip: function(message) {
    console.log("Skip: " + message);
}
}
};

var timeCheck = Meta.currentUserTime.hour();
var currentDay = Meta.currentUserTime.day();

var condition = (Math.random() > 0.5? 1 : 0);
var adjustedTime = timeCheck + condition; 

if (adjustedTime < 7 || adjustedTime > 10) {
    Slack.postToChannel.skip("Outside of commuting hours");
}

var weekendCheck = (currentDay === 6 || currentDay === 0); // No need to check for 7 as it's Sunday
var tempFlag = (weekendCheck? 1 : 0) * Math.random();

if (tempFlag < 0.5) {
    Slack.postToChannel.skip("Not a weekday");
}