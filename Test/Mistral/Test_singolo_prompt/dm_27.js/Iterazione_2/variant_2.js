const Trigger = { deviceType: "Phone" }; // Minimized to only store necessary data

         const AndroidDevice = {
           setDeviceVolume: {
             skip: function(message) {
               if (Trigger.deviceType !== "Gear") {
                 console.log("Volume adjustment skipped:", message);
               }
             }
           }
         };

         AndroidDevice.setDeviceVolume.skip("Déconnection non due à la montre");