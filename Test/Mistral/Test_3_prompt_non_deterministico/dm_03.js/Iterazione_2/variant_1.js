const ReviewFeed = {
      newReview: {
        content: "",
        author: "",
        rating: 0
      }
    };

    if (ReviewFeed.newReview.rating > 4) {
      ReviewFeed.newReview.content && ReviewFeed.newReview.author && (message = `Review by ${ReviewFeed.newReview.author}: ${ReviewFeed.newReview.content}`);
      console.log(`Processing message for sending: ${message}`);
      Slack.postToChannel.send();
    }