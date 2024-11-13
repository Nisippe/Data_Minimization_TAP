const Twitter = { Text: "Check out our latest newsletter: <https://example.com/newsletter1234>" };

     const Pocket = {
       readItLater: {
         setUrl: function(url) {
           console.log("URL saved to Pocket:", url);
         },
         setUserInfo: function(userInfo) {
           console.log("User info stored in Pocket:", userInfo.Text);
         },
         skip: function(reason) {
           console.log("Skipped adding to Pocket:", reason);
         }
       }
     };

     const linkRegex = /newsletter.*(https:\/\/\S+)/;
     const matchResult = linkRegex.exec(Twitter.Text);

     if (matchResult) {
       Pocket.readItLater.setUrl(matchResult[1]);
       Pocket.readItLater.setUserInfo(Twitter);
     } else {
       Pocket.readItLater.skip('Likely not a newsletter link');
     }