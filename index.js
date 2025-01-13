const dropDowns = document.querySelectorAll(".dropdown");

dropDowns.forEach((dropdown) => {
  const link = dropdown.querySelector("a");
  const content = dropdown.querySelector(".dropdown-content");

  // Set initial styles to ensure consistency
  content.style.height = "0";
  content.style.opacity = "0";
  content.style.pointerEvents = "none";
  content.style.transition = "height 0.3s ease, opacity 0.2s ease";

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
