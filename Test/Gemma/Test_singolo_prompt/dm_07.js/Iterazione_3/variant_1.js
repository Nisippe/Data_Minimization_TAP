const Email = {
    notification: {
      subject: "Daily Report",
      body: "Here is your daily report..."
    }
  };
  
if (Email.notification.subject.includes("Report") &&  Email.notification.body.length > 10) {
  console.log("Email notification sent.");
} else {
  console.log("Email notification skipped.");
}