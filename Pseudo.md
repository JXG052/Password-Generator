# Password Generator
## Input:
    - User input will be a num, ie password lenght
    - boolean lowercase
    - boolean uppercase
    - boolean special

## Output

* Random character that is as long as the password length and contains what was asked for. 

## Process

function that gets a random character from a given array

// How do we know which array to chose?

if boolean lowercase true - push  array to the object
if boolean uppercase  true - push that array the object
if boolean special  true - push that array to the object

based on user inputs
let newArray = [
    [specialChars],
    [upper],
    [num],
    [lower]
]
if user selects yes - they get pushed to new array

function that gets Random word from (Array){
    if 2d array
    let maxNum = array.length
    let i =    generate random number between 0 and maxNum
    let j = getRandom(i)
    if 1d
    generate random number between 0 and array[i].length
    return array[i][j];

}

function that generates a password
    let password = ""
    // if user input is 10
    for (let i = 0; i < userInput; i ++){
        password[i] = getRandom();
        }
    
    double check that all criteria is met before returning. if not, call function again.
