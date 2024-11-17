// Data minimization problem:
// 1. The entire user query is stored in `localStorage` even though only a specific part of it (related to temperature setting) is relevant for the decision-making.
// 2. Storing the full query may lead to unnecessary data retention and possible privacy concerns, as the full content of the query may not be needed for the action taken.
const Caavo = {
voiceSearch: {
    Text: "Can you set the temperature to 72 degrees?"
}
};

const Ecobee = {
holdHoldhours: {
    skip: function() {
    console.log("Skipping temperature setting as the query doesn't include 'set the temperature'.");
    }
}
};

const localStorage = {
store: {},
setItem: function(key, value) {
    this.store[key] = value;
    console.log(`Stored in localStorage: ${key} = ${value}`);
},
getItem: function(key) {
    return this.store[key];
}
};


let userQuery = Caavo.voiceSearch.Text.toLowerCase();
localStorage.setItem('userQuery', userQuery);

if (userQuery.indexOf("set the temperature") < 0) {
Ecobee.holdHoldhours.skip();
}
