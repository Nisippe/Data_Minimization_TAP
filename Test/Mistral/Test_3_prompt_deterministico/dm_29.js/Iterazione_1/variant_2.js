const Monzo = {
       cardPurchase: {
         amount: "123.45" // Changed name to 'amount' and removed unnecessary 'InAccountCurrency'
       },
       potDeposit: {
         setAmount: function(amount) {
           console.log("Deposited amount:", amount);
         }
       }
     };

     const saveAmount = 10 - parseFloat(Monzo.cardPurchase.amount.slice(-2)); // Changed parseInt to parseFloat and updated slice to match the new 'amount' name
     Monzo.potDeposit.setAmount("0.0" + saveAmount.toString());