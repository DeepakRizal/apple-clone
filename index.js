const dropDowns = document.querySelectorAll(".dropdown");
const search = document.querySelector(".search");
const bag = document.querySelector(".bag");
const searchButton = document.querySelector(".search-button");
const bagButton = document.querySelector(".bag-button");
const contentWrapper = document.querySelector(".main-content");
const tabLinks = document.querySelectorAll(".tab-link");
const tabMenu = document.querySelector(".menu");
const tabNavBar = document.querySelector(".tab-navbar");
const cross = document.querySelector(".cross");
const paralleLines = document.querySelector(".parallel-lines");
const logo = document.querySelector(".logo");
const menuBack = document.querySelector(".menu-back");
const tabNavLink = document.querySelectorAll(".tab-nav-link");

dropDowns.forEach((dropdown) => {
  const link = dropdown.querySelector("a");
  const content = dropdown.querySelector(".dropdown-content");

  // Show dropdown on hovering over the link
  link.addEventListener("mouseenter", () => {
    content.style.height = "500px";
    content.style.opacity = "1";
    content.style.pointerEvents = "auto";
    contentWrapper.classList.add("blur");
  });

  // Hide the dropdown when the cursor leaves the dropdown
  dropdown.addEventListener("mouseleave", () => {
    content.style.opacity = "0";
    setTimeout(() => {
      content.style.height = "0";
      content.style.pointerEvents = "none";
      contentWrapper.classList.remove("blur");
    }, 200);
  });
});

searchButton.addEventListener("click", (e) => {
  const searchDropdown = e.target.nextElementSibling;
  searchDropdown.classList.toggle("display");
});

bagButton.addEventListener("click", (e) => {
  const bagDropdown = e.target.nextElementSibling;

  bagDropdown.classList.toggle("display");
});

search.addEventListener("mouseleave", (e) => {
  const searchDropdown = e.target.querySelector(".search-dropdown-content");
  searchDropdown.classList.remove("display");
});

bag.addEventListener("mouseleave", (e) => {
  const bagDropdown = e.target.querySelector(".bag-dropdown-content");
  bagDropdown.classList.remove("display");
});

tabLinks.forEach((tablink) => {
  tablink.addEventListener("click", (e) => {
    e.preventDefault();
    menuBack.classList.remove("tab-none");
    const parentElement = e.target.closest(".tab-links");
    parentElement.innerHTML = "";

    const tabDropdown = e.target.nextElementSibling;
    tabDropdown.style.display = "block";
    parentElement.appendChild(tabDropdown);

    menuBack.addEventListener("click", () => {
      tabDropdown.style.display = "none";
      parentElement.innerHTML = "";
      menuBack.classList.add("tab-none");
      tabNavLink.forEach((link) => {
        parentElement.appendChild(link);
      });
    });
  });
});

// Show navigation and cross icon, hide parallel lines
tabMenu.addEventListener("click", () => {
  tabNavBar.classList.toggle("block");
  paralleLines.classList.toggle("tab-none");
  cross.classList.toggle("tab-none");
  logo.classList.toggle("tab-none");
  searchButton.classList.toggle("tab-none");
  bagButton.classList.toggle("tab-none");
});
