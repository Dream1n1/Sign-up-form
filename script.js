const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password_confirm");
const noMatch = document.getElementById("noMatch");
const field = document.getElementById("password");
const form = document.getElementById("#myForm");

let passwordInput;
let passwordConfInput;

password.addEventListener('change',() => {
    return passwordInput = password.value;
})
passwordConfirm.addEventListener('change',() => {
    return passwordConfInput = passwordConfirm.value;
})

function validate() {
    if (passwordInput !== passwordConfInput) {
        noMatch.textContent = "* Passwords do not match";
        return false;
    }  else {
        return true;
    }
}

