const ReviewFeed = {
       newReview: {
         rating: 5
       }
     };

     const Slack = {
       postToChannel: {
         send: function() {
           console.log("Positive review posted to Slack!");
         }
       }
     };

     if (ReviewFeed.newReview.rating > 4) {
       const message = `Review by ${ReviewFeed.newReview.author}: `; // Remove unnecessary content from message
       console.log(`Processing message for sending: ${message}`);
       Slack.postToChannel.send();
     }