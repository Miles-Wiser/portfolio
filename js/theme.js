const themeToggle = document.getElementById("theme-toggle");

let currentTheme = localStorage.getItem("theme");

if (currentTheme === null) {
    currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

document.documentElement.setAttribute("data-theme", currentTheme);

if (currentTheme === "dark") {
    themeToggle.textContent = "Light Mode";
} else {
    themeToggle.textContent = "Dark Mode";
}

themeToggle.addEventListener("click", () => {
    if (currentTheme === "dark") {
        currentTheme = "light";
        themeToggle.textContent = "Dark Mode";
    } else {
        currentTheme = "dark";
        themeToggle.textContent = "Light Mode";
    }

    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
});