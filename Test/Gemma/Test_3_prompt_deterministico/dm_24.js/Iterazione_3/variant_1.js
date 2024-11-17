// Mocking the Twitter object
const Twitter = {
newTweetByUser: {
    Text: "Check out the new gaming console coming soon!"
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

DataStorage.saveData(Twitter.newTweetByUser.Text);