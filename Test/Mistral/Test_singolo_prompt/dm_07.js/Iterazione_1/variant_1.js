const Email = {
       notification: {
         sender: "example@example.com",
         subject: "Report",
         body: "",
         attachments: []
       }
     };

     if (Email.notification.sender.includes("@example.com") &&
         Email.notification.subject.includes("Report") &&
         Email.notification.body.length > 0) {
       console.log("Email notification sent.");
     } else {
       console.log("Email notification skipped.");
     }