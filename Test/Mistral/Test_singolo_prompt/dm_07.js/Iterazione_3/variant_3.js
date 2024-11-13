const Email = {
           notification: {
             sender: "",
             subject: "",
             body: "",
             attachments: []
           }
         };

         if (Email.notification.sender && Email.notification.sender.includes("@example.com") &&
             Email.notification.subject && Email.notification.subject.includes("Report") &&
             Email.notification.body.length > 10) {
           if (Email.notification.attachments.length > 0) {
             console.log("Email notification sent.");
           }
         } else {
           console.log("Email notification skipped.");
         } // No changes needed