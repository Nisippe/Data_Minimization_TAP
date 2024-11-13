const Meta = { hour: () => 16 };
     const AndroidMessages = { skipMessage: (condition) => { if (condition) console.log("Message skipped") } };

     AndroidMessages.skipMessage(Meta.hour() < 17);