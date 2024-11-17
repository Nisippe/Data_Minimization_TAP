const Meta = {
triggerTime: {
    hour: function() {
    return 15; // Adjust this to test different hours
    }
}
};

var hour = Meta.triggerTime.hour();

if (hour % 24 > 0) {
console.log("Skipped appending to Google Spreadsheet.");
} else {
console.log("Appending to Google Spreadsheet.");
}