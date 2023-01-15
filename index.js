const bodyElement = document.querySelector("body");
const menuButton = document.getElementById("toggle-menu");
const navElement = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const visilibility = navElement.getAttribute("data-open");

  if (visilibility === "false") {
    menuButton.setAttribute("aria-expanded", true);
    navElement.setAttribute("data-open", true);
    bodyElement.classList.add("disable-scroll");
  } else if (visilibility === "true") {
    menuButton.setAttribute("aria-expanded", false);
    navElement.setAttribute("data-open", false);
    bodyElement.classList.remove("disable-scroll");
  }
});
