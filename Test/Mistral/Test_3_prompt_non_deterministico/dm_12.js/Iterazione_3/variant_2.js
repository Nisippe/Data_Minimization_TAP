const Twitter = { Text: "#bitcoincash #bch Price: $5000" };
     const Email = { sendMeEmail: () => {} };

     function filter(tweetText) {
       const coinLabel = "#bitcoincash #bch Price: $";
       const prefix = " 24hChg: ";
       const suffix = "% 24Vol";

       if (tweetText.startsWith(coinLabel) && tweetText.indexOf(prefix) > 0 && tweetText.indexOf(suffix) > 0) {
         const startIndex = tweetText.indexOf(prefix) + prefix.length;
         const changeValueString = tweetText.substr(startIndex, suffix.length + startIndex);
         const changeValue = parseFloat(changeValueString);

         if (Math.abs(changeValue) < 10.0) {
           console.log("Change is not significant enough.");
           Email.sendMeEmail();
         }
       }
     }

     filter(Twitter.Text);