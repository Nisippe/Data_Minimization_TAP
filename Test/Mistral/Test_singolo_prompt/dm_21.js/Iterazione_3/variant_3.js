const Caavo = { voiceSearch: { Text: "Can you adjust the temperature?" } };

         const Ecobee = { holdHoldhours: {} };

         const localStorage = { store: {}, setItem: Function, getItem: Function };

         localStorage.setItem = function(key, value) {
             this.store[key] = value;
         };

         localStorage.getItem = function(key) {
             return this.store[key];
         };

         const userQuery = Caavo.voiceSearch.Text.toLowerCase();
         localStorage.setItem('userQuery', userQuery);

         if (userQuery.indexOf("set the temperature") < 0) {
             Ecobee.holdHoldhours.skip = function() {
                 console.log("Skipping temperature setting as the query doesn't include 'set the temperature'.");
             };
             Ecobee.holdHoldhours.skip();
         }