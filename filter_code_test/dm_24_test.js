const Twitter = {
newTweetByUser: {
    Text: "Check out the new gaming console coming soon!"
}
};


const IfNotifications = {
sendNotification: {
    skip: function() {
    console.log("Notification skipped.");
    }
}
};

if (Twitter.newTweetByUser.Text.indexOf("SNES") < 0
&& Twitter.newTweetByUser.Text.indexOf("Super NES") < 0
&& Twitter.newTweetByUser.Text.indexOf("Super Nintendo") < 0) {
    IfNotifications.sendNotification.skip()
}