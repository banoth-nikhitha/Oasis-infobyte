const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");
const loginForm = formPopup.querySelector(".login form");
const signupForm = formPopup.querySelector(".signup form");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});

// Handle login form submission
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // You can add your login logic here, for now just showing a message
    alert("Welcome! You have successfully logged in.");
    document.body.classList.remove("show-popup");
    loginForm.reset();
});

// Handle signup form submission
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // You can add your signup logic here, for now just showing a message
    alert("Congratulations! You have successfully signed up.");
    formPopup.classList.remove("show-signup");
    signupForm.reset();
});
