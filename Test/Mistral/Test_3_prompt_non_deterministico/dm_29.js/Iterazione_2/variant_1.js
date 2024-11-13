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

     const saveAmount = parseFloat(Monzo.cardPurchase.amount) - 10;
     Monzo.potDeposit.setAmount(saveAmount.toFixed(2));