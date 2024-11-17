const ReviewFeed = {
    newReview: {
        content: "This product is amazing! Highly recommend it.",
        rating: 5
        }
};

const Slack = {
postToChannel: {
    skip: function() {
    console.log("Positive review skipped.");
    },
    send: function() {
    console.log("Positive review posted to Slack!");
    }
}
};

if (ReviewFeed.newReview.rating > 4) {
var message = `Review by ${ReviewFeed.newReview.author}: ${ReviewFeed.newReview.content}`;
console.log(`Processing message for sending: ${message}`);
Slack.postToChannel.send();
} else {
Slack.postToChannel.skip();
}