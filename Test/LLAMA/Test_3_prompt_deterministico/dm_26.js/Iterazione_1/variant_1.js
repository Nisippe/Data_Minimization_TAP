const Meta = {
currentUserTime: {
    hour: function() {
    return 16;
    }
}
};

const AndroidMessages = {
sendAMessage: {
    skip: function(message) {
    console.log("Message skipped:", message);
    }
}
};

var timeOfDay = Meta.currentUserTime.hour();

if (timeOfDay < 17) {
AndroidMessages.sendAMessage.skip("It's too early to be going home");
} else {
console.log("It's past 5 PM; no message skipped.");
}