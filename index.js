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
const forward = document.querySelector(".forward");
const chatNavItems = document.querySelector(".chapternav-items");
const backward = document.querySelector(".backward");
const chapternav = document.querySelector(".chapternav-wrapper");

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

    tabLinks.forEach((tablink) => {
      tablink.classList.add("tab-none");
    });

    const tabDropdown = e.target.nextElementSibling;

    tabDropdown.style.display = "block";

    menuBack.addEventListener("click", () => {
      tabDropdown.style.display = "none";
      tabLinks.forEach((tablink) => {
        tablink.classList.remove("tab-none");
      });
      menuBack.classList.add("tab-none");
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

forward.addEventListener("click", () => {
  const scrollAmount = chatNavItems.offsetWidth;
  chatNavItems.scrollLeft += scrollAmount;
  forward.style.display = "none";
  chapternav.style.paddingRight = "0";
  backward.classList.remove("tab-none");
  console.log(backward);
  chapternav.style.paddingLeft = "50px";
});

backward.addEventListener("click", () => {
  const scrollAmount = chatNavItems.offsetWidth;
  chatNavItems.scrollLeft -= scrollAmount;
  chapternav.style.paddingRight = "35px";
  backward.classList.add("tab-none");
  chapternav.style.paddingLeft = "0";
  forward.style.display = "block";
});

//checking if the screen is large and if it is large then the button should not be visible
const isMediumScreen = window.matchMedia("(max-width:850px)");

function updateForwardButtonDisplay() {
  if (isMediumScreen.matches) {
    forward.style.display = "block";
  } else {
    forward.style.display = "none";
  }
}

isMediumScreen.addEventListener("change", updateForwardButtonDisplay);

// Initial check
updateForwardButtonDisplay();
