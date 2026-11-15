const btn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

btn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    icon.src = "theme/moon.svg";
    icon.style.filter = "invert(1)";
    btn.style.background = "linear-gradient(90deg, #00244c 0%, #000000 53%, #002e5c 100%)"
   
  } else {
    icon.src = "theme/sun.svg";
    icon.style.filter = "";
    btn.style.background = " linear-gradient(90deg, #e0f2ff 0%, #ffffff 53%, #cfe8ff 100%)"
  }
});