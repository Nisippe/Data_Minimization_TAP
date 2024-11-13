const Monzo = {
       cardPurchase: { amount: 123.45 },
       potDeposit: { setAmount: function(amount) { console.log("Deposited amount:", amount); } }
     };

     const saveAmount = 10 - Monzo.cardPurchase.amount % 10;
     Monzo.potDeposit.setAmount(saveAmount.toString());