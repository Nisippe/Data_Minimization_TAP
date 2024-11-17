const Trigger = {
    title: "New Technology Trends for 2024"
};

var subject = "Ask Slashdot";

if (Trigger.title.indexOf(subject) < 0) {
    // No changes needed
} else {
    console.log("Sending notification for 'Ask Slashdot' article.");
}