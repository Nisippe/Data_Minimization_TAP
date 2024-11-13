const Trigger = {
          deviceType: "Phone" // Minimized to only store necessary data
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