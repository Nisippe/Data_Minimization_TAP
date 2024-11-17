const Email = {
  notification: {
    sender: "example@example.com",
    subject: "Daily Report",
    body: "Here is your daily report..."
  }
};

if (Email.notification.sender && Email.notification.subject && Email.notification.body) {
  console.log("Email notification sent.");
} else {
  console.log("Email notification skipped.");
}
// No changes needed.