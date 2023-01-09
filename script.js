// Array of special characters to be included in password
let options = [];
let lengthOfPassword = 0;
let upperCaseBool;
let lowerCaseBool;
let numbersBool;
let specialBool;

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
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
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
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
  'z'
];

// Array of uppercase characters to be included in password
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
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  
  lengthOfPassword =parseInt(prompt("How many characters?"));
  console.log(lengthOfPassword)
  if ( isNaN(lengthOfPassword) || lengthOfPassword < 10 || lengthOfPassword > 64){
    console.log("please enter a number between 10 and 64")
    getPasswordOptions();
  }
  else {
    lowerCaseBool = confirm("Would you like your password to contain lower case characters?");
    if (lowerCaseBool) {
      options.push(lowerCasedCharacters);
    }
    upperCaseBool = confirm("Would you like your password to contain upper case characters?")
    if (upperCaseBool) {
      options.push(upperCasedCharacters);
    }
    specialBool = confirm("Would you like your password to contain special characters?");
    if (specialBool) {
      options.push(specialCharacters);
    }
    numbersBool = confirm("Would you like your password to contain numeric characters?")
    if(numbersBool) {
      options.push(numericCharacters);
    }
  }
  if (!numbersBool && !upperCaseBool && !lowerCaseBool && !specialBool){
    alert("please choose atleast one option");
    getPasswordOptions();
  }
}


// Function for getting a random element from an array
// Using if statement to handle 2d array

function getRandom(arr) {
  let length = arr.length;
  let i = Math.floor(Math.random() * length);
  // check for next level of array
  let n = arr[i].length;
  if (n > 0) {
    let j = Math.floor(Math.random()* n)
    return arr[i][j]
  }
  else {
    return arr[i];
  }
}

// Function to generate password with user input
// depending on user input, the first few elements will match user criteria
function generatePassword() {
  let password = []

  if (upperCaseBool){
    password.push(getRandom(upperCasedCharacters));
  }
  if (specialBool){
    password.push(getRandom(specialCharacters));
  }
  if (lowerCaseBool){
    password.push(getRandom(lowerCasedCharacters));
  }
  if (numbersBool){
    password.push(getRandom(numericCharacters))
  }
  for (let i = password.length; i < lengthOfPassword; i++) {
    password.push(getRandom(options));
  }
  return password.join("")
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);