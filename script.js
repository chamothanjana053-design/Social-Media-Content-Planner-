document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent form default submit

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "admin" && password === "1234") {
        window.location.href = "dashboard.html"; // redirect to dashboard
    } else {
        document.getElementById("error-msg").textContent = "Invalid username or password!";
    }
});
// Google login click
document.querySelector(".google-btn").addEventListener("click", function() {
    alert("Google login clicked!");
    // You can integrate Google OAuth here
});

// Email login click
document.querySelector(".email-btn").addEventListener("click", function() {
    alert("Email login clicked!");
    // Redirect to email login page or popup
});
