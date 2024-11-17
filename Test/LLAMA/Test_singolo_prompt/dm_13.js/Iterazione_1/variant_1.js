// Mock of Meta and LinkMyPet objects
const Meta = {
  triggerTime: {
    minute: function() {
      return new Date().getMinutes(); 
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
var batteryCheck = parseInt(LinkMyPet.collarInfo.Battery, 10);
var creationDate = new Date(LinkMyPet.collarInfo.CreatedAt).getDay();

if ((timeCheck % 30 > 0 && batteryCheck < 100) || (creationDate!== new Date().getDay())) {
  Sms.sendMeText.skip();
}