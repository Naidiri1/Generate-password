
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

var numbers = [
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


//*window.alert("Lets start to create your secure password.");

function passwordRequirements() {
    var lengthCharacters = parseInt(prompt("To generate the lenght of your a password choose from 10 to 100 characters on it?"),
        8
    );

    if (Number.isNaN(lengthCharacters)) {
        console.log("Password must contain from 10-100 characters.");
        return null;
    }

    if (lengthCharacters < 10, lengthCharacters > 100) {
        console.log("Password length must be written in number from 10-100 characters.")
        return null;
    }

    var containsSpecialCharacters = confirm("Click OK to confirm including special characters. (!, @, #, $, %, ^, &, etc. )");
    var containsNumericCharacters = confirm("Click OK to confirm including numeric characters. ( 0,1,2,3,etc) ");
    var containsLowerCasedCharacters = confirm("Click OK to confirm including lowercase characters. (a,b,c,d, etc.)");
    var containsUpperCasedCharacters = confirm("Click OK to confirm including uppercase characters. (A,B,C,D, etc)");

    if (containsSpecialCharacters === false && containsNumericCharacters === false &&
        containsLowerCasedCharacters === false && containsUpperCasedCharacters === false) {

        alert("Password must contain at least one character type");
        return null;
    }
    var passwordCriteria = {

        lengthCharacters: lengthCharacters,
        containsSpecialCharacters: containsSpecialCharacters,
        containsLowerCasedCharacters: containsLowerCasedCharacters,
        containsLowerCasedCharacters: containsLowerCasedCharacters,
        containsUpperCasedCharacters: containsUpperCasedCharacters,
    };

    return passwordCriteria;
}

function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
  
    return randElement;
}



