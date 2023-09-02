function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid lols");
    });

        document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.type === "text" || e.target.type === "password") {
                const inputValue = e.target.value.trim();
                if (inputValue.length > 0 && inputValue.length < 6) {
                    setInputError(inputElement, "Field must be at least 6 characters");
                }
            }
        });
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();
    
        const usernameInput = loginForm.querySelector('input[type="text"]');
        const passwordInput = loginForm.querySelector('input[type="password"]');
        
        const usernameError = usernameInput.parentElement.querySelector(".form__input-error-message").textContent;
        const passwordError = passwordInput.parentElement.querySelector(".form__input-error-message").textContent;
    
        const generalErrorMessage = document.querySelector("#generalErrorMessage");
        
        //checks for specific errors
        if (usernameError || passwordError) {
            generalErrorMessage.textContent = "Please fix the errors below before continuing.";
            return;
        }
    
        //checks for empty username or password
        const usernameValue = usernameInput.value.trim();
        const passwordValue = passwordInput.value.trim();
    
        if (usernameValue === "" || passwordValue === "") {
            generalErrorMessage.textContent = "Please type a username and password.";
            return;
        }
    
        //clears any existing general error message
        generalErrorMessage.textContent = "";
    
        localStorage.setItem("loggedInUsername", usernameValue);

    
        //redirect to actual app
        window.location.href = "app.html";
        
    });
    const username = "username_from_login"; // Replace with the actual username
    localStorage.setItem("loggedInUsername", username);
});