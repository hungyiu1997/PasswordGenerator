
var specialChar = ["@", "$", "#", "&", "*", "!"]
var numberChoi = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var lowerCase = "a b c d f g h i j k l m n o p q r m n o p q r s t u v w x y z";
var lowerCaseEl = lowerCase .split(" ");
var upperCase = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
var upperCaseEl = upperCase .split (" ");


function getUserOperations() {
  var length = prompt("Please select the length of the password")
  if (length < 8 || length >128) {
    alert("Please ensure the password length is between 8 characters to 128 characters");
    return;
  } 
  var useLowerCase = confirm ("Would you like to use lowercase characters in your password?");
  var useUpperCase = confirm ("Would you like to use uppercase characters in your password?");
  var useNumbers = confirm ("Would you like to use numbers in your password?");
  var useSpecialChar = confirm ("Would you like to use special characters in your password?");
 
  console.log (useLowerCase,useNumbers, useUpperCase, useSpecialChar);
  if (useLowerCase===false && useUpperCase === false && useNumbers === false && useSpecialChar === false) {
    alert("Please select at least one element for your password");
    return;
  }

  var userChoices = {
    useLowerCase: useLowerCase,
    useUpperCase: useUpperCase,
    useNumbers: useNumbers,
    useSpecialChar: useSpecialChar,
    length: length,
  }

  return userChoices;
}

function generatePassword () {
 var input = getUserOperations();
 var results = userChoices();
 var userPosChars = [];
 var guarChar = [];

 if (input.useLowerCase) {
   userPosChars = userPosChars.concat(useLowerCase)
   guarChars.push(getRandom(useLowerCase))
 }
 if (input.useUpperCase) {
   userPosChars = userPosChars.concat(userUpperCase)
   guarChars.push(getRandom(useUpperCase))
 }
 if (input.useNumber) {
   userPosChars = userPosChars.concat(useNumber)
   guarChars.push(getRandom(useNumber))
 }
 if (input.useSpecialChar) {
   userPosChars = userPosChar.concat(useSpecialChar)
   guarChars.push(getRandom(useSpecialChar))
 }
 }

 var generateBtn = document.querySelector("#generate");

 function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

     passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);


for (var i=0; i< length; i++) {
  userChoices.push (password[Math.floor(Math.random() * guarChars.length)]);
}