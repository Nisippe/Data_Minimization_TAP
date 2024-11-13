const WemoInsightSwitch = { SwitchName: "Living Room Light", SwitchedOnAt: new Date("November 05, 2024 08:00:00 pm") };
     const Meta = { currentUserTime: () => new Date(), triggerTime: () => new Date(), currentUserLocation: "New York, USA", currentUserDeviceInfo: "iPhone 12 Pro Max" };

     const event = 'On';
     const sname = WemoInsightSwitch.SwitchName;
     const eventAt = WemoInsightSwitch.SwitchedOnAt;
     const codeRanTime = Meta.currentUserTime();
     const triggerTime = Meta.triggerTime();
     const userLocation = Meta.currentUserLocation;
     const deviceInfo = Meta.currentUserDeviceInfo;

     const rowData = sname + '|||' + event + '|||' + eventAt.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) + ' ' + event;