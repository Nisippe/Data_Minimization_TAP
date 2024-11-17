const Meta = {
    hour: function() {
        return new Date().getHours(); // No changes needed.
    }
};

const PhoneCall = {
    skip: function(message) {
        console.log("Call skipped:", message);
    }
};

var hour = Meta.hour();

if (hour < 22 && hour > 6) {
    PhoneCall.skip("Not during sleeping hours");
} else {
    console.log("Calling during sleeping hours.");
}