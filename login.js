const signupForm = document.getElementById("signup-form")
const signinForm = document.getElementById("signin-form")

function signUp() {
    const fullname = document.getElementById('fullName').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const val_password = document.getElementById('val-signup-password').value;

    localStorage.setItem('fullname', fullname);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('val_password', val_password);

    if (password === val_password){
        alert('Sign up successful! You can now sign in.');
    location.href = "login.html";
    }else{
        alert("password does not match")
    }

    

}

function signIn() {

    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    // Retrieve user information from local storage
    const savedemail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    const savedValPassword = localStorage.getItem('val_password');

    if (email === savedemail && password === savedPassword) {
        localStorage.setItem('sessionActive', 'true');
        alert('Sign in successful!');
        location.href = "user-profile.html"; // Redirect to dashboard
    } else {
        alert('Invalid username or password. Please try again.');
    }
}