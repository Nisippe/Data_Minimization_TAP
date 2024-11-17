const Trigger = {
DeviceName: "Phone - Samsung Galaxy"
};

if (Trigger.DeviceName.indexOf("Gear") == -1) {
console.log("Device connected: action allowed.");
} else {
console.log("Déconnection non due à la montre");
}