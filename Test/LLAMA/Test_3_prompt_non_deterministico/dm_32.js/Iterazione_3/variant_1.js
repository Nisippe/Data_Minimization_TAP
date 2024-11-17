const Meta = {
    hour: function() {
        return new Date().getHours();
    }
};

var hour = Meta.hour();

if (hour < 22 && hour > 6) {
    console.log("Not during sleeping hours");
} else {
    console.log("Calling during sleeping hours.");
}