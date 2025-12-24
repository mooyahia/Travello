

const registerButton = document.querySelector(".registerNext button");

registerButton.addEventListener("click", async () => {
  const fullName = document.getElementById("fullNameInput").value.trim();
  const email = document.getElementById("emailInput").value.trim();
  const phoneNumber = document.getElementById("phoneNumberInput").value.trim();
  const password = document.getElementById("passwordInput").value.trim();
  const termsAccepted = document.getElementById("rememberMe").checked;

  if (!fullName || !email || !phoneNumber || !password) {
    alert("Please fill all fields");
    return;
  }

  if (!termsAccepted) {
    alert("You must agree to Terms and Conditions");
    return;
  }

  try {
    const response = await fetch("http://127.0.0.1:8000/presentation/save_contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fullname: fullName,
        email: email,
        phoneNumber: phoneNumber,
        password: password
      })
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Register Success", data);
      alert(data.message); 
      window.location.href = "loginpage.html";
    } 
     else {
  alert(data.error || data.message || "Registration failed");
}
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong. Try again.");
  }
});
