// Data minimization problem:
// 1. The author and full review content are exposed in the message even though only the rating is used to determine posting.
// 2. Including the author and the date in the message may overexpose personal data unnecessarily for a simple "positive review" notification.
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
var message = `Review by ${ReviewFeed.newReview.author}: ${ReviewFeed.newReview.content}`;
console.log(`Processing message for sending: ${message}`);
Slack.postToChannel.send();
} else {
Slack.postToChannel.skip();
}
