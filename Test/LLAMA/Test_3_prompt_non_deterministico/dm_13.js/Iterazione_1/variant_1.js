// Mock of Meta and LinkMyPet objects
const Meta = {
  minute: function() {
    return new Date().getMinutes(); 
  },
  day: function() {
    return new Date().getDay();
  }
};

const LinkMyPet = {
  CreatedAt: new Date().toISOString(),
  Battery: '85'
};

const Sms = {
  skip: function() {
    console.log("SMS sending skipped.");
  }
};

var timeCheck = Meta.minute();
var dayCheck = Meta.day();

var batteryCheck = parseInt(LinkMyPet.Battery, 10);
var adjustedMinute = timeCheck;

if ((adjustedMinute % 30 > 0 && batteryCheck < 100) || (new Date(LinkMyPet.CreatedAt).getDay()!== dayCheck)) {
  Sms.skip();
}