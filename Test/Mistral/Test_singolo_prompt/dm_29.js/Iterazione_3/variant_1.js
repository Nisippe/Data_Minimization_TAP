const Monzo = {
           cardPurchase: { amount: "" }, // Changed to an empty string to collect only necessary data
           potDeposit: {
             setAmount: function(amount) {
               console.log("Deposited amount:", amount);
             }
           }
         };

         const saveAmount = 10 - parseInt(Monzo.cardPurchase.amount.slice(-2)); // Changed to use parseInt and updated slice to get last two digits
         Monzo.potDeposit.setAmount(saveAmount.toString()); // Changed to convert saveAmount to string before passing it to setAmount function.