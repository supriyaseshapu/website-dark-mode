const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save user preference to local storage
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("dark-mode-preference", isDarkMode);
});

// Check user preference on page load
const userPref = localStorage.getItem("dark-mode-preference");
if (userPref === "true") {
    body.classList.add("dark-mode");
}