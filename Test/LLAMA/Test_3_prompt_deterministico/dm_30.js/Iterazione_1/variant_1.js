const Monzo = {
cardPurchase: {
    AmountInAccountCurrency: "25.00" 
},
potWithdraw: {
    setAmount: function(amount) {
    console.log("Withdrew amount:", amount);
    },
    skip: function(message) {
    console.log("Withdrawal skipped:", message);
    }
}
};

if (Monzo.cardPurchase.AmountInAccountCurrency == "25.00") {
Monzo.potWithdraw.setAmount(Monzo.cardPurchase.AmountInAccountCurrency);
} else {
Monzo.potWithdraw.skip("Not an Entertainment Purchase");
}