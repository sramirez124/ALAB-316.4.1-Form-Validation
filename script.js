// form IDs and error
const errorMessage = document.getElementById("error");
const registration = document.getElementById("registration");
const login = document.getElementById("login");

// registration elements

const email = registration.elements["email"];

// login elements
const loginName = login.elements["username"];
const loginPasswordCheck = login.elements["password"];

registration.addEventListener("submit", (evt) => {
    
});

function validateForm(){
    // Username Elements and Requirements
    const userName = document.getElementById("username").value;
    const userNameRequirements = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[/s]){4,}/;
    

    // Password Elemetns and Requirements
    const createdPassword = document.getElementById("password").value;
    const passRequirements = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{12,}/;
    const checkPassword = document.getElementById("passwordCheck").value;

    // Email Elements and Requirements
    const email = document.getElementById("email").value;
    const emailRequirements = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    //validatePassword(createdPassword, errorMessage, )
    const userCheck = validateUser(userNameRequirements, userName);
    if (userCheck === false) {
        console.log("userCheck in false block is: ", userCheck);
        errorMessage.style.color = "red";
        errorMessage.textContent += ("The username cannot be blank. \n The username must be at least four characters long. \n The username must contain at least two unique characters. \n The username cannot contain any special characters or whitespace.");
    } else {
        console.log("userCheck in true block is " , userCheck);
    }

    const passVal = validatePassword(passRequirements, createdPassword, checkPassword);
    if (passVal === false) {
        console.log("Password requirements was: " , passVal);
        errorMessage.style.color = "red";
        errorMessage.textContent += ("\n Passwords must be at least 12 characters long. \n Passwords must have at least one uppercase and one lowercase letter. \n Passwords must contain at least one number. \n Passwords must contain at least one special character. \n Passwords cannot contain the word -password- (uppercase, lowercase, or mixed). \n Passwords cannot contain the username. \n Both passwords must match.");
    } else {
        console.log("passwordCheck is " , passVal)
    }
}

function validateUser(userNameRequirements, userName){
    if (userNameRequirements.test(userName) == false){
        return false;
    } else {
        return true;
    }
}

function validatePassword(passRequirements, password, checkPassword){

    if (passRequirements.test(password) == false && password != checkPassword){
        return false;
    } else {
        return true;
    }

    // // Passwords must be at least 12 characters long.
    // let characterCheck = /(?=.*?[A-Z])(?=.*?[a-z]).{12,}/;
    // if (characterCheck.test(pass) == false){
    //     errorMessage += "Passwords must be at least 12 characters long. \n"
    // }

    // // Passwords must have at least one uppercase and one lowercase letter.
    // let lowerUpperCheck = /(?=.*?[A-Z])(?=.*?[a-z])/;
    // if (lowerUpperCheck.test(pass) == false){
    //     errorMessage += "Password must contain one lower and one upper case character \n";
    // }

    // // Passwords must contain at least one number.
    // let numberCheck = /(?=.*?[0-9])/;
    // if (numberCheck.test(pass) == false){
    //     errorMessage += "Passwords must contain at least one number. \n"
    // }

    // // Passwords must contain at least one special character.
    // let specialCheck = /(?=.*?[#?!@$%^&*-])/;
    // if (specialCheck.test(pass) == false){
    //     errorMessage += "Passwords must contain at least one special character. \n"
    // }
    // // Passwords cannot contain the word "password" (uppercase, lowercase, or mixed).
    // // Passwords cannot contain the username.
    // // Both passwords must match.
    // if (pass != checkPassword){
    //     errorMessage += "Both passwords must match. \n"
}


