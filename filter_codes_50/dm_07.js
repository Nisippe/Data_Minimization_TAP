// Data minimization problem:
// 1. The email body and attachment details are not necessary for checking if the email should be sent, leading to unnecessary data exposure.
// 2. The body and attachments could be excluded from the condition, as only the sender, subject, and attachments count seem relevant for the decision.
const Email = {
    notification: {
      sender: "example@example.com",
      subject: "Daily Report",
      body: "Here is your daily report...",
      attachments: ["file1.pdf", "file2.docx"]
    }
  };
  
if (Email.notification.sender.includes("@example.com") && 
    Email.notification.subject.includes("Report") && 
    Email.notification.body.length > 10 && 
    Email.notification.attachments.length > 0) {
  console.log("Email notification sent.");
} else {
  console.log("Email notification skipped.");
}
  