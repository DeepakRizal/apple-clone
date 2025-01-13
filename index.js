const dropDowns = document.querySelectorAll(".dropdown");

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
