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

var magnitudeFound = false;

for (var tempMagnitude = 1; tempMagnitude <= 10; tempMagnitude++) {
    if (Feed.newFeedItem.EntryTitle.indexOf(tempMagnitude.toString()) >= 0) {
        console.log("Earthquake magnitude found:", tempMagnitude);
        magnitudeFound = true;
        break;
    }

    if (tempMagnitude >= 9.9) {
        Telegram.sendMessage.skip();
        console.log("Skipped due to high magnitude without match");
        break;
    }
}

var unusedVariable = magnitudeFound? "Magnitude was found" : "No valid magnitude found";
console.log(unusedVariable);