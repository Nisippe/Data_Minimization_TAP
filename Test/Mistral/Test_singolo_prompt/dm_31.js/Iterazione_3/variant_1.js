const Meta = {
       triggerTime: {
         hour: () => 15,
       },
     };

     const hour = Meta.triggerTime.hour();

     if (hour < 24) {
       // GoogleSheets.appendToGoogleSpreadsheet.skip(); // Remove this line if necessary for data minimization
     }

     if (hour >= 0) {
       console.log("Appending to Google Spreadsheet.");
     }