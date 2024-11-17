const Meta = {
       currentUserTime: {
         hour: () => 20, // Anonymize hour to a simple arrow function
       },
     };

     const Gmail = {
       sendAnEmail: {
         skip: (reason) => { // Simplify skip function to an arrow function
           console.log(`Email skipped: ${reason}`);
         },
       },
     };

     const hour = Meta.currentUserTime.hour();

     if (hour > 18) {
       Gmail.sendAnEmail.skip("Too Late");
     }

     if (hour < 5) {
       Gmail.sendAnEmail.skip("Too Early");
     } // No changes needed