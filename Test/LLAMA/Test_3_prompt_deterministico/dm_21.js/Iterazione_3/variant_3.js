// Mocking the Caavo object
const Caavo = {
voiceSearch: {
    Text: "Can you set the temperature to 72 degrees?"
}
};

// Mocking the Ecobee object
const Ecobee = {
    skip: function() {
        console.log("Skipping temperature setting as the query doesn't include'set the temperature'.");
    }
};

// Mocking localStorage functionality
const localStorage = {
    setItem: function(key, value) {
        console.log(`Stored in localStorage: ${key} = ${value}`);
    },
    getItem: function(key) {
        return null;
    }
};

let userQuery = Caavo.voiceSearch.Text.toLowerCase();
localStorage.setItem('userQuery', userQuery);

if (userQuery.indexOf("set the temperature") < 0) {
    Ecobee.skip();
}