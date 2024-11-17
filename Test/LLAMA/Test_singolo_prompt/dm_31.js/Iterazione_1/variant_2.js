const Meta = {
triggerTime: {
    hour: function() {
        return 15; // Adjust this to test different hours
    }
}
};

const GoogleSheets = {
appendToGoogleSpreadsheet: {
    append: function() {
        console.log("Appending to Google Spreadsheet.");
    }
}
};

var hour = Meta.triggerTime.hour();

if (hour % 24 > 0) {
    GoogleSheets.appendToGoogleSpreadsheet.append();
} else {
    GoogleSheets.appendToGoogleSpreadsheet.append();
}