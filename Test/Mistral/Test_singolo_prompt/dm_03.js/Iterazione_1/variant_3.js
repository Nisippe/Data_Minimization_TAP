const ReviewFeed = {
          newReview: { rating: 5 }
        };

        const Slack = {
          postToChannel: {}
        };

        if (ReviewFeed.newReview.rating > 4) {
          const { author, content } = ReviewFeed.newReview;
          const message = `Review by ${author}: ${content}`;
          console.log(`Processing message for sending: ${message}`);
          Slack.postToChannel.send = () => console.log("Positive review posted to Slack!");
          Slack.postToChannel.send();
        } else {
          Slack.postToChannel.skip = () => console.log("Positive review skipped.");
          Slack.postToChannel.skip();
        }