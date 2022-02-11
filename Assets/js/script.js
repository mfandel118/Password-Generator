// Arrays of possible characters for password generation
var special = [" ","!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","}","|","~"];
var numeric = ["1","2","3","4","5","6","7","8","9","0"];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// Empty array & string to be concatinated 
var newArray = [];
var newPassword = "";

// Initial prompts to determine which characters & how long the user's password will be
var passwordLength = prompt("Choose how many characters you would like to include in your password. Please choose a number between 8 - 128.");
// If user input is too small or too large they are prompted to try again
while (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("Password must be between 8 - 128 characters long. Please choose a number between 8 - 128:");
};

// Prompts to determine which characters the user wants to include in their password
var lowercasePrompt = confirm("Would you like your password to include LOWERCASE characters?");
var uppercasePrompt = confirm("Would you like your password to include UPPERCASE characters?");
var numericPrompt = confirm("Would you like your password to include NUMERIC characters?");
var specialPrompt = confirm("Would you like your password to include SPECIAL characters?");

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate password
function generatePassword() {
  //If user does not choose any characters for their password
  if (lowercasePrompt === false && uppercasePrompt === false && numericPrompt === false && specialPrompt === false) {
  alert("Password must contain characters. Please refresh page to try again.");
  return "Invalid Password"
};
// Creates new array containing characters specified by user via prompts
  if (lowercasePrompt) {
    newArray = newArray.concat(lowercase)};
  if (uppercasePrompt) {
    newArray = newArray.concat(uppercase)};
  if (numericPrompt) {
    newArray = newArray.concat(numeric)};
  if (specialPrompt) {
    newArray = newArray.concat(special)
  };
  // Chooses random character from newly created array
  // Repeats process for length of password, specified by user at initial prompt
  for (var i = 0; i < passwordLength; i++) {
    var randomNum = Math.floor(Math.random() * newArray.length)
    var randomCharacter = newArray[randomNum]
    newPassword = newPassword.concat(randomCharacter)
  };
  return newPassword;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

