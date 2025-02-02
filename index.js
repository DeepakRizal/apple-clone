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
const cardScrollForward = document.querySelector(".cards-scroll-forward");
const cardScrollBackward = document.querySelector(".cards-scroll-backward");
const cardsContainer = document.querySelector(".cards-container");
const modelsFeatures = document.querySelector(".models-with-features");
const featureBackward = document.querySelector(".feature-scroll-backward");
const featureForward = document.querySelector(".feature-scroll-forward");
const galleryItems = document.querySelector(".gallery-items");
const incentiveScrollForward = document.querySelector(
  ".incentive-scroll-forward"
);
const incentiveScrollBackward = document.querySelector(
  ".incentive-scroll-backward"
);

const accordianTitle = document.querySelectorAll(".accordian-title");
const accordianText = document.querySelectorAll(".accordian-paragraph-text ");

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

//check for small screen
const inSmallScreen = window.matchMedia("(max-width:500px)");

// Show navigation and cross icon, hide parallel lines
tabMenu.addEventListener("click", () => {
  tabNavBar.classList.toggle("block");
  paralleLines.classList.toggle("tab-none");
  cross.classList.toggle("tab-none");
  logo.classList.toggle("tab-none");
  searchButton.classList.toggle("tab-none");
  bagButton.classList.toggle("tab-none");
});

const updateButtonVisibility = () => {
  const scrollLeft = chatNavItems.scrollLeft;
  const maxScroll = chatNavItems.scrollWidth - chatNavItems.offsetWidth;

  if (scrollLeft === 0) {
    backward.style.display = "none";
    forward.style.display = "block";
  } else if (scrollLeft >= maxScroll) {
    forward.style.display = "none";
    backward.style.display = "block";
  } else {
    forward.style.display = "block";
    backward.style.display = "block";
  }
};

forward.addEventListener("click", () => {
  const scrollAmount =
    window.innerWidth <= 768 ? 200 : chatNavItems.offsetWidth;
  chatNavItems.scrollLeft += scrollAmount;
  setTimeout(updateButtonVisibility, 200); // Wait for the scroll to update
});

backward.addEventListener("click", () => {
  const scrollAmount =
    window.innerWidth <= 768 ? 200 : chatNavItems.offsetWidth;
  chatNavItems.scrollLeft -= scrollAmount;
  setTimeout(updateButtonVisibility, 200); // Wait for the scroll to update
});

// Initialize visibility on load
document.addEventListener("DOMContentLoaded", () => {
  updateButtonVisibility();
});

// Update visibility on scroll
chatNavItems.addEventListener("scroll", updateButtonVisibility);

//caraousal logic for the consider cards
cardScrollForward.addEventListener("click", () => {
  cardsContainer.scrollLeft += 300;
});

cardScrollBackward.addEventListener("click", () => {
  cardsContainer.scrollLeft -= 300;
});

// explore all models scroll logic
featureForward.addEventListener("click", () => {
  modelsFeatures.scrollLeft += 300;
});

featureBackward.addEventListener("click", () => {
  modelsFeatures.scrollLeft -= 300;
});

// incentive scroll logic
incentiveScrollForward.addEventListener("click", () => {
  galleryItems.scrollLeft += 360;
});

incentiveScrollBackward.addEventListener("click", () => {
  galleryItems.scrollLeft -= 360;
});

//accordian opening and closing functionality

accordianTitle.forEach((title) => {
  title.addEventListener("click", (e) => {
    const nearestTextElement = e.target.nextElementSibling;
    if (!nearestTextElement.classList.contains("active")) {
      nearestTextElement.classList.add("active");
      Array.from(accordianText).forEach((text) => {
        if (text.textContent !== nearestTextElement.textContent) {
          text.classList.remove("active");
        }
      });
    }
  });
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
