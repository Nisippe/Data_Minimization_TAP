const Twitter = { Text: "Check out the new gaming console coming soon!" }; // Removed unnecessary property "newTweetByUser"

    const DataStorage = { saveData: function(text) { console.log("Data saved: ", text); } };

    const IfNotifications = { sendNotification: { skip: function() { console.log("Notification skipped."); } } };

    if (!Twitter.Text.includes("SNES") && !Twitter.Text.includes("Super NES") && !Twitter.Text.includes("Super Nintendo")) {

        DataStorage.saveData(Twitter.Text);
        IfNotifications.sendNotification.skip();
    }