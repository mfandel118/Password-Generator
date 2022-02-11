//Arrays of possible characters for password generation
var special = [" ","!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","}","|","~"]
var numeric = ["1","2","3","4","5","6","7","8","9","0"]
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// Initial prompts to determine which characters & how long the user's password will be
var passwordLength = prompt("Choose how many characters you would like to include in your password. Please choose a number between 8 - 128.")

// If user input is too small or too large
if (passwordLength < 8 || passwordLength > 128) {
  prompt("Password must be between 8 - 128 characters long. Please choose a number between 8 - 128:")
} 

var lowercasePrompt = confirm("Would you like your password to include LOWERCASE characters?")
var uppercasePrompt = confirm("Would you like your password to include UPPERCASE characters?")
var numericPrompt = confirm("Would you like your password to include NUMERIC characters?")
var specialPrompt = confirm("Would you like your password to include SPECIAL characters?")


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
