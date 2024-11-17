// Mocking the Twitter object
const Twitter = {
newTweetByUser: {
    Text: "Check out our latest newsletter: https://example.com/newsletter1234 for updates!"
}
};

// Mocking the Pocket object
const Pocket = {
readItLater: {
    setUrl: function(url) {
    console.log("URL saved to Pocket:", url);
    },
    skip: function(reason) {
    console.log("Skipped adding to Pocket:", reason);
    }
}
};


var matchResult = /https:\/\/\S+/.exec(Twitter.newTweetByUser.Text);


if (matchResult) {
Pocket.readItLater.setUrl(matchResult[0]);
} else {
Pocket.readItLater.skip('Likely not Money Stuff');
}