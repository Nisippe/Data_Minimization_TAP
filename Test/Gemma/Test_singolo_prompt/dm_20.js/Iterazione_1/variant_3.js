// Mocking the GlobalVideoData
let GlobalVideoData = [];

// Mocking the Youtube object
const Youtube = {
  newPublicVideoFromSubscriptions: {
    Title: "Amazing Gameplay in Fantasy World",
    Description: "Check out this amazing gameplay in the new fantasy world game!",
    Uploader: "Game Channel",
    UploadDate: "November 05, 2024"
  }
};

// Mocking the Twitter object
const Twitter = {
postNewTweet: function(tweetContent) {
    console.log("Tweet posted: " + tweetContent);
}
};

let videoTitle = Youtube.newPublicVideoFromSubscriptions.Title;
let videoUploader = Youtube.newPublicVideoFromSubscriptions.Uploader;
let videoData = {
title: videoTitle,
uploader: videoUploader,
};


GlobalVideoData.push(videoData);


if (videoTitle.toUpperCase().indexOf("Fantasy") === -1) {
Twitter.postNewTweet("New video uploaded: " + videoTitle + " by " + videoUploader);
}