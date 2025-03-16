const welcomeHeader = document.getElementById("welcome");
const greeting = document.getElementById("greeting");

function welcomeMess() {
  let storedData = JSON.parse(localStorage.getItem("userInfo"));

  if (storedData && storedData.name) {
    const welcomeName = storedData.name;
    welcomeHeader.textContent = `Welcome ${welcomeName}`;
    greeting.textContent = "Great to see you here!";
  }
}

window.onload = welcomeMess;
