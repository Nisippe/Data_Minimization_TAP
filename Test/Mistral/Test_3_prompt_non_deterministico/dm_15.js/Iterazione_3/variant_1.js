const Meta = { getMinute: () => new Date().getMinutes() };

     const currentMinute = Meta.getMinute();

     if (currentMinute % 5 === 0) {
       // PhoneCall object and its method 'callMyPhone' and 'skip' are not necessary for data minimization
       // if the condition is met, no data is collected, processed or stored related to PhoneCall object
     }