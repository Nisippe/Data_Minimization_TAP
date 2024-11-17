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

var texto = Feed.newFeedItem.EntryTitle;
var rss = texto;

var magnitude = 6.0;
var magnitudeArray = Array.from({ length: 10 }, (_, i) => (i + 1).toFixed(1));
var found = false;
var iterationCount = 0;

while (magnitude >= 1 && magnitude <= 10) {
    iterationCount++;

    var checkMagnitude = (magnitude % 1 === 0)? magnitude + 0.0 : magnitude;
    var magnitudeString = checkMagnitude.toString();

    if (magnitudeArray.includes(magnitudeString)) {
        if (rss.indexOf(magnitudeString) >= 0) {
            console.log("Earthquake magnitude found:", magnitudeString);
            found = true;
            break;
        }
    }

    if (magnitude >= 9.9) {
        Telegram.sendMessage.skip();
        console.log("Skipped due to high magnitude without match");
        break;
    } else {
        magnitude = Math.round((magnitude + 0.1) * 10) / 10;
    }
}

var unusedVariable = found? "Magnitude was found" : "No valid magnitude found";
console.log(unusedVariable);