const WemoInsightSwitch = { SwitchName: "Living Room Light" };
     const Meta = { currentUserTime: () => new Date().toLocaleString('en-US', { timeStyle: 'short' }) };

     const event = 'On';
     const sname = WemoInsightSwitch.SwitchName;
     const codeRanTime = Meta.currentUserTime();

     const rowData = sname + '|||' + event;