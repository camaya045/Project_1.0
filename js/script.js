document.addEventListener("DOMContentLoaded", function () {
  const ageCheckbox = document.getElementById("age");
  const form = document.getElementById("signup-form");
	
  form.addEventListener("submit", function (event) {
    if(!ageCheckbox.checked) {
	  alert("You must be at least 18 years or older to sign up.");
	  event.preventDefault();
	}
  });
});