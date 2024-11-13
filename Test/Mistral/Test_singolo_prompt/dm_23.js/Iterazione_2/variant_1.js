const WemoInsightSwitch = { SwitchName: "Living Room Light", SwitchedOnAt: "2024-11-05 20:00:00" }; // Removed unnecessary formatting and timezone information
         const Meta = { currentUserTime: () => new Date().toLocaleString('en-US', { timeStyle: 'short', dateStyle: 'long' }), triggerTime: () => new Date().toLocaleString('en-US', { timeStyle: 'short', dateStyle: 'long' }), currentUserLocation: "New York, USA", currentUserDeviceInfo: "iPhone 12 Pro Max" }; // Made functions return values instead of objects

         var event = 'On';
         var sname = WemoInsightSwitch.SwitchName;
         var eventAt = WemoInsightSwitch.SwitchedOnAt;
         var codeRanTime = Meta.currentUserTime();
         var triggerTime = Meta.triggerTime();

         var rowData = sname + '|||' + event + '|||' + eventAt.slice(0, 10) + ' ' // No changes needed