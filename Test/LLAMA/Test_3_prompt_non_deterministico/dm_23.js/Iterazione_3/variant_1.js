// Mocking WemoInsightSwitch object
const WemoInsightSwitch = {
  SwitchName: "Living Room Light"
};

// Mocking Meta object
const Meta = {
  currentUserTime: {
    format: function(formatString) {
      return new Date().toLocaleString('en-US', { timeStyle:'short', dateStyle: 'long' });
    }
  },
  currentUserLocation: "New York, USA",
  currentUserDeviceInfo: "iPhone 12 Pro Max"
};

// Mocking GoogleSheets object
const GoogleSheets = {
  appendToGoogleSpreadsheet: {
    setFormattedRow: function(rowData) {
      console.log("Appending to Google Sheets: ", rowData);
    }
  }
};

var event = 'On';
var sname = WemoInsightSwitch.SwitchName;
var codeRanTime = Meta.currentUserTime.format();
var userLocation = Meta.currentUserLocation;
var deviceInfo = Meta.currentUserDeviceInfo;

var rowData = sname + '|||' + event + '|||' + codeRanTime + '|||' + userLocation + '|||' + deviceInfo;
GoogleSheets.appendToGoogleSpreadsheet.setFormattedRow(rowData);
// No changes needed.