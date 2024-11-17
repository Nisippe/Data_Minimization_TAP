// Data minimization problem:
// 1. The entire tweet content is being saved, which may contain unnecessary data (e.g., marketing text) that isn’t required for the task.
// 2. The tweet's text is saved in its entirety, even though only specific information is necessary.
const Twitter = {
newTweetByUser: {
    Text: "Check out the new gaming console coming soon!"
}
};

const DataStorage = {
saveData: function(text) {
    console.log("Data saved: ", text);
}
};

const IfNotifications = {
sendNotification: {
    skip: function() {
    console.log("Notification skipped.");
    }
}
};

if (Twitter.newTweetByUser.Text.indexOf("SNES") < 0 &&
    Twitter.newTweetByUser.Text.indexOf("Super NES") < 0 &&
    Twitter.newTweetByUser.Text.indexOf("Super Nintendo") < 0) {

DataStorage.saveData(Twitter.newTweetByUser.Text);
IfNotifications.sendNotification.skip();
}
