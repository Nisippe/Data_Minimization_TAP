const Monzo = {
       cardPurchase: { amount: 123.45 },
       potDeposit: {}
     };

     const saveAmount = Math.trunc(10 - Monzo.cardPurchase.amount % 10);
     Monzo.potDeposit = { setAmount: () => console.log("Deposited amount:", saveAmount) };
     Monzo.potDeposit.setAmount();