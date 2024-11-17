const Meta = {
    hour: function() {
        return 5;
    }
};

var hour = Meta.hour();

if (hour!== 0 && hour!== 3 && hour!== 6 && hour!== 9 && hour!== 12 && hour!== 15 && hour!== 18 && hour!== 21) {
    console.log("Skipping mark as read - hour does not match specified intervals.");
}