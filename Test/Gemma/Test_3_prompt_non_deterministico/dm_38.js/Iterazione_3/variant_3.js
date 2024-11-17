const Strava = {
newActivityByYou: {
    DistanceMeters: "5000"
}
};

const Monzo = {
potWithdraw: {
    setAmount: function(amount) {
    console.log("Amount set for withdrawal:", amount);
    }
}
};

var distance = parseInt(Strava.newActivityByYou.DistanceMeters);
Monzo.potWithdraw.setAmount(distance / 1000);