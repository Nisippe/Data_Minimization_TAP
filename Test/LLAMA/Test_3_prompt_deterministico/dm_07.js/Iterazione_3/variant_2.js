const Email = {
  notification: {
    subject: "Daily Report",
    body: "Here is your daily report..."
  }
};

if (Email.notification && Email.notification.subject && Email.notification.body) {
  console.log("Email notification sent.");
} else {
  console.log("Email notification skipped.");
}