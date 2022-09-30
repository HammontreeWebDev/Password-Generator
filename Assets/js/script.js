// Assignment Code
var generateBtn = document.querySelector("#generate");

// Globally Define the characters to be used in the generate password function
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charNumbers = "0123456789";
var charSpecial = "!~@#$%^&*()";

// initial string will be empty as it will change depending on user input
var charSet = "";

// Define a function to generate a completely randomized password
function generatePassword() {
    // prompt user for character length of password
    var askLength = prompt(
        "How many characters will your password be? Enter a numerical value between 8 and 128: "
    );
    // conditional statement that allows a user to input a number between 8 and 128
    if (askLength >= 8 && askLength <= 128) {
        // confirm what types of characters should be included in the password
        var askUpper = confirm(
            "Do you want to include uppercase letters?" +
            "\n" +
            "\n" +
            "(Press OK for yes and CANCEL for no.)"
        );
        var askLower = confirm(
            "Do you want to include lowercase letters?" +
            "\n" +
            "\n" +
            "(Press OK for yes and CANCEL for no.)"
        );
        var askNumbers = confirm(
            "Do you want to include numbers?" +
            "\n" +
            "\n" +
            "(Press OK for yes and CANCEL for no.)"
        );
        var askSpecial = confirm(
            "Do you want to include special characters?" +
            "\n" +
            "\n" +
            "(Press OK for yes and CANCEL for no.)"
        );
    }
    // alert if an invalid number is entered and cancel function execution
    else {
        alert("Invalid number. Please enter a number between 8 and 128.");
        return
    }
    // conditional statements to evaluate character selection based on user input
    // if all 4 are selected:
    if (askUpper && askLower && askNumbers && askSpecial) {
        charSet = charUpper + charLower + charNumbers + charSpecial;
    }
    // if only 3 are selected:
    else if (askUpper && askLower && askNumbers) {
        charSet = charUpper + charLower + charNumbers;
    }
    else if (askUpper && askLower && askSpecial) {
        charSet = charUpper + charLower + charSpecial;
    }
    else if (askUpper && askNumbers && askSpecial) {
        charSet = charUpper + charNumbers + charSpecial;
    }
    else if (askLower && askNumbers && askSpecial) {
        charSet = charLower + charNumbers + charSpecial;
    }
    // if only 2 are selected:
    else if (askUpper && askLower) {
        charSet = charUpper + charLower;
    }
    else if (askUpper && askNumbers) {
        charSet = charUpper + charNumbers;
    }
    else if (askUpper && askSpecial) {
        charSet = charUpper + charSpecial;
    }
    else if (askLower && askNumbers) {
        charSet = charLower + charNumbers;
    }
    else if (askLower && askSpecial) {
        charSet = charLower + charSpecial;
    }
    else if (askNumbers && askSpecial) {
        charSet = charNumbers + charSpecial;
    }
    //   if only 1 is selected
    else if (askUpper) {
        charSet = charUpper;
    }
    else if (askLower) {
        charSet = charLower;
    }
    else if (askNumbers) {
        charSet = charNumbers;
    }
    else if (askSpecial) {
        charSet = charSpecial;
    }
    else {
        alert("Error. You must select at least one character type to include in your password!");
        return;
    }
    // set up for loop to randomly pick characters based on user input
    var userChoice = "";
    for (var i = 0; i < askLength; i++) {
        userChoice += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return userChoice;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);