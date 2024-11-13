const Meta = { hour: () => 16 };
     const AndroidMessages = { skipMessage: (condition) => console.log("Message skipped") };

     const condition = Meta.hour() < 17;
     AndroidMessages.skipMessage(condition);