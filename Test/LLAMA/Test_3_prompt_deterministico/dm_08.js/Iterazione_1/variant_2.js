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
var rss = " ";
rss = rss.concat(Texto);

var magnitudeArray = Array.from({ length: 10 }, (_, i) => (i + 1).toFixed(1));
var iterationCount = 0;

while (true) {
    iterationCount++;

    var tempMagnitude = Math.min(10, Math.max(1, Math.round((6.0 + (iterationCount * 0.1)) * 10) / 10));
    var magnitudeString = tempMagnitude.toString();

    if (magnitudeArray.includes(magnitudeString) && rss.indexOf(magnitudeString) >= 0) {
        console.log("Earthquake magnitude found:", magnitudeString);
        break;
    }

    if (tempMagnitude >= 9.9) {
        Telegram.sendMessage.skip();
        console.log("Skipped due to high magnitude without match");
        break;
    }
}

var unusedVariable = "Magnitude was found";
console.log(unusedVariable);