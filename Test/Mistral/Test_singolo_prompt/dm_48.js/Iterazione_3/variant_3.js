const Meta = {
       currentUserTime: () => 23, // Return a function that returns the hour directly instead of an object with a single getter method
     };

     const Heatmiser = {
       setTemp: {
         skip: () => console.log("Temperature adjustment skipped due to late/early hour."), // Remove the function and directly log the message to eliminate the unnecessary API call
       },
     };

     if (Meta.currentUserTime() < 6 || Meta.currentUserTime() >= 22) {
       Heatmiser.setTemp.skip; // Remove the unnecessary data attribute and directly use the function name in the if statement
     }