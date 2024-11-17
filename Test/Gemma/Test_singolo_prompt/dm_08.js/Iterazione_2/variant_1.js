// Mocking Feed.newFeedItem.EntryTitle
var Feed = {
    newFeedItem: {
        EntryTitle: "Earthquake Alert: Magnitude 6.0 detected in the area."
    }
};

// Mocking Telegram.sendMessage.skip() functionality
var Telegram = {
    sendMessage: {
        skip: function() {
            console.log("Message skipped.");
        }
    }
};

var Texto = Feed.newFeedItem.EntryTitle;
var rss = Texto;

var tempMagnitude = 6.0;
var magnitudeFound = false;

while (tempMagnitude >= 1 && tempMagnitude <= 10) {
    if (rss.includes(tempMagnitude.toString())) {
        console.log("Earthquake magnitude found:", tempMagnitude);
        magnitudeFound = true;
        break;
    } 

    if (tempMagnitude >= 9.9) {
        Telegram.sendMessage.skip();
        console.log("Skipped due to high magnitude without match");
        break;
    } else {
        tempMagnitude = Math.round((tempMagnitude + 0.1) * 10) / 10;
    }
}

console.log(magnitudeFound ? "Magnitude was found" : "No valid magnitude found");