const Meta = {
currentUserTime: {
    isoWeekday: function() {
        return 3;
    },
    hour: function() {
        return 6;
    }
}
};

const Telegram = {
sendMessage: {
    setText: function(text) {
        console.log("Telegram message text set:", text);
    }
}
};

const Twitter = {
newTweetFromSearch: {
    Text: "Here's a new tweet!"
}
};

var actualDay = Meta.currentUserTime.isoWeekday();
var timeOfDay = Meta.currentUserTime.hour();

if (timeOfDay >= 5 && timeOfDay <= 22) {
Telegram.sendMessage.setText(Twitter.newTweetFromSearch.Text);
} else {
Telegram.sendMessage.skip();
}