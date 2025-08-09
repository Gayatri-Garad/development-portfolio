function selectPlan(units, price) {
  // Hide all dropdowns
  document.getElementById("dropdowns-1").style.display = "none";
  document.getElementById("dropdowns-2").style.display = "none";
  document.getElementById("dropdowns-3").style.display = "none";

  // Show correct dropdown
  if (units === 1) {
    document.getElementById("dropdowns-1").style.display = "block";
  } else if (units === 2) {
    document.getElementById("dropdowns-2").style.display = "block";
  } else if (units === 3) {
    document.getElementById("dropdowns-3").style.display = "block";
  }

  // Set total
  document.getElementById("total-text").innerText = `Total : $${price.toFixed(2)} USD`;

  // Add background to selected box
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box, index) => {
    if (index === units - 1) {
      box.classList.add('active');
    } else {
      box.classList.remove('active');
    }
  });
}
