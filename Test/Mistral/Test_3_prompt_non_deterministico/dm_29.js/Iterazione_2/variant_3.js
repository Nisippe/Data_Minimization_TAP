const Monzo = {
       cardPurchase: { amount: "123.45" },
       potDeposit: { setAmount: function(amount) { console.log("Deposited amount:", amount); } }
     };

     const saveAmount = parseFloat(Monzo.cardPurchase.amount) - 10;
     Monzo.potDeposit.setAmount(saveAmount);