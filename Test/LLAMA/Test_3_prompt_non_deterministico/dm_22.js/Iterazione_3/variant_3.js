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
  }
};

var linkRegex = /https:\/\/\S+/;
var matchResult = Twitter.newTweetByUser.Text.match(linkRegex);

if (matchResult) {
  Pocket.setUrl(matchResult[0]);
} else {
  Pocket.skip('Likely not Money Stuff');
}
// No changes needed.