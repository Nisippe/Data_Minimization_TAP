const Feed = {
newFeedItem: {
    Content: "Check out this cool tweet @user"
}
};

const Twitter = {
postNewTweet: {
    skip: function() {
    console.log("Tweet skipped due to '@' in content.");
    }
}
};

if (Feed.newFeedItem.Content.includes("@")) {
Twitter.postNewTweet.skip();
}