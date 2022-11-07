// This array will contain the special characters to generate a password
var specialCharacters = [

    "!",
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
];

// This array will contain numeric characters to generate a password
var numericCharacters = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",


];

// This array will contain lower cased characters to generate a password
var lowerCasedCharacters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

// This array will contain upper cased characters to generate a password
var upperCasedCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",

];

//To start to generate the password we notify the user 
alert("Lets start to create your secure password.");

// function to know the lenght of characters the password will contain 
function passwordRequirements() {
    var length = parseInt(window.prompt("To generate the lenght of your password choose from 10 to 100 characters on it."));

    // Conditional to know if the user does not apply the lenght of characters and in numbers
    if (Number.isNaN(length)) {
        alert("Password lenght must contain numbers from 10-100 characters.");
        return;
    }
// conditional if the user input is less than 10
    if (length < 10) {
        alert("Password length must be written in number from 10-100 characters.");
        return;
    }
// condition if the user input is more than the number 100
    if (length > 100) {
        alert("Password length must be written in number from 10-100 characters.");
        return;
    }
//Boolean type variables;
// variable to store special characters 
    var containsSpecialCharacters = confirm("Click OK to confirm including special characters. (!, @, #, $, %, ^, &, etc. )");
    //variable to store numbers 
    var containsNumericCharacters = confirm("Click OK to confirm including numeric characters. ( 0,1,2,3,etc) ");
    //variable to store lower cased characters
    var containsLowerCasedCharacters = confirm("Click OK to confirm including lowercase characters. (a,b,c,d, etc.)");
    // variable to store upper cased characters 
    var containsUpperCasedCharacters = confirm("Click OK to confirm including uppercase characters. (A,B,C,D, etc)");

    //condition if the input is none of the variables and the password generator ends.
    if (
        containsSpecialCharacters === false &&
        containsNumericCharacters === false &&
        containsLowerCasedCharacters === false &&
        containsUpperCasedCharacters === false
    ) {

        alert("Password must contain at least one character type");
        return null;
    }

    // object that stores the user input 
    var passwordOptions = {
        length: length,
        containsSpecialCharacters: containsSpecialCharacters,
        containsNumericCharacters: containsNumericCharacters,
        containsLowerCasedCharacters: containsLowerCasedCharacters,
        containsUpperCasedCharacters: containsUpperCasedCharacters,
    };

    return passwordOptions;
}
// function using randmom elements from an array 
function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];

    return randElement;
}
//function to store the password with user input
function generatePassword() {
    var options = passwordRequirements();
      // Variable to store password as it's being concatenated
    var result = [];
     // Array to store types of characters to include in password
    var possibleCharacters = [];
    // Array to contain one of each type of chosen character to ensure each will be used
    var guaranteedCharacters = [];
 // Check if an options object exists, if not exit the function
    if (!options) return null;


// Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters

    if (options.containsSpecialCharacters) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        guaranteedCharacters.push(getRandom(specialCharacters));
    }

 // Conditional statement that adds array of numeric characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
    if (options.containsNumericCharacters) {
        possibleCharacters = possibleCharacters.concat(numericCharacters);
        guaranteedCharacters.push(getRandom(numericCharacters));
    }
 // Conditional statement that adds array of lower cased characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
    if (options.containsLowerCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
        guaranteedCharacters.push(getRandom(lowerCasedCharacters));
    }
 // Conditional statement that adds array of upper cased characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
    if (options.containsUpperCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
        guaranteedCharacters.push(getRandom(upperCasedCharacters));

    }
//for loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and 
//concatenating those characters into the result variable
    for (var i = 0; i < options.length; i++) {
        var possibleCharacter = getRandom(possibleCharacters);

        result.push(possibleCharacter);
    }
// Mix in at least one of each guaranteed character in the result
    for (var i = 0; i < guaranteedCharacters.length; i++) {
        result[i] = guaranteedCharacters[i];
    }
    // Transform the result into a string and pass into writePassword
    return result.join('');

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;

}
// Add event listener to generate button when the user clicks on generate password
generateBtn.addEventListener('click', writePassword);

