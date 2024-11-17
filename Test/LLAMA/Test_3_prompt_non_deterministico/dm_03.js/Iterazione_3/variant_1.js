const ReviewFeed = {
    newReview: {
        content: "This product is amazing! Highly recommend it.",
        author: "Jane Doe",
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
    Slack.postToChannel.send();
}
// No changes needed.