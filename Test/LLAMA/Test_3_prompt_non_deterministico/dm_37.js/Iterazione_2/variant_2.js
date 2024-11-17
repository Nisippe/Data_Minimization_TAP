const Feed = {
newFeedItem: {
    EntryContent: "Check out this cool tweet @user"
}
};

const Twitter = {
postNewTweet: {
    post: function() {
    console.log("Tweet posted.");
    }
}
};

if (Feed.newFeedItem.EntryContent.includes("@")) {
Twitter.postNewTweet.post();
}