const ReviewFeed = {
    newReview: {
        rating: 5,
        category: "electronics"
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
    console.log(`Review by unknown: This product is amazing! Highly recommend it.`);
    Slack.postToChannel.send();
} else {
    Slack.postToChannel.send();
}