// Array of special characters to be included in password
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
// function generate() {
//     let passLength = prompt("Please Enter length of password")
//     if (passLength <= 10 && passLength >= 65) {
//        passLength = prompt("Password must be between 10 and 64")
//     }

//     let upperCase = prompt("Would you like uppercase characters?");
//     if (upperCase == 'yes'){
//        let capitalLetter = getRandom(upperCasedCharacters)
//     }


   
      // let  lowerCase= "Would you like lowercase characters?";
      // if (confirm(lowerCase) == true) {
      //   lowerCase = "Password will contain lowercase characters";
      // } else {
      //   lowerCase = "Password will NOT contain lowercase characters";
      // }
      
    
   
      // let  specials= "Would you like special characters?.";
      // if (confirm(specials) == true) {
      //   specials = "Password will contain special characters";
      // } else {
      //   specials = "Password will NOT contain special characters";
      // }
     
    
   
      // let numbers = "Would you like numbers characters?.";
      // if (confirm(numbers) == true) {
      //   numbers = "Password will contain numbers";
      // } else {
      //   numbers = "Password will NOT contain numbers";
      // }
      
// }
// console.log(generate());

function passWordLength() {
  let passLength = parseInt(prompt("Please Enter length of password"))
  while (passLength <= 10 || passLength >= 65) {
     passLength = parseInt(prompt("Password must be between 10 and 65"))
  }
  return passLength
}

function isCapital() {
  let capital = prompt('Would you like uppercase characters?')
      
  // console.log(capital);
  // while(capital != 'yes' || capital != 'no') {
  //   capital = prompt('yes or no?')
  // }
  
  if (capital == 'yes') {
    return true
  } else if (capital == 'no'){
    return false
  }
}

function isSpecialChar() {
  let char = prompt('Would you like special character?')
  if (char == 'yes') {
    return true
  } else if (char == 'no'){
    return false
  } 
}

function isNumber() {
  let number = prompt('Would you like numberr?')
  if (number == 'yes') {
    return true
  } else if (number == 'no'){
    return false
  } 
}

function isLowerCase() {
  let lower = prompt('Would you like lower caser?')
  if (lower == 'yes') {
    return true
  } else if (lower == 'no'){
    return false
  } 
}






// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
 




// Function to generate password with user input
function generatePassword() 
  
  {
    let password = ""
    let passLength = passWordLength()
    let capital = isCapital()
    let char = isSpecialChar()
    let number = isNumber()
    let lower = isLowerCase()
    console.log(passLength)
    for (let i = 0; i < passLength; i++) {
      if(capital){
        password += getRandom(upperCasedCharacters)
      }
      if(char){
        password += getRandom(specialCharacters)
      }
      if(number){
        password += getRandom(numericCharacters)
      }
      if(lower){
        password += getRandom(lowerCasedCharacters)
      }
      
    }
    console.log(password)
    return password;
  };


console.log(generatePassword());




// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)