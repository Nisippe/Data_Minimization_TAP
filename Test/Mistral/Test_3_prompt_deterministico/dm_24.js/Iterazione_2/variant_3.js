const Twitter = { Text: "Check out the new gaming console coming soon!" }; // Removed unnecessary property "newTweetByUser"
     const DataStorage = { saveData: function(text) { console.log("Data saved: ", text); } };
     const IfNotifications = { sendNotification: { skip: function() { console.log("Notification skipped."); } } };

     const text = Twitter.Text; // Extracted the text variable for better readability

     if (!text.includes("SNES") && !text.includes("Super NES") && !text.includes("Super Nintendo")) {
         DataStorage.saveData(text);
         IfNotifications.sendNotification.skip();
     }