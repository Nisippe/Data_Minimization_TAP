const Monzo = {
  cardPurchase: {
    Amount: 25.00
  },
  potWithdraw: {
    setAmount: function(amount) {
      console.log("Withdrew amount:", amount);
    }
  }
};

if (Monzo.cardPurchase.Amount > 0) {
  Monzo.potWithdraw.setAmount(Monzo.cardPurchase.Amount);
} else {
  console.log("Withdrawal skipped: Not a valid purchase");
}