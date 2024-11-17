const Email = {
       notification: {
         sender: "required@domain.com",
         subject: "Report",
         body: "" // Remove if not necessary
       }
     };

     if (Email.notification.sender.includes("@domain.com") &&
         Email.notification.subject.includes("Report")) {
       console.log("Email notification sent.");
     } else {
       console.log("Email notification skipped.");
     }