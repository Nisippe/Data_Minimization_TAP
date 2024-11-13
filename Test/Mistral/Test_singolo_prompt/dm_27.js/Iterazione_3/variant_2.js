const Trigger = { deviceType: "Phone" };

         const AndroidDevice = {
           setDeviceVolume: {
             skip: (message) => (Trigger.deviceType !== "Gear" && console.log("Volume adjustment skipped:", message))
           }
         };

         AndroidDevice.setDeviceVolume.skip("Déconnection non due à la montre");