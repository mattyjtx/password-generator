// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


var sym = [" ", "\"", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "?", "=", "_", "`", "{", "|", "}", "~"]



// Write password to the #password input
function writePassword() {
    var lowerEl = confirm("Do you want to use lowercase letters?");
    var upperEl = confirm("Do you want to use uppercase letters?");
    var numEl = confirm("Do you want to use numbers?");
    var symEl = confirm("Do you want to use symbols?");
    var passLengthEl = prompt("How long do you want your password to be?")


    // While all four variables are false, prompt the user again. While the user has not selected a character set, prompt then again. While there are no true statements, prompt the user again.

    while (lowerEl === false && upperEl === false && numEl === false && symEl === false) {
        alert("Invalid entry. Password must have at at least one of the folloing: lowercase letters, uppercase lettters, numbers, symbols. Please choose one.")
        lowerEl = confirm("Do you want to use lowercase letters?");
        upperEl = confirm("Do you want to use uppercase letters?");
        numEl = confirm("Do you want to use numbers?");
        symEl = confirm("Do you want to use symbols?");


    }
    //
    while (passLengthEl < 8 || passLengthEl > 128 || isNaN(passLengthEl)) {
        passLengthEl = prompt("Invalid entry, password must be between 8 and 128 characters in length. Please enter a valid length.");
    }

   

    // Create one array that combines all the character sets that user can use. Initialize an empty array. Use an IF statement with a true or false scenario that check if the user wanted that character set, and then put the ones user wants into our big array.


    var passwordInput = [];
 

    if (lowerEl === true && upperEl === true && numEl === true && symEl === true){
        passwordInput = lowerCase + upperCase + num + sym
        // console.log(passwordInput)
    }else if (lowerEl === true && upperEl === true && numEl === true) {
        passwordInput = lowerCase + upperCase + num
        // console.log(passwordInput)
    } else if (lowerEl === true && upperEl === true && symEl === true) {
        passwordInput = lowerCase + upperCase + sym
        // console.log(passwordInput)
    }else if (lowerEl === true && numEl === true && symEl === true) {
        passwordInput = lowerCase + num + sym
    } else if (upperEl === true && numEl === true && symEl === true) {
        passwordInput = upperCase + num + sym
        // console.log(passwordInput)
    } else if (lowerEl === true && upperEl === true) {
        passwordInput = lowerCase + upperCase
        // console.log(passwordInput)
    } else if (lowerEl === true && numEl === true) {
        passwordInput = lowerCase + num
        // console.log(passwordInput)
    } else if (lowerEl === true && symEl === true){
        passwordInput = lowerCase + sym
        // console.log(passwordInput)
    }else  if (upperEl === true && symEl === true) {
        passwordInput = upperCase + sym
        // console.log(passwordInput)
    }else if (upperEl === true && numEl === true) {
        passwordInput = upperCase + num
        // console.log(passwordInput)
    } else if (numEl === true && symEl === true) {
        passwordInput = num + sym
        // console.log(passwordInput)
    } else if (lowerEl === true) {
        passwordInput = lowerCase
        // console.log(passwordInput)
    } else if (upperEl === true) {
        passwordInput = upperCase
        // console.log(passwordInput)
    } else if (numEl === true) {
        passwordInput = num
        // console.log(passwordInput)
    } else if (symEl === true) {
        passwordInput = sym
        // console.log(passwordInput)
    }

console.log(passwordInput)
    //Randonly get a character from the big array as many times as the pass Length specifies. Hint: use for loop to establish how many times this will run. You will do this by concatinating (adding to the end of) the string 
    var password = generatePassword();
     
        function generatePassword(){
             // While the length of the password is withing the parameters, the password with generate the user input length. 
    if (passLengthEl >= 8 && passLengthEl <= 128){  
        var result = ""
        for ( var i = 0; i < passLengthEl; i++ ) {
           result += passwordInput.charAt(Math.floor(Math.random() * passwordInput.length));
           console.log(result)
        }
        return (result);
    
  
    }
    }
        //Add the password into the text. Hint: .setElement
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);