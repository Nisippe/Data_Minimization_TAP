let GlobalVideoData = [];

const Youtube = {
  newPublicVideoFromSubscriptions: {
    Title: "Amazing Gameplay in Fantasy World",
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
  uploadDate: Youtube.newPublicVideoFromSubscriptions.UploadDate,
};

GlobalVideoData.push(videoData);

if (videoData.title.toUpperCase().indexOf("FANTASY")!== -1) {
  Twitter.postNewTweet(videoData.title + " by " + videoData.uploader);
}