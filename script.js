const form = document.getElementById("bookingForm");
const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const errorMsg = document.getElementById("errorMsg");
const nightsText = document.getElementById("nights");

let today = new Date().toISOString().split("T")[0];
checkin.min = today;
checkout.min = today;

function calculateNights(){
let checkinDate = new Date(checkin.value);
let checkoutDate = new Date(checkout.value);

if(checkin.value && checkout.value){
let timeDiff = checkoutDate - checkinDate;
let days = timeDiff / (1000 * 3600 * 24);

if(days > 0){
nightsText.textContent = "Total Nights: " + days;
errorMsg.textContent = "";
}else{
nightsText.textContent = "";
}
}
}

checkin.addEventListener("change", calculateNights);
checkout.addEventListener("change", calculateNights);

form.addEventListener("submit", function(e){
e.preventDefault();

let checkinDate = new Date(checkin.value);
let checkoutDate = new Date(checkout.value);

if(checkoutDate <= checkinDate){
errorMsg.textContent = "Check-out date must be after check-in date!";
return;
}

errorMsg.textContent = "";
alert("Your 5-Star Luxury Booking is Confirmed!");
form.reset();
nightsText.textContent = "";
});