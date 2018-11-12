
let form = document.getElementById('form')
let name = document.getElementById('name');
let address = document.getElementById('address');
let email = document.getElementById('email');
let password = document.getElementById('password');
let comment = document.getElementById('comment');
form.addEventListener('submit', function (e) {
    verif(e)
})
function verif(e) {
    e.preventDefault()
    testVide()
    Pwdvalidation()
    Emailvalidation()
}
function testVide() {
    if (password.value == "") {
        alert("Please enter your password.");
        password.focus();
        return false;
    }
    if (!name.value) {
        alert("Please enter your name.");
        name.focus();
        return false;
    }
    if (address.value == "") {
        alert("Please enter your address.");
        adress.focus();
        return false;
    }
    if (email.value == "") {
        window.alert("Please enter your email.");
        email.focus();
        return false;
    }
    if (!comment.value) {
        alert("Please enter your comment.");
        comment.focus();
        return false;
    }
}
function Pwdvalidation() {
    if (password.value.length < 8) {
        alert("Error: Password must contain at least eight characters!");
        password.focus();
        return false;
    }
    re = /[0-9]/;
    if (!re.test(password.value)) {
        alert("Error: password must contain at least one number (0-9)!");
        password.focus();
        return false;
    }
    re = /[a-z]/;
    if (!re.test(password.value)) {
        alert("Error: password must contain at least one lowercase letter (a-z)!");
        password.focus();
        return false;
    }
    re = /[A-Z]/;
    if (!re.test(password.value)) {
        alert("Error: password must contain at least one uppercase letter (A-Z)!");
        password.focus();
        return false;
    }

}
function Emailvalidation (){
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mailformat.test(email.value))
    {
    return true;
    }
    else
    {
    alert("You have entered an invalid email address!");
    }

}










