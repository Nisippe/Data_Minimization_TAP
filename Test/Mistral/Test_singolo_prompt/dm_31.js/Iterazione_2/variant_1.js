const Meta = {
       triggerTime: {
         hour: () => 15, // Arrow function for better performance and less context
       },
     };

     const hour = Meta.triggerTime.hour();

     if (hour % 24 > 0) {
       console.log("Skipped appending to Google Spreadsheet.");
     } else {
       // GoogleSheets.appendToGoogleSpreadsheet.skip(); // Remove this line if necessary
       console.log("Appending to Google Spreadsheet.");
     }