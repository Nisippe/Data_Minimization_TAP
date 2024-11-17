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

if (FacebookPages.newStatusMessageByPage.PageUrl.length > 115) {
var subStr = FacebookPages.newStatusMessageByPage.PageUrl.substring(0, 115);
subStr += " [...] ";
Twitter.postNewTweet.setTweet(subStr);
} else {
Twitter.postNewTweet.setTweet(FacebookPages.newStatusMessageByPage.PageUrl);
}