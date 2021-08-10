var specialCharArr = ["@", "$", "#", "&", "*", "!"];
var numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = "abcdefghijklmnopqrmnopqrstuvwxyz";
var lowerCaseArr = lowerCase.split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCaseArr = upperCase.split("");

function getUserOperations() {
  var length = prompt("Please select the length of the password");
  if (length < 8 || length > 128) {
    alert(
      "Please ensure the password length is between 8 characters to 128 characters"
    );
    return;
  }
  var useLowerCase = confirm(
    "Would you like to use lowercase characters in your password?"
  );
  var useUpperCase = confirm(
    "Would you like to use uppercase characters in your password?"
  );
  var useNumbers = confirm("Would you like to use numbers in your password?");
  var useSpecialChar = confirm(
    "Would you like to use special characters in your password?"
  );

  console.log(useLowerCase, useNumbers, useUpperCase, useSpecialChar);
  if (
    useLowerCase === false &&
    useUpperCase === false &&
    useNumbers === false &&
    useSpecialChar === false
  ) {
    alert("Please select at least one element for your password");
    return;
  }

  var userChoices = {
    useLowerCase: useLowerCase,
    useUpperCase: useUpperCase,
    useNumbers: useNumbers,
    useSpecialChar: useSpecialChar,
    length: length,
  };

  return userChoices;
}

function generatePassword() {
  var input = getUserOperations();
  var password = "";
  console.log(input);
  
  //create a big pool of array with all user selected char sets.
  var userPool = [];
  //How to copy user selected array?

  if (input.useLowerCase) {
    userPool = userPool.concat(lowerCaseArr);
  }
  console.log(userPool);

  if (input.useUpperCase) {
    userPool = userPool.concat(upperCaseArr);
  }
  console.log(userPool);

  if (input.useNumbers) {
    userPool = userPool.concat(numberArr);
  }
  console.log(userPool);

  if (input.useSpecialChar) {
    userPool = userPool.concat(specialCharArr);
  }
  console.log(userPool);

  //concat random characters to the password string.
  for (var i = 0; i < input.length; i++) {
    password = password + userPool[Math.floor(Math.random() * userPool.length)];
  }
  console.log(password);
  return password;
}

//use for loop to go through the big pool

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);


