const Twitter = { Text: "Check out the new gaming console coming soon!" };
     const DataStorage = { saveData: function(text) { console.log("Data saved: ", text); } };

     if (!["SNES", "Super NES", "Super Nintendo"].some(word => Twitter.Text.includes(word))) {
         DataStorage.saveData(Twitter.Text);
     }