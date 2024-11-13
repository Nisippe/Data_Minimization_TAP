const Twitter = { Text: "Check out the new gaming console!" }; // Removed unnecessary mentions of SNES, Super NES, and Super Nintendo

     const DataStorage = { saveData: function(text) { console.log("Data saved: ", text); } };

     if (!Twitter.Text.includes("SNES") && !Twitter.Text.includes("Super NES") && !Twitter.Text.includes("Super Nintendo")) {
         DataStorage.saveData(Twitter.Text);
     }