let deferredPrompt;

const popup = document.getElementById("installPopup");
const installBtn = document.getElementById("installBtn");
const closeBtn = document.getElementById("closeBtn");

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;

    if (!localStorage.getItem("installDismissed")) {
        popup.classList.remove("hidden");
    }
});

installBtn.addEventListener("click", async() => {
    popup.classList.add("hidden");

    if (deferredPrompt) {
        deferredPrompt.prompt();
        await deferredPrompt.userChoice;
        deferredPrompt = null;
    }

    localStorage.setItem("installDismissed", "true");
});

closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
    localStorage.setItem("installDismissed", "true");
});