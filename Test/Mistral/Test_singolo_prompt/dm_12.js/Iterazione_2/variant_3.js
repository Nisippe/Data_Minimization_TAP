const Twitter = {
           newTweetByUser: { Text: "" },
         };

         function filter(coinLabel = "#bitcoincash #bch Price: $", prefix = " 24hChg: ", suffix = "% 24Vol") {
           let tweetText = Twitter.newTweetByUser.Text;
           let isCoinLabelValid = tweetText.startsWith(coinLabel);

           if (!isCoinLabelValid) return;

           let startIndex = tweetText.indexOf(prefix);
           let endIndex = tweetText.indexOf(suffix);

           if (startIndex < 0 || endIndex < 0) return;

           let changeValueString = tweetText.slice(startIndex + prefix.length, endIndex);
           let changeValue = parseFloat(changeValueString);
           let isChangeSignificant = Math.abs(changeValue) >= 10.0;

           if (!isChangeSignificant) {
             console.log("Change is not significant enough.");
             Email.sendMeEmail.skip();
             return;
           }

           console.log(`Change: ${changeValue}`);
         }

         filter(); // No changes needed