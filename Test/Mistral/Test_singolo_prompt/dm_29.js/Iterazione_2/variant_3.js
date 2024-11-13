const Monzo = {
          cardPurchase: {
            amount: "123.45" // Changed to a more generic name and removed unnecessary type specification
          },
          potDeposit: {
            setAmount: function(amount) {
              console.log("Deposited amount:", amount);
            }
          }
        };

        const saveAmount = 10 - parseFloat(Monzo.cardPurchase.amount.slice(-2)); // Changed to use parseFloat and updated slice to get last two digits
        Monzo.potDeposit.setAmount("0.0" + saveAmount.toString());