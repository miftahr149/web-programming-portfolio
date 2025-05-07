const headerNavbarButton = document.querySelector(".header__nav-pages-button");
const headerNavbar = document.getElementById("nav-pages");

headerNavbarButton.addEventListener("click", (event) => {
  /* Toggle nav-pages */
  const displayValueList = ["none", "block"];
  const displayValue = window.getComputedStyle(headerNavbar).display;
  const index = displayValueList.findIndex((str) => str == displayValue);
  headerNavbar.style.display = displayValueList[(index + 1) % displayValueList.length];

  /* set the state of the button */
  headerNavbarButton.classList.toggle("header__nav-pages-button--active");
})
