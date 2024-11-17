const Meta = {
  triggerTime: {
    add: function(hours) {
      const now = new Date();
      now.setHours(now.getHours() + hours);
      return {
        format: function(formatString) {
          return now.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
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