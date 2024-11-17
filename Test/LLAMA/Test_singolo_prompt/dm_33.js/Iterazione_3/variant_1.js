const Meta = {
  triggerTime: {
    add: function(hours) {
      const now = new Date();
      now.setHours(now.getHours() + hours);
      return {
        format: function(formatString) {
          const options = {
            hour: "numeric", minute: "numeric"
          };
          return now.toLocaleString("en-US", options);
        }
      };
    }
  }
};

const IosReminders = {
  createReminderIosReminders: {
    setAlarmDate: function(dateString) {
      console.log("Reminder set for:", dateString);
    }
  }
};

var reminderTime = Meta.triggerTime.add(2);