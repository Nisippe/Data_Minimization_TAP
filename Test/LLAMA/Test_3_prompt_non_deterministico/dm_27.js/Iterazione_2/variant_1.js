const Trigger = {
DeviceName: "Phone - Samsung Galaxy"
};

if (Trigger.DeviceName!== "Samsung Galaxy") {
console.log("Device connected: action allowed.");
} else {
console.log("Déconnection non due à la montre");
}