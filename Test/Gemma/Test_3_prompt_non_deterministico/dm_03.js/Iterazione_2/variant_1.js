const ReviewFeed = {
    newReview: {
        content: "This product is amazing! Highly recommend it.",
        author: "Jane Doe",
        date: "2024-11-05",
        rating: 5,
        category: "electronics"
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
Slack.postToChannel.send();
} else {
Slack.postToChannel.skip();
}