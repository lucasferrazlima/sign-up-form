let pwdMatch = false;
let pwdEmpty = true;

// function for verifying if both password fields match
function checkPasswordMatch() {
    const pwd1 = document.getElementById("pwd").value;
    const pwd2 = document.getElementById("pwd-conf").value;
    if (pwd1==pwd2) {
        pwdMatch = true;
    } else {
        pwdMatch = false;
    }
}

// function for verifying if both password fields have some value
function checkIfPwdEmpty() {
    const pwd1 = document.getElementById("pwd").value;
    const pwd2 = document.getElementById("pwd-conf").value;
    if((pwd1.trim() !== '') && (pwd2.trim() !== '')) {
        pwdEmpty = false;
    } else {
        pwdEmpty = true;
    }
}

// Event listener to check pwdMatch and pwdEmpty when user changes input value
const pwd1 = document.getElementById("pwd");
const pwd2 = document.getElementById("pwd-conf");
const pwdCont = document.getElementById("pwd-container")
function checkPassword() {
    checkIfPwdEmpty();
    checkPasswordMatch();
    if (pwdMatch == false && pwdEmpty == false) {
        pwd1.classList.add("pwd-wrong");
        pwd2.classList.add("pwd-wrong");
        pwdCont.classList.add("pwd-wrong");
    } else {
        pwd1.classList.remove("pwd-wrong");
        pwd2.classList.remove("pwd-wrong");
        pwdCont.classList.remove("pwd-wrong");
    }
}
