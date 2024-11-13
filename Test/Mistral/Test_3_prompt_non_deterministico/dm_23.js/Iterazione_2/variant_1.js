const WemoInsightSwitch = { SwitchName: "Living Room Light" }; // Remove SwitchedOnAt as it's not necessary for data minimization
     const Meta = { currentUserTime: () => new Date().toLocaleString('en-US', { timeStyle: 'short' }) }; // Remove dateStyle: 'long' as it's not necessary

     const event = 'On';
     const sname = WemoInsightSwitch.SwitchName;
     const codeRanTime = Meta.currentUserTime();

     const rowData = sname + '|||' + event + '|||' + codeRanTime;