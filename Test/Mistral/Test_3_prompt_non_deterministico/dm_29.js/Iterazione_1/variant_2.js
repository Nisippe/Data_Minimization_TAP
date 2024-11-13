const Monzo = {
      cardPurchase: {
        amount: "123.45"
      },
      potDeposit: {
        setAmount: function(amount) {
          console.log("Deposited amount:", amount);
        }
      }
    };

    const saveAmount = 10 - parseFloat(Monzo.cardPurchase.amount.slice(-2));
    Monzo.potDeposit.setAmount("0.0" + saveAmount.toString());