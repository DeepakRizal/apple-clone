// Logic to handle dropdown functionality for larger screens
const dropDowns = document.querySelectorAll(".dropdown");

dropDowns.forEach((dropdown) => {
  const link = dropdown.querySelector("a");
  const content = dropdown.querySelector(".dropdown-content");

  //show dropdown on hovering over the link
  link.addEventListener("mouseenter", () => {
    content.style.height = "500px";
    content.style.opacity = "1";
    content.style.pointerEvents = "auto";
  });

  // hide the dropdown when the cursor leave the dropdown
  content.addEventListener("mouseleave", (e) => {
    content.style.opacity = "0";
    setTimeout(() => {
      content.style.height = "0";
      content.style.pointerEvents = "none";
    }, 200);
  });
});
