function validateForm() {

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    if (!/^[A-Z]/.test(username)) {
        document.getElementById("message").innerHTML =
            "Username must start with an uppercase letter.";
        return false;
    }

   
    if (!/\d/.test(username)) {
        document.getElementById("message").innerHTML =
            "Username must contain at least one digit.";
        return false;
    }

    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        document.getElementById("message").innerHTML =
            "Please enter a valid email address.";
        return false;
    }

   
    if (password.length < 8 || password.length > 20) {
        document.getElementById("message").innerHTML =
            "Password must contain 8 to 20 characters.";
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        document.getElementById("message").innerHTML =
            "Password must contain at least one uppercase letter.";
        return false;
    }

    
    if (!/[a-z]/.test(password)) {
        document.getElementById("message").innerHTML =
            "Password must contain at least one lowercase letter.";
        return false;
    }

    if (!/[^A-Za-z0-9.,;:]/.test(password)) {
        document.getElementById("message").innerHTML =
            "Password must contain at least one valid special character.";
        return false;
    }

    document.getElementById("message").innerHTML =
        "Registration Successful!";

    return false;
}