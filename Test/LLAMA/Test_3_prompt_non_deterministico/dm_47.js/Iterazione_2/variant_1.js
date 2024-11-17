const Meta = {
    hour: function() {
        return new Date().getHours(); // No changes needed.
    }
};

const Woopla = {
    skip: function(message) {
        console.log(message);
    }
};

var hour = Meta.hour();

if (hour >= 6 && hour < 21) {
    Woopla.skip("No calls during daytime.");
}