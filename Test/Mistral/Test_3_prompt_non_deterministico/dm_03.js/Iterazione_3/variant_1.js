const ReviewFeed = {
       newReview: {
         content: "",
         author: "",
         rating: 0
       }
     };

     if (ReviewFeed.newReview.rating > 4) {
       const { author, content } = ReviewFeed.newReview;
       (message = `Review by ${author}: ${content}`);
       console.log(`Processing message for sending: ${message}`);
       Slack.postToChannel.send();
     }