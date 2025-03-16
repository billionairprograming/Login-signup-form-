// Varabiles
//add all of the ids that are gonna be affected
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const feedback = document.getElementById("feedback");
const emailFeedback = document.getElementById("emailfeedback");
const passwordFeedback = document.getElementById("pwfeedback");
const confirm = document.getElementById("confirmpassword");
const confirmFeedback = document.getElementById("confirmedfeedback");
const submitBtn = document.getElementById("submit");
const nameUser = document.getElementById("usersname");
const feedbackName = document.getElementById("namefeedback");

//error varaibles

// Functions and methods
//Need a function to save the data into local storage
//
function useName() {
  let name = nameUser.value;
  let nameRegex = /^[A-Za-z]+$/;

  if (name === "") {
    feedbackName.textContent = "Enter your name";
    feedbackName.style.color = "red";
  } else if (!nameRegex.test(name)) {
    feedbackName.textContent = "Name must have only letters into it";
    feedbackName.style.color = "red";
  } else {
    feedbackName.textContent = "Awesome name";
    feedbackName.style.color = "green";
  }
}
//add in use case for error down below
function validateUserName() {
  //user must have a certin about of letters, have a number and symbol as well
  let username = userName.value;
  let userNameRegex = /^(?=(.*\d){2,})(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;

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

function vaildateEmail() {
  // user must have a @ in there email
  // Has been tested and is correct
  let emails = email.value;

  if (!emails.includes("@")) {
    emailFeedback.textContent = "You are missing an @";
    emailFeedback.style.color = "red";
  } else {
    emailFeedback.textContent = "Great email.";
    emailFeedback.style.color = "green";
  }
}

function vaildatePassword() {
  // user must have a certin length and have number and symbole as well
  //when the first one is inputted correctly then the other confim pw shows up.
  //this was tested and it works
  let passwords = password.value;
  let confirms = confirm.value;
  let passwordRegex = /^(?=(.*\d){2,})(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;

  const min8Chars = passwords.length >= 8;
  const max2symbs = (passwords.match(/\d/g) || []).length >= 2;
  const hasSpecialChars = /[!@#$%^&*]/.test(passwords);

  let errorMessages = [];

  if (!min8Chars) errorMessages.push("Must be at least 8 characters long.");
  if (!max2symbs) errorMessages.push("Must include at least 2 numbers.");
  if (!hasSpecialChars)
    errorMessages.push("Must include at least 1 special character (!@#$%^&*).");

  if (passwordRegex.test(passwords) && errorMessages.length === 0) {
    passwordFeedback.textContent = "Nice Password.";
    passwordFeedback.style.color = "green";

    confirm.style.display = "block";
  } else {
    passwordFeedback.textContent = errorMessages.join(" ");
    passwordFeedback.style.color = "red";
  }

  if (confirms !== "" && confirms !== passwords) {
    confirmFeedback.textContent = "Passwords do not match!";
    confirmFeedback.style.color = "red";
  } else if (confirms !== "") {
    confirmFeedback.textContent = "Money. All passwords match";
    confirmFeedback.style.color = "green";
  }
}

//This is the function that works if everything is correct and saves the data
function saveData() {
  // this will save the data if every thing is correct
  // if everyhting is true then save
  const userInfo = {
    name: nameUser.value.trim(),
    username: userName.value.trim(),
    emails: email.value.trim(),
    password: confirm.value,
  };

  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  alert("Sign-up compelted well done you can log in");

  window.location.href = "login/login.html";
}

// inits and eventlisteners
// When the button is clicked it will go to the next page and save the data
submitBtn.addEventListener("click", saveData);

//When the user clicks on the input user feild then the requirement show up.
//Same for the password,
//for this onclicks where added to the html.
