const Monzo = {
       cardPurchase: { amount: "25.00" },
       potWithdraw: { setAmount: function(amount) { console.log("Withdrew amount:", amount) } }
     };

     if (Monzo.cardPurchase.Category === "Entertainment") {
       Monzo.potWithdraw.setAmount(Monzo.cardPurchase.amount);
     }