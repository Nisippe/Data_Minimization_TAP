const Meta = { hour: () => 16 };
     const isTooEarly = () => Meta.hour() < 17;
     const AndroidMessages = { skipMessage: (message) => console.log("Message skipped:", message) };

     AndroidMessages.skipMessage(isTooEarly());