const Monzo = {
     cardPurchase: {
     Category: "Entertainment",
     amount: "25.00" // Removed "InAccountCurrency" as it's not necessary for the code to function
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

     if (Monzo.cardPurchase.Category == "Entertainment") {
     Monzo.potWithdraw.setAmount(Monzo.cardPurchase.amount);
     } else {
     Monzo.potWithdraw.skip("Not an Entertainment Purchase");
     }