// Array of special characters to be included in password
let options = [];
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
  
  let lengthOfPassword =parseInt(prompt("How many characters?"));
  console.log(lengthOfPassword)
  if ( isNaN(lengthOfPassword) || lengthOfPassword < 10 || lengthOfPassword > 64){
    console.log("please enter a number between 10 and 64")
    getPasswordOptions();
  }
  else {
    let lowerCaseBool = confirm("Would you like your password to contain lower case characters?");
    if (lowerCaseBool) {
      options.push(lowerCasedCharacters);
    }
  
    let upperCaseBool = confirm("Would you like your password to contain upper case characters?")
    if (upperCaseBool) {
      options.push(upperCasedCharacters);
    }
    let specialBool = confirm("Would you like your password to contain special characters?");
    if (specialBool) {
      options.push(specialCharacters);
    }
    let numbersBool = confirm("Would you like your password to contain numeric characters?")
    if(numbersBool) {
      options.push(numericCharacters);
    }
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
function generatePassword() {
  // depending on userInput, run through each array 

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