// form IDs and error
const errorDisplay = document.getElementById("error");
const registration = document.getElementById("registration");
const login = document.getElementById("login");

// registration elements

const email = registration.elements["email"];

// login elements
const loginName = login.elements["username"];
const loginPasswordCheck = login.elements["password"];

errorDisplay.addEventListener("submit", validateForm);

function validateForm(){
    // Username Elements and Requirements
    const userName = registration.getElementById("username").value;
    const userNameRequirements = /^(?=.*?[A-Z])(?=.*?[a-z])/

    // Password Elemetns and Requirements
    const createPassword = registration.getElementById("password").value;
    const passRequirements = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{12,}$/;
    const checkPassword = registration.elements["passwordCheck"];

    // 
    if (userCheck === false) {
        error.innerHTML = "<span style='color: red;'>errorMessage</span>"
        return false;
    }

    const passVal = validatePassword(createPassword, errorMessage);
    if (passVal === false) {
        error.innerHTML = "<span style='color: red;'>errorMessage</span>"
        return false;
    }
}

function validateUser(){

}

function validateEmail(){

}

function validatePassword(pass, errorMessage){

    if (passRequirements.test(pass) == true){
        console.log("Password meets requirements");
    } 

    // Passwords must be at least 12 characters long.
    let characterCheck = /(?=.*?[A-Z])(?=.*?[a-z]).{12,}/;
    if (characterCheck.test(pass)){
        errorMessage += "Passwords must be at least 12 characters long. \n"
    }

    // Passwords must have at least one uppercase and one lowercase letter.
    let lowerUpperCheck = /(?=.*?[A-Z])(?=.*?[a-z])/;
    if (lowerUpperCheck.test(pass) == false){
        errorMessage += "Password must contain one lower and one upper case character \n";
    }

    // Passwords must contain at least one number.
    let numberCheck = /(?=.*?[0-9])/;
    if (numberCheck.test(pass == false)){
        errorMessage += "Passwords must contain at least one number. \n"
    }

    // Passwords must contain at least one special character.
    let specialCheck = /(?=.*?[#?!@$%^&*-])/;
    if (specialCheck.test(pass == false)){
        errorMessage += "Passwords must contain at least one special character. \n"
    }
    // Passwords cannot contain the word "password" (uppercase, lowercase, or mixed).
    // Passwords cannot contain the username.
    // Both passwords must match.
    if (pass != checkPassword){
        errorMessage += "Both passwords must match. \n"
    }
    return errorMessage;
}


