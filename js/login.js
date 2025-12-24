const loginButton = document.querySelector(".loginNext button");

loginButton.addEventListener("click", async () => {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const rememberMe = document.getElementById("rememberMe").checked;

  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  try {
    const response = await fetch("http://127.0.0.1:8000/presentation/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Login Success:", data);
      alert(`Welcome back, ${data.fullName}!`);
      window.location.href = "home.html";

      if (rememberMe) {
        localStorage.setItem("token", data.token);
      } else {
        sessionStorage.setItem("token", data.token);
      }
    } else {
      alert(data.message || "Login failed");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong. Try again.");
  }
});
