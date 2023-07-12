
//Create user constructor

function User(
    firstName,
    lastName,
    age,
    email,
    password,
    grades
) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.password = password;
    this.grades = grades;

    this.gpa = 0;

    grades.forEach(el => {
        this.gpa += el
    })

    this.gpa /= 3;
}

var inputFirstName = $("#txtFirstName");
var inputLastName = $("#txtLastName");
var inputAge = $("#txtAge");
var inputEmail = $("#txtEmail");
var inputPassword = $("#txtPassword");
var inputUnits = [$("#txtUnit101"), $("#txtUnit102"), $("#txtUnit103")];


function validateUser(user){
    let validate = true;

    if(user.firstName === ""){
        validate = false;

        inputFirstName.removeClass("is-valid");
        inputFirstName.addClass("is-invalid");
    }else{
        inputFirstName.removeClass("is-invalid");
        inputFirstName.removeClass("is-valid");
    }

    if(user.lastName === ""){
        validate = false;

        inputLastName.removeClass("is-valid");
        inputLastName.addClass("is-invalid");
    }else{
        inputLastName.removeClass("is-invalid");
        inputLastName.removeClass("is-valid");
    }

    if(user.age === ""){
        validate = false;

        inputAge.removeClass("is-valid");
        inputAge.addClass("is-invalid");
    }else{
        inputAge.removeClass("is-invalid");
        inputAge.removeClass("is-valid");
    }

    if(user.email === ""){
        validate = false;

        inputEmail.removeClass("is-valid");
        inputEmail.addClass("is-invalid");
    }else{
        inputEmail.removeClass("is-invalid");
        inputEmail.removeClass("is-valid");
    }

    if(user.password === ""){
        validate = false;

        inputPassword.removeClass("is-valid");
        inputPassword.addClass("is-invalid");
    }else{
        inputPassword.removeClass("is-invalid");
        inputPassword.removeClass("is-valid");
    }

    user.grades.forEach((el, index) => {
        console.log(el)
        if(el === NaN){
            validate = false;

            inputUnits[index].removeClass("is-valid");
            inputUnits[index].addClass("is-invalid");
        }else{
            inputUnits[index].removeClass("is-invalid");
            inputUnits[index].removeClass("is-valid");
        }
    })

    return validate;
}

function register() {
    let user = new User(inputFirstName.val(), inputLastName.val(), inputAge.val(), inputEmail.val(), inputPassword.val(), inputUnits.map(el => parseFloat(el.val())));

    if(validateUser(user)){
        console.log(user)
        saveUser(user);
        clearForm();
    }
}

function clearForm(){
    inputFirstName.val("");
    inputLastName.val("");
    inputAge.val("");
    inputEmail.val("");
    inputPassword.val("");
    inputUnits.map(el => el.val(""));
}

function init() {

}

window.onload = init;
