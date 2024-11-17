const Meta = {
  triggerTime: {
    hour: function() {
      return 15; // Adjust this to test different hours
    }
  }
};

const GoogleSheets = {
  appendToGoogleSpreadsheet: {
    skip: function() {
      console.log("Skipped appending to Google Spreadsheet.");
    }
  }
};

var hour = Meta.triggerTime.hour();

if (hour === 15) {
  console.log("Appending to Google Spreadsheet.");
} else {
  GoogleSheets.appendToGoogleSpreadsheet.skip();
}