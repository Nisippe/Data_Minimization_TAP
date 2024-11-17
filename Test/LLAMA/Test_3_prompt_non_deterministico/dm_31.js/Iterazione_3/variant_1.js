const Meta = {
triggerTime: {
    hour: function() {
    return 15; // Adjust this to test different hours
    }
}
};

var hour = Meta.triggerTime.hour();

if (hour) {
console.log("Appending to Google Spreadsheet.");
} else {
console.log("Skipped appending to Google Spreadsheet.");
}