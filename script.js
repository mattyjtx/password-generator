// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = [
  '@',
  '%',
  '+',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

function passwordOptions(){
  var length = parseInt(prompt('how many characters would you like in your password?(Between 8-128)'));

  if (length < 8) {
    alert("Your password should be between 8 and 128.");
    return null;
  }

  if (length > 128) {
    alert("Your password should be between 8 and 128.");
    return null;
  }

  var hasUppercase = confirm("Would you like uppercase characters in your password?");
  var hasLowercase = confirm("Would you like lowercase characters in your password?");
  var hasNumber = confirm("Would you like numbers in your password?");
  var hasSpecial = confirm("Would you like special characters in your password?");


  var options = {
    hasUppercase: hasUppercase,
    hasLowercase: hasLowercase,
    hasNumber: hasNumber,
    hasSpecial: hasSpecial,
    length: length,

  }
   return options; 


  //return variable for all password options

};

// var passwordArray = {
//   upper: getRandomUpper,
//   lower: getRandomLower,
//   number: getRandomNumber,
//   special: getRandomSpecial,
// };
// // console.log(randomFunction);

// function getRandomUpper() {
//   var hasUppercase = upperCasedCharacters;
//   return hasUppercase[Math.floor(Math.random() * hasUppercase.length)];

// }
// console.log(getRandomUpper());

// function getRandomLower() {
//   var hasLowercase = lowerCasedCharacters;
//   return hasLowercase[Math.floor(Math.random() * hasLowercase.length)];
// }
// console.log(getRandomLower());

// function getRandomNumber() {
//   var hasNumber = numericCharacters;
//   return hasNumber[Math.floor(Math.random() * hasNumber.length)];
// }
// console.log(getRandomNumber());

// function getRandomSpecial() {
//   var hasSpecial = specialCharacters;
//   return hasSpecial[Math.floor(Math.random() * hasSpecial.length)];
// }

// console.log(getRandomSpecial());



function generatePassword(){
  var options = passwordOptions();
  console.log(options);

  var password = "";

  for (var i = 0; i < length; i++) {
    var randomIndex = [Math.floor(Math.random() * options.length)];
    password = password + options[randomIndex];

 return password;


  // return password as a string
}

//Write password to the #password input
function writePassword() {
  
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
 
  

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
