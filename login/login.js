const userLogin = document.getElementById("userlogin");
const loginFeedback = document.getElementById("loginfeedback");
const userPassword = document.getElementById("userpassword");
const userPasswordFeedback = document.getElementById("userpwfeedback");
const loginBtn = document.getElementById("loginbtn");

function loginInfo() {
  let user = userLogin.value;
  let storedData = JSON.parse(localStorage.getItem("userInfo"));
  const userMatch = user === storedData.username;
  const emailMatch = user === storedData.emails;

  if (!storedData) {
    loginFeedback.textContent = "No user data found. Please sign up first.";
    loginFeedback.style.color = "red";
    return;
  }

  if (!userMatch && !emailMatch) {
    loginFeedback.textContent = " This user doesnt exist.";
    loginFeedback.style.color = "red";
  } else {
    loginFeedback.textContent = "User exist!";
    loginFeedback.style.color = "green";
  }
}

function pwlogin() {
  let pw = userPassword.value;
  let storedData = JSON.parse(localStorage.getItem("userInfo"));
  const passwordMatch = pw === storedData.password;

  if (!storedData) {
    loginFeedback.textContent = "No user data found. Please sign up first.";
    loginFeedback.style.color = "red";
    return;
  }

  if (!passwordMatch) {
    userPasswordFeedback.textContent = "Wrong password entered try again";
    userPasswordFeedback.style.color = "red";
  } else {
    userPasswordFeedback.textContent = "Correct password";
    userPasswordFeedback.style.color = "green";
  }
}

//add eventlistener
loginBtn.addEventListener("click", function () {
  window.location.href = "../welcome/welcome.html";
});
