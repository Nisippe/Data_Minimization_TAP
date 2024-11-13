const Trigger = { deviceType: "Phone" };

     const AndroidDevice = {
       setDeviceVolume: {
         skip: function(message) {
           if (Trigger.deviceType !== "Gear") {
             console.log("Volume adjustment skipped:", message);
           } else {
             console.log("Device connected: action allowed.");
           }
         }
       }
     };

     AndroidDevice.setDeviceVolume.skip("Déconnection non due à la montre");