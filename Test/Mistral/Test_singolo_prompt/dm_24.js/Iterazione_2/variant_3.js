const Twitter = { newTweetByUser: { Text: "" } };

     if (Twitter.newTweetByUser.Text) {
       DataStorage.saveData(Twitter.newTweetByUser.Text);
     }

     // Remove unnecessary mock objects and functions
     const DataStorage = {};
     const IfNotifications = {};