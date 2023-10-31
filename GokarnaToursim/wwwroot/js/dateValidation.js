var checkinInput = document.getElementById("checkin");
var checkoutInput = document.getElementById("checkout");

    var currentCheckinDate = new Date();

    // Calculate the checkout date
    var currentCheckoutDate = new Date(currentCheckinDate);
    currentCheckoutDate.setDate(currentCheckinDate.getDate() + 1);

    // Format the current date as "yyyy-MM-dd"
    var initialCheckinDate = currentCheckinDate.toISOString().split("T")[0];
    var initialCheckoutDate = currentCheckoutDate.toISOString().split("T") [0];

    checkinInput.value = initialCheckinDate;
    checkoutInput.value = initialCheckoutDate;

    checkinInput.addEventListener("change", function () {
        var checkinDate = new Date(checkinInput.value);
        var checkoutDate = new Date(checkinDate);
        checkoutDate.setDate(checkinDate.getDate() + 1);

        var formattedCheckoutDate = checkoutDate.toISOString().split("T")[0];

        checkoutInput.min = formattedCheckoutDate;
        checkoutInput.value = formattedCheckoutDate; // Set the Check-Out Date to the next day
    });

    checkoutInput.addEventListener("change", function () {
        var checkoutDate = new Date(checkoutInput.value);
        var checkinDate = new Date(checkinInput.value);

        if (checkoutDate <= checkinDate) {
            checkoutInput.value = formattedCheckoutDate; // Reset to the next day if invalid date selected
        }
    });

