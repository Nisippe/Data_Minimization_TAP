const Meta = {
  triggerTime: {
    add: function(hours) {
      const now = new Date();
      now.setHours(now.getHours() + hours);
      return now;
    }
  }
};

const IosReminders = {
  createReminderIosReminders: {
    setAlarmDate: function(date) {
      console.log("Reminder set for:", date.toLocaleString("en-US", { month: "numeric", day: "numeric", year: "numeric", hour: "numeric", minute: "numeric", hour12: true }));
    }
  }
};

var reminderTime = Meta.triggerTime.add(2);
IosReminders.createReminderIosReminders.setAlarmDate(reminderTime);