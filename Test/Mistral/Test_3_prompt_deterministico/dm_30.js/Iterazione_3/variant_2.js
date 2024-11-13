const Monzo = {
       cardPurchase: { amount: "" },
       potWithdraw: {
         setAmount: function(amount) {
           if (amount) {
             console.log("Withdrew amount:", amount);
           } else {
             console.log("Withdrawal skipped: Not a valid purchase");
           }
         }
       }
     };

     Monzo.potWithdraw.setAmount(Monzo.cardPurchase.amount || "");