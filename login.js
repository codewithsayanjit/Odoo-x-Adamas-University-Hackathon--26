const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("Please fill all fields.");
        return;
    }

    // Get registered users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user exists
    const user = users.find(
        emp => emp.email === email && emp.password === password
    );

    if (!user) {
        alert("Invalid Email or Password!");
        return;
    }

    // Save login information
    localStorage.setItem("token", "true");
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    alert("Login Successful!");
   window.location.href = "employees.html";
    // Redirect to the page the user wanted to open
    const redirectPage = localStorage.getItem("redirectAfterLogin");
if (redirectPage) {
    localStorage.removeItem("redirectAfterLogin");
    window.location.href = redirectPage;
} else {
    window.location.href = "employees.html";
}

});