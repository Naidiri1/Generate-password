
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


 alert("Lets start to create your secure password.");

function passwordRequirements() {
    var length = parseInt(window.prompt("To generate the lenght of your password choose from 10 to 100 characters on it."));

    if (Number.isNaN(length)) {
        alert("Password must contain from 10-100 characters.");
        return;
    }

    if (length < 10) {
        alert("Password length must be written in number from 10-100 characters.");
        return;
    }

    if (length > 100) {
        alert("Password length must be written in number from 10-100 characters.");
        return;
    }


    var containsSpecialCharacters = confirm("Click OK to confirm including special characters. (!, @, #, $, %, ^, &, etc. )");
    var containsNumericCharacters = confirm("Click OK to confirm including numeric characters. ( 0,1,2,3,etc) ");
    var containsLowerCasedCharacters = confirm("Click OK to confirm including lowercase characters. (a,b,c,d, etc.)");
    var containsUpperCasedCharacters = confirm("Click OK to confirm including uppercase characters. (A,B,C,D, etc)");

    if (
        containsSpecialCharacters === false && 
        containsNumericCharacters === false &&
        containsLowerCasedCharacters === false && 
        containsUpperCasedCharacters === false
        ) {

        alert("Password must contain at least one character type");
        return null;
    }
    var passwordOptions = {
        length: length,
        containsSpecialCharacters: containsSpecialCharacters,
        containsNumericCharacters: containsNumericCharacters,
        containsLowerCasedCharacters: containsLowerCasedCharacters,
        containsUpperCasedCharacters: containsUpperCasedCharacters,
    };

    return passwordOptions;
}

function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];

    return randElement;
}

function generatePassword() {
    var options = passwordRequirements();
    var result = [];
    var possibleCharacters = [];
    var guaranteedCharacters = [];

   if (!options) return null;
  
   



    if (options.containsSpecialCharacters) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        guaranteedCharacters.push(getRandom(specialCharacters));
    }

    if (options.containsNumericCharacters) {
        possibleCharacters = possibleCharacters.concat(numericCharacters);
        guaranteedCharacters.push(getRandom(numericCharacters));
    }

    if (options.containsLowerCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
        guaranteedCharacters.push(getRandom(lowerCasedCharacters));
    }

    if (options.containsUpperCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
        guaranteedCharacters.push(getRandom(upperCasedCharacters));

    }

    for (var i = 0; i < options.length; i++) {
        var possibleCharacter = getRandom(possibleCharacters);

        result.push(possibleCharacter);
    }

    for (var i = 0; i < guaranteedCharacters.length; i++) {
        result[i] = guaranteedCharacters[i];
    }
        return result.join('');

   }


    var generateBtn = document.querySelector('#generate');

    // Write password to the #password input
    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector('#password');

        passwordText.value = password;
    
}
    generateBtn.addEventListener('click', writePassword);

