const Feed = {
newFeedItem: {
    EntryContent: "Check out this cool tweet @user"
}
};

const Twitter = {
postNewTweet: {
    skip: function() {
    console.log("Tweet skipped due to '@' in content.");
    }
}
};

if (Feed.newFeedItem.EntryContent.includes("@")) {
Twitter.postNewTweet.skip();
}