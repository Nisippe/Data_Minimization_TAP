const Meta = {
  triggerTime: {
    hour: function() {
      return 15; // Adjust this to test different hours
    }
  }
};

var hour = Meta.triggerTime.hour();

if (hour === 15) {
  console.log("Appending to Google Spreadsheet.");
} // No changes needed.