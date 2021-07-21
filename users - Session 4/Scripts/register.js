
errorOnForm = false;

function User(email, password, firstName, lastName, age, address, phoneNumber, payment, color) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.payment = payment;
    this.color = color;
}

function registerUser(){
    console.log("Button CLicked!");

    if (errorOnForm) {
        return;
    }

    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();
    let firstName = $("#txtFirst").val();
    let lastName = $("#txtLast").val();
    let age = $("#txtAge").val();
    let address = $("#txtAddress").val();
    let phoneNumber = $("#txtPhone").val();
    let payment = $("#selPayment").val();
    let color = $("#selColor").val();


    let user = new User(email, password, firstName, lastName, age, address, phoneNumber, payment, color)
    saveUser(user); // this fn exist in storageManager.js
    setNavInfo(); // update user count
    clearForm();

    readUsers();
}

function clearForm() {
    // homework: clear every input field
    // set the select to first element
    // set the color back to black

    // HW part 2: Organize Files

}

function changeColor() {
    let color = $("#selColor").val();
    $("#colorH").css("color", color);
}

// VALIDATIONS
function validateEmail() {
    let email = $("#txtEmail").val();

    if (email === "") {
        displayError("Email Missing");
    } else {
        hideError();
    }
}
function validatePass() {
    let txtPass = $("#txtPassword");
    let password = $("#txtPassword").val();

    if (password.length < 5) {
        txtPass.css("border", "2px solid red");

        displayError("Password must be at least 5 characters")
    } else {
        txtPass.css("border", "1px solid rgb(133, 133, 133)");

        hideError();
    }
}
function validateFistName() {
    let firstName = $("#firstName").val();

    if (firstName === "") {
        displayError("First Name Missing");
    } else {
        hideError();
    }
}
function validateLastName() {
    let lastName = $("#lastName").val();

    if (lastName === "") {
        displayError("Last Name Missing");
    } else {
        hideError();
    }
}
// VALIDATIONS END
// ERRORS
function displayError(text) {
    $("#alertError").removeClass("hide").text(text);
    $("#btnSave").attr("disabled", true);
    errorOnForm = true;
}
function hideError() {
    $("#alertError").addClass("hide");
    $("#btnSave").attr("disabled", false);
    errorOnForm = false;
}
// ERROR END
//
function init() {
    console.log("Register Page!");

    $("#btnSave").click( registerUser );
    $("#selColor").change( changeColor );
    $("#txtPassword").change( validatePass )
}

window.onload = init()


// #    id
// .    class
// TAG