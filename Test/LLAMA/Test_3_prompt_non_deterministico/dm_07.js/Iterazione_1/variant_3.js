const Email = {
  notification: {
    sender: "example@example.com",
    subject: "Daily Report",
    body: "Here is your daily report..."
  }
};

if (Email.notification.sender.includes("@example.com") && 
    Email.notification.subject.includes("Report") && 
    Email.notification.body.length > 10) {
  console.log("Email notification sent.");
} else {
  console.log("Email notification skipped.");
}
// No changes needed.