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
 
if ((timeCheck % 30 > 0 && batteryCheck < 100)) {
Sms.sendMeText.skip();
}