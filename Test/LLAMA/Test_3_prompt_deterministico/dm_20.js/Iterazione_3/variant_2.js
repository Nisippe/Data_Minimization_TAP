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

let videoData = {
  title: Youtube.newPublicVideoFromSubscriptions.Title,
  uploader: Youtube.newPublicVideoFromSubscriptions.Uploader,
};

GlobalVideoData.push(videoData);

if (videoData.title.toUpperCase().includes("FANTASY")) {
  Twitter.postNewTweet(videoData.title + " by " + videoData.uploader);
}