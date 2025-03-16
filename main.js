// Varabiles
//add all of the ids that are gonna be affected
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

// Functions and methods
//Need a function to save the data into local storage
//
//This is the function that works if everything is correct and saves the data
function saveData() {
  // this will save the data if every thing is correct

  let emails = email.vaule;
  let passwords = password.vaule;
  // if everyhting is true then save
}

//add in use case for error down below
function validateUserName() {
  //user must have a certin about of letters, have a number and symbol as well
  let username = userName.value;
  let userNameRegex = /^(?=(.*\d){2,})(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
  const feedback = document.getElementById("feedback");
  //Username requierments
  const min8Char = username.length >= 8;
  const max2symb = (username.match(/\d/g) || []).length >= 2;
  const hasSpecialChar = /[!@#$%^&*]/.test(username);

  let errorMessage = [];

  if (!min8Char) errorMessage.push("Must be at least 8 characters long.");
  if (!max2symb) errorMessage.push("Must include at least 2 numbers.");
  if (!hasSpecialChar)
    errorMessage.push("Must include at least 1 special character (!@#$%^&*).");

  if (userNameRegex.test(username) && errorMessage.length === 0) {
    feedback.textContent = "You May Pass!";
    feedback.style.color = "green";
  } else if (errorMessage.length > 0) {
    (feedback.textContent = errorMessage.join(" ")), "No sir Try again";
  } else {
    feedback.textContent("Regex isnt working");
  }
}

validateUserName();

function vaildateEmail() {
  // user must have a @ in there email
}

function vaildatePassword() {
  // user must have a certin length and have number and symbole as well
  //when the first one is inputted correctly then the other confim pw shows up.
}

// inits and eventlisteners

// When the button is clicked it will go to the next page and save the data
//When the user clicks on the input user feild then the requirement show up.
//Same for the password,
