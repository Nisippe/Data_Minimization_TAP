const Monzo = {
      cardPurchase: {
        amount: "25.00"
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

    if (Monzo.cardPurchase.Category === "Entertainment") {
      Monzo.potWithdraw.setAmount(Monzo.cardPurchase.amount);
    } else {
      Monzo.potWithdraw.skip("Not an Entertainment Purchase");
    }