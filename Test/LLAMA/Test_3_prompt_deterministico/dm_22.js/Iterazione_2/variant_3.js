// Mocking the Twitter object
const Twitter = {
    newTweetByUser: {
        Text: "Check out our latest newsletter: https://example.com/newsletter1234 for updates!"
    }
};

// Mocking the Pocket object
const Pocket = {
    setUrl: function(url) {
        console.log("URL saved to Pocket:", url);
    },
    skip: function(reason) {
        console.log("Skipped adding to Pocket:", reason);
    }
};

var linkRegex = /newsletter.*(https:\/\/\S+)/;
var matchResult = linkRegex.exec(Twitter.newTweetByUser.Text);

if (matchResult && matchResult.length === 2) {
    Pocket.setUrl(matchResult[1]);
} else {
    Pocket.skip('Likely not Money Stuff');
}