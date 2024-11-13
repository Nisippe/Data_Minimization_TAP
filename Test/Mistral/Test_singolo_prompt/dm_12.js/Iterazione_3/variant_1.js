const Twitter = { Text: "" };

         function filter(coinLabel = "#bitcoincash #bch", prefix = " 24hChg: ", suffix = "% 24Vol") {
           if (!Twitter.Text.startsWith(coinLabel)) return;

           const startIndex = Twitter.Text.indexOf(prefix);
           if (startIndex < 0) return;

           const changeValueString = Twitter.Text.slice(startIndex + prefix.length, Twitter.Text.indexOf(suffix));
           const changeValue = parseFloat(changeValueString);

           if (Math.abs(changeValue) < 10.0) {
             console.log("Change is not significant enough.");
             return;
           }

           console.log(`Change: ${changeValue}`);
         }

         filter();