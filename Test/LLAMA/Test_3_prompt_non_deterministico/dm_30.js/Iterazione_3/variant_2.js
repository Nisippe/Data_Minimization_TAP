const Monzo = {
  cardPurchase: {
    AmountInAccountCurrency: "25.00" 
  },
  potWithdraw: {
    setAmount: function(amount) {
      console.log("Withdrew amount:", amount);
    }
  }
};

if (Monzo.cardPurchase.AmountInAccountCurrency === "25.00") {
  Monzo.potWithdraw.setAmount(Monzo.cardPurchase.AmountInAccountCurrency);
} else {
  // No changes needed.
}