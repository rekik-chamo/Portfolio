const body = document.body;
const themeBtn = document.getElementById("theme");

themeBtn.addEventListener("click", () => {
    const isLight = body.classList.toggle("light");
    themeBtn.textContent = isLight ? "Dark theme" : "Light theme";
    themeBtn.style.background = isLight ? "" : "whiteSmoke";
});