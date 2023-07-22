// Validation code for Inputs In Login Page

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

email.addEventListener('textInput',email_Verify);
password.addEventListener('textInput',password_Verify);

function Validation(){
    if (email.value.length < 9){
        email.style.border = "1px solid red";
        email.focus();
        return false;
    }
    if (password.value.length < 8){
        password.style.border = "1px solid red";
        password.focus();
        return false;
    }
}

function email_Verify(){
    if (email.value.length >= 8){
        email.style.border = "1px black";
        return true;
    }
}

function password_Verify(){
    if (password.value.length >= 5){
        password.style.border = "1px black";
        return true;
    }
}

// Validation code for Inputs In Signup Page
var email01 = document.forms['form01']['email01'];
var password01 = document.forms['form01']['password01'];
var C_password = document.forms['form01']['C_password'];

email01.addEventListener('textInput', email01_Verify);
password01.addEventListener('textInput', password01_Verify);
C_password.addEventListener('textInput', C_password_Verify);

function Signup_Validation(){
    if (email01.value.length < 9){
        email01.style.border = "1px solid red";
        email01.focus();
        return false;
    }
    if (password01.value.length < 8){
        password01.style.border = "1px solid red";
        password01.focus();
        return false;
    }
    if (C_password.value.length < 8){
        C_password.style.border = "1px solid red";
        C_password.focus();
        return false;
    }
}

function email01_Verify(){
    if (email01.value.length >= 8){
        email01.style.border = "1px black";
        return true;
    }
}

function password01_Verify(){
    if (password01.value.length >= 5){
        password01.style.border = "1px black";
        return true;
    }
}

function C_password_Verify(){
    if (C_password.value.length >= 5){
        C_password.style.border = "1px black";
        return true;
    }
}
