document.addEventListener("DOMContentLoaded", function () {
  const seatAvailable = document.getElementById("seatAvailable");
  const ageAbove50 = document.getElementById("ageAbove50");
  const hasAadhar = document.getElementById("hasAadhar");
  const checkButton = document.getElementById("checkStatus");
  const passengerStatus = document.getElementById("status");

  checkButton.addEventListener("click", function () {
    let isSeatAvailable = seatAvailable.checked;
    let isAgeAbove50 = ageAbove50.checked;
    let hasAadharCard = hasAadhar.checked;
    console.log(isSeatAvailable, isAgeAbove50, hasAadharCard);

    let feedback;
    if (isSeatAvailable) {
      console.log("Seat is Available");
      feedback = "Seat is available.";
      if (isAgeAbove50) {
        console.log("Aged above 50");
        feedback = feedback + " Aged above 50.";
        if (hasAadharCard) {
          console.log("Has Aadhar card");
          feedback = feedback + " Has Aadhar card.";
          let confirmmsg = confirm("Are you sure Do you want to come inside the bus");
          console.log(confirmmsg);
        } else {
          console.log("No Aadhar card");
          feedback = "Seat is available, aged above 50, but you don't have Aadhar card.";
        }
      } else {
        console.log("Age is below 50");
        feedback = "Seat is available, but your age is below 50 years.";
      }
    } else {
      console.log("Seat is not available");
      feedback = "Seat is not available.";
    }
    passengerStatus.textContent = feedback;
  });
});











//let isSeatAvailable = prompt("Is seat available?");
