const Monzo = {
  cardPurchase: {
    Category: "Entertainment",
    AmountInAccountCurrency: "25.00" 
  },
  potWithdraw: {
    setAmount: function(amount) {
      console.log("Withdrew amount:", amount);
    }
  }
};

if (Monzo.cardPurchase.Category === "Entertainment") {
  Monzo.potWithdraw.setAmount(Monzo.cardPurchase.AmountInAccountCurrency);
} else {
  // No changes needed.
}