const WemoInsightSwitch = { SwitchName: "Living Room Light", SwitchedOnAt: "November 05, 2024 08:00:00 pm" };
     const Meta = { currentUserTime: () => new Date().toLocaleString('en-US', { timeStyle: 'short', dateStyle: 'long' }), triggerTime: () => new Date().toLocaleString('en-US', { timeStyle: 'short', dateStyle: 'long' }), currentUserLocation: "New York, USA", currentUserDeviceInfo: "iPhone 12 Pro Max" };

     const event = 'On';
     const sname = WemoInsightSwitch.SwitchName;
     const eventAt = WemoInsightSwitch.SwitchedOnAt;
     const codeRanTime = Meta.currentUserTime();
     const triggerTime = Meta.triggerTime();
     const userLocation = Meta.currentUserLocation;
     const deviceInfo = Meta.currentUserDeviceInfo;

     const rowData = sname + '|||' + event + '|||' + eventAt.slice(0, -3) + ' ' + event