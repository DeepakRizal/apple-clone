const dropDowns = document.querySelectorAll(".dropdown");
const search = document.querySelector(".search");
const bag = document.querySelector(".bag");
const searchButton = document.querySelector(".search-button");
const bagButton = document.querySelector(".bag-button");

dropDowns.forEach((dropdown) => {
  const link = dropdown.querySelector("a");
  const content = dropdown.querySelector(".dropdown-content");

  // Show dropdown on hovering over the link
  link.addEventListener("mouseenter", () => {
    content.style.height = "500px";
    content.style.opacity = "1";
    content.style.pointerEvents = "auto";
  });

  // Hide the dropdown when the cursor leaves the dropdown
  dropdown.addEventListener("mouseleave", () => {
    content.style.opacity = "0";
    setTimeout(() => {
      content.style.height = "0";
      content.style.pointerEvents = "none";
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
