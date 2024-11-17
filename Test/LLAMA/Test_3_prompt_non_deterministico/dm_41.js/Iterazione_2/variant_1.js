const Meta = {
    hour: function() {
        return 20;
    }
};

const Gmail = {
    skip: function(message) {
        console.log("Email skipped:", message);
    }
};

var hour = Meta.hour();

if (hour > 18) {
    Gmail.skip("Too Late");
}