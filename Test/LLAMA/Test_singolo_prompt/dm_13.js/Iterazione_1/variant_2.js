// Mock of Meta and LinkMyPet objects
const Meta = {
  triggerTime: {
    minute: function() {
      return new Date().getMinutes(); 
    },
    day: function() {
      return new Date().getDay();
    }
  }
};

const LinkMyPet = {
  collarInfo: {
    CreatedAt: new Date().toISOString(),
    Battery: '85'
  }
};

const Sms = {
  sendMeText: {
    skip: function() {
      console.log("SMS sending skipped.");
    }
  }
};

var timeCheck = Meta.triggerTime.minute();
var dayCheck = Meta.triggerTime.day();

var batteryCheck = parseInt(LinkMyPet.collarInfo.Battery, 10);
var adjustedMinute = timeCheck;

if ((adjustedMinute % 30 > 0 && batteryCheck < 100) || (timeCheck!== dayCheck)) {
  Sms.sendMeText.skip();
}