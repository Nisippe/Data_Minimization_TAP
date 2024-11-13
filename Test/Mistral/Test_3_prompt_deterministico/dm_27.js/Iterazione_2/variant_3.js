const Trigger = {
       deviceType: "Phone" // or any other attribute that identifies the device type necessary for the function
     };

     const AndroidDevice = {
       setDeviceVolume: {
         skip: function(message) {
           console.log("Volume adjustment skipped:", message);
         }
       }
     };

     if (Trigger.deviceType !== "Gear") {
       AndroidDevice.setDeviceVolume.skip("Déconnection non due à la montre");
     } else {
       console.log("Device connected: action allowed.");
     }