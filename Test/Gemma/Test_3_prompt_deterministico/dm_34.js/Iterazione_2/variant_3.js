const Trigger = {
EntryTitle: "New Technology Trends for 2024"
};

const IfNotifications = {
sendNotification: {
    skip: function(message) {
    console.log("Notification skipped:", message);
    }
}
};

var title = Trigger.EntryTitle;

if (title.includes("Ask Slashdot")) {
console.log("Sending notification for 'Ask Slashdot' article.");
} else {
IfNotifications.sendNotification.skip("Not an 'Ask Slashdot' article");
}