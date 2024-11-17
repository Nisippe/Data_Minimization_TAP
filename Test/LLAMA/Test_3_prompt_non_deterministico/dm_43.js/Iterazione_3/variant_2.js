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

if (FacebookPages.newStatusMessageByPage.PageUrl.length >= 115) {
var subStr = FacebookPages.newStatusMessageByPage.PageUrl;
subStr = subStr.substring(0, 115); // Changed to substring to avoid substr
subStr += " [...] ";
Twitter.postNewTweet.setTweet(subStr);
} else {
Twitter.postNewTweet.setTweet(FacebookPages.newStatusMessageByPage.PageUrl);
}