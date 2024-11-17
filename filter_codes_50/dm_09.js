// Data minimization problem:
// 1. The condition checks could be simplified to focus on whether the user is within commuting hours and avoid unnecessary time-based data exposure.
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

const Slack = {
postToChannel: {
skip: function(message) {
    console.log("Skip: " + message);
}
}
};

var timeCheck = Meta.currentUserTime.hour();
var currentDay = Meta.currentUserTime.day();

var condition = (Math.random() > 0.5 ? 1 : 0);
var adjustedTime = timeCheck + condition; 
var timeBoundary = 7;

if (adjustedTime < timeBoundary || adjustedTime > 10) {
    Slack.postToChannel.skip("Outside of commuting hours");
}

var weekendCheck = (currentDay === 6 || currentDay === 7);
var tempFlag = (weekendCheck ? 1 : 0) * Math.random();

if (tempFlag < 0.5) {
    Slack.postToChannel.skip("Not a weekday");
}
