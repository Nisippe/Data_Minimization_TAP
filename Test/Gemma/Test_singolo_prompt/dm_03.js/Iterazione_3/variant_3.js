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
    console.log(`Processing message for sending: ${ReviewFeed.newReview.content}`);
Slack.postToChannel.send();
} else {
Slack.postToChannel.skip();
}