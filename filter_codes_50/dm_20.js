// Data minimization problem:
// 1. The video description and uploader's information are being stored in `GlobalVideoData` and could be unnecessarily exposed or processed.
// 2. The uploader's name is included in the tweet, which may not be necessary for the tweet's purpose.
let GlobalVideoData = [];
const Youtube = {
  newPublicVideoFromSubscriptions: {
    Title: "Amazing Gameplay in Fantasy World",
    Description: "Check out this amazing gameplay in the new fantasy world game!",
    Uploader: "Game Channel",
    UploadDate: "November 05, 2024"
  }
};
const Twitter = {
postNewTweet: function(tweetContent) {
    console.log("Tweet posted: " + tweetContent);
}
};

let videoTitle = Youtube.newPublicVideoFromSubscriptions.Title;
let videoDescription = Youtube.newPublicVideoFromSubscriptions.Description;
let videoUploader = Youtube.newPublicVideoFromSubscriptions.Uploader;
let videoUploadDate = Youtube.newPublicVideoFromSubscriptions.UploadDate;
let videoData = {
title: videoTitle,
description: videoDescription,
uploader: videoUploader,
uploadDate: videoUploadDate,
};


GlobalVideoData.push(videoData);


if (videoTitle.toUpperCase().indexOf("Fantasy") === -1) {
Twitter.postNewTweet("New video uploaded: " + videoTitle + " by " + videoUploader);
}
