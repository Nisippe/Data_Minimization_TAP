const Email = {
  notification: {
    subject: "Daily Report"
  }
};

if (Email.notification.subject.length > 0) {
  console.log("Email notification sent.");
} else {
  console.log("Email notification skipped.");
}