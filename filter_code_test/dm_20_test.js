let GlobalVideoData = [];

const Youtube = {
newPublicVideoFromSubscriptions: {
    Title: "Amazing Gameplay in Fantasy World",
}
};

const Twitter = {
postNewTweet: function(tweetContent) {
    console.log("Tweet posted: " + tweetContent);
}
};

let videoTitle = Youtube.newPublicVideoFromSubscriptions.Title;


if (videoTitle.toUpperCase().indexOf("Fantasy") === -1) {
Twitter.postNewTweet("New video uploaded: " + videoTitle);
}

