const Twitter = { Text: "Check out the new gaming console coming soon!" };
     const DataStorage = { saveData: function(text) { console.log("Data saved: ", text); } };

     const text = Twitter.Text;

     if (!text.includes("SNES") && !text.includes("Super NES") && !text.includes("Super Nintendo")) {
         DataStorage.saveData(text);
     }