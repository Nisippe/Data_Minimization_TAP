const FacebookPages = {
newStatusMessageByPage: {
    PageUrl: "https://facebook.com/examplepage"
}
};

const Twitter = {
postNewTweet: {
    setTweet: function(tweet) {
    console.log("Tweet set:", tweet);
    }
}
};

if (FacebookPages.newStatusMessageByPage.PageUrl.length > 0) {
var subStr = FacebookPages.newStatusMessageByPage.PageUrl.slice(0, 20);
subStr += " [...] ";
Twitter.postNewTweet.setTweet(subStr);
} else {
Twitter.postNewTweet.setTweet("");
}