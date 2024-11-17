const Trigger = {
DeviceName: "Phone - Samsung Galaxy"
};

const AndroidDevice = {
setDeviceVolume: {
    skip: function(message) {
    console.log("Volume adjustment skipped:", message);
    }
}
};

if (Trigger.DeviceName.includes("Gear")) {
console.log("Device connected: action allowed.");
} else {
AndroidDevice.setDeviceVolume.skip("Déconnection non due à la montre");
}