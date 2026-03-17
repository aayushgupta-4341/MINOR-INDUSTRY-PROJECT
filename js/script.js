document.getElementById("leadForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let consent = document.getElementById("consent").checked;

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "" || email === "" || message === "") {
    alert("Please fill all required fields");
    return;
  }
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email");
    return;
  }
  if (!consent) {
    alert("Please agree to consent");
    return;
  }

  document.getElementById("successMsg").innerText = "Thank you! Our team will contact you soon.";
  // Optional: Reset form
  document.getElementById("leadForm").reset();
});