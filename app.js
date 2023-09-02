document.addEventListener("DOMContentLoaded", () => {
    const loggedInUsername = localStorage.getItem("loggedInUsername");
  
    if (loggedInUsername) {
      const usernameDisplay = document.getElementById("usernameDisplay");
      usernameDisplay.textContent = loggedInUsername;
    }
  });