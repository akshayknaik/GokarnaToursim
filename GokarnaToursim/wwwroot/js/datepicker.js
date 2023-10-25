console.log("Script executed");

var checkinInput = document.getElementById("checkin");
var checkoutInput = document.getElementById("checkout");
checkinInput.addEventListener("change", function () {
    var checkinDate = new Date(checkinInput.value);
    var minCheckoutDate = new Date(checkinDate);
    minCheckoutDate.setDate(checkinDate.getDate() + 1);

    var formattedMinCheckoutDate = minCheckoutDate.toISOString().split("T")[0];

    checkoutInput.min = formattedMinCheckoutDate;
    checkoutInput.value = ""; // Clear the checkout date when check-in date changes
});

checkoutInput.addEventListener("change", function () {
    var checkoutDate = new Date(checkoutInput.value);
    var checkinDate = new Date(checkinInput.value);

    if (checkoutDate <= checkinDate) {
        checkoutInput.value = ""; // Clear the checkout date if it's before check-in date
    }
});