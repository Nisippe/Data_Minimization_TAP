const ReviewFeed = {
       newReview: {
         content: "This product is amazing! Highly recommend it.",
         author: "Jane Doe",
         rating: 5,
         category: "electronics" // Remove date if not necessary
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
       const message = `Review by ${ReviewFeed.newReview.author}: ${ReviewFeed.newReview.content}`;
       console.log(`Processing message for sending: ${message}`);
       Slack.postToChannel.send();
     }