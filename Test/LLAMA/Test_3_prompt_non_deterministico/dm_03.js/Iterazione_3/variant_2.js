const ReviewFeed = {
    newReview: {
        content: "This product is amazing! Highly recommend it.",
        date: "2024-11-05",
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
    console.log(`Review by ${ReviewFeed.newReview.author}: ${ReviewFeed.newReview.content}`);
    Slack.postToChannel.send();
} else {
    Slack.postToChannel.send();
}