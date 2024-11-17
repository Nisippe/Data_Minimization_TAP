const Meta = {
       currentUserTime: { hour: () => Math.floor(new Date().getHours()) }
     };

     const VoipCalls = {
       callMyDevice: {
         skip: (hour) => hour > 8 && hour < 21 ? console.log("Call skipped due to hour: ", hour) : VoipCalls.messageSetter(),
         messageSetter: () => console.log("Message set: motion detected!")
       }
     };

     VoipCalls.callMyDevice.skip(Meta.currentUserTime.hour());