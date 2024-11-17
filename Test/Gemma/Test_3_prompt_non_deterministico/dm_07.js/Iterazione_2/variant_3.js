const Email = {
    notification: {
      sender: "example@example.com",
      subject: "Daily Report",
      body: "Here is your daily report...",
      attachments: ["file1.pdf", "file2.docx"]
    }
  };
  
if (Email.notification.subject.includes("Report") && 
    Email.notification.attachments.length > 0) {
  console.log("Email notification sent.");
} else {
  console.log("Email notification skipped.");
}