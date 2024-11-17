// Mocking the Caavo object
const Caavo = {
    query: "Can you set the temperature to 72 degrees?"
};

// Mocking the Ecobee object
const Ecobee = {
    skip: function() {
        console.log("Skipping temperature setting as the query doesn't include'set the temperature'.");
    }
};

// Mocking localStorage functionality
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

let userQuery = Caavo.query.toLowerCase();
localStorage.setItem('userQuery', userQuery);

if (userQuery.indexOf("set the temperature") < 0) {
    Ecobee.skip();
}
// No changes needed.