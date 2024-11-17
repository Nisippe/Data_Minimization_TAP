// Mocking the Twitter object
const Twitter = {
    newTweetByUser: {
        text: "Check out the new gaming console coming soon!"
    }
};

// Mocking the DataStorage object
const DataStorage = {
    saveData: function(text) {
        console.log("Data saved: ", text);
    }
};

// Mocking the IfNotifications object
const IfNotifications = {
    sendNotification: {
        skip: function() {
            console.log("Notification skipped.");
        }
    }
};

if (Twitter.newTweetByUser.text.indexOf("SNES") < 0) {
    DataStorage.saveData(Twitter.newTweetByUser.text);
}
// No changes needed.