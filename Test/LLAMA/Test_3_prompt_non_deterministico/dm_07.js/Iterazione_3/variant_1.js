const Email = {
  subject: "Daily Report",
  body: "Here is your daily report..."
};

if (Email.body.length > 10) {
  console.log("Email notification sent.");
} else {
  console.log("Email notification skipped.");
}