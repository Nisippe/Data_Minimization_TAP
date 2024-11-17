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

let videoData = {
  title: Youtube.newPublicVideoFromSubscriptions.Title,
  description: Youtube.newPublicVideoFromSubscriptions.Description,
  uploader: Youtube.newPublicVideoFromSubscriptions.Uploader,
  uploadDate: Youtube.newPublicVideoFromSubscriptions.UploadDate,
};

GlobalVideoData.push(videoData);

if (videoData.title.toUpperCase().indexOf("FANTASY")!== -1) {
  Twitter.postNewTweet("New video uploaded: " + videoData.title + " by " + videoData.uploader);
}