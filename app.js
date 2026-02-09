if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}
const offlineBadge = document.getElementById("offlineBadge");

function updateOnlineStatus() {
    if (!navigator.onLine) {
        offlineBadge.style.display = "block";
    } else {
        offlineBadge.style.display = "none";
    }
}

window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);

updateOnlineStatus();
const CORRECT_PASSWORD = "30.09.25";

function checkPassword(input) {
    if (input === CORRECT_PASSWORD) {
        localStorage.setItem("authenticated", "true");
        showApp();
    } else {
        showHint();
    }
}
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.body.setAttribute("data-theme", savedTheme);
}

function setTheme(theme) {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}