// Script for pass

const setPassword = "151725"; // Change this to your desired password
const entryBox = document.getElementById("entry-box");
const lockContainer = document.getElementById("lock-container");
const errorMessage = document.getElementById("error-message");
const passwordInput = document.getElementById("passwordInput");
const showPasswordButton = document.getElementById("showPassword");

function checkPassword() {
  const enteredPassword = passwordInput.value;

  if (enteredPassword === setPassword) {
    lockContainer.style.display = "none";
    document.addEventListener("DOMContentLoaded", function () {
      var audio = document.getElementById("my-audio");
      audio.play();
    });
    entryBox.style.display = "block";
  } else {
    showError("Incorrect password. Try again.");
  }
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    checkPassword();
  }
}

function showError(message) {
  errorMessage.textContent = message;
  setTimeout(() => {
    errorMessage.textContent = "";
  }, 3000); // Clear the error message after 3 seconds
}
